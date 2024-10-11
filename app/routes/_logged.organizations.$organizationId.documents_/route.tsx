import React, { useState } from 'react'
import { Typography, Table, Button, Upload, message, Space, Input } from 'antd'
import {
  UploadOutlined,
  DownloadOutlined,
  FileTextOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function DocumentManagementPage() {
  const { user, checkOrganizationRole } = useUserContext()
  const { organizationId } = useParams()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const {
    data: documents,
    isLoading,
    refetch,
  } = Api.document.findMany.useQuery({
    where: { case: { clientId: user?.id } },
    include: { case: true, uploader: true },
  })

  const { mutateAsync: uploadFile } = useUploadPublic()
  const { mutateAsync: createDocument } = Api.document.create.useMutation()

  const handleUpload = async (file: File) => {
    try {
      const { url } = await uploadFile({ file })
      await createDocument({
        data: {
          documentUrl: url,
          description: file.name,
          uploadDate: dayjs().format('YYYY-MM-DD'),
          caseId: documents?.[0]?.caseId || '', // Assuming the first case ID, adjust as needed
          uploaderId: user?.id || '',
        },
      })
      message.success('Document uploaded successfully')
      refetch()
    } catch (error) {
      message.error('Failed to upload document')
    }
  }

  const columns = [
    {
      title: 'Document Name',
      dataIndex: 'description',
      key: 'description',
      render: (text: string) => (
        <Text>
          <FileTextOutlined /> {text}
        </Text>
      ),
    },
    {
      title: 'Upload Date',
      dataIndex: 'uploadDate',
      key: 'uploadDate',
      render: (date: string) => dayjs(date).format('MMMM D, YYYY'),
    },
    {
      title: 'Case',
      dataIndex: ['case', 'title'],
      key: 'case',
    },
    {
      title: 'Uploader',
      dataIndex: ['uploader', 'name'],
      key: 'uploader',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Button
          icon={<DownloadOutlined />}
          onClick={() => window.open(record.documentUrl, '_blank')}
        >
          Download
        </Button>
      ),
    },
  ]

  const filteredDocuments = documents?.filter(doc =>
    doc.description?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Document Management</Title>
        <Text>
          Securely upload, download, and manage legal documents for your cases.
        </Text>

        <Space
          direction="vertical"
          size="large"
          style={{ width: '100%', marginTop: '24px' }}
        >
          <Space>
            <Upload
              beforeUpload={file => {
                handleUpload(file)
                return false
              }}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>Upload Document</Button>
            </Upload>
            <Input
              placeholder="Search documents"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ width: 200 }}
            />
          </Space>

          <Table
            columns={columns}
            dataSource={filteredDocuments}
            rowKey="id"
            loading={isLoading}
            pagination={{ pageSize: 10 }}
          />
        </Space>
      </div>
    </PageLayout>
  )
}

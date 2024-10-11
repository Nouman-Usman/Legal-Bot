import React, { useState, useEffect } from 'react'
import {
  Typography,
  Table,
  Space,
  Button,
  Modal,
  Form,
  Input,
  Select,
  message,
} from 'antd'
import {
  FileTextOutlined,
  MessageOutlined,
  EditOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CaseManagementPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const { organizationId } = useParams()
  const [cases, setCases] = useState<any[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const [selectedCase, setSelectedCase] = useState<any>(null)

  const {
    data: casesData,
    isLoading,
    refetch,
  } = Api.case.findMany.useQuery({
    where: {
      OR: [{ clientId: user?.id }, { lawyerProfile: { userId: user?.id } }],
    },
    include: {
      lawyerProfile: {
        include: { user: true },
      },
      client: true,
    },
  })

  const { mutateAsync: updateCase } = Api.case.update.useMutation()
  const { mutateAsync: createCaseNote } = Api.caseNote.create.useMutation()

  useEffect(() => {
    if (casesData) {
      setCases(casesData)
    }
  }, [casesData])

  const handleUpdateStatus = async (values: any) => {
    try {
      await updateCase({
        where: { id: selectedCase.id },
        data: { status: values.status },
      })
      await createCaseNote({
        data: {
          noteContent: values.note,
          createdDate: dayjs().format('YYYY-MM-DD'),
          caseId: selectedCase.id,
          authorId: user?.id as string,
        },
      })
      message.success('Case updated successfully')
      setIsModalVisible(false)
      refetch()
    } catch (error) {
      message.error('Failed to update case')
    }
  }

  const columns = [
    {
      title: 'Case Number',
      dataIndex: 'caseNumber',
      key: 'caseNumber',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Client',
      dataIndex: ['client', 'name'],
      key: 'clientName',
    },
    {
      title: 'Lawyer',
      dataIndex: ['lawyerProfile', 'user', 'name'],
      key: 'lawyerName',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button
            icon={<FileTextOutlined />}
            onClick={() =>
              navigate(`/organizations/${organizationId}/cases/${record.id}`)
            }
          >
            Details
          </Button>
          <Button
            icon={<MessageOutlined />}
            onClick={() =>
              navigate(
                `/organizations/${organizationId}/cases/${record.id}/messages`,
              )
            }
          >
            Messages
          </Button>
          {user?.id === record.lawyerProfile.userId && (
            <Button
              icon={<EditOutlined />}
              onClick={() => {
                setSelectedCase(record)
                setIsModalVisible(true)
              }}
            >
              Update
            </Button>
          )}
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Case Management</Title>
        <Text>
          Track the progress of your cases and stay updated on any developments.
        </Text>

        <Table
          dataSource={cases}
          columns={columns}
          rowKey="id"
          loading={isLoading}
          style={{ marginTop: 24 }}
        />

        <Modal
          title="Update Case Status"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleUpdateStatus} layout="vertical">
            <Form.Item
              name="status"
              label="Status"
              rules={[{ required: true, message: 'Please select a status' }]}
            >
              <Select>
                <Select.Option value="Open">Open</Select.Option>
                <Select.Option value="In Progress">In Progress</Select.Option>
                <Select.Option value="Closed">Closed</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="note"
              label="Note"
              rules={[{ required: true, message: 'Please enter a note' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}

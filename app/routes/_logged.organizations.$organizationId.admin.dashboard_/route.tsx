import React, { useState, useEffect } from 'react'
import {
  Typography,
  Card,
  Row,
  Col,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Statistic,
  InputNumber,
} from 'antd'
import {
  UserOutlined,
  FileProtectOutlined,
  FlagOutlined,
  BarChartOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { Prisma } from '@prisma/client'
type LawyerProfileWithUser = Prisma.LawyerProfileGetPayload<{
  include: { user: true }
}>
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AdminDashboardPage() {
  const { user } = useUserContext()
  const [lawyerModalVisible, setLawyerModalVisible] = useState(false)
  const [selectedLawyer, setSelectedLawyer] =
    useState<LawyerProfileWithUser | null>(null)
  const [form] = Form.useForm()

  const { data: lawyers, refetch: refetchLawyers } =
    Api.lawyerProfile.findMany.useQuery({
      include: { user: true },
    })
  const { data: cases } = Api.case.findMany.useQuery({})
  const { data: users } = Api.user.findMany.useQuery({})

  const { mutateAsync: updateLawyerProfile } =
    Api.lawyerProfile.update.useMutation()
  const { mutateAsync: updateUser } = Api.user.update.useMutation()

  useEffect(() => {
    if (selectedLawyer) {
      form.setFieldsValue({
        ...selectedLawyer,
        yearsOfExperience: selectedLawyer.yearsOfExperience?.toString(),
      })
    }
  }, [selectedLawyer, form])

  const handleVerifyLawyer = async (values: any) => {
    if (!selectedLawyer) return
    try {
      await updateLawyerProfile({
        where: { id: selectedLawyer.id },
        data: {
          licenseNumber: values.licenseNumber,
          barAssociation: values.barAssociation,
          yearsOfExperience: parseFloat(values.yearsOfExperience),
          specialties: values.specialties,
        },
      })
      await updateUser({
        where: { id: selectedLawyer.userId },
        data: { status: 'VERIFIED' },
      })
      setLawyerModalVisible(false)
      refetchLawyers()
    } catch (error) {
      console.error('Error verifying lawyer:', error)
    }
  }

  const lawyerColumns = [
    { title: 'Name', dataIndex: ['user', 'name'], key: 'name' },
    { title: 'Email', dataIndex: ['user', 'email'], key: 'email' },
    {
      title: 'License Number',
      dataIndex: 'licenseNumber',
      key: 'licenseNumber',
    },
    {
      title: 'Bar Association',
      dataIndex: 'barAssociation',
      key: 'barAssociation',
    },
    {
      title: 'Years of Experience',
      dataIndex: 'yearsOfExperience',
      key: 'yearsOfExperience',
    },
    { title: 'Specialties', dataIndex: 'specialties', key: 'specialties' },
    {
      title: 'Status',
      dataIndex: ['user', 'status'],
      key: 'status',
      render: (status: string) =>
        status === 'VERIFIED' ? 'Verified' : 'Pending',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record: LawyerProfileWithUser) => (
        <Button
          onClick={() => {
            setSelectedLawyer(record)
            setLawyerModalVisible(true)
          }}
          disabled={record.user.status === 'VERIFIED'}
        >
          Verify
        </Button>
      ),
    },
  ]

  const caseColumns = [
    { title: 'Case Number', dataIndex: 'caseNumber', key: 'caseNumber' },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (date: string) =>
        date ? dayjs(date).format('YYYY-MM-DD') : 'Ongoing',
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2}>Admin Dashboard</Title>
        <Text>
          Welcome, {user?.name}. Manage lawyers, cases, and view analytics here.
        </Text>

        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Total Users"
                value={users?.length || 0}
                prefix={<UserOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Verified Lawyers"
                value={
                  lawyers?.filter(l => l.user.status === 'VERIFIED').length || 0
                }
                prefix={<FileProtectOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Active Cases"
                value={cases?.filter(c => c.status === 'ACTIVE').length || 0}
                prefix={<FlagOutlined />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Case Success Rate"
                value={85}
                suffix="%"
                prefix={<BarChartOutlined />}
              />
            </Card>
          </Col>
        </Row>

        <Title level={3} style={{ marginTop: '32px' }}>
          Lawyer Verification
        </Title>
        <Table columns={lawyerColumns} dataSource={lawyers || []} rowKey="id" />

        <Title level={3} style={{ marginTop: '32px' }}>
          Case Overview
        </Title>
        <Table columns={caseColumns} dataSource={cases || []} rowKey="id" />

        <Modal
          title="Verify Lawyer"
          visible={lawyerModalVisible}
          onCancel={() => setLawyerModalVisible(false)}
          footer={null}
        >
          <Form form={form} onFinish={handleVerifyLawyer} layout="vertical">
            <Form.Item
              name="licenseNumber"
              label="License Number"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="barAssociation"
              label="Bar Association"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="yearsOfExperience"
              label="Years of Experience"
              rules={[{ required: true }]}
            >
              <InputNumber min={0} step={0.1} />
            </Form.Item>
            <Form.Item
              name="specialties"
              label="Specialties"
              rules={[{ required: true }]}
            >
              <Select
                mode="tags"
                style={{ width: '100%' }}
                placeholder="Select specialties"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Verify Lawyer
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}

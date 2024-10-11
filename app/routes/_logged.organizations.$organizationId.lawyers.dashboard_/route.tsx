import React, { useState } from 'react'
import {
  Typography,
  Card,
  Row,
  Col,
  List,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Space,
} from 'antd'
import {
  FileTextOutlined,
  MessageOutlined,
  DollarOutlined,
  EditOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function LawyerDashboardPage() {
  const { user } = useUserContext()
  const [selectedCase, setSelectedCase] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const { data: lawyerProfile } = Api.lawyerProfile.findFirst.useQuery({
    where: { userId: user?.id },
  })

  const { data: cases, refetch: refetchCases } = Api.case.findMany.useQuery({
    where: { lawyerProfileId: lawyerProfile?.id },
    include: { client: true, messages: true, documents: true, invoices: true },
  })

  const { mutateAsync: updateCase } = Api.case.update.useMutation()
  const { mutateAsync: createCaseNote } = Api.caseNote.create.useMutation()

  const handleCaseClick = caseItem => {
    setSelectedCase(caseItem)
    setIsModalVisible(true)
  }

  const handleModalClose = () => {
    setIsModalVisible(false)
    setSelectedCase(null)
    form.resetFields()
  }

  const handleUpdateCase = async values => {
    await updateCase({
      where: { id: selectedCase.id },
      data: { status: values.status },
    })
    await createCaseNote({
      data: {
        noteContent: values.note,
        createdDate: dayjs().format('YYYY-MM-DD'),
        caseId: selectedCase.id,
        authorId: user.id,
      },
    })
    refetchCases()
    handleModalClose()
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={18} xl={16}>
          <Title level={2}>Lawyer Dashboard</Title>
          <Text>
            Manage your cases, respond to client queries, and handle billing
            processes.
          </Text>

          <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
            <Col xs={24} md={12}>
              <Card title="Active Cases" extra={<a href="#">View All</a>}>
                <List
                  dataSource={cases?.filter(c => c.status !== 'Closed')}
                  renderItem={item => (
                    <List.Item
                      actions={[
                        <Button
                          key="view"
                          onClick={() => handleCaseClick(item)}
                        >
                          View
                        </Button>,
                      ]}
                    >
                      <List.Item.Meta
                        title={item.title}
                        description={`Client: ${item.client.name} | Status: ${item.status}`}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Row gutter={[0, 16]}>
                <Col span={24}>
                  <Card>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ width: '100%' }}
                    >
                      <Text strong>
                        <FileTextOutlined /> Documents to Review:{' '}
                        {cases?.reduce((acc, c) => acc + c.documents.length, 0)}
                      </Text>
                      <Text strong>
                        <MessageOutlined /> Messages:{' '}
                        {cases?.reduce(
                          (acc, c) =>
                            acc +
                            c.messages.filter(m => m.receiverId === user.id)
                              .length,
                          0,
                        )}
                      </Text>
                      <Text strong>
                        <DollarOutlined /> Pending Invoices:{' '}
                        {cases?.reduce(
                          (acc, c) =>
                            acc +
                            c.invoices.filter(i => i.status === 'Pending')
                              .length,
                          0,
                        )}
                      </Text>
                    </Space>
                  </Card>
                </Col>
                <Col span={24}>
                  <Card title="Quick Actions">
                    <Button
                      icon={<FileTextOutlined />}
                      block
                      style={{ marginBottom: '8px' }}
                    >
                      Upload Document
                    </Button>
                    <Button
                      icon={<MessageOutlined />}
                      block
                      style={{ marginBottom: '8px' }}
                    >
                      Send Message
                    </Button>
                    <Button icon={<DollarOutlined />} block>
                      Create Invoice
                    </Button>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          <Modal
            title="Case Details"
            visible={isModalVisible}
            onCancel={handleModalClose}
            footer={null}
            width={800}
          >
            {selectedCase && (
              <Form form={form} onFinish={handleUpdateCase} layout="vertical">
                <Title level={4}>{selectedCase.title}</Title>
                <Text>Client: {selectedCase.client.name}</Text>
                <Form.Item
                  name="status"
                  label="Status"
                  initialValue={selectedCase.status}
                >
                  <Select>
                    <Select.Option value="Open">Open</Select.Option>
                    <Select.Option value="In Progress">
                      In Progress
                    </Select.Option>
                    <Select.Option value="Pending">Pending</Select.Option>
                    <Select.Option value="Closed">Closed</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="note" label="Add Note">
                  <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<EditOutlined />}
                  >
                    Update Case
                  </Button>
                </Form.Item>
              </Form>
            )}
          </Modal>
        </Col>
      </Row>
    </PageLayout>
  )
}

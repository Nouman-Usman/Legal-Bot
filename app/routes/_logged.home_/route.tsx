import React from 'react'
import { Typography, Card, List, Space, Button, Row, Col, Badge } from 'antd'
import {
  FileOutlined,
  MessageOutlined,
  SearchOutlined,
  RobotOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ClientHomePage() {
  const { user } = useUserContext()
  const navigate = useNavigate()

  const { data: recentCases } = Api.case.findMany.useQuery({
    where: { clientId: user?.id },
    orderBy: { updatedAt: 'desc' },
    take: 5,
    include: { caseNotes: true, messages: true },
  })

  const { data: recommendedLawyers } = Api.lawyerProfile.findMany.useQuery({
    take: 3,
    orderBy: { yearsOfExperience: 'desc' },
    include: { user: true },
  })

  const { data: unreadMessages } = Api.message.findMany.useQuery({
    where: { receiverId: user?.id, case: { clientId: user?.id } },
    orderBy: { createdAt: 'desc' },
    take: 5,
  })

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Welcome to Your Legal Dashboard</Title>
        <Paragraph>
          Stay informed about your legal matters and access essential tools.
        </Paragraph>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={16}>
            <Card title="Recent Case Activities">
              <List
                dataSource={recentCases}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={item.title}
                      description={`Case Number: ${item.caseNumber}`}
                    />
                    <Text>
                      Last updated:{' '}
                      {dayjs(item.updatedAt).format('MMMM D, YYYY')}
                    </Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card title="Recommended Lawyers">
              <List
                dataSource={recommendedLawyers}
                renderItem={lawyer => (
                  <List.Item>
                    <List.Item.Meta
                      title={lawyer.user.name}
                      description={`Specialties: ${lawyer.specialties}`}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col xs={24} md={12}>
            <Card title="Notifications">
              <List
                dataSource={unreadMessages}
                renderItem={message => (
                  <List.Item>
                    <Badge dot>
                      <Text>{message.content}</Text>
                    </Badge>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card title="Quick Actions">
              <Space direction="vertical" style={{ width: '100%' }}>
                <Button
                  icon={<FileOutlined />}
                  onClick={() =>
                    navigate('/organizations/:organizationId/documents')
                  }
                  block
                >
                  Upload Documents
                </Button>
                <Button
                  icon={<RobotOutlined />}
                  onClick={() =>
                    navigate('/organizations/:organizationId/chatbot')
                  }
                  block
                >
                  Chat with AI Assistant
                </Button>
                <Button
                  icon={<SearchOutlined />}
                  onClick={() =>
                    navigate('/organizations/:organizationId/search')
                  }
                  block
                >
                  Search Legal Resources
                </Button>
                <Button
                  icon={<MessageOutlined />}
                  onClick={() =>
                    navigate('/organizations/:organizationId/cases')
                  }
                  block
                >
                  View All Cases
                </Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}

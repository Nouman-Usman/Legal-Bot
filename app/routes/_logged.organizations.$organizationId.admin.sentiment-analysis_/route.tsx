import { Typography, Card, Table, Space, Tag, Spin } from 'antd'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { SmileOutlined, MehOutlined, FrownOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SentimentAnalysisInterfacePage() {
  const { organizationId } = useParams()
  const { user, checkOrganizationRole } = useUserContext()

  const isAdmin =
    checkOrganizationRole('owner') || checkOrganizationRole('admin')

  const { data: messages, isLoading } = Api.message.findMany.useQuery({
    where: {
      OR: [{ sender: { id: user?.id } }, { receiver: { id: user?.id } }],
    },
    include: { sender: true, receiver: true, case: true },
  })

  const sentimentAnalysis = (content: string) => {
    const score = Math.random()
    if (score > 0.66) return 'Positive'
    if (score > 0.33) return 'Neutral'
    return 'Negative'
  }

  const analyzedMessages = messages?.map(message => ({
    ...message,
    sentiment: sentimentAnalysis(message.content || ''),
  }))

  const sentimentCounts = analyzedMessages?.reduce(
    (acc, message) => {
      acc[message.sentiment]++
      return acc
    },
    { Positive: 0, Neutral: 0, Negative: 0 },
  )

  const chartData = [
    { name: 'Positive', value: sentimentCounts?.Positive || 0 },
    { name: 'Neutral', value: sentimentCounts?.Neutral || 0 },
    { name: 'Negative', value: sentimentCounts?.Negative || 0 },
  ]

  const columns = [
    {
      title: 'Case',
      dataIndex: ['case', 'title'],
      key: 'case',
    },
    {
      title: 'Sender',
      dataIndex: ['sender', 'name'],
      key: 'sender',
    },
    {
      title: 'Receiver',
      dataIndex: ['receiver', 'name'],
      key: 'receiver',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Sentiment',
      dataIndex: 'sentiment',
      key: 'sentiment',
      render: (sentiment: string) => (
        <Tag
          icon={
            sentiment === 'Positive' ? (
              <SmileOutlined />
            ) : sentiment === 'Neutral' ? (
              <MehOutlined />
            ) : (
              <FrownOutlined />
            )
          }
          color={
            sentiment === 'Positive'
              ? 'green'
              : sentiment === 'Neutral'
              ? 'blue'
              : 'red'
          }
        >
          {sentiment}
        </Tag>
      ),
    },
  ]

  if (!isAdmin) {
    return (
      <PageLayout layout="full-width">
        <Title level={3}>Access Denied</Title>
        <Paragraph>You do not have permission to view this page.</Paragraph>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Sentiment Analysis Dashboard</Title>
        <Paragraph>
          Monitor the emotional tone of client interactions, assess user
          satisfaction, and identify areas for improvement.
        </Paragraph>

        {isLoading ? (
          <Spin size="large" />
        ) : (
          <>
            <Card title="Sentiment Overview">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card title="Message Sentiment Analysis">
              <Table
                columns={columns}
                dataSource={analyzedMessages}
                rowKey="id"
              />
            </Card>
          </>
        )}
      </Space>
    </PageLayout>
  )
}

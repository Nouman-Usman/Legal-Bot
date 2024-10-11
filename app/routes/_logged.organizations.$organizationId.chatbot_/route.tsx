import React, { useState, useEffect } from 'react'
import { Typography, Input, Button, List, Card, Spin, message } from 'antd'
import { SendOutlined, FileTextOutlined, UserOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { Prisma } from '@prisma/client'

export default function ChatbotInterfacePage() {
  const [messages, setMessages] = useState<
    Array<{ content: string; sender: string }>
  >([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [documents, setDocuments] = useState<
    Array<{ title: string; url: string }>
  >([])
  const [lawyers, setLawyers] = useState<
    Array<{ name: string; specialty: string }>
  >([])

  const { user } = useUserContext()
  const { organizationId } = useParams()

  const generateText = Api.ai.generateText.useMutation()
  const { data: lawyerProfiles, isLoading: isLoadingLawyers } =
    Api.lawyerProfile.findMany.useQuery({
      include: { user: true },
    })

  useEffect(() => {
    if (lawyerProfiles) {
      const formattedLawyers = lawyerProfiles.map(profile => ({
        name: profile.user.name || 'Unknown',
        specialty: profile.specialties || 'General',
      }))
      setLawyers(formattedLawyers)
    }
  }, [lawyerProfiles])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    setIsLoading(true)
    setMessages(prev => [...prev, { content: input, sender: 'user' }])

    try {
      const response = await generateText.mutateAsync({ prompt: input })
      setMessages(prev => [
        ...prev,
        { content: response.answer, sender: 'bot' },
      ])

      // Simulating document suggestions (replace with actual API call if available)
      const suggestedDocs = [
        { title: 'Legal Rights Overview', url: '#' },
        { title: 'Common Legal Procedures', url: '#' },
      ]
      setDocuments(suggestedDocs)
    } catch (error) {
      message.error('Failed to get a response. Please try again.')
    } finally {
      setIsLoading(false)
      setInput('')
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Legal Chatbot Assistant</Title>
        <Paragraph>
          Ask your legal questions and receive simplified advice. You'll also
          get suggestions for relevant documents and lawyer recommendations.
        </Paragraph>

        <div
          style={{
            height: '400px',
            overflowY: 'auto',
            border: '1px solid #d9d9d9',
            borderRadius: '4px',
            padding: '10px',
            marginBottom: '20px',
          }}
        >
          <List
            dataSource={messages}
            renderItem={item => (
              <List.Item
                style={{
                  justifyContent:
                    item.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <Card
                  style={{
                    maxWidth: '70%',
                    backgroundColor:
                      item.sender === 'user' ? '#e6f7ff' : '#f0f0f0',
                  }}
                >
                  <Text>{item.content}</Text>
                </Card>
              </List.Item>
            )}
          />
        </div>

        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            onPressEnter={handleSendMessage}
            placeholder="Type your legal question here..."
            disabled={isLoading}
            style={{ marginRight: '10px' }}
          />
          <Button
            type="primary"
            onClick={handleSendMessage}
            icon={<SendOutlined />}
            disabled={isLoading}
          >
            Send
          </Button>
        </div>

        {isLoading && (
          <Spin style={{ display: 'block', marginBottom: '20px' }} />
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card title="Suggested Documents" style={{ width: '48%' }}>
            <List
              dataSource={documents}
              renderItem={item => (
                <List.Item>
                  <FileTextOutlined style={{ marginRight: '8px' }} />
                  <a href={item.url}>{item.title}</a>
                </List.Item>
              )}
            />
          </Card>

          <Card title="Recommended Lawyers" style={{ width: '48%' }}>
            <List
              loading={isLoadingLawyers}
              dataSource={lawyers}
              renderItem={item => (
                <List.Item>
                  <UserOutlined style={{ marginRight: '8px' }} />
                  <Text>
                    {item.name} - {item.specialty}
                  </Text>
                </List.Item>
              )}
            />
          </Card>
        </div>
      </div>
    </PageLayout>
  )
}

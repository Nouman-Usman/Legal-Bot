import React, { useState } from 'react'
import {
  Typography,
  Input,
  Select,
  Button,
  Card,
  List,
  Rate,
  Space,
  Row,
  Col,
} from 'antd'
import { SearchOutlined, BookOutlined, UserOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Search } = Input
const { Option } = Select
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SearchandDiscoveryPage() {
  const [searchType, setSearchType] = useState<'articles' | 'lawyers'>(
    'articles',
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [location, setLocation] = useState('')
  const [minRating, setMinRating] = useState(0)

  const { data: articles, isLoading: isLoadingArticles } =
    Api.document.findMany.useQuery({
      where: {
        description: {
          contains: searchQuery,
          mode: 'insensitive',
        },
      },
    })

  const { data: lawyers, isLoading: isLoadingLawyers } =
    Api.lawyerProfile.findMany.useQuery({
      where: {
        OR: [
          { user: { name: { contains: searchQuery, mode: 'insensitive' } } },
          { specialties: { contains: searchQuery, mode: 'insensitive' } },
        ],
        specialties: specialization
          ? { contains: specialization, mode: 'insensitive' }
          : undefined,
        barAssociation: location
          ? { contains: location, mode: 'insensitive' }
          : undefined,
      },
      include: { user: true },
    })

  const handleSearch = (value: string) => {
    setSearchQuery(value)
  }

  const renderArticleItem = (item: any) => (
    <List.Item>
      <Card>
        <Space direction="vertical">
          <Text strong>{item.description}</Text>
          <Text type="secondary">Uploaded on: {item.uploadDate}</Text>
          <a href={item.documentUrl} target="_blank" rel="noopener noreferrer">
            View Document
          </a>
        </Space>
      </Card>
    </List.Item>
  )

  const renderLawyerItem = (item: any) => (
    <List.Item>
      <Card>
        <Space direction="vertical">
          <Text strong>{item.user?.name}</Text>
          <Text>Specialties: {item.specialties}</Text>
          <Text>Bar Association: {item.barAssociation}</Text>
          <Text>Years of Experience: {item.yearsOfExperience}</Text>
          <Rate disabled defaultValue={4} /> {/* Placeholder rating */}
        </Space>
      </Card>
    </List.Item>
  )

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={14} xl={12}>
          <Space
            direction="vertical"
            size="large"
            style={{ width: '100%', marginTop: '2rem' }}
          >
            <Title level={2}>Search and Discovery</Title>
            <Text>
              Search for legal articles, laws, precedents, or find lawyers that
              meet your criteria.
            </Text>

            <Select
              style={{ width: '100%' }}
              value={searchType}
              onChange={value => setSearchType(value)}
            >
              <Option value="articles">Legal Articles</Option>
              <Option value="lawyers">Lawyers</Option>
            </Select>

            <Search
              placeholder={`Search for ${searchType}`}
              onSearch={handleSearch}
              enterButton={<SearchOutlined />}
              size="large"
            />

            {searchType === 'lawyers' && (
              <Space direction="vertical" style={{ width: '100%' }}>
                <Input
                  placeholder="Specialization"
                  value={specialization}
                  onChange={e => setSpecialization(e.target.value)}
                  prefix={<BookOutlined />}
                />
                <Input
                  placeholder="Location"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  prefix={<UserOutlined />}
                />
                <Select
                  style={{ width: '100%' }}
                  placeholder="Minimum Rating"
                  value={minRating}
                  onChange={value => setMinRating(value)}
                >
                  {[0, 1, 2, 3, 4, 5].map(rating => (
                    <Option key={rating} value={rating}>
                      {rating === 0
                        ? 'Any'
                        : `${rating} Star${rating > 1 ? 's' : ''}`}
                    </Option>
                  ))}
                </Select>
              </Space>
            )}

            {searchType === 'articles' ? (
              <List
                loading={isLoadingArticles}
                itemLayout="vertical"
                dataSource={articles}
                renderItem={renderArticleItem}
              />
            ) : (
              <List
                loading={isLoadingLawyers}
                itemLayout="vertical"
                dataSource={lawyers}
                renderItem={renderLawyerItem}
              />
            )}
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}

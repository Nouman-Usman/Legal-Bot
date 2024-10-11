import React from 'react'
import { Typography, Card, Row, Col, Rate, Space, Button } from 'antd'
import {
  UserOutlined,
  StarOutlined,
  ExperimentOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function LawyerRecommendationsPage() {
  const { organizationId } = useParams()
  const navigate = useNavigate()

  const { data: lawyerProfiles, isLoading } =
    Api.lawyerProfile.findMany.useQuery({
      include: { user: true },
    })

  const handleSelectLawyer = (lawyerId: string) => {
    navigate(`/organizations/${organizationId}/cases/new?lawyerId=${lawyerId}`)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Recommended Lawyers</Title>
        <Paragraph>
          Browse through our list of recommended lawyers based on your legal
          needs. Compare their profiles, experience, and ratings to make an
          informed decision.
        </Paragraph>

        {isLoading ? (
          <Text>Loading lawyer profiles...</Text>
        ) : (
          <Row gutter={[16, 16]}>
            {lawyerProfiles?.map(profile => (
              <Col xs={24} sm={12} md={8} key={profile.id}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={`${profile.user?.name}'s profile picture`}
                      src={
                        profile.profilePictureUrl ||
                        profile.user?.pictureUrl ||
                        'https://i.imgur.com/ZdJSK3Y.jpeg'
                      }
                      style={{ height: 200, objectFit: 'cover' }}
                    />
                  }
                  actions={[
                    <Button
                      key="select"
                      type="primary"
                      onClick={() => handleSelectLawyer(profile.id)}
                    >
                      Select Lawyer
                    </Button>,
                  ]}
                >
                  <Card.Meta
                    title={profile.user?.name}
                    description={
                      <Space direction="vertical">
                        <Text>
                          <UserOutlined /> License: {profile.licenseNumber}
                        </Text>
                        <Text>
                          <ExperimentOutlined /> Experience:{' '}
                          {profile.yearsOfExperience?.toString()} years
                        </Text>
                        <Text>Specialties: {profile.specialties}</Text>
                        <Text>Bar Association: {profile.barAssociation}</Text>
                        <Rate disabled defaultValue={4} />{' '}
                        {/* Placeholder rating */}
                      </Space>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </PageLayout>
  )
}

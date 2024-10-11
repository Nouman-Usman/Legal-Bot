import React, { useState } from 'react'
import {
  Typography,
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  message,
  Upload,
} from 'antd'
import {
  UserOutlined,
  IdcardOutlined,
  BankOutlined,
  ClockCircleOutlined,
  TagsOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import type { UploadFile } from 'antd/es/upload/interface'
const { Title, Paragraph } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function LawyerProfileSetupPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const { mutateAsync: uploadFile } = useUploadPublic()
  const { mutateAsync: createLawyerProfile } =
    Api.lawyerProfile.create.useMutation()

  const onFinish = async (values: any) => {
    try {
      let profilePictureUrl = ''
      if (fileList.length > 0 && fileList[0].originFileObj) {
        const result = await uploadFile({ file: fileList[0].originFileObj })
        profilePictureUrl = result.url
      }

      await createLawyerProfile({
        data: {
          userId: user?.id || '',
          licenseNumber: values.licenseNumber,
          barAssociation: values.barAssociation,
          yearsOfExperience: values.yearsOfExperience,
          specialties: values.specialties.join(', '),
          profilePictureUrl,
        },
      })

      message.success('Lawyer profile created successfully')
      navigate('/organizations/:organizationId/lawyers/dashboard')
    } catch (error) {
      message.error('Failed to create lawyer profile')
    }
  }

  const handleFileChange = (info: any) => {
    setFileList(info.fileList.slice(-1))
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Lawyer Profile Setup</Title>
        <Paragraph>
          Set up your professional profile to showcase your expertise and
          attract potential clients.
        </Paragraph>

        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="licenseNumber"
            label="License Number"
            rules={[
              { required: true, message: 'Please enter your license number' },
            ]}
          >
            <Input
              prefix={<IdcardOutlined />}
              placeholder="Enter your license number"
            />
          </Form.Item>

          <Form.Item
            name="barAssociation"
            label="Bar Association"
            rules={[
              { required: true, message: 'Please enter your bar association' },
            ]}
          >
            <Input
              prefix={<BankOutlined />}
              placeholder="Enter your bar association"
            />
          </Form.Item>

          <Form.Item
            name="yearsOfExperience"
            label="Years of Experience"
            rules={[
              {
                required: true,
                message: 'Please enter your years of experience',
              },
            ]}
          >
            <InputNumber
              prefix={<ClockCircleOutlined />}
              min={0}
              max={100}
              style={{ width: '100%' }}
              placeholder="Enter your years of experience"
            />
          </Form.Item>

          <Form.Item
            name="specialties"
            label="Specialties"
            rules={[
              {
                required: true,
                message: 'Please select at least one specialty',
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Select your specialties"
              prefix={<TagsOutlined />}
            >
              <Option value="criminal">Criminal Law</Option>
              <Option value="civil">Civil Law</Option>
              <Option value="corporate">Corporate Law</Option>
              <Option value="family">Family Law</Option>
              <Option value="intellectual">Intellectual Property</Option>
            </Select>
          </Form.Item>

          <Form.Item name="profilePicture" label="Profile Picture">
            <Upload
              fileList={fileList}
              onChange={handleFileChange}
              beforeUpload={() => false}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload Profile Picture</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit Profile
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}

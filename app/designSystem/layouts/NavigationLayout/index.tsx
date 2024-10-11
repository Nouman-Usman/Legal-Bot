// import { useUserContext } from '@/core/context'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { Flex } from 'antd'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Mobilebar } from './components/Mobilebar'
import { Topbar } from './components/Topbar'
import { NavigationItem } from './types'
import { useUserContext } from '~/core/context'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useNavigate()
  const pathname = useLocation().pathname
  const params: Record<string, string> = useParams()

  const { organization } = useUserContext()

  const goTo = (url: string) => {
    router(url)
  }

  const items: NavigationItem[] = [
    {
      key: '/home',
      label: 'Client Home Page',
      position: 'leftbar',

      onClick: () => goTo('/home'),
    },

    {
      key: '/organizations/:organizationId/chatbot',
      label: 'Chatbot Interface',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/chatbot'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/lawyers/profile-setup',
      label: 'Lawyer Profile Setup',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/lawyers/profile-setup'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/lawyers/dashboard',
      label: 'Lawyer Dashboard',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/lawyers/dashboard'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/admin/dashboard',
      label: 'Admin Dashboard',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/admin/dashboard'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/admin/sentiment-analysis',
      label: 'Sentiment Analysis Interface',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/admin/sentiment-analysis'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/search',
      label: 'Search and Discovery',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/search'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/documents',
      label: 'Document Management',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/documents'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/lawyer-recommendations',
      label: 'Lawyer Recommendations Page',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/lawyer-recommendations'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/cases',
      label: 'Case Management Page',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/cases'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/pricing',
      label: 'Pricing',

      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/pricing'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },
  ]

  const itemsVisible = items
    .filter(item => item.isVisible !== false)
    .map(item => ({
      key: item.key,
      label: item.label,
      position: item.position,
      onClick: item.onClick,
    }))

  const itemsTopbar = itemsVisible.filter(item => item.position === 'topbar')

  const itemsLeftbar = itemsVisible.filter(item => item.position === 'leftbar')

  const itemsLeftbottom = itemsVisible.filter(
    item => item.position === 'leftbar-bottom',
  )

  const itemsMobile = itemsVisible

  let keySelected = pathname

  Object.entries(params).forEach(([key, value]) => {
    keySelected = keySelected.replace(`/${value}`, `/:${key}`)
  })

  return (
    <>
      <Topbar keySelected={keySelected} items={itemsTopbar} />

      <Mobilebar keySelected={keySelected} items={itemsMobile} />

      <Flex flex={1} style={{ overflowY: 'hidden' }}>
        <Leftbar
          keySelected={keySelected}
          items={itemsLeftbar}
          itemsBottom={itemsLeftbottom}
        />

        <Flex flex={1} vertical style={{ overflowY: 'hidden' }}>
          {children}
        </Flex>
      </Flex>
    </>
  )
}

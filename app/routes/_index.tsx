import {
  EditOutlined,
  MessageOutlined,
  TeamOutlined,
  FileProtectOutlined,
  RobotOutlined,
  DollarOutlined,
} from '@ant-design/icons'
import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `AI-Powered Legal Advice`,
      description: `Get instant preliminary legal guidance through our advanced AI chatbot, available 24/7.`,
      icon: <RobotOutlined />,
    },
    {
      heading: `Connect with Expert Lawyers`,
      description: `Easily find and connect with qualified lawyers specializing in your specific legal needs.`,
      icon: <TeamOutlined />,
    },
    {
      heading: `Streamlined Case Management`,
      description: `Manage your legal matters efficiently with our user-friendly dashboard and document handling system.`,
      icon: <FileProtectOutlined />,
    },
    {
      heading: `Affordable Legal Services`,
      description: `Access quality legal assistance at competitive rates, making justice more accessible for all.`,
      icon: <DollarOutlined />,
    },
    {
      heading: `Secure Communication`,
      description: `Communicate confidentially with your lawyer through our encrypted messaging platform.`,
      icon: <MessageOutlined />,
    },
    {
      heading: `Legal Document Templates`,
      description: `Access a wide range of customizable legal document templates to save time and money.`,
      icon: <EditOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Amina Khan`,
      designation: `Small Business Owner`,
      content: `Apna Waqeel saved my business! Their AI chatbot helped me understand my legal rights, and I found an amazing lawyer who resolved my trademark dispute quickly and affordably.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Raheel Ahmed`,
      designation: `Freelance Developer`,
      content: `As a freelancer, I was always worried about contract disputes. Apna Waqeel's document templates and expert advice have given me the confidence to take on bigger projects without fear.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Fatima Malik`,
      designation: `Homeowner`,
      content: `I was facing eviction due to a misunderstanding with my landlord. Apna Waqeel connected me with a property lawyer who resolved the issue in days. I'm grateful for their quick and affordable service.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `Hassan Raza`,
      designation: `Tech Startup Founder`,
      content: `Apna Waqeel's AI-powered legal advice saved us thousands in initial consultation fees. We now use their platform for all our legal needs, from contracts to IP protection.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Zainab Ali`,
      designation: `Single Mother`,
      content: `I never thought I could afford a lawyer for my custody case. Apna Waqeel not only found me an compassionate attorney but also helped me understand my rights. They truly democratize legal access.`,
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    {
      name: `Imran Qureshi`,
      designation: `Restaurant Owner`,
      content: `The legal compliance for my new restaurant seemed overwhelming until I found Apna Waqeel. Their step-by-step guidance and expert lawyer matching made the process smooth and stress-free.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `How It Works`,
      link: `#how-it-works`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Basic`,
      description: `Essential legal support for individuals`,
      monthly: 999,
      yearly: 9999,
      features: [
        `AI chatbot access`,
        `Document templates`,
        `1 lawyer consultation/month`,
      ],
    },
    {
      title: `Pro`,
      description: `Comprehensive legal coverage for growing businesses`,
      monthly: 2999,
      yearly: 29999,
      features: [
        `All Basic features`,
        `Unlimited lawyer consultations`,
        `Priority support`,
        `Custom document drafting`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Tailored legal solutions for large organizations`,
      monthly: 9999,
      yearly: 99999,
      features: [
        `All Pro features`,
        `Dedicated legal team`,
        `On-site consultations`,
        `Legal risk assessment`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does Apna Waqeel's AI chatbot provide legal advice?`,
      answer: `Our AI chatbot uses advanced natural language processing to understand your legal query and provide preliminary guidance based on Pakistani law. It's trained on a vast database of legal information and case studies, offering instant, 24/7 support for basic legal questions.`,
    },
    {
      question: `How do you ensure the quality and credibility of lawyers on your platform?`,
      answer: `All lawyers on Apna Waqeel are vetted for their qualifications, experience, and standing with the Pakistan Bar Council. We regularly review their performance and client feedback to maintain high-quality legal services.`,
    },
    {
      question: `Is my information secure on Apna Waqeel?`,
      answer: `Absolutely. We use bank-grade encryption for all data transmission and storage. Our platform complies with international data protection standards to ensure your legal matters remain confidential.`,
    },
    {
      question: `Can Apna Waqeel handle complex legal cases?`,
      answer: `Yes, Apna Waqeel can handle a wide range of legal matters, from simple consultations to complex litigation. For intricate cases, we connect you with specialized lawyers who have expertise in the relevant area of law.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Describe Your Legal Need`,
      description: `Use our AI chatbot or simple form to explain your legal situation.`,
    },
    {
      heading: `Get Matched with a Lawyer`,
      description: `Our system connects you with the most suitable lawyer for your case.`,
    },
    {
      heading: `Consult and Strategize`,
      description: `Discuss your case securely through our platform and develop a legal strategy.`,
    },
    {
      heading: `Resolve Your Legal Matter`,
      description: `Work with your lawyer to navigate the legal process and achieve your desired outcome.`,
    },
  ]

  const painPoints = [
    {
      emoji: `💰`,
      title: `High legal fees preventing access to justice`,
    },
    {
      emoji: `🕰️`,
      title: `Long waiting times to consult with a lawyer`,
    },
    {
      emoji: `😕`,
      title: `Confusion about legal rights and processes`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Justice at Your Fingertips: Empowering Pakistanis with Accessible Legal Solutions`}
        subtitle={`Apna Waqeel connects you with expert lawyers and AI-powered legal advice, making quality legal services affordable and accessible to all Pakistanis.`}
        buttonText={`Get Started`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/vn502c-apnawaqeel-vOBm`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={10000}
            suffixText={`from satisfied clients`}
          />
        }
      />
      <LandingSocialProof
        logos={logos}
        title={`Trusted by Leading Organizations`}
      />
      <LandingPainPoints
        title={`78% of Pakistanis Struggle to Access Legal Help - We're Changing That`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Path to Justice Made Simple`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Revolutionizing Legal Access in Pakistan`}
        subtitle={`Discover how Apna Waqeel's innovative features make legal services more accessible, affordable, and efficient for all Pakistanis.`}
        features={features}
      />
      <LandingTestimonials
        title={`Real Stories of Justice Served`}
        subtitle={`See how Apna Waqeel has helped thousands of Pakistanis overcome legal challenges and achieve justice.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Affordable Legal Protection for Every Pakistani`}
        subtitle={`Choose a plan that fits your needs and budget. Invest in your peace of mind today.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Your Legal Questions, Answered`}
        subtitle={`Find quick answers to common questions about using Apna Waqeel for your legal needs.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Take the First Step Towards Justice`}
        subtitle={`Don't let legal issues hold you back. Join thousands of Pakistanis who have found solutions with Apna Waqeel.`}
        buttonText={`Start Your Legal Journey`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}

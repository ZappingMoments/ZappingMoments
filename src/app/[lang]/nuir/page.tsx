import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageForResearch from '@/images/telefonemau.png'
import imageForImplementation from '@/images/loja.png'
import imageForPlanning from '@/images/esplanadaponte.png'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-black before:content-['/_'] after:text-black after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-black sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function AppPurpose() {
  return (
    <Section title="Break Free from Mindless Scrolling" image={{ src: imageForResearch }}>
      <div className="space-y-6 text-base text-black">
        <p>
          NUIR is a revolutionary mobile app in development designed to <strong className="font-semibold text-black">combat digital addiction</strong> and transform how we interact with both technology and the world around us.
        </p>
        <p>
          Our research shows that the average person spends over 4 hours daily on their smartphone, with much of this time lost to mindless scrolling. NUIR helps users break this cycle by creating meaningful incentives to engage with the real world.
        </p>
        <p>
          The app uses advanced <strong className="font-semibold text-black">behavioral psychology</strong> and gamification techniques to guide users away from passive consumption and toward authentic, face-to-face interactions that enhance quality of life.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-black">
        Key app features
      </h3>
      <TagList className="mt-4">
        <TagListItem>Social meetup incentives</TagListItem>
        <TagListItem>Local business discovery</TagListItem>
        <TagListItem>Community engagement rewards</TagListItem>
      </TagList>
    </Section>
  )
}

function RealConnections() {
  return (
    <Section title="Fostering Real-World Connections" image={{ src: imageForPlanning, shape: 1 }}>
      <div className="space-y-6 text-base text-black">
        <p>
          Unlike conventional social media that often isolates users in digital bubbles, NUIR actively <strong className="font-semibold text-black">promotes real-world gatherings</strong> at local venues, creating opportunities for authentic human connection.
        </p>
        <p>
          The app helps users connect with real friends at partner businesses where they can engage in activities together, from book discussions at cafes to sports events at local venues.
        </p>
        <p>
          NUIR prioritizes <strong className="font-semibold text-black">authentic interactions</strong> with people you already know, facilitating more meaningful relationships that endure beyond digital interfaces.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Simão Duarte Ferreira', role: 'Beta Tester' }}
        className="mt-12"
      >
        Since joining the NUIR beta program, I've cut my daily screen time by 40% and made more genuine connections in three months than I did in the past two years on traditional social media.
      </Blockquote>
    </Section>
  )
}

function BusinessGrowth() {
  return (
    <Section title="Empowering Local Businesses" image={{ src: imageForImplementation, shape: 2, grayscale: false }}>
      <div className="space-y-6 text-base text-black">
        <p>
          NUIR creates a unique <strong className="font-semibold text-black">win-win ecosystem</strong> where reducing screen addiction directly translates to increased foot traffic and revenue for local businesses who partner with our platform.
        </p>
        <p>
          Partner businesses gain access to our engaged user base through a targeted discovery system that matches their offerings with users' interests. When users choose to connect in these venues, businesses benefit from increased patronage and visibility.
        </p>
        <p>
          Our innovative <strong className="font-semibold text-black">loyalty program</strong> rewards users for real-world interactions at partner locations, creating a sustainable growth cycle that benefits both individuals seeking genuine connections and businesses looking to cultivate loyal customers.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-black">
        Business benefits
      </h3>
      <List className="mt-8">
        <ListItem title="Increased Foot Traffic">
          Partner businesses see an average 27% increase in new customers through our platform's targeted user-business matching system.
        </ListItem>
        <ListItem title="Enhanced Customer Engagement">
          The app facilitates deeper customer connections through hosted events and meetups, increasing repeat visits and brand loyalty.
        </ListItem>
        <ListItem title="Actionable Analytics">
          Business partners receive valuable demographic and behavioral insights while respecting user privacy, enabling more effective community engagement strategies.
        </ListItem>
      </List>
    </Section>
  )
}

function AppPrinciples() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our principles"
        title="New Urban Innovation Revolution"
        eyebrowColor="black"
        titleColor="black"
      >
        <p className="text-black">
          NUIR is built on core principles that prioritize human wellbeing, authentic connection, and community prosperity in an age of increasing digital isolation.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Digital Mindfulness" className="text-black font-bold">
            We believe technology should enhance rather than diminish human experience, serving as a tool for connection rather than a substitute for it.
          </GridListItem>
          <GridListItem title="Community Vitality" className="text-black font-bold">
            Our platform strengthens local economies by redirecting attention and resources from global tech platforms to neighborhood businesses.
          </GridListItem>
          <GridListItem title="Authentic Engagement" className="text-black font-bold">
            We prioritize quality of interaction over quantity, designing features that foster deeper connections rather than superficial engagement metrics.
          </GridListItem>
          <GridListItem title="User Autonomy" className="text-black font-bold">
            We empower users with insights about their digital habits and practical tools to align their technology use with their personal values and goals.
          </GridListItem>
          <GridListItem title="Inclusive Design" className="text-black font-bold">
            Our app is accessible to diverse users, with features that account for varying needs, preferences, and comfort levels with social interaction.
          </GridListItem>
          <GridListItem title="Ethical Data Use" className="text-black font-bold">
            We maintain the highest standards of data privacy and security, using information only to improve user experience, never for manipulation or surveillance.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'NUIR - Break Free from Mindless Scrolling',
  description:
    'NUIR is a revolutionary app helping users break free from mindless scrolling while creating real-world connections and helping local businesses grow.',
}

export default function NUIR() {
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <div style={{ 
          backgroundColor: '#fb923c', 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '100%',
          zIndex: -1,
          borderRadius: 40
        }} />
        
        <div style={{ paddingTop: '2px', paddingBottom: '100px' }}>
          <PageIntro eyebrow="NUIR" title="The App That Brings People Together">
            <p>
              NUIR is a revolutionary mobile application currently in development that addresses digital addiction by transforming mindless scrolling time into meaningful real-world connections. By incentivizing face-to-face interactions at local businesses, our platform creates a vibrant ecosystem where people reconnect with their communities and local economies thrive.
            </p>
          </PageIntro>

          <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
            <AppPurpose />
            <RealConnections />
            <BusinessGrowth />
          </div>

          <AppPrinciples />
        </div>
      </div>

      <ContactSection />
    </div>
  )
} 
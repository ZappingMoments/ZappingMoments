import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageFamily from '@/images/equipa.jpg'
import imageMeeting from '@/images/mercado.jpg'
import imageWhiteboard from '@/images/analise.jpg'

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
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Research & Analysis" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin by conducting comprehensive <strong className="font-semibold text-neutral-950">market research</strong> and analysis to understand your business and the untapped potential of the outdoor audience market in your region.
        </p>
        <p>
          Our team works closely with you to gather data on local demographics, outdoor recreational patterns, and consumer behaviors. We identify the unique opportunities that exist for businesses of all sizes to connect with people who spend time outdoors.
        </p>
        <p>
          Through surveys, interviews, and data analysis, we develop a clear picture of the <strong className="font-semibold text-neutral-950">market landscape</strong> and create a foundation for a tailored strategy that aligns with your business goals.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Market analysis</TagListItem>
        <TagListItem>Consumer surveys</TagListItem>
        <TagListItem>Demographic studies</TagListItem>
        <TagListItem>Competitor research</TagListItem>
        <TagListItem>Opportunity mapping</TagListItem>
        <TagListItem>Business assessment</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Strategic Planning" image={{ src: imageFamily, shape: 1, grayscale: false }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on our research findings, we develop a <strong className="font-semibold text-neutral-950">comprehensive strategy</strong> tailored to your business size and goals, designed to help you effectively reach and engage the outdoor audience market.
        </p>
        <p>
          We identify the most effective channels, messages, and touchpoints to connect with outdoor enthusiasts in ways that resonate with their lifestyle and values. Our strategies are designed to be sustainable, scalable, and adaptable to seasonal changes.
        </p>
        <p>
          Each strategic plan includes clear <strong className="font-semibold text-neutral-950">performance metrics</strong> and implementation timelines, ensuring that we can measure success and make data-driven adjustments as needed.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Zapping Moments' strategic approach helped us tap into the outdoor recreation market in ways we never thought possible for a business our size.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Implementation & Growth" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We support your business through the <strong className="font-semibold text-neutral-950">implementation</strong> of your strategic plan, providing guidance and resources to ensure successful execution at every stage.
        </p>
        <p>
          Our approach focuses on creating a dynamic commercial environment where businesses don't just operate in isolation but become part of an <strong className="font-semibold text-neutral-950">interconnected community</strong>. This ecosystem approach helps all participants benefit from increased foot traffic and customer engagement.
        </p>
        <p>
          We continuously monitor results, measure impact, and refine strategies to ensure <strong className="font-semibold text-neutral-950">sustainable growth</strong> and adaptation to changing market conditions, helping transform your city or region into a thriving hub of outdoor-oriented commerce.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Implementation Support">
          We provide hands-on guidance throughout the execution process, ensuring your team has the tools and knowledge needed for success.
        </ListItem>
        <ListItem title="Community Building">
          We help develop partnerships with complementary businesses to create a thriving ecosystem that benefits all participants.
        </ListItem>
        <ListItem title="Ongoing Optimization">
          Through regular performance reviews and market analysis, we continuously refine strategies to maximize results and adapt to changing trends.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        {/* Removing the GridPattern component */}
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Connecting Business and Community"
      >
        <p>
          We believe in creating sustainable business growth through authentic connections with the outdoor community. Our values guide our approach to developing strategies that benefit businesses, consumers, and local environments alike.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Research-Driven">
            Our strategies are built on thorough research and data analysis, ensuring that every recommendation is backed by solid evidence and market insights.
          </GridListItem>
          <GridListItem title="Community-Focused">
            We prioritize solutions that strengthen local communities and create vibrant commercial environments where businesses and consumers thrive together.
          </GridListItem>
          <GridListItem title="Adaptable">
            We understand that each business and region has unique characteristics, and we customize our approach to leverage these distinct qualities.
          </GridListItem>
          <GridListItem title="Transparent">
            We maintain open communication throughout our process, providing clear insights into our methodologies and the reasoning behind our recommendations.
          </GridListItem>
          <GridListItem title="Sustainable">
            We develop strategies that promote long-term growth and foster positive relationships with the outdoor community and natural environment.
          </GridListItem>
          <GridListItem title="Innovative">
            We continuously explore new approaches to connecting businesses with outdoor enthusiasts, embracing emerging trends and technologies.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We develop strategic plans to help businesses reach outdoor audiences, creating thriving commercial environments that benefit entire communities.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We develop a strategic plan aimed at boosting small, medium, and large businesses by reaching a growing audience of people who spend time outdoors. Through studies, surveys, and market research, our goal is to create tailored solutions for each business, making each city or region a more dynamic and lively place.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}

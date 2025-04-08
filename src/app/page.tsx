import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import imageFamily from '@/images/miradouro.png'
import { type MDXEntry, loadArticles } from '@/lib/mdx'

const clients = [
  ['Mail Smirk', logoMailSmirk],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We work with amazing partners
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Our Mission"
        title="Helping people reconnect and build meaningful relationships."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As a people-centric company, we focus on humans as social beings who need real interaction—something 
          that has been gradually fading away in our digital world.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageFamily}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
                grayscale={false}
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Social Experiences">
              We create opportunities for people to go out more, connecting with others 
              through meaningful social experiences designed for mental well-being.
            </ListItem>
            <ListItem title="Community Building">
              Our platform helps build communities of like-minded individuals who want to 
              engage in real-world interactions rather than just digital connections.
            </ListItem>
            <ListItem title="Green Initiatives">
              By encouraging people to engage in collective activities, we contribute to 
              a greener, better world through shared experiences and reduced individual 
              environmental footprints.
            </ListItem>
            <ListItem title="Human-Centered Design">
              Everything we create is built around human needs for authentic connection 
              and social interaction, helping people break free from digital isolation.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a Portuguese startup helping people reconnect and build meaningful relationships in a digital world.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-6 sm:mt-8 md:mt-12">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-normal leading-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            Reconnecting people in a digital world, based in Portugal.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a Portuguese startup built around a concept we began exploring in 2021: 
            people are spending too much time at home, and most of their social interactions 
            have been reduced to just a handful of clicks.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Services />

      <ContactSection />
    </>
  )
}

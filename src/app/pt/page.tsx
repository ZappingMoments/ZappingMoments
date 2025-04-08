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
            Trabalhamos com parceiros incríveis
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
        eyebrow="Nossa Missão"
        title="Ajudando pessoas a reconectarem-se e construírem relações significantes."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Como empresa centrada nas pessoas, focamo-nos nos humanos como seres sociais que necessitam de interação real—algo 
          que tem vindo a desvanecer gradualmente no nosso mundo digital.
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
            <ListItem title="Experiências Sociais">
              Criamos oportunidades para as pessoas saírem mais, conectando-se com outros 
              através de experiências sociais significativas projetadas para o bem-estar mental.
            </ListItem>
            <ListItem title="Construção de Comunidade">
              Nossa plataforma ajuda a construir comunidades de pessoas com interesses semelhantes que desejam 
              participar em interações no mundo real em vez de apenas conexões digitais.
            </ListItem>
            <ListItem title="Iniciativas Verdes">
              Ao incentivar as pessoas a participarem em atividades coletivas, contribuímos para 
              um mundo mais verde e melhor através de experiências compartilhadas e redução da pegada 
              ambiental individual.
            </ListItem>
            <ListItem title="Design Centrado no Humano">
              Tudo o que criamos é construído em torno das necessidades humanas de conexão autêntica 
              e interação social, ajudando as pessoas a libertarem-se do isolamento digital.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Somos uma startup portuguesa ajudando pessoas a reconectarem-se e construírem relações significantes num mundo digital.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-6 sm:mt-8 md:mt-12">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-normal leading-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            Reconectando pessoas num mundo digital, com sede em Portugal.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Somos uma startup portuguesa construída em torno de um conceito que começámos a explorar em 2021: 
            as pessoas estão passando muito tempo em casa, e a maioria das suas interações sociais 
            foram reduzidas a apenas alguns cliques.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Services />

      <ContactSection />
    </>
  )
} 
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
    <Section title="Pesquisa & Análise" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Começamos por realizar uma <strong className="font-semibold text-neutral-950">pesquisa de mercado</strong> e análise abrangente para compreender o seu negócio e o potencial inexplorado do mercado de público ao ar livre na sua região.
        </p>
        <p>
          A nossa equipa trabalha em estreita colaboração consigo para recolher dados sobre demografia local, padrões de recreação ao ar livre e comportamentos dos consumidores. Identificamos as oportunidades únicas que existem para empresas de todas as dimensões se conectarem com pessoas que passam tempo ao ar livre.
        </p>
        <p>
          Através de inquéritos, entrevistas e análise de dados, desenvolvemos uma imagem clara do <strong className="font-semibold text-neutral-950">panorama do mercado</strong> e criamos uma base para uma estratégia personalizada que se alinha com os objetivos do seu negócio.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Incluído nesta fase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Análise de mercado</TagListItem>
        <TagListItem>Inquéritos ao consumidor</TagListItem>
        <TagListItem>Estudos demográficos</TagListItem>
        <TagListItem>Pesquisa da concorrência</TagListItem>
        <TagListItem>Mapeamento de oportunidades</TagListItem>
        <TagListItem>Avaliação do negócio</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Planeamento Estratégico" image={{ src: imageFamily, grayscale: false }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Com base nos resultados da nossa pesquisa, desenvolvemos uma <strong className="font-semibold text-neutral-950">estratégia abrangente</strong> adaptada à dimensão e objetivos do seu negócio, projetada para ajudá-lo a alcançar e envolver efetivamente o mercado de público ao ar livre.
        </p>
        <p>
          Identificamos os canais, mensagens e pontos de contacto mais eficazes para se conectar com entusiastas do ar livre de maneiras que ressoem com seu estilo de vida e valores. Nossas estratégias são projetadas para serem sustentáveis, escaláveis e adaptáveis às mudanças sazonais.
        </p>
        <p>
          Cada plano estratégico inclui <strong className="font-semibold text-neutral-950">métricas de desempenho</strong> claras e cronogramas de implementação, garantindo que possamos medir o sucesso e fazer ajustes baseados em dados conforme necessário.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO da Unseal' }}
        className="mt-12"
      >
        A abordagem estratégica da Zapping Moments ajudou-nos a alcançar o mercado de recreação ao ar livre de maneiras que nunca pensámos ser possível para um negócio do nosso tamanho.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Implementação & Crescimento" image={{ src: imageMeeting }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Apoiamos o seu negócio durante a <strong className="font-semibold text-neutral-950">implementação</strong> do seu plano estratégico, fornecendo orientação e recursos para garantir uma execução bem-sucedida em cada etapa.
        </p>
        <p>
          Nossa abordagem concentra-se em criar um ambiente comercial dinâmico onde as empresas não operam apenas isoladamente, mas tornam-se parte de uma <strong className="font-semibold text-neutral-950">comunidade interconectada</strong>. Esta abordagem de ecossistema ajuda todos os participantes a beneficiarem do aumento do tráfego pedonal e do envolvimento do cliente.
        </p>
        <p>
          Monitorizamos continuamente os resultados, medimos o impacto e refinamos estratégias para garantir um <strong className="font-semibold text-neutral-950">crescimento sustentável</strong> e adaptação às mudanças nas condições do mercado, ajudando a transformar a sua cidade ou região num próspero centro de comércio orientado para o ar livre.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Incluído nesta fase
      </h3>
      <List className="mt-8">
        <ListItem title="Suporte à Implementação">
          Fornecemos orientação prática durante todo o processo de execução, garantindo que sua equipa tenha as ferramentas e o conhecimento necessários para o sucesso.
        </ListItem>
        <ListItem title="Construção de Comunidade">
          Ajudamos a desenvolver parcerias com empresas complementares para criar um ecossistema próspero que beneficia todos os participantes.
        </ListItem>
        <ListItem title="Otimização Contínua">
          Através de análises regulares de desempenho e análise de mercado, refinamos continuamente as estratégias para maximizar resultados e adaptar-nos às tendências em mudança.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Nossos valores"
        title="Conectando Negócios e Comunidade"
      >
        <p>
          Acreditamos em criar crescimento empresarial sustentável através de conexões autênticas com a comunidade ao ar livre. Nossos valores orientam nossa abordagem para desenvolver estratégias que beneficiam empresas, consumidores e ambientes locais.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Baseado em Pesquisa">
            Nossas estratégias são construídas com base em pesquisa minuciosa e análise de dados, garantindo que cada recomendação seja apoiada por evidências sólidas e insights de mercado.
          </GridListItem>
          <GridListItem title="Focado na Comunidade">
            Priorizamos soluções que fortalecem as comunidades locais e criam ambientes comerciais vibrantes onde empresas e consumidores prosperam juntos.
          </GridListItem>
          <GridListItem title="Adaptável">
            Entendemos que cada negócio e região tem características únicas, e personalizamos nossa abordagem para aproveitar essas qualidades distintas.
          </GridListItem>
          <GridListItem title="Transparente">
            Mantemos uma comunicação aberta durante todo o nosso processo, fornecendo insights claros sobre nossas metodologias e o raciocínio por trás de nossas recomendações.
          </GridListItem>
          <GridListItem title="Sustentável">
            Desenvolvemos estratégias que promovem o crescimento a longo prazo e fomentam relações positivas com a comunidade ao ar livre e o ambiente natural.
          </GridListItem>
          <GridListItem title="Inovador">
            Exploramos continuamente novas abordagens para conectar empresas com entusiastas do ar livre, abraçando tendências e tecnologias emergentes.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Nosso Processo',
  description:
    'Desenvolvemos planos estratégicos para ajudar empresas a alcançar públicos ao ar livre, criando ambientes comerciais prósperos que beneficiam comunidades inteiras.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Nosso processo" title="Como trabalhamos">
        <p>
          Desenvolvemos um plano estratégico com o objetivo de impulsionar pequenas, médias e grandes empresas, alcançando um público crescente de pessoas que passam tempo ao ar livre. Através de estudos, inquéritos e pesquisa de mercado, nosso objetivo é criar soluções personalizadas para cada negócio, tornando cada cidade ou região um lugar mais dinâmico e vivo.
        </p>
      </PageIntro>

      <Discover />

      <Build />

      <Deliver />

      <Values />

      <ContactSection />
    </>
  )
} 
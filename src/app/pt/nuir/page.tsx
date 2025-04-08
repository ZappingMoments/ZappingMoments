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
    <Section title="Liberte-se do Scroll Sem Fim" image={{ src: imageForResearch }}>
      <div className="space-y-6 text-base text-black">
        <p>
          NUIR é uma aplicação móvel revolucionária em desenvolvimento projetada para <strong className="font-semibold text-black">combater o vício digital</strong> e transformar a forma como interagimos com a tecnologia e o mundo ao nosso redor.
        </p>
        <p>
          Nossa pesquisa mostra que a pessoa média passa mais de 4 horas por dia no smartphone, com grande parte desse tempo perdido em scroll sem propósito. O NUIR ajuda os utilizadores a quebrar este ciclo criando incentivos significativos para se envolverem com o mundo real.
        </p>
        <p>
          A aplicação utiliza <strong className="font-semibold text-black">psicologia comportamental</strong> avançada e técnicas de gamificação para guiar os utilizadores do consumo passivo para interações autênticas face a face que melhoram a qualidade de vida.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-black">
        Principais funcionalidades
      </h3>
      <TagList className="mt-4">
        <TagListItem>Incentivos para encontros sociais</TagListItem>
        <TagListItem>Descoberta de negócios locais</TagListItem>
        <TagListItem>Recompensas por envolvimento comunitário</TagListItem>
      </TagList>
    </Section>
  )
}

function RealConnections() {
  return (
    <Section title="Fomentando Conexões no Mundo Real" image={{ src: imageForPlanning }}>
      <div className="space-y-6 text-base text-black">
        <p>
          Ao contrário das redes sociais convencionais que frequentemente isolam os utilizadores em bolhas digitais, o NUIR ativamente <strong className="font-semibold text-black">promove encontros no mundo real</strong> em locais parceiros, criando oportunidades para conexões humanas autênticas.
        </p>
        <p>
          A aplicação ajuda os utilizadores a conectarem-se com amigos reais em empresas parceiras onde podem participar em atividades juntos, desde discussões de livros em cafés até eventos desportivos em locais parceiros.
        </p>
        <p>
          O NUIR prioriza <strong className="font-semibold text-black">interações autênticas</strong> com pessoas que já conhece, facilitando relacionamentos mais significativos que perduram além das interfaces digitais.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Simão Duarte Ferreira', role: 'Beta Tester' }}
        className="mt-12"
      >
        Desde que me juntei ao programa beta do NUIR, reduzi meu tempo de ecrã diário em 40% e fiz mais conexões genuínas em três meses do que nos últimos dois anos nas redes sociais tradicionais.
      </Blockquote>
    </Section>
  )
}

function BusinessGrowth() {
  return (
    <Section title="Capacitando Negócios Locais" image={{ src: imageForImplementation, grayscale: false }}>
      <div className="space-y-6 text-base text-black">
        <p>
          O NUIR cria um <strong className="font-semibold text-black">ecossistema win-win único</strong> onde a redução do vício em ecrãs traduz-se diretamente em aumento de tráfego pedonal e receita para os negócios locais que se associam à nossa plataforma.
        </p>
        <p>
          As empresas parceiras ganham acesso à nossa base de utilizadores engajada através de um sistema de descoberta direcionado que combina suas ofertas com os interesses dos utilizadores. Quando os utilizadores escolhem conectar-se nestes locais, as empresas beneficiam de maior movimento e visibilidade.
        </p>
        <p>
          Nosso inovador <strong className="font-semibold text-black">programa de fidelidade</strong> recompensa os utilizadores por interações no mundo real em locais parceiros, criando um ciclo de crescimento sustentável que beneficia tanto indivíduos que procuram conexões genuínas quanto empresas que desejam cultivar clientes fiéis.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-black">
        Benefícios para empresas
      </h3>
      <List className="mt-8">
        <ListItem title="Aumento do Tráfego Pedonal">
          Empresas parceiras veem um aumento médio de 27% em novos clientes através do nosso sistema de correspondência utilizador-empresa.
        </ListItem>
        <ListItem title="Maior Envolvimento com Clientes">
          A aplicação facilita conexões mais profundas com clientes através de eventos e encontros organizados, aumentando visitas repetidas e fidelidade à marca.
        </ListItem>
        <ListItem title="Análises Acionáveis">
          Parceiros de negócio recebem insights valiosos sobre demografia e comportamento respeitando a privacidade dos utilizadores, permitindo estratégias mais eficazes de envolvimento comunitário.
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
        eyebrow="Nossos princípios"
        title="Nova Revolução de Inovação Urbana"
        eyebrowColor="black"
        titleColor="black"
      >
        <p className="text-black">
          O NUIR é construído sobre princípios fundamentais que priorizam o bem-estar humano, conexão autêntica e prosperidade comunitária numa era de crescente isolamento digital.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Consciência Digital" className="text-black font-bold">
            Acreditamos que a tecnologia deve melhorar e não diminuir a experiência humana, servindo como uma ferramenta para conexão em vez de um substituto.
          </GridListItem>
          <GridListItem title="Vitalidade Comunitária" className="text-black font-bold">
            Nossa plataforma fortalece economias locais redirecionando atenção e recursos das plataformas tecnológicas globais para negócios de bairro.
          </GridListItem>
          <GridListItem title="Envolvimento Autêntico" className="text-black font-bold">
            Priorizamos qualidade de interação sobre quantidade, projetando funcionalidades que fomentam conexões mais profundas em vez de métricas superficiais de envolvimento.
          </GridListItem>
          <GridListItem title="Autonomia do Utilizador" className="text-black font-bold">
            Capacitamos os utilizadores com insights sobre seus hábitos digitais e ferramentas práticas para alinhar seu uso de tecnologia com seus valores e objetivos pessoais.
          </GridListItem>
          <GridListItem title="Design Inclusivo" className="text-black font-bold">
            Nossa aplicação é acessível a utilizadores diversos, com funcionalidades que consideram diferentes necessidades, preferências e níveis de conforto com interação social.
          </GridListItem>
          <GridListItem title="Uso Ético de Dados" className="text-black font-bold">
            Mantemos os mais altos padrões de privacidade e segurança de dados, usando informações apenas para melhorar a experiência do utilizador, nunca para manipulação ou vigilância.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'NUIR - Liberte-se do Scroll Sem Fim',
  description:
    'NUIR é uma aplicação revolucionária que ajuda os utilizadores a libertarem-se do scroll sem fim enquanto cria conexões no mundo real e ajuda negócios locais a crescerem.',
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
          bottom: 0,
          zIndex: -1,
        }} />
        <PageIntro 
          eyebrow="NUIR" 
          title="Nova Revolução de Inovação Urbana"
        >
          <p className="text-black">
            Uma aplicação revolucionária que ajuda as pessoas a libertarem-se do vício digital enquanto cria conexões significativas no mundo real e impulsiona negócios locais.
          </p>
        </PageIntro>

        <AppPurpose />

        <RealConnections />

        <BusinessGrowth />

        <AppPrinciples />

        <ContactSection />
      </div>
    </div>
  )
} 
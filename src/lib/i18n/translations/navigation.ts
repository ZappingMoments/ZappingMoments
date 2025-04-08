import type { Language } from '../config'

type NavigationTranslations = {
  [K in Language]: {
    company: string
    about: string
    process: string
    nuir: string
    contactUs: string
    newsletter: {
      title: string
      description: string
      placeholder: string
      submit: string
    }
  }
}

export const navigation: NavigationTranslations = {
  en: {
    company: 'Company',
    about: 'About',
    process: 'Process',
    nuir: 'NUIR',
    contactUs: 'Contact us',
    newsletter: {
      title: 'Sign up for our newsletter',
      description: 'Subscribe to get the latest design news, articles, resources and inspiration.',
      placeholder: 'Email address',
      submit: 'Submit'
    }
  },
  pt: {
    company: 'Empresa',
    about: 'Sobre Nós',
    process: 'Processo',
    nuir: 'NUIR',
    contactUs: 'Contacte-nos',
    newsletter: {
      title: 'Subscreva a nossa newsletter',
      description: 'Subscreva para receber as últimas notícias de design, artigos, recursos e inspiração.',
      placeholder: 'Endereço de email',
      submit: 'Enviar'
    }
  }
} 
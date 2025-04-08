import { type Metadata } from 'next'
import { TranslationWrapper } from '@/components/TranslationWrapper'

export default function Home() {
  return (
    <TranslationWrapper>
      {({ t }) => (
        <div>Home Page</div>
      )}
    </TranslationWrapper>
  )
}

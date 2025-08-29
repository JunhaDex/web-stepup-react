import ContentArea from '@/components/layouts/ContentArea.tsx'
import Intro from '@/pages/Home/Intro.tsx'
import Career from '@/pages/Home/Career.tsx'

export default function HomePage() {
  return (
    <ContentArea>
      <Intro />
      <Career />
    </ContentArea>
  )
}

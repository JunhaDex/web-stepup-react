import { CareerService } from '@/services/career.service.ts'
import CareerCard from '@/components/display/CareerCard.tsx'
import { useEffect, useState } from 'react'
import type { CareerItem, PortfolioItem } from '@/types/career.type.ts'
import { Building2, GraduationCap, MapPin } from 'lucide-react'
import PortfolioCard from '@/components/display/PortfolioCard.tsx'

export default function Career() {
  const careerSvc = new CareerService()
  const [items, setItems] = useState<CareerItem[]>([])
  const [ports, setPorts] = useState<PortfolioItem[]>([])
  useEffect(() => {
    const mounted = async () => {
      setItems(await careerSvc.getCareerItemList())
      setPorts(await careerSvc.getPortfolioItemList())
    }
    mounted()
  }, [])
  return (
    <main className="home-detail text-text-1">
      <h2 className="text-2xl font-bold text-text-2 mb-4">소개</h2>
      <p className="leading-7">
        저는 5년 이상의 실무 경험을 지닌 웹 개발자이며, 주로 React / Vue 를
        활용한 프론트엔드 개발에 집중하고 있습니다. 지금까지 4개 이상의 웹 /
        모바일 프로젝트를 초기 설계부터 안정적인 운영 단계까지 주도적으로
        개발하고 성장시킨 경험이 있습니다. 단순히 주어진 기능을 구현하는 것을
        넘어 그 기능을 사용할 사람들의 경험에 대해 생각합니다. 이러한 신념으로
        제품에 기능을 하나씩 더할 때, 그 제품은 사람과 기술을, 사람과 사람을
        연결하는 디지털 공간이 됩니다. 이 과정은 함께할 때 더 큰 가치를 만들어
        낼 수 있다고 생각합니다. 저는 다양한 국적, 다양한 전문성을 가진 사람들과
        함께 가치를 만든 경험이 있습니다. 동료들과 함께 소통하며 협력하는 개발을
        지향합니다.
      </p>
      <ol className="summary-list mb-6">
        <li>
          <MapPin size={16} />
          <span>
            <b>Location:</b>&nbsp;서울 강남 & 경기도 판교
          </span>
        </li>
        <li>
          <Building2 size={16} />
          <span>
            <b>Experience:</b>&nbsp;5+ 이상의 전문 웹 개발 경험
          </span>
        </li>
        <li>
          <GraduationCap size={16} />
          <span>
            <b>Education:</b>&nbsp;B.S. Computer Science, Brigham Young
            University Hawaii
          </span>
        </li>
      </ol>
      <h2 className="text-2xl font-bold text-text-2 mb-4">경력 사항</h2>
      <div className="career-list grid gap-4 mb-6">
        {items.map((item) => (
          <CareerCard key={item.id} item={item} />
        ))}
      </div>
      <h2 className="text-2xl font-bold text-text-2 mb-4">포트폴리오</h2>
      <div className="career-list grid gap-4">
        {ports.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}

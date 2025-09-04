import { CareerService } from '@/services/career.service.ts'
import CareerCard from '@/components/display/CareerCard.tsx'
import { useEffect, useState } from 'react'
import type { CareerItem } from '@/types/career.type.ts'

export default function Career() {
  const careerSvc = new CareerService()
  const [items, setItems] = useState<CareerItem[]>([])
  useEffect(() => {
    const mounted = async () => {
      setItems(await careerSvc.getCareerItemList())
    }
    mounted()
  }, [])
  return (
    <main className="home-detail">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">소개</h2>
      <p>
        프론트엔드 개발자 김준하 입니다. 대규모 플랫폼 개발과 팀 리딩 경험을
        보유하고 있습니다. 3년 이상 파트장 및 팀장으로써 개발 프로세스 개선과
        팀의 성장을 주도했으며, 프론트엔드 이외에도 백엔드, AWS / GCP 등 인프라,
        글로벌 협업까지 폭넓은 경험을 가지고 있습니다.
      </p>
      <ol className="summary-list mb-6">
        <li>
          Vue / React + Typescript 를 활용하여 대규모 플랫폼 서비스를 다수
          개발한 경험이 있습니다.
        </li>
        <li>
          웹 이외에도 자바스크립트 기반의 크로스 플랫폼 모바일 앱을 개발하여
          배포한 경험이 있습니다. (AOS, iOS)
        </li>
        <li>
          코드 품질유지 및 생산성 향상을 위해 모노레포를 도입하고 정착시켰으며,
          팀 내 Git-Flow 를 활용한 브랜치 전략을 수립하고, CI/CD 파이프라인을
          구축하여 지속적인 개발과 운영을 원활하게 진행한 경험이 있습니다.
        </li>
        <li>
          유창한 영어 능력을 바탕으로 해외 개발자와의 협업을 하거나 최신 기술
          트렌드를 빠르게 학습하여 프로젝트에 적용한 경험이 있습니다.
        </li>
        <li>
          프론트엔드 이외에도 Node.js, 자바 스프링, PHP 를 사용한 백엔드 로직을
          개발 및 배포하고, MySQL, PostgreSQL, MongoDB, Redis 등의 DBMS 를
          연동하며, 컨테이너 기반 (ECS, Cloud Run 및 k8s)의 인프라 환경을 운용한
          경험이 있습니다.
        </li>
      </ol>
      <h2 className="text-2xl font-bold text-gray-800 mb-8">기술 스텍</h2>

      <h2 className="text-2xl font-bold text-gray-800 mb-8">경력 사항</h2>
      <div className="career-list">
        {items.map((item) => (
          <CareerCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}

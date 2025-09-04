import type { CareerItem } from '@/types/career.type.ts'

interface CareerCardProps {
  item: CareerItem
}

export default function CareerCard({ item }: CareerCardProps) {
  const teamAndPosition = ` | ${item.organization.dept} | ${item.organization.position}`
  const positionLine = (
    <span>
      <b>{item.organization.name}</b>
      {teamAndPosition}
    </span>
  )
  return (
    <div className="career-card">
      <div className="period">{item.timeframe}</div>
      <div className="about">
        <div className="title">{item.title}</div>
        <div className="position">{positionLine}</div>
        <div className="description">{item.description}</div>
      </div>
    </div>
  )
}

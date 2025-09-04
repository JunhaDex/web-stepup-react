import type { ElementType } from 'react'
import type { CareerItem } from '@/types/career.type.ts'
import { ArrowUpRight } from 'lucide-react'

interface CareerCardProps {
  item: CareerItem
}

export default function CareerCard({ item }: CareerCardProps) {
  const Element: ElementType = item.link ? 'a' : 'div'
  const linkProps = item.link ? { href: item.link, target: '_blank' } : {}
  const teamAndPosition = ` | ${item.organization.dept} | ${item.organization.position}`
  const positionLine = (
    <span>
      <b>{item.organization.name}</b>
      {teamAndPosition}
    </span>
  )
  return (
    <Element className="career-card" {...linkProps}>
      <div className="period mb-2">{item.timeframe}</div>
      <div className="about">
        <div className="title text-lg mb-1">
          {item.title}
          {item.link && (
            <i className="icon-ext">
              <ArrowUpRight size={16} />
            </i>
          )}
        </div>
        <div className="position mb-2 text-sm">{positionLine}</div>
        <div className="description text-sm text-text-2">
          {item.description}
        </div>
      </div>
    </Element>
  )
}

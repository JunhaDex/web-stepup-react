import type { ElementType } from 'react'
import type { PortfolioItem } from '@/types/career.type.ts'
import { ArrowUpRight } from 'lucide-react'

interface PortfolioCardProps {
  item: PortfolioItem
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const Element: ElementType = item.link ? 'a' : 'div'
  const linkProps = item.link ? { href: item.link, target: '_blank' } : {}
  return (
    <Element className="career-card" {...linkProps}>
      <div className="about">
        <div className="title text-lg mb-2">
          {item.title}
          {item.link && (
            <i className="icon-ext">
              <ArrowUpRight size={16} />
            </i>
          )}
        </div>
        <div className="tag-list mb-2 text-sm">
          {item.tags.map((tag) => (
            <span className="badge tag">{tag}</span>
          ))}
        </div>
        <div className="description text-sm text-text-2">
          {item.description}
        </div>
      </div>
    </Element>
  )
}

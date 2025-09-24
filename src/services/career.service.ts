import type { CareerItem, PortfolioItem } from '@/types/career.type.ts'

export class CareerService {
  async getCareerItemList(): Promise<CareerItem[]> {
    const experience = (await import('@/assets/static/work_experience_ko.json'))
      .default as CareerItem[]
    return experience.sort((a, b) => a.order - b.order)
  }

  async getPortfolioItemList(): Promise<PortfolioItem[]> {
    const portfolio = (await import('@/assets/static/portfolio_ko.json'))
      .default as PortfolioItem[]
    return portfolio.sort((a, b) => a.order - b.order)
  }
}

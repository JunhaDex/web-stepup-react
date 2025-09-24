export interface CareerItem {
  id: number
  title: string
  timeframe: string
  link?: string
  order: number
  organization: {
    name: string
    dept: string
    position: string
  }
  description: string
}

export interface PortfolioItem {
  id: number
  title: string
  link?: string
  order: number
  tags: string[]
  description: string
}

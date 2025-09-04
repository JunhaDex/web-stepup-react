import type { CareerItem } from '@/types/career.type.ts'

export class CareerService {
  async getCareerItemList(): Promise<CareerItem[]> {
    const experience = (await import('@/assets/static/work_experience_ko.json'))
      .default as CareerItem[]
    return experience.sort((a, b) => a.order - b.order)
  }
}

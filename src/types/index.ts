export interface TeamMember {
  _id: string
  name: string
  title: string
  image: any
  availability: string
  bio?: string
  specialisation?: string[]
  slug: { current: string }
}

export interface Testimonial {
  _id: string
  name: string
  content: string
  rating: number
  isAnonymous?: boolean
}

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt: string
  mainImage: any
  categories: string[]
  isFeatured?: boolean
  body?: any[]
  author: {
    name: string
    bio: string
    image: any
  }
}
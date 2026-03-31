export interface NavLink {
  label: string
  href: string
}

export interface TeamMember {
  _id: string
  name: string
  title: string
  image: any
  availability: string
  slug: { current: string }
}

export interface Testimonial {
  _id: string
  name: string
  content: string
  rating: number
}

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt: string
  mainImage: any
  categories: string[]
  author: {
    name: string
    bio: string
    image: any
  }
}
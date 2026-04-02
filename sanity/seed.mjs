import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

try {
  const env = readFileSync(join(__dirname, '..', '.env.local'), 'utf-8')
  env.split('\n').forEach((line) => {
    const [k, ...v] = line.split('=')
    if (k && v.length) process.env[k.trim()] = v.join('=').trim()
  })
} catch { console.log('Using existing env vars') }

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const teamMembers = [
  { _type: 'teamMember', name: 'Dr. Prerna Aggarwal', slug: { _type: 'slug', current: 'dr-prerna-aggarwal' }, title: 'Clinical Psychologist', availability: 'Mon–Fri, 10am–6pm', bio: 'Dr. Prerna specialises in anxiety, depression, and trauma-informed care with over 8 years of clinical experience.', specialisation: ['Anxiety', 'Depression', 'Trauma'], order: 1 },
  { _type: 'teamMember', name: 'Dr. Ananya Roy', slug: { _type: 'slug', current: 'dr-ananya-roy' }, title: 'Counseling Therapist', availability: 'Tue–Sat, 11am–7pm', bio: 'Dr. Ananya works with couples and individuals navigating relationship challenges and personal growth.', specialisation: ['Couples Therapy', 'Relationship Issues', 'Self-esteem'], order: 2 },
  { _type: 'teamMember', name: 'Dr. Rahul Mehta', slug: { _type: 'slug', current: 'dr-rahul-mehta' }, title: 'Psychotherapist', availability: 'Mon–Thu, 9am–5pm', bio: 'Dr. Rahul focuses on neurodivergent individuals and LGBTQ+ affirming therapy practices.', specialisation: ['ADHD', 'Neurodivergence', 'LGBTQ+ Affirming'], order: 3 },
]

const testimonials = [
  { _type: 'testimonial', name: 'Meera S.', content: 'Coming to The Therapy Park was the best decision I made for myself. My therapist truly listened without judgment and helped me work through things I had buried for years. I finally feel like myself again.', rating: 5, isAnonymous: false, order: 1 },
  { _type: 'testimonial', name: 'Anonymous', content: 'I was skeptical about therapy but The Therapy Park changed that completely. The process felt natural, safe and deeply personal. I never felt like a checkbox — I felt seen.', rating: 5, isAnonymous: true, order: 2 },
  { _type: 'testimonial', name: 'Arjun K.', content: 'Being able to choose my therapist made all the difference. I finally found someone who understood my background and identity. Three months in and I am healing.', rating: 5, isAnonymous: false, order: 3 },
  { _type: 'testimonial', name: 'Anonymous', content: 'The online sessions are just as good as being in the room. My therapist made every session feel personal and safe. Highly recommend to anyone hesitating to start.', rating: 5, isAnonymous: true, order: 4 },
]

const blogs = [
  {
    _type: 'blog', title: 'Understanding Anxiety: When Worry Becomes Too Much',
    slug: { _type: 'slug', current: 'understanding-anxiety-when-worry-becomes-too-much' },
    author: { name: 'Dr. Prerna Aggarwal', bio: 'Clinical Psychologist with 8 years of experience.' },
    categories: ['Anxiety', 'Mental Health'], publishedAt: '2024-03-15T10:00:00Z', isFeatured: true,
    excerpt: 'Anxiety shows up in ways we often mistake for something else entirely. Here is how to recognise it and what you can do.',
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Anxiety is one of the most common mental health challenges people face, yet it remains widely misunderstood. Many people live with anxiety for years without realising what they are experiencing has a name — and more importantly, that it can be addressed.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', children: [{ _type: 'span', _key: 's2', text: 'What Does Anxiety Actually Feel Like?' }] },
      { _type: 'block', _key: 'b3', style: 'normal', children: [{ _type: 'span', _key: 's3', text: 'Anxiety is not just worrying. It shows up as physical tension, a racing mind, difficulty making decisions, and a persistent sense that something is about to go wrong even when nothing is.' }] },
      { _type: 'block', _key: 'b4', style: 'h2', children: [{ _type: 'span', _key: 's4', text: 'How Therapy Helps' }] },
      { _type: 'block', _key: 'b5', style: 'normal', children: [{ _type: 'span', _key: 's5', text: 'Working with a therapist gives you space to understand the root of your anxiety, not just manage the symptoms. Approaches like CBT, mindfulness-based therapy, and somatic work can all be effective.' }] },
    ],
  },
  {
    _type: 'blog', title: 'How Therapy Helps With Grief That Has No Name',
    slug: { _type: 'slug', current: 'how-therapy-helps-with-grief-that-has-no-name' },
    author: { name: 'Dr. Ananya Roy', bio: 'Counseling Therapist specialising in relationships and emotional loss.' },
    categories: ['Grief', 'Healing'], publishedAt: '2024-02-20T10:00:00Z', isFeatured: false,
    excerpt: 'Grief is not just about death. We grieve relationships, identities, versions of ourselves we had to leave behind.',
    body: [
      { _type: 'block', _key: 'g1', style: 'normal', children: [{ _type: 'span', _key: 'gs1', text: 'When most people think about grief, they think about losing someone to death. But grief is far broader than that. We grieve the end of relationships, the loss of a job we loved, a version of ourselves we had to leave behind.' }] },
      { _type: 'block', _key: 'g2', style: 'h2', children: [{ _type: 'span', _key: 'gs2', text: 'What Therapy Offers' }] },
      { _type: 'block', _key: 'g3', style: 'normal', children: [{ _type: 'span', _key: 'gs3', text: 'Therapy gives grief a container. A good therapist helps you move through grief at your own pace so it becomes part of your story rather than something that stops your story entirely.' }] },
    ],
  },
  {
    _type: 'blog', title: 'Finding the Right Therapist: What Most People Get Wrong',
    slug: { _type: 'slug', current: 'finding-the-right-therapist-what-most-people-get-wrong' },
    author: { name: 'Dr. Rahul Mehta', bio: 'Psychotherapist focused on neurodivergent and LGBTQ+ affirming care.' },
    categories: ['Guide', 'Therapy'], publishedAt: '2024-02-05T10:00:00Z', isFeatured: false,
    excerpt: 'The relationship between therapist and client is the single most important factor in whether therapy works.',
    body: [
      { _type: 'block', _key: 'f1', style: 'normal', children: [{ _type: 'span', _key: 'fs1', text: 'Research consistently shows that the therapeutic alliance is a stronger predictor of good outcomes than any specific technique. Finding the right person matters more than finding the right method.' }] },
      { _type: 'block', _key: 'f2', style: 'h2', children: [{ _type: 'span', _key: 'fs2', text: 'What to Look For' }] },
      { _type: 'block', _key: 'f3', style: 'normal', children: [{ _type: 'span', _key: 'fs3', text: 'You want someone who makes you feel safe enough to be honest. At The Therapy Park, every therapist lists their specialisation and approach so you can choose before you even walk in.' }] },
    ],
  },
  {
    _type: 'blog', title: 'Therapy for Parents: Taking Care of Yourself So You Can Show Up',
    slug: { _type: 'slug', current: 'therapy-for-parents-taking-care-of-yourself' },
    author: { name: 'Dr. Ananya Roy', bio: 'Counseling Therapist specialising in family dynamics.' },
    categories: ['Parenting', 'Self-care'], publishedAt: '2024-01-18T10:00:00Z', isFeatured: false,
    excerpt: 'Parents are often the last people to seek support. But your mental health matters too.',
    body: [
      { _type: 'block', _key: 'p1', style: 'normal', children: [{ _type: 'span', _key: 'ps1', text: 'There is a persistent idea that being a good parent means putting yourself last. None of that is true — and living by it quietly burns people out.' }] },
      { _type: 'block', _key: 'p2', style: 'h2', children: [{ _type: 'span', _key: 'ps2', text: 'Why It Matters' }] },
      { _type: 'block', _key: 'p3', style: 'normal', children: [{ _type: 'span', _key: 'ps3', text: 'Parental mental health directly affects children. The best thing you can do for your family is take your own wellbeing seriously.' }] },
    ],
  },
]

async function seed() {
  console.log('Seeding Sanity CMS with dummy content...\n')
  for (const m of teamMembers) { const d = await client.create(m); console.log(`Team: ${d.name}`) }
  for (const t of testimonials) { const d = await client.create(t); console.log(`Testimonial: ${d.name}`) }
  for (const b of blogs) { const d = await client.create(b); console.log(`Blog: ${d.title}`) }
  console.log('\nDone! Visit localhost:3000/studio to see your content.')
}

seed().catch((e) => { console.error(e); process.exit(1) })

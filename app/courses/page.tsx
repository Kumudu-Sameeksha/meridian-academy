'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  Search,
  ChevronDown,
  Clock3,
  Users,
  Star,
  BookOpen,
  ArrowRight,
  ChevronDown as ScrollCue,
  Sparkles,
} from 'lucide-react'

type Course = {
  title: string
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  instructor: string
  description: string
  duration: string
  students: string
  rating: string
  price: string
}

const courses: Course[] = [
  {
    title: 'Advanced Physics',
    category: 'Science',
    level: 'Advanced',
    instructor: 'Dr. Rajan Perera',
    description:
      'Deep dive into classical mechanics, electromagnetism, and modern physics with practical applications.',
    duration: '12 Weeks',
    students: '412 Students',
    rating: '4.9',
    price: '$299',
  },
  {
    title: 'Calculus Masterclass',
    category: 'Mathematics',
    level: 'Intermediate',
    instructor: 'Dr. Priya Amarasinghe',
    description:
      'A rigorous exploration of limits, derivatives, integrals, and series with practical applications.',
    duration: '10 Weeks',
    students: '340 Students',
    rating: '4.8',
    price: '$249',
  },
  {
    title: 'French Immersion',
    category: 'Languages',
    level: 'Beginner',
    instructor: 'Dr. Sophie Laurent',
    description:
      'Build fluency through conversation and structured activities designed for real-world communication.',
    duration: '9 Weeks',
    students: '289 Students',
    rating: '4.9',
    price: '$199',
  },
  {
    title: 'Digital Art Fundamentals',
    category: 'Creative Arts',
    level: 'Beginner',
    instructor: 'Maya Silva',
    description:
      'Master the core techniques of digital composition using modern creative tools.',
    duration: '8 Weeks',
    students: '156 Students',
    rating: '4.7',
    price: '$179',
  },
  {
    title: 'Web Development Bootcamp',
    category: 'Technology',
    level: 'Intermediate',
    instructor: 'Alex Fernando',
    description:
      'Build modern responsive websites using HTML, CSS, JavaScript and React.',
    duration: '14 Weeks',
    students: '521 Students',
    rating: '4.9',
    price: '$399',
  },
  {
    title: 'Business Strategy',
    category: 'Business',
    level: 'Intermediate',
    instructor: 'Dr. Michael Dias',
    description:
      'Learn competitive strategy, decision-making models, and practical business frameworks.',
    duration: '8 Weeks',
    students: '235 Students',
    rating: '4.8',
    price: '$279',
  },
]

const categories = [
  'All',
  'Science',
  'Mathematics',
  'Languages',
  'Arts',
  'Technology',
  'Business',
]

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

const domains = [
  { name: 'Science', courses: '12 Courses', icon: '▣' },
  { name: 'Mathematics', courses: '8 Courses', icon: '∕' },
  { name: 'Languages', courses: '15 Courses', icon: '◎' },
  { name: 'Arts', courses: '10 Courses', icon: '▤' },
  { name: 'Technology', courses: '18 Courses', icon: '▦' },
  { name: 'Business', courses: '14 Courses', icon: '▰' },
]

// Derived hero stats
const totalStudents = courses.reduce(
  (acc, c) => acc + parseInt(c.students.replace(/\D/g, ''), 10),
  0
)
const avgRating = (
  courses.reduce((acc, c) => acc + parseFloat(c.rating), 0) / courses.length
).toFixed(1)

const heroStats = [
  { label: 'Expert-Led Courses', value: `${courses.length}+` },
  { label: 'Enrolled Students', value: `${totalStudents.toLocaleString()}+` },
  { label: 'Average Rating', value: avgRating },
]

const springTransition = { type: 'spring' as const, stiffness: 380, damping: 32 }

export default function CoursesPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory

    const matchesLevel =
      selectedLevel === 'All' || course.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#faf9f6] text-[#17233c]">
      {/* ================= HERO ================= */}
      <section className="relative flex h-[20vh] min-h-[480px] w-full items-end overflow-hidden bg-[#0F2942] text-white">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 22, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src="/images/course.jpg"
            alt="Students studying in the academy library"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942] via-[#0F2942]/75 to-[#0F2942]/25" />

        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 pb-14">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 flex items-center gap-2 text-[8px] uppercase tracking-wider text-[#C7D0DA]"
          >
            <span className="text-[#C7D0DA]/70">HOME</span>
            <span className="text-[#C7D0DA]/40">›</span>
            <span className="font-medium text-[#d8bd8b]">COURSES</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[9px] uppercase tracking-wider text-[#C7D0DA] backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d8bd8b]/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d8bd8b]" />
            </span>
            <Sparkles className="h-3 w-3" strokeWidth={1.5} />
            Academic Catalog
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="max-w-xl font-serif text-4xl font-medium leading-tight md:text-5xl"
          >
            Explore Our Courses
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 55 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-3 h-[2px] bg-[#d8bd8b]"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 max-w-[560px] text-[11px] leading-5 text-[#C7D0DA]"
          >
            Refined scholarly learning pathways designed for ambitious minds.
            Select specialized courses curated and conducted by premier
            educators from global intellectual institutions.
          </motion.p>

          {/* Stats row */}
          <div className="mt-8 flex flex-wrap gap-8">
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <div className="font-serif text-2xl text-white md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[8px] uppercase tracking-wider text-[#9FB0C0]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[#C7D0DA]"
        >
          <ScrollCue className="h-5 w-5" strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* ================= FILTER AREA ================= */}
<section className="mx-auto max-w-[1180px] px-6 pt-12">

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative h-[400px] overflow-hidden rounded-2xl border border-[#10203d]/10 bg-white shadow-[0_15px_45px_-30px_rgba(16,32,61,0.35)]"
  >

    {/* Decorative background */}
    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#b49a6c]/10 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-[#10203d]/5 blur-3xl" />

    <div className="relative p-6 sm:p-7">

      {/* Header */}
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#b49a6c]">
            Refine your search
          </p>

          <h3 className="serif mt-1 text-xl text-[#10203d]">
            Find the right course for you
          </h3>
        </div>

        <p className="text-[9px] text-gray-400">
          Explore courses by subject and level
        </p>
      </div>

      {/* Search + Sort */}
      <div className="grid gap-3 md:grid-cols-[1fr_auto]">

        {/* Search */}
        <div className="group relative">
          <Search
            size={14}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b49a6c] transition-transform duration-300 group-focus-within:scale-110"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="h-11 w-full rounded-lg border border-gray-200 bg-[#fcfbf8] pl-11 pr-4 text-[10px] text-[#10203d] outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#b49a6c] focus:bg-white focus:ring-4 focus:ring-[#b49a6c]/10"
          />
        </div>

        {/* Sort */}
        <button className="group flex h-11 items-center justify-between gap-5 rounded-lg border border-gray-200 bg-[#fcfbf8] px-4 text-[9px] text-gray-400 transition-all duration-300 hover:border-[#b49a6c] hover:bg-white">
          <span>Sort by</span>

          <span className="flex items-center gap-2 font-semibold text-[#10203d]">
            Popularity
            <ChevronDown
              size={13}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </span>
        </button>

      </div>

      {/* Divider */}
      <div className="my-7 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Category Filter */}
      <div>
        <div className="mb-3 flex items-center gap-3">
          <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#b49a6c]">
            Filter by subject
          </p>

          <div className="h-px w-8 bg-[#b49a6c]/40" />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const active = selectedCategory === category

            return (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`relative overflow-hidden rounded-full border px-5 py-2.5 text-[9px] font-medium transition-all duration-300 ${
                  active
                    ? "border-[#10203d] text-white shadow-md shadow-[#10203d]/15"
                    : "border-gray-200 bg-white text-gray-500 hover:border-[#b49a6c] hover:text-[#10203d]"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="categoryPill"
                    transition={springTransition}
                    className="absolute inset-0 rounded-full bg-[#10203d]"
                  />
                )}

                <span className="relative z-10">
                  {category}
                </span>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Level Filter */}
      <div className="mt-7">
        <div className="mb-3 flex items-center gap-3">
          <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#b49a6c]">
            Difficulty level
          </p>

          <div className="h-px w-8 bg-[#b49a6c]/40" />
        </div>

        <div className="flex flex-wrap gap-3">
          {levels.map((level) => {
            const active = selectedLevel === level

            return (
              <motion.label
                key={level}
                whileHover={{ x: 2 }}
                className={`flex cursor-pointer items-center gap-2.5 rounded-full border px-4 py-2 text-[9px] transition-all duration-300 ${
                  active
                    ? "border-[#10203d] bg-[#10203d]/5 text-[#10203d]"
                    : "border-transparent text-gray-500 hover:border-gray-200 hover:bg-gray-50"
                }`}
                onClick={() => setSelectedLevel(level)}
              >
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full border transition-all duration-300 ${
                    active
                      ? "border-[#10203d] bg-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      layoutId="levelDot"
                      transition={springTransition}
                      className="h-1.5 w-1.5 rounded-full bg-[#10203d]"
                    />
                  )}
                </span>

                <span className={active ? "font-semibold" : ""}>
                  {level}
                </span>
              </motion.label>
            )
          })}
        </div>
      </div>

    </div>
  </motion.div>
</section>

      {/* ================= COURSES ================= */}
      <section className="mx-auto max-w-[1180px] px-6 pb-16">
        {filteredCourses.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-gray-200 bg-white py-16 text-center"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <BookOpen className="mx-auto mb-3 text-gray-300" size={30} />
            </motion.div>
            <h3 className="font-serif text-xl text-[#17233c]">No courses found</h3>
            <p className="mt-2 text-xs text-gray-400">
              Try changing your search or filters.
            </p>
          </motion.div>
        ) : (
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course, index) => (
                <motion.article
                  key={course.title}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12, scale: 0.97 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{
                    y: -6,
                    boxShadow: '0 16px 34px rgba(16,32,61,0.1)',
                  }}
                  className="group border border-gray-200 bg-white p-4 transition-colors duration-300 hover:border-[#d8bd8b]/50"
                >
                  {/* Card top */}
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-semibold uppercase tracking-wider text-[#7f8a9d]">
                      {course.category}
                    </span>
                    <span className="border border-[#eadfcf] bg-[#faf6ed] px-2 py-1 text-[7px] text-[#b49a6c]">
                      {course.level}
                    </span>
                  </div>

                  <h2 className="mt-3 font-serif text-[18px] text-[#17233c] transition-colors duration-300 group-hover:text-[#10203d]">
                    {course.title}
                  </h2>

                  <p className="mt-1 text-[8px] text-gray-400">
                    By: <span className="text-gray-500">{course.instructor}</span>
                  </p>

                  <p className="mt-3 min-h-[42px] text-[9px] leading-4 text-gray-500">
                    {course.description}
                  </p>

                  {/* Course details */}
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-[8px] text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock3 size={10} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={10} />
                      {course.students}
                    </span>
                    <span className="flex items-center gap-1 transition-transform duration-300 group-hover:scale-110">
                      <Star size={10} className="fill-[#b49a6c] text-[#b49a6c]" />
                      {course.rating}
                    </span>
                  </div>

                  {/* Price + button */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-serif text-[17px] font-semibold text-[#17233c]">
                      {course.price}
                    </span>

                    <motion.a
                      href="#"
                      whileTap={{ scale: 0.95 }}
                      className="group/btn relative flex items-center gap-2 overflow-hidden bg-[#10203d] px-4 py-2 text-[8px] font-semibold tracking-wide text-white transition-colors duration-300 group-hover:bg-[#1c3157]"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 group-hover/btn:translate-x-full" />
                      <span className="relative">ENROLL NOW</span>
                      <ArrowRight
                        size={10}
                        className="relative transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </motion.a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* ================= DOMAIN SECTION ================= */}
      <section className="border-t border-gray-200 bg-[#f5f1e9] py-14">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#b49a6c]"
            >
              EXPLORE CATEGORIES
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 font-serif text-2xl text-[#17233c]"
            >
              Browse by Scholarly Domain
            </motion.h2>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {domains.map((domain, index) => (
              <motion.a
                href="#"
                key={domain.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.96 }}
                className="group border border-gray-100 bg-white px-4 py-5 text-center shadow-sm transition-all duration-300 hover:border-[#d8bd8b]/60 hover:shadow-lg"
              >
                <div className="mx-auto flex h-8 w-8 items-center justify-center bg-[#f8f3e9] font-serif text-sm text-[#b49a6c] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  {domain.icon}
                </div>

                <h3 className="mt-3 font-serif text-[11px] font-semibold text-[#17233c]">
                  {domain.name}
                </h3>

                <p className="mt-1 text-[7px] text-gray-400">{domain.courses}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
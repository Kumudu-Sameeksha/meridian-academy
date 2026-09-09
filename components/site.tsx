'use client'

// ============================================================
// IMPORTS
// ============================================================

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  Menu,
  X,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Facebook,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'

// ============================================================
// NAVIGATION LINKS
// ============================================================

const links = [
  ['Home', '/'],
  ['Courses', '/courses'],
  ['Tutors', '/tutors'],
  ['About', '/about'],
  ['Contact', '/contact'],
]

// ============================================================
// NAVBAR COMPONENT
// ============================================================

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">

      {/* Main Navigation */}
      <div className="container-x flex h-[72px] items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center bg-ink text-[10px] font-bold text-white">
            MA
          </span>

          <span className="serif text-[16px] font-bold tracking-wide">
            MERIDIAN{' '}
            <span className="text-gold">
              ACADEMY
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-[11px] font-semibold uppercase tracking-[.12em] text-slate-600 transition hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Enroll Button */}
        <Link
          href="/contact"
          className="hidden bg-ink px-5 py-3 text-[10px] font-bold uppercase tracking-[.12em] text-white transition hover:bg-slate-700 md:block"
        >
          Enroll Now
        </Link>

        {/* Mobile Menu */}
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            className="overflow-hidden border-t md:hidden"
          >
            <div className="container-x flex flex-col py-4">

              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="border-b py-4 text-xs font-bold uppercase tracking-widest"
                >
                  {label}
                </Link>
              ))}

            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

// ============================================================
// FOOTER COMPONENT
// ============================================================

interface FooterProps {
  showCTA?: boolean
}

export function Footer() {
     const pathname = usePathname()

       const showCTA = pathname !== '/contact'

  return (
    <footer className="bg-ink text-white">

      {/* =====================================================
          CTA / CALL TO ACTION
      ====================================================== */}

    {showCTA && (
        <div
          className="
            relative overflow-hidden
            bg-[url('https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1800&q=80')]
            bg-cover
            bg-center
          "
        >

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-ink/90" />

          {/* CTA Content */}
          <div className="container-x relative py-16">

            <div className="mx-auto max-w-2xl text-center">

              <p className="mb-3 text-[10px] font-bold uppercase tracking-[.25em] text-gold">
                Your next chapter starts here
              </p>

              <h2 className="serif text-4xl md:text-5xl">
                Begin Your Journey Today
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/65">
                Discover the right course, meet exceptional tutors and build
                the confidence to reach your goals.
              </p>

              <Link
                href="/contact"
                className="btn-gold mt-7"
              >
                Start Learning
              </Link>

            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          FOOTER INFORMATION
      ====================================================== */}

      <div className="container-x grid gap-10 py-12 md:grid-cols-4">

        {/* Academy Information */}
        <div className="md:col-span-2">

          <div className="serif text-lg font-bold">
            MERIDIAN{' '}
            <span className="text-gold">
              ACADEMY
            </span>
          </div>

          <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
            A thoughtful learning community built around exceptional teaching,
            ambitious students and meaningful progress.
          </p>

        </div>

        {/* Explore Links */}
        <div>

          <h3 className="text-xs font-bold uppercase tracking-widest text-gold">
            Explore
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">

            {links.slice(1, 4).map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="hover:text-white"
              >
                {label}
              </Link>
            ))}

          </div>
        </div>

        {/* Contact Information */}
        <div>

          <h3 className="text-xs font-bold uppercase tracking-widest text-gold">
            Connect
          </h3>

          <p className="mt-4 text-sm leading-6 text-white/60">
            hello@meridianacademy.com
            <br />
            +94 11 234 5678
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex gap-3">
            <Instagram size={17} />
            <Linkedin size={17} />
            <Facebook size={17} />
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="container-x border-t border-white/10 py-5 text-[10px] text-white/35">
        © 2026 Meridian Academy. Crafted for ambitious learners.
      </div>

    </footer>
  )
}

// ============================================================
// SECTION TITLE COMPONENT
// ============================================================

interface SectionTitleProps {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`text-center ${light ? 'text-white' : ''}`}>

      <div className="gold-line" />

      <p className="text-[10px] font-bold uppercase tracking-[.22em] text-gold">
        {eyebrow}
      </p>

      <h2 className="serif mt-3 text-3xl md:text-4xl">
        {title}
      </h2>

      {description && (
        <p
          className={`
            mx-auto mt-3 max-w-xl text-sm leading-6
            ${light ? 'text-white/60' : 'text-slate-500'}
          `}
        >
          {description}
        </p>
      )}

    </div>
  )
}

// ============================================================
// REVEAL ANIMATION COMPONENT
// ============================================================

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({
  children,
  delay = 0,
  className = '',
}: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============================================================
// COUNT COMPONENT
// ============================================================

interface CountProps {
  value: string
  label: string
}

export function Count({
  value,
  label,
}: CountProps) {
  return (
    <div className="text-center">

      <div className="serif text-2xl font-bold">
        {value}
      </div>

      <div className="mt-1 text-[9px] font-bold uppercase tracking-widest text-gold">
        {label}
      </div>

    </div>
  )
}

// ============================================================
// COURSE CARD COMPONENT
// ============================================================

interface CourseCardProps {
  title: string
  tag: string
  desc: string
  price?: string
}

export function CourseCard({
  title,
  tag,
  desc,
  price = 'LKR 12,500',
}: CourseCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -7,
      }}
      transition={{
        duration: 0.25,
      }}
      className="card flex min-h-[235px] flex-col p-6"
    >

      <div className="flex items-center justify-between">

        <span className="text-[9px] font-bold uppercase tracking-[.16em] text-gold">
          {tag}
        </span>

        <ArrowUpRight
          size={16}
          className="text-slate-300"
        />

      </div>

      <h3 className="serif mt-7 text-xl">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-xs leading-6 text-slate-500">
        {desc}
      </p>

      <div className="mt-5 flex items-center justify-between border-t pt-4 text-[10px] font-semibold text-slate-500">

        <span>
          12 weeks
        </span>

        <span>
          {price}
        </span>

      </div>

    </motion.article>
  )
}

// ============================================================
// TUTOR CARD COMPONENT
// ============================================================

interface TutorCardProps {
  name: string
  subject: string
  img: string
  exp: string
}

export function TutorCard({
  name,
  subject,
  img,
  exp,
}: TutorCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -7,
      }}
      className="card p-6 text-center"
    >

      <img
        src={img}
        alt={name}
        className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-cream"
      />

      <h3 className="serif mt-4 text-lg">
        {name}
      </h3>

      <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gold">
        {subject}
      </p>

      <p className="mt-3 text-xs text-slate-500">
        {exp}
      </p>

      <Link
        href="/tutors"
        className="mt-5 inline-flex border px-4 py-2 text-[9px] font-bold uppercase tracking-widest hover:border-gold"
      >
        View Profile
      </Link>

    </motion.article>
  )
}
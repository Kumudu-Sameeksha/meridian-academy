'use client'
import { FormEvent, useState } from 'react'
import { Reveal, SectionTitle } from '@/components/site'
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  CheckCircle2,
  Loader2,
  ArrowRight,
} from 'lucide-react'
import Image from 'next/image'

// -----------------------------------------------------------------------------
// Contact ("Get in Touch") page — content only, no navbar/footer (global layout)
// Assumed component API: <Reveal delay?>{children}</Reveal>
// -----------------------------------------------------------------------------

const INQUIRY_OPTIONS = [
  'Admissions',
  'Academic Programs',
  'Tuition & Financial Aid',
  'Campus Visits',
  'General Inquiry',
]

const OFFICE_HOURS = [
  { days: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
  { days: 'Saturday', hours: '9:00 AM – 1:00 PM' },
  { days: 'Sunday', hours: 'Closed' },
]

const PERKS = [
  {
    title: 'Instant Access',
    body: 'Get immediate entry to your credentialed digital learning portal and curriculum resources.',
  },
  {
    title: 'Flexible Payment Plans',
    body: 'Structured enrollment plans with tuition installments that work with your financial timeline.',
  },
  {
    title: '30-Day Guarantee',
    body: "We stand by the quality of our program — if it's not the right fit, we offer a complete refund.",
  },
]

const SOCIALS = [
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Youtube, href: '#' },
]

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: 'Admissions Department',
    value: '+1 (555) 234-5678',
  },
  {
    icon: Mail,
    label: 'General Academic Inquiries',
    value: 'hello@meridianacademy.edu',
  },
  {
    icon: MapPin,
    label: 'Campus Location',
    value: '42 Scholar Lane, Cambridge, MA 02139',
  },
]

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'submitted'>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: wire up to your form handler / API route
    setStatus('loading')
    setTimeout(() => setStatus('submitted'), 900)
  }

  return (
    <main className="overflow-x-hidden bg-[#FAF7F0] text-[#1B2A3A]">
      {/* Breadcrumb + heading */}
      <section className="mx-auto max-w-6xl px-6 pt-10">
        <Reveal>
          <p className="text-xs text-[#8A94A3]">
            Home <span className="mx-1">/</span> Contact
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-3 font-serif text-4xl text-[#0F2942] md:text-5xl">
            Get in Touch
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#5A6675]">
            Have questions about admissions, our bespoke curricula, or custom
            tutoring options? Reach out to our academic registrars for direct,
            personalized assistance.
          </p>
        </Reveal>
      </section>

{/* ============================================================
    FORM + CONTACT INFORMATION
============================================================ */}

<section className="mx-auto max-w-6xl gap-8 px-6 py-16 md:grid md:grid-cols-[1.4fr_1fr]">

  {/* ==========================================================
      MESSAGE FORM
  =========================================================== */}

  <Reveal>
    <div
      className="
        group relative overflow-hidden
        rounded-2xl
        border border-[#E4DFD3]
        bg-white
        p-7
        shadow-sm
        transition-all duration-500
        hover:-translate-y-1
        hover:border-[#C9A227]/40
        hover:shadow-2xl
        md:p-9
      "
    >

      {/* Decorative Gold Accent */}
      <div
        className="
          absolute left-0 top-0
          h-1 w-28
          bg-[#C9A227]
        "
      />

      {/* Decorative Circle */}
      <div
        className="
          absolute -right-20 -top-20
          h-48 w-48
          rounded-full
          bg-[#C9A227]/5
          transition-transform duration-700
          group-hover:scale-125
        "
      />

      {/* ======================================================
          FORM HEADER
      ======================================================= */}

      <div className="relative">

        <div className="flex items-center gap-3">

          {/* Icon */}
          <div
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              bg-[#0F2942]
              text-[#C9A227]
              transition-transform duration-500
              group-hover:rotate-6
            "
          >
            <ArrowRight className="h-4 w-4" />
          </div>

          <div>
            <p
              className="
                text-[9px] font-bold
                uppercase tracking-[.2em]
                text-[#C9A227]
              "
            >
              Get In Touch
            </p>

            <h2 className="mt-1 font-serif text-2xl text-[#0F2942]">
              Send us a Message
            </h2>
          </div>

        </div>

        <p className="mt-4 max-w-lg text-sm leading-6 text-[#6B7280]">
          Tell us how we can help. Whether you have a question about
          admissions, courses, or academic programmes, our team is here
          to assist you.
        </p>

      </div>


      {/* ======================================================
          FORM
      ======================================================= */}

      <form
        onSubmit={handleSubmit}
        className="relative mt-8 space-y-6"
      >

        {/* ====================================================
            NAME + EMAIL
        ===================================================== */}

        <div className="grid gap-5 sm:grid-cols-2">

          {/* Full Name */}
          <FormField
            id="fullName"
            label="Full Name"
          >
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="e.g. Charlotte Du Pont"
              className={`
                ${inputClass}
                rounded-lg
                border-[#DDE1E6]
                bg-[#FAFAF8]
                px-4 py-3
                transition-all duration-300
                placeholder:text-[#A5ACB5]
                focus:border-[#C9A227]
                focus:bg-white
                focus:ring-2
                focus:ring-[#C9A227]/10
              `}
            />
          </FormField>


          {/* Email */}
          <FormField
            id="email"
            label="Email Address"
          >
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="e.g. charlotte@aberdeen.edu"
              className={`
                ${inputClass}
                rounded-lg
                border-[#DDE1E6]
                bg-[#FAFAF8]
                px-4 py-3
                transition-all duration-300
                placeholder:text-[#A5ACB5]
                focus:border-[#C9A227]
                focus:bg-white
                focus:ring-2
                focus:ring-[#C9A227]/10
              `}
            />
          </FormField>

        </div>


        {/* ====================================================
            PHONE + SUBJECT
        ===================================================== */}

        <div className="grid gap-5 sm:grid-cols-2">

          {/* Phone */}
          <FormField
            id="phone"
            label="Phone Number"
          >
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 234-5678"
              className={`
                ${inputClass}
                rounded-lg
                border-[#DDE1E6]
                bg-[#FAFAF8]
                px-4 py-3
                transition-all duration-300
                placeholder:text-[#A5ACB5]
                focus:border-[#C9A227]
                focus:bg-white
                focus:ring-2
                focus:ring-[#C9A227]/10
              `}
            />
          </FormField>


          {/* Subject */}
          <FormField
            id="subject"
            label="Subject of Inquiry"
          >
            <select
              id="subject"
              name="subject"
              defaultValue=""
              className={`
                ${inputClass}
                rounded-lg
                border-[#DDE1E6]
                bg-[#FAFAF8]
                px-4 py-3
                text-[#5A6675]
                transition-all duration-300
                focus:border-[#C9A227]
                focus:bg-white
                focus:ring-2
                focus:ring-[#C9A227]/10
              `}
            >

              <option
                value=""
                disabled
              >
                Select a category
              </option>

              {INQUIRY_OPTIONS.map((opt) => (
                <option
                  key={opt}
                  value={opt}
                >
                  {opt}
                </option>
              ))}

            </select>
          </FormField>

        </div>


        {/* ====================================================
            MESSAGE
        ===================================================== */}

        <FormField
          id="message"
          label="Your Message"
        >
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Describe your academic goals or questions..."
            className={`
              ${inputClass}
              resize-none
              rounded-lg
              border-[#DDE1E6]
              bg-[#FAFAF8]
              px-4 py-3
              leading-6
              transition-all duration-300
              placeholder:text-[#A5ACB5]
              focus:border-[#C9A227]
              focus:bg-white
              focus:ring-2
              focus:ring-[#C9A227]/10
            `}
          />
        </FormField>


        {/* ====================================================
            SUBMIT AREA
        ===================================================== */}

        <div className="flex flex-col gap-5 pt-1 sm:flex-row sm:items-center sm:justify-between">

          {/* Small Privacy Message */}
          <p className="max-w-xs text-[10px] leading-5 text-[#8A94A3]">
            Your information is kept private and will only be used
            to respond to your enquiry.
          </p>


          {/* Submit Button */}
          <button
            type="submit"
            disabled={status !== 'idle'}
            className="
              group/btn
              relative
              inline-flex
              items-center
              justify-center
              gap-2
              overflow-hidden
              rounded-lg
              bg-[#C9A227]
              px-7 py-3
              text-xs
              font-bold
              uppercase
              tracking-[.12em]
              text-[#0F2942]
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[#B8931F]
              hover:shadow-[0_10px_30px_-8px_rgba(201,162,39,0.55)]
              active:scale-95
              disabled:cursor-not-allowed
              disabled:opacity-80
            "
          >

            {/* Shimmer Animation */}
            <span
              className="
                absolute inset-0
                -translate-x-full
                bg-white/25
                transition-transform duration-500
                group-hover/btn:translate-x-full
              "
            />

            {/* Loading State */}
            {status === 'loading' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : status === 'submitted' ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Sent
              </>
            ) : (
              <>
                Send Message

                <ArrowRight
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover/btn:translate-x-1
                  "
                />
              </>
            )}

          </button>

        </div>


        {/* ====================================================
            SUCCESS MESSAGE
        ===================================================== */}

        <div
          className={`
            grid
            overflow-hidden
            transition-all duration-500 ease-out
            ${
              status === 'submitted'
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            }
          `}
        >

          <div className="min-h-0">

            <div
              className="
                mt-1
                flex items-center gap-3
                rounded-lg
                border border-[#3F7A5C]/20
                bg-[#F1F8F3]
                px-4 py-3
                text-sm
                text-[#3F7A5C]
              "
            >

              <CheckCircle2 className="h-4 w-4 shrink-0" />

              <p>
                Thanks — your message has been sent.
                We'll be in touch soon.
              </p>

            </div>

          </div>

        </div>

      </form>

    </div>
  </Reveal>




    
{/* ============================================================
    DIRECT CONTACT SECTION
============================================================ */}

<Reveal delay={0.15}>
  <div className="mt-8 md:mt-0">

    {/* Main Card */}
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-slate-200
        bg-white
        p-7 shadow-sm
        transition-all duration-500
        hover:-translate-y-1
        hover:border-[#C9A227]/40
        hover:shadow-2xl
        md:p-8
      "
    >

      {/* Decorative Gold Circle */}
      <div
        className="
          absolute -right-16 -top-16
          h-40 w-40 rounded-full
          bg-[#C9A227]/5
          transition-transform duration-700
          group-hover:scale-125
        "
      />

      {/* Small Decorative Line */}
      <div
        className="
          absolute left-0 top-0
          h-1 w-24
          bg-[#C9A227]
        "
      />

      {/* =========================
          Card Header
      ========================== */}

      <div className="relative">

        <div className="flex items-center gap-3">

          {/* Icon */}
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              bg-[#0F2942]
              text-[#C9A227]
              transition-transform duration-500
              group-hover:rotate-6
            "
          >
            <span className="text-sm">✦</span>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#C9A227]">
              Academic Office
            </p>

            <h3 className="mt-1 font-serif text-2xl text-[#0F2942]">
              Connect Directly
            </h3>
          </div>

        </div>

        <p className="mt-4 max-w-md text-sm leading-6 text-[#6B7280]">
          Have a question about our courses, admissions or academic
          programmes? Our team is ready to help.
        </p>

      </div>


      {/* =========================
          Contact Information
      ========================== */}

      <div className="relative mt-7 space-y-3">

        {CONTACT_ITEMS.map((item) => (
          <div
            key={item.label}
            className="
              group/item
              rounded-xl
              border border-slate-100
              bg-[#F8F7F3]
              p-4
              transition-all duration-300
              hover:border-[#C9A227]/30
              hover:bg-white
              hover:shadow-md
            "
          >

            <div className="flex items-start gap-4">

              {/* Contact Icon */}
              <div
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-lg
                  bg-[#0F2942]
                  text-[#C9A227]
                  transition-all duration-300
                  group-hover/item:scale-110
                  group-hover/item:bg-[#C9A227]
                  group-hover/item:text-white
                "
              >
                <item.icon
                  className="h-4 w-4"
                  strokeWidth={1.5}
                />
              </div>

              {/* Contact Details */}
              <div className="min-w-0">

                <p
                  className="
                    text-[9px] font-bold
                    uppercase tracking-[.15em]
                    text-[#8A94A3]
                  "
                >
                  {item.label}
                </p>

                <p
                  className="
                    mt-1 break-words
                    text-sm font-medium
                    text-[#1B2A3A]
                    transition-colors duration-300
                    group-hover/item:text-[#0F2942]
                  "
                >
                  {item.value}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>


      {/* =========================
          Office Hours
      ========================== */}

      <div className="relative mt-8">

        {/* Divider */}
        <div className="mb-6 h-px bg-slate-200" />

        <div className="flex items-center justify-between">

          <div>
            <p
              className="
                text-[9px] font-bold
                uppercase tracking-[.18em]
                text-[#C9A227]
              "
            >
              Opening Hours
            </p>

            <h4 className="mt-1 font-serif text-lg text-[#0F2942]">
              Reception Office
            </h4>
          </div>

          {/* Status */}
          <span
            className="
              rounded-full
              bg-emerald-50
              px-3 py-1
              text-[9px] font-bold
              uppercase tracking-wider
              text-emerald-700
            "
          >
            Available
          </span>

        </div>


        {/* Hours List */}
        <div className="mt-5 overflow-hidden rounded-xl border border-slate-100">

          {OFFICE_HOURS.map((row, index) => (
            <div
              key={row.days}
              className={`
                flex items-center justify-between
                px-4 py-3
                text-sm
                transition-colors duration-300
                hover:bg-[#F8F7F3]
                ${
                  index !== OFFICE_HOURS.length - 1
                    ? 'border-b border-slate-100'
                    : ''
                }
              `}
            >

              <span className="text-[#5A6675]">
                {row.days}
              </span>

              <span className="font-medium text-[#0F2942]">
                {row.hours}
              </span>

            </div>
          ))}

        </div>

      </div>


      {/* =========================
          Bottom Message
      ========================== */}

      <div
        className="
          relative mt-6
          rounded-xl
          bg-[#0F2942]
          px-5 py-4
          text-center
        "
      >

        <p className="text-xs leading-5 text-white/70">
          We look forward to helping you take your next step.
        </p>

      </div>

    </div>

  </div>
</Reveal>


      </section>

      {/* Follow us */}
      <Reveal>
        <section className="border-t border-[#E4DFD3] py-10 text-center">
          <p className="text-xs uppercase tracking-wide text-[#8A94A3]">
            Follow the Meridian Community
          </p>
          <div className="mt-4 flex justify-center gap-4">
            {SOCIALS.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DDD6C6] text-[#0F2942] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-[#0F2942] hover:bg-[#0F2942] hover:text-white hover:shadow-lg"
              >
                <social.icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Campus map */}
      <Reveal>
        <section className="relative mx-auto max-w-6xl px-6 pb-16">
          <div className="group relative h-72 w-full overflow-hidden rounded-sm shadow-md transition-shadow duration-500 hover:shadow-2xl md:h-96">
            <Image
              src="/images/map1.jpg"
              alt="Map of the Meridian Academy campus"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/40 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-end justify-center pb-8">
              <span className="relative flex items-center gap-2 rounded-full bg-[#0F2942] px-5 py-2 text-xs text-white shadow-lg transition-transform duration-300 hover:scale-105">
                <span className="relative flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[#C9A227]/60" />
                  <MapPin className="relative h-4 w-4 text-[#C9A227]" strokeWidth={1.5} />
                </span>
                Meridian Campus
              </span>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Enrollment CTA */}
      <section className="relative overflow-hidden bg-[#0F2942] py-20 text-white">
        <div className="absolute inset-0 scale-105">
          <Image
            src="/images/ad.jpg"
            alt=""
            fill
            className="object-cover opacity-25 [animation:ken-burns_18s_ease-in-out_infinite_alternate]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942] via-[#0F2942]/70 to-[#0F2942]/40" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <SectionTitle
              eyebrow="Admissions & Enrollment"
              title="Ready to Start Learning?"
              description="Begin your journey towards intellectual distinction. Our seamless enrollment system grants you access to top-tier academic resources immediately."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 text-left sm:grid-cols-3">
            {PERKS.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 0.12}>
                <div className="group h-full rounded-sm border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227]/50 hover:bg-white/10 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)]">
                  <div className="mb-4 h-8 w-8 rounded-full bg-[#C9A227] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <h3 className="font-serif text-base">{perk.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#C7D0DA]">
                    {perk.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <a
              href="/enroll"
              className="group/cta mt-10 inline-flex items-center gap-2 rounded-sm bg-[#C9A227] px-8 py-3 text-sm font-medium text-[#0F2942] transition-all duration-300 hover:bg-[#B8931F] hover:shadow-[0_10px_30px_-6px_rgba(201,162,39,0.6)] active:scale-95"
            >
              Begin Enrollment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Local keyframes for the CTA background's slow pan/zoom */}
      <style>{`
        @keyframes ken-burns {
          from { transform: scale(1) translate(0, 0); }
          to { transform: scale(1.12) translate(-1%, -1%); }
        }
      `}</style>
    </main>
  )
}

// -----------------------------------------------------------------------------
// Shared field wrapper + input styling
// -----------------------------------------------------------------------------

const inputClass =
  'mt-2 w-full rounded-sm border border-[#DDD6C6] bg-transparent px-4 py-2.5 text-sm placeholder:text-[#A9B0BC] transition-all duration-300 focus:border-[#C9A227] focus:outline-none focus:ring-2 focus:ring-[#C9A227]/20'

function FormField({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-wide text-[#8A94A3]">
        {label}
      </label>
      {children}
    </div>
  )


}
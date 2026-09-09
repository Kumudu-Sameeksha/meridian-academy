import { SectionTitle, Reveal, Count } from '@/components/site'
import { HeartHandshake, Compass, Award, Lightbulb, ChevronDown } from 'lucide-react'
import Image from 'next/image'

// -----------------------------------------------------------------------------
// About ("Our Story") page — content only, no navbar/footer (handled by layout)
// Assumed component APIs (adjust if your actual signatures differ):
//   <SectionTitle eyebrow?, title, description? />
//   <Reveal delay?>{children}</Reveal>
//   <Count value, suffix?, label />
// -----------------------------------------------------------------------------

const FEATURES = [
  {
    icon: HeartHandshake,
    title: 'Rich Legacy',
    body: 'Decades of academic tradition built on a foundation of scholarship and character.',
  },
  {
    icon: Award,
    title: 'Certified Expert Teachers',
    body: 'Every instructor is credentialed, experienced, and deeply invested in student growth.',
  },
  {
    icon: Compass,
    title: 'Skilled Training',
    body: 'Hands-on programs that pair classroom learning with practical, real-world skill building.',
  },
  {
    icon: Lightbulb,
    title: 'Guided Discovery',
    body: 'Students are encouraged to question, explore, and arrive at understanding on their own terms.',
  },
]

const STATS = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '10000+', label: 'Graduated Students' },
  { value: '200+', label: 'Expert Faculty' },
  { value: '98%', label: 'Placement Rate' },
]

const DIRECTORS = [
  { name: 'Dr. Edward Reyes', title: 'Executive Director', image: '/images/MR6.jpg' },
  { name: 'Prof. Sarah Coleman', title: 'Academic Director', image: '/images/MRS4.jpg' },
  { name: 'Mr. Daniel Ortiz', title: 'Director of Admissions', image: '/images/MR7.jpg' },
]

export default function About() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero — full-bleed background image */}
      <section className="relative flex h-[50vh] min-h-[480px] w-full items-center overflow-hidden bg-[#0F2942] text-white">
        <Image
          src="/images/hero.jpg"
          alt="Stained glass window of the academy chapel"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2942] via-[#0F2942]/80 to-[#0F2942]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#C9A227]">
              About Meridian Academy
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="mt-4 max-w-2xl font-serif text-5xl font-medium leading-tight md:text-6xl">
              Our Story
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#C7D0DA] md:text-base">
              A journey of tradition, dedication, and academic excellence
              spanning generations of students who came to learn and left
              ready to lead.
            </p>
          </Reveal>
        </div>

        {/* Animated scroll cue */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-[#C7D0DA]">
          <ChevronDown className="h-6 w-6" strokeWidth={1.5} />
        </div>
      </section>

      {/* Educating the Mind */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <SectionTitle
              eyebrow="About"
              title="Educating the Mind, Inspiring the Soul"
              description="Since our founding, we have held to one belief: that education is not just the transfer of knowledge but the shaping of character. Our classrooms blend rigorous scholarship with mentorship, giving every student the tools to think critically, act with integrity, and contribute meaningfully to the world around them."
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="group relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-sm bg-[#8FB9AA] transition-transform duration-500 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1" />
              <div className="relative h-80 w-full overflow-hidden rounded-sm shadow-lg transition-shadow duration-500 group-hover:shadow-2xl">
                <Image
                  src="/images/lib.jpg"
                  alt="Student reading in the academy library"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mission / Vision */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="group rounded-sm bg-[#F1ECE0] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <HeartHandshake
                className="mb-4 h-8 w-8 text-[#0F2942] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-xl text-[#0F2942]">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6675]">
                To cultivate curious, capable, and compassionate individuals
                through a rigorous and well-rounded education.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="group rounded-sm bg-[#F1ECE0] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Compass
                className="mb-4 h-8 w-8 text-[#0F2942] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-xl text-[#0F2942]">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6675]">
                To be a leading institution recognized for producing graduates
                who shape their communities and industries for the better.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0F2942] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 text-center md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="transition-transform duration-300 hover:scale-110">
                <Count value={stat.value} label={stat.label} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <Reveal>
          <SectionTitle
            eyebrow="About"
            title="Why MERIDIAN Academy Stands Apart"
            description="Four pillars define the Aberdeen experience, shaping how our students learn, grow, and prepare for what's next."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.12}>
              <div className="group flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F1ECE0] transition-all duration-300 group-hover:bg-[#0F2942] group-hover:shadow-lg">
                  <feature.icon
                    className="h-6 w-6 text-[#0F2942] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-serif text-lg text-[#0F2942]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A6675]">{feature.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#0F2942] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <SectionTitle
              eyebrow="About"
              title="Meet Our Distinguished Executive Directors"
              description="Leaders whose experience and vision guide the academy's continued growth and academic reputation."
            />
          </Reveal>

          <div className="mt-14 grid gap-20 md:grid-cols-3">
            {DIRECTORS.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.15}>
                <div className="group text-left">
                  <div className="relative h-72 w-full overflow-hidden rounded-sm shadow-lg transition-shadow duration-500 group-hover:shadow-2xl">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg transition-colors duration-300 group-hover:text-[#C9A227]">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#9FB0C0]">{person.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
'use client'
import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Target, Sparkles, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { CourseCard,TutorCard,SectionTitle,Reveal,Count } from '@/components/site'
import { courses,tutors } from '@/lib/data'
export default function Home(){return <main>
<section
  className="relative min-h-[610px] overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/images/hero1.jpg')" }}
>
  <div className="absolute inset-0 bg-ink/75" />

  <div className="container-x relative flex min-h-[610px] items-center">
    <motion.div
      initial={{ opacity: 0, x: -35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl text-white"
    >
      <p className="mb-5 text-[10px] font-bold uppercase tracking-[.3em] text-gold">
        Meridian Academy · Est. 2012
      </p>

      <h1 className="serif text-5xl leading-[1.05] md:text-7xl">
        Where Great Minds Find Their Path
      </h1>

      <p className="mt-6 max-w-lg text-sm leading-7 text-white/70">
        Thoughtful teaching, exceptional tutors and a learning environment
        designed to help every student move forward with confidence.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/courses" className="btn-gold">
          Explore Courses
        </Link>

        <Link href="/tutors" className="btn-outline">
          Meet Our Tutors
        </Link>
      </div>
    </motion.div>
  </div>
</section>

<section className="bg-white py-20">
    <div className="container-x"><Reveal>
    <div className="grid gap-10 md:grid-cols-2 md:items-end">
        <div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-gold">A better way to learn</p>
        <h2 className="serif mt-3 max-w-xl text-3xl leading-tight md:text-4xl">Academic rigor. Individual focus. Exceptional futures.</h2>
        </div><p className="max-w-xl text-sm leading-7 text-slate-500">Meridian brings together passionate educators and ambitious learners. 
            Every program is carefully structured to balance academic depth with practical confidence.</p>
            </div></Reveal><div className="mt-14 grid grid-cols-2 gap-5 bg-cream p-7 md:grid-cols-4">
                <Count value="15+" label="Years of excellence"/>
                <Count value="200+" label="Expert tutors"/>
                <Count value="50+" label="Learning programs"/>
                <Count value="10,000+" label="Students supported"/>
                </div>
                </div>
                </section>

<section className="bg-[#fbfbfa] py-20">
    <div className="container-x"><SectionTitle eyebrow="Curated learning" title="Our Most Popular Courses" 
    description="Focused programs designed around the skills students need to perform with confidence."/>
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{courses.slice(0,4).map((c,i)=><Reveal key={c.title} delay={i*.08}>
        <CourseCard {...c}/></Reveal>)}
    </div>
    <div className="mt-9 text-center">
        <Link href="/courses" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-gold">
        View all courses <ArrowRight size={14}/></Link>
        </div>
        </div>
        </section>

<section className="relative overflow-hidden bg-cream py-24">
  {/* Decorative background elements */}
  <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-ink/5 blur-3xl" />

  <div className="container-x relative">

    {/* Section heading */}
    <Reveal>
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
          Meet the mentors
        </p>

        <h2 className="serif text-4xl leading-tight text-ink md:text-5xl">
          Learn from World-Class Educators
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
          Experienced teachers who make complex ideas feel clear, relevant
          and achievable.
        </p>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 70, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-7 h-[2px] bg-gold"
        />
      </div>
    </Reveal>

    {/* Tutor cards */}
    <div className="mx-auto mt-16 grid max-w-5xl gap-7 md:grid-cols-3">
      {tutors.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: i * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -10,
          }}
          className="group"
        >
          <div className="relative overflow-hidden rounded-sm border border-black/5 bg-white shadow-[0_10px_35px_-20px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:shadow-[0_25px_50px_-20px_rgba(0,0,0,0.35)]">

            {/* Gold top line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.15 + 0.3,
              }}
              className="absolute left-0 right-0 top-0 z-10 h-1 origin-left bg-gold"
            />

            {/* Tutor card */}
            <TutorCard {...t} />

            {/* Hover overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Floating arrow */}
            <div className="absolute bottom-5 right-5 grid h-9 w-9 translate-y-3 place-items-center rounded-full bg-gold text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Bottom statement */}
    <Reveal delay={0.4}>
      <div className="mx-auto mt-14 flex max-w-2xl items-center justify-center gap-4">
        <div className="h-px flex-1 bg-ink/10" />

        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          Passion • Knowledge • Progress
        </p>

        <div className="h-px flex-1 bg-ink/10" />
      </div>
    </Reveal>

  </div>
</section>
    
<section className="relative overflow-hidden bg-white py-24">
  {/* Background decorations */}
  <motion.div
    animate={{
      x: [0, 30, 0],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-gold/5 blur-3xl"
  />

  <motion.div
    animate={{
      x: [0, -25, 0],
      y: [0, 25, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cream blur-3xl"
  />

  <div className="container-x relative">

    {/* Section heading */}
    <Reveal>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
          Designed around you
        </p>

        <h2 className="serif mt-4 text-4xl leading-tight text-ink md:text-5xl">
          An Education Unlike Any Other
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
          Everything we do is designed to make learning more personal,
          flexible and meaningful.
        </p>

        {/* Animated gold line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 65, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-7 h-[2px] bg-gold"
        />
      </div>
    </Reveal>

    {/* Feature cards */}
    <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-4">

      {[
        [
          BookOpen,
          "Personalised Learning",
          "Programs shaped around your goals, level and learning pace.",
        ],
        [
          Target,
          "Expert Tutors",
          "Learn directly from experienced educators who care about progress.",
        ],
        [
          Sparkles,
          "Flexible Schedule",
          "Choose focused sessions and resources that fit your routine.",
        ],
        [
          Users,
          "Supportive Community",
          "Learn in an environment where questions and curiosity are encouraged.",
        ],
      ].map(([Icon, title, text], i) => {
        const C = Icon as any

        return (
          <motion.div
            key={title as string}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: i * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
            }}
            className="group relative"
          >
            <div className="relative h-full overflow-hidden rounded-sm border border-slate-200 bg-white p-7 transition-all duration-500 group-hover:border-gold/40 group-hover:shadow-[0_20px_45px_-20px_rgba(15,41,66,0.3)]">

              {/* Animated gold corner */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15 + 0.2,
                }}
                className="absolute left-0 top-0 h-1 w-full origin-left bg-gold"
              />

              {/* Number */}
              <span className="absolute right-5 top-5 text-[10px] font-bold tracking-widest text-slate-300 transition-colors duration-300 group-hover:text-gold">
                0{i + 1}
              </span>

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: [0, -8, 8, 0],
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="grid h-14 w-14 place-items-center rounded-full bg-cream text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-white"
              >
                <C size={21} strokeWidth={1.7} />
              </motion.div>

              {/* Title */}
              <h3 className="serif mt-7 text-xl text-ink">
                {title as string}
              </h3>

              {/* Description */}
              <p className="mt-3 text-xs leading-6 text-slate-500">
                {text as string}
              </p>

              {/* Bottom arrow */}
              <div className="mt-7 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 transition-all duration-300 group-hover:gap-4 group-hover:text-gold">
                <span>Discover more</span>

                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </motion.div>
        )
      })}
    </div>

    {/* Bottom decorative line */}
    <Reveal delay={0.5}>
      <div className="mx-auto mt-16 flex max-w-3xl items-center gap-4">
        <div className="h-px flex-1 bg-slate-200" />

        <div className="h-2 w-2 rotate-45 bg-gold" />

        <p className="text-center text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
          Learn · Grow · Achieve
        </p>

        <div className="h-2 w-2 rotate-45 bg-gold" />

        <div className="h-px flex-1 bg-slate-200" />
      </div>
    </Reveal>

  </div>
</section>
<section className="bg-cream py-20">
    <div className="container-x"><SectionTitle eyebrow="Student voices" title="Trusted by Ambitious Learners"/>
    <div className="mt-12 grid gap-5 md:grid-cols-3">
        {['“The teaching is thoughtful and clear. I finally understand subjects I used to find intimidating.”',
            '“Every tutor feels genuinely invested in your progress. The atmosphere is exceptional.”',
            '“Meridian gave me structure, confidence and the right people to guide my next step.”'].map((q,i)=>
            <Reveal key={q} delay={i*.08}><blockquote className="card p-7">
                <div className="text-gold">★★★★★</div>
                <p className="mt-5 text-sm leading-7 text-slate-600">{q}</p>
                <footer className="mt-6 text-[10px] font-bold uppercase tracking-widest">
                    {['Amelia R.','Daniel P.','Maya S.'][i]}
                    </footer>
                    </blockquote></Reveal>)}
                    </div>
                    </div>
                    </section>
</main>}

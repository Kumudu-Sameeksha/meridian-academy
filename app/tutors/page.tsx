import { TutorCard,SectionTitle,Reveal } from '@/components/site'
import { tutors } from '@/lib/data'

export default function Tutors(){return <main>
    <section className="bg-cream py-24">
    <div className="container-x">
        <SectionTitle eyebrow="The people behind the progress" 
        title="Meet Our Tutors" 
        description="Specialists, mentors and educators committed to helping students become capable independent learners."/>
        </div>
        </section>
        <section className="py-20">
            <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[...tutors,...tutors].map((t,i)=><Reveal key={i} delay={(i%3)*.08}><TutorCard {...t}/>
                </Reveal>)}
                
                </div>
                </section>
                </main>}

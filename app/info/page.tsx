import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Image from 'next/image';
import Link from 'next/link';

const experience: {
  company: string;
  role: string;
  date: string;
  logo: string;
}[] = [
    {
      company: 'Halchal Bal Vikas Sansthan',
      role: 'Web Developer',
      date: '',
      logo: '/halchal.png',
    },
    {
      company: 'Zudio Media',
      role: 'Web Developer',
      date: '',
      logo: '/zudio-media.svg',
    },
    {
      company: 'Business Cradle',
      role: 'Web Developer intern',
      date: '',
      logo: '/building.png',
    },
    
  ];

export default async function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Information" />
      <section className="pb-8 prose prose-lg">
        <p>
          Hey, I’m doc. I build small tools, automations, and systems — mostly with
          Linux, Bash, and web tech. I’m self-taught and project-driven. Every line
          of code I write is either solving a real problem or helping me learn
          something new.
        </p>

        <p>
          I’ve been working on things like a command-line assistant powered by LLMs,
          automating workflows in Linux, and experimenting with audio processing
          using open source tools. I also maintain my own development setup and
          workflows across multiple machines.
        </p>

        <p>
          I’m currently looking for freelance or contract work — especially projects
          involving scripting, automation, web tooling, or anything hands-on and
          experimental. I work best when I’m learning and building at the same time.
        </p>

        <p>
          If you’re looking for someone curious, fast-learning, and comfortable with
          unconventional solutions — feel free to reach out: {' '}
          <Link href="mailto:heyitsdoc@proton.me">heyitsdoc@proton.me</Link>
        </p>
      </section>

      <section>
        <Title as="h2" variant="secondary" className="mb-4 mt-8 ">
          Experience
        </Title>

        <div className="divide-y divide-slate-200">
          {experience.map((exp) => {
            return (
              <div className="flex gap-4 py-6" key={exp.date}>
                <Image
                  width={56}
                  height={56}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 rounded-xl"
                />
                <div className="flex flex-col col-span-9">
                  <span className="text-slate-800 text-xl font-semibold">
                    {exp.company}
                  </span>
                  <span className="text-slate-700 text-lg">{exp.role}</span>
                  <span className="block mt-4 text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                    {exp.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* <Link
          href="/resume.pdf"
          target="_blank"
          className="block my-8 text-slate-500 text-sm font-medium"
        >
          Download resume →
        </Link> */}
      </section>
    </main>
  );
}

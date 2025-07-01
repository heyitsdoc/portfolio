import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Link from 'next/link';

const contact: {
  method: string;
  link: string;
  label: string;
}[] = [
  {
    method: 'Email',
    link: 'mailto:doc@mail.com',
    label: 'doc@mail.com',
  },
  {
    method: 'Twitter',
    link: 'https://twitter.com/',
    label: '@heyitsdoc',
  },
  {
    method: 'GitHub',
    link: 'https://github.com/heyitsdoc',
    label: 'git/heyitsdoc',
  },
  {
    method: 'LinkedIn',
    link: 'https://www.linkedin.com/in/heyitsdoc/',
    label: 'in/heyitsdoc',
  },
];
export default async function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Contact" />
      <section className="pb-8">
        <p className="text-lg mb-4">
          If you&apos;d like to get in touch, you can reach me using the
          following methods.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contact.map((contactMethod) => {
            return (
              <div className="flex flex-col" key={contactMethod.method}>
                <Title as="h2" variant="tertiary">
                  {contactMethod.method}
                </Title>
                <Link href={contactMethod.link} className="text-slate-700">
                  {contactMethod.label}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: (
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Docs Logo" width={36} height={36} className="dark:invert" />
          <span className="font-semibold text-lg">{appName}</span>
        </div>
      ),
    },
    links: [
      {
        text: 'Blog',
        url: 'https://blog.vinayprabhakar.dev',
        active: 'nested-url',
      },
      {
        text: 'Contact',
        url: 'https://vinayprabhakar.dev/contact',
        active: 'nested-url',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}`,
  };
}

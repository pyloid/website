import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import {
  CodeBlockTabs,
  CodeBlockTabsList,
  CodeBlockTabsTrigger,
  CodeBlockTab,
} from '@/components/codeblock';

// Metadata for the landing page
export const metadata: Metadata = {
  title: 'Pyloid - Electron for Python Developer',
  description:
    'Pyloid: Electron for Python Developer • Web-based desktop app framework',
  keywords: [
    'electron',
    'python',
    'nextjs',
    'typescript',
    'desktop app',
    'web-based desktop app',
  ],
  openGraph: {
    title: 'Pyloid - Electron for Python Developer',
    description:
      'Pyloid: Electron for Python Developer • Web-based desktop app framework',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pyloid - Electron for Python Developer',
    description:
      'Pyloid: Electron for Python Developer • Web-based desktop app framework',
  },
};

export default function HomePage() {
  return (
    <div className='bg-background'>
      {/* Hero Section */}
      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent'>
            <div className='flex items-center justify-center gap-2'>
              <Logo size={96} />
              Pyloid
            </div>
          </h1>

          <p className='text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-center'>
            Electron for Python Developer • Web-based desktop app framework
          </p>

          <CodeBlockTabs defaultValue='npm'>
            <CodeBlockTabsList>
              <CodeBlockTabsTrigger value='npm'>npm</CodeBlockTabsTrigger>
              <CodeBlockTabsTrigger value='pnpm'>pnpm</CodeBlockTabsTrigger>
              <CodeBlockTabsTrigger value='yarn'>yarn</CodeBlockTabsTrigger>
              <CodeBlockTabsTrigger value='bun'>bun</CodeBlockTabsTrigger>
            </CodeBlockTabsList>
            <CodeBlockTab value='npm'>
              <DynamicCodeBlock
                lang='bash'
                code='npm create pyloid-app@latest'
              />
            </CodeBlockTab>
            <CodeBlockTab value='pnpm'>
              <DynamicCodeBlock
                lang='bash'
                code='pnpm create pyloid-app@latest'
              />
            </CodeBlockTab>
            <CodeBlockTab value='yarn'>
              <DynamicCodeBlock
                lang='bash'
                code='yarn create pyloid-app@latest'
              />
            </CodeBlockTab>
            <CodeBlockTab value='bun'>
              <DynamicCodeBlock
                lang='bash'
                code='bun create pyloid-app@latest'
              />
            </CodeBlockTab>
          </CodeBlockTabs>

          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            <Button size='lg' className='text-base px-8'>
              <Link href='/docs'>Quick Start</Link>
            </Button>
            <Button variant='outline' size='lg' className='text-base px-8'>
              <Link href='https://discord.gg/VTqexxxTy9' target='_blank'>
                Discord
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

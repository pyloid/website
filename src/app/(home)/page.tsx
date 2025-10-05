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
import { FeaturesSection } from './components/FeatureSection';

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

      <FeaturesSection />

      {/* Community Links */}
      <div className=''>
        <div className='container mx-auto px-4 py-12'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-8'>
              <p className='text-muted-foreground text-sm mb-6'>
                Join our community
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto'>
              <Link
                href='https://discord.gg/VTqexxxTy9'
                target='_blank'
                className='group relative overflow-hidden rounded-xl bg-card border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300'
              >
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors'>
                    <svg
                      className='w-6 h-6 text-blue-600 dark:text-blue-400'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.191.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z' />
                    </svg>
                  </div>
                  <div className='flex-1 text-left'>
                    <div className='font-medium text-foreground group-hover:text-primary transition-colors'>
                      Discord
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      Community Chat
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href='/docs'
                className='group relative overflow-hidden rounded-xl bg-card border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300'
              >
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors'>
                    <svg
                      className='w-6 h-6 text-green-600 dark:text-green-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                      />
                    </svg>
                  </div>
                  <div className='flex-1 text-left'>
                    <div className='font-medium text-foreground group-hover:text-primary transition-colors'>
                      Documentation
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      API & Guides
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href='https://github.com/pyloid/pyloid'
                target='_blank'
                className='group relative overflow-hidden rounded-xl bg-card border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300'
              >
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-lg bg-gray-500/10 dark:bg-gray-400/10 flex items-center justify-center group-hover:bg-gray-500/20 dark:group-hover:bg-gray-400/20 transition-colors'>
                    <svg
                      className='w-6 h-6 text-gray-700 dark:text-gray-300'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
                    </svg>
                  </div>
                  <div className='flex-1 text-left'>
                    <div className='font-medium text-foreground group-hover:text-primary transition-colors'>
                      GitHub
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      Source Code
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';
import { CopyMarkdownButton } from '@/components/copy-markdown-button';
import fs from 'fs';
import path from 'path';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  // Read the original markdown file
  let markdownContent = '';
  try {
    const filePath = path.join(
      process.cwd(),
      'content',
      'docs',
      ...(params.slug || [])
    );
    const mdxPath = `${filePath}.mdx`;
    if (fs.existsSync(mdxPath)) {
      markdownContent = fs.readFileSync(mdxPath, 'utf-8');
    }
  } catch (error) {
    console.error('Failed to read markdown file:', error);
  }

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <div className='flex items-start justify-between gap-4 mb-4'>
        <div className='flex-1'>
          <DocsTitle>{page.data.title}</DocsTitle>
          <DocsDescription>{page.data.description}</DocsDescription>
        </div>
        {markdownContent && (
          <CopyMarkdownButton
            markdown={markdownContent}
            className='mt-1 shrink-0'
          />
        )}
      </div>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

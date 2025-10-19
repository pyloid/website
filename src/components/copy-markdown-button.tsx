'use client';

import { Check, FileText } from 'lucide-react';
import { useCopyButton } from 'fumadocs-ui/utils/use-copy-button';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/cn';

export function CopyMarkdownButton({
  markdown,
  className,
}: {
  markdown: string;
  className?: string;
}) {
  const [checked, onClick] = useCopyButton(() => {
    void navigator.clipboard.writeText(markdown);
  });

  return (
    <button
      type='button'
      data-checked={checked || undefined}
      className={cn(
        buttonVariants({
          variant: 'outline',
          size: 'sm',
        }),
        'gap-2 hover:text-fd-accent-foreground data-[checked]:text-fd-accent-foreground',
        className
      )}
      aria-label={checked ? 'Copied Markdown' : 'Copy Markdown'}
      onClick={onClick}
    >
      {checked ? (
        <>
          <Check className='size-4' />
          Copied!
        </>
      ) : (
        <>
          <FileText className='size-4' />
          Copy Markdown
        </>
      )}
    </button>
  );
}

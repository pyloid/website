import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import Logo from '@/components/Logo';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <>
            <Logo />
            Pyloid
          </>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}

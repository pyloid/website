import defaultMdxComponents from 'fumadocs-ui/mdx';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import { Mermaid } from '@/components/mdx/mermaid';
import Function from '@/components/funtion';
import { TypeTable } from '@/components/type-table';
import { Returns } from '@/components/returns';
import Link from 'fumadocs-core/link';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    Mermaid,
    Function,
    TypeTable,
    Returns,
    Link,
    img: (props) => <ImageZoom {...(props as any)} />,
    ...components,
  };
}

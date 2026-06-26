import { getPageImage, getPageMarkdownUrl, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig } from '@/lib/shared';

// Helper to flatten the tree
function flattenTree(nodes: any[]): any[] {
  const items: any[] = [];
  for (const node of nodes) {
    if (node.type === 'page') {
      items.push(node);
    } else if (node.type === 'folder') {
      if (node.index) {
        items.push(node.index);
      }
      items.push(...flattenTree(node.children));
    }
  }
  return items;
}

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;

  // Compute footer items based on flat page tree
  const tree = source.getPageTree();
  const flatItems = flattenTree(tree.children);
  const currentIndex = flatItems.findIndex(item => item.url === page.url);
  
  let previousItem = undefined;
  let nextItem = undefined;
  
  if (currentIndex > 0) {
    const prev = flatItems[currentIndex - 1];
    const prevPage = source.getPages().find(p => p.url === prev.url);
    if (prevPage) {
      previousItem = {
        name: 'Previous',
        url: prev.url,
        description: '', // Explicitly empty to hide the description
      };
    }
  }
  
  if (currentIndex !== -1 && currentIndex < flatItems.length - 1) {
    const next = flatItems[currentIndex + 1];
    const nextPage = source.getPages().find(p => p.url === next.url);
    if (nextPage) {
      nextItem = {
        name: 'Next',
        url: next.url,
        description: '', // Explicitly empty to hide the description
      };
    }
  }

  return (
    <DocsPage 
      toc={page.data.toc} 
      full={page.data.full} 
      footer={{ 
        className: "nextra-footer",
        items: { previous: previousItem, next: nextItem }
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
        />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
      <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground border-t pt-6">
        <div className="flex gap-4">
          <a
            href={`https://github.com/${gitConfig.user}/${gitConfig.repo}/edit/${gitConfig.branch}/content/docs/${(page as any).file?.path ?? (page as any).path ?? `${page.slugs.join('/')}.mdx`}`}
            target="_blank"
            rel="noreferrer"
            className="hover:underline hover:text-foreground transition-colors"
          >
            Edit this page on GitHub
          </a>
          <span className="opacity-50">•</span>
          <a
            href={`https://github.com/${gitConfig.user}/${gitConfig.repo}/issues/new?title=Issue%20with%20%60${(page as any).file?.path ?? (page as any).path ?? `${page.slugs.join('/')}.mdx`}%60&labels=feedback`}
            target="_blank"
            rel="noreferrer"
            className="hover:underline hover:text-foreground transition-colors"
          >
            Report an issue
          </a>
        </div>
        {page.data.lastModified ? (
          <div>
            Last updated on{' '}
            {new Date(page.data.lastModified).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        ) : null}
      </div>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}

import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions}
      // the position of navbar
      nav={{ ...baseOptions.nav, mode: 'top' }}
      // the position of Sidebar Tabs
      tabMode="navbar"
      tree={source.pageTree}
    >
      {children}
    </DocsLayout>
  );
}
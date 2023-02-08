import { Paperclip } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="container">
      <div className="flex h-24 items-center justify-between gap-4 border-t border-t-slate-200 py-10">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Paperclip className="h-6 w-6 text-slate-700" />
          <p className="text-left text-sm leading-loose text-slate-700">
            Reference by{' '}
            <a
              href="https://twitter.com/shadcn"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn
            </a>
            . The source code is available on{' '}
            <a
              href="https://github.com/JHSeo-git/practice-tab-navigation"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

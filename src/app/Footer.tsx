'use client';

import { clsx } from 'clsx/lite';
import AppGrid from '../components/AppGrid';
import ThemeSwitcher from '@/app/ThemeSwitcher';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  PATH_ROOT,
  isPathAdmin,
  isPathSignIn,
} from './path';
import SubmitButtonWithStatus from '@/components/SubmitButtonWithStatus';
import { signOutAction } from '@/auth/actions';
import AnimateItems from '@/components/AnimateItems';
import { useAppState } from '@/app/AppState';
import Spinner from '@/components/Spinner';
import { useAppText } from '@/i18n/state/client';
import { LANDING_BRAND } from '@/landing/brand';
import { LANDING_CONTENT } from '@/landing/content';

export default function Footer() {
  const pathname = usePathname();
  const isLandingPage = pathname === PATH_ROOT;

  const {
    userEmail,
    userEmailEager,
    isCheckingAuth,
    clearAuthStateAndRedirectIfNecessary,
  } = useAppState();

  const appText = useAppText();

  const showFooter = !isPathSignIn(pathname);

  const shouldAnimate = !isPathAdmin(pathname);

  let footerContent;

  if (isLandingPage && !(userEmail || userEmailEager)) {
    return showFooter
      ? <footer className={clsx(
        '-mx-3 border-t border-[#e3dacf] px-6 py-12 lg:-mx-6',
        'bg-[#fbfaf7] text-[#22282e]',
      )}>
        <div className={clsx(
          'mx-auto flex max-w-6xl flex-col items-center justify-between',
          'gap-6 text-center md:flex-row md:text-left',
        )}>
          <div>
            <p className={clsx(
              '[font-family:var(--font-landing-serif)]',
              'text-lg text-[#22282e]',
            )}>
              {LANDING_BRAND.name}
            </p>
            <p className={clsx(
              '[font-family:var(--font-landing-sans)]',
              'mt-1 text-sm text-[#717274]',
            )}>
              {LANDING_CONTENT.footer.address}
            </p>
          </div>
          <p className={clsx(
            '[font-family:var(--font-landing-sans)]',
            'text-sm text-[#717274]',
          )}>
            © {new Date().getFullYear()} {LANDING_BRAND.name}
          </p>
        </div>
      </footer>
      : null;
  } else if (userEmail || userEmailEager) {
    footerContent = <>
      <div className="truncate max-w-full">
        {userEmail || userEmailEager}
      </div>
      <form
        action={() => signOutAction()
          .then(clearAuthStateAndRedirectIfNecessary)}
      >
        <SubmitButtonWithStatus styleAs="link">
          {appText.auth.signOut}
        </SubmitButtonWithStatus>
      </form>
    </>;
  } else if (isCheckingAuth) {
    footerContent = <Spinner size={16} className="translate-y-[2px]" />;
  } else {
    footerContent = <Link href={PATH_ROOT}>
      {LANDING_BRAND.shortName}
    </Link>;
  }

  return (
    <AppGrid
      contentMain={
        <AnimateItems
          animateOnFirstLoadOnly
          type={!shouldAnimate ? 'none' : 'bottom'}
          distanceOffset={10}
          items={showFooter
            ? [<div
              key="footer"
              className={clsx(
                isLandingPage && !(userEmail || userEmailEager)
                  ? [
                    'flex flex-col gap-4 border-t border-stone-900/10',
                    'bg-[#f8f4ed] py-6 md:flex-row',
                    'md:items-end md:justify-between',
                  ].join(' ')
                  : 'flex items-center gap-1 text-dim min-h-10',
              )}>
              <div className={clsx(
                isLandingPage && !(userEmail || userEmailEager)
                  ? [
                    'flex grow flex-col gap-4',
                    'md:flex-row md:items-end md:justify-between',
                  ].join(' ')
                  : 'flex gap-x-3 xs:gap-x-4 grow flex-wrap',
              )}>
                {footerContent}
              </div>
              <div className="flex items-center h-10">
                <ThemeSwitcher />
              </div>
            </div>]
            : []}
        />}
    />
  );
}

'use client';

import { clsx } from 'clsx/lite';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import AppGrid from '../components/AppGrid';
import AppViewSwitcher, { SwitcherSelection } from '@/app/AppViewSwitcher';
import {
  PATH_GALLERY_HOME,
  PATH_ROOT,
  isPathAdmin,
  isPathFull,
  isPathGrid,
  isPathProtected,
  isPathSignIn,
} from '@/app/path';
import AnimateItems from '../components/AnimateItems';
import {
  GRID_HOMEPAGE_ENABLED,
  NAV_CAPTION,
} from './config';
import { useRef, useState } from 'react';
import useStickyNav from './useStickyNav';
import { useAppState } from '@/app/AppState';
import { LANDING_BRAND } from '@/landing/brand';
import useScrollDirection from '@/utility/useScrollDirection';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_HEIGHT_CLASS = NAV_CAPTION
  ? 'min-h-[4rem] sm:min-h-[5rem]'
  : 'min-h-[4rem]';

const LANDING_LINKS = [{
  label: 'Home',
  href: PATH_ROOT,
}, {
  label: 'About',
  href: '#about',
}, {
  label: 'Services',
  href: '#services',
}, {
  label: 'Gallery',
  href: PATH_GALLERY_HOME,
}, {
  label: 'Contact',
  href: '#contact',
}];

export default function NavClient({
  navTitle,
  navCaption,
  animate,
}: {
  navTitle: string
  navCaption?: string
  animate: boolean
}) {
  const ref = useRef<HTMLElement>(null);

  const pathname = usePathname();
  const showNav = !isPathSignIn(pathname);
  const isLandingPage = pathname === PATH_ROOT;
  const { scrollY } = useScrollDirection();
  const landingNavScrolled = isLandingPage && scrollY > 48;
  const [isLandingMenuOpen, setIsLandingMenuOpen] = useState(false);

  const {
    hasLoadedWithAnimations,
  } = useAppState();

  const {
    classNameStickyContainer,
    classNameStickyNav,
    isNavVisible,
  } = useStickyNav(ref, !isPathAdmin(pathname));

  const switcherSelectionForPath = (): SwitcherSelection | undefined => {
    if (pathname === PATH_GALLERY_HOME) {
      return GRID_HOMEPAGE_ENABLED ? 'grid' : 'full';
    } else if (isPathGrid(pathname)) {
      return 'grid';
    } else if (isPathFull(pathname)) {
      return 'full';
    } else if (isPathProtected(pathname)) {
      return 'admin';
    }
  };

  if (isLandingPage) {
    return (
      showNav
        ? <nav
          className={clsx(
            'fixed inset-x-0 top-0 z-40 w-full transition-all duration-500',
            landingNavScrolled
              ? [
                'border-b border-[#e3dacf] bg-[#fbfaf7]/90',
                'shadow-[0_14px_36px_rgba(22,18,14,0.08)] backdrop-blur-md',
              ].join(' ')
              : 'bg-transparent',
          )}
        >
          <div className={clsx(
            'mx-auto flex max-w-6xl items-center justify-between px-6 py-4',
          )}>
            <Link href={PATH_ROOT} className="min-w-0">
              <div className={clsx(
                '[font-family:var(--font-landing-serif)]',
                [
                  'text-xl leading-none shadow-none',
                  'transition-colors duration-500',
                ].join(' '),
                landingNavScrolled ? 'text-[#22282e]' : 'text-[#fbfaf7]',
              )}>
                {LANDING_BRAND.name}
              </div>
            </Link>

            <div className={clsx(
              'hidden gap-8 md:flex',
              '[font-family:var(--font-landing-sans)]',
              [
                'text-sm uppercase tracking-[0.15em]',
                'transition-colors duration-500',
              ].join(' '),
              landingNavScrolled ? 'text-[#22282e]' : 'text-[#fbfaf7]',
            )}>
              {LANDING_LINKS.map(link =>
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-opacity hover:opacity-70"
                >
                  {link.label}
                </a>)}
            </div>

            <button
              type="button"
              onClick={() => setIsLandingMenuOpen(isOpen => !isOpen)}
              aria-label="Toggle navigation"
              className={clsx(
                [
                  'border-none bg-transparent p-0 shadow-none md:hidden',
                  [
                    'transition-colors hover:bg-transparent',
                    'active:bg-transparent',
                  ].join(' '),
                ].join(' '),
                landingNavScrolled ? 'text-[#22282e]' : 'text-[#fbfaf7]',
              )}
            >
              {isLandingMenuOpen
                ? <FiX size={24} />
                : <FiMenu size={24} />}
            </button>
          </div>

          {isLandingMenuOpen &&
            <div className={clsx(
              'overflow-hidden bg-[#fbfaf7]/95 backdrop-blur-md md:hidden',
              'animate-fade-in-from-top',
            )}>
              <div className="flex flex-col gap-4 px-6 py-6">
                {LANDING_LINKS.map(link =>
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsLandingMenuOpen(false)}
                    className={clsx(
                      '[font-family:var(--font-landing-sans)]',
                      [
                        'text-left text-sm uppercase tracking-[0.15em]',
                        'text-[#22282e]',
                      ].join(' '),
                    )}
                  >
                    {link.label}
                  </a>)}
              </div>
            </div>}
        </nav>
        : null
    );
  }

  return (
    <AppGrid
      className={clsx(
        classNameStickyContainer,
      )}
      classNameMain={clsx(
        'pointer-events-auto',
      )}
      contentMain={
        <AnimateItems
          animateOnFirstLoadOnly
          type={animate && !isPathAdmin(pathname) ? 'bottom' : 'none'}
          distanceOffset={10}
          items={showNav
            ? [<nav
              key="nav"
              ref={ref}
              className={clsx(
                isLandingPage
                  ? [
                    'w-full border-b border-stone-900/10',
                    'bg-[#f6f0e8]/96 px-3 py-4 backdrop-blur-xl lg:px-6',
                  ].join(' ')
                  : [
                    'w-full flex items-center bg-main',
                    'md:w-[calc(100%+8px)] md:translate-x-[-4px] md:px-[4px]',
                  ].join(' '),
                !isLandingPage && NAV_HEIGHT_CLASS,
                // Enlarge nav to ensure it fully masks underlying content
                classNameStickyNav,
              )}>
              <AppViewSwitcher
                currentSelection={switcherSelectionForPath()}
                className="translate-x-[-1px]"
                animate={hasLoadedWithAnimations && isNavVisible}
              />
              <div className={clsx(
                'grow text-right min-w-0',
                'translate-y-[-1px]',
              )}>
                <div className={clsx(
                  'truncate overflow-hidden select-none',
                  '[font-family:var(--font-landing-serif)]',
                  'text-[0.9rem] tracking-[0.01em] text-[#17120f]',
                  'sm:text-[1rem]',
                )}>
                  <Link href={PATH_ROOT}>{navTitle}</Link>
                </div>
                {navCaption &&
                  <div className={clsx(
                    'hidden sm:block truncate overflow-hidden',
                    'leading-tight text-dim',
                  )}>
                    {navCaption}
                  </div>}
              </div>
            </nav>]
            : []}
        />
      }
    />
  );
};

import { FunctionComponent } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './NavLink.module.scss';

interface NavLinkProps {
  href: string;
};

export const NavLink: FunctionComponent<NavLinkProps> = ({ href, children }) => {
  const router = useRouter();
  const isActiveRoute = router.pathname === href;

  return (
    <Link href={href}>
      <a className={classNames(styles.text, {
        [styles.active]: isActiveRoute
      })}>{children}</a>
    </Link>
  );
}

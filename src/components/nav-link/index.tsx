'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

import styles from './styles.module.css';

interface INavLinkProps {
  pageLink: string;
  linkName: string;
}

export default function NavLink(props: INavLinkProps) {
  const activePath = usePathname();

  return (
    <Link
      href={props.pageLink}
      className={
        activePath.startsWith(props.pageLink)
          ? `${styles.link} ${styles.active}`
          : styles.link
      }
    >
      {props.linkName}
    </Link>
  );
}

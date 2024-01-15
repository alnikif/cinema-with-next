import React from 'react';
import Link from 'next/link';

type NavItemProps = {
  readonly url: string;
  readonly title: string;
};
export const NavItem: React.FC<NavItemProps> = ({ url, title }) => {
  return <Link href={url}>{title}</Link>;
};

import React from 'react';
import Link from 'next/link';

type LinkCellProps = {
  readonly link: string;
  readonly title?: string
};

export const LinkCell: React.FC<LinkCellProps> = ({ link, title }) => {
  return <Link href={link}>
    {title ? title : link }
  </Link>;
};

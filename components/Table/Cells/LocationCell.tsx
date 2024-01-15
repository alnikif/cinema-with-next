import React from 'react';
import Link from 'next/link';

type LocationCellProps = {
  readonly value: { name: string; url: string };
};

export const LocationCell: React.FC<LocationCellProps> = ({ value }) => {
  return <Link href={value.url}>{value.name}</Link>;
};

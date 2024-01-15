import React from 'react';
import { RickAndMortyType } from '../../../../types/rickAndMortyTypes';
import styles from './RickAndMortyCard.module.scss';
import Link from 'next/link';

export const RickAndMortyCard: React.FC<{ readonly characterData: RickAndMortyType }> = ({ characterData }) => {
  const { id, image, name, gender, species, status, location } = characterData;
  return (
    <div className={styles.CharacterCard}>
      <img src={image} alt={name} />
      <div>
        <Link href={`/rick-and-morty/${id}`} className={styles.link}>
          {name}
        </Link>
      </div>
      <div className={styles.CharacterInfo}>
        <div>{gender}</div>
        <div>{species}</div>
        <div>{status}</div>
      </div>
      <div className={styles.CharacterLocation}>Location: {location?.name}</div>
    </div>
  );
};

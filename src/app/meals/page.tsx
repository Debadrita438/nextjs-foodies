import {Suspense} from 'react';
import Link from 'next/link';
import {Metadata} from 'next';

import styles from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import {getMeals} from '@/backend/meals';

export const metadata: Metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};

function FetchMealList() {
  const getMealList = getMeals();

  return <MealsGrid mealList={getMealList} />;
}

export default function Meals() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={styles.cta}>
          <Link href={'/meals/share'}>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <FetchMealList />
        </Suspense>
      </main>
    </>
  );
}

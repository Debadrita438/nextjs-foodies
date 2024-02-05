import styles from './page.module.css';

export default function MealDetails({params}: {params: {slug: string}}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>{/* image */}</div>
      </header>
      <main></main>
    </>
  );
}

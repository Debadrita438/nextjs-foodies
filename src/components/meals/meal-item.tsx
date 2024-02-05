import Image from 'next/image';
import styles from './meal-item.module.css';
import Link from 'next/link';

interface IMealItemProps {
  image: string;
  title: string;
  summary: string;
  creator: string;
  slug: string;
}

export default function MealItem(props: IMealItemProps) {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={props.image} alt={props.title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{props.title}</h2>
          <p>by {props.creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{props.summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${props.slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}

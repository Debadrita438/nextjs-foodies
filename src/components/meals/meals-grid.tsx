import MealItem from './meal-item';
import styles from './meals-grid.module.css';

interface IMealsGridProps {
  mealList: {
    image: any;
    id: string;
    title: string;
    summary: string;
    creator: string;
    slug: string;
    creator_email: string;
    instructions: string;
  }[];
}

export default function MealsGrid(props: IMealsGridProps) {
  return (
    <ul className={styles.meals}>
      {props.mealList.map(meal => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

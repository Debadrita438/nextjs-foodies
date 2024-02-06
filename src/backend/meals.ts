import sql from 'better-sqlite3';

const db = sql('meals.db');

export function getMeals() {
  // await new Promise(resolve => setTimeout(resolve, 5000));
  // throw new Error('Loading meals failed!');
  return db.prepare('SELECT * FROM meals').all() as {
    image: string;
    id: string;
    title: string;
    summary: string;
    creator: string;
    slug: string;
    email: string;
    instructions: string;
  }[];
}

export function getSelectedMeal(mealSlug: string) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(mealSlug) as {
    image: string;
    id: string;
    title: string;
    summary: string;
    creator: string;
    slug: string;
    email: string;
    instructions: string;
  };
}

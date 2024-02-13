import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = sql('meals.db');

interface IMeal {
  image: any;
  id?: string;
  title: string;
  summary: string;
  creator: string;
  slug: string;
  creator_email: string;
  instructions: string;
}

export function getMeals() {
  // await new Promise(resolve => setTimeout(resolve, 5000));
  // throw new Error('Loading meals failed!');
  return db.prepare('SELECT * FROM meals').all() as IMeal[];
}

export function getSelectedMeal(mealSlug: string) {
  return db
    .prepare('SELECT * FROM meals WHERE slug = ?')
    .get(mealSlug) as IMeal;
}

export const saveMeal = async (meal: IMeal) => {
  meal.slug = slugify(meal.title, {lower: true});
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await (meal.image as any).arrayBuffer();

  stream.write(Buffer.from(bufferedImage), error => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals 
      (title, summary, instructions, creator, creator_email, image, slug) 
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `,
  ).run(meal);
};

'use server';

import {redirect} from 'next/navigation';

import {saveMeal} from './meals';

const isInvalidText = (label: string) => {
  return !label || label.trim() === '';
};

export const shareMeal = async (formData: FormData) => {
  const meal = {
    title: formData.get('title') as string,
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    image: formData.get('image') as any,
    slug: '',
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
  }
  await saveMeal(meal);
  redirect('/meals');
};

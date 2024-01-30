import Link from 'next/link';

export default function MealDetails({params}: {params: {slug: string}}) {
  return (
    <main>
      <h1>meal details</h1>
      <p>{params.slug}</p>
      <p>
        <Link href={'/meals/share'}>Share</Link>
      </p>
    </main>
  );
}

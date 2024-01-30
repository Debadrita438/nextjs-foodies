import Link from 'next/link';

export default function Meals() {
  return (
    <main>
      <h1>Welcome to Meals List</h1>
      <p style={{width: '60%'}}>
        <Link href={'/meals/chowmin'}>Chowmin</Link>
      </p>
      <p style={{width: '60%'}}>
        <Link href={'/meals/burger'}>Burger</Link>
      </p>
    </main>
  );
}

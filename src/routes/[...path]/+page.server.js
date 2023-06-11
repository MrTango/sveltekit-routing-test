/** @type {import('./$types').EntryGenerator} */
export async function entries() {
  return [
    { slug: '' },
    { slug: 'bla' },
    { slug: 'bla/blub/' }
  ];
}

export const prerender = true;


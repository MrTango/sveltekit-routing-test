/** @type {import('./$types').EntryGenerator} */
export async function entries() {
  return [
    { path: '' },
    { path: 'bla' },
    { path: 'bla/blub' }
  ];
}

export const prerender = true;


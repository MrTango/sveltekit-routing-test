/** @type {import('./$types').EntryGenerator} */
export async function entries() {
  return [
    { slug: '' },
    { slug: 'bla' },
    { slug: 'bla/blub/' }
  ];
}

/** @type {import('./$types').PageLoad} */
export async function load(event) {
  console.log(event.params)
  return {
    'title': 'some title',
    'description': 'some description',
    'path': event.params.path
  }
}

export const prerender = true;


export const prerender = true;
export const ssr = true;
export const trailingSlash = 'always';



/** @type {import('./$types').PageLoad} */
export async function load(event) {
  console.log(event.params)
  return {
    'title': 'some title',
    'description': 'some description',
    'path': event.params.path
  }
}

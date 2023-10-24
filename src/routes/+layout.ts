export const prerender = true
export async function load({ url }) {
	console.log(url.pathname)
	return {
		url: url.pathname
	}
}

import { getContent, getBuilderSearchParams } from '@builder.io/sdk-svelte';
import { BUILDER_PUBLIC_API_KEY } from '$lib/apiKey';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, fetch }) {
    // fetch your Builder content
    // const content = await getContent({
    //     model: 'page',
    //     apiKey: BUILDER_PUBLIC_API_KEY,
    //     options: getBuilderSearchParams(url.searchParams),
    //     userAttributes: {
    //         urlPath: '/home'
    //     }
    // });

    const encodedUrl = encodeURIComponent('/home');
    /** @type {{data: {html: string}}} */
    const { data } =
        await fetch(`https://cdn.builder.io/api/v1/html/page?apiKey=${BUILDER_PUBLIC_API_KEY}&url=${encodedUrl}`)
            .then((res) => res.json())
            .catch((e) => {
                console.log({ e })
            });
    // console.log({ data, content })

    return { pageHtml: data.html };
}
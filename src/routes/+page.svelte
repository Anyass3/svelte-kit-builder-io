<script>
	import Footer from '$lib/footer.svelte';
	// import { isPreviewing, RenderContent } from '@builder.io/sdk-svelte';
	// import { BUILDER_PUBLIC_API_KEY } from '$lib/apiKey';
	// import { browser } from '$app/environment';

	// this data comes from the function in `+page.server.js`, which runs on the server only
	/** @type {import('./$types').PageData} */
	export let data;

	$: console.log({ data });

	// we want to show unpublished content when in preview mode.
	// const canShowContent = data.content || isPreviewing();
	const canShowContent = data.pageHtml; // || isPreviewing();
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>
	<h1>Welcome to SvelteKit</h1>

	<div>Below is your Builder Content:</div>
	{#if canShowContent}
		<div>page Title: {data.content?.data?.title || 'Unpublished'}</div>
		{@html data.pageHtml}
		<!-- Render builder content with all required props -->
		<!-- <RenderContent model="page" content={data.content} apiKey={BUILDER_PUBLIC_API_KEY} /> -->
		<!-- customComponents={CUSTOM_COMPONENTS} -->
	{:else}
		Content Not Found
	{/if}
</main>

<Footer />

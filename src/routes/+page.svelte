<script>
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

<footer>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</footer>

<style>
	h1 {
		width: 100%;
		font-size: 2rem;
		text-align: center;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>

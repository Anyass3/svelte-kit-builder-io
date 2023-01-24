<script>
	import Footer from '$lib/footer.svelte';
	import { isPreviewing, RenderContent } from '@builder.io/sdk-svelte';
	import { BUILDER_PUBLIC_API_KEY } from '$lib/apiKey';

	/** @type {import('./$types').PageData} */
	export let data;

	const canShowContent = data.content || isPreviewing();
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>
	<h1>Welcome to SvelteKit</h1>
	{#if canShowContent}
		<div>page Title: {data.content?.data?.title || 'Unpublished'}</div>
		{@html data.pageHtml}
		<!-- Render builder content with all required props -->
		<RenderContent model="page" content={data.content} apiKey={BUILDER_PUBLIC_API_KEY} />
	{:else}
		Content Not Found
	{/if}
</main>

<Footer />

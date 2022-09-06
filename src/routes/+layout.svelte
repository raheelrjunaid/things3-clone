<script>
	import '../app.css';
	import 'iconify-icon';
	import Sidebar from '$lib/sidebar/Sidebar.svelte';
</script>

<div class="flex">
	<Sidebar />
	<main>
		<slot />
	</main>
</div>

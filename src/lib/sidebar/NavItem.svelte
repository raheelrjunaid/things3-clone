<script>
	export let title;
</script>

<li class="flex gap-1.5 items-center font-medium">
	<slot name="icon" />
	<span>{title}</span>
</li>

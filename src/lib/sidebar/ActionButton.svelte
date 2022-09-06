<script lang="ts">
	const buttons = [
		{
			iconColor: '#990000',
			bgColor: 'group-hover:bg-[#FF5F58]',
			icon: 'heroicons:x-mark-20-solid'
		},
		{
			iconColor: '#985601',
			bgColor: 'group-hover:bg-[#FEBC2D]',
			icon: 'heroicons:minus-20-solid'
		},
		{
			iconColor: '#006301',
			bgColor: 'group-hover:bg-[#26C63F]',
			icon: 'ci:expand'
		}
	];
</script>

<div class="flex gap-2 pb-5 pt-3 -ml-1 group">
	{#each buttons as { icon, bgColor, iconColor }}
		<div
			class="w-3 h-3 rounded-full border border-neutral-600 {bgColor} group-hover:border-0 flex items-center justify-center"
		>
			<iconify-icon
				{icon}
				style="color: {iconColor};"
				width="10"
				class="group-hover:visible invisible"
			/>
		</div>
	{/each}
</div>

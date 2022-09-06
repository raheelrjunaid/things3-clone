<script>
	import NavItem from '$lib/sidebar/NavItem.svelte';
	import ActionButtons from '$lib/sidebar/ActionButton.svelte';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { Transition, Menu, MenuButton, MenuItems, MenuItem } from '@rgossiaux/svelte-headlessui';

	const menuItems = [
		[
			{
				title: 'Inbox',
				link: '#',
				icon: 'fluent:mail-inbox-16-filled',
				color: '#1eaff8'
			}
		],
		[
			{
				title: 'Today',
				link: '#',
				icon: 'heroicons:star-20-solid',
				color: '#FFD400'
			},
			{
				title: 'Upcoming',
				link: '#',
				icon: 'heroicons:calendar-days-20-solid',
				color: '#FF326D'
			},
			{
				title: 'Anytime',
				link: '#',
				icon: 'bi:stack',
				color: '#4CAFA5'
			},
			{
				title: 'Someday',
				link: '#',
				icon: 'heroicons:archive-box-20-solid',
				color: '#D2C78D'
			}
		],
		[
			{
				title: 'Logbook',
				link: '#',
				icon: 'heroicons:document-check-20-solid',
				color: '#51C163'
			},
			{
				title: 'Trash',
				link: '#',
				icon: 'bi:trash2-fill',
				color: '#C3C8CD'
			}
		]
	];
</script>

<aside class="bg-neutral-900 px-4 w-64 h-screen select-none text-neutral-200 space-y-4 relative">
	<ActionButtons />
	{#each menuItems as items}
		<ul class="space-y-1">
			{#each items as { title, link, icon, color }}
				<NavItem {title}>
					<iconify-icon
						slot="icon"
						{icon}
						style={`color: ${color || 'inherit'}`}
						width={icon.startsWith('heroicons') ? '18' : '17'}
					/>
				</NavItem>
			{/each}
		</ul>
	{/each}

	<div class="absolute inset-x-0 bottom-0 p-1 border-t border-black/25 flex px-4">
		<Menu class="relative group">
			<MenuButton>
				<button
					class="flex items-center justify-center gap-1.5 text-neutral-300 border hover:border-neutral-700 py-1 px-2 rounded-md border-transparent group-focus-within:bg-neutral-700"
				>
					<iconify-icon icon="heroicons:plus-20-solid" width="20" class="-ml-1" />
					<span>New List</span>
				</button>
			</MenuButton>
			<Transition
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<MenuItems
					class="origin-bottom-left absolute left-0 bottom-9 mt-2 w-80 rounded-md shadow-xl bg-neutral-800 ring-1 ring-black/50 border-neutral-700 border focus:outline-none p-1.5 space-y-1"
				>
					<MenuItem
						let:active
						class="px-2 py-1.5 flex gap-1.5 font-medium text-neutral-200 hover:bg-[#276CC2] rounded-sm "
						on:click={() => console.log('clicked')}
					>
						<iconify-icon icon="ci:pie-chart-75" width="16" class="text-blue-400 mt-0.5" />
						<div class="flex flex-col gap-0.5">
							<span>New Project</span>
							<span class="text-white/50 leading-tight"
								>Define a goal, then work towards it one to-do at a time.</span
							>
						</div>
					</MenuItem>
					<div class="w-full border-t border-neutral-700" />
					<MenuItem
						let:active
						class="px-2 py-1.5 flex gap-1.5 font-medium text-neutral-200 hover:bg-[#276CC2] rounded-sm"
					>
						<iconify-icon icon="fluent:box-16-regular" width="17" class="text-emerald-300 mt-0.5" />
						<div class="flex flex-col gap-0.5">
							<span>New Area</span>
							<span class="text-white/50 leading-tight">
								Group your projects and to-dos based on different responsibilities, such as Family
								or Work.
							</span>
						</div>
					</MenuItem>
				</MenuItems>
			</Transition>
		</Menu>
	</div>
</aside>

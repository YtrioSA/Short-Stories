
<svelte:head>
	 <title> SHORT STORIES </title>
</svelte:head>

<script>

	 import "../app.postcss";
	 import { initializeStores, Drawer, getDrawerStore } from "@skeletonlabs/skeleton";
	 import { AppShell, AppBar } from "@skeletonlabs/skeleton";
	 import Icon from "@iconify/svelte";

	 initializeStores();
	 const drawerStore = getDrawerStore();

	 function drawerOpen() {
		drawerStore.open({});
	}

	function drawerClose() {
		drawerStore.close();
	}

</script>

<Drawer>
	<h1 class="flex justify-center items-center gap-3 h1 m-4 p-4 bg-[#000] rounded-lg border-2">
		<Icon icon="clarity:compass-solid" />
		<span> Navegação </span> 
	</h1>
	<hr class="w-full">
	<ul class="flex flex-col gap-3 mt-5">
		<a href="/gender/drama">
			<li on:click={drawerClose} class="flex text-[#FFF] items-center gap-3  hover:bg-white hover:text-[#000] cursor-pointer p-4">
				<Icon class="w-6 h-6" icon="lucide:drama"/> 
				<span> Dramas </span> 
			</li>
		</a>
		<a href="/gender/tragedy">
			<li on:click={drawerClose} class="flex text-[#FFF] items-center gap-3  hover:bg-white hover:text-[#000] cursor-pointer p-4">
				<Icon class="w-6 h-6" icon="mdi:tragedy"/> 
				<span> Tragédias </span> 
			</li>
		</a>
		<a href="/gender">
			<li on:click={drawerClose} class="flex text-[#FFF] items-center gap-3  hover:bg-white hover:text-[#000] cursor-pointer p-4">
				<Icon class="w-6 h-6" icon="fa-solid:book"/> 
				<span> Gêneros </span> 
			</li>
		</a>
	</ul>
</Drawer>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar slotDefault="flex justify-center gap-5">
			<svelte:fragment slot="lead">
				<a href="/" title="Histórias curtas" class="flex gap-3 items-center">
					<Icon class="w-8 h-8" icon="ic:baseline-auto-stories"/>
					<strong class="text-xl uppercase"> Short Stories </strong>
				</a>
				<div class="flex items-center">
					<button on:click={drawerOpen} class="sm:hidden md:hidden btn btn-sm mr-4">
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="default">
				<a href="/gender" title="Histórias" rel="noreferrer" class="items-center btn variant-filled hidden md:flex">
					<Icon class="w-6 h-6" icon="fa-solid:book"/> 
						<span> Gêneros </span>  
				</a>

				<a href="/gender/drama" title="Histórias dramáticas" rel="noreferrer" class="items-center btn variant-filled hidden md:flex">
					<Icon class="w-6 h-6" icon="lucide:drama" /> 
					<span> Dramas </span> 
				</a>
				<a href="/gender/tragedy" title="Histórias trágicas" rel="noreferrer" class="items-center btn variant-filled hidden md:flex">
					<Icon class="w-6 h-6" icon="mdi:tragedy" /> 
					<span> Tragédias </span> 
				</a>
			</svelte:fragment>	
			<svelte:fragment slot="trail">
				<a
					title="Meu Perfil no Github"
					class="flex gap-2 items-center btn btn-sm variant-ghost-surface"
					href="https://github.com/YtrioSA"
					target="_blank"
					rel="noreferrer">
					<Icon icon="brandico:github"/>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>

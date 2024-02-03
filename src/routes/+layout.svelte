
<svelte:head>
	 <title> SHORT STORIES </title>
</svelte:head>

<script>

	 import "../app.postcss";
	 import { AppShell, AppBar } from "@skeletonlabs/skeleton";
	 import Icon from "@iconify/svelte";

</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar slotDefault="flex justify-center gap-5">
			<svelte:fragment slot="lead">
				<a href="/" title="Histórias curtas para pessoas tristes" class="flex gap-3 items-center">
					<Icon class="w-8 h-8" icon="ic:baseline-auto-stories"/>
					<strong class="text-xl uppercase"> Short Stories </strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="default">
				<a href="/gender/drama" title="Histórias dramaticas" rel="noreferrer" class="flex items-center btn variant-filled">
					<Icon class="w-6 h-6" icon="lucide:drama" /> 
					<span> Dramas </span> 
				</a>
				<a href="/gender/tragedy" title="Histórias tragicas" rel="noreferrer" class="flex items-center btn variant-filled">
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

<script>

	import Icon from "@iconify/svelte";
	import { Paginator } from "@skeletonlabs/skeleton";
	import { goto } from '$app/navigation';
	

	const next = () => {
		goto("/gender/tragedy/o-crepúsculo-da-aldeia-serena");
	}

	const source = [
		{
			cover: "https://i.imgur.com/zGzdvnS.jpeg",
			title: "A Magia Amaldiçoada",
			part_title: "A Descoberta do Artefato",
			sound: "../../The-Cursed-Magic/The-Discovery-of-the-Artifact.mp3",
			text: `
                Em um reino encantado, a jovem feiticeira Elara descobre um artefato mágico 
                escondido nas profundezas da floresta proibida. Desconhecendo seu poder, ela 
                decide usá-lo para proteger sua aldeia de uma iminente ameaça. 
            `
		},
		{
			cover: "https://i.imgur.com/jcYkeg4.jpeg",
			title: "A Magia Amaldiçoada",
			part_title: "O Preço do Poder",
			sound: "../../The-Cursed-Magic/The-Price-of-Power.mp3",
			text: `
                A magia do artefato concede a Elara habilidades extraordinárias, 
                mas a um custo terrível. Cada feitiço lançado drena sua vitalidade, 
                forçando-a a fazer escolhas difíceis entre seu próprio bem-estar e a segurança de seu povo.
            `
		},
		{
			cover: "https://i.imgur.com/iE15XHl.jpeg",
			title: "A Magia Amaldiçoada",
			part_title: "A Escolha Impossível",
			sound: "../../The-Cursed-Magic/The-Impossible-Choice.mp3",
			text: `
                Quando a ameaça se intensifica, Elara enfrenta uma escolha impossível: usar o 
                artefato para salvar sua aldeia, sacrificando lentamente a si mesma, ou recusar-se a 
                usá-lo e assistir à destruição que se aproxima.   
            `
		},
		{
			cover: "https://i.imgur.com/Z1r2TIm.jpeg",
			title: "A Magia Amaldiçoada",
			part_title: "A Maldição Revelada",
			sound: "../../The-Cursed-Magic/The-Curse-Revealed.mp3",
			text: `
                Com cada feitiço, a maldição do artefato se revela. Elara percebe tarde demais que sua 
                busca pelo poder resultou em uma tragédia inevitável. Seu corpo enfraquecido, ela 
                luta para reverter o destino que ela própria selou.
            `
		},
		{
			cover: "https://i.imgur.com/hQWESH2.jpeg",
			title: "A Magia Amaldiçoada",
			part_title: "A Despedida Final",
			sound: "../../The-Cursed-Magic/The-Final-Farewell.mp3",
			text: `
                Na batalha final, Elara usa a última gota de sua energia para salvar sua aldeia,
                tornando-se uma vítima de sua própria escolha. O artefato, agora livre de sua posse,
                desvanece-se, deixando para trás um reino marcado pela tragédia de uma feiticeira
                que sacrificou tudo em busca de proteção.
            `
		}
	];

	let paginationSettings = {
		page:  0,
		limit: 1,
		size:  source.length,
		amounts: [1]
	};
	
	let paginatedSource;
	$: {
		paginatedSource = source.slice(
			paginationSettings.page * paginationSettings.limit,
			paginationSettings.page * paginationSettings.limit + paginationSettings.limit
		);
	}
</script>

<div class="bg-[#000] w-full h-full flex justify-center items-center">
	<div class="bg-[#000] w-full md:w-1/2 h-full flex flex-col justify-center items-center">
		<div class="flex">
			<button on:click={next}>
				<Icon class="w-16 h-16 cursor-pointer" icon="ei:arrow-right"/>
			</button>
		</div>
	{#each paginatedSource as row}
		<div class="card w-full md:w-[550px] border-2 mb-6">
			<header
				style="background-image: url({row.cover})"
				class="card-header background rounded-3xl rounded-b-none h-[145px] w-full"
			></header>
			<section class="flex flex-col items-center gap-5 justify-center p-4">
				{#if row.sound === '../../The-Cursed-Magic/The-Discovery-of-the-Artifact.mp3'}
					<audio autoplay loop>
						<source src="../../The-Cursed-Magic/The-Discovery-of-the-Artifact.mp3" type="audio/mp3" />
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

				{#if row.sound === '../../The-Cursed-Magic/The-Price-of-Power.mp3'}
					<audio autoplay loop>
						<source src="../../The-Cursed-Magic/The-Price-of-Power.mp3" type="audio/mp3" />
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

				{#if row.sound === '../../The-Cursed-Magic/The-Impossible-Choice.mp3'}
					<audio autoplay loop>
						<source src="../../The-Cursed-Magic/The-Impossible-Choice.mp3" type="audio/mp3" />
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

				{#if row.sound === '../../The-Cursed-Magic/The-Curse-Revealed.mp3'}
					<audio autoplay loop>
						<source src="../../The-Cursed-Magic/The-Curse-Revealed.mp3" type="audio/mp3" />
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

				{#if row.sound === '../../The-Cursed-Magic/The-Final-Farewell.mp3'}
					<audio autoplay loop>
						<source src="../../The-Cursed-Magic/The-Final-Farewell.mp3" type="audio/mp3" />
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}
				
				<h3 class="h3">{row.title}</h3>
				<h4 class="text-[#000] h4 font-bold">{row.part_title}</h4>
				<hr class="w-full" />
				<p class="mb-4 mt-0 text-justify font-light leading-relaxed text-[12px]">
					{row.text}
				</p>
			</section>
			<footer class="card-footer">
				<Paginator
					bind:settings={paginationSettings}
					showFirstLastButtons={true}
					showPreviousNextButtons={true}
					justify="justify-center"
					select="hidden"
				/>
			</footer>
		</div>
	{/each}
</div>
</div>

<style>
	.background {
		background-position: center;
		background-size: cover;
	}
</style>

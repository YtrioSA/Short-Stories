<script>
	import { Paginator } from "@skeletonlabs/skeleton";

	const source = [
		{
			cover:      "https://i.imgur.com/BS7H6aM.jpeg",
			title:      "A Maldição da Mansão Ancestral",
			part_title: "A Chegada à Mansão",
			sound:      "../../The-curse-of-the-ancestral-mansion/arrival-at-the-mansion.mp3",
			text: `
				Sarah, herdeira relutante, ansiosa por um novo começo, encontrou-se diante da majestosa mansão ancestral. 
				À medida que a noite se aproximava, a atmosfera mudou. Sombras se materializavam nos corredores, sussurrando 
				segredos obscuros há muito enterrados. O ranger dos degraus parecia uma melodia sinistra de boas-vindas. 
            `
		},
        {
            cover:      "https://i.imgur.com/qLmCyEg.jpeg",
            title:      "A Maldição da Mansão Ancestral",
            part_title: "Espelhos do Passado",
            sound:      "../../The-curse-of-the-ancestral-mansion/mirrors-of-the-past.mp3",
            text: `
				No salão principal, retratos antigos adornavam as paredes. Os olhos das figuras 
				ancestralmente conectadas a Sarah pareciam seguir cada passo. À noite, os olhares ganhavam vida, 
				refletindo um passado sombrio que se entrelaçava com o presente. A mansão revelava segredos há muito esquecidos.
            `
        },
		{
			cover: "https://i.imgur.com/C7O8kP3.jpeg",
			title: "A Maldição da Mansão Ancestral",
			part_title: "O Sussurro Noturno",
			sound: "../../The-curse-of-the-ancestral-mansion/the-night-whisper.mp3",
			text: `  
				O quarto de Sarah tornou-se um palco de pesadelos. Cada noite, um sussurro ecoava nas sombras. 
				Uma voz entrelaçada com lamentos, provocando sonhos perturbadores que transcendiam o imaginário. 
				A linha entre o real e o sobrenatural se esvaía.
			`
		},
		{
			cover: "https://i.imgur.com/HzJKQZk.jpeg",
			title: "A Maldição da Mansão Ancestral",
			part_title: "Manifestações Sobrenaturais",
			sound: "../../The-curse-of-the-ancestral-mansion/supernatural-manifestations.mp3",
			text: `
				Sombras tomavam forma, contorcendo-se em manifestações sinistras. Sarah, enfrentando uma cacofonia sobrenatural, 
				desvendou a ligação entre o passado da família e o horror presente. A mansão se tornou um palco de confronto entre 
				dois mundos, onde a linha entre vida e morte se desfazia.
			`
		},
		{
			cover: "https://i.imgur.com/cWdJfi2.jpeg",
			title: "A Maldição da Mansão Ancestral",
			part_title: "A Confrontação Final",
			sound: "../../The-curse-of-the-ancestral-mansion/the-final-confrontation.mp3",
			text: `
				Na última noite, Sarah enfrentou a entidade ancestral. A mansão tremeu com uma batalha sobrenatural, 
				luzes dançando nas sombras. Cada corredor reverberava com a intensidade da luta. Ao selar seu destino e o 
				da mansão, ela finalmente quebrou a maldição que assolava sua linhagem, mas não sem sacrifícios e um preço a ser pago.      	
			`
		}
	];

	let paginationSettings = {
		page:    0,
		limit:   1,
		size:    source.length,
		amounts: [1]
	};

	let paginatedSource;
	$: {
		    paginatedSource = source.slice(
			paginationSettings.page * paginationSettings.limit,
			paginationSettings.page * paginationSettings.limit + paginationSettings.limit);
	}
    
</script>

<div class="bg-[#000] w-full h-full flex flex-col justify-center items-center">
	{#each paginatedSource as row}
		<div class="card w-[550px] border-2">
			<header
				style="background-image: url({row.cover})"
				class="card-header background rounded-3xl rounded-b-none h-[145px] w-full">
            </header>
			<section class="flex flex-col items-center gap-5 justify-center p-4">
				{#if row.sound === "../../The-curse-of-the-ancestral-mansion/arrival-at-the-mansion.mp3"}
					<audio autoplay loop>
						<source src="../../The-curse-of-the-ancestral-mansion/arrival-at-the-mansion.mp3" type="audio/mp3"/>
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

				{#if row.sound === "../../The-curse-of-the-ancestral-mansion/mirrors-of-the-past.mp3"}
					<audio autoplay loop>
						<source src="../../The-curse-of-the-ancestral-mansion/mirrors-of-the-past.mp3" type="audio/mp3"/>
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

				{#if row.sound === "../../The-curse-of-the-ancestral-mansion/the-night-whisper.mp3"}
					<audio autoplay loop>
						<source src="../../The-curse-of-the-ancestral-mansion/the-night-whisper.mp3" type="audio/mp3"/>
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

				{#if row.sound === "../../The-curse-of-the-ancestral-mansion/supernatural-manifestations.mp3"}
					<audio autoplay loop>
						<source src="../../The-curse-of-the-ancestral-mansion/supernatural-manifestations.mp3" type="audio/mp3"/>
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

				{#if row.sound === "../../The-curse-of-the-ancestral-mansion/the-final-confrontation.mp3"}
					<audio autoplay loop>
						<source src="../../The-curse-of-the-ancestral-mansion/the-final-confrontation.mp3" type="audio/mp3"/>
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

				<h3 class="h3">{row.title}</h3>
				<h4 class="text-[#000] h4 font-bold">{row.part_title}</h4>
				<hr class="w-full" />
				<p class="font-mono mb-4 mt-0 text-justify font-light leading-relaxed text-[12px]">
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

<style>
	.background {
        background-position: center;
        background-size: cover;
	}
</style>

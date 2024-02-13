<script>
	import Icon from "@iconify/svelte";
	import { Paginator } from "@skeletonlabs/skeleton";
	import { goto } from "$app/navigation";

	const previus = () => {
		goto("/gender/tragedy/o-crepúsculo-da-aldeia-serena");
	};

	const source = [
		{
			cover: "https://i.imgur.com/fBIdBCh.jpeg",
			title: "A Melodia Perdida",
			part_title: "A Descoberta",
			sound: "../../The-Lost-Melody/Discovery.mp3",
			text: `
            	Em um reino longínquo, cercado por florestas densas e montanhas escarpadas, 
				vivia um jovem chamado Pedro. Desde a infância, ele demonstrava um talento 
				incomum para a música. Seus dedos deslizavam pelas cordas da harpa com uma graça natural, 
				e suas melodias encantavam a todos que as ouviam.
            	Certo dia, enquanto explorava a floresta, Pedro encontrou uma antiga harpa 
				adornada com pedras preciosas. Ao tocá-la, uma melodia melancólica e irresistível emanou do instrumento. Pedro ficou fascinado pela beleza da música e pela história que ela parecia contar.
          `,
		},
		{
			cover: "https://i.imgur.com/9fPNynH.jpeg",
			title: "A Melodia Perdida",
			part_title: "A Maldição",
			sound: "../../The-Lost-Melody/The-Curse.mp3",
			text: `
            	Ao tocar a harpa com frequência, Pedro começou a ter sonhos perturbadores. 
				Neles, uma voz misteriosa o chamava para um lugar distante, prometendo-lhe um destino grandioso. 
				Atormentado por esses sonhos, Pedro decidiu seguir a voz e desvendar o mistério da harpa.
            	Sem saber, ele havia libertado uma maldição antiga que pairava sobre o instrumento. 
				A voz misteriosa pertencia a um mago que, em busca de poder eterno, havia aprisionado 
				sua alma na harpa. Ao tocá-la, Pedro havia se tornado o novo alvo da maldição.
          `,
		},
		{
			cover: "https://i.imgur.com/SQrj4xu.jpeg",
			title: "A Melodia Perdida",
			part_title: "A Jornada",
			sound: "../../The-Lost-Melody/The-journey.mp3",
			text: `
            	Pedro partiu em uma jornada perigosa para encontrar o lugar dos sonhos. 
				Atravessou florestas densas, escalou montanhas gélidas e enfrentou criaturas fantásticas. 
				Ao longo do caminho, a música da harpa o guiava e lhe dava força para continuar.
            	Em cada vilarejo que visitava, Pedro encantava os habitantes com suas melodias. 
				Sua fama como músico talentoso se espalhou por todo o reino, e ele era recebido com honrarias. 
				Mas a maldição o perseguia, e a voz misteriosa se tornava cada vez mais insistente.
          `,
		},
		{
			cover: "https://i.imgur.com/L1cFNPC.jpeg",
			title: "A Melodia Perdida",
			part_title: "A Encruzilhada",
			sound: "../../The-Lost-Melody/The-Crossroads.mp3",
			text: `
            	Finalmente, Pedro chegou ao lugar dos sonhos: um antigo templo em ruínas, 
				situado no topo de uma montanha inacessível. Lá, ele encontrou o mago que o havia amaldiçoado. 
				O mago ofereceu a Pedro a chance de se livrar da maldição e alcançar a fama eterna, mas em troca, ele teria que sacrificar sua alma.
            	Pedro se viu diante de uma encruzilhada: entregar sua alma em troca da fama ou permanecer 
				fiel à sua música e lutar contra a maldição. A escolha era difícil, e o destino de 
				Pedro estava em jogo.
          `,
		},
		{
			cover: "https://i.imgur.com/oqrQ5Hm.jpeg",
			title: "A Melodia Perdida",
			part_title: "O Sacrifício",
			sound: "../../The-Lost-Melody/The-sacrifice.mp3",
			text: `
            	Em um momento de decisão, Pedro recusou a oferta do mago e escolheu destruir a harpa, libertando sua alma da maldição. A melodia melancólica se dissolveu no ar, e o mago, enfurecido, desapareceu em um clarão de luz.
            	Pedro perdeu a fama e a harpa mágica, mas encontrou a paz interior. Ele voltou 
				para sua vila natal e continuou a tocar música, agora livre da maldição e 
				com um novo propósito: compartilhar sua paixão com o mundo.
            	A história de Pedro se tornou uma lenda, um conto sobre a força da música e a 
				importância de seguir os próprios sonhos, mesmo diante das tentações e dos desafios da vida.
          `,
		},
	];

	let paginationSettings = {
		page: 0,
		limit: 1,
		size: source.length,
		amounts: [1],
	};

	let paginatedSource;
	$: {
		paginatedSource = source.slice(
			paginationSettings.page * paginationSettings.limit,
			paginationSettings.page * paginationSettings.limit +
				paginationSettings.limit,
		);
	}
</script>

<div class="bg-[#000] w-full h-full flex justify-center items-center">
	<div
		class="bg-[#000] w-full md:w-1/2 h-full flex flex-col p-4 justify-center items-center"
	>
		<div class="flex">
			<button on:click={previus}>
				<Icon class="w-16 h-16 cursor-pointer" icon="ei:arrow-left" />
			</button>
		</div>
		{#each paginatedSource as row}
			<div class="card w-full md:w-[550px] border-2 mb-6">
				<header
					style="background-image: url({row.cover})"
					class="card-header background rounded-3xl rounded-b-none h-[145px] w-full"
				></header>
				<section
					class="flex flex-col items-center gap-5 justify-center p-4"
				>
					{#if row.sound === "../../The-Lost-Melody/Discovery.mp3"}
						<audio autoplay loop>
							<source
								src="../../The-Lost-Melody/Discovery.mp3"
								type="audio/mp3"
							/>
							Seu navegador não suporta o elemento de áudio.
						</audio>
					{/if}

					{#if row.sound === "../../The-Lost-Melody/The-Curse.mp3"}
						<audio autoplay loop>
							<source
								src="../../The-Lost-Melody/The-Curse.mp3"
								type="audio/mp3"
							/>
							Seu navegador não suporta o elemento de áudio.
						</audio>
					{/if}

					{#if row.sound === "../../The-Lost-Melody/The-journey.mp3"}
						<audio autoplay loop>
							<source
								src="../../The-Lost-Melody/The-journey.mp3"
								type="audio/mp3"
							/>
							Seu navegador não suporta o elemento de áudio.
						</audio>
					{/if}

					{#if row.sound === "../../The-Lost-Melody/The-Crossroads.mp3"}
						<audio autoplay loop>
							<source
								src="../../The-Lost-Melody/The-Crossroads.mp3"
								type="audio/mp3"
							/>
							Seu navegador não suporta o elemento de áudio.
						</audio>
					{/if}

					{#if row.sound === "../../The-Lost-Melody/The-sacrifice.mp3"}
						<audio autoplay loop>
							<source
								src="../../The-Lost-Melody/The-sacrifice.mp3"
								type="audio/mp3"
							/>
							Seu navegador não suporta o elemento de áudio.
						</audio>
					{/if}

					<h3 class="h3">{row.title}</h3>
					<h4 class="text-[#000] h4 font-bold">{row.part_title}</h4>
					<hr class="w-full" />
					<p
						class="mb-4 mt-0 text-justify font-light leading-relaxed text-[12px]"
					>
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

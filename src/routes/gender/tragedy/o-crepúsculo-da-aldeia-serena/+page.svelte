<script>

	import Icon from "@iconify/svelte";
	import { Paginator } from "@skeletonlabs/skeleton";
	import { goto } from '$app/navigation';

	const left = () => {
		goto("/gender/tragedy/a-magia-amaldiçoada");
	}

	const source = [
		{
			cover: "https://i.imgur.com/sIrjR0q.jpeg",
			title: "O Crepúsculo da Aldeia Serena",
			part_title: "A Aldeia Serena",
			sound: "../../The-Twilight-of-the-serene-village/The-Serene-Village.mp3",
			text: `
                Numa aldeia tranquila, onde a paz reinava, viviam os camponeses liderados 
                pelo generoso Senhor Aldrick. Suas terras eram férteis, e todos viviam em harmonia, 
                cultivando a terra e celebrando as festividades medievais.  
            `
		},
		{
			cover: "https://i.imgur.com/DqS8fmf.jpeg",
			title: "O Crepúsculo da Aldeia Serena",
			part_title: "A Peste Negra",
			sound: "../../The-Twilight-of-the-serene-village/The-Black-Death.mp3",
			text: `
                Um dia, uma sombra caiu sobre a aldeia. A Peste Negra chegou, levando a morte e o 
                desespero. A doença se espalhou rapidamente, deixando os habitantes indefesos diante de 
                sua crueldade implacável. 
            `
		},
		{
			cover: "https://i.imgur.com/RJKmkFc.jpeg",
			title: "O Crepúsculo da Aldeia Serena",
			part_title: "Desespero e Abandono",
			sound: "../../The-Twilight-of-the-serene-village/Despair-and-Abandonment.mp3",
			text: `
                Os doentes eram isolados, mas as lágrimas e lamentos ecoavam pelas ruas vazias. O 
                Senhor Aldrick, impotente diante da praga, viu sua amada aldeia transformar-se em 
                um cemitério silencioso. Muitos fugiram em busca de esperança, abandonando suas casas 
                e memórias.
            `
		},
		{
			cover: "https://i.imgur.com/rsaQ6p7.jpeg",
			title: "O Crepúsculo da Aldeia Serena",
			part_title: "A Queda do Senhor Aldrick",
			sound: "../../The-Twilight-of-the-serene-village/The-Fall-of-Lord-Aldrick.mp3",
			text: `
                A situação se agravou, e Aldrick também sucumbiu à Peste Negra. Sua morte abalou 
                os últimos resquícios de esperança na aldeia. Os poucos sobreviventes 
                viam suas vidas desmoronarem diante de seus olhos.  
            `
		},
		{
			cover: "https://i.imgur.com/efaR0GT.jpeg",
			title: "O Crepúsculo da Aldeia Serena",
			part_title: "O Incêndio da Esperança",
			sound: "../../The-Twilight-of-the-serene-village/The-Fire-of-Hope.mp3",
			text: `
                Os que restaram tentaram reconstruir suas vidas, mas a dor era profunda demais. Em
                meio à tristeza, um incêndio devastador consumiu o que restava da aldeia. As chamas
                devoraram as casas e a esperança que ainda persistia.
            `
		},
        {
			cover: "https://i.imgur.com/qO8TSUD.jpeg",
			title: "O Crepúsculo da Aldeia Serena",
			part_title: "O Silêncio Eterno",
			sound: "../../The-Twilight-of-the-serene-village/The-Eternal-Silence.mp3",
			text: `
                A aldeia, outrora serena, tornou-se um lugar desolado e silencioso. A Peste Negra e o
                fogo cruel deixaram apenas ruínas e memórias amargas. A tragédia medieval selou o
                destino daquela comunidade, cujas histórias foram esquecidas nos registros do
                tempo.
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
			<button on:click={left}>
				<Icon class="w-16 h-16 cursor-pointer" icon="ei:arrow-left"/>
			</button>
		</div>
	{#each paginatedSource as row}
		<div class="card w-full md:w-[550px] border-2 mb-6">
			<header
				style="background-image: url({row.cover})"
				class="card-header background rounded-3xl rounded-b-none h-[145px] w-full"
			></header>
			<section class="flex flex-col items-center gap-5 justify-center p-4">
                {#if row.sound === '../../The-Twilight-of-the-serene-village/The-Serene-Village.mp3'}
					<audio autoplay loop>
						<source src="../../The-Twilight-of-the-serene-village/The-Serene-Village.mp3" type="audio/mp3" />
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

                {#if row.sound === '../../The-Twilight-of-the-serene-village/The-Black-Death.mp3'}
					<audio autoplay loop>
						<source src="../../The-Twilight-of-the-serene-village/The-Black-Death.mp3" type="audio/mp3" />
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

                {#if row.sound === '../../The-Twilight-of-the-serene-village/Despair-and-Abandonment.mp3'}
					<audio autoplay loop>
						<source src="../../The-Twilight-of-the-serene-village/Despair-and-Abandonment.mp3" type="audio/mp3" />
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

                {#if row.sound === '../../The-Twilight-of-the-serene-village/The-Fall-of-Lord-Aldrick.mp3'}
					<audio autoplay loop>
						<source src="../../The-Twilight-of-the-serene-village/The-Fall-of-Lord-Aldrick.mp3" type="audio/mp3" />
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

                {#if row.sound === '../../The-Twilight-of-the-serene-village/The-Fire-of-Hope.mp3'}
					<audio autoplay loop>
						<source src="../../The-Twilight-of-the-serene-village/The-Fire-of-Hope.mp3" type="audio/mp3" />
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

                {#if row.sound === '../../The-Twilight-of-the-serene-village/The-Eternal-Silence.mp3'}
                    <audio autoplay loop>
                        <source src="../../The-Twilight-of-the-serene-village/The-Eternal-Silence.mp3" type="audio/mp3" />
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

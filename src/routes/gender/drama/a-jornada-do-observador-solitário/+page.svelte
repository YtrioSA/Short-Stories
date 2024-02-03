<script>
	import { Paginator } from "@skeletonlabs/skeleton";

	const source = [
		{
			cover: "https://i.imgur.com/Rr1r0VK.jpg",
			title: "A Jornada do Observador Solitário",
			part_title: "Andando na chuva",
			sound: "../../The-Lone-Watcher/rain-in-the-afternoon.mp3",
			text: `
                Já tarde da noite, ele caminhava pelas ruas da cidade iluminada pelo brilho das 
                estrelas e do luar. Todos os dias, saía de casa e só retornava pela manhã. Nessa noite, 
                estava chovendo, mas ele não se importava; só queria continuar andando. Isso o ajudava 
                a esquecer os problemas da vida.
            `
		},
		{
			cover: "https://i.imgur.com/PYjogTB.jpg",
			title: "A Jornada do Observador Solitário",
			part_title: "As luzes moveis dos seres de metal",
			sound: "../../The-Lone-Watcher/cars-moving-and-horns-honking.mp3",
			text: `
                O observador continuava a sua jornada solitária rumo a lugar nenhum. Ele já estava 
                bem distante do seu ponto de origem. Naquele local, observava o que pareciam ser 
                seres vivos de metal, carregando lanternas acesas em diversas cores, em movimento 
                constante. Esses seres faziam barulho ao se movimentar pela avenida da cidade
                iluminada.
            `
		},
		{
			cover: "https://i.imgur.com/SzvXoZi.jpg",
			title: "A Jornada do Observador Solitário",
			part_title: "O prédio dançante",
			sound: "../../The-Lone-Watcher/nightclub.mp3",
			text: `
                Depois de muito andar pela cidade iluminada, o observador ouvia um som distante 
                que parecia ser uma música bastante energética, do tipo que ele gostava de escutar. 
                Ele amava esse tipo de som. Ao se aproximar do local onde a música estava sendo tocada, 
                via carros e pessoas com guarda-chuva na rua, indo e voltando do local. 
            `
		},
		{
			cover: "https://i.imgur.com/ugmnicQ.jpg",
			title: "A Jornada do Observador Solitário",
			part_title: "O Edifício sagrado",
			sound: "../../The-Lone-Watcher/prayer.mp3",
			text: `
                Ele já havia andado tanto que nem sabia onde estava mais. Suas roupas estavam 
                encharcadas com a água da chuva. Ele sabia da possibilidade de chuva forte, 
                mas mesmo assim não quis levar o guarda-chuva. Se molhar era o menor dos seus problemas.
                Próximo a uma estação de metrô na madrugada fria, ele escutava as orações 
                das pessoas vindas de dentro de uma igreja.
            `
		},
		{
			cover: "https://i.imgur.com/e0TornM.jpg",
			title: "A Jornada do Observador Solitário",
			part_title: "O portal de volta para a casa",
			sound: "../../The-Lone-Watcher/portal.mp3",
			text: `
                O observador solitário havia chegado a uma floresta escura e densa à noite. 
                A alguns metros de distância, encontrava-se uma clareira bem iluminada pelo 
                brilho da lua e das estrelas no céu. Diante dele estava um portal mágico que 
                despertou a sua curiosidade. Ele então entrou no portal e, dias depois, acordou em 
                sua casa como se tivesse despertado de um sonho lúcido.
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

<div class="bg-[#000] w-full h-full flex flex-col justify-center items-center">
	{#each paginatedSource as row}
		<div class="card w-[550px] border-2">
			<header
				style="background-image: url({row.cover})"
				class="card-header background rounded-3xl rounded-b-none h-[145px] w-full"
			></header>
			<section class="flex flex-col items-center gap-5 justify-center p-4">
				{#if row.sound === '../../The-Lone-Watcher/rain-in-the-afternoon.mp3'}
					<audio autoplay loop>
						<source src="../../The-Lone-Watcher/rain-in-the-afternoon.mp3" type="audio/mp3" />
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}
				{#if row.sound === '../../The-Lone-Watcher/cars-moving-and-horns-honking.mp3'}
					<audio autoplay loop>
						<source src="../../The-Lone-Watcher/cars-moving-and-horns-honking.mp3" type="audio/mp3" />
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}
				{#if row.sound === '../../The-Lone-Watcher/nightclub.mp3'}
					<audio autoplay loop>
						<source src="../../The-Lone-Watcher/nightclub.mp3" type="audio/mp3" />
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}
				{#if row.sound === '../../The-Lone-Watcher/prayer.mp3'}
					<audio autoplay loop>
						<source src="../../The-Lone-Watcher/prayer.mp3" type="audio/mp3" />
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}
				{#if row.sound === '../../The-Lone-Watcher/portal.mp3'}
					<audio autoplay loop>
						<source src="../../The-Lone-Watcher/portal.mp3" type="audio/mp3" />
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

<style>
	.background {
		background-position: center;
		background-size: cover;
	}
</style>

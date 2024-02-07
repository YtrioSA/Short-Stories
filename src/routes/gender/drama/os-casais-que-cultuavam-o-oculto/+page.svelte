<script>
	
	import { Paginator } from "@skeletonlabs/skeleton";
	import { goto } from '$app/navigation';
	
	import Icon from "@iconify/svelte";


	const next = () => {
		goto("/gender/drama/a-maldição-da-mansão-ancestral");
	}

	const previous = () => {
		goto("/gender/drama/a-jornada-do-observador-solitário");
	}

	const source = [
		{
			cover:      "https://i.imgur.com/fH4FAuJ.jpeg",
			title:      "Os Casais que Cultuavam o Oculto",
			part_title: "O Chamado para o Sobrenatural",
			sound:      "../../The-Hidden/call-to-the-supernatural.mp3",
			text: `
                Neste dia, os casais estavam fazendo as preparações finais para o evento mais 
                esperado do ano. O dia em que eles iriam cultuar o oculto em busca de mudanças 
                sociais. Podemos considerá-los uma sociedade secreta que buscava mudar o mundo através 
                da magia. Esta não era a primeira vez que eles iriam fazer isso, e todos estavam cientes das 
                consequências que viriam. O preço a pagar era elevado, mas eles estavam dispostos a pagar
                não importava o preço que fosse.
            `
		},
        {
            cover:      "https://i.imgur.com/403YQOY.jpeg",
            title:      "Os Casais que Cultuavam o Oculto",
            part_title: "Os Equipamentos de Contato Paranormal",
            sound:      "../../The-Hidden/paranormal-contact-equipment.mp3",
            text: `
                Dentro da mochila negra sobre a mesa redonda, iluminada por uma breve luz vermelha, 
                estavam os equipamentos para contato paranormal. Esses dispositivos eram tão eficientes 
                que pareciam ter sido forjados por entidades espirituais. 
				Todos eles irradiavam uma grande quantidade de energia espiritual, e qualquer pessoa comum que tentasse 
				utilizá-los enlouqueceria imediatamente. Apenas casais dispostos a fazer um 
                grande sacrifício poderiam usá-los. Com o uso desses equipamentos, 
				eles conseguiriam um contato espiritual quase que imediato.
            `
        },
		{
			cover: "https://i.imgur.com/Sq5XSTn.jpeg",
			title: "Os Casais que Cultuavam o Oculto",
			part_title: "O Limiar Espiritual",
			sound: "../../The-Hidden/the-spiritual-threshold.mp3",
			text: `  
				O ponteiro do relógio já se aproximava das 3:00 A.M., o horário marcado para que todos estivessem no local. 
				Todos os casais estavam se deslocando com seus equipamentos. Como a distância em relação ao ponto de destino 
				era relativa, cada um escolhia a melhor forma de chegar até lá. Alguns casais passavam por estabelecimentos abertos 
				durante a madrugada e compravam comida e bebida. Já próximo ao local, sentiam uma energia sinistra emanando dele, tão 
				intensa que causava arrepios. Os equipamentos dentro das mochilas começavam a vibrar freneticamente, como se estivessem 
				possuídos. Eles enfim chegaram no Limiar Espiritual.
			`
		},
		{
			cover: "https://i.imgur.com/GY4cTIt.jpeg",
			title: "Os Casais que Cultuavam o Oculto",
			part_title: "Entre dois Mundos",
			sound: "../../The-Hidden/Between-two-worlds.mp3",
			text: `
				Exatamente às 3:00 A.M., eles haviam cruzado a fronteira entre o físico e o espiritual.
				Nesse ponto da jornada, não estavam apenas no mundo físico, mas também no
				espiritual. Pois, naquele local, o véu entre os dois mundos era mais fino que o normal.
				Os casais começavam a sentir calafrios constantemente, como se estivessem cercados por espíritos. 
				Já estava quase na hora de iniciar o ritual de mudança. A partir desse ponto, não havia mais volta. 
				O ritual precisava ser feito de um jeito ou de outro. Caso ocorresse desistência de um dos membros, seriam
				amaldiçoados por toda a eternidade e perseguidos por seres sobrenaturais para além da
				morte. Enfim, a chegada dos escolhidos.
			`
		},
		{
			cover: "https://i.imgur.com/H2TEZOW.jpeg",
			title: "Os Casais que Cultuavam o Oculto",
			part_title: "O Ritual de Mudança",
			sound: "../../The-Hidden/The-Ritual-of-Change.mp3",
			text: `
				O tão aguardado momento chegou, marcando o início dos rituais de mudança. 
				Equipamentos foram retirados das mochilas, cada casal se preparando para o que 
				estava por vir. O ritual começou, mãos dadas, olhos fechados, quando uma 
				presença maligna e aterrorizante envolveu o lugar. Um Deus sombrio, invocado para 
				conceder desejos, mas a um preço elevado. Os casais clamaram por mudanças sociais, 
				uma sociedade mais justa, o fim da pobreza. O Deus atendeu, porém, apagou-os da memória 
				de todos que conheciam e amavam. Assim, o ritual chegou ao fim.      	
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

<div class="bg-[#000] w-full h-full flex justify-center items-center">
<div class="bg-[#000] w-full md:w-1/2 h-full flex p-4 flex-col justify-center items-center">
	<div class="flex">
		<button on:click={previous}>
			<Icon class="w-16 h-16 cursor-pointer" icon="ei:arrow-left"/>
		</button>
		<button on:click={next}>
			<Icon class="w-16 h-16 cursor-pointer" icon="ei:arrow-right"/>
		</button>
	</div>
	{#each paginatedSource as row}
		<div class="card w-full md:w-[550px] border-2 mb-6">
			<header
				style="background-image: url({row.cover})"
				class="card-header background rounded-3xl rounded-b-none h-[145px] w-full">
            </header>
			<section class="flex flex-col items-center gap-5 justify-center p-4">
				{#if row.sound === "../../The-Hidden/call-to-the-supernatural.mp3"}
					<audio autoplay loop>
						<source src="../../The-Hidden/call-to-the-supernatural.mp3" type="audio/mp3"/>
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}
                {#if row.sound === "../../The-Hidden/paranormal-contact-equipment.mp3"}
					<audio autoplay loop>
						<source src="../../The-Hidden/paranormal-contact-equipment.mp3" type="audio/mp3"/>
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}
				{#if row.sound === "../../The-Hidden/the-spiritual-threshold.mp3"}
					<audio autoplay loop>
						<source src="../../The-Hidden/the-spiritual-threshold.mp3" type="audio/mp3"/>
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}
				{#if row.sound === "../../The-Hidden/Between-two-worlds.mp3"}
					<audio autoplay loop>
						<source src="../../The-Hidden/Between-two-worlds.mp3" type="audio/mp3"/>
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}
				{#if row.sound === "../../The-Hidden/The-Ritual-of-Change.mp3"}
					<audio autoplay loop>
						<source src="../../The-Hidden/The-Ritual-of-Change.mp3" type="audio/mp3"/>
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
</div>

<style>
	.background {
        background-position: center;
        background-size: cover;
	}
</style>

<script>
	
	import { goto } from '$app/navigation';
	import { Paginator } from "@skeletonlabs/skeleton";
	import Icon from "@iconify/svelte";

	const previous = () => {
		goto("/gender/drama/a-maldição-da-mansão-ancestral");
	}

	const source = [
		{
			cover:      "https://i.imgur.com/ZgCQwya.jpeg",
			title:      "Sombras do Passado",
			part_title: "O Legado Sombrio",
			sound:      "../../Shadows-from-the-past/dark-ambient-melody.mp3",
			text: `
                Emily, herdeira de uma antiga linhagem, descobriu documentos escondidos na 
                biblioteca empoeirada da mansão. Ali, a verdade sinistra de um pacto ancestral 
                revelou-se, lançando uma sombra sobre a tranquilidade que ela acreditava conhecer. 
                Entre as páginas amareladas, símbolos desconhecidos pareciam pulsar com uma energia inquietante.
            `
		},
        {
            cover:      "https://i.imgur.com/Tk8VHRs.jpeg",
            title:      "Sombras do Passado",
            part_title: "O Sussurro das Sombras",
            sound:      "../../Shadows-from-the-past/the-whisper-of-shadows.mp3",
            text: `
                Com a chegada da noite, Emily começou a ouvir sussurros indistintos nas paredes da mansão. 
                Uma presença invisível pairava, criando arrepios em sua pele. A casa, antes acolhedora, 
                agora parecia viva com murmúrios que desafiavam qualquer explicação lógica. O medo, antes 
                um visitante ocasional, tornou-se constante.
            `
        },
		{
			cover: "https://i.imgur.com/oGQLffM.jpeg",
			title: "Sombras do Passado",
			part_title: "A Jornada ao Desconhecido",
			sound: "../../Shadows-from-the-past/the-journey-into-the-unknown.mp3",
			text: `  
                Determinada a desvendar o mistério, Emily mergulhou nas profundezas da mansão. 
                Descobriu passagens secretas e salas ocultas que desafiavam a arquitetura convencional. 
                Os documentos antigos a guiavam por um caminho desconhecido, 
                onde símbolos sinistros pareciam ganhar vida nas sombras.
			`
		},
		{
			cover: "https://i.imgur.com/Dce7L4B.jpeg",
			title: "Sombras do Passado",
			part_title: "A Manifestação Noturna",
			sound: "../../Shadows-from-the-past/the-night-manifestation.mp3",
			text: `
                No auge da noite, sombras ganharam vida, transformando-se em figuras espectrais 
                que perseguiram Emily pelos corredores escuros. A linha entre o real e o sobrenatural desapareceu, 
                deixando-a à mercê de forças desconhecidas. Luzes tremeluziram, revelando brevemente rostos pálidos e olhos vazios.
			`
		},
		{
			cover: "https://i.imgur.com/xn6OfAK.jpeg",
			title: "Sombras do Passado",
			part_title: "A Confrontação Final",
			sound: "../../Shadows-from-the-past/the-final-confrontation.mp3",
			text: `
                Determinada a quebrar o pacto ancestral, Emily enfrentou a entidade maligna em uma 
                sala escura e esquecida da mansão. À medida que símbolos ancestrais eram apagados, a 
                energia maligna desvaneceu. Contudo, as cicatrizes do terror permaneceram, marcando-a para sempre. 
                Ao raiar do sol, a mansão silenciou-se, mas a herança sombria ainda se fazia sentir nas profundezas do seu ser.    	
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
	<button on:click={previous}>
		<Icon class="w-16 h-16 cursor-pointer" icon="ei:arrow-left"/>
	</button>	
<div class="bg-[#000] w-1/2 h-full flex flex-col justify-center items-center">
	{#each paginatedSource as row}
		<div class="card w-[550px] border-2">
			<header
				style="background-image: url({row.cover})"
				class="card-header background rounded-3xl rounded-b-none h-[145px] w-full">
            </header>
			<section class="flex flex-col items-center gap-5 justify-center p-4">
				{#if row.sound === "../../Shadows-from-the-past/dark-ambient-melody.mp3"}
					<audio autoplay loop>
						<source src="../../Shadows-from-the-past/dark-ambient-melody.mp3" type="audio/mp3"/>
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}
				{#if row.sound === "../../Shadows-from-the-past/the-whisper-of-shadows.mp3"}
					<audio autoplay loop>
						<source src="../../Shadows-from-the-past/the-whisper-of-shadows.mp3" type="audio/mp3"/>
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}
				{#if row.sound === "../../Shadows-from-the-past/the-journey-into-the-unknown.mp3"}
					<audio autoplay loop>
						<source src="../../Shadows-from-the-past/the-journey-into-the-unknown.mp3" type="audio/mp3"/>
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

				{#if row.sound === "../../Shadows-from-the-past/the-night-manifestation.mp3"}
					<audio autoplay loop>
						<source src="../../Shadows-from-the-past/the-night-manifestation.mp3" type="audio/mp3"/>
						Seu navegador não suporta o elemento de áudio.
					</audio>
				{/if}

				{#if row.sound === "../../Shadows-from-the-past/the-final-confrontation.mp3"}
					<audio autoplay loop>
						<source src="../../Shadows-from-the-past/the-final-confrontation.mp3" type="audio/mp3"/>
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

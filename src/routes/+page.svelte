<script>

    import { Toast, getToastStore } from "@skeletonlabs/skeleton";
    
    import { initializeStores }     from "@skeletonlabs/skeleton";
    initializeStores();
    
    const toastStore = getToastStore(),
    toast = {
        message:    "Habilite a reprodução automática de áudio do navegador",
        background: "bg-red-700",
        timeout:     3000
    };
    
    toastStore.trigger(toast);
    
</script>

<Toast />

<div class="bg-[#000] font-bold flex flex-col gap-5 justify-center items-center h-full w-full">
    <audio autoplay loop>
        <source src="./The-Home/rain_thunder.mp3" type="audio/mp3">
        Seu navegador não suporta o elemento de áudio.
    </audio>
    <p class="cursor-pointer w-1/5">
        <q>
            Sad people love the rain
            because they are no longer
            crying alone.
        </q>
    </p>
</div>
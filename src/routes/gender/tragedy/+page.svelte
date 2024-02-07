
<script>
    
    export let data;

</script>

<style>
    
    .background {
        background-position: center;
        background-size: cover;
    }
   
</style>

<div class="bg-[#000] flex flex-wrap justify-around items-center h-full w-full gap-5">
    {#each data.tragedy as tragedy}
        <div class="card border-2 m-3 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <header style="background-image: url({tragedy.cover})" class="card-header background rounded-3xl rounded-b-none h-[170px] w-full"></header>
            <section class="flex flex-col gap-2 items-center justify-center p-4">
                <strong>{tragedy.date}</strong>
                <hr class="w-full">
                <span class="badge variant-filled">{tragedy.gender}</span>
                <h1 class="h3 flex gap-2 items-center">
                    {tragedy.name}
                </h1>
                <hr class="w-full">
                <p class="text-justify w-[400px] h-[160px] text-[14px]">
                     {tragedy.summary}
                </p>
            </section>
            <footer class="card-footer">
                <a href="{tragedy.link}" class="btn variant-filled-primary w-full"> {tragedy.link_name} </a>
            </footer>
        </div>
    {/each}
</div>

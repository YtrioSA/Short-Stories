
<script>
    
    import Icon from "@iconify/svelte";
    export let data;

</script>

<style>
    
    .background {
        background-position: center;
        background-size: cover;
    }
   
</style>

<div class="bg-[#000] flex flex-col justify-center items-center h-full w-full gap-5">
    {#each data.gender as gender}
        <div class="card xl:w-1/2 md:w-1/2 lg:w-1/2 p-4 m-4">
            <header style="background-image: url({gender.cover})" class="card-header background rounded-lg rounded-b-none h-[250px] w-full"></header>
            <section class="flex flex-col gap-2 items-center justify-center p-4">
                <h1 class="h3 flex gap-2 items-center">
                    <Icon class="w-6 h-6" icon="{gender.icon}"/>
                    {gender.name}
                </h1>
                <hr class="w-full">
                <p>
                        {gender.desc}
                </p>
            </section>
            <footer class="card-footer">
                <a href="{gender.link}" class="btn variant-filled w-full"> {gender.link_name} </a>
            </footer>
        </div>
    {/each}
</div>

<script>
  import ImageTile from "$lib/components/ImageTile.svelte";
  import Markdown from "$lib/components/Markdown.svelte";
  import HeadImage from "$lib/images/informatik/monitor.webp";
</script>

<ImageTile src={HeadImage}>
  <h2
    class="flex items-center justify-center h-full text-3xl font-bold text-white text-shadow-lg"
  >
    Informatik
  </h2>
</ImageTile>
<main class="flex items-center justify-center pt-8 bg-black min-h-screen px-12">
  <section class="max-w-screen-md">
    <Markdown src="/informatik/Informatik.md" />
  </section>
</main>

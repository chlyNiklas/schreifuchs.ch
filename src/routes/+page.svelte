<script>
  import ImageLinkTile from "$lib/components/ImageLinkTile.svelte";

  import mouse from "$lib/images/mouse.webp";
  import drummachine from "$lib/images/drummachine.webp";
  import scouts from "$lib/images/scouts.webp";
  import console_image from "$lib/images/console.webp";
</script>

<ImageLinkTile src={console_image} href="">
  <h2 class="text-3xl font-bold text-white hover:underline text-shadow-lg">
    Informatik
  </h2>
</ImageLinkTile>

<ImageLinkTile src={scouts} href="https://pfadifrisco.ch/" target="_blank">
  <h2 class="text-3xl font-bold text-white hover:underline text-shadow-lg">
    Pfadi
  </h2>
</ImageLinkTile>

<ImageLinkTile src={mouse} href="">
  <h2 class="text-3xl font-bold text-white hover:underline text-shadow-lg">
    Fotos
  </h2>
</ImageLinkTile>

<ImageLinkTile src={drummachine} href="">
  <h2 class="text-3xl font-bold text-white hover:underline text-shadow-lg">
    Musik
  </h2>
</ImageLinkTile>

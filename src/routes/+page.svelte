<script>
  import ImageLinkTile from "$lib/components/ImageLinkTile.svelte";

  import mouse from "$lib/images/home/mouse.webp";
  import drummachine from "$lib/images/home/drummachine.webp";
  import scouts from "$lib/images/home/scouts.webp";
  import console_image from "$lib/images/home/console.webp";
  import lauch from "$lib/images/home/lauch.webp";
</script>

<main>
  <ImageLinkTile src={console_image} href="/informatik">
    <h2 class="text-3xl font-bold text-white hover:underline text-shadow-lg">
      Informatik
    </h2>
  </ImageLinkTile>

  <ImageLinkTile src={scouts} href="https://pfadifrisco.ch/" target="_blank">
    <h2 class="text-3xl font-bold text-white hover:underline text-shadow-lg">
      Pfadi
    </h2>
  </ImageLinkTile>

  <ImageLinkTile src={mouse} href="/fotos">
    <h2 class="text-3xl font-bold text-white hover:underline text-shadow-lg">
      Fotos
    </h2>
  </ImageLinkTile>

  <ImageLinkTile src={lauch} href="/video">
    <h2 class="text-3xl font-bold text-white hover:underline text-shadow-lg">
      Videos
    </h2>
  </ImageLinkTile>

  <ImageLinkTile src={drummachine} href="/musig">
    <h2 class="text-3xl font-bold text-white hover:underline text-shadow-lg">
      Musig
    </h2>
  </ImageLinkTile>
</main>

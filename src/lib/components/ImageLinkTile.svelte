<script>
  import ImageTile from "./ImageTile.svelte";
  /** @type {string} **/
  export let src;
  /** @type {string} **/
  export let href;
  /** @type {"_self" | "_blank" | "_parent" | "_top" } **/
  export let target = "_self";
</script>

<div>
  <ImageTile {src}>
    <a {href} {target} class="flex items-center justify-center h-full">
      <slot />
    </a>
  </ImageTile>
</div>

<script>
  /** @string */
  export let src;
</script>

<div class="grid grid-cols-1 grid-rows-1">
  <img
    {src}
    class="row-start-1 col-start-1 pointer-events-none w-full h-96 object-cover"
  />
  <div class="row-start-1 col-start-1">
    <slot />
  </div>
</div>

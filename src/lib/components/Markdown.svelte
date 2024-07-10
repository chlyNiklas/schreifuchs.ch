<script>
  import { Marked, Renderer } from "@ts-stack/markdown";
  import { onMount } from "svelte";

  Marked.setOptions({
    renderer: new Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  });
  /* @type {string} */
  export let src;

  /* @type {Element[]} */
  let content = [];

  onMount(async () => {
    const DOM_PARSER = new DOMParser();
    const markdown = await (await fetch(src)).text();
    const parsedMarkdown = DOM_PARSER.parseFromString(
      Marked.parse(markdown ? markdown : "__nothing to see here__"),
      "text/html",
    );

    content = [...parsedMarkdown.body.children];
    // content.forEach((element) => console.log(element.nodeName));
  });
</script>

<div class="markdown">
  {#if content != null}
    {#each content as element, i}
      {@html element.outerHTML}
    {/each}
  {/if}
</div>

<style global>
  .markdown {
    color: white;
  }
  .markdown h1 {
    font-size: 2rem;
  }
  .markdown h2 {
    font-size: 1.75rem;
  }
  .markdown h3 {
    font-size: 1.5rem;
  }
  .markdown h4 {
    font-size: 1.25rem;
  }

  .markdown * {
    margin-bottom: 1rem;
  }

  .markdown img {
    max-height: 60vh;
  }

  .markdown table, .markdown tr, .markdown th, .markdown td {
    border-collapse: collapse;
    border: 1px solid;

    padding: 0.3rem 1rem;
  }

  .markdown th {
    font-size: 1.2rem;
  }
</style>

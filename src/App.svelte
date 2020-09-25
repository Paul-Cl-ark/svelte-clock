<script>
  export let name
  import 'bulma/css/bulma.css'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import Quote from './components/Quote.svelte';
  import Time from './components/Time.svelte';

  let quote

  onMount(async () => {
    const response = await fetch(
      'https://api.tronalddump.io/random/quote'
    ).then((response) => response.json())
    quote = response.value
  })

</script>

<main>
  <div class="hero is-fullheight has-background-light">
    <div class="hero-body">
      <div class="container">
        <div class="content">
          <p class="title is-4 has-text-success">Hello {name}!</p>
          <Time/>
        </div>
        {#if quote}
        <div transition:fade>
          <Quote {quote}/>
        </div>
        {/if}
      </div>
    </div>
  </div>
</main>

<style>
  main {
    text-align: center;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

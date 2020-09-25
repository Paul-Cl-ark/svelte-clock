<script>
  export let name
  import 'bulma/css/bulma.css'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import Quote from './components/Quote.svelte'
  import Time from './components/Time.svelte'
  import DangerButton from './components/DangerButton.svelte'
  import CatFact from './components/CatFact.svelte'

  let quote
  let catFact

  onMount(() => {
    fetch('https://api.tronalddump.io/random/quote')
      .then(response => response.json())
      .then(response => quote = response.value)
      .catch(err => {})
  })

  const getCatFact = () => {
    fetch('https://cat-fact.herokuapp.com/facts/random')
      .then(response => response.json())
      .then(response => catFact = response.text)
      .catch(err => {})
  }
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
        <div transition:fade class="content">
          <Quote {quote}/>
        </div>
        {/if}
        {#if !catFact}
        <div>
          <DangerButton on:getCatFact={getCatFact}/>
        </div>
        {:else}
          <CatFact {catFact}/>
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

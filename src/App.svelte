<script>
  export let name
  import 'bulma/css/bulma.css'
  import { Button } from 'svelma'
  import { time } from './stores.js'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  let quote

  onMount(async () => {
    const response = await fetch(
      'https://api.tronalddump.io/random/quote'
    ).then((response) => response.json())
    quote = response.value
  })

  const formatter = new Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  })

  const colourMap = {
    0: 'grey-dark',
    1: 'primary',
    2: 'link',
    3: 'info',
    4: 'dark',
    5: 'success',
    6: 'warning',
    7: 'grey',
    8: 'danger',
    9: 'black-bis',
    ':': 'grey-lighter',
    P: 'grey-lighter',
    M: 'grey-lighter'
  }
</script>

<main>
  <div class="hero is-fullheight has-background-light">
    <div class="hero-body">
      <div class="container">
        <div class="content">
          <p class="title is-4 has-text-success">Hello {name}!</p>
          <p class="title is-2 has-text-info">
            <span>The time is </span>
            {#each formatter.format($time).split('') as item}
            <span class="{`has-text-${colourMap[item]}`}">{item}</span>
            {/each}
          </p>
        </div>
        <div class="columns">
          <div class="column is-6 is-offset-3">
            {#if quote}
            <div transition:fade class="box">
              <p class="subtitle has-text-danger">{quote}</p>
            </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

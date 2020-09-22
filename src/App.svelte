<script>
  export let name
  import 'bulma/css/bulma.css'
  import { Button } from 'svelma'
  import { time } from './stores.js'
  import { onMount } from 'svelte'

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
</script>

<main>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="content">
          <p class="title is-5 has-text-info">Hello {name}!</p>
          <p class="title is-2 has-text-success">
            The time is {formatter.format($time)}
          </p>
        </div>
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <div class="box">
              <p class="subtitle has-text-danger">{quote}</p>
            </div>
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

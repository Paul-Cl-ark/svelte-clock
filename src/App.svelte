<script>
  export let name
  import 'bulma/css/bulma.css'
  import { Button } from 'svelma'
  import { time } from './stores.js'

  const formatter = new Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  })
</script>

<main>
  <div class="hero is-fullheight is-success">
    <div class="hero-body">
      <div class="container">
        <p class="is-size-6 field">Hello {name}!</p>
        <p class="title is-2 has-text-light">
          The time is {formatter.format($time)}
        </p>
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

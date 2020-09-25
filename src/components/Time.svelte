<script>
  import { time } from '../stores.js'

  const formatter = new Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  })

  const colourMap = {
    0: 'lime',
    1: 'primary',
    2: 'link',
    3: 'info',
    4: 'dark',
    5: 'success',
    6: 'warning',
    7: 'grey',
    8: 'danger',
    9: 'pink',
    ':': 'orange',
    P: 'orange',
    M: 'orange'
  }
</script>

<p class="title is-2 has-text-info">
  <span>The time is </span>
  {#each formatter.format($time).split('') as item}
  <span class="{`has-text-${colourMap[item]}`}">{item}</span>
  {/each}
</p>

<style>
  .has-text-pink {
    color: hsl(305, 87%, 50%);
  }
  .has-text-orange {
    color: hsl(16, 95%, 63%);
  }
  .has-text-lime {
    color: hsl(93, 95%, 63%);
  }
</style>

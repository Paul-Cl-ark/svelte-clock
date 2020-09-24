<script>
  import { time } from '../stores.js'

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

<p class="title is-2 has-text-info">
  <span>The time is </span>
  {#each formatter.format($time).split('') as item}
  <span class="{`has-text-${colourMap[item]}`}">{item}</span>
  {/each}
</p>

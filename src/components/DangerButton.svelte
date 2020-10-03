<script>
  import { Button } from 'svelma'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  const getCatFact = () => dispatch('getCatFact')
</script>

<Button on:click="{getCatFact}" class="is-danger">?</Button>

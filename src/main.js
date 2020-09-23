import App from './App.svelte'

const names = ['world', 'you', 'there', 'mate', 'dawg', 'nerd', 'joe']
let name = names[Math.floor(Math.random() * names.length)]

const app = new App({
  target: document.body,
  props: {
    name
  }
})

export default app

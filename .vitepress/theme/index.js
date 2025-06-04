import DefaultTheme from 'vitepress/theme'
import Meme from './components/Meme.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Meme', Meme)
  }
}

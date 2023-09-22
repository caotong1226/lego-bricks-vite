import type { App } from 'vue'
import LText from './LText.vue'
LText.install = (app: App) => {
    app.component('LText', LText)
}
export default LText
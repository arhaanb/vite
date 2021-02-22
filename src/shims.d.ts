declare interface Window {
  // extend the window
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

// // with vite-plugin-md, markdowns can be treat as Vue components
// declare module '*.md' {
//   import { ComponentOptions } from 'vue'
//   const component: ComponentOptions
//   export default component
// }

## Demo Overview

These demos are shown live during the course.

### Day 1 — Vue Fundamentals

#### Vue Mental Model
`vanilla-counter.html` → `vanilla-counter-2.html` → `vue-counter-2.vue`
A counter, first in plain JavaScript (with manual DOM updates) and then in Vue (`ref`, `{{ }}`, `@click`). You can immediately see what Vue takes care of for you: no more manual DOM updates.

#### Template Syntax
**`demo1-v-bind-wrong.vue` → `demo1-v-bind.vue`**
Why `{{ }}` does not work in attributes, and how to use `:class` instead.

**`demo2-v-if.vue`**
Conditional rendering with `v-if` / `v-else`, including a look at the DevTools.

**`demo2-v-show.vue`**
Conditional rendering with `v-show`, including a look at the DevTools.

**`demo3-v-for.vue` → `demo3-v-for-without-key.vue`**
A list where, without `:key`, removing an item suddenly puts the wrong text in the wrong field. The bug is shown live and then fixed with `:key`.

#### `v-model` and Events
`demo-v-model.vue` → `demo-v-model-explained.vue`
A text input with two-way binding: type into it and immediately see the text update live somewhere else. Then we look at what `v-model` actually does behind the scenes.

`demo-v-model-keyup.vue`
A text input with key event handling.

#### `computed`
`demo-computed-vs-method.vue`
A price-times-quantity calculator, once with `computed` and once with a regular function. Both look the same: the difference (caching) is explained.

#### `onMounted` + `watch`
`demo-watch.vue` + `demo-watchEffect.vue`
Inline demo (`name` / `place`, `localStorage`)
A form that stores its contents in `localStorage` and automatically restores them after a page reload.

---

### Day 2 — Components, Router, Live Data

#### Components & Typed Props
`demo-props-parent.vue` + `SpeakerCard.vue`
A `SpeakerCard` component with typed props (`defineProps<T>()`) — the foundation for the `ProjectCard` component you will build afterward.

#### Events (`emit`)
`demo-emits-parent.vue` + `SpeakerCard.vue`
`SpeakerCard` (extended)
The same component now sends an event up to its parent component: "props down, events up" in practice.

#### `v-model` on Custom Components
`demo-custom-vmodel.vue` + `ExplicitCustomInput.vue` + `SimplifiedCustomInput.vue`
Shows how `v-model` works not only with native inputs, but also with custom-built components, including the modern shorthand `defineModel()`.

#### Vue Router
`demo-use-router.vue` + `RouterNavigator.vue` + `RouterView.vue`
Navigation between pages (`useRouter()`) and reading the current route (`useRoute()`): two different tools for two different tasks.

#### Async Data with Loading/Error States
`demo-fetch-from-API.vue`
Joke API demo (standalone)
A small fetch demo (joke API) shows the pattern you will later use for real GitHub data: loading indicator, error handling, and the actual data, cleanly separated.

---

All demos build on one another. You will apply what you see here directly afterward in your own portfolio site.

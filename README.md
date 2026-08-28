# Informatica Feminale 2026: Demos

Demos for Vue Workshop at Informatica Feminale 2026.

## Tech Stack

- Vue 3.5.x
- Vue Router 5.0.x
- Vite 8.x
- TypeScript 6.x

## Project Structure

```
src/
├── main.js                 # App entry point
├── router.js               # Demo registry (hash-history routing)
├── App.vue                 # Shell with sidebar nav + DemoStage
├── assets/                 # Static assets used by the app
├── components/
│   ├── DemoStage.vue       # Wrapper: source code (left) + live demo (right)
│   ├── day1/               # Day 1 demos (units 02, 03, 04, 06, 08)
│   └── day2/               # Day 2 demos (units 02, 03, 04, 05, 06)
├── composables/
│   └── useTheme.ts         # Shared theme state and actions
└── style.css               # Global CSS design tokens (light/dark, purple #aa3bff)
```

## Demo Units

**Day 1**
- Unit 02 – Mental Model (vue-counter-2)
- Unit 03 – Template Syntax (v-bind, v-if, v-show, v-for)
- Unit 04 – v-model (basic, explained, keyup)
- Unit 06 – Computed vs Methods
- Unit 08 – onMounted & Watch (watch, watchEffect)

**Day 2**
- Unit 02 – Props (SpeakerCard parent/child)
- Unit 03 – Emits (custom events with payload)
- Unit 04 – Custom v-model Components (explicit & simplified)
- Unit 05 – Router (useRouter, useRoute)
- Unit 06 – Fetch from API (async, loading, error handling)

A more detailed overview over all demos can be found in [DEMOS.md](DEMOS.md)

## Development

```bash
npm install
npm run dev
```

Open http://localhost:5173/informatica-vue-2026-demos/

## Build

```bash
npm run build
```

## Type Check

```bash
npm run type-check
```

## Format

```bash
npm run format
```

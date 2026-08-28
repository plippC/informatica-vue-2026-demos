import { createRouter, createWebHashHistory } from 'vue-router'

import VueCounter2 from './components/day1/unit02-mental-model/vue-counter-2.vue'
import VueCounter2Source from './components/day1/unit02-mental-model/vue-counter-2.vue?raw'
import Demo1VBindWrong from './components/day1/unit03-template-syntax/demo1-v-bind-wrong.vue'
import Demo1VBindWrongSource from './components/day1/unit03-template-syntax/demo1-v-bind-wrong.vue?raw'
import Demo1VBind from './components/day1/unit03-template-syntax/demo1-v-bind.vue'
import Demo1VBindSource from './components/day1/unit03-template-syntax/demo1-v-bind.vue?raw'
import Demo2VIf from './components/day1/unit03-template-syntax/demo2-v-if.vue'
import Demo2VIfSource from './components/day1/unit03-template-syntax/demo2-v-if.vue?raw'
import Demo2VShow from './components/day1/unit03-template-syntax/demo2-v-show.vue'
import Demo2VShowSource from './components/day1/unit03-template-syntax/demo2-v-show.vue?raw'
import Demo3VForWithoutKey from './components/day1/unit03-template-syntax/demo3-v-for-without-key.vue'
import Demo3VForWithoutKeySource from './components/day1/unit03-template-syntax/demo3-v-for-without-key.vue?raw'
import Demo3VFor from './components/day1/unit03-template-syntax/demo3-v-for.vue'
import Demo3VForSource from './components/day1/unit03-template-syntax/demo3-v-for.vue?raw'
import DemoVModel from './components/day1/unit04-v-model/demo-v-model.vue'
import DemoVModelSource from './components/day1/unit04-v-model/demo-v-model.vue?raw'
import DemoVModelExplained from './components/day1/unit04-v-model/demo-v-model-explained.vue'
import DemoVModelExplainedSource from './components/day1/unit04-v-model/demo-v-model-explained.vue?raw'
import DemoVModelKeyup from './components/day1/unit04-v-model/demo-v-model-keyup.vue'
import DemoVModelKeyupSource from './components/day1/unit04-v-model/demo-v-model-keyup.vue?raw'
import DemoComputedVsMethod from './components/day1/unit06-computed/demo-computed-vs-method.vue'
import DemoComputedVsMethodSource from './components/day1/unit06-computed/demo-computed-vs-method.vue?raw'
import DemoWatch from './components/day1/unit08-onMounted-watch/demo-watch.vue'
import DemoWatchSource from './components/day1/unit08-onMounted-watch/demo-watch.vue?raw'
import DemoWatchEffect from './components/day1/unit08-onMounted-watch/demo-watchEffect.vue'
import DemoWatchEffectSource from './components/day1/unit08-onMounted-watch/demo-watchEffect.vue?raw'
import SpeakerCardParent from './components/day2/unit02-props/demo-props-parent.vue'
import SpeakerCardParentSource from './components/day2/unit02-props/demo-props-parent.vue?raw'
import SpeakerCard from './components/day2/unit02-props/SpeakerCard.vue'
import SpeakerCardSource from './components/day2/unit02-props/SpeakerCard.vue?raw'
import DemoCustomVModel from './components/day2/unit04-v-model-custom-components/demo-custom-vmodel.vue'
import DemoCustomVModelSource from './components/day2/unit04-v-model-custom-components/demo-custom-vmodel.vue?raw'
import ExplicitCustomInput from './components/day2/unit04-v-model-custom-components/ExplicitCustomInput.vue'
import ExplicitCustomInputSource from './components/day2/unit04-v-model-custom-components/ExplicitCustomInput.vue?raw'
import SimplifiedCustomInputSource from './components/day2/unit04-v-model-custom-components/SimplifiedCustomInput.vue?raw'
import DemoEmitsParent from './components/day2/unit03-emits/demo-emits-parent.vue'
import DemoEmitsParentSource from './components/day2/unit03-emits/demo-emits-parent.vue?raw'
import SpeakerCard2 from './components/day2/unit03-emits/SpeakerCard.vue'
import SpeakerCardSource2 from './components/day2/unit03-emits/SpeakerCard.vue?raw'
import DemoUseRouter from './components/day2/unit05-router/demo-use-router.vue'
import DemoUseRouterSource from './components/day2/unit05-router/demo-use-router.vue?raw'
import RouterNavigator from './components/day2/unit05-router/RouterNavigator.vue'
import RouterNavigatorSource from './components/day2/unit05-router/RouterNavigator.vue?raw'
import RouterView from './components/day2/unit05-router/RouterView.vue'
import RouterViewSource from './components/day2/unit05-router/RouterView.vue?raw'
import DemoFetchFromAPI from './components/day2/unit06-fetch-api/demo-fetch-from-API.vue'
import DemoFetchFromAPISource from './components/day2/unit06-fetch-api/demo-fetch-from-API.vue?raw'

const d1 = 'src/components/day1'
const d2 = 'src/components/day2'

export const day1Units = [
  {
    title: 'Unit 02 – Mental Model',
    demos: [
      {
        path: 'unit02-counter',
        title: 'vue-counter-2.vue',
        file: `${d1}/unit02-mental-model/vue-counter-2.vue`,
        component: VueCounter2,
        source: VueCounter2Source
      }
    ]
  },
  {
    title: 'Unit 03 – Template Syntax',
    demos: [
      {
        path: 'unit03-v-bind-wrong',
        title: 'demo1-v-bind-wrong.vue',
        file: `${d1}/unit03-template-syntax/demo1-v-bind-wrong.vue`,
        component: Demo1VBindWrong,
        source: Demo1VBindWrongSource
      },
      {
        path: 'unit03-v-bind',
        title: 'demo1-v-bind.vue',
        file: `${d1}/unit03-template-syntax/demo1-v-bind.vue`,
        component: Demo1VBind,
        source: Demo1VBindSource
      },
      {
        path: 'unit03-v-if',
        title: 'demo2-v-if.vue',
        file: `${d1}/unit03-template-syntax/demo2-v-if.vue`,
        component: Demo2VIf,
        source: Demo2VIfSource
      },
      {
        path: 'unit03-v-show',
        title: 'demo2-v-show.vue',
        file: `${d1}/unit03-template-syntax/demo2-v-show.vue`,
        component: Demo2VShow,
        source: Demo2VShowSource
      },
      {
        path: 'unit03-v-for-no-key',
        title: 'demo3-v-for-without-key.vue',
        file: `${d1}/unit03-template-syntax/demo3-v-for-without-key.vue`,
        component: Demo3VForWithoutKey,
        source: Demo3VForWithoutKeySource
      },
      {
        path: 'unit03-v-for',
        title: 'demo3-v-for.vue',
        file: `${d1}/unit03-template-syntax/demo3-v-for.vue`,
        component: Demo3VFor,
        source: Demo3VForSource
      }
    ]
  },
  {
    title: 'Unit 04 – v-model',
    demos: [
      {
        path: 'unit04-v-model',
        title: 'demo-v-model.vue',
        file: `${d1}/unit04-v-model/demo-v-model.vue`,
        component: DemoVModel,
        source: DemoVModelSource
      },
      {
        path: 'unit04-v-model-explained',
        title: 'demo-v-model-explained.vue',
        file: `${d1}/unit04-v-model/demo-v-model-explained.vue`,
        component: DemoVModelExplained,
        source: DemoVModelExplainedSource
      },
      {
        path: 'unit04-v-model-keyup',
        title: 'demo-v-model-keyup.vue',
        file: `${d1}/unit04-v-model/demo-v-model-keyup.vue`,
        component: DemoVModelKeyup,
        source: DemoVModelKeyupSource
      }
    ]
  },
  {
    title: 'Unit 06 – Computed',
    demos: [
      {
        path: 'unit06-computed',
        title: 'demo-computed-vs-method.vue',
        file: `${d1}/unit06-computed/demo-computed-vs-method.vue`,
        component: DemoComputedVsMethod,
        source: DemoComputedVsMethodSource
      }
    ]
  },
  {
    title: 'Unit 08 – onMounted & Watch',
    demos: [
      {
        path: 'unit08-watch',
        title: 'demo-watch.vue',
        file: `${d1}/unit08-onMounted-watch/demo-watch.vue`,
        component: DemoWatch,
        source: DemoWatchSource
      },
      {
        path: 'unit08-watcheffect',
        title: 'demo-watchEffect.vue',
        file: `${d1}/unit08-onMounted-watch/demo-watchEffect.vue`,
        component: DemoWatchEffect,
        source: DemoWatchEffectSource
      }
    ]
}
]
export const day2Units = [
  {
    title: 'Unit 02 – Props Demo',
    demos: [
      {
        path: 'day2-unit02-speaker-card',
        title: 'demo-props-parent.vue',
        file: `${d2}/unit02-props/demo-props-parent.vue`,
        component: SpeakerCardParent,
        source: [
          { file: 'demo-props-parent.vue', code: SpeakerCardParentSource },
          { file: 'SpeakerCard.vue', code: SpeakerCardSource }
        ]
      }
    ]
  },
    {
    title: 'Unit 03 – Emits Demo',
    demos: [
      {
        path: 'day2-unit03-emits',
        title: 'demo-emits-parent.vue',
        file: `${d2}/unit03-emits/demo-emits-parent.vue`,
        component: DemoEmitsParent,
        source: [
          { file: 'demo-emits-parent.vue', code: DemoEmitsParentSource },
          { file: 'SpeakerCard.vue', code: SpeakerCardSource2 }
        ]
      }
    ]
  },
  {
    title: 'Unit 04 – Custom v-model Components',
    demos: [
      {
        path: 'day2-unit04-custom-vmodel',
        title: 'demo-custom-vmodel.vue',
        file: `${d2}/unit04-v-model-custom-components/demo-custom-vmodel.vue`,
        component: DemoCustomVModel,
        source: [
          { file: 'demo-custom-vmodel.vue', code: DemoCustomVModelSource },
          { file: 'ExplicitCustomInput.vue', code: ExplicitCustomInputSource },
          { file: 'SimplifiedCustomInput.vue', code: SimplifiedCustomInputSource }
        ]
      }
    ]
  },
  {
    title: 'Unit 05 – Router Demo',
    demos: [
      {
        path: 'day2-unit05-use-router',
        title: 'demo-use-router.vue',
        file: `${d2}/unit05-router/demo-use-router.vue`,
        component: DemoUseRouter,
        source: [
          { file: 'demo-use-router.vue', code: DemoUseRouterSource },
          { file: 'RouterNavigator.vue', code: RouterNavigatorSource },
          { file: 'RouterView.vue', code: RouterViewSource }
        ]
      }
    ]
  },
  {
    title: 'Unit 06 – Fetch from API',
    demos: [
      {
        path: 'day2-unit06-fetch-api',
        title: 'demo-fetch-from-API.vue',
        file: `${d2}/unit06-fetch-api/demo-fetch-from-API.vue`,
        component: DemoFetchFromAPI,
        source: DemoFetchFromAPISource
      }
    ]
  }
]
const allUnits = [...day2Units, ...day1Units]
const routes = allUnits.flatMap((unit) =>
  unit.demos.map((demo) => ({
    path: '/' + demo.path,
    component: demo.component
  }))
)

export default createRouter({
  history: createWebHashHistory(),
  routes
})

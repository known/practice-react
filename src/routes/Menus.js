import HelloWorld from './Basic/HelloWorld'
import IntroducingJsx from './Basic/IntroducingJsx'
import ComponentProps from './Basic/ComponentProps'
import StateLifecycle from './Basic/StateLifecycle'
import HandlingEvents from './Basic/HandlingEvents'
import ConditionalRendering from './Basic/ConditionalRendering'
import ListAndKey from './Basic/ListAndKey'
import Forms from './Basic/Forms'
import LiftingStateUp from './Basic/LiftingStateUp'
import CompositionVsInheritance from './Basic/CompositionVsInheritance'
import ThinkingInReact from './Basic/ThinkingInReact'

import JsxInDepth from './Advance/JsxInDepth'
import RefsAndTheDOM from './Advance/RefsAndTheDOM'

import Blog from './Example/Blog'

const Channels = [
    {
        id: 'basic',
        path: '/basic',
        title: '基础',
        menus: [
            { path: '/basic/hello-world', title: 'Hello World', component: HelloWorld },
            { path: '/basic/introducing-jsx', title: 'Introducing Jsx', component: IntroducingJsx },
            { path: '/basic/component-props', title: 'Component Props', component: ComponentProps },
            { path: '/basic/state-lifecycle', title: 'State Lifecyle', component: StateLifecycle },
            { path: '/basic/handling-events', title: 'Handling Events', component: HandlingEvents },
            { path: '/basic/conditional-rendering', title: 'Conditional Rendering', component: ConditionalRendering },
            { path: '/basic/lists-and-keys', title: 'Lists and Keys', component: ListAndKey },
            { path: '/basic/forms', title: 'Forms', component: Forms },
            { path: '/basic/lifting-state-up', title: 'Lifting State Up', component: LiftingStateUp },
            { path: '/basic/composition-vs-inheritance', title: 'Composition vs Inheritance', component: CompositionVsInheritance },
            { path: '/basic/thinking-in-react', title: 'Thinking In React', component: ThinkingInReact }
        ]
    },
    {
        id: 'advance',
        path: '/advance',
        title: '高级',
        menus: [
            { path: '/advance/jsx-in-depth', title: 'Jsx In Depth', component: JsxInDepth },
            { path: '/advance/refs-and-the-dom', title: 'Refs and the DOM', component: RefsAndTheDOM }
        ]
    },
    {
        id: 'example',
        path: '/example',
        title: '示例',
        menus: [
            { path: '/example/blog', title: 'Blog', component: Blog }
        ]
    }
]

export default Channels
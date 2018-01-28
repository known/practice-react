import HelloWorld from './Basic/HelloWorld'
import IntroducingJsx from './Basic/IntroducingJsx'
import ComponentProps from './Basic/ComponentProps'
import StateLifecycle from './Basic/StateLifecycle'
import HandlingEvents from './Basic/HandlingEvents'
import ConditionalRendering from './Basic/ConditionalRendering'
import ListAndKey from './Basic/ListAndKey'
import Forms from './Basic/Forms'

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
            { path: '/basic/forms', title: 'Forms', component: Forms }
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
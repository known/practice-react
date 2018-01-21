import Hello from './Basic/Hello'
import Clock from './Basic/Clock'
import Toggle from './Basic/Toggle'
import LoginControl from './Basic/LoginControl'
import Todo from './Basic/Todo'

const Channels = [
    {
        id: 'basic',
        path: '/basic',
        title: '基础',
        menus: [
            { path: '/basic/hello', title: 'Hello World', component: Hello },
            { path: '/basic/clock', title: 'Clock', component: Clock },
            { path: '/basic/toggle', title: 'Toggle', component: Toggle },
            { path: '/basic/logincontrol', title: 'LoginControl', component: LoginControl },
            { path: '/basic/todo', title: 'Todo', component: Todo }
        ]
    },
    {
        id: 'example',
        path: '/example',
        title: '示例'
    }
]

export default Channels
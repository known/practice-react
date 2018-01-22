import Hello from './Basic/Hello'
import JSX from './Basic/Jsx'

import Clock from './Example/Clock'
import Toggle from './Example/Toggle'
import LoginControl from './Example/LoginControl'
import Todo from './Example/Todo'
import Blog from './Example/Blog'
import Comment from './Example/Comment'

const Channels = [
    {
        id: 'basic',
        path: '/basic',
        title: '基础',
        menus: [
            { path: '/basic/hello', title: 'Hello World', component: Hello },
            { path: '/basic/jsx', title: 'JSX', component: JSX }
        ]
    },
    {
        id: 'example',
        path: '/example',
        title: '示例',
        menus: [
            { path: '/example/clock', title: 'Clock', component: Clock },
            { path: '/example/toggle', title: 'Toggle', component: Toggle },
            { path: '/example/logincontrol', title: 'LoginControl', component: LoginControl },
            { path: '/example/todo', title: 'Todo', component: Todo },
            { path: '/example/blog', title: 'Blog', component: Blog },
            { path: '/example/comment', title: 'Comment', component: Comment }
        ]
    }
]

export default Channels
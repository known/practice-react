import Hello from './Basic/Hello'
import Clock from './Basic/Clock'

const Channels = [
    {
        id: 'basic',
        path: '/basic',
        title: '基础',
        menus: [
            { path: '/basic/hello', title: 'Hello World', component: Hello },
            { path: '/basic/clock', title: '时钟', component: Clock }
        ]
    },
    {
        id: 'example',
        path: '/example',
        title: '示例'
    }
]

export default Channels
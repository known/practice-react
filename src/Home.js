import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => (
	<Jumbotron>
		<h1>Hello, World!</h1>
		<p>
			这里是本人学习React的示例程序，该程序使用技术栈：React + React Router + React Bootstrap。
		</p>
		<p>
			<Link to="/basic" className="btn btn-primary">开始</Link>
		</p>
	</Jumbotron>
)

export default Home
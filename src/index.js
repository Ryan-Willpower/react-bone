import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
	render() {
		return (
			<div>
				<p className="main">Welcome To React</p>
			</div>
		)
	}
}

const main = document.querySelector('.main')

ReactDOM.render(<App />, main)
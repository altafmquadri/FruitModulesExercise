import React from 'react'
import ReactDOM from 'react-dom'
import items from './Foods'
import { remove } from './Helpers'


class App extends React.Component {
    render() {
        let selected = remove(items)
        return (
            <div>
                <p>I'd like one {selected} please</p>
                <p>Here you go {selected}</p>
                <p>we have {items.length -1} fruits left</p>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
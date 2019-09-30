import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Editor from '@vienne/block_editor/src/containers/Main.js'

class App extends Component {
    render(){
        return (
            <h1>Hello i'm react app<Editor /></h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))
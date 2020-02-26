import React, { Fragment } from 'react'
import { List } from './components/List/List'
import { Input } from './components/Input/components/Input'

class App extends React.Component {

    state = {
        inputValue: '',
        list: []
    }

    search = (event) => {
        debugger
        console.log (event.target.value)
        //  event.target.value
        
        this.setState({
            ...this.state,
            inputValue: event.target.value,
        }) 
    }


    render() {
        return (
            <Fragment>
            <Input search={this.search} />
        
            <List startWith={this.state.inputValue} search={this.search} />
            </Fragment>
        )
    } 
}

export { App }
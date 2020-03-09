import React, { Fragment } from 'react'
import { List } from './components'
import { Input } from './components'
import { ModalWindow } from './components'
import { MenuButton } from './components'

export class App extends React.Component {

    state = {
        isLoading: true,
        list: [],
        sortedList: [],
        isModalWindowOpen: false,
        isSorted: false,
        isTextEntered: false,
        isCanceledWindow: false,
        inputValue: '',
        isDisabled: true,
    }

    async componentDidMount() {
        try {
            let result = await fetch('https://jsonplaceholder.typicode.com/todos');
            let list = await result.json();
            // localStorage.setItem('list', JSON.stringify(list));

            this.setState({
                ...this.state,
                isLoading: false,
                list: list,
            })
        } catch {
            console.log('error')
        }
    };

    search = ({ target }) => {

        if (target.id === "input-instead-li") {

            return this.setState({
                ...this.state,
                inputValue: target.value
            })
        }
    
        const newList = this.state.list.filter(item => {
           return item.title.startsWith(target.value)
        })

        this.setState({
            ...this.state,
            sortedList: newList,
            isSorted: true,
            inputValue: target.value
        })
    }

    showModalWindow = () => {

        this.setState({
            ...this.state,
            isModalWindowOpen: true
        })
    }

    getInputValue = ({target:{value}}) => {

        this.setState({
            ...this.state,
            isDisabled: false,
            inputValue: value
        })
    }

    addItem = () => {      
        // this.state.list.push({title: this.state.inputValue});

        this.setState({
            ...this.state,
            list: [...this.state.list, {title: this.state.inputValue}],
            isModalWindowOpen: false,
            isTextEntered: true,
        })
    }

    cancelWindow = ({target}) => {

        if (target.className === "window" || target.className === "input-modal-window" || target.className === "add") {
            return;
        }
        this.setState({
            ...this.state,
            isModalWindowOpen: false,
            isCanceledWindow: true
        })    
    }

    render() {
        debugger

        return (
            <Fragment>
                <div className="wrapper">
                    <Input onChange={this.search} class="input-search" placeholder="search" id="input-search"/>
                    <MenuButton title="add" className="add" onClick={this.showModalWindow} />
                </div>
                {
                    this.state.isSorted  && <List isLoading={this.state.isLoading} 
                                                  list={this.state.sortedList} 
                                                  inputValue={this.state.inputValue} 
                                                  search={this.search} />
                }
                {
                    (!this.state.isSorted || this.state.isTextEntered || this.state.isCanceledWindow) && <List isLoading={this.state.isLoading} 
                                                                                                               list={this.state.list} 
                                                                                                               inputValue={this.state.inputValue} 
                                                                                                               search={this.search} 
                                                                                                               disabled={this.state.isDisabled} />
                }
                {
                    this.state.isModalWindowOpen && <ModalWindow classBackground="background" 
                                                                 classWindow="window" 
                                                                 getInputValue={this.getInputValue} 
                                                                 addItem={this.addItem} 
                                                                 cancelWindow={this.cancelWindow} 
                                                                 disabled={this.state.isDisabled}/>
                } 
            </Fragment>
        )
    }
}

import React from 'react'
import '../../App.css';
import { Item } from './components'
// import { Input } from '../Input'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoading: true,
      selectedItem: '',
      idSelectedItem: '' 
    }
  };

  async componentDidMount() {
    try {
      let result = await fetch('https://jsonplaceholder.typicode.com/todos');
      let list = await result.json();

      this.setState({
        ...this.state,
        isLoading: false,
        list: list,
      })
    } catch {
      console.log ('error')
    }
  };

  // forSearch = () => {
  //   return this.state.list
  // }

  search = () => {
    debugger
    if (this.props.startWith) {
      const newList = this.state.list.filter(item => {
        return  item.title.startsWith(this.props.startWith)   
      })

      this.setState({
        ...this.state,
        list: newList
      })
    }
  }

  showMenu = (id) => {
    const elem = this.state.list.find(item => {
     return item.id === id
    })
    const widthElem = elem.title.length*12;
  
    this.setState({
      ...this.state,
      idSelectedItem: id,
      selectedItem: widthElem
    })
  }

  remove = (event) => {
    const newList = this.state.list.filter(function(item) {
      return +event.target.id !== item.id
    })

    this.setState({
      ...this.state,
      list: newList
    })
  }

  // removeItem = (({target}) => {
  //   this.state.list.filter(item => target.id !== item.id )
  // }

  render () {
    debugger
    return (
      this.state.isLoading ? <h4>Loading</h4> : (
        <ul>
          
          {
            this.state.list.map(item => <Item onclick={this.remove} 
                                              title={item.title}
                                              key={item.id} 
                                              id={item.id} 
                                              
                                              showMenu={this.showMenu}
                                              idEl={this.state.idSelectedItem}
                                              widthElem={this.state.selectedItem}
                                              startWith={this.props.startWith}
                                               />)
          }
        </ul>
      )
    )
  }
}

export { List };

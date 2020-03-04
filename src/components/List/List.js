import React from 'react'
import '../../App.css';
import { Item } from './components'

export class List extends React.Component {

  render() {
    
    return (
      this.props.isLoading ? <h4>Loading...</h4> : (
        <ul >
          {
            this.props.list.map(item => <Item onclick={this.remove}
              title={item.title}
              key={item.id}
              id={item.id}
              change={this.change}
              inputValue={this.props.inputValue}
              search={this.props.search}
            />)
          }
        </ul>
      )
    )
  }
}


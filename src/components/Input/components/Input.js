import React from 'react'

export class Input extends React.Component {

    render() {
        debugger
        return <input size={this.props.size} 
                      onChange={this.props.onChange} 
                      className={this.props.class} 
                      placeholder={this.props.placeholder}
                      id={this.props.id}/>
    }
}

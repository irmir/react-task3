import React from 'react'
import { ButtonDots } from './components'
import { MenuList } from '../../../MenuList'

class Item extends React.Component {

    render() {
        return (
            // {
            //     if (this.props.title.startsWith(this.props.startsWith)) {

            //     }
            // }
            <div className='string-wrapper'>
                <li onClick={this.props.onclick}
                    id={this.props.id}
                    key={this.props.id}> {this.props.title} </li>
                <ButtonDots id={this.props.id} showMenu={this.props.showMenu} />
                {
                    this.props.idEl === this.props.id && <MenuList id={this.props.id} widthElem={this.props.widthElem} />
                }
            </div>
        )
    }
}

export { Item }
import React from 'react'
import { MenuButton } from './components'

const optionsName = ['change', 'delete', 'save'];

class MenuList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {left: `${this.props.widthElem}px` }

        return (
            <ul className="menu" style={styles}>
                {
                    optionsName.map(element => <MenuButton className={element} key={this.props.id}/>)
                }
            </ul>
        )
    }

}

export { MenuList }
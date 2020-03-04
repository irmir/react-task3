import React from 'react'
import { MenuButton } from './components'

const optionsName = ['change', 'delete', 'save'];

export class MenuList extends React.Component {

    componentDidMount() {
        debugger
        document.addEventListener('click', this.props.hideMenu)
    }

    componentWillUnmount() {
        debugger
        document.removeEventListener('click', this.props.hideMenu)
    }

    render() {

        const styles = { left: `${this.props.positionMenuleft}px` }

        return (
            <ul ref={this.ulRef} className="menu" onClick={this.props.handleClickMenu} style={styles} data-id={this.props.id}>
                {
                    optionsName.map((element, index) => <MenuButton className={element}
                        id={element}
                        title={element}
                        key={index}
                        disabled={this.props.isDisabled}
                        onClick={this.props.addItem} />)
                }
            </ul>
        )
    }
}

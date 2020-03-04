import React from 'react'
import { ButtonDots } from './components'
import { MenuList } from './components'
import { Input } from '../../../Input'

export class Item extends React.Component {
    state = {
        positionMenuLeft: '',
        textLi: '',
        isChanged: false,
        isActiveMenu: false,
        isSaved: false,
        isDeleted: false,
        isTextEntered: false,
        isDisabled: false,
        firstView: false, 
    }

    handleClickMenu = (event) => {
        debugger
        // event.stopImmediatePropagation()
        event.stopPropagation();
        if (event.target.className === "change") {
 
            this.setState({
                ...this.state,
                isChanged: true,
                isDisabled: true
            })
        }
        if (event.target.className === "save") {
            this.setState({
                ...this.state,
                isChanged: false,
                isSaved: true,
                textLi: this.props.inputValue
            })
        }
        if (event.target.className === "delete") {
            this.setState({
                ...this.state,
                isSaved: false,
                isDeleted: true
            })
        }
    }
    
    showMenu = (event) => {
        debugger

        this.setState({
            ...this.state,
            isActiveMenu: true,
            positionMenuLeft: event.clientX,
            isDisabled: false,
            firstView: true,
            // isSaved: false
        });
    }

    hideMenu = ({target}) => {
        
        if (target.id === "input-instead-li" || target.id === "change") {
            return
        }
        
        this.setState({
            isActiveMenu: false
        })
    }

    addItem = () => {
        
        this.setState({
            ...this.state,
            isTextEntered: true
        })
    }

    // spanRef = React.createRef();

    // const coord = target.getBoundingClientRect();
    //         ulMenu.style.cssText = `display: block!important; top: ${coord.bottom}px; left: ${coord.left}px`;

    // coord = this.spanRef.getBoundingClientRect();
    // left = this.coord.left

    render() {

        if (this.state.isChanged) {
            return (
                <li className='string-wrapper'>
                    <Input size={this.widthInput} onChange={this.props.search} class="input-instead-li" id="input-instead-li" />
                    <ButtonDots showMenu={this.showMenu} />
                    {
                        this.state.isActiveMenu && <MenuList id={this.props.id}
                            positionMenuleft={this.state.positionMenuLeft}
                            handleClickMenu={this.handleClickMenu}
                            isDisabled={this.state.isDisabled}
                            addItem={this.addItem} />
                    }
                </li>
            )
        }

        if (this.state.isSaved) {
            return (
                <li className='string-wrapper'>
                    <span onClick={this.props.onclick}
                        data-id={this.props.id}
                        key={this.props.id}> {this.state.textLi}
                    </span>
                    <ButtonDots showMenu={this.showMenu} />
                </li>
            )
        }

        if (this.state.isDeleted) {
            return null
        }

        if (this.state.isTextEntered) {
            return (
                <li className='string-wrapper'>
                    <span onClick={this.props.onclick}
                        data-id={this.props.id}
                        key={this.props.id}> {this.props.inputValue}
                    </span>
                    <ButtonDots showMenu={this.showMenu} />
                    {
                        this.state.isActiveMenu && <MenuList ulRef={this.ulRef}
                            id={this.props.id}
                            positionMenuleft={this.state.positionMenuLeft}
                            handleClickMenu={this.handleClickMenu}
                            addItem={this.addItem} />
                    }
                </li>
            )
        }

        return (
            <li className='string-wrapper'>
                <span onClick={this.props.onclick}
                    data-id={this.props.id}
                    key={this.props.id}> {this.props.title}
                </span>
                <ButtonDots showMenu={this.showMenu} />
                {
                    this.state.isActiveMenu && <MenuList ulRef={this.ulRef}
                        id={this.props.id}
                        positionMenuleft={this.state.positionMenuLeft}
                        handleClickMenu={this.handleClickMenu}
                        addItem={this.props.addItem}
                        hideMenu={this.hideMenu} />
                }
            </li>
        )
    }
}

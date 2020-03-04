import React from 'react'
import { MenuButton } from '../List'
import { Input } from '../Input'

export function ModalWindow({ classBackground, classWindow, getInputValue, addItem, cancelWindow, disabled }) {
    
    return ( 
        <div className={classBackground} onClick={cancelWindow} >
            <div className={classWindow} >
                <Input class="input-modal-window" onChange={getInputValue}/>
                <div className="button-block">
                    <MenuButton title="add" className="add" onClick={addItem} disabled={disabled}/>
                    <MenuButton title="cancel" className="cancel" onClick={cancelWindow}/>
                </div>
            </div>
        </div>
    )
}
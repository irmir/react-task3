import React from 'react'

export function MenuButton({ className, disabled, title, onClick, id }) {

    if (className === "save") {
        disabled = !disabled
    }

    return <button className={className} onClick={onClick} disabled={disabled} id={id}>{title}</button>
}

// disabled={(className === 'change' || 'delete' ? isDisabled : 'false')}
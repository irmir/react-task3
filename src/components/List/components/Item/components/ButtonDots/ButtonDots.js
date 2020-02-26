import React, { Fragment } from 'react'
// import { MenuList } from '../../../../../MenuList';

function ButtonDots({showMenu, id}) {
    
    return <button onClick={() => showMenu(id)} id={id}>...</button>
}

export {ButtonDots}
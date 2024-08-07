import React, { useState } from 'react';


function App(){
    const [dark,setdark] = useState(true)

    const toggle = () => {
        setdark(!dark)
}
    return(
        <>
        <button onClick={toggle}>{dark ? 'Oscuro' : 'Claro'}</button>
        </>
    )
}
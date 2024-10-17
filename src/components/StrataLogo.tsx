// import React from 'react'
import Logo from '../assets/strata.svg'

const StrataLogo = ({size = ""}) => {
    const center = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div className='main' style={center} >
            <div style={{position: 'relative', top: 0.5}} >
                <img 
                    src={Logo}
                    style={{
                     height: size, 
                     width: size,  
                    }}
                ></img>
            </div>
        </div>
    )
}

export default StrataLogo;
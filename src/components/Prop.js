import React from 'react'

const Prop = props => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name} a.k.a {props.name}
            </h1>
            {props.children}
        </div>
    )
}

export default Prop
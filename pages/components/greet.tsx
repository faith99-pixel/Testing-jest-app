import React from 'react'

type GreetProps = {
    name?: string,
}

const Greet = (props: GreetProps) => {
    return (
        <>
            <h1>Hello</h1>
            <div>Hello {props.name}</div>
        </>
    )
}

export default Greet
import React from 'react'

function Student(props) {
    
    return (
        <div style={{ backgroundColor: "skyblue", margin: 10 }}>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Student
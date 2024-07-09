import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>SUCCESS: </strong>
                {props.alert.msg}
            </div>
        </div>
    )
    //it means if props.alert is not null then do the following operation
}

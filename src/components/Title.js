import React from 'react'

export default function Title({name,title}) {
    return (
       <React.Fragment>
            <div className="row">
                <h3 className="text-title text-center col-10 mx-auto my-2">    
                <strong className="text-blue">{name} {title}</strong> </h3>
          </div>
            </React.Fragment>
    )
}

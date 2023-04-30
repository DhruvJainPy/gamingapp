import React from 'react'

export const About = (props) => {
    return (
        <div className='col-12 d-flex flex-column justify-content-center align-items-center mt-5 p-3 p-md-5 text-center'>
            {props.data.buttonText !== null ? <p className='h4 fw-bold' style={{ color: "#272443" }}>About Tripo</p> : null}
            <p className='display-4 font2 mt-3 para' style={{ color: "#272443" }}>{props.data.title}</p>
            <p className="mt-3 h5  para">{props.data.body}.</p>
            {props.data.buttonText !== null ? <button className='btn btn1 mt-3 mt-md-4'>{props.data.buttonText}</button> : null
            }
        </div >
    )
}

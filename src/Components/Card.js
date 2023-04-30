import React from 'react'

export const Card = (props) => {
    const img = {
        backgroundImage: `url(${props.image}),linear-gradient(to top,#B53F39 , rgba(117, 19, 93, 0.73))`
    };
    return (
        <div div className='col-12 col-md-3 p-4 text-center text-md-start card-con' >
            {props.image !== null ? <div className="image  d-flex flex-column justify-content-end px-3 px-md-5 py-3 py-md-4" style={img}><p className='text-white h5 card-txt' style={{ fontWeight: "bold" }}>{props.title}</p><p className="card-txt text-white">{props.caption}</p></div> : <div className='d-flex justify-content-center align-items-center card4 text-center'><p className='h4 fw-bold'>Explore Our <br /> Games <br />&#8595;</p></div>}
        </div>
    )
}

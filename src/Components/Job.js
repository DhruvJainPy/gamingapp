import React from 'react'

const Job = (props) => {
    return (
        <div className="col-12 col-md-3 text-white">
            <div className="card bg-transparent border-0 jobContainer" >
                <img src={props.job.img} className="card-img-top jobImg" alt="..." />
                <div className="card-body">
                    <h5 className="card-title mt-4 h5 fw-bold">{props.job.title} <br /><p className='h6 mt-3'>San Francisco,CA</p></h5>
                    <p className="card-text mt-4">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                    <button className="btn4 mt-4">Apply</button>
                </div>
            </div>
        </div>
    )
}

export default Job
import React from 'react';
import apple from "./../Images/Apple.webp";
import android from "./../Images/Android.webp"
export const InfoCard = (props) => {
    return (
        <div className="col-11 col-md-5  offset-1 p-3 p-md-5 my-3 my-md-5">
            <div className="card p-3 p-md-4 shadow-lg" style={{ maxWidth: "22.5rem", borderRadius: "20px", minHeight: "60vh" }}>
                <div className="card-body">
                    <div className='mb-3 mb-md-4 d-flex align-items-center'>
                        <img className="shadow-lg" style={{ border: "5px solid white", borderRadius: "25px" }} src={props.element.character} height="79" width="79" alt="" />
                        <p className="card-title h5 fw-bolder ms-3 ms-md-4 mt-4">
                            {props.element.title}
                            <p className='h6 mt-2'>{props.element.subtitle}</p>
                        </p>
                    </div>
                    <p className="card-text">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <button className=' border-0 mt-3 bg-transparent'><img height="40" width="120" src={apple} alt="" /></button>
                    <button className='ms-3 border-0 mt-3 bg-transparent'><img height="40" width="120" src={android} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

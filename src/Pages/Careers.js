import React from 'react'
import { Navbar } from '../Components/Navbar';
import './App.css';
import des from "./../Images/des.webp";
import designer from "./../Images/designer.webp";
import community from "./../Images/community.webp";
import tester from "./../Images/tester.webp";
import Job from '../Components/Job';
import Footer from '../Components/Footer';
export const Careers = () => {
    const jobs = [{ id: 1, title: "Community Manager", img: community }, { id: 2, title: "QA Tester", img: tester }, { id: 3, title: "Game Designer", img: designer }, { id: 4, title: "Game Developer", img: des }]
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#F6F4F0" }}>
                <div className="row">
                    <Navbar />
                    <div className="row col-12 col-md-10 p-4 p-md-5">
                        <div className="p-4 p-md-5">
                            <p className="h5 fw-bold my-4 px-4" style={{ color: "#282443" }}>Help Us Change the Way People Play</p>
                            <p className="display-5 font2 my-4 px-4" style={{ color: "#272443" }}>We're Hiring</p>
                            <p className='my-4 h5 para px-4'>I' m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 bg6">
                        <p className="display-5 fw-bold font2 text-white text-center p-3 p-md-5">Job Openings</p>
                        <div className="row p-3 p-md-5">
                            {jobs.map((job) => {
                                return (<Job key={job.id} job={job} />);
                            })}
                        </div>
                    </div>
                </div>
                <div className="row text-white">
                    <div className="col-12 col-md-10 offset-md-1 bg5 d-flex flex-column justify-content-center align-items-start p-3 p-md-5">
                        <p className="h4 fw-bold mt-3 px-5">Didn't Find the Position You're Looking For?</p>
                        <p className="display-5 font2 fw-bold mt-3 px-5">Send Us Your CV</p>
                        <button className="mt-4 btn2  ms-5" style={{ padding: "20px 30px" }}>Apply Now</button>
                    </div>
                </div>
                <div className="row">
                    <Footer />
                </div>
            </div >
        </>
    )
}

export default Careers;
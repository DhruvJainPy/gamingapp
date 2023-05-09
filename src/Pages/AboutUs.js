import React from 'react'
import { Navbar } from '../Components/Navbar';
import { Footer } from "../Components/Footer";
import Job from '../Components/Job';
import cto from "./../Images/CTO.webp";
import sgd from "./../Images/SGD.webp";
import sgd1 from "./../Images/SGD1.webp";
import sgd2 from "./../Images/SGD2.webp";
import aboutChar from "./../Images/aboutchar.webp";
export const AboutUs = () => {
    const employee = [{ id: 1, img: cto, title: "Daisy Suarez" }, { id: 2, img: sgd, title: "Ray Finigan" }, { id: 3, img: sgd1, title: "Tao Deng" }, { id: 4, title: "Ben Singleton", img: sgd2 }];
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#F6F4F0" }}>
                <div className="row">
                    <Navbar />
                </div>
                <div className="row p-3 p-md-5">
                    <div className="col-12 p-3 p-md-5">
                        <p className="h5 fw-bold mt-2" style={{ color: "#272443" }}>We Are Tripo</p>
                        <p className="display-4 font2 w-75 mt-3" style={{ color: "#272443" }}>We're creating the best in interactive entertainment by making games that change the way people have fun.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 about1">
                    </div>
                    <div className="col-12 col-md-7 p-3 p-md-5 text-white d-flex flex-column align-items-center" style={{ backgroundColor: "#DA392B" }}>
                        <p className='h5 py-3 px-5'>
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                        </p>
                        <p className='h5 px-5 py-3'>
                            This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                        </p>
                    </div>
                </div>
                <div className="row p-3 p-md-5 about2">
                    <p className="display-4 font2 p-5 text-center" style={{ color: "#272443" }}>What We Are About</p>
                    <div className="row">
                        <div className="col-12 col-md-4 offset-md-2 mt-3">
                            <div className="card p-3 p-md-4 shadow-lg" style={{ borderRadius: "22px" }}>
                                <div className="card-body">
                                    <h5 className="card-title h2 fw-bold" style={{ color: "#DB4133" }}>Accomplishment</h5>
                                    <p className="card-text mt-3">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-3">
                            <div className="card p-3 p-md-4 shadow-lg" style={{ borderRadius: "22px" }}>
                                <div className="card-body">
                                    <h5 className="card-title h2 fw-bold" style={{ color: "#DB4133" }}>Creativity</h5>
                                    <p className="card-text mt-3">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 mt-md-5">
                        <div className="col-12 col-md-8 offset-md-2">
                            <div className="card p-3 p-md-4 shadow-lg" style={{ borderRadius: "22px" }}>
                                <div className="card-body">
                                    <h5 className="card-title h2 fw-bold" style={{ color: "#DB4133" }}>Community</h5>
                                    <p className="card-text mt-3">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 p-3 p-md-5" style={{ backgroundColor: "#272443" }}>
                        <p className="display-4 text-center font2 text-white p-3 p-md-5">Meet The Founders</p>
                        <div className="row">
                            {employee.map((el) => {
                                return <Job key={el.id} job={el} />
                            })}
                        </div>
                    </div>
                </div>
                <div className="row about3 mt-3 mt-md-5 p-3 p-md-5 text-white">
                    <div className="col-12 col-md-6 p-3 p-md-5 d-flex flex-column justify-content-center">
                        <p className="h5 fw-bold mt-3">Our Offices</p>
                        <p className="display-3 font2 mt-2">Our Studio in San Francisco</p>
                        <p className='h5 mt-2'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                    <div className="col-12 col-md-6 p-3 p-md-5 d-flex align-items-center justify-content-center">
                        <div className="card p-3 shadow-lg" style={{ borderRadius: "22px", width: "25rem" }}>
                            <div className="card-body p-3">
                                <img src={aboutChar} className='card-img-top' alt="" />
                                <p className="h5 mt-4 fw-bold" style={{ color: "#272443" }}>We'd Love to Work With You</p>
                                <p className='text-dark mt-3'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                                <button className='btn3'>Explore Opportunities</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Footer />
                </div>
            </div >
        </>
    )
}
export default AboutUs;
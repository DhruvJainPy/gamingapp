import './App.css';
import { Navbar } from './../Components/Navbar';
import { Card } from './../Components/Card';
import { About } from './../Components/About';
import { Footer } from './../Components/Footer';
import { InfoCard } from './../Components/InfoCard';
import img1 from "./../Images/card1.webp";
import img2 from "./../Images/card2.webp";
import img3 from "./../Images/card3.webp";
import after from "./../Images/after.webp"
import c1 from "./../Images/c1.webp";
import c2 from "./../Images/c2.webp";
import c3 from "./../Images/c3.webp";
import character from "./../Images/character.webp";
import apple from "./../Images/Apple.webp";
import android from "./../Images/Android.webp"

function Home() {
    const cards = [{ id: 1, imgURL: img1, title: "Kipon", caption: "Casual - Free" }, { id: 2, imgURL: img2, title: "Robotrix", caption: "RPG - Free" }, { id: 3, imgURL: img3, title: "Treasure Box", caption: "Adventure - Free" }, { id: 4, imgURL: null }]
    const style1 = { backgroundImage: " background-image: linear-gradient(to bottom right, red, yellow)" }
    const abt1 = { title: "Your Source for Mobile Entertainment", body: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.", buttonText: "Learn More" }
    const abt2 = { title: "Our Games", body: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.", buttonText: null }
    const infoCards = [{ id: 1, character: c1, title: "Kipon", subtitle: "Casual - Free" }, { id: 2, character: c2, title: "Robotrix", subtitle: "RPG - Free" }, { id: 3, character: c3, title: "Treasure Box", subtitle: "Adventure - Free" }]
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#F6F4F0" }}>
                <div className="row bg1 d-flex flex-column justify-content-start">
                    <Navbar />
                    <div className='my-auto'>
                        <p className="display-2 font2 ps-3 ps-md-5" style={{ color: "#272443" }}>Made to Be Played
                            <span className="h4 d-block">The Very Best in Mobile Gaming</span>
                        </p>
                        <button className='ms-3 ms-md-5 border-0 mt-3 bg-transparent'><img src={apple} alt="" width={135} height={45} /></button>
                        <button className='ms-3 border-0 mt-3 bg-transparent'><img src={android} alt="" width={152} height={45} /></button>
                    </div>
                </div>
                <div className="row">
                    {cards.map((el) => {
                        return (<Card key={el.id} image={el.imgURL} style={style1} title={el.title} caption={el.caption} />)
                    })}
                </div>
                <div className="row">
                    <About data={abt1} />
                </div>
                <div className="row d-md-flex justify-content-center">
                    <div className="col-10 col-md-7 bg2 my-3 my-md-5"><img className="after w-auto" src={after} alt="" /></div>
                </div>
                <div className="row">
                    <About data={abt2} />
                </div>
                <div className="row bg3">
                    <div className='row'>
                        {infoCards.map((el) => {
                            return <InfoCard key={el.id} element={el} />
                        })}
                        <div className="col-11 col-md-5 offset-1 p-3 p-md-5 my-3 my-md-5 d-md-flex align-items-center">
                            <img src={character} height={"300px"} width={"275px"} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row contactcontainer">
                    <div className="bg4 p-3 p-md-5 d-flex flex-column align-items-start justify-content-start text-white">
                        <div className="m-3 m-md-5">
                            <p className='h4 fw-bold mt-3'>Join Our Team</p>
                            <p className="display-4 w-75 font2 mt-3">It takes the world's best talent to change the game.</p>
                            <button className='btn2 mt-3'>Explore Careers</button>
                        </div>
                    </div>
                    <div className="contactform col-12 col-md-4" id='contact' >
                        <div className="card rounder shadow-lg" style={{ "width": "27rem" }}>
                            <div className="card-body">
                                <h5 className="card-title h2 fw-bold mt-3 mx-4">Get in Touch</h5>
                                <h6 className="card-subtitle mb-2 h5 mt-3 mx-4">I'm a paragraph.Click here to add your own text and edit me.</h6>
                                <div className="name mt-5 mx-4">
                                    <form className="row g-3">
                                        <div className="col-md-6">
                                            <label htmlFor="fname" className="form-label">First Name * </label>
                                            <input type="text" className="form-control input" id="fname" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="lname" className="form-label">Last Name *</label>
                                            <input type="text" className="form-control input" id="lname" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label">Email *</label>
                                            <input type="email" className='form-control input' id='email' />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="msg" className="form-label">Leave us a message *</label>
                                            <textarea name="msg" id="msg" className='w-100' style={{ "resize": "none" }} rows="5"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn3 mb-3 w-100">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg5 p-3 p-md-5"></div>
                </div>
                <div className="row">
                    <Footer />
                </div>
            </div >
        </>
    );
}

export default Home;

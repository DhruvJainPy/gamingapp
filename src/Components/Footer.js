import React from 'react'
import apple from "./../Images/Apple.webp";
import android from "./../Images/Android.webp";
export const Footer = () => {
    return (
        <div className="row p-3 p-md-5">
            <p className="h2 p-3 text-center"> An Immersive Gaming Experience</p>
            <div className="footer border border-2 border-dark border-start-0 border-end-0 d-md-flex  p-3 p-md-4 mt-4 mt-md-5">
                <div className="contact col-12 col-md-3 my-3 p-3">
                    <p className="h3 fw-bold text-primary">Contact</p>
                    <ul className='list-unstyled text-muted mt-4'>
                        <li className='py-1'>Info@mysite.com</li>
                        <li className='py-1'>Tel: 123-456-7890</li>
                        <li className='py-1'>500 Terry Francois St.</li>
                        <li className='py-1'>San Francisco,CA 94158</li>
                    </ul>
                </div>
                <div className="col-12 col-md-3 navigation my-3 p-3">
                    <p className="h3 fw-bold text-primary">Navigation</p>
                    <ul className="list-unstyled text-muted mt-4">
                        <li className='py-1'>Games</li>
                        <li className='py-1'>Careers</li>
                        <li className='py-1'>About</li>
                        <li className='py-1'>Contact</li>
                        <li className='py-1'>Privacy Policy</li>
                        <li className='py-1'>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="col-12 col-md-3 social my-3 p-3">
                    <p className="h3 fw-bold text-primary">Social</p>
                    <ul className='list-unstyled text-muted mt-4'>
                        <li className='py-1'>Discord</li>
                        <li className='py-1'>Twitch</li>
                        <li className='py-1'>Facebook</li>
                        <li className='py-1'>YouTube</li>
                        <li className='py-1'>Twitter</li>
                        <li className='py-1'>LinkedIn</li>
                    </ul>
                </div>
                <div className="col-12 col-md-3 find my-3 p-3">
                    <p className="h3 fw-bold text-primary">Find Us On</p>
                    <ul className='list-unstyled mt-4'>
                        <li className='py-1'>
                            <button className='border-0 mt-3 bg-transparent'><img src={apple} alt="" width={135} height={45} /></button>
                        </li>
                        <li className='py-1'>
                            <button className='border-0 mt-3 bg-transparent'><img src={android} alt="" width={152} height={45} /></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;

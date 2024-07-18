import React from "react";
import url from './images/url.jpg';
import laundry from './images/laundry.png';
import insta from './images/insta_clone.png';
// import hire from './images/hiring.jpg';

function Projects() {
    return (
        <>
            <div>
                <section className="colorlib-work" data-section="projects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Work</span>
                                <h2 className="colorlib-heading animate-box">Recent Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: `url(${laundry})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Laundry WebApp</a></h3>
                                            <span>The laundry website is a full stack project that enables users to conveniently book laundry services online, track their orders, and make payments.</span>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>ReactJs<br/>MongoDB<br/>NodeJs</span>
                                            <p className="icon">
                                                {/* <span><a href="https://bookmyshowtejas.netlify.app/" target="_blank">Website</a></span> */}
                                                <span className="float-right"><a href="https://github.com/Rahulbunny07/Laundry_WebApp" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${url})`}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>URL Shortner</a></h3>
                                            <span>A Full Stack Website for Shortning the given long URL.<br/>Here user will enter the long url after logging in and user will get his short url.<br/></span>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>ReactJs<br/>MongoDB<br/>NodeJs</span>
                                            <p className="icon">
                                                <span><a href="https://urlfront.herokuapp.com/" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="https://github.com/Tejashr/url" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: `url(${insta})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Instgram Clone</a></h3>
                                            <span>Instgaram clone is a full stack project that aims to replicate the core features and functionalities of Instagram, including user authentication, photo uploading, commenting, liking, and following.</span>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>ReactJs<br/>MongoDB<br/>NodeJs</span>
                                            <p className="icon">
                                                {/* <span><a href="https://swiping-cards.netlify.app/" target="_blank">Website</a></span> */}
                                                <span className="float-right"><a href="https://github.com/Rahulbunny07/Photo-Sharing-App" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-4 animate-box"  data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${hire})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Hiring</a></h3>
                                            <span>A Full Stack Website for appling job.<br/>Here the user will finds the job for applying.<br/>Recruiter will post the job and he can see the list of candidates applied for his jobs.</span>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>ReactJs<br/>MongoDB<br/>NodeJs</span>
                                            <p className="icon">
                                                <span><a href="https://hiring-fe.netlify.app/" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="https://github.com/Tejashr/Hiring-fe" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Projects;
import React, { useRef } from 'react';
import ReviewsCarousel from '../components/ReviewsCarousel';

import bgimg from '../public/images/background/main-background.jpg';
import about1 from '../public/images/aman.jpg';
import bg1 from '../public/images/background/bg1.jpg';
import { RecentProjectDetails } from '../data/RecentProjectDetails';
import ContactForm from '../components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';



const HomePage = () => {
    const aboutProgressRef = useRef(null);
    return (
        <>
            <Head>
                <meta name="description" content="Aman Chaudhary, IIT Gandhinagar | Full Stack Developer" />
                <meta name="keywords" content="Aman Chaudhary, Web Developer, Freelance Web Developer" />
                <meta name="author" content="Aman Chaudhary" />
                <meta name="google-site-verification" content="MZTK0uf2XlaN0lQNV9tIfP56jnhWKCVj332CE7yK0PM" />
                <title>Aman Chaudhary | Portfolio</title>
            </Head>

            <div className="page-content bg-white rubik">
                <div className="home-banner" style={{ backgroundImage: "url(" + bgimg.src + ")" }}>
                    <div className="home-bnr-inner">
                        <div className="home-bnr-content">
                            <h4 className="sub-title">Hi, I&apos;m</h4>
                            <h2 className="dz-title">Aman Chaudhary</h2>
                            <h4 className="sub-title">a Full Stack & WebGIS Developer</h4>
                            <div className="home-bnr-btns">
                                <Link
                                    href="#"
                                    className="site-button white btn-icon"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        aboutProgressRef.current.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start',
                                        });
                                    }}
                                >
                                    Know more <i className="fa fa-angle-double-right"></i>


                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-block">
                    <div className="section-full content-inner about-progress" ref={aboutProgressRef}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <h2 className="font-weight-400">Hi, I’m Aman <br /><p className="font-weight-300" style={{ fontSize: "20px" }}> Senior Undergraduate | IIT Gandhinagar</p></h2>
                                    {/* <div className="progress-section">
                                            <div className="progress-bx">
                                                <h4>Hard Work</h4>
                                                <div className="count-box">70%</div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success" style={{width:'70%'}} role="progressbar"></div>
                                                </div>
                                            </div>
                                            <div className="progress-bx">
                                                <h4>Projects Delivery</h4>
                                                <div className="count-box">80%</div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success" style={{width:'80%'}} role="progressbar"></div>
                                                </div>
                                            </div>
                                            <div className="progress-bx">
                                                <h4>Customers Love</h4>
                                                <div className="count-box">90%</div>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success" style={{width:'90%'}} role="progressbar" ></div>
                                                </div>
                                            </div>
                                        </div> */}
                                    {/* <h3 className="m-b10">The Project</h3> */}
                                    <p style={{ fontSize: "18px" }}>I am a skilled Full Stack Developer with a specialization in front-end technologies like ReactJS and NextJS, coupled with proficiency in back-end development using Flask and NodeJS. I excel in crafting seamless user experiences, leveraging database management expertise in MongoDB and PostgreSQL. My portfolio showcases innovative web applications that harmonize creativity and technical expertise to deliver exceptional results. 
                                    
                                    
                                    </p>
                                </div>
                                <div className="col-md-12 col-lg-6 d-flex ">
                                    <div className="img-half-bx align-items-stretch">
                                        <Image src={about1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="section-full content-inner-1 overlay-primary about-service bg-img-fix" style={{ backgroundImage: "url(" + bg1.src + ")" }}>
                        <div className="container">
                            <div className="section-head text-white text-center">
                                <h2 className="box-title m-tb0 max-w800 m-auto">My Expertise<span className="bg-primary"></span></h2>
                                {/* <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</p> */}
                            </div>
                        </div>
                        <div className="container">
                            <div className="row text-white">

                                <div className="col-lg-4 col-md-4 col-sm-6 m-b30" >
                                    <div className="icon-bx-wraper bx-style-1 p-a30 center">
                                        <div className="icon-lg text-white m-b20"> <Link href={"#"} className="icon-cell text-white"><i className="flaticon-devices" /></Link> </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">Frontend Development</h5>
                                            <p>React JS, Next JS</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-6 m-b30">
                                    <div className="icon-bx-wraper bx-style-1 p-a30 center">
                                        <div className="icon-lg text-white m-b20"> <Link href={"#"} className="icon-cell text-white"><i className="flaticon-development" /></Link> </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">Backend Development</h5>
                                            <p>Node JS, Flask, Rest API, Mongo DB, PostgreSQL</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-6 m-b30">
                                    <div className="icon-bx-wraper bx-style-1 p-a30 center">
                                        <div className="icon-lg text-white m-b20"> <Link href={"#"} className="icon-cell text-white"><i className="flaticon-map-location" /></Link> </div>
                                        <div className="icon-content">
                                            <h5 className="dlab-tilte">WebGIS Development</h5>
                                            <p>Leaflet JS, Openlayers, ArcGIS API</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>



                    <div className="section-full content-inner bg-white workspace-bx mfp-gallery">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-head text-center">
                                        <h2 className="font-weight-300">My Recent Work<p style={{ fontSize: "18px" }}>Here are a few past projects I&apos;ve worked on.</p></h2>

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {RecentProjectDetails.map((project, index) => (
                                    <div className="col-lg-4 col-md-12 col-sm-12" key={index}>
                                        <div className="dlab-box portfolio-box m-b30">
                                            <div className="dlab-media dlab-img-effect dlab-img-overlay1" data-tilt=""> <Image src={project.Image} alt="" />
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon text-white">
                                                        <h5>{project.ProjectName}</h5>
                                                        {/* <p className="m-b10">{project.TagLine}</p> */}
                                                        <a href={project.Link} target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-lg-12 m-t20 text-center">
                                <Link href="/portfolio" className="site-button long-btn radius-xl shadow">See More</Link>
                            </div>

                        </div>
                    </div>

                    {/* <div className="section-full content-inner-2 bg-img-fix overlay-primary gradient testimonial-curv-bx m-b20" style={{ backgroundImage: "url(" + bg1.src + ")" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8">
                                    <div className="section-head text-center">
                                        <h2 className="text-uppercase"><span className="font-weight-300">Happy Clients</span> <br /> Project Reviews</h2>
                                        <h5 className="font-weight-300 text-gray-dark">People I&apos;ve worked with have said some nice things...</h5>

                                    </div>
                                    <ReviewsCarousel />
                                </div>
                            </div>
                        </div>
                    </div> */}


                    <div className="section-full content-inner-2 bg-img-fix overlay-primary gradient subscribe-bx" style={{ backgroundImage: "url(" + bg1.src + ")" }}>
                        <div className="container">
                            <form className="row text-white dezPlaceAni align-items-center dzSubscribe" action="script/mailchamp.php" method="post">
                                <div className="col-lg-4  col-md-12">
                                    <h2 className="m-b0"> Start a project </h2>
                                </div>
                                <div className="col-lg-6 col-md-9 contact-form-bx">
                                    <p style={{ fontSize: "20px" }}> Interested in working together? We should queue up a time to chat. </p>

                                </div>
                                <div className="col-lg-2 col-md-3">
                                    <Link href="/contact" ><button className="site-button button-md radius-xl white btn-block">Let&apos;s do this</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>


                    <ContactForm />
                </div>
            </div >

        </>
    )
}

export default HomePage
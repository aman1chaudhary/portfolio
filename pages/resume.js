import React from "react";
import PageTitle from "../components/PageTitle";
import bannerIMG from "../public/images/background/banner_1.png";
import Head from "next/head";


const ResumePage = () => {
    return (
        <>
            <Head>
                <title>Aman Chaudhary | Portfolio</title>
            </Head>

            <div className="page-content bg-white">
                <div
                    className="dlab-bnr-inr overlay-primary"
                    style={{ backgroundImage: "url(" + bannerIMG.src + ")" }}
                >
                    <PageTitle motherMenu="Resume" activeMenu="Resume" />
                </div>

                <div className="content-block">
                    {/* <!-- About Us --> */}
                    <div className="section-full content-inner-1">
                        {/* <div className="container">
                            <div className="section-head text-black text-center">
                                <h4 className="text-gray-dark m-b10">Start A Project</h4>
                                <h2 className="box-title m-tb0">
                                    Education
                                    <span className="bg-primary"></span>
                                </h2>
                                
                            </div>
                        </div> */}
                        <div className="container">
                            <div className="row m-b50">



                                {/* <div className="col-lg-12 text-center">
                                    <h3 className="text-primary">Resume</h3>
                                </div> */}
                                <div className="col-lg-12">
                                    <div className="time-line clearfix text-black">
                                        <div className="line-right clearfix m-b30">
                                            <div className="line-right-box">
                                                <div className="line-content-box ">
                                                    <h4 className="min-title text-primary m-t0 m-b10">
                                                        Education
                                                    </h4>
                                                    <ul className="font-16">
                                                        <li>
                                                            <p><b>Indian Institute of Technology Gandhinagar</b><br />
                                                                Senior Undergraduate | 2020 - Present <br />
                                                                Discipline of Civil Engineering with Minors in CSE
                                                            </p>
                                                        </li>

                                                        <li>
                                                            <p><b> Boston Public School, Agra</b><br />
                                                                2019 — 2020<br />
                                                                Class XII | CBSE Board | 93%
                                                            </p>
                                                        </li>

                                                        <li>
                                                            <p><b>D.E.I. R.E.I. Intermediate College, Agra</b><br />
                                                                2017— 2018<br />
                                                                Class X | 9.9/10
                                                            </p>
                                                        </li>

                                                    </ul>
                                                </div>
                                                <div className="line-num bg-primary-dark"></div>
                                            </div>
                                        </div>

                                        <div className="line-right clearfix m-b30">
                                            <div className="line-right-box">
                                                <div className="line-content-box ">
                                                    <h4 className="min-title text-primary m-t0 m-b10">
                                                        Internships And Projects
                                                    </h4>
                                                    <ul className="font-16">
                                                        <li>
                                                            <p><b>Full Stack Web Developer | Kentrix | Mumbai | Summer Internship</b><br />
                                                                Throughout my internship, I had the opportunity to work on three exciting dashboard projects, each offering unique functionalities to enhance user experiences and data-driven decision-making:
                                                            </p>  <ol>
                                                                <li> Persona 360 Dashboard: This dashboard was designed to enable users to create Meta campaigns with enhanced niche segmentation. By leveraging over 100+ filters, such as Income, demographic behavior, NCCS, and more, users gained valuable insights into their target audience. My role in this project involved crafting the frontend using React JS and developing the backend with Flask.</li>
                                                                <li> Mahindra Dashboard: The Mahindra Dashboard allows users to input sales data, generating cohort reports and feature importance analyses using machine learning models and geospatial analysis. The incorporation of geolocation data enriched the visual representation of insights. I played a significant role in building this dashboard, utilizing React JS for the frontend, Flask for the backend, and PostgreSQL for database management. Additionally, I implemented an admin interface within the dashboard, empowering administrators to manage users effectively.</li>
                                                                <li>Karma Dashboard/Software: The main objective of the Karma Dashboard/Software was to fetch data for a specific address from Kentrix API. This versatile dashboard enabled users to fetch data for a single address or perform batch operations using CSV files. Upon retrieving the data, users could download the output as a CSV file. To ensure smooth accessibility, I developed both .dmg and .exe setups for Mac and Windows users, respectively. The Karma Dashboard was built using React JS as the frontend framework and Electron JS as the software framework.</li>
                                                            </ol>


                                                        </li>
                                                        <li>
                                                            <p><b>WebGIS Developer | IIT Gandhinagar | Part Time</b><br />
                                                                Developed and hosted the India Drought Monitor that shows India’s real-time drought conditions and forecast. The Geoportal fetches data from Google Drive and updates weekly automatically. The monitor represents the geospatial data on interactive and user-friendly maps. The map uses five classifications: abnormally dry (D0), showing areas that may be going into or are coming out of drought, and four levels of drought: moderate (D1), severe (D2), extreme (D3), and exceptional (D4).
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Web Developer | Water & Climate Lab, IIT Gandhinagar | Internship</b><br />
                                                                Developed the Geoportal of Indian Dams (GeoID) with the database of more than 5000 dams in India, including their catchment characteristics, LULC analysis, and flood risk assessment using Geographic Information System (GIS), Google earth engine, and Remote sensing.
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Web Developer | SynOCE (Civil Engineering Society of IIT Gandhinagar), IIT Gandhinagar</b><br />
                                                                Developed the SynOCE Website.
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Web Developer | Sports IITGN Website</b><br />
                                                                Developed the website for Sports at IITGN along with 2 others. Implemented features such as event calendar, events registration, live scores, and team information to enhance the user experience.
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Web Developer | Food Waste Management Portal, IIT Gandhinagar</b><br />
                                                                Worked in a group of 5 members to design a food waste analysis website. This website shows the daily food waste of the IIT Gandhinagar mess in a matrix form and displays the water, energy, carbon, labour footprint value associated with this waste food.
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="line-num bg-primary-dark"></div>
                                            </div>
                                        </div>


                                        <div className="line-right clearfix m-b30">
                                            <div className="line-right-box">
                                                <div className="line-content-box ">
                                                    <h4 className="min-title text-primary m-t0 m-b10">
                                                        Positions Of Responsibilities
                                                    </h4>
                                                    <ul className="font-16">
                                                        <li>
                                                            <p><b> Gym Secretary</b><br />
                                                                Sports Council, IIT Gandhinagar | May 2023 - Present
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>General Member</b><br />
                                                                Sports Council, IIT Gandhinagar | Mar 2021 - Mar 2022
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Member Of Core Management Team Of Mean Mechanics</b><br />
                                                                Robotics Club, IIT Gandhinagar | Feb. 2021 - July 2022
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Council Member Of MAPRC</b><br />
                                                                Media and Public Relations Cell, IIT Gandhinagar | Oct. 2021 - July 2022
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Marketing Executive</b><br />
                                                                Amalthea, IIT Gandhinagar | Nov. 2020 - Apr 20212
                                                            </p>
                                                        </li>

                                                    </ul>
                                                </div>
                                                <div className="line-num bg-primary-dark"></div>
                                            </div>
                                        </div>

                                        <div className="line-right clearfix m-b30">
                                            <div className="line-right-box">
                                                <div className="line-content-box ">
                                                    <h4 className="min-title text-primary m-t0 m-b10">
                                                        Skills
                                                    </h4>
                                                    <ul className="font-16">
                                                        <li>
                                                            <p><b>Programming Languages</b><br />
                                                                Python, JavaScript, C
                                                            </p>
                                                        </li>

                                                        <li>
                                                            <p><b>Front-End Development</b><br />
                                                                ReactJS, NextJS
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Back-End Development</b><br />
                                                                Flask, NodeJS, RESTful API
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Databases</b><br />
                                                                MongoDB, Firebase, PostgreSQL
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Libraries</b><br />
                                                                jQuery, Leaflet,ArcGIS API for JavaScript, PlotlyJS, Openlayer
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Other Techs</b><br />
                                                                HTML, CSS, Bootstrap, WordPress, Wix, MERN Stack Enthusiast
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Softwares</b><br />
                                                                QGIS, Google earth engine, MATLAB, Adobe Premier pro, Adobe after effects, Filmora, Figma, Advanced Excel
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Version Control System</b><br />
                                                                Git and GitHub
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Hosting</b><br />
                                                                GitHub, Vercel, Heroku, GoDaddy
                                                            </p>
                                                        </li>

                                                    </ul>
                                                </div>
                                                <div className="line-num bg-primary-dark"></div>
                                            </div>
                                        </div>

                                        <div className="line-right clearfix m-b30">
                                            <div className="line-right-box">
                                                <div className="line-content-box ">
                                                    <h4 className="min-title text-primary m-t0 m-b10">
                                                        Certifications
                                                    </h4>
                                                    <ul className="font-16">
                                                        <li>
                                                            <p><b>The Complete 2022 Web Development Bootcamp</b><br />
                                                                Udemy
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Responsive Website Development And Design Specialization</b><br />
                                                                Coursera
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Spatial Data Science: The New Frontier In Analytics</b><br />
                                                                ESRI
                                                            </p>
                                                        </li>

                                                    </ul>
                                                </div>
                                                <div className="line-num bg-primary-dark"></div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumePage;

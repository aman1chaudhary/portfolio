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
                                                                Senior Undergraduate | 2020 - 2024 <br />
                                                                Discipline of Civil Engineering with Minors in CSE
                                                            </p>
                                                        </li>

                                                        <li>
                                                            <p><b> Boston Public School, Agra</b><br />
                                                                2019 — 2020<br />
                                                                Class XII | CBSE Board | 92.4%
                                                            </p>
                                                        </li>

                                                        <li>
                                                            <p><b>D.E.I. R.E.I. Intermediate College, Agra</b><br />
                                                                2017— 2018<br />
                                                                Class X | 9.89/10
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
                                                        Experience
                                                    </h4>
                                                    <ul className="font-16">

                                                        <li>
                                                            <p><b>WebGIS Developer | India Flood Atlas | Water & Climate Lab, IIT Gandhinagar</b><br />
                                                                <ul>
                                                                    <li>
                                                                        Developed interactive India Flood Atlas Dashboard. The dashboard is based on the gridded simulations of flood
                                                                        dynamics. The atlas provides a glimpse of past annual maximum flooded area during 1901-2020
                                                                    </li>

                                                                </ul>

                                                            </p>
                                                        </li>


                                                        <li>
                                                            <p><b>WebGIS Developer | Drought Atlas of India | Water & Climate Lab, IIT Gandhinagar</b><br />
                                                                <ul>
                                                                    <li>
                                                                        Developed interactive drought atlas dashboard of India. This dashboard is based on the high-resolution Standardised Precipitation Evapotranspiration Index (SPEI). The atlas provide glimpse of past droughts in summer monsoon, winter monsoon, calender year, and water year during 1901-2020.
                                                                    </li>
                                                                    <li>
                                                                        The dashboard provides comprehensive information on drought occurrence, impacts, and risks in India.
                                                                    </li>
                                                                </ul>

                                                            </p>
                                                        </li>

                                                        <li>
                                                            <p><b>WebGIS Developer | India Drought Monitor | Water & Climate Lab, IIT Gandhinagar</b><br />
                                                                <ul>
                                                                    <li>
                                                                        Developed India Drought Monitor, a real-time drought monitoring and forecasting web application that provides valuable insights into drought conditions in India and updates on a weekly basis.
                                                                    </li>

                                                                </ul>

                                                            </p>
                                                        </li>

                                                        <li>
                                                            <p><b>WebGIS Developer | Geoportal of Indian Dams | Water & Climate Lab, IIT Gandhinagar</b><br />
                                                                <ul>

                                                                    <li>
                                                                        Developed the Geoportal of Indian Dams (GeoID) with the database of more than 5400 dams across India.

                                                                    </li>
                                                                    <li>
                                                                        Implemented features such as catchment characteristics, LULC analysis, and flood risk assessment, to provide
                                                                        valuable insights and data of Indian dams.
                                                                    </li>
                                                                </ul>

                                                            </p>
                                                        </li>

                                                        <li>
                                                            <p><b>Full Stack WebGIS Developer | Kentrix, Mumbai</b><br />
                                                                <ul>

                                                                    <li>
                                                                        Developed a sophisticated WebGIS dashboard catering to Mahindra & Mahindra Limited. This platform enables users to input sales data, including latitude, longitude, and variant parameters. Users can select models such as Random Forest Classifier and XGB Classifier and specify the variant for model execution.

                                                                    </li>
                                                                    <li>
                                                                        Through extensive Geospatial Analysis, the dashboard generates cohort reports and conducts feature importance analyses. The integration of geolocation data enhances the visual representation of insights, providing a compre- hensive overview of sales patterns.
                                                                    </li>
                                                                    <li>
                                                                        An admin interface has been implemented within the dashboard to streamline user management. This feature empowers administrators to oversee and manage user interactions efficiently.
                                                                    </li>

                                                                </ul>

                                                            </p>
                                                        </li>



                                                        <li>
                                                            <p><b>WebGIS Developer | AgroCast Analytics, Gandhinagar</b><br />
                                                                <ul>
                                                                    <li>
                                                                        Developed a GIS dashboard featuring an admin interface for data management. The admin can upload customized
                                                                        geospatial data tailored to user specifications, including Water Level, Water Depth, Contours, Site Boundaries,
                                                                        and Drone Images like Ortho, DSM, DTM, etc.

                                                                    </li>
                                                                    <li>
                                                                        On the user side, the interactive dashboard allows visualization of this dataset on dynamic maps. Users gain
                                                                        valuable insights into their land, facilitating informed decision-making in various sectors.
                                                                    </li>
                                                                </ul>
                                                            </p>
                                                        </li>



                                                    </ul>
                                                </div>
                                                <div className="line-num bg-primary-dark"></div>
                                            </div>
                                        </div>


                                        {/* <div className="line-right clearfix m-b30">
                                            <div className="line-right-box">
                                                <div className="line-content-box ">
                                                    <h4 className="min-title text-primary m-t0 m-b10">
                                                        Projects
                                                    </h4>
                                                    <ul className="font-16">


                                                        <li>
                                                            <p><b>Web Developer, Water & Climate Lab, IIT Gandhinagar</b><br />
                                                                Developed the official website of Water & Climate lab, Indian Institute of Technology Gandhinagar using technologies such as HTML, CSS, and React JS. The website features several tools, including a research database, current people and alumni database, and publication search function. The website played a crucial role in promoting the lab&apos;s research and increasing its visibility.
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
                                        </div> */}


                                        {/* <div className="line-right clearfix m-b30">
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
                                        </div> */}

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
                                                                jQuery, Leaflet JS, Mapbox, ArcGIS API for JavaScript, PlotlyJS, Openlayer
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Other Techs</b><br />
                                                                HTML, CSS, Bootstrap, WordPress, Wix, MERN Stack Enthusiast
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Softwares</b><br />
                                                                QGIS, Google earth engine, MATLAB, Filmora, Figma, Advanced Excel
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Version Control System</b><br />
                                                                Git, GitHub, GitLab
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
                                                            <p><b>Responsive Website Development and Design Specialization</b><br />
                                                            Coursera
                                                            </p>
                                                        </li>

                                                        <li>
                                                            <p><b>The Complete 2022 Web Development Bootcamp</b><br />
                                                                Udemy
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p><b>Going Places with Spatial Analysis</b><br />
                                                            ESRI
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

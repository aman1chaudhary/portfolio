import geoid from '../public/images/projects/geoid.jpg';
import hallabol from '../public/images/projects/hallabol.jpg';
import india_drought_monitor from '../public/images/projects/india_drought_monitor.jpg';
import wcl_iitgn from '../public/images/projects/wcl_iitgn.jpg';
import lulc_analysis from '../public/images/projects/lulc_analysis.jpg';
import kentrix_persona from '../public/images/projects/kentrix_persona.jpg';
import Combat_Sports_Analytics_1 from '../public/images/projects/Combat_Sports_Analytics_1.jpg';

export const RecentProjectDetails =[
    {
        ProjectName:"Combat Sports Analytics Dashboard",
        TagLine:"A dashboard that enables users to upload sports video footage, select specific segments of interest, and generate 3D interactive animations of the selected video segment.",
        Description:"A dashboard that enables users to upload sports video footage, select specific segments of interest, and generate 3D interactive animations of the selected video segment. MotionBERT and AlphaPose ML models were used to estimate the 3D animation from 2D video. These 3D animations provide valuable insights to improve athletes performance, refine strategies, and enhance training routines.",
        Tags:['Web Development', 'Full Stack Web Development',"React JS", "Flask"],
        Image:Combat_Sports_Analytics_1,
        Link:"https://ringmaster-analytics.onrender.com/",
        Technology:['React JS', 'Flask',]

    },
    {
        ProjectName:"Kentrix Dashboard",
        TagLine:"Full Stack Web Development",
        Description:"Full Stack Web Development",
        Tags:['Web Development', 'Full Stack Web Development',],
        Image:kentrix_persona,
        Link:"",
        Technology:['React JS', 'Flask',]

    },
    {
        ProjectName:"India Drought Monitor",
        TagLine:"A real-time drought monitoring and forecasting web application",
        Description:"A real-time drought monitoring and forecasting web application that provides valuable insights into drought conditions in India and updates on a weekly basis.",
        Tags:['Web Development', 'WebGIS Development',],
        Image:india_drought_monitor,
        Link:"https://indiadroughtmonitor.in/",
        Technology:['React JS', 'Leaflet JS',]

    },
    {
        ProjectName:"Geoportal of India Dams",
        TagLine:"Portal",
        Description:"A WebGIS application that contains database of over 5400 dams in India. ",
        Tags:['Web Development', 'WebGIS Development',],
        Image:geoid,
        Link:"https://geoportalofindiandams.github.io/GeoID/",
        Technology:['React JS', 'Leaflet JS',]

    },
    {
        ProjectName:"Hallabol'23 IITGN",
        TagLine:"The intra-institute annual sports festival of IITGN.",
        Description:"",
        Tags:['WebGIS Development', 'Web Development',],
        Image:hallabol,
        Link:"https://students.iitgn.ac.in/hallabol-23/",
        Technology:["React JS"]

    },
    // {
    //     ProjectName:"WCL IITGN",
    //     TagLine:"Water & Climate Lab, IIT Gandhinagar.",
    //     Description:"Water & Climate Lab, IIT Gandhinagar.",
    //     Tags:['WebGIS Development', 'Web Development',],
    //     Image:wcl_iitgn,
    //     Link:"https://vmishra.people.iitgn.ac.in/water&climate/",
    //     Technology:["React JS"]

    // },
    {
        ProjectName:"LULC Analysis Using Google Earth Engine",
        TagLine:"The percent fraction cover for various LULC classes and its dynamic nature from 2015-2019.",
        Description:"The percent fraction cover for various LULC classes and its dynamic nature from 2015-2019.",
        Tags:['Web Development'],
        Image:lulc_analysis,
        Link:"https://amanchaudhary.users.earthengine.app/view/geoid--lulc-analysis#lat=23.7;lon=78.5;zoom=5;",
        Technology:["Google Earth Engine"]

    },



] 



import geoid from '../public/images/projects/geoid.jpg';
import hallabol from '../public/images/projects/hallabol.jpg';
import india_drought_monitor from '../public/images/projects/india_drought_monitor.jpg';
import wcl_iitgn from '../public/images/projects/wcl_iitgn.jpg';
import sports_iitgn from '../public/images/projects/sports_iitgn.jpg';
import google_clone from '../public/images/projects/google_clone.jpg';
import lulc_analysis from '../public/images/projects/lulc_analysis.jpg';
import synoce from '../public/images/projects/synoce.jpg';
import food_waste_management from '../public/images/projects/food_waste_management.jpg';
import kentrix_persona from '../public/images/projects/kentrix_persona.jpg';
import kentrix_persona2 from '../public/images/projects/kentrix_persona2.jpg';
import kentrix_mahindra from '../public/images/projects/kentrix_mahindra.jpg';
import kentrix_mahindra2 from '../public/images/projects/kentrix_mahindra2.jpg';
import kentrix_karma from '../public/images/projects/kentrix_karma.jpg';
import reefs_lab from '../public/images/projects/reefs-lab.jpg';
import pdc_iitgn from '../public/images/projects/pdc-iitgn.jpg';


export const ProjectsDetailsData =[
    {
        ProjectName:"Kentrix Dashboard",
        TagLine:"Dashboard to create Meta campaigns with enhanced niche segmentation",
        Description:"This dashboard was designed to enable users to create Meta campaigns with enhanced niche segmentation. By leveraging over 100+ filters, such as Income, demographic behavior, NCCS, and more, users gained valuable insights into their target audience. My role in this project involved crafting the frontend using React JS and developing the backend with Flask.",
        Tags:['Web Development', 'Full Stack Web Development',"React JS", "Flask"],
        Image:kentrix_persona,
        Image2:kentrix_persona2,
        Link:"",
        Technology:['React JS', 'Flask',]

    },
    {
        ProjectName:"Kentrix Mahindra",
        TagLine:"A dashboard for generating cohort reports and feature importance analyses of sales data using machine learning models and geospatial analysis.",
        Description:"The Mahindra Dashboard allows users to input sales data, generating cohort reports and feature importance analyses using machine learning models and geospatial analysis. The incorporation of geolocation data enriched the visual representation of insights. I played a significant role in building this dashboard, utilizing React JS for the frontend, Flask for the backend, and PostgreSQL for database management. Additionally, I implemented an admin interface within the dashboard, empowering administrators to manage users effectively.",
        Tags:['Web Development','WebGIS Development', 'Full Stack Web Development',"React JS", "Flask"],
        Image:kentrix_mahindra,
        Image2:kentrix_mahindra2,
        Link:"",
        Technology:['React JS', 'Flask','Machine Learning']

    },
    {
        ProjectName:"Kentrix Karma",
        TagLine:"A software to extract Batch API Data",
        Description:"The main objective of the Karma Dashboard/Software was to fetch data for a specific address from Kentrix API. This versatile dashboard enabled users to fetch data for a single address or perform batch operations using CSV files. Upon retrieving the data, users could download the output as a CSV file. To ensure smooth accessibility, I developed both .dmg and .exe setups for Mac and Windows users, respectively. The Karma Dashboard was built using React JS as the frontend framework and Electron JS as the software framework.",
        Tags:['Web Development', 'Software Development',"React JS", "Flask"],
        Image:kentrix_karma,
        Image2:kentrix_karma,
        Link:"",
        Technology:['React JS', 'Flask',]

    },
    {
        ProjectName:"India Drought Monitor",
        TagLine:"A real-time drought monitoring and forecasting web application",
        Description:"A real-time drought monitoring and forecasting web application that provides valuable insights into drought conditions in India and updates on a weekly basis.",
        Tags:['Web Development', 'WebGIS Development',"React JS"],
        Image:india_drought_monitor,
        Image2:india_drought_monitor,
        Link:"https://indiadroughtmonitor.in/",
        Technology:['React JS', 'Leaflet JS',]

    },
    {
        ProjectName:"Geoportal of India Dams",
        TagLine:"Interactive Database of over 5400 dams across India",
        Description:"A WebGIS application that contains database of over 5400 dams across India. Implemented features such as catchment characteristics, LULC analysis, and flood risk assessment, to provide valuable insights and data of Indian dams to the users.",
        Tags:['Web Development', 'WebGIS Development',"React JS",],
        Image:geoid,
        Image2:geoid,
        Link:"https://geoportalofindiandams.github.io/GeoID/",
        Technology:['React JS', 'Leaflet JS',]

    },
    {
        ProjectName:"Hallabol",
        TagLine:"The intra-institute annual sports festival of IITGN.",
        Description:"",
        Tags:['Web Development',"React JS",],
        Image:hallabol,
        Image2:hallabol,
        Link:"https://aman1chaudhary.github.io/hallabol-23/",
        Technology:["React JS"]

    },
    {
        ProjectName:"WCL IITGN",
        TagLine:"Water & Climate Lab, IIT Gandhinagar.",
        Description:"Official website of Water & Climate Lab, IIT Gandhinagar. The website features several tools, including a research database, current people and alumni database, and publication search function. The website played a crucial role in promoting the lab's research and increasing its visibility.",
        Tags:['Web Development',"React JS",],
        Image:wcl_iitgn,
        Image2:wcl_iitgn,
        Link:"https://vmishra.people.iitgn.ac.in/water&climate/",
        Technology:["React JS"]

    },
    {
        ProjectName:"PDC, IIT Gandhinagar",
        TagLine:"Professional Development Council, IIT Gandhinagar",
        Description:"IIT Gandhinagar",
        Tags:['Web Development', 'Next JS'],
        Image:pdc_iitgn,
        Image2:pdc_iitgn,
        Link:"https://pdc-nextjs.vercel.app/",
        Technology:["React JS"]

    },
    {
        ProjectName:"LULC Analysis Using Google Earth Engine",
        TagLine:"The percent fraction cover for various LULC classes and its dynamic nature from 2015-2019.",
        Description:"The percent fraction cover for various LULC classes and its dynamic nature from 2015-2019.",
        Tags:['Web Development','WebGIS Development', ],
        Image:lulc_analysis,
        Image2:lulc_analysis,
        Link:"https://amanchaudhary.users.earthengine.app/view/geoid--lulc-analysis#lat=23.7;lon=78.5;zoom=5;",
        Technology:["Google Earth Engine"]

    },
    {
        ProjectName:"REEFS Lab",
        TagLine:"Redefining Energy For Sustainability Lab, IIT Gandhinagar",
        Description:"REEFS Lab, IIT Gandhinagar",
        Tags:['Web Development', "React JS",],
        Image:reefs_lab,
        Image2:reefs_lab,
        Link:"https://reefs-lab.github.io/lab/",
        Technology:["React JS"]

    },

    {
        ProjectName:"IITGN Sports Website",
        TagLine:"IITGN Sports Website",
        Description:"IITGN Sports Website",
        Tags:['Web Development', ],
        Image:sports_iitgn,
        Image2:sports_iitgn,
        Link:"https://jmanjaly2.wixsite.com/mysite",
        Technology:["React JS"]

    },
    {
        ProjectName:"SynOCE",
        TagLine:"Official website of Civil Engineering Society, IIT Gandhinagar",
        Description:"Official website of Civil Engineering Society, IIT Gandhinagar",
        Tags:['Web Development', "React JS",],
        Image:synoce,
        Image2:synoce,
        Link:"https://aman1chaudhary.github.io/synoce-iitgn/",
        Technology:["React JS"]

    },
    {
        ProjectName:"Google Clone",
        TagLine:"Google Clone",
        Description:"Google Clone",
        Tags:['Web Development', "Next JS"],
        Image:google_clone,
        Image2:google_clone,
        Link:"https://my-google-xi.vercel.app/",
        Technology:["React JS", "Next JS"]

    },
    {
        ProjectName:"Food Waste Management Portal",
        TagLine:"Food Waste Management Portal, IIT Gandhinagar Mess",
        Description:"Footprint matrix to analyse the food wastage in college mess by calculating water, carbon, energy and labour footprint of wasted food.",
        Tags:['Web Development', "HTML", "CSS", "Javascript"],
        Image:food_waste_management,
        Image2:food_waste_management,
        Link:"https://aman1chaudhary.github.io/foodwaste-management/",
        Technology:["HTML","CSS","Java Script"]

    },

] 



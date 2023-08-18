import '../styles/plugins.css';
import '../styles/style.css';
import '../styles/Navbar.css';
import '../styles/templete.css';
import '../styles/skin.css';
import '../styles/plugins/slick/slick.min.css';
import '../styles/plugins/slick/slick-theme.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return(
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  ) 
}

export default MyApp
// import React from 'react';
// import Navbar from '../components/Navbar';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import '../assets/css/Home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="header-container">
//         <Header />
//       </div>
//       <div className="navbar-container">
//         <Navbar />
//       </div>
      
//       <h1 style={{ color: "#f54275" }}><marquee>TurboRecharge welcomes you</marquee></h1>
//       <p style={{ color: '#eff542' }}>On this site you can recharge your mobile online.</p>
//       <img src="https://img.freepik.com/free-vector/hand-painted-watercolor-nature-background_23-2148951399.jpg?size=626&ext=jpg&ga=GA1.1.617973568.1689319237&semt=ais" alt="Your Alt Text" />
//       {/* <p style={{ color: '#eff542' }}>Gone are the days of searching for physical recharge cards or visiting stores to top up.</p>
//       <p style={{ color: '#eff542' }}>Recharge your mobile quickly and securely.</p>
//       <p style={{ color: '#eff542' }}>Prepaid Recharge for all major India's top cellular services is available here.</p>
//       <p style={{ color: '#eff542' }}>With mobile top-up services, you can effortlessly recharge your phone anytime, anywhere.</p> */}
      

//       <div className="footer-container">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/Home.css';

const Home = () => {
  const images = [
    "https://as1.ftcdn.net/v2/jpg/02/77/49/70/1000_F_277497029_JRIHpsrs7Fo72cVaFrjbjUhvCop5m0rw.jpg",
    "https://img.jakpost.net/c/2018/06/21/2018_06_21_47909_1529550217._large.jpg",
    "https://paytmblogcdn.paytm.com/wp-content/uploads/2021/11/MobileRecharge_33_Simplest-Way-For-Online-Mobile-Recharge-In-India-800x500.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the image index and loop back to 0 after the last image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, [images.length]);

  return (
    <div className="home-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="navbar-container">
        <Navbar />
      </div>
      
      <h1 style={{ color: "#f54275" }}><marquee>TurboRecharge welcomes you</marquee></h1>
      <p style={{ color: '#eff542' }}>On this site you can recharge your mobile online.</p>
      
      
      
      <div className="image-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={
              index === currentImageIndex ? 'visible' :
              index === (currentImageIndex + 1) % images.length ? 'next' :
              index === (currentImageIndex - 1 + images.length) % images.length ? 'prev' :
              ''
            }
          />
        ))}
      </div>
      
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

// Home.jsx
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/Home.css';

const Home = () => {
  const fullName = useSelector((state) => state.fullName);

  const images = [
    "https://as1.ftcdn.net/v2/jpg/02/77/49/70/1000_F_277497029_JRIHpsrs7Fo72cVaFrjbjUhvCop5m0rw.jpg",
    "https://img.jakpost.net/c/2018/06/21/2018_06_21_47909_1529550217._large.jpg",
    "https://paytmblogcdn.paytm.com/wp-content/uploads/2021/11/MobileRecharge_33_Simplest-Way-For-Online-Mobile-Recharge-In-India-800x500.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="home-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="navbar-container">
        <Navbar />
      </div>

      <h1 style={{ color: '#f54275' }}>
        <marquee>{fullName ? `TurboRecharge welcomes you ${fullName}` : 'TurboRecharge welcomes you'}</marquee>
      </h1>
      <p style={{ color: '#eff542' }}>On this site, you can recharge your mobile online.</p>

      <div className="image-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={
              index === currentImageIndex
                ? 'visible'
                : index === (currentImageIndex + 1) % images.length
                ? 'next'
                : index === (currentImageIndex - 1 + images.length) % images.length
                ? 'prev'
                : ''
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

import React, { useState } from 'react';
import '../assets/css/View_Offers.css'
import Navbar from '../components/Navbar';

const View_Offers = () => {
  const [selectedOperator, setSelectedOperator] = useState('all');
  const [offers, setOffers] = useState([]);

  const operatorOffers = {
    airtel: [
      { title: 'Airtel Offer 1', description: '20% off on all plans!', imageUrl: 'https://img.freepik.com/free-vector/special-offer-creative-sale-banner-design_1017-16284.jpg?1' },
      { title: 'Airtel Offer 2', description: 'Bonus data on every recharge!', imageUrl: 'https://www.airtel.com.ng/assets/images/ng/wadata.png' },
      { title: 'Airtel Offer 3', description: 'Get free subscription to Airtel Xstream.', imageUrl: 'https://assetsblog.bsbportal.com/wp-content/uploads/2023/05/Xstream-App.jpg' },
      { title: 'Airtel Offer 4', description: 'Refer a friend and earn cashback!', imageUrl: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618571198265/mobile-recharge-offers.jpg' },
      { title: 'Airtel Offer 5', description: 'Exclusive discounts for postpaid users.', imageUrl: 'https://assets.mspimages.in/gear/wp-content/uploads/2023/01/Best-Airtel-postpaid-plans.png' },
      { title: 'Airtel Offer 6', description: 'Double data on select recharges!', imageUrl: 'https://i.ytimg.com/vi/2xqkzQeUFhg/maxresdefault.jpg' },
    ],
    vodafone: [
      { title: 'Vodafone Offer 1', description: 'Enjoy unlimited weekend data!', imageUrl: 'https://www.myvi.in/content/dam/vodafoneideadigital/anonpage/banner2.png' },
      { title: 'Vodafone Offer 2', description: 'Upgrade to REDX plan for extra benefits.', imageUrl: 'https://i.gadgets360cdn.com/large/vodafoneredx_main_1573634322928.jpg' },
      { title: 'Vodafone Offer 3', description: 'Free Amazon Prime subscription on select recharges.', imageUrl: 'https://images.gizbot.com/te/img/2023/12/vi-launches-new-rs-3199-annual-plan-with-amazon-prime2-1-1703245474.jpg' },
      { title: 'Vodafone Offer 4', description: 'Get cashback on recharges above ₹399.', imageUrl: 'https://www.myvi.in/content/dam/vodafoneideadigital/StaticPages/consumerimages/blog/New_Blog_Pages_5th_April/CashbackOffer/tab-recharge-cashback-offer.png' },
      { title: 'Vodafone Offer 5', description: 'Exciting rewards for prepaid users.', imageUrl: 'https://www.myvi.in/content/dam/vodafoneideadigital/StaticPages/consumerimages/misc/Mobile_364x305_extradatafestive.webp' },
      { title: 'Vodafone Offer 6', description: 'Special discounts for family plans!', imageUrl: 'https://i.gadgets360cdn.com/large/vi_postpaid_plans_1628578914621.jpg' },
    ],
    jio: [
      { title: 'Jio Offer 1', description: 'Free Disney+ Hotstar subscription with every recharge!', imageUrl: 'https://etimg.etb2bimg.com/thumb/msid-76242022,width-1200,height-900,resizemode-4/.jpg' },
      { title: 'Jio Offer 2', description: 'Double data on all first-time recharges.', imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201806/Double_Dhamaka.png?size=1200:675' },
      { title: 'Jio Offer 3', description: '50% off on JioFiber installation charges.', imageUrl: 'https://telecomtalk.info/wp-content/uploads/2021/03/jiofiber-installation-charges-1024x683.png' },
      { title: 'Jio Offer 4', description: 'Exclusive benefits for JioPostpaid Plus users.', imageUrl: 'https://images.fonearena.com/blog/wp-content/uploads/2020/09/Jio-PostPaid-Plus.jpg' },
      { title: 'Jio Offer 5', description: 'Refer and earn JioMoney cashback!', imageUrl: 'https://www.jiomoney.com/images/offers/adigas-cashback-offer.jpg' },
      { title: 'Jio Offer 6', description: 'Extra data for JioMart users.', imageUrl: 'https://couponswala.com/blog/wp-content/uploads/2021/06/jiomart-wallet-offers.jpg' },
    ],
  };

  const filteredOffers = selectedOperator === 'all' ? offers : operatorOffers[selectedOperator];

  const handleOperatorChange = (e) => {
    setSelectedOperator(e.target.value);
    setOffers(operatorOffers[e.target.value] || []); // Update offers based on the selected operator
  };

  const firstRowOffers = filteredOffers.slice(0, 3);
  const secondRowOffers = filteredOffers.slice(3, 6);

  return (
    <div className="offers-container">
      <Navbar/>
      <h1 style={{ color: 'white' }}>Mobile Recharge Offers</h1>
      <div>
        <label htmlFor="operatorSelect">Select Operator:</label>
        <select style={{width:'210px'}} id="operatorSelect" value={selectedOperator} onChange={handleOperatorChange}>
          <option value="all">All Operators</option>
          <option value="jio">Jio</option>
          <option value="vodafone">Vodafone</option>
          <option value="airtel">Airtel</option>
          {/* Add more operators as needed */}
        </select>
      </div>
      <div className="row">
  {firstRowOffers.map((offer, index) => (
    <div key={index} className="offer-item">
      <h2>{offer.title}</h2>
      <p style={{ color:'white' }}>{offer.description}</p>
      <img style={{height:'110px', width:'210px'}} src={offer.imageUrl} alt={offer.title} />
    </div>
  ))}
</div>

      <div className="row">
        {secondRowOffers.map((offer, index) => (
          <div key={index} className="offer-item">
            <h2>{offer.title}</h2>
            <p style={{ color:'white' }}>{offer.description}</p>
            <img style={{height:'110px', width:'210px'}} src={offer.imageUrl} alt={offer.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default View_Offers;

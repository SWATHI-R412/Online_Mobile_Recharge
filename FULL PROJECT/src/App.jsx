import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";
import Login_Selection from "./pages/Login_Selection";
import Admin_Login from "./pages/Admin_Login";
import User_Login from "./pages/User_Login";
import User_Registration from "./pages/User_Registration";
import Recharge_Plans from "./pages/Recharge_Plans";
import View_Plans from "./pages/View_Plans"
import Payment from "./pages/Payment";
import User_Profile from "./pages/User_Profile";
import User_Feedback from "./pages/User_Feedback";
import Add_On from "./pages/Add_On";
import View_Offers from "./pages/View_Offers";
import Transaction_History from "./pages/Transaction_History";
import About from "./pages/About";
import PostpaidPlans from "./pages/PostpaidPlans";
import ViewOperator from "./pages/View_Operator";
import AddOperator from "./pages/AddOperator";
import PrepaidPlans from "./pages/PrepaidPlans";
import RechargeHistory from "./pages/RechargeHistory";
import AdminAddOn from "./pages/AdminAddOn";
import SiteSettings from "./pages/SiteSettings";
function App() {
  const [operators, setOperators] = useState([
    { name: 'Airtel', description: 'Airtel is a telecommunications company with a global presence.', imageUrl: 'https://wallpapercave.com/wp/wp2408165.png' },
    { name: 'Jio', description: 'Jio is a leading Indian telecommunications company providing high-speed internet services.', imageUrl: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-02/28/full/1677605933-7711.jpg' },
    { name: 'Vodafone', description: 'Vodafone is a multinational telecommunications company operating in various countries around the world.', imageUrl: 'https://wallpapercave.com/wp/wp2667037.jpg' },
  ]);

  const handleAddOperator = (newOperator) => {
    setOperators([...operators, newOperator]);
  };

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Login_Selection/>}/>
        <Route path="/Admin_Login" element={<Admin_Login/>}/>
        <Route path="/User_Login" element={<User_Login/>}/>
        <Route path="/User_Registration" element={<User_Registration/>}/>
        <Route path="/User_Profile" element={<User_Profile/>}/>
        <Route path="/User_Feedback" element={<User_Feedback/>}/>
        <Route path="/Add_On" element={<Add_On/>}/>
        <Route path="/View_Offers" element={<View_Offers/>}/>
        <Route path="/Transaction_History" element={<Transaction_History/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Recharge_Plans" exact element={<Recharge_Plans/>}/>
        <Route path="/plans/:operator" element={<View_Plans/>}/>
        <Route path="/Payment" element={<Payment/>}/>
        
        <Route path="/Home" element={<Home/>}/>
        <Route path="/AdminHome" element={<AdminHome/>}/>
        
        <Route
          path="/ViewOperator"
          element={<ViewOperator operators={operators} />}
        />
        <Route
          path="/AddOperator"
          element={<AddOperator onAddOperator={handleAddOperator} />}
        />
        <Route path="/PostpaidPlans" element={<PostpaidPlans/>}/>
        <Route path="/PrepaidPlans" element={<PrepaidPlans/>}/>
        <Route path="/RechargeHistory" element={<RechargeHistory/>}/>
        <Route path="/AdminAddOn" element={<AdminAddOn/>}/>
        <Route path="/SiteSettings" element={<SiteSettings/>}/>
        
        
      </Routes>
    </Router>
    
  )
}

export default App

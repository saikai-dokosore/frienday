import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from "./Calendar";
import Footer from "./Footer";

type Users = {
  name: string;
};

const Home: React.FC = () => {
  const { name } = useParams<Users>();

  // 参照元を確認
  if (document.referrer === "https://l.instagram.com/") {
    console.log("from Instagram");
  } else {
    console.log("Not from Instagram : Referrer is " + document.referrer);
  }

  return (
    <div>
      <div className="header">
        {/* <div className="headerImageBox">
          <img src="/images/profile01.png" alt="profile" />
        </div> */}
        <div className="headerUserBox">
          <h1>{name}</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

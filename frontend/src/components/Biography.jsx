import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="About our clinic" />
      </div>
      <div className="banner">
        <p>About Us</p>
        <h3>Who We Are</h3>
        <p>
         At Patna Homeopathic Clinic, new patients are always welcome. The clinic prides itself on providing personalized care to each individual who walks through its doors. From the moment you step into our clinic, you will be greeted with warmth and respect, and our team will ensure that your journey towards better health begins on the right note.
        </p>
        <p>
         Our clinic is staffed with experienced and compassionate homeopathic practitioners who are dedicated to helping patients achieve optimal health and wellness. Whether you are seeking treatment for allergies, skin conditions, digestive issues, or other health concerns, our team will work with you to develop a personalized treatment plan tailored to your specific needs.
        </p>
        <p><strong>Healing naturally, living fully.</strong></p>
      </div>
    </div>
  );
};

export default Biography;

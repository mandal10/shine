import React from "react";

const MapPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  ">
      

      <div className="w-full h-screen rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26265.452812586915!2d78.82325236226187!3d28.3240708682707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ace1be1994a5f%3A0x13bdc95083183afe!2sNasrol%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1754975992411!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapPage;

import React from "react";
import "./AboutUs.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about font-poppins">
        <h1>About Us</h1>

        <div className="about-left">
          <img
            src="https://images.unsplash.com/photo-1611317545869-9fc2d6b36be9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="parkingimg"
            height={450}
            width={350}
          />
          <img
            src="https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
            alt=""
            width={350}
            height={450}
          />
          <img
            src="https://images.unsplash.com/photo-1617392847656-10a3744239cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={370}
            height={450}
          />
          <img
            src="https://images.unsplash.com/photo-1567818668259-e66acac21610?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={350}
            height={450}
          />
        </div>
        <div className="about-h">
          <h2> Why Choose Us? </h2>

          <div className="about-right">
            <p>
              Comfortable parking experience. Brokerage free. Genuine Owners.
              Ensured security of your vehicle. Available for residents and
              visitors. Surveillance parking. Simple steps to list property.
              Earn money on the go. Available on app and website. ParkSpot is
              part of this new initiative and incorporates various features
              aimed at improving the parking experience for residents and
              visitors. These will include removing the need for entry barriers
              at car park entrances and exits for a seamless flow of traffic, as
              vehicle plates will be registered via cameras.
            </p>
            <p>
              We are committed to providing convenient and secure parking
              solutions for our customers. Our mission is to make parking
              hassle-free and accessible, whether you're visiting for work or
              leisure. Feel free to explore our website to learn more about our
              services and offerings. If you have any questions or feedback,
              please don't hesitate to contact us. Thank you for choosing us for
              your parking needs
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

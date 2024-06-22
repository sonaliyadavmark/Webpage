import React from "react";
import AfiyaIcon from "../../img/Afiya.jpg";
import facebbok from "../../img/facebook.svg";
import instagram from "../../img/instagram.svg";
import twitter from "../../img/twitter.svg";
import youtub from "../../img/youtube.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-box">
      <div className="footer-text-container">
        <h4>Stay healthy and strong to enjoy life</h4>

        <h2>We have team of healthcare experts</h2>

        <div>
          <button className="btn">Get Touch</button>
          <p>+91 898 777 9999</p>
        </div>
      </div>

      <div className="container grid grid--footer">
        {/* --- Nav-1 Column --- */}
        <nav className="footer-nav">
          <p className="footer--heading">Importtant Links</p>
          <ul className="footer-nav--nav-links">
            <li>
              <a className="footer--link" href="#">
                &mdash; Home
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; About
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; FAQs
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; Blog
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; Contact US
              </a>
            </li>
          </ul>
        </nav>

        {/* <!-- Nav-2 Column --> */}
        <nav className="footer-nav">
          <p className="footer--heading">Top Hospitals</p>
          <ul className="footer-nav--nav-links">
            <li>
              <a className="footer--link" href="#">
                &mdash; Apollo Hospital Delhi
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; Medanta Hospital Gurgaon
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; Max Hospital Delhi
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; Jaslok Hospital Mumbai
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; Artemis Hospital Gurgaon
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; Fortis Hospital Gurgaon
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; View All
              </a>
            </li>
          </ul>
        </nav>

        {/* <!-- Nav-3 Column --> */}
        <nav className="footer-nav">
          <p class="footer--heading">Speciality Treatments</p>
          <ul className="footer-nav--nav-links">
            <li>
              <a className="footer--link" href="#">
                &mdash; Knee Replacement Surgeon
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; Urologist
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; Spine Surgeon
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; ENT Surgeon
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; Orthopedic
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; Cardiologist
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; View All
              </a>
            </li>
          </ul>
        </nav>

        {/* <!-- Nav-4 Column --> */}
        <nav className="footer-nav">
          <p className="footer--heading">Medical Tourism Destinations</p>
          <ul class="footer-nav--nav-links">
            <li>
              <a className="footer--link" href="#">
                &mdash; Medical Tourism in india
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; Medical Tourism in Sri Lanks
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; Medical Tourism in UAE
              </a>
            </li>
            <li>
              <a className="footer--link" href="#">
                &mdash; View All
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container grid grid--footer--bottom">
        {/* <!-- Logo Column --> */}
        <div class="logo-col">
          <a href="#" className="footer-logo">
            <img src={AfiyaIcon} alt="" />
          </a>
        </div>
        {/* <!-- Nav-4 Column --> */}
        <nav className="footer-nav">
          <h4 className="footer--heading">About Afiya Mediretreats</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </nav>

        <div>
          <h4>Follow Us On</h4>
          <ul className="social-links">
            <li>
              <a href="#" class="footer-link">
                <img src={facebbok} alt="" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                <img src={twitter} alt="" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                <img src={instagram} alt="" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                <img src={youtub} alt="" className="social-icon" />
              </a>
            </li>
          </ul>
          <h4 className="Custome--Service">Customer Service</h4>
          <p>+91 9856555666</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

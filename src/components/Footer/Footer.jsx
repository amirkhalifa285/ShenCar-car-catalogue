import React from "react";
import { FaDiscord, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import styles from "./Footer.module.css"; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Section: ShenCarCar */}
        <div className={styles.footerLeft}>
          <h1 className={styles.footerTitle}>ShenCarCar</h1>
          <p className={styles.footerDescription}>
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Right Section: Columns */}
        <div className={styles.footerColumns}>
          {/* About Section */}
          <div className={styles.footerColumn}>
            <h4>About</h4>
            <ul>
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>

          {/* Community Section */}
          <div className={styles.footerColumn}>
            <h4>Community</h4>
            <ul>
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className={`${styles.footerColumn} ${styles.footerSocials}`}>
            <h4>Socials</h4>
            <ul>
              <li>
                <FaDiscord /> Discord
              </li>
              <li>
                <FaInstagram /> Instagram
              </li>
              <li>
                <FaTwitter /> Twitter
              </li>
              <li>
                <FaFacebook /> Facebook
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className={styles.footerBottom}>
        <p>©2025 ShenCarCar. All rights reserved.</p>
        <div>
          <a href="/privacy-policy">Privacy & Policy</a> |{" "}
          <a href="/terms-and-conditions">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

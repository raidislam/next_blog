import Image from "next/image";
import React from "react";
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image fill src={"/about.png"} alt="about" />
      </div>
    </div>
  );
};

export default AboutPage;

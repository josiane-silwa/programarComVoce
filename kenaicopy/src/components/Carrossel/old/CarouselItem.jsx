import { useEffect } from "react";
import { useState } from "react";
import  styles from "./Carousel.module.css";
//import { countries } from "./Helpers/Data";

const CarouselItem = ({countries}) => {

  return (
    <div className={styles.carouselItem}>
        <img src={countries} alt="" />
    </div>
  );
}

export default CarouselItem
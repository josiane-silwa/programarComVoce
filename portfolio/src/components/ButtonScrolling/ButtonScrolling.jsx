import styles from "./ButtonScrolling.module.css";

import { FaArrowUp } from "react-icons/fa";

export default function ButtonScrolling() {
  return (
    <button className={styles.home_button_top}>
        <a href="#header_section">
          <FaArrowUp fontSize={"20px"}/>
        </a>
      </button>
  )
}
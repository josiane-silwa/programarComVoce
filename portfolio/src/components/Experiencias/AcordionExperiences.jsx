import React, { useState } from "react";
import "./Experiencia.Modules.css";

const CustomAccordion = ({ funcao, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the accordion state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "active" : ""}`}>
      {/* Header section of the accordion */}
      <div className={`accordion-header ${isOpen ? "active" : ""}`} onClick={toggleAccordion}>
        <p>{funcao}</p>

        {/* Icon to represent the accordion state */}
        <span className={`material-symbols-preview ${isOpen ? "active" : ""}`}>
            &gt;
        </span>
      </div>

      {/* Content section of the accordion*/}
      {isOpen && (
        <div className="accordion-content">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};

export default CustomAccordion;
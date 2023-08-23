import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface AccordionProps {
  heading: string;
  description: string;
}

const CustomAccordion = ({ heading, description }: AccordionProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="accordion sectionInnerWidth">
      <div className="accordion-heading" onClick={toggleAccordion}>
        <h2>{heading}</h2>
        <button className="accordion-toggle" onClick={toggleAccordion}>
          {expanded ? <FiMinus size={25} /> : <FiPlus size={25} />}
        </button>
      </div>
      <div>
        {expanded && <p className="accordion-description">{description}</p>}
      </div>
    </div>
  );
};

export default CustomAccordion;

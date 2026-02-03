import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
function Accordion({ items }) {
  const [openIndex, setOpenOndex] = useState(null);

  const handleToggle = (index) => {
    setOpenOndex(openIndex == index ? null : index);
  };

  return !items || items.length === 0 ? (
    "No items available"
  ) : (
    <div className="accordion">
      {items.map((item, index) => {
        return (
          <div key={index} className="accoudion-item">
            <button
              className="accordion-tittle"
              onClick={() => handleToggle(index)}
            >
              {item.tittle}
              {openIndex === index ? (
                <FaChevronUp className="right" />
              ) : (
                <FaChevronDown className="right" />
              )}
            </button>
            {openIndex === index && (
              <div className=".accordion-content">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;

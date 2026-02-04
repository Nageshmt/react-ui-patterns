import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./accordion.css";
function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return !items || items.length === 0 ? (
    "No items available"
  ) : (
    <div className="accordion">
      {items.map((item) => {
        return (
          <div key={item.id} className="accoudion-item">
            <button
              className="accordion-tittle"
              onClick={() => handleToggle(item.id)}
            >
              {item.tittle}
              {openId === item.id ? (
                <FaChevronUp className="right" />
              ) : (
                <FaChevronDown className="right" />
              )}
            </button>
            {openId === item.id && (
              <div className=".accordion-content">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;

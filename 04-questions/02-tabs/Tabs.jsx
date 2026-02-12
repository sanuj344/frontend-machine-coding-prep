import { useState } from "react";
import Tab from "./Tab";

function Tabs({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Tab Headers */}
      <div className="tab-list">
        {items.map((item, index) => (
          <Tab
            key={index}
            label={item.label}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {items[activeIndex].content}
      </div>
    </div>
  );
}

export default Tabs;

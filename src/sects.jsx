import React from "react";

function Sects({ section }) {
  return (
    <button className="brand-menu__card" type="button">
      <div className="brand-menu__thumb" aria-hidden="true">
        <img src={section.img} alt={section.title} />
      </div>
      <div className="brand-menu__title">{section.title}</div>
    </button>
  );
}

export default Sects;
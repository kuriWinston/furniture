import React, { useState } from "react";
import Sects from './sects'
import "./popProduct.css"

export default function ScrollMenu() {
  const [sections] = useState([
    { id: 1, title: "Дитяча", img: "/imgTovar/Detskayakomnata.jpg"},
    { id: 2, title: "Вітальня", img: "/imgTovar/vitalk.jpg" },
    { id: 3, title: "Спальня", img: "/imgTovar/spalna.jpg" },
    { id: 4, title: "Офіс", img: "/imgTovar/offis.jpg"},
    { id: 5, title: "Сад", img: "/imgTovar/garden.jpg"},
    { id: 6, title: "Гардероб", img: "/imgTovar/garderop.jpg"},
    { id: 7, title: "Тераса", img: "/imgTovar/terasa.jpg"},
    { id: 8, title: "Для бізнесу", img: "/imgTovar/dlyabiz.jpg"},
  ]);

  return (
    <section className="brand-menu">
      <div className="brand-menu__header">
        <h2>Популярні категорії</h2>
      </div>

      <div className="brand-menu__grid">
        {sections.map((section) => (
          <Sects key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}

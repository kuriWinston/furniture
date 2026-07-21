import React from "react";

export default function ScrollMenu() {
  const sections = [
    { id: 1, title: "Кухні" },
    { id: 2, title: "Вітальня" },
    { id: 3, title: "Спальня" },
    { id: 4, title: "Офіс" },
    { id: 5, title: "Дитяча" },
    { id: 6, title: "Гардероб" },
    { id: 7, title: "Тераса" },
    { id: 8, title: "Інтер'єр" },
  ];

  return (
    <section className="brand-menu">
      <div className="brand-menu__header">
        <h2>Популярні категорії</h2>
      </div>

      <div className="brand-menu__grid">
        {sections.map((section) => (
          <button key={section.id} className="brand-menu__card" type="button">
            <div className="brand-menu__thumb" aria-hidden="true">
              <span className="brand-menu__placeholder">Фото</span>
            </div>
            <div className="brand-menu__title">{section.title}</div>
          </button>
        ))}
      </div>
    </section>
  );
}

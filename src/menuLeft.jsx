import React from "react";

export default function MenuRight() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>Про компанію</h3>
        <ul>
          <li>Франчайзингові салони</li>
          <li>Пункти видачі</li>
          <li>Відгуки</li>
          <li>Статті</li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Послуги та сервіси</h3>
        <ul>
          <li>Кредит / розстрочка</li>
          <li>Оплата та доставка</li>
          <li>Замір, заніс та збірка</li>
          <li>Гарантія / Повернення</li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Часті питання</h3>
        <ul>
          <li>Рекламційна форма</li>
          <li>Повернення коштів</li>
          <li>Умови покупки</li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Додатково</h3>
        <ul>
          <li>Співпраця</li>
          <li>Оптовим покупцям</li>
          <li>Виробники</li>
          <li>Вакансії</li>
        </ul>
      </div>
    </aside>
  );
}

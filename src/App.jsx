import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Items from "./items";
import MenuLeft from "./menuLeft";
import "./App.css";
import ScrollMenu from "./popularProduct";

function App() {
  const [products] = useState([
    { id: 1, name: 'Стільці', img: "/imgTovar/stylsiry.jpg", category: 'chair', price: 999 },
    { id: 2, name: 'Столи', img: '/imgTovar/stilDef.jpg', category: 'chair', price: 2499 },
    { id: 3, name: 'Дивани', img: '/imgTovar/divan.jpg', category: 'chair', price : 29999},
    { id: 4, name: 'Комоди і тумби', img: '/imgTovar/komod-i-tumba.jpg', price: 7799},
    { id: 5, name: 'Кухні', img: '/imgTovar/kuhni.jpg', price: 24999},
    { id: 6, name: 'Ліжки', img: '/imgTovar/krovat.jpg', price: 13999},
    { id: 7, name: 'Офісні крісла', img: '/imgTovar/kreslo.jpg', price: 3999},
    { id: 8, name: 'Зеркала', img: '/imgTovar/zerkalo.jpg',price: 1999},
    { id: 9, name: 'Пуфи', img: '/imgTovar/puf.jpg', price: 2999},
    { id: 10, name: 'Лампи', img: '/imgTovar/lamp.jpg', price: 999},
    { id: 11, name: 'Шезлонги', img: '/imgTovar/gamak.jpg', price: 3999},
    { id: 12, name: 'Матраси', img: '/imgTovar/matras.jpg', price: 4999},
  ]);

  return (
    <div className="wrapper">
      <Header />
      <div className="layout">
        <MenuLeft />

        <main className="main-content">
          <div className="Card">
            <h2>Знайдіть ідеальні меблі для дому, де кожна деталь створює справжній затишок</h2>
          </div>

          <div className="products">
            {products.map((item) => (
              <Items key={item.id} item={item}  />
            ))}
          </div>
            <ScrollMenu />
          <div className="whyWe">
            <div className="whyWe-content">
              <h2>Чому вибирають саме нас?</h2>
              <div className="facts-grid">
                <div className="fact-card">
                  <strong>500+</strong>
                  <span>вдалих проектів</span>
                </div>
                <div className="fact-card">
                  <strong>98%</strong>
                  <span>задоволених клієнтів</span>
                </div>
                <div className="fact-card">
                  <strong>24/7</strong>
                  <span>підтримка</span>
                </div>
                <div className="fact-card">
                  <strong>15 років</strong>
                  <span>на ринку меблів</span>
                </div>
                <div className="fact-card">
                  <strong>100%</strong>
                  <span>натуральні матеріали</span>
                </div>
                <div className="fact-card">
                  <strong>3 дня</strong>
                  <span>доставка по Україні</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      
      <Footer />
    </div>
  );
}

export default App;




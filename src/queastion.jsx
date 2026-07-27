import React from "react";

function Delivery() {
  const sectionStyle = {
    maxWidth: 1450,
    margin: "40px auto 60px",
    padding: "40px 30px",
    background: "#fff",
    borderRadius: 24,
    boxShadow: "0 18px 60px rgba(0,0,0,0.08)",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 28,
    alignItems: "flex-start",
  };

  const leftStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  };

  const headingStyle = {
    margin: 0,
    fontSize: 40, // increased from 32 (~15%)
    color: "#252525",
  };

  const infoTextStyle = {
    margin: 0,
    color: "#3e3e3e",
    lineHeight: 1.7,
  };

  const rowStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
  };

  const iconBox = {
    flexShrink: 0,
    width: 48,
    height: 48,
    borderRadius: 12,
    background: "#dcd3c9",
    color: "#1f1f1f",
    display: "grid",
    placeItems: "center",
    fontSize: 20,
  };

  const rightStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  };

  const inputStyle = {
    width: "100%",
    minHeight: 46,
    padding: "14px 16px",
    borderRadius: 12,
    border: "1px solid #f9f6f2",
    fontSize: 15,
    color: "#222",
    outline: "none",
    boxSizing: "border-box",
  };

  const smallRow = {
    display: "grid",
    gridTemplateColumns: "1fr 0.6fr",
    gap: 16,
  };

  const noteStyle = {
    margin: 0,
    color: "#2c2c2c",
    fontSize: 15,
    lineHeight: 1.6,
  };

  const footerRow = {
    display: "flex",
    alignItems: "center",
    gap: 12,
  };

  const buttonStyle = {
    width: 176,
    padding: "14px 0",
    borderRadius: 12,
    border: "none",
    background: "#f9d700",
    color: "#141414",
    fontWeight: 700,
    cursor: "pointer",
    marginTop: 10,
  };

  return (
    <section id="contacts" style={sectionStyle}>
      <div style={gridStyle}>
        <div style={leftStyle}>
          <h2 style={headingStyle}>Контакти</h2>
          <p style={infoTextStyle}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span style={iconBox}>📍</span>
              Хрещатик, Київська область, Миру 1А
            </span>
          </p>

          <div style={{ height: 1, background: "#f0f0f0", margin: "8px 0 16px" }} />

          <div style={rowStyle}>
            <span style={iconBox}>⏰</span>
            <p style={infoTextStyle}>
              <strong>Робота офісу:</strong> Пн-Пт: 09:00-16:00
            </p>
          </div>
          <div style={rowStyle}>
            <span style={iconBox}>⏰</span>
            <p style={infoTextStyle}>
              <strong>Робота складу:</strong> Пн-Пт: 09:00-15:00
            </p>
          </div>

          <div style={{ height: 1, background: "#f0f0f0", margin: "12px 0 16px" }} />

          <div style={rowStyle}>
            <span style={iconBox}>📞</span>
            <p style={infoTextStyle}>
              <strong>0 800 53 53 53</strong> Безкоштовно
            </p>
          </div>
          <div style={rowStyle}>
            <span style={iconBox}>📱</span>
            <p style={infoTextStyle}>
              <strong>098 010 10 10</strong> Вайбер
            </p>
          </div>
          <div style={rowStyle}>
            <span style={iconBox}>📞</span>
            <p style={infoTextStyle}>
              <strong>099 898 98 11</strong> Рекламація - номер телефону/вайбер
            </p>
          </div>
        </div>

        <div style={rightStyle}>
          <p style={noteStyle}>
            Залишились питання? Залишіть свої дані і наш менеджер зв’яжеться з вами
          </p>
          <div style={smallRow}>
            <input type="text" placeholder="Ім’я" style={inputStyle} />
            <input type="tel" placeholder="+38" style={inputStyle} />
          </div>
          <input type="email" placeholder="Адреса електронної пошти" style={inputStyle} />
          <textarea placeholder="Повідомлення" style={{ ...inputStyle, minHeight: 120, resize: "vertical" }} />
          <label style={footerRow}>
            <input type="checkbox" style={{ width: 18, height: 18 }} />
            <span style={noteStyle}>Я даю згоду на обробку моїх персональних даних</span>
          </label>
          <button type="button" style={buttonStyle}>
            НАДІСЛАТИ
          </button>
        </div>
      </div>
    </section>
  );
}

export default Delivery;
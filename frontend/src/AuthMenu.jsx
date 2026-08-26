import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Check } from "lucide-react";
import "./AuthMenu.css";

/* ==========================================================================
   Главный компонент
   ========================================================================== */
export default function AuthMenu() {
  const [mode, setMode] = useState("register"); // "register" | "login"
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

  const isRegister = mode === "register";

  const updateField = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: подключить реальный запрос к бэкенду (fetch / axios и т.д.)
    console.log(mode, form);
  };

  return (
    <div className="auth-page">
      <BackgroundDecoration />

      <div className="auth-card">
        <Logo />

        <ModeSwitcher mode={mode} onChange={setMode} />

        <div key={mode} className="auth-panel">
          <h1 className="auth-panel__title">
            {isRegister ? "Создайте аккаунт" : "З поверненням"}
          </h1>
          <p className="auth-panel__subtitle">
            {isRegister ? "Це займе меньше хвилини" : "Введіть дані щоб продовжити"}
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
            {isRegister && (
              <Field
                icon={<User size={17} />}
                label="Імя"
                type="text"
                placeholder="Як до вас звертатися"
                value={form.name}
                onChange={updateField("name")}
                required
              />
            )}

            <Field
              icon={<Mail size={17} />}
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={updateField("email")}
              required
            />

            <Field
              icon={<Lock size={17} />}
              label="Пароль"
              type={showPassword ? "text" : "password"}
              placeholder="Мінімум 8 символів"
              value={form.password}
              onChange={updateField("password")}
              required
              minLength={8}
              trailing={
                <PasswordToggle visible={showPassword} onToggle={() => setShowPassword((v) => !v)} />
              }
            />

            {isRegister && (
              <Field
                icon={<Lock size={17} />}
                label="Підтвердіть пароль"
                type={showConfirm ? "text" : "password"}
                placeholder="Повторіть пароль"
                value={form.confirm}
                onChange={updateField("confirm")}
                required
                trailing={
                  <PasswordToggle visible={showConfirm} onToggle={() => setShowConfirm((v) => !v)} />
                }
              />
            )}

            {isRegister ? (
              <AgreementCheckbox checked={agreed} onToggle={() => setAgreed((v) => !v)} />
            ) : (
              <div className="auth-forgot">
                <a href="#" className="auth-forgot__link">
                  Забули пароль?
                </a>
              </div>
            )}

            <button type="submit" className="auth-submit" disabled={isRegister && !agreed}>
              {isRegister ? "Зареєструватися" : "Війти"}
              <ArrowRight size={16} />
            </button>
          </form>

          <Divider text="або" />

          <button type="button" className="auth-social">
            <GoogleIcon />
            Продовжити з Google
          </button>

          <SwitchModeLink isRegister={isRegister} onSwitch={setMode} />
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   Фоновые декоративные пятна
   ========================================================================== */
function BackgroundDecoration() {
  return (
    <>
      <div className="auth-page__blob auth-page__blob--top" />
      <div className="auth-page__blob auth-page__blob--bottom" />
    </>
  );
}

/* ==========================================================================
   Логотип
   ========================================================================== */
function Logo() {
  return (
    <div className="auth-logo">
      <div className="auth-logo__mark">M</div>
      <span className="auth-logo__text">Mebly</span>
    </div>
  );
}

/* ==========================================================================
   Переключатель "Регистрация / Вход"
   ========================================================================== */
function ModeSwitcher({ mode, onChange }) {
  return (
    <div className="auth-tabs">
      <div className={`auth-tabs__indicator auth-tabs__indicator--${mode}`} />

      <button
        type="button"
        onClick={() => onChange("register")}
        className={`auth-tabs__button ${mode === "register" ? "auth-tabs__button--active" : ""}`}
      >
        Регистрація
      </button>

      <button
        type="button"
        onClick={() => onChange("login")}
        className={`auth-tabs__button ${mode === "login" ? "auth-tabs__button--active" : ""}`}
      >
        Вход
      </button>
    </div>
  );
}

/* ==========================================================================
   Поле ввода с иконкой
   ========================================================================== */
function Field({ icon, label, trailing, ...inputProps }) {
  return (
    <label className="form-field">
      <span className="form-field__label">{label}</span>
      <div className="form-field__control">
        <span className="form-field__icon">{icon}</span>
        <input className="form-field__input" {...inputProps} />
        {trailing}
      </div>
    </label>
  );
}

/* ==========================================================================
   Кнопка-глаз для показа/скрытия пароля
   ========================================================================== */
function PasswordToggle({ visible, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="form-field__toggle"
      aria-label={visible ? "Скрити пароль" : "Показати пароль"}
    >
      {visible ? <EyeOff size={17} /> : <Eye size={17} />}
    </button>
  );
}

/* ==========================================================================
   Чекбокс согласия с условиями
   ========================================================================== */
function AgreementCheckbox({ checked, onToggle }) {
  return (
    <label className="auth-checkbox">
      <span
        onClick={onToggle}
        className={`auth-checkbox__box ${checked ? "auth-checkbox__box--checked" : ""}`}
      >
        {checked && <Check size={12} color="#FAF8F5" strokeWidth={3} />}
      </span>
      <span className="auth-checkbox__text">
        Я згоден з{" "}
        <a href="#" className="auth-checkbox__link">вимогами користування</a>{" "}
        и{" "}
        <a href="#" className="auth-checkbox__link">політикою конфедиціальності</a>
      </span>
    </label>
  );
}

/* ==========================================================================
   Разделитель "или"
   ========================================================================== */
function Divider({ text }) {
  return (
    <div className="auth-divider">
      <span className="auth-divider__line" />
      <span className="auth-divider__text">{text}</span>
      <span className="auth-divider__line" />
    </div>
  );
}

/* ==========================================================================
   Ссылка переключения режима внизу формы
   ========================================================================== */
function SwitchModeLink({ isRegister, onSwitch }) {
  return (
    <p className="auth-switch">
      {isRegister ? (
        <>
          Вже є аккаунт?{" "}
          <button type="button" className="auth-switch__button" onClick={() => onSwitch("login")}>
            Войти
          </button>
        </>
      ) : (
        <>
          Нема аккаунта?{" "}
          <button type="button" className="auth-switch__button" onClick={() => onSwitch("register")}>
            Зареєструватися
          </button>
        </>
      )}
    </p>
  );
}

/* ==========================================================================
   Иконка Google
   ========================================================================== */
function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34 6 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.1 8 3l6-6C34 6 29.3 4 24 4c-7.4 0-13.8 4.2-17 10.3z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.9 39.6 16.4 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.6l6.2 5.2C39.9 36.6 44 31 44 24c0-1.3-.1-2.3-.4-3.5z" />
    </svg>
  );
}

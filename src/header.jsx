
export default function Header() {
    return (
        <header className="site-header">
            <div className="navbar">
                <span className="logo">Mebly</span>

                <ul className="nav">
                    <li><a href="#about">Про нас</a></li>
                    <li><a href="#contacts">Контакти</a></li>
                    <li><a href="#catalog">Меню</a></li>

                    <li>
                            Зареєструватись
                    </li>
                </ul>
            </div>
            <div className="presentation">
                <div className="presentation-content">
                    <p className="eyebrow">Меблі для затишку</p>
                    <h1>Створюємо простір, де хочеться жити</h1>
                    <p>Обирайте стильні рішення для дому, офісу та кухні.</p>
                    <div className="hero-actions">
                        <a href="#catalog" className="hero-button primary">Переглянути каталог</a>
                        <a href="#register" className="hero-button secondary">Дивитися більше</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
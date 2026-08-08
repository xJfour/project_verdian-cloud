import "./Footer.scss";
import logoIcon from "../../assets/logo.png";

import supportIcon from "../../assets/footer/support.png";
import emailIcon from "../../assets/footer/email.png";
import abuseIcon from "../../assets/footer/abuse.png";
import botTelegramIcon from "../../assets/footer/bot-telegram.png";
import chatTelegramIcon from "../../assets/footer/chat-telegram.png";
import channelTelegramIcon from "../../assets/footer/channel-telegram.png";

const contacts = [
    {
        label: "Тех поддержка",
        value: "support@gmail.com",
        icon: supportIcon,
    },
    {
        label: "Контактная почта",
        value: "verdiandcloud@gmail.com",
        icon: emailIcon,
    },
    {
        label: "Абьюз почта",
        value: "verdiandcloud@gmail.com",
        icon: abuseIcon,
    },
];

const documents = [
    "Публичная оферта",
    "Пользовательское соглашение",
    "Политика конфиденциальности",
    "Политика обработки персональных данных",
];

const socialButtons = [
    {
        label: "Бот Telegram",
        icon: botTelegramIcon,
    },
    {
        label: "Чат Telegram",
        icon: chatTelegramIcon,
    },
    {
        label: "Канал Telegram",
        icon: channelTelegramIcon,
    },
];

function Footer() {
    return (
        <footer className="footer" id="contacts">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src={logoIcon} alt="" />
                        <span>VerdianCloud</span>
                    </div>

                    <p className="footer-description">
                        Делаем сервисы стабильными<br />
                        и простыми для каждого проекта.
                    </p>

                    <p className="footer-copyright">© 2026 VERDIANCLOUD</p>
                </div>

                <div className="footer-column footer-contacts">
                    <h3>Контакты для связи</h3>

                    <div className="footer-contact-list">
                        {contacts.map((contact) => (
                            <div className="footer-contact" key={contact.label}>
                                <div className="footer-contact-label">
                                    <img
                                        className="footer-icon-slot"
                                        src={contact.icon}
                                        alt=""
                                    />
                                    <span>{contact.label}</span>
                                </div>
                                <a href={`mailto:${contact.value}`}>
                                    {contact.value}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer-column footer-documents">
                    <h3>Документы</h3>
                    <nav className="footer-document-list" aria-label="Документы">
                        {documents.map((document) => (
                            <a href="#" key={document}>
                                {document}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="footer-column footer-social">
                    <h3>Наши соц сети</h3>
                    <div className="footer-social-list">
                        {socialButtons.map((button) => (
                            <a className="footer-social-button" href="#" key={button.label}>
                                <img
                                    className="footer-social-icon"
                                    src={button.icon}
                                    alt=""
                                />
                                <span>{button.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

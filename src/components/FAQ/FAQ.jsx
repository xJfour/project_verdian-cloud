import { useState } from "react";
import "./FAQ.scss";

const questions = [
    "Как оплатить сервер?",
    "Сколько времени занимает подключение?",
    "Есть ли тестовый период?",
    "Как восстановить доступ к аккаунту?",
    "Можно ли перенести данные с другого сервиса?",
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(2);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq">
            <div className="faq-container">
                <div className="faq-heading">
                    <h2>Есть вопросы? Ответы тут!</h2>
                    <p>
                        Здесь Вы найдете быстрые ответы на самые частые обращения
                    </p>
                </div>

                <div className="faq-list">
                    {questions.map((question, index) => (
                        <div
                            className={`faq-item ${openIndex === index ? "faq-item-open" : ""}`}
                            key={question}
                        >
                            <button
                                className="faq-question"
                                type="button"
                                onClick={() => toggleQuestion(index)}
                            >
                                <img
                                    className="faq-number"
                                    src={`src/assets/faq/${index + 1}.png`}
                                    alt=""
                                />

                                <span className="faq-question-text">
                                    {question}
                                </span>

                                <span className="faq-arrow" aria-hidden="true">
                                    <img
                                        className="faq-arrow-image"
                                        src="src/assets/faq/arrow.png"
                                        alt=""
                                    />
                                </span>
                            </button>

                            <div className="faq-answer-wrap">
                                <div className="faq-answer">
                                    <hr />
                                    <p>
                                        Да, тестовый период доступен. Вы можете бесплатно
                                        ознакомиться с возможностями сервиса и проверить
                                        его в работе перед подключением.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;

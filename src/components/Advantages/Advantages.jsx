import "./Advantages.scss";

const advantages = [
    {
        className: "advantages-card-large",
        image: "src/assets/advantages/speed.png",
        title: (
            <>
                Высокая скорость <img src="src/assets/advantages/speed-icon.png" alt="" /> подключения
            </>
        ),
        description: "Хороший порт для проектов любой нагрузки",
    },
    {
        className: "advantages-card-large",
        image: "src/assets/advantages/activation.png",
        title: (
            <>
                Моментальная <img src="src/assets/advantages/activation-icon.png" alt="" /> активация серверов
            </>
        ),
        description: "Автоматическое создание VPS и запуск за несколько минут",
    },
    {
        className: "advantages-card-small",
        image: "src/assets/advantages/support.png",
        title: (
            <>
                Техподдержка <img src="src/assets/advantages/support-icon.png" alt="" /> 24/7
            </>
        ),
        description: "Следим за стабильностью ваших сервисов и помогаем в любой ситуации.",
    },
    {
        className: "advantages-card-small",
        image: "src/assets/advantages/uptime.png",
        title: (
            <>
                Стабильный <img src="src/assets/advantages/uptime-icon.png" alt="" /> аптайм
            </>
        ),
        description: "Надежная система с высокой доступностью серверов",
    },
    {
        className: "advantages-card-small",
        image: "src/assets/advantages/infrastructure.png",
        title: (
            <>
                Собственная <img src="src/assets/advantages/infrastructure-icon.png" alt="" /> инфраструктура
            </>
        ),
        description: "Своя сеть и серверное оборудование без реселлинга",
    },
];

function Advantages() {
    return (
        <section className="advantages" id="advantages">
            <div className="advantages-container">
                <div className="advantages-heading">
                    <h2>Преимущества нашего сервиса</h2>
                    <p>Выберите тот тариф, который подходит именно вам</p>
                </div>

                <div className="advantages-grid">
                    {advantages.map((item, index) => (
                        <article className={`advantages-card ${item.className}`} key={index}>
                            <img className="advantages-image" src={item.image} alt="" />
                            <div className="advantages-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Advantages;

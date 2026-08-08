import { Element } from "react-scroll";
import "./Hero.scss";

function Hero() {
    const scrollToTariffs = () => {
        document.getElementById("tariffs")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <Element
            name="hero"
            id="hero"
            className="hero"
            as="section"
        >

            <img
                className="hero-lines hero-lines-left"
                src="src/assets/left.png"
                alt=""
            />

            <img
                className="hero-lines hero-lines-right"
                src="src/assets/right.png"
                alt=""
            />

            <div className="hero-columns">

                <img src="src/assets/columns/1.png" alt="" />
                <img src="src/assets/columns/2.png" alt="" />
                <img src="src/assets/columns/3.png" alt="" />
                <img src="src/assets/columns/4.png" alt="" />
                <img src="src/assets/columns/5.png" alt="" />
                <img src="src/assets/columns/6.png" alt="" />
                <img src="src/assets/columns/7.png" alt="" />
                <img src="src/assets/columns/8.png" alt="" />
                <img src="src/assets/columns/9.png" alt="" />
                <img src="src/assets/columns/10.png" alt="" />
                <img src="src/assets/columns/11.png" alt="" />
                <img src="src/assets/columns/12.png" alt="" />
                <img src="src/assets/columns/13.png" alt="" />
                <img src="src/assets/columns/14.png" alt="" />
                <img src="src/assets/columns/15.png" alt="" />
                <img src="src/assets/columns/16.png" alt="" />

            </div>

            <div className="container">

                <div className="hero-content">
                    <h1>
                        Современный хостинг
                        <br />

                        <span className="hero-title-row">
                            <span>виртуальных</span>
                            <span className="hero-icon">
                                <img
                                    src="src/assets/Icon.png"
                                    alt="Icon"
                                />
                            </span>
                            <span>серверов</span>
                        </span>
                    </h1>

                    <p>
                        Verdian Cloud предлагает
                        <span className="hero-text-icon lightning">
                            <img
                                src="src/assets/lightning.png"
                                alt=""
                            />
                        </span>

                        быстрые,

                        <span className="hero-text-icon shield">
                            <img
                                src="src/assets/shield.png"
                                alt=""
                            />
                        </span>
                        защищённые и масштабируемые серверы
                        для любых задач.
                        Минимальные задержки.
                    </p>

                    <button className="hero-btn" onClick={scrollToTariffs}>
                        Перейти к покупке
                    </button>

                </div>

            </div>

            <img
                className="hero-glow"
                src="src/assets/glow.png"
                alt=""
            />

            <img
                className="hero-server"
                src="src/assets/server.png"
                alt="Server"
            />

            <img
                className="server-gradient"
                src="src/assets/server-gradient.png"
                alt=""
            />

        </Element>
    );
}

export default Hero;

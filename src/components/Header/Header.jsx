import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Header.scss";

const navigation = [
    { label: "Главная", target: "hero" },
    { label: "Тарифы", target: "tariffs" },
    { label: "О нас", target: "advantages" },
    { label: "Контакты", target: "contacts" },
];

function Header() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [indicator, setIndicator] = useState({ left: 5, width: 0 });
    const menuRef = useRef(null);
    const linkRefs = useRef([]);

    useLayoutEffect(() => {
        const updateIndicator = () => {
            const link = linkRefs.current[activeIndex];
            const menu = menuRef.current;

            if (!link || !menu) return;

            const linkRect = link.getBoundingClientRect();
            const menuRect = menu.getBoundingClientRect();

            setIndicator({
                left: linkRect.left - menuRect.left,
                width: linkRect.width,
            });
        };

        updateIndicator();
        window.addEventListener("resize", updateIndicator);

        return () => window.removeEventListener("resize", updateIndicator);
    }, [activeIndex]);

    useEffect(() => {
        const updateActiveSection = () => {
            const scrollPosition = window.scrollY + window.innerHeight * 0.28;
            const pageBottom = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            let currentIndex = 0;

            if (pageBottom >= documentHeight - 10) {
                currentIndex = navigation.length - 1;
            } else {
                navigation.forEach((item, index) => {
                    const section = document.getElementById(item.target);

                    if (!section) return;

                    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

                    if (sectionTop <= scrollPosition) {
                        currentIndex = index;
                    }
                });
            }

            setActiveIndex((previousIndex) =>
                previousIndex === currentIndex ? previousIndex : currentIndex
            );
        };

        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;

            window.requestAnimationFrame(() => {
                updateActiveSection();
                ticking = false;
            });

            ticking = true;
        };

        updateActiveSection();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    const handleNavigation = (index, target) => {
        setActiveIndex(index);

        document.getElementById(target)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <header className="header">
            <div className="container">
                <a
                    href="#hero"
                    className="logo"
                    onClick={(event) => {
                        event.preventDefault();
                        handleNavigation(0, "hero");
                    }}
                >
                    <img src="src/assets/logo.png" alt="VerdianCloud" />
                    <span>VerdianCloud</span>
                </a>

                <nav className="navigation">
                    <ul className="menu" ref={menuRef}>
                        <span
                            className="menu-indicator"
                            style={{
                                width: indicator.width,
                                transform: `translateX(${indicator.left}px)`,
                            }}
                            aria-hidden="true"
                        />

                        {navigation.map((item, index) => (
                            <li key={item.target}>
                                <a
                                    href={`#${item.target}`}
                                    ref={(element) => {
                                        linkRefs.current[index] = element;
                                    }}
                                    className={`menu-link ${activeIndex === index ? "active" : ""}`}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleNavigation(index, item.target);
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <button className="btn btn-outline">Регистрация</button>
                    <button className="btn btn-primary">Войти</button>
                </div>
            </div>
        </header>
    );
}

export default Header;

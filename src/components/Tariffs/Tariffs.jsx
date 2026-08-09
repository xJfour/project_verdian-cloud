import { useState } from "react";
import "./Tariffs.scss";

const plans = [
    { name: "NL-4", type: "Эконом", price: "900₽" },
    { name: "NL-4", type: "Эконом", price: "900₽" },
    { name: "NL-4", type: "Эконом", price: "900₽" },
];

function FilterBox({ title, titleIcon, children, className = "" }) {
    return (
        <div className={`tariffs-filter-box ${className}`}>
            <span className="tariffs-filter-title"><img src={titleIcon} alt="" />{title}</span>
            {children}
        </div>
    );
}

function RangeBox({ title, titleIcon, min, max, initialValue, unit = "" }) {
    const [value, setValue] = useState(initialValue);
    const progress = ((value - min) / (max - min)) * 100;

    return (
        <div className="tariffs-range-box">
            <div className="tariffs-range-top">
                <span><img src={titleIcon} alt="" />{title}</span>
                <span>{value}{unit}</span>
            </div>

            <div className="tariffs-range-line">
                <span className="tariffs-range-progress" style={{ width: `${progress}%` }} />
                <span className="tariffs-range-dot" style={{ left: `${progress}%` }} />
                <input
                    className="tariffs-range-input"
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={(event) => setValue(Number(event.target.value))}
                    aria-label={title}
                />
            </div>

            <div className="tariffs-range-values">
                <span>{min}</span>
                <span>{max}{unit}</span>
            </div>
        </div>
    );
}

function PlanCard({ plan }) {
    return (
        <article className="tariffs-card">
            <div className="tariffs-card-head">
                <div><h3>{plan.name}</h3><span>{plan.type}</span></div>
                <div className="tariffs-price">{plan.price}<small> / мес</small></div>
            </div>
            <div className="tariffs-card-line" />
            <ul className="tariffs-features">
                <li><img className="tariffs-feature-icon" src="src/assets/tariffs/cpu.png" alt="" /><div><span>CPU</span><strong>8x CPU AMD Ryzen 9 5950X</strong></div></li>
                <li><img className="tariffs-feature-icon" src="src/assets/tariffs/memory.png" alt="" /><div><span>Память</span><strong>32 GB DDR4</strong></div></li>
                <li><img className="tariffs-feature-icon" src="src/assets/tariffs/disk.png" alt="" /><div><span>Диск</span><strong>250 GB NVMe SSD</strong></div></li>
                <li><img className="tariffs-feature-icon" src="src/assets/tariffs/network.png" alt="" /><div><span>Скорость сети</span><strong>До 1 Gbit/s</strong></div></li>
                <li><img className="tariffs-feature-icon" src="src/assets/tariffs/datacenter.png" alt="" /><div><span>Дата центра</span><strong>Россия <img className="tariffs-flag" src="src/assets/tariffs/russia.png" alt="" /></strong></div></li>
                <li><img className="tariffs-feature-icon" src="src/assets/tariffs/ddos.png" alt="" /><div><span>Защита от DDoS-атак</span><strong>L3-L4</strong></div></li>
            </ul>
            <button className="tariffs-card-button">Перейти к покупке</button>
        </article>
    );
}

function PriceInput({ label, placeholder }) {
    return (
        <label className="tariffs-price-input">
            <span>{label}</span>
            <div className="tariffs-price-field">
                <input type="text" inputMode="numeric" pattern="[0-9]*" placeholder={placeholder} onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/\D/g, ""); }} />
                <img src="src/assets/tariffs/ruble.png" alt="₽" />
            </div>
        </label>
    );
}

function RegionFilter() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="tariffs-filter-box tariffs-region-filter">
            <span className="tariffs-filter-title"><img src="src/assets/tariffs/region.png" alt="" />Регион</span>
            <div className="tariffs-region-select-wrap">
                <button className="tariffs-select" type="button" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
                    <img src="src/assets/tariffs/russia.png" alt="" />Россия
                    <img className={`tariffs-select-arrow ${isOpen ? "is-open" : ""}`} src="src/assets/tariffs/region-arrow.png" alt="" />
                </button>
                {isOpen && <div className="tariffs-region-dropdown"><button type="button" className="tariffs-region-option"><img src="src/assets/tariffs/russia.png" alt="" />Россия</button></div>}
            </div>
        </div>
    );
}

function Tariffs() {
    const [serverType, setServerType] = useState("virtual");
    const [currency, setCurrency] = useState("rubles");
    const [processor, setProcessor] = useState("AMD");
    const [serverMode, setServerMode] = useState("PROMO");

    return (
        <section className="tariffs" id="tariffs">
            <div className="tariffs-container">
                <div className="tariffs-heading"><h2>Наши тарифы</h2><p>Выберите тот тариф, который подходит именно вам</p></div>
                <div className="tariffs-tabs">
                    <button className={`tariffs-tab ${serverType === "virtual" ? "active" : ""}`} onClick={() => setServerType("virtual")}><img src="src/assets/tariffs/virtual-servers.png" alt="" />Виртуальные сервера</button>
                    <button className={`tariffs-tab ${serverType === "dedicated" ? "active" : ""}`} onClick={() => setServerType("dedicated")}><img src="src/assets/tariffs/dedicated-servers.png" alt="" />Выделенные сервера</button>
                    <span className="tariffs-divider" />
                    <button className={`tariffs-tab tariffs-tab-small ${currency === "euro" ? "active" : ""}`} onClick={() => setCurrency("euro")}><img src="src/assets/tariffs/euro.png" alt="" />Евро</button>
                    <button className={`tariffs-tab tariffs-tab-small ${currency === "rubles" ? "active" : ""}`} onClick={() => setCurrency("rubles")}><img src="src/assets/tariffs/ruble.png" alt="" />Рубли</button>
                    <button className="tariffs-reset"><img src="src/assets/tariffs/reset.png" alt="" />Сбросить фильтры</button>
                </div>
                <hr className="tariffs-divider-line" />
                <div className="tariffs-ranges">
                    <RangeBox title="Кол-во ядер" titleIcon="src/assets/tariffs/cpu.png" min={1} max={16} initialValue={12} unit=" ГГц" />
                    <RangeBox title="Кол-во ОЗУ" titleIcon="src/assets/tariffs/memory.png" min={1} max={32} initialValue={12} unit=" ГБ" />
                    <RangeBox title="Объём накопителя" titleIcon="src/assets/tariffs/disk.png" min={1} max={200} initialValue={164} />
                </div>
                <div className="tariffs-filters">
                    <RegionFilter />
                    <FilterBox title="Тип дисков" titleIcon="src/assets/tariffs/disk-type.png"><button className="tariffs-chip active" type="button">SSD NVMe</button></FilterBox>
                    <FilterBox title="Тип процессора" titleIcon="src/assets/tariffs/processor.png">
                        <div className="tariffs-chip-row">
                            <button className={`tariffs-chip ${processor === "AMD" ? "active" : "tariffs-chip-muted"}`} type="button" onClick={() => setProcessor("AMD")}>AMD{processor === "AMD" && <img className="tariffs-chip-remove" src="src/assets/tariffs/cross.png" alt="" />}</button>
                            <button className={`tariffs-chip ${processor === "Intel" ? "active" : "tariffs-chip-muted"}`} type="button" onClick={() => setProcessor("Intel")}>Intel{processor === "Intel" && <img className="tariffs-chip-remove" src="src/assets/tariffs/cross.png" alt="" />}</button>
                        </div>
                    </FilterBox>
                    <FilterBox title="Тип сервера" titleIcon="src/assets/tariffs/server-type.png">
                        <div className="tariffs-chip-row">
                            <button className={`tariffs-chip ${serverMode === "PROMO" ? "active" : "tariffs-chip-muted"}`} type="button" onClick={() => setServerMode("PROMO")}>PROMO{serverMode === "PROMO" && <img className="tariffs-chip-remove" src="src/assets/tariffs/cross.png" alt="" />}</button>
                            <button className={`tariffs-chip ${serverMode === "HI-PERF" ? "active" : "tariffs-chip-muted"}`} type="button" onClick={() => setServerMode("HI-PERF")}>HI-PERF{serverMode === "HI-PERF" && <img className="tariffs-chip-remove" src="src/assets/tariffs/cross.png" alt="" />}</button>
                        </div>
                    </FilterBox>
                    <FilterBox title="Цена" titleIcon="src/assets/tariffs/price.png" className="tariffs-price-filter"><div className="tariffs-price-inputs"><PriceInput label="От" placeholder="0" /><PriceInput label="До" placeholder="5000" /></div></FilterBox>
                </div>
                <div className="tariffs-cards">{plans.map((plan, index) => <PlanCard plan={plan} key={`${plan.name}-${index}`} />)}</div>
            </div>
        </section>
    );
}

export default Tariffs;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function Header() {
    const style = {};
    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 ? (
                <React.Fragment>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose
                        from. All from our stone oven, all organic, all
                        delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzaData.map((pizza) => (
                            <Pizza pizzaObject={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </React.Fragment>
            ) : (
                <p>Sorry, no pizzas available at the moment.</p>
            )}
        </main>
    );
}

function Pizza({ pizzaObject }) {
    // console.log(pizzaObject);
    /*  if (pizzaObject.soldOut) {
        return null;
    } */
    return (
        <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObject.photoName} alt={pizzaObject.name} />
            <div>
                <h3>{pizzaObject.name}</h3>
                <p>{pizzaObject.ingredients}</p>
                {/* {pizzaObject.soldOut ? (
                    <span>SOLD OUT</span>
                ) : (
                    <span>pizzaObject.price</span>
                )} */}
                <span>
                    {pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}
                </span>
            </div>
        </li>
    );
}

function Order({ closeHour, openHour }) {
    return (
        <div className="order">
            <p>
                We're open from {openHour}:00 to {closeHour}:00. Come visit us
                or order online.
            </p>
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;
    const currentTime = new Date().toLocaleTimeString();
    return (
        <footer className="footer">
            <div>
                <h4>Clock : {currentTime}.</h4>
                {isOpen ? (
                    <Order closeHour={closeHour} openHour={openHour} />
                ) : (
                    `Our work hour ${openHour}:00 - ${closeHour}:00`
                )}
            </div>
        </footer>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));

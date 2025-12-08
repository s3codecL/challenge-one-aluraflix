import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import HeaderLink from "../headerLink/HeaderLink";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <Link to="/" onClick={closeMenu}>
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura" />
                </section>
            </Link>
            <nav className={styles.nav}>
                <button 
                    className={styles.menuIcon} 
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
                    <HeaderLink url="./" onClick={closeMenu}>Inicio</HeaderLink>
                    <HeaderLink url="./newVideo" onClick={closeMenu}>Nuevo video</HeaderLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;
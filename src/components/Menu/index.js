import React from 'react';
import Logo from "../../assets/img/Logo.png";
import ButtonLink from "./components/ButtonLink";
import Button from "../Button";
import { Link } from 'react-router-dom';

import './Menu.css';


function Menu() {

    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo AluraFlix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;
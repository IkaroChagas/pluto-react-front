import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Sidebar.module.css'


const SideBar: React.FC = () => {


    return (
        <div className={styles.sidebar}>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <NavLink to="/admin/dashboard" >
                            <h3>Página Inicial</h3>
                        </NavLink>
                    </li>

                    <h3>Planos de Doação</h3>
                    <ul>
                        <li>
                            <NavLink to="/admin/planos-de-doacao" >
                                Listagem de planos
                            </NavLink>
                        </li>
                    </ul>
                    <li>
                        <NavLink to="/curriculo/experiencia/cadastrar" >
                            Cadastrar Experiência
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/experiencia/listar" >
                            Listar Experiências
                        </NavLink>
                    </li>
                    <ul>
                        <h3>Portfólio</h3>
                    </ul>
                    <li>
                        <NavLink to="/projeto/cadastrar" >
                            Cadastrar Projeto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/listar" >
                            Listar Portfólio
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default SideBar
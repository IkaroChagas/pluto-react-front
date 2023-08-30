import React from "react";
import * as C from "./styled";
import HomeIcon from "../../../assets/sidebarvector1.png";
import PlanIcon from "../../../assets/sidebarvector2.png";
import UnitsIcon from "../../../assets/sidebarvector3.png";

const SideBar: React.FC = () => {
    return (
        <C.Sidebar>
            <nav>
                <C.Logo>pluto</C.Logo>

                <C.NavigationList>
                    <C.NavigationItem>
                        <C.NavigationLink to="/admin/dashboard">
                            <C.NavHeader>
                                <C.HomeIcon src={HomeIcon} />
                                Página Inicial
                            </C.NavHeader>
                        </C.NavigationLink>
                    </C.NavigationItem>

                    <C.NavigationItem>
                        <C.NavHeader>
                            <C.PlanIcon src={PlanIcon} />
                            Planos de Doação
                        </C.NavHeader>
                        <C.NavigationList>
                            <C.NavigationItem>
                                <C.NavigationLink to="/admin/listagem-de-planos">
                                    Listagem de planos
                                </C.NavigationLink>
                            </C.NavigationItem>
                        </C.NavigationList>
                    </C.NavigationItem>

                    <C.NavigationItem>
                        <C.NavigationLink to="/admin/adicionar-plano">
                            Adicionar plano
                        </C.NavigationLink>
                    </C.NavigationItem>

                    <C.NavigationItem>
                        <C.NavHeader>
                            <C.UnitsIcon src={UnitsIcon} />
                            Unidades
                        </C.NavHeader>
                        <C.NavigationList>
                            <C.NavigationItem>
                                <C.NavigationLink to="/admin/listagem-das-unidades">
                                    Listagem das unidades
                                </C.NavigationLink>
                            </C.NavigationItem>
                            <C.NavigationItem>
                                <C.NavigationLink to="/admin/adicionar-unidade">
                                    Adicionar unidade
                                </C.NavigationLink>
                            </C.NavigationItem>
                        </C.NavigationList>
                    </C.NavigationItem>
                </C.NavigationList>
            </nav>
        </C.Sidebar>
    );
};

export default SideBar;

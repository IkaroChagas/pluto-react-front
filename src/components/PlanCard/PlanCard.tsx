import React, { useEffect, useState } from 'react';
import Ellipsered from '../../assets/ellipsered.png'
import Hearth from '../../assets/hearth.png';
import { getAllPlans } from '../../services/PlansServices';
import * as C from './styled';


const PlanCard: React.FC = () => {
    const [plans, setPlans] = useState<any[]>([]);

    const fetchPlans = async () => {
        try {
            const plans = await getAllPlans();
            setPlans(plans)
        } catch (error) {
            alert("Erro ao buscar os planos");
        }
    };

    useEffect(() => {
        fetchPlans()
    }, []);


    return (
        <C.Rectangle>
            <C.Container>
                <C.EllipseredImage src={Ellipsered} />
                <C.RectangleText>
                    Quer ser um apoiador nessa causa?
                </C.RectangleText>
                <C.RectangleText2>
                    Faça a sua doação e experimente o prazer de impactar vidas todos os dias
                </C.RectangleText2>
            </C.Container>

            <C.ContainerCards>
                {plans.map(plan => (
                    <>
                        <C.FirstCard>
                            <C.FirstCardImage src={plan.image} />
                            <C.CardButton>
                            {/* {plan.buttoniconcolor} */}
                                <C.CardText>
                                    Doar agora mesmo
                                    <C.CardIcon src={Hearth} />
                                </C.CardText>
                            </C.CardButton>
                        </C.FirstCard>
                    </>
                ))}
            </C.ContainerCards>  
           
        </C.Rectangle>

    )
}

export default PlanCard;
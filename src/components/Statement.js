import { StatementStyle, NoContent, WithContent, FooterStatement, Register, Date, Values } from "./commons/Styles";
import dayjs from 'dayjs';
import { useHistory } from 'react-router-dom';

export default function Statement({registers, total}) {
    const history = useHistory();

    function updateRegister(id, value){
        if(value > 0){
            history.push(`/cashin/${id}`);
        } else {
            history.push(`/cashout/${id}`);
        }
    }

    return (
        <>            
            <StatementStyle registers={registers.length !== 0}>
                {registers.length === 0 ?
                    <NoContent registers={registers.length !== 0}>Não há registros de <br /> entrada ou saída</NoContent> :
                    registers.map(r => (
                        <WithContent  onClick={() => updateRegister(r.id, r.value)} key={r.id} registers={registers.length !== 0}>
                            <Register >
                                <div>
                                    <Date>{dayjs(r.date).format("DD/MM")}</Date>
                                    <p>{r.description}</p>
                                </div>
                                <Values value={r.value}>{(r.value/100).toFixed(2)}</Values>
                            </Register>
                        </WithContent>
                    ))
                }
            </StatementStyle>
            <FooterStatement registers={registers.length !== 0} total={total}>Total <span>{(total/100).toFixed(2)}</span></FooterStatement>
        </>
    )
};
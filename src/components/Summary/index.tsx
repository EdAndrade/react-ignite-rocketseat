import { Container } from "./styles";
import incomeImg from '../../assets/Entradas.svg';
import outComeImg from '../../assets/Saídas.svg';
import totalImg from '../../assets/Total.svg';

export function Summary(){

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outComeImg} alt="Saídas" />
                </header>
                <strong>R$500</strong>
            </div>

            <div className="highlight">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$500</strong>
            </div>
        </Container>
    )
}
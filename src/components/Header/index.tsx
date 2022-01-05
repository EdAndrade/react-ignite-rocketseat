import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style';

interface HeaderProps{
    onOpenNewTransactionModa: () => void;
}

export function Header({ onOpenNewTransactionModa }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money"/>
                <button type="button" onClick={onOpenNewTransactionModa}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}
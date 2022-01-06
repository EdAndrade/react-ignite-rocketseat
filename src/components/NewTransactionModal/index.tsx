import Modal from 'react-modal';
import { Container,TransactionTypeContainer,RadioBox } from './styles';
import incomeImg from '../../assets/Entradas.svg';
import outComeImg from '../../assets/Saídas.svg';
import { useState } from 'react';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal( { isOpen, onRequestClose }: NewTransactionModalProps ){

    const [type, setType] = useState('deposit');

    function handleSetTypeDeposit(){

    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button type="button" onClick={onRequestClose} className='react-modal-close'>
                x
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input 
                    type="text" 
                    placeholder="Título"
                />

                <input 
                    type="number" 
                    placeholder="Valor"
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        type='button'
                        isActive={ type === 'deposit'}
                        activeColor="green"
                        onClick={ () => setType('deposit')}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type='button'
                        isActive={ type === 'widthdraw'}
                        activeColor="red"
                        onClick={ () => setType('widthdraw')}
                    >
                        <img src={outComeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                    type="text" 
                    placeholder="Categoria"
                />

                <button type='submit'> 
                    Cadastrar
                </button>

            </Container>
        </Modal>
    );
}
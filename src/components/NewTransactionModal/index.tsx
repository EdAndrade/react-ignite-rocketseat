import Modal from 'react-modal';
import { Container,TransactionTypeContainer,RadioBox } from './styles';
import incomeImg from '../../assets/Entradas.svg';
import outComeImg from '../../assets/Saídas.svg';
import { FormEvent, useState, useContext} from 'react';
import { api } from '../services/api';
import { TransactionsContext } from '../../TransactionContext';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal( { isOpen, onRequestClose }: NewTransactionModalProps ){


    const { createTransaction } = useContext(TransactionsContext);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function resetStates(){
        setTitle('');
        setAmount(0);
        setCategory('');
    }

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
        
        await createTransaction({
            title,
            amount,
            category,
            type
        })

        resetStates();
        onRequestClose();
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

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input 
                    type="text" 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input 
                    type="number" 
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value)) }
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
                    value={category}
                    onChange={event => setCategory(event.target.value) }
                />

                <button type='submit'> 
                    Cadastrar
                </button>

            </Container>
        </Modal>
    );
}
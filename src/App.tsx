import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionModal'
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { TransactionsProvider } from "./TransactionContext";

Modal.setAppElement('#root');

export function App() {

	const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false);

	function handleOpenNewTransactionModal(){
        setisNewTransactionModalOpen(true);
    }
	
	function handleCloseNewTransactionMOdal(){
        setisNewTransactionModalOpen(false);
    }

	return (

		<TransactionsProvider>
			<Header onOpenNewTransactionModa={handleOpenNewTransactionModal}/>
			<Dashboard/>
			<GlobalStyle/>

			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionMOdal}
			/>
		</TransactionsProvider>
	);
}
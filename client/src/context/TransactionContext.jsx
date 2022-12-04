import React, { useState } from 'react'
import { ethers } from 'ethers'

import {
	contractABI,
	contractAddress,
} from '../utils/constants'

export const TransactionContext = React.createContext()

const { ethereum } = window

const getEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(
		ethereum
	)
	const signer = provider.getSigner()
	const transactionContract = new ethers.Contract(
		contractAddress,
		contractABI,
		signer
	)
	console.log(provider, signer, transactionContract)
}

export const TransactionsProvider = ({ children }) => {
	const [connectedAccount, setConnectedAccount] =
		useState('')

	const checkIfWalletIsConnected = async () => {
		if (!ethereum) return alert('please install metamask')
	}

	return (
		<TransactionContext.Provider value='test'>
			{children}
		</TransactionContext.Provider>
	)
}

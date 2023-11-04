// src/SurveyComponent.js
import React, { useState } from 'react';
import { useContract, useSigner, useAccount } from 'wagmi';
import Web3 from 'web3';
import SurveyContract from './contracts/SustainabilityQSurvey.sol'; 

const SurveyComponent = () => {
  const { data: signer } = useSigner();
  const { data: accountData } = useAccount();
    const [statusMessage, setStatusMessage] = useState('');

    useEffect(() => {
        const initWeb3 = async () => {
            try {
                let web3Instance;
                if (window.ethereum) {
                    web3Instance = new Web3(window.ethereum);
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                } else if (window.web3) {
                    web3Instance = new Web3(window.web3.currentProvider);
                } else {
                    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
                    return;
                }

                const accounts = await web3Instance.eth.getAccounts();
                const networkId = await web3Instance.eth.net.getId();
                const deployedNetwork = SurveyContract.networks[networkId];
                const surveyContractInstance = new web3Instance.eth.Contract(
                    SurveyContract.abi,
                    deployedNetwork && deployedNetwork.address,
                );

                setWeb3(web3Instance);
                setAccounts(accounts);
                setContract(surveyContractInstance);
            } catch (error) {
                console.error("Failed to load web3, accounts, or contract. Check console for details.", error);
            }
        };

        initWeb3();
    }, []);

    const submitAnswer = async (questionId, answer) => {
        if (!contract) {
            setStatusMessage('Contract not loaded.');
            return;
        }
        
        // Replace '<YOUR_CONTRACT_ADDRESS>' with your contract's address
        const surveyContractAddress = "<YOUR_CONTRACT_ADDRESS>";
        
        try {
            await contract.methods.submitAnswer(questionId, answer).send({ from: accounts[0] });
            setStatusMessage('Answer submitted!');
        } catch (error) {
            setStatusMessage('Error submitting answer.');
            console.error(error);
        }
    };

    const submitSurvey = async () => {
        if (!contract) {
            setStatusMessage('Contract not loaded.');
            return;
        }

        try {
            await contract.methods.completeSurvey().send({ from: accounts[0] });
            setStatusMessage('Survey submitted!');
        } catch (error) {
            setStatusMessage('Error submitting survey.');
            console.error(error);
        }
    };
    return (
        <div>
            <h1>Sustainability Survey</h1>
            {/* Survey questions and answer buttons here */}
            <button onClick={() => submitAnswer(1, true)}>Yes</button>
            <button onClick={() => submitAnswer(1, false)}>No</button>
            {/* ... more questions ... */}
            <button onClick={submitSurvey}>Submit Survey</button>
            <p>{statusMessage}</p>
        </div>
    );
};

export default SurveyComponent;

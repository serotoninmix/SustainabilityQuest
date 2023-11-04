// src/Web3Initializer.js
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import SurveyContract from './contracts/Survey.json'; // Update the path as needed

const Web3Initializer = ({ children }) => {
    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [contract, setContract] = useState(null);

    useEffect(() => {
        const initWeb3 = async () => {
            try {
                // Initialize web3 and set it to state
                // Continue with getting accounts and initializing contract
            } catch (error) {
                alert('Failed to load web3, accounts, or contract. Check console for details.');
                console.error(error);
            }
        };

        initWeb3();
    }, []);

    return (
        <>
            {/* Pass web3 and contract to children or manage them here */}
            {children}
        </>
    );
};

export default Web3Initializer;

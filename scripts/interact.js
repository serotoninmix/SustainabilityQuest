const Web3 = require('web3');
const SurveyContract = require('path/to/contract/build/contracts/Survey.json');

const web3 = new Web3('http://localhost:8545'); // Or the address of your Ethereum node

const surveyContractAddress = '<YOUR_CONTRACT_ADDRESS>';
const surveyContract = new web3.eth.Contract(SurveyContract.abi, surveyContractAddress);

async function submitSurveyAnswer(questionId, answer) {
    const accounts = await web3.eth.getAccounts();
    const receipt = await surveyContract.methods.submitAnswer(questionId, answer).send({from: accounts[0]});
    console.log('Survey answer submitted', receipt);
}

// Example of using the function
submitSurveyAnswer(1, true)
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

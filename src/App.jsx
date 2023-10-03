import { useState, useEffect } from 'react'
import Web3 from "web3"
import './App.css'
import WriteContract from './Components/WriteContract'
import ReadContract from './Components/ReadContract'
import ABI from './ABI/ABI.json'

/* # Mini DAPP → working

## step-by-step

1)  npm create vite@latest → cd project name → npm install → npm run dev

2) npm install web3    (it must be version → "web3": "^1.10.2” )

3)  steps to perform in code

- 1st step - create all components (e.g. - read contract and write contract )
- 2nd step - Connect fronted-blockchain
- Create an instance with smart contract (means an instance of smart contract - make an  object of smart contract to interact with smart contract  )

4)  To interact(read, write) with our smart contract - we need two things - 1) ABI of SC and 2) contract Address

 */

function App() {
  const [state, setState] = useState({web3:null,contract:null})

  useEffect(() => {
    const template = async() => {
      let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
     
      const contractAddress = "0xd24a711b5F912eF500FE27Fa214d1CAE07b10048";
      const contractInstance = new web3.eth.Contract(ABI,contractAddress);
      setState({web3:web3,contract:contractInstance})
    } 
    template()   // here we always call that function
  }, [])

  return (
    <>
      <WriteContract state={state}/>
      <ReadContract state={state}/>
    </>
  )
}

export default App

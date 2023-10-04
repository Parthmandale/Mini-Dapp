//input box
// button

const WriteContract = ({States})=>{
    const { web3, contrac } = States;

    const writeData =async(e)=>{
       e.preventDefault()  
       const data = document.querySelector("#data").value;
       const accounts = await web3.eth.getAccounts();
       await contrac.methods.store(data).send({from:accounts[0]})
       console.log(data+ " updated")
    }
    return <>
        <form onSubmit={writeData}>
        <input id="data"></input>
        <button>Submit</button>
        </form></>
 }
 export default WriteContract; 

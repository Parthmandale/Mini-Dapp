import { useState,useEffect } from "react";

const ReadContract = ({ States }) => {
  const [data,setData]=useState("No data")
  const { contrac } = States; // Destructuring contract from state - contract address and contract 

  useEffect(() => {
    const readData = async () => {
      const data = await contrac.methods.retrieve().call();
      setData(data)
    }
    contrac && readData();      // readData function only getting exectuded when the contract is true(working having value in it)
  }, [contrac]); // Adding contract as a dependency

  return <>
  <p>Read Contract : {data}</p>
  </>;
}

export default ReadContract;
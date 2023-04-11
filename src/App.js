import "./styles.css";
import {useState} from "react";
import {createContext} from "react";
import {useContext} from "react";

let moneyContext = createContext(null);
function Me()
{
  const {money} = useContext(moneyContext)
  return (
    <>
      <p>{money}</p>
    </>
  )
}

function Parent()
{
  return (
    <>
      <Me/>
    </>
  )
}

function Grandfather()
{
  return (
    <>
      <Parent/>
    </>
  )
}

export default function App() {
  let [money, setMoney] = useState(200)
  
  return (
    <>
      <moneyContext.Provider value = {{money,setMoney}}>
        <Grandfather></Grandfather>
      </moneyContext.Provider>
    </>
  );
}

# useContext-Syntax-Practice
Created with CodeSandbox

# useContext

As we know the process of prop drilling if the need the value from the parent to the grandchild we have to pass value  to the every component in between these both components.

example :

```jsx
import "./styles.css";
import {useState} from "react";

function Nenu(props)
{
  let {money} = props;
  return <>{money}</>
}

function Nanna(props)
{
  let {money} = props;
  return <><Nenu money = {money}></Nenu></>
}

function Tatayya(props)
{
  let {money} = props;
  return <><Nanna money = {money} ></Nanna></>
}

export default function App() {

  let [money] = useState(200);
  return (
    <div className="App">
      <Tatayya money = {money}></Tatayya>
    </div>
  );
}
```

in the example we can see tatayya took 200 from app and gave it to nanna which was given to nenu 

nenu only used the money 

but nanna didnt use the money 

if nanna doesnt use the money why should be pass to nanna 

tatayya can directly send to nenu and it will be cood condition

this is not inheritence concept in javascript.

but it just the function call

structure:

**function App (function Tatayya(function Nanna(function Nenu)))**

**each function takes parameters function Tatayya(money)**

in this situation the useContext comes into picture

diagram :

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/255d42df-f3b8-4516-859d-f68e4d826b9b/Untitled.png)

### useContext :

```jsx
import "./styles.css";
import {useState} from "react";
import moneyContext from "./contexts/moneyContext";
import {useContext} from "react";

function Nenu()
{
  const value = useContext(moneyContext)
  return <>{value}</>
}

function Nanna()
{
  
  return <><Nenu></Nenu></>
}

function Tatayya(props)
{
  let {money} = props;
  return <><Nanna money = {money} ></Nanna></>
}

export default function App() {

  let [money] = useState(200);
  return (
    <moneyContext.Provider value = {money}>
      <div className="App">
        <Tatayya></Tatayya>
      </div>
    </moneyContext.Provider>
  );
}
```

if all components are written inside the single component

Steps to use this useContext hook

step 1 : firstly create a folder and add a file.js 

```jsx
//moneyContext.js

```

step 2 :

create a context by imporing

and then export it by passing the default value

```jsx
//moneyContext.js
import {createContext} from "react";
export default createContext(null);
```

step 3 :

import the created context with filename

use the wrapper and pass the value you want to give.

this will be applicable to all the childs to get the adress odf the moneyContext

```jsx
//App.js
import moneyContext from "./contexts/moneyContext";
import {useState} from "react";

export default function App() {

  let [money] = useState(200);
  return (
    <moneyContext.Provider value = {money}>
      <div className="App">
        <Tatayya></Tatayya>
      </div>
    </moneyContext.Provider>
  );
}
```

step 4 :

which ever child needs the money now can go to the address created and get the money

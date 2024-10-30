import "./App.css";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import { useState } from "react";
import Selected from "./components/Selected/Selected";
import Selections from "./components/Selections/Selections";

function App() {
  const [isActiveAvailable, updateIsActiveAvailable] = useState(true);
  const [isActiveSelected, updateIsActiveSelected] = useState(false);
  const [amountAvailable, updateAmount] =useState(0);
  const [cart, updateCart] = useState([])

  // Button Handlers
  const claimBtnHandler = () =>{
    updateAmount(amountAvailable+6000000)
  };
  const choosePlayerHandler = (player) =>{
  
      const newCart = [...cart,player]
      updateCart(newCart);
  }

  const availableBtnHandler = () => {
    updateIsActiveAvailable(true);
    updateIsActiveSelected(false);
  };
  const selectedBtnHandler = () => {
    updateIsActiveAvailable(false);
    updateIsActiveSelected(true);
  };

  return (
    <>
      <Header
        amountAvailable ={amountAvailable}
        claimBtnHandler ={claimBtnHandler}
      ></Header>
      <Selections
        availableBtnHandler={availableBtnHandler}
        selectedBtnHandler={selectedBtnHandler}
        isActiveSelected ={isActiveSelected}
        isActiveAvailable ={isActiveAvailable}
      ></Selections>
      {
        isActiveAvailable?(
          <Players
          choosePlayerHandler= {choosePlayerHandler}
        ></Players>
        ):(
          <Selected
            cart ={cart}
          >

          </Selected>
        )
      }
      
      
    </>
  );
}

export default App;

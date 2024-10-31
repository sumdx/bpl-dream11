import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Players from "./components/Players/Players";
import { useState } from "react";
import Selected from "./components/Selected/Selected";
import Selections from "./components/Selections/Selections";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isActiveAvailable, updateIsActiveAvailable] = useState(true);
  const [isActiveSelected, updateIsActiveSelected] = useState(false);
  const [amountAvailable, updateAmount] = useState(0);
  const [cart, updateCart] = useState([]);

  // Button Handlers
  const dltbtnhandler =(playerId) =>{
      const afterDltCart = cart.filter(item => item.playerId != playerId);
      updateCart(afterDltCart);
      console.log(cart)
  }
  const claimBtnHandler = () => {
    updateAmount(amountAvailable + 6000000);
    toast.success("6000000 coin added to the account", {
      position: "top-center",
    });
  };
  const choosePlayerHandler = (player) => {
    if (amountAvailable >= player.biddingPrice) {
      if (cart.find((item) => item.playerId === player.playerId)) {
        toast.warn("Player already in the cart.", {
          position: "top-center",
        });
      } else {
        if (cart.length < 6) {
          const newCart = [...cart, player];
          updateCart(newCart);
          const newAmount = amountAvailable - player.biddingPrice;
          updateAmount(newAmount);
          toast.success(`${player.name} added to the cart.`, {
            position: "top-center",
          });
        }else{
          toast.warn("Not enough space in the cart.", {
            position: "top-center",
          });
        }
      }
    } else {
      toast.warn("Not enough money.", {
        position: "top-center",
      });
    }
  };

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
        amountAvailable={amountAvailable}
        claimBtnHandler={claimBtnHandler}
      ></Header>
      <Selections
        availableBtnHandler={availableBtnHandler}
        selectedBtnHandler={selectedBtnHandler}
        isActiveSelected={isActiveSelected}
        isActiveAvailable={isActiveAvailable}
        cart={cart}
        
      ></Selections>
      {isActiveAvailable ? (
        <Players choosePlayerHandler={choosePlayerHandler}></Players>
      ) : (
        <Selected
          cart={cart}
          dltbtnhandler={dltbtnhandler}
          availableBtnHandler={availableBtnHandler}
        ></Selected>
      )}
      <ToastContainer />
      <Footer></Footer>
    </>
  );
}

export default App;

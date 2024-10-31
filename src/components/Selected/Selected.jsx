import Cart from "../Cart/Cart";


const Selected = ({cart,availableBtnHandler,dltbtnhandler}) => {
    console.log(cart)
    return (
        <ol className=" container mx-auto">
            
            {
                cart.map(cartItem => <Cart dltbtnhandler={dltbtnhandler} cartItem={cartItem}></Cart>)
            }
            <button onClick={availableBtnHandler} className="p-4 rounded-xl bg-yellow-400 text-black font-bold">Add more player</button>
        </ol>
    );
};

export default Selected;
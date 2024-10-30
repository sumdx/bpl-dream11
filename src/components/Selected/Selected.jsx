import Cart from "../Cart/Cart";


const Selected = ({cart}) => {
    console.log(cart)
    return (
        <ol className=" container mx-auto">
            
            {
                cart.map(cartItem => <Cart cartItem={cartItem}></Cart>)
            }
        </ol>
    );
};

export default Selected;
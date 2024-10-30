import { MdDelete } from "react-icons/md";

const Cart = ({cartItem}) => {
    const {image,name,role} =cartItem
    return (
        
        <div className="flex justify-between border border-gray-400 p-4 items-center rounded-lg mb-4">
            <div className="flex gap-6">
                <img className="max-w-20 max-h-20 object-fit rounded-xl" src={image} alt="" />
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <p>{role}</p>
                </div>
            </div>
            <p className="text-2xl text-red-700"><MdDelete></MdDelete></p>
        </div>
        
    );
};

export default Cart;
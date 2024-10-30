import Logo from "../../images/logo.png"
import { RiCoinsFill } from "react-icons/ri";

const Navbar = ({amountAvailable}) => {
    return (
        <div className=" mx-auto items-center flex container justify-between mt-6 sticky top-0 bg-white">
            <img src={Logo} alt="" />
            <ul className="flex gap-6 items-center">
                <li>Home</li>
                <li>Fixtures</li>
                <li>Team</li>
                <li>Schedules</li>
                <li className="border p-4 rounded-md"><button className="flex gap-2 ">{amountAvailable} Coin <p className="text-yellow-500 text-2xl"><RiCoinsFill></RiCoinsFill></p></button></li>
            </ul>
        </div>
    );
};

export default Navbar;
import Navbar from "../Navbar/Navbar";
import "../../components/Header/Header.css";
import HeaderImg from "./../../images/bg-shadow.png";
import HeaderLogo from "./../../images/banner-main.png";

const Header = ({amountAvailable,claimBtnHandler}) => {
  return (
    <header >
      <Navbar
        amountAvailable= {amountAvailable}
      ></Navbar>
      <div className=" container mx-auto rounded-3xl bg-div">
        <div className="mx-auto flex flex-col items-center justify-center p-8 mt-6 gap-4">
          <img src={HeaderLogo} alt="" />
          <h1 className="text-white text-4xl font-bold mt-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <h3 className="text-lg text-gray-300">Beyond Boundaries Beyond Limits</h3>
            <div className="border hover:border-yellow-100 active:scale-90 duration-75 border-yellow-400 rounded-2xl p-1">
            <button onClick={()=>claimBtnHandler()} className="hover:bg-yellow-100  p-4 rounded-xl bg-yellow-400 text-black font-bold">Claim Free Credit</button>
            </div>
          
        </div>
      </div>
    </header>
  )
};

export default Header;

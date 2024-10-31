import "../../components/Footer/Footer.css";
import Logo from "./../../images/logo-footer.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 relative pt-40 mt-48">
      <div className="container mx-auto footer-float text-center py-20 border m-2 rounded-2xl flex flex-col gap-6 absolute left-0 right-0 -top-48">
        <h1 className=" text-4xl font-bold">Subscribe to our Newsletter</h1>
        <p>Get the latest updates and news right in your inbox!</p>
        <div>
          <input
            className="px-4 py-2 rounded-lg border"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="ml-4 px-4 py-2 bg-black rounded-lg bg-gradient-r from-pink-800 to-orange-400 text-center text-white">
            Subscibed
          </button>
        </div>
      </div>
      <img className="mx-auto mb-14" src={Logo} alt="" />
      <div className="text-gray-400 ">
        <div className="border-b border-gray-600 mb-4">
          <div className="container grid grid-cols-3 mx-auto justify-evenly gap-20 mb-10">
            <div>
              <h1 className="text-white font-bold mb-4">About Us</h1>
              <p>
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div>
              <h1 className="text-white font-bold mb-4">Quick Links</h1>
              <ul className="list-disc">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h1 className="text-white font-bold mb-4">About Us</h1>
              <p>Subscribe to our newsletter for the latest updates.</p>
              <div>
                <input
                  className="px-4 py-2 rounded-l-lg"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <button className="px-4 py-2 border-none bg-green-400 text-center rounded-r-lg text-white">
                  Subscibed
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center pb-4">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

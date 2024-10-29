import Logo from "../../images/logo.png"

const Navbar = () => {
    return (
        <div className=" mx-auto items-center flex container justify-between mt-6">
            <img src={Logo} alt="" />
            <ul className="flex gap-6">
                <li>Home</li>
                <li>Fixtures</li>
                <li>Team</li>
                <li>Schedules</li>
                <li>Button</li>
            </ul>
        </div>
    );
};

export default Navbar;
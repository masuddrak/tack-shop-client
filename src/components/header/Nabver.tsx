import { Link } from "react-router-dom";
import CustomLink from "../common/CustomLink";
import Button from "../common/Button";


const Nabver = () => {

    return (
       <nav className="bg-gray-950 fixed w-full py-2">
         <nav className="flex justify-between items-center container mx-auto">
            <Link to="/" className="text-primary text-2xl font-extrabold">TrackShop</Link>
            <ul className="flex gap-4">
                <CustomLink pathName={"/"} title="Home"></CustomLink>
                <CustomLink pathName={"/shop"} title="Shop"></CustomLink>
                <CustomLink pathName={"/add-product"} title="Add Product"></CustomLink>
            </ul>
            <div>
              <Link to="/signup"> <Button name="Login"></Button></Link>
            </div>
        </nav>
       </nav>
    );
};

export default Nabver;
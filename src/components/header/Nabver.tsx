import { Link } from "react-router-dom";
import CustomLink from "../common/CustomLink";
import Button from "../common/Button";
import useAuth from "../../hooks/useAuth";
interface UserInterface{
  user:object;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  logOut: () => Promise<void>;
}
const Nabver = () => {
const {user,logOut}=useAuth() as UserInterface
    return (
       <nav className="bg-gray-950 bg-opacity-70 fixed w-full py-2">
         <nav className="flex justify-between items-center container mx-auto">
            <Link to="/" className="text-primary text-2xl font-extrabold">TrackShop</Link>
            <ul className="flex gap-4">
                <CustomLink pathName={"/"} title="Home"></CustomLink>
                <CustomLink pathName={"/shop"} title="Shop"></CustomLink>
                <CustomLink pathName={"/add-product"} title="Add Product"></CustomLink>
            </ul>
            <div>
              {
                user?<button onClick={()=>logOut()}>logut</button>:<Link to="/signup"> <Button name="Login"></Button></Link>
              }
            </div>
        </nav>
       </nav>
    );
};

export default Nabver;
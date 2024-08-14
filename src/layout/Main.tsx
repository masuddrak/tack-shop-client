import { Outlet } from "react-router-dom";
import Nabver from "../components/header/Nabver";

const Main = () => {
  return (
    <main className="relative">
      <Nabver></Nabver>
      <div className="pt-10 container mx-auto">
        <Outlet></Outlet>
      </div>
    </main>
  );
};

export default Main;

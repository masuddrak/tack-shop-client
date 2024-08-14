import { NavLink } from "react-router-dom";

interface NavProps{
     pathName: string; 
     title: string;
     }
    

const CustomLink = ({pathName,title}:NavProps) => {
    return (
        <NavLink to={pathName}>{title}</NavLink>
    );
};

export default CustomLink;


const Button = ({name}:{name:string}) => {
    return (
        <button className="bg-primary px-3 font-bold py-1 rounded-sm">{name}</button>
    );
};

export default Button;
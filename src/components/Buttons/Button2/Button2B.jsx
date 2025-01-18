
// import "./style.css";

const Button = () => {
  return (
    <div className="ButtonMain">
      <button style={{ "--content": "'Hover me!'" }} className="custom-button">
        <div className="left"></div>
        Hover me!
        <div className="right"></div>
      </button>
    </div>
  );
};

export default Button;

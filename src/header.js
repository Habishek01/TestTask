import logo from "./logo.png";
import "./header.css";
export default function Header(props) {
  console.log(props.step);
  return (
    <div>
      <div className="header1">
        <img src={logo} alt="logo" height={28} width={30} />
        <h3>Eden</h3>
      </div>
      <div className="pageNumbers">
        <span className="number1">1</span>
        <hr className="h-line1"></hr>
        <hr className={`h-line2 ${props.step > 1 ? "enabled" : ""}`}></hr>
        <span className={`numbers ${props.step > 1 ? "enabled" : ""}`}>2</span>
        <hr className={`h-line2 ${props.step > 1 ? "enabled" : ""}`}></hr>
        <hr className={`h-line3 ${props.step > 2 ? "enabled" : ""}`}></hr>
        <span className={`numbers ${props.step > 2 ? "enabled" : ""}`}>3</span>
        <hr className={`h-line3 ${props.step > 2 ? "enabled" : ""}`}></hr>
        <hr className={`h-line4 ${props.step > 3 ? "enabled" : ""}`}></hr>
        <span className={`numbers ${props.step > 3 ? "enabled" : ""}`}>4</span>
      </div>
    </div>
  );
}

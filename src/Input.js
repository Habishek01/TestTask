import "./input.css";
export default function Input() {
  console.log("not");
  return (
    <div>
      <div className="inputName">Full Name</div>
      <input className="placeHolder" placeholder="Steve Jobs"></input>
      <div className="inputName">Display Name</div>
      <input placeholder="Steve" className="placeHolder"></input>
    </div>
  );
}

import "./input.css";
export default function Input2() {
  return (
    <div>
      <div className="inputName">Workspace Name</div>
      <input className="placeHolder" placeholder="Eden"></input>
      <div className="inputName">
        Workspace URL<span className="inputName2">(Optional)</span>
      </div>
      <span className=" PlaceHolderInput">
        <button className="websiteButton">www.eden.com/</button>
        <input className="example" placeholder="Example"></input>
      </span>
    </div>
  );
}

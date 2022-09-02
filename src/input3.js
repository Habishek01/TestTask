import img1 from "./img 1.png";
import img2 from "./img 2.png";

import "./input.css";
export default function Input3() {
  return (
    <div>
      <button className="inputButton">
        <img src={img1} alt="img1" height={25} width={20} />
        <div className="input3Head">For myself</div>
        <div className="input3Content">
          Write better.Think more clearly. Stay organized.
        </div>
      </button>
      <button className="inputButton inputButtonChange">
        <img src={img2} alt="img1" height={25} width={25} />
        <div className="input3Head">With my team</div>
        <div className="input3Content">
          Wikis, docs, tasks & projects, all in one place.
        </div>
      </button>
    </div>
  );
}

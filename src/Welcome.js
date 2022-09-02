import "./welcome.css";
import img3 from "./img 3.png";

export default function Welcome(props) {
  return (
    <div className="welcome">
      <div className="submittedLogo">
        {props.step === 4 && <img src={img3} alt="img3" />}
      </div>
      <h2 className="welcomeHead">
        {props.step === 1 && "Welcome! First things first..."}
        {props.step === 2 && "Let's set up a home for all your work"}
        {props.step === 3 && "How are you planning to use Eden"}
        {props.step === 4 && "Congratulations, Eren!"}
      </h2>
      <div className="welcomeContent">
        {props.step === 1 && "You can always create another workspace later"}
        {props.step === 2 && "You can always change them later."}
        {props.step === 3 &&
          "We'll streamline your setup experience accordingly"}
        {props.step === 4 &&
          "You have completed onboarding, you can start using the Eden!"}
      </div>
    </div>
  );
}

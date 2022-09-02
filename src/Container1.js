import "./App.css";
import "./container1.css";
import Header from "./header";
import Welcome from "./Welcome";
import Input from "./Input";
import Input2 from "./input2";
import { useState } from "react";
import Input3 from "./input3";

function Container1() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="App">
      <div className="firstContainer">
        <div className="secondContainer">
          <div className="innerContainer">
            <div className="header">
              <Header step={currentStep} />
            </div>
            <div className="welcome">
              <Welcome step={currentStep} />
            </div>
            <div className="input">
              {currentStep === 1 && <Input />}
              {currentStep === 2 && <Input2 />}
              {currentStep === 3 && <Input3 />}
            </div>
            <div className="submit">
              <button
                className="createButton"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                {currentStep === 4 ? "Launch Eden" : "Create Workspace"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container1;

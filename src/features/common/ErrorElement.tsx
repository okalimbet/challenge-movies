import React from "react";
import './ErrorElement.css';
 
interface ErrorElementProps {
  errorText?: string;
}

const ErrorElement:React.FC<ErrorElementProps> = ({errorText}): JSX.Element => {
  return (
    <div className="error-element">
      <img alt="error" src={require("../../assets/error-icon.png")}/>
      <p className="error-title">Something went wrong on our end</p>
      <p className="error-subtitle">You can try reloading the screen or come back later.</p>
      {errorText &&
        <p className="error-details">{`ERROR: ${errorText}`}</p>
      }
    </div>
  )
}

export default ErrorElement;
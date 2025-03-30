import { useContext } from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie.jsx";
import { greeting, splashScreen } from "../../portfolio.js";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const { isDark } = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        {/* <span className="grey-color"> &lt;</span> */}
        <span className="splash-title">{greeting.username}</span>
        {/* <span className="grey-color">/&gt;</span> */}
      </div>
    </div>
  );
}

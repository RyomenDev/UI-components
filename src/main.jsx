import React, { useEffect, useState } from "react";
import SplashScreen from "./Advanced/containers/splashScreen/SplashScreen";
import { StyleProvider } from "./Advanced/contexts/StyleContext.js";
import { useLocalStorage } from "./Advanced/hooks/useLocalStorage";
import { splashScreen } from "./Advanced/portfolio";
import Education from "./Advanced/containers/education/Education.jsx";
import WorkExperience from "./Advanced/containers/workExperience/WorkExperience";
import ExperienceAccordion from "./Advanced/containers/experienceAccord/ExperienceAccording.jsx";
// import Experience from "../pages/experience/Experience";

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <div className={isDark ? "dark-mode" : null}>
        <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <>
              {/* Hii */}
              <Education />
              {/* <Projects /> */}
              <ExperienceAccordion/>
              <WorkExperience />
              {/* <Experience {...props} theme={this.props.theme} /> */}
            </>
          )}
        </StyleProvider>
      </div>
    </>
  );
}

export default App;

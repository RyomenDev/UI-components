// import React, { useEffect, useState } from "react";
// import SplashScreen from "./Advanced/containers/splashScreen/SplashScreen";
// import { StyleProvider } from "./Advanced/contexts/StyleContext.js";
// import { useLocalStorage } from "./Advanced/hooks/useLocalStorage";
// import { splashScreen } from "./Advanced/portfolio";
// import Education from "./Advanced/containers/education/Education.jsx";
// import WorkExperience from "./Advanced/containers/workExperience/WorkExperience";
// import ExperienceAccordion from "./Advanced/containers/experienceAccord/ExperienceAccording.jsx";
// import { ThemeProvider } from "styled-components";
// import { chosenTheme } from "./Advanced/theme.js";
// import { GlobalStyles } from "./Advanced/global.js";

// function App() {
//   const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
//   const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
//   const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
//     useState(true);
//   useEffect(() => {
//     if (splashScreen.enabled) {
//       const splashTimer = setTimeout(
//         () => setIsShowingSplashAnimation(false),
//         splashScreen.duration
//       );
//       return () => {
//         clearTimeout(splashTimer);
//       };
//     }
//   }, []);

//   const changeTheme = () => {
//     setIsDark(!isDark);
//   };
//   return (
//     <>
//       <ThemeProvider theme={chosenTheme}>
//         <>
//           <GlobalStyles />
//           <div>
//             <ExperienceAccordion theme={theme} />
//           </div>
//         </>
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import SplashScreen from "./Advanced/containers/splashScreen/SplashScreen";
import { StyleProvider } from "./Advanced/contexts/StyleContext.js";
import { useLocalStorage } from "./Advanced/hooks/useLocalStorage";
import { splashScreen } from "./Advanced/portfolio";
import Education from "./Advanced/containers/education/Education.jsx";
import WorkExperience from "./Advanced/containers/workExperience/WorkExperience";
import ExperienceAccordion from "./Advanced/containers/experienceAccord/ExperienceAccording.jsx";
import ProjectsAccord from "./Advanced/containers/projectsAccord/Projects.jsx";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./Advanced/theme.js";
import EducationAccord from "./Advanced/containers/educationAccord/EducationAccord.jsx";
// import { GlobalStyles } from "./Advanced/global.js";

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
      return () => clearTimeout(splashTimer);
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <div className={isDark ? "dark-mode" : null}>
          <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
            {isShowingSplashAnimation && splashScreen.enabled ? (
              <SplashScreen />
            ) : (
              <>
                {/* <GlobalStyles /> */}
                <EducationAccord theme={chosenTheme} />
                <Education theme={chosenTheme} />
                {/* <Projects /> */}
                <ExperienceAccordion theme={chosenTheme} />
                <WorkExperience theme={chosenTheme} />
                <ProjectsAccord theme={chosenTheme} />
              </>
            )}
          </StyleProvider>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

// import Error404 from "../pages/errors/error404/Error";
//  <Route path="*" element={<Error404 theme={theme} />} />;

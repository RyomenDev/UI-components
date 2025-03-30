// import React from "react";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
// import PublicationCard from "../../components/publicationsCard/PublicationCard";
// import Button from "../../components/button/Button";
// import TopButton from "../../components/topButton/TopButton";
// import ProjectsData from "../../shared/opensource/projects.json";
import {
  //   greeting,
  projectsHeader,
  //   publicationsHeader,
  //   publications,
} from "../../portfolio.js";
import { motion } from "framer-motion";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const Projects = ({ theme, onToggle }) => {
  return (
    <div className="projects-main">
      {/* <Header theme={theme} /> */}
      <div className="basic-projects">
        <motion.div
          className="projects-heading-div"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="projects-heading-img-div">
            <ProjectsImg theme={theme} />
          </div>
          <div className="projects-heading-text-div">
            <h1 className="projects-heading-text" style={{ color: theme.text }}>
              {projectsHeader.title}
            </h1>
            <p
              className="projects-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {projectsHeader.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* <div className="repo-cards-div-main">
        {ProjectsData.data.map((repo, index) => (
          <motion.div
            key={repo.id || index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GithubRepoCard repo={repo} theme={theme} />
          </motion.div>
        ))}
      </div> */}

      {/* <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
      /> */}

      {/* {publications.data.length > 0 && (
        <motion.div
          className="basic-projects"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="publications-heading-div">
            <div className="publications-heading-text-div">
              <h1
                className="publications-heading-text"
                style={{ color: theme.text }}
              >
                {publicationsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {publicationsHeader.description}
              </p>
            </div>
          </div>
        </motion.div>
      )} */}

      {/* <div className="repo-cards-div-main">
        {publications.data.map((pub, index) => (
          <motion.div
            key={pub.id || index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PublicationCard pub={pub} theme={theme} />
          </motion.div>
        ))}
      </div> */}

      {/* <Footer theme={theme} onToggle={onToggle} /> */}
      {/* <TopButton theme={theme} /> */}
    </div>
  );
};

export default Projects;

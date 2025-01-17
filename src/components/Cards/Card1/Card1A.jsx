import PropTypes from "prop-types";
import dark_rider_cover from "./dark_rider-cover.jpg";
import dark_rider_title from "./dark_rider-title.png";
import dark_rider_character from "./dark_rider-character.webp";
import force_mage_cover from "./force_mage-cover.jpg";
import force_mage_title from "./force_mage-title.png";
import force_mage_character from "./force_mage-character.webp";

const Cards = ({ coverImage, titleImage, characterImage }) => {
  const perspective2500 = {
    perspective: "2500px",
  };

  const wrapperStyles = {
    position: "absolute",
    width: "100%",
    zIndex: "-1",
    borderRadius: "5px",
    transition: "all 0.5s",
  };

  const hoverWrapperStyles = {
    transform: "perspective(900px) translateY(-5%) rotateX(25deg)",
    boxShadow: "2px 35px 32px -8px rgba(0, 0, 0, 0.75)",
    borderRadius: "5px",
  };

  const beforeStyles = {
    content: "''",
    position: "absolute",
    left: "0",
    width: "100%",
    borderRadius: "5px",
    top: "0",
    height: "100%",
    background:
      "linear-gradient(to top, transparent 46%, rgba(12, 13, 19, 0.5) 68%, rgba(12, 13, 19) 97%)",
    opacity: 0,
    transition: "all 0.5s",
  };

  const afterStyles = {
    content: "''",
    position: "absolute",
    left: "0",
    width: "100%",
    borderRadius: "5px",
    bottom: "0",
    height: "80px",
    background:
      "linear-gradient(to bottom, transparent 46%, rgba(12, 13, 19, 0.5) 68%, rgba(12, 13, 19) 97%)",
    opacity: 0,
    transition: "all 0.5s",
  };

  const titleStyles = {
    transition: "transform 0.5s",
  };

  const characterStyles = {
    transition: "opacity 0.5s, transform 0.5s",
  };

  return (
    <>
      <a href="#" style={perspective2500}>
      <div className="card relative w-[200px] h-[300px] flex justify-center items-end px-9 rounded-md transform-3d">
        <div
          className="wrapper"
          style={{ ...wrapperStyles, ...hoverWrapperStyles }}
        >
          <img
            src={coverImage}
            alt="Cover"
            className="cover-image w-full h-full object-cover rounded-md"
          />
        </div>
        <img
          src={titleImage}
          alt="Title"
          className="title w-full transition-transform duration-500"
          style={titleStyles}
        />
        <img
          src={characterImage}
          alt="Character"
          className="character absolute w-full opacity-0 transition-opacity duration-500 z-[-1]"
          style={characterStyles}
        />
        <div className="before" style={beforeStyles} />
        <div className="after" style={afterStyles} />
      </div>
    </a>

      <a href="#" style={{ perspective: "2500px" }}>
        <div
          className="card relative w-[calc(300px/1.5)] h-[300px] flex justify-center items-end px-9 rounded-md transform"
          style={{ transition: "all 0.5s" }}
        >
          <div
            className="wrapper absolute w-full z-[-1] rounded-md"
            style={{
              transition: "all 0.5s",
              transform:
                "perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0)",
              boxShadow: "2px 35px 32px -8px rgba(0, 0, 0, 0.75)",
            }}
          >
            <img
              src={coverImage}
              alt="Cover"
              className="cover-image w-full h-full object-cover rounded-md"
            />
          </div>
          <img
            src={titleImage}
            alt="Title"
            className="title w-full transition-transform duration-500"
            style={{
              transform: "translate3d(0%, -50px, 100px)",
            }}
          />
          <img
            src={characterImage}
            alt="Character"
            className="character absolute w-full opacity-0 transition-all duration-500 z-[-1]"
            style={{
              opacity: 1,
              transform: "translate3d(0%, -30%, 100px)",
            }}
          />
          <div
            className="before absolute left-0 w-full top-0 h-full rounded-md"
            style={{
              opacity: 0,
              transition: "all 0.5s",
              backgroundImage:
                "linear-gradient(to top, transparent 46%, rgba(12, 13, 19, 0.5) 68%, rgba(12, 13, 19) 97%)",
            }}
          />
          <div
            className="after absolute left-0 w-full bottom-0 h-[80px] rounded-md"
            style={{
              opacity: 1,
              transition: "all 0.5s",
              backgroundImage:
                "linear-gradient(to bottom, transparent 46%, rgba(12, 13, 19, 0.5) 68%, rgba(12, 13, 19) 97%)",
            }}
          />
        </div>
      </a>
    </>
  );
};

Cards.propTypes = {
  coverImage: PropTypes.string.isRequired,
  titleImage: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
};

const Card = () => {
  return (
    <div className="border-4 border-red-600 flex flex-wrap justify-center gap-6 p-6 items-center bg-gray-100 min-h-screen">
      <Cards
        coverImage={dark_rider_cover}
        titleImage={dark_rider_title}
        characterImage={dark_rider_character}
      />
      <Cards
        coverImage={force_mage_cover}
        titleImage={force_mage_title}
        characterImage={force_mage_character}
      />
    </div>
  );
};

export default Card;

import "./style.css"
import PropTypes from "prop-types";
import dark_rider_cover from "./dark_rider-cover.jpg";
import dark_rider_title from "./dark_rider-title.png";
import dark_rider_character from "./dark_rider-character.webp";
import force_mage_cover from "./force_mage-cover.jpg";
import force_mage_title from "./force_mage-title.png";
import force_mage_character from "./force_mage-character.webp";

const Cards = ({ coverImage, titleImage, characterImage }) => {
  return (
    <a href="#">
      <div className="card">
        <div className="wrapper">
          <img
            src={coverImage}
            alt="Cover"
            className="cover-image"
          />
        </div>
        <img
          src={titleImage}
          alt="Title"
          className="title"
        />
        <img
          src={characterImage}
          alt="Character"
          className="character"
        />
      </div>
    </a>
  );
};

Cards.propTypes = {
  coverImage: PropTypes.string.isRequired,
  titleImage: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
};

const Card = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100 min-h-screen">
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
    </>
  );
};

export default Card;

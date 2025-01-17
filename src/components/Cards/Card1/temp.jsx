import PropTypes from "prop-types";
import dark_rider_cover from "./dark_rider-cover.jpg";
import dark_rider_title from "./dark_rider-title.png";
import dark_rider_character from "./dark_rider-character.webp";
import force_mage_cover from "./force_mage-cover.jpg";
import force_mage_title from "./force_mage-title.png";
import force_mage_character from "./force_mage-character.webp";

const Cards = ({ coverImage, titleImage, characterImage }) => {
  return (
    <>
      <a href="#">
        <div className="relative flex justify-center items-end px-9 perspective-[2500px] mx-12 rounded-md w-[200px] h-[300px] group transition-all">
          <div className="absolute inset-0 w-full h-full bg-cover bg-center rounded-md transition-transform duration-500 group-hover:perspective-[900px] group-hover:translate-y-[-5%] group-hover:rotate-x-[25deg] group-hover:shadow-[2px_35px_32px_-8px_rgba(0,0,0,0.75)]">
            <img
              src={coverImage}
              alt="Cover"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <img
            src={titleImage}
            alt="Title"
            className="absolute top-0 left-0 w-full transition-transform duration-500 group-hover:translate-y-[-50px] group-hover:translate-z-[100px]"
          />
          <img
            src={characterImage}
            alt="Character"
            className="absolute bottom-0 opacity-0 transition-opacity transform duration-500 group-hover:opacity-100 group-hover:translate-y-[-30%] group-hover:translate-z-[100px]"
          />
        </div>
      </a>
      <a href="#">
        <div
          className="relative w-[calc(300px/1.5)] h-[300px] flex justify-center items-end px-9 rounded-md transform"
          style={{ transition: "all 0.5s" }}
        >
          <div
            className=" absolute w-full z-[-1] rounded-md"
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
              className=" w-full h-full object-cover rounded-md"
            />
          </div>
          <img
            src={titleImage}
            alt="Title"
            className=" w-full transition-transform duration-500"
            style={{
              transform: "translate3d(0%, -50px, 100px)",
            }}
          />
          <img
            src={characterImage}
            alt="Character"
            className=" absolute w-full opacity-0 transition-all duration-500 z-[-1]"
            style={{
              opacity: 1,
              transform: "translate3d(0%, -30%, 100px)",
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
    <div className=" flex flex-wrap justify-center gap-6 p-6 items-center bg-gray-100 min-h-screen">
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

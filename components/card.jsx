import LaunchIcon from "../components/icons/launch";
import IconButton from "../components/iconButton";

const Card = ({ url, imgSrc, title, description, tags }) => (
  <div
    className="max-w-sm ounded overflow-hidden relative
  shadow-xl transition duration-200 hover:shadow-lg "
  >
    {imgSrc ? (
      <div className="bg-pink-200">
        <img
          className="w-full transform duration-300 image hover:image-hover"
          src={imgSrc}
          alt={title}
        ></img>
      </div>
    ) : (
      ""
    )}
    <div className="px-6 py-4">
      <p className="font-bold text-xl mb-2 text-gray-200">{title}</p>
      <p className="text-gray-500 text-base">{description}</p>
    </div>
    <div className="h-24"></div>
    <div
      className="text-sm flex flex-row items-center w-9/12 mr-4 flex-wrap absolute"
      style={{ left: "1.5rem", bottom: "1.5rem" }}
    >
      {tags.map((tag) => {
        return (
          <span
            key={tag}
            className="inline-block bg-gray-500 rounded-full px-3 py-1
          text-xs font-semibold text-gray-800 m-1"
          >
            {tag}
          </span>
        );
      })}
    </div>
    <div className="absolute" style={{ right: "1.5rem", bottom: "1.5rem" }}>
      <IconButton href={url} size="4">
        <LaunchIcon />
      </IconButton>
    </div>
  </div>
);

export default Card;

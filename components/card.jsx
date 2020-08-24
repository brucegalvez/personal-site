import LaunchIcon from "../components/icons/launch";
import IconButton from "../components/iconButton";

const Card = ({ url, imgSrc, title, description, tags }) => (
  <div
    className="max-w-sm ounded overflow-hidden relative
  shadow-xl transition duration-200 hover:shadow-lg"
  >
    {imgSrc ? <img className="w-full" src={imgSrc} alt={title}></img> : ""}
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-600 text-base">{description}</p>
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
            className="inline-block bg-gray-700 rounded-full px-3 py-1
          text-xs font-semibold text-gray-900 m-1"
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

import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col p-4 bg-opacity-80 w-[250px] bg-white/5 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`artists/${track?.artists[0].adamid}`)}
    >
      <img
        src={track?.images?.coverart}
        alt="artist"
        className="w-full h-56 rounedd-lg"
      />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;

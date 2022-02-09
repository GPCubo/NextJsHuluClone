import { data } from "autoprefixer";
import { SeeIcon } from "../icons/SeeIcon";

export const Movie = ({doc}) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original"

  return <div className="group cursor-pointer transition transform sm:hover:scale-105  max-w-xs">
      <img src={BASE_URL+doc.poster_path}/>
      <div className="p-2">
          <p className="truncate max-w-md">{doc.overview}</p>
          <h2 className="mt-1 text-2xl text-white ease-in-out group-hover:font-bold transition-all">
              {doc.title || doc.original_name}
          </h2>
          <p className="opacity-0 group-hover:opacity-100">
              {
                  doc.media_type && data.media__type
              }
              {" "}
              {
                  doc.release_date || doc.first_air_date
              }
              {" "}
              <SeeIcon/>
              {doc.vote_count}
          </p>
      </div>
  </div>;
};

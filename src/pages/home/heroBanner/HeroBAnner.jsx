import { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

const HeroBAnner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)].backdrop_path;
    setBackground(bg);
  }, [data]);



  const searchQueryHandler = (event) => {
    console.log(event.key);
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);

    }
  };

  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        
      </div>
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome, </span>
          <span className="subTitle">Milliones of movies, Tv shows and people to discover.
            Explore now
          </span>
          <div className="searchInput">
            <input type="text"
              placeholder="Search for a movie or tv show..."
              onChange={() => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler} />
            <button>Search</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroBAnner

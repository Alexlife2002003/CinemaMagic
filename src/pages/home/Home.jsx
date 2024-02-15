
import HeroBanner from "./heroBanner/HeroBanner"
import "./home.scss"
import Trending from "./trending/Trending";
import Popular from "./Popular/Popular";
import TopRated from "./topRated/TopRated";


const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;

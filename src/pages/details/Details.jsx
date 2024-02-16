import "./style.scss"

import DetailsBanner from "./detailsBanner/DetailsBanner";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";



const Details = () => {
  const {mediaType, id}=useParams();
  const {data,loading}=useFetch(`/${mediaType}/${id}/videos`)

  return (
    <div>
      <DetailsBanner />

    </div>
  );
};

export default Details

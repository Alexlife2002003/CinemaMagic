import "./style.scss"

const Details = () => {
  
  const {data, loading} = useFetch('/movie/{movieId}')

  return (
    <div>
      Details
    </div>
  );
};

export default Details

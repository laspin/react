import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const URL = 'http://pets-v2.dev-apis.com/pets?id=';

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doFetchDetails = async () => {
      let res = await fetch(`${URL}${id}`);
      let data = await res.json();
      setDetails(data.pets[0]);
      setLoading(false);
    };
    doFetchDetails();
    return () => doFetchDetails;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {loading ? (
        <h2 id="loading">Loading...</h2>
      ) : (
        <div className="details">
          <div className="details-info">
            <h1>{details.name}</h1>
            <h2>
              {details.animal} — {details.breed} — {details.city}
            </h2>
            <button>Adopt {details.name}</button>
            <p>{details.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;

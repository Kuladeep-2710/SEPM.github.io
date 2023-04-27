import { useRouteError } from "react-router-dom";

const Error = () => {
  let error = useRouteError();
  return (
    <div>
      <h1>Oops !</h1>
      <h2>Somenthing Went Wrong</h2>
      <h3>{error.status + " : " + error.statusText}</h3>
    </div>
  );
};

export default Error;

import Wrapper from "../wrappers/About"
import img from '../assets/not-found.svg';
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img}></img>
          <h3>Ohh!</h3>
          <p>We can't seem to find page you were looking for</p>
          <Link to='/'>back home</Link>
        </div>
      </Wrapper>
    )
  }
  return (<Wrapper>something went wrong</Wrapper>

  )
}

export default Error

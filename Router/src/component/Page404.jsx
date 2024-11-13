import {Link} from "react-router-dom"

function Page404() {
  return <>
  <h1> 404 page</h1>
  <p>this url is not found</p>
  <Link to="/">go to home page </Link>

  </>
}

export default Page404;
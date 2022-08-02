import { Link } from "@remix-run/react";

export default function Love() {
  return (
    <div>
      <p>
        Whoa, this is a nested route! We render the <code>/about</code> layout
        route component, and its <code>Outlet</code> renders our route
        component. 🤯
      </p>
      <p>
        <strong>
          <Link to="first">
            Go back to the <code>/about</code> index.
            go on level below.
          </Link>
        </strong>
      </p>
    </div>
  );
}
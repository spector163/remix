import { Link } from "@remix-run/react";

export default function First() {
  return (
    <div>
      <p>
        Whoa, this is a nested route! We render the <code>/about</code> layout
        route component, and its <code>Outlet</code> renders our route
        component. 🤯
        this is the first component./about/love/first
      </p>
      <p>
        <strong>
          <Link to="..">
            Go back to the <code>/about</code> index.
          </Link>
        </strong>
      </p>
    </div>
  );
}
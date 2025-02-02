import { Link } from "@remix-run/react";

export default function Whoa() {
  return (
    <div>
      <p>
        Whoa, this is a nested route! We render the <code>/about</code> layout
        route component, and its <code>Outlet</code> renders our route
        component. 🤯
      </p>
      <p>
        <strong>
          <Link to="../love">
            Go ahead to the <code>/love</code> index.
          </Link>
        </strong>
      </p>
    </div>
  );
}

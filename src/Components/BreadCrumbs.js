import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  console.log(breadcrumbs)

  return (
    <>
      <aside aria-labelledby="breadcrumb-head" className="sac-breadcrumb">
        <h3 aria-hidden="true" id="breadcrumb-head">
          Breadcrumb Navigation
        </h3>
        <ul>
          {breadcrumbs.map(({ match, breadcrumb }) => (
            <li key={match.pathname}>
              <NavLink to={match.pathname}>{breadcrumb}</NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Breadcrumbs;

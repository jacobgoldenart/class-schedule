import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
  
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
      <aside aria-labelledby="breadcrumb-head" className="sac-breadcrumb">
        <ul>
          {breadcrumbs.slice(1).map(({ match, breadcrumb }) => (
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

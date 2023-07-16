import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  text: string;
};

const HomeItem: React.FC<Props> = ({ to, text }) => {
  return (
    <li className="mb-5 capitalize">
      <NavLink to={to} className="text-text hover:text-active">
        {text}
      </NavLink>
    </li>
  );
};

export default HomeItem;

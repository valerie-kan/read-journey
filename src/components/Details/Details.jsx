import { useState } from "react";
import clsx from "clsx";

import css from "./Details.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

import Dairy from "../Dairy/Dairy";
import Statistics from "../Statistics/Statistics";

const Details = ({ bookId }) => {
  const [active, setActive] = useState("hourglass");

  const icons = [
    {
      id: "hourglass",
      title: "Dairy",
      component: <Dairy />,
    },
    {
      id: "pie-chart",
      title: "Statistics",
      component: <Statistics bookId={bookId} />,
    },
  ];

  const toggle = (iconId) => {
    setActive((prev) => (prev === iconId ? null : iconId));
  };

  const activeItem = icons.find((item) => item.id === active);

  return (
    <div className={css.detailsWrapper}>
      <h3 className={css.detailsTtl}>{activeItem.title}</h3>
      <div className={css.iconsWrapper}>
        {icons.map((icon) => (
          <svg
            key={icon.id}
            className={clsx(css.detailsIcon, active === icon.id && css.active)}
            onClick={() => toggle(icon.id)}
          >
            <use href={`${sprite}#icon-${icon.id}`} />
          </svg>
        ))}
      </div>
      {activeItem.component}
    </div>
  );
};

export default Details;

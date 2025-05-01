import { useState } from "react";
import clsx from "clsx";

import css from "./Select.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

const itemsList = [
  { id: "unread", label: "Unread" },
  { id: "inProgress", label: "In progress" },
  { id: "done", label: "Done" },
  { id: "all", label: "All books" },
];

const Select = () => {
  const [selectedItem, setSelectedItem] = useState("All books");
  const [isOpen, setIsOpen] = useState(false);

  const onItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className={css.selectWrapper}>
      <div
        className={css.firstRowWrapper}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedItem}
        <svg className={css.arrowIcon}>
          <use href={`${sprite}#icon-arrow-${isOpen ? "up" : "down"}`} />
        </svg>
      </div>
      {isOpen && (
        <ul className={css.selectList}>
          {itemsList.map(({ id, label }) => (
            <li
              className={clsx(
                css.selectItem,
                selectedItem === label && css.selected
              )}
              id={id}
              onClick={() => onItemClick(label)}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;

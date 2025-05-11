import { useState } from "react";
import clsx from "clsx";

import css from "./Select.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

const itemsList = [
  { id: "unread", label: "Unread" },
  { id: "in-progress", label: "In progress" },
  { id: "done", label: "Done" },
  { id: "all", label: "All books" },
];

const Select = ({ filterBooks, selectedStatus }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedItem = itemsList.find((item) => item.id === selectedStatus);
  const currentLabel = selectedItem?.label || "All Books";

  const onItemClick = (status) => {
    setIsOpen(false);
    filterBooks(status);
  };

  return (
    <div className={css.selectWrapper}>
      <div
        className={css.firstRowWrapper}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {currentLabel}
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
                selectedStatus === id && css.selected
              )}
              key={id}
              onClick={() => onItemClick(id)}
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

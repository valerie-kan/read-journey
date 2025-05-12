import css from "./DairyListItem.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

const DairyListItem = ({ item, totalPages, handleDeleteReading }) => {
  const readPages = item.finishPage - item.startPage;
  const percentage = ((item.finishPage / totalPages) * 100).toFixed(1);

  const start = new Date(item.startReading);
  const finish = new Date(item.finishReading);

  const date = start.toLocaleDateString();
  const time = Math.floor((finish - start) / 60000);

  return (
    <li className={css.dateItem}>
      <div>
        <div className={css.markerAndDate}>
          <span className={css.whiteSquare}>
            <span className={css.blackSquare} />
          </span>
          <p className={css.date}>{date}</p>
        </div>
        <div className={css.percentAndTime}>
          <p className={css.percentage}>{percentage}%</p>
          <p className={css.readingTime}>{time} minutes</p>
        </div>
      </div>
      <div className={css.secondColumn}>
        <p className={css.pages}>{readPages} pages</p>
        <div className={css.progressAndPages}>
          <svg className={css.progressIcon}>
            <use href={`${sprite}#icon-block`} />
          </svg>
          <p className={css.pagesPerHour} style={{ textAlign: "center" }}>
            {" "}
            {item.speed} pages per hour
          </p>
          <svg
            className={css.binIcon}
            width={14}
            height={14}
            onClick={() => handleDeleteReading(item._id)}
          >
            <use href={`${sprite}#icon-trash`} />
          </svg>
        </div>
      </div>
    </li>
  );
};

export default DairyListItem;

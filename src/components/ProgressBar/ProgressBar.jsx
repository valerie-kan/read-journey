import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import css from "./ProgressBar.module.css";

const ProgressBar = ({ percentRead }) => {
  return (
    <div className={css.progressWrapper}>
      <CircularProgressbar
        value={percentRead}
        styles={buildStyles({
          pathColor: "var(--color-green)",
          trailColor: "var(--color-bg)",
          textColor: "transparent",
          pathTransitionDuration: 0.5,
        })}
      />
      <div className={css.percentage}>100%</div>
    </div>
  );
};

export default ProgressBar;

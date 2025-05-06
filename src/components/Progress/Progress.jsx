import css from "./Progress.module.css";

const Progress = () => {
  return (
    <div>
      <h3 className={css.progressTtl}>Progress</h3>
      <p className={css.progressText}>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>
      <div className={css.starCont}>
        <img className={css.star} src="var(--star)" alt="Star image" />
      </div>
    </div>
  );
};

export default Progress;

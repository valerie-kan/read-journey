import css from "./Dashboard.module.css";

const Dashboard = ({ children }) => {
  return <div className={css.dashboard}>{children}</div>;
};

export default Dashboard;

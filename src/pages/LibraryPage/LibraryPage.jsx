import AddBook from "../../components/AddBook/AddBook";
import Dashboard from "../../components/Dashboard/Dashboard";
import RecomBooksDash from "../../components/RecomBooksDash/RecomBooksDash";

const LibraryPage = () => {
  return (
    <>
      <Dashboard>
        <AddBook />
        <RecomBooksDash />
      </Dashboard>
    </>
  );
};

export default LibraryPage;

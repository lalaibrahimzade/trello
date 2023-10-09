import { useDispatch, useSelector } from "react-redux";
import boardsSlice from "../redux/boardsSlice";
import EmptyBoard from "../components/EmptyBoard";
import MainLayout from "../Layout/Layout";
import PageRouting from "../Layout/PageRouting"


function Home() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const theme = useSelector((state) => state.theme);
  const activeBoard = boards.find((board) => board.isActive);
  if (!activeBoard && boards.length > 0)
    dispatch(boardsSlice.actions.setBoardActive({ index: 0 }));

  return (
    <div className={`app ${theme}`}>
      {boards.length > 0 ? (
        <>
          <MainLayout>
            <PageRouting />
          </MainLayout>
        </>
      ) : (
        <EmptyBoard type="add" /> 
      )}
    </div>
  );
}

export default Home;

import { Outlet, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import ChapterPage from "./pages/ChapterPage";
import ChapterDetail from "./components/ChapterDetail";
import LessonPage from "./pages/LessonPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import SubLessonDetail from "./pages/SubLessonDetail";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="c" element={<ChapterPage />}>
          <Route path=":chapterTitle" element={<ChapterDetail />} />
        </Route>
        <Route
          path="v/:chapterTitle/:lessonTitle"
          element={<LessonPage />}
        ></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Outlet, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import ChapterPage from "./pages/ChapterPage";
import ChapterDetail from "./components/ChapterDetail";
import LessonPage from "./pages/LessonPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider, useTheme } from "./theme/ThemeContext";
import QuizPage from "./pages/QuizPage";
import PlayPage from "./pages/PlayPage";

const Layout = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <Navbar />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div>
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
          <Route path="quiz" element={<QuizPage />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import Root from "./ui/Root";
import Home from "./pages/Home/Home";
import Admin from "./pages/admin/Admin";
import Editor from "./pages/admin/Editor";
import Articles, { getArticles as articlesLoader } from "./pages/Articles";
import Article, { getArticle as articleLoader } from "./pages/Article";
import AllArticles from "./pages/admin/AllArticles";
import EditArticle from "./pages/admin/EditArticle";
import Preview from "./pages/admin/Preview";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "articles",
        loader: articlesLoader,
        element: <Articles />,
      },
      {
        path: "articles/:id",
        loader: async ({ params }) => {
          return articleLoader(params.id);
        },
        element: <Article />,
      },
    ],
  },
  { path: "/preview", element: <Preview /> },
  {
    path: "admin",
    element: <Admin />,
    children: [
      {
        path: "new-article",
        element: <Editor />,
      },
      {
        path: "edit-article",
        loader: articlesLoader,
        element: <AllArticles />,
      },
      {
        path: "edit-article/:id",
        loader: async ({ params }) => {
          return articleLoader(params.id);
        },
        element: <EditArticle />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

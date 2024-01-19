import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
import PollsView from "./components/shard/pollView";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./page/login";
import PollsPage from "./page/polls";
import Error404 from "./page/Error404";
import ErrorBoundary from "./components/shard/ErrorBoundry";
import { AuthenticatedRoute } from "./Routes/authenticatedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthenticatedRoute>
        <PollsPage />
      </AuthenticatedRoute>
    ),
  },
  {
    path: "/:externalUser",
    element: (
      <AuthenticatedRoute>
        <PollsPage />
      </AuthenticatedRoute>
    ),
  },
  {
    path: "/auth/:type",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <ErrorBoundary errorElement={<>Somehtng wrong</>}>
        <RouterProvider router={router}></RouterProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;

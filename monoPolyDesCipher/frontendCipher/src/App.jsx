import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MonoCipherPage from "./pages/MonoCipherPage";
import PolyCipherPage from "./pages/PolyCipherPage";
import DesCipherPage from "./pages/DesCipherPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MonoCipherPage />} />
        <Route path="/poly" element={<PolyCipherPage />} />
        <Route path="/des" element={<DesCipherPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

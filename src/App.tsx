import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import MainLayout from "./components/MainLayout";
import ScrollToTop from "./components/shared/ScrollToTop";
import CategoryVedios from "./pages/Portfolio/CategoryVedios";
import Portfolio from "./pages/Portfolio/Portfolio";
const HomePage = lazy(() => import("./pages/HomePage"));
const CategoriesPage = lazy(() => import("./pages/Portfolio/CategoriesPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />
          {/* <Route
            path="categories"
            element={
              <Suspense fallback={<Loader />}>
                <CategoriesPage />
              </Suspense>
            }
          /> */}
          <Route
            path="portfolio/:isReel"
            element={
              <Suspense fallback={<Loader />}>
                <CategoriesPage />
              </Suspense>
            }
          />
          <Route
            path="portfolio/:isReel/:id"
            element={
              <Suspense fallback={<Loader />}>
                <CategoryVedios />
              </Suspense>
            }
          />
          <Route
            path="portfolio"
            element={
              <Suspense fallback={<Loader />}>
                <Portfolio />
              </Suspense>
            }
          />

          {/* Fallback route (404) */}
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

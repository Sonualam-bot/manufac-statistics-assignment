import "./App.css";
import "@mantine/core/styles.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

const Header = lazy(() => import("./component/Header"));
const Statistics = lazy(() => import("./pages/Statistics"));

function App() {
  return (
    <div className="App">
      <MantineProvider>
        <Router>
          <Header />
          <Suspense fallback={<h1>"Loading...</h1>}>
            <Routes>
              <Route path="/" element={<Statistics />} />
            </Routes>
          </Suspense>
        </Router>
      </MantineProvider>
    </div>
  );
}

export default App;

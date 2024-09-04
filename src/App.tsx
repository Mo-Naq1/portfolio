import "./styles.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow overflow-y-auto">
        <Routes location={location}>
          <Route
            path="/"
            element={
              <SwitchTransition>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                  <Home />
                </CSSTransition>
              </SwitchTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <SwitchTransition>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                  <Contact />
                </CSSTransition>
              </SwitchTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <SwitchTransition>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                  <Projects />
                </CSSTransition>
              </SwitchTransition>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;


import "normalize.css";
import "./styles.css";
import { Layout } from "./components/Layout/Layout";
import { Input } from "./components/Input/Input";
import { FilterContext } from "./components/FilterContext/FilterContext";
import { Logo } from "./components/Logo/Logo";
import { Profile } from "./components/Profile/Profile";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header__container">
            <Logo/>
            <Profile/>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <FilterContext>
              <Input />
              <Layout />
            </FilterContext>
          </div>
        </section>
      </main>
      <footer>
        <p>Privacy Policy</p>
        <p className="corporation">2022 Eats</p>
        <p>Terms Of Service</p>
      </footer>
    </>
  );
}

export default App;

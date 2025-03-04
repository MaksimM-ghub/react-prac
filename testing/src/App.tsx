import "normalize.css";
import "./styles/main.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PlaylistPage } from "./pages/PlayListPage/PlayListPage";
import { PlaylistInfoPage } from "./pages/PlaylistInfoPage/PlaylistInfoPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { UsersPage } from "./pages/UsersPage/UsersPage";
import { UserInfoPage } from "./pages/UserInfoPage/UserInfoPage";
import { FilterProvider } from "./context/ProviderFilter";

function App() {
  return (
    <BrowserRouter>
      <>
        <header>
          <div className="container">
            <div className="header__container">
              <nav className="nav">
                <Link to={"/"}>Главная</Link>
                <Link to={"/playlist"}>Плейлисты</Link>
                <Link to={"/users"}>Пользователи</Link>
              </nav>
            </div>
          </div>
        </header>
        <main>
          <section>
            <div className="container">
              <div className="container__wrapper">
                <FilterProvider>
                  <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/playlist" element={<PlaylistPage />} />
                    <Route
                      path="/playlist/:id"
                      element={<PlaylistInfoPage />}
                    />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/users/:userId" element={<UserInfoPage />} />
                  </Routes>
                </FilterProvider>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="container"></div>
        </footer>
      </>
    </BrowserRouter>
  );
}

export default App;

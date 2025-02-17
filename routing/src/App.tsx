// import "normalize.css";
import "./styles/main.scss";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PlaylistPage } from "./pages/PlayListPage/PlayListPage";

function App() {
  return (
    <BrowserRouter>
      <>
        <header>
          <div className="container">
            <h1>Название приложения</h1>
          </div>
        </header>
        <main>
          <section>
            <div className="container">
              <nav>
                <Link to={"/"}>Главная</Link>
                <Link to={"/playlist"}>Плейлисты</Link>
              </nav>
              <Routes>
                <Route path="/" element={<div>Главная страница</div>} />
                <Route path="/playlist" element={<PlaylistPage />} />
                <Route path="/playlist/:id" element={<div>Детали плейлиста</div>} />
              </Routes>
            </div>
          </section>
        </main>
        <footer>
          <div className="container">
            <p>© 2025 Ваше имя</p>
          </div>
        </footer>
      </>
    </BrowserRouter>
  );
}

export default App;

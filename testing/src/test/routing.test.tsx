import "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import * as ReactRouterDom from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { PlaylistInfoPage } from "../pages/PlaylistInfoPage/PlaylistInfoPage";
import { MainPage } from "../pages/MainPage/MainPage";
// import { PLAYLISTS } from "../data/playlists";
import { USERS } from "../data/users";
import { UserInfoPage } from "../pages";
import { UserPage } from "../pages";
import { PlaylistPage } from "../pages";


describe("snapshot", () => {
  it("snapshot компонента MainPage", () => {
    const { asFragment } = render(<MainPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("Тест компонента PlaylistInfoPage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Тест текста по умолчанию, если нет доступного плейлиста", () => {
    jest.spyOn(ReactRouterDom, "useParams").mockReturnValue({
      id: "12345",
    });

    render(<PlaylistInfoPage />);

    expect(screen.getByText("Плейлиста с таким id нет")).toBeInTheDocument();
  });

  test("PlaylistInfoPage, проверка данных о плейлисте", () => {
    jest.spyOn(ReactRouterDom, "useParams").mockReturnValue({
      id: "1",
    });
  
    render(<PlaylistInfoPage />);

    const songCount = screen.getAllByTestId("song-item").length;
  
    expect(screen.getByText(/Rock Hits/i)).toBeInTheDocument();
    expect(screen.getByText(/Жанр: Rock/i)).toBeInTheDocument();
    expect(songCount).toBe(20);
  }); 
});

describe("Тест компонента UserInfoPage", () => {
  test("UserInfoPage, проверяем текст по умолчанию", () => {
    jest.spyOn(ReactRouterDom, "useParams").mockReturnValue({
      userId: "99",
    });

    render(<UserInfoPage />);
    expect(screen.getByText(/Пользователя с таким userId нет/i)).toBeInTheDocument();
  });

  test("UserInfoPage, проверяем данные о пользователе", () => {
    jest.spyOn(ReactRouterDom, "useParams").mockReturnValue({
      userId: "1",
    });

    const mockNavigate = jest.fn();
    jest.spyOn(ReactRouterDom, "useNavigate").mockReturnValue(mockNavigate);

    render(<UserInfoPage />);

    const playlistElement = screen.getByText(USERS[1].playlist.name);
    playlistElement.click();

    expect(screen.getByText("Kirsten26@yahoo.com")).toBeInTheDocument();
    expect(screen.getByText("Cecelia Senger")).toBeInTheDocument();
    expect(mockNavigate).toHaveBeenCalledWith(`/playlist/${USERS[1].playlist.id}`);
  });
});

describe("Проверяем вызов метода setSearchParam из react-router-dom", () => {
  it("UsersPage, вызов setSearchParam при вводе имени пользователя", () => {
    const mockSetSearchParam = jest.fn();
    (useSearchParams as jest.Mock).mockReturnValue([new URLSearchParams(), mockSetSearchParam]);

    render(<UsersPage />);

    const inputElement = screen.getByLabelText(/введите имя/i);

    fireEvent.change(inputElement, { target: { value: "Cecelia" } });

    expect(mockSetSearchParam).toHaveBeenCalledWith({ searchName: "cecelia" });
  });

    it("PlaylistPage, вызов setSearchParam при вводе жанра и названия", () => {
    const mockSetSearchParams = jest.fn();
    (useSearchParams as jest.Mock).mockReturnValue([
      new URLSearchParams(),
      mockSetSearchParams,
    ]);

    render(<PlaylistPage />);
    // Находим поле ввода жанра
    const genreInput = screen.getByPlaceholderText("Введите жанр");
    // Симулируем ввод текста в поле ввода жанра
    fireEvent.change(genreInput, { target: { value: "rock" } });
    // Проверяем, что setSearchParam был вызван с правильным параметром для жанра
    expect(mockSetSearchParams).toHaveBeenCalledWith({ genre: "rock" });
    // Находим поле ввода названия
    const nameInput = screen.getByPlaceholderText("Введите название");
    // Симулируем ввод текста в поле ввода названия
    fireEvent.change(nameInput, { target: { value: "hits" } });
    // Проверяем, что setSearchParam был вызван с правильным параметром для названия
    expect(mockSetSearchParams).toHaveBeenCalledWith({ genre: "rock", name: "hits" });
  });

});


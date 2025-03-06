import "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import * as ReactRouterDom from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { PlaylistInfoPage } from "../pages/PlaylistInfoPage/PlaylistInfoPage";
import { MainPage } from "../pages/MainPage/MainPage";
import { FilterProvider } from "../context/ProviderFilter";
import { MemoryRouter } from "react-router-dom";
import { USERS } from "../data/users";
import { UserInfoPage } from "../pages";
import { UsersPage } from "../pages";
import { PlaylistPage } from "../pages/PlayListPage/PlayListPage";
import { useSearchParams } from "react-router-dom";


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
  
    render(
      <MemoryRouter>
        <FilterProvider>
          <PlaylistInfoPage />
        </FilterProvider>
      </MemoryRouter>
    );

    const songCount = screen.getAllByTestId("song-item").length;
  
    expect(screen.getByText(/Yeah Metal/i)).toBeInTheDocument();
    expect(screen.getByText(/Жанр: Metal/i)).toBeInTheDocument();
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
  
    const userPlaylist = USERS[1]?.playlist;
    if (!userPlaylist) {
      throw new Error("Playlist для пользователя отсутствует в данных USERS");
    }
  
    const playlistElement = screen.getByText(userPlaylist.name);
    playlistElement.click();
  
    expect(screen.getByText("Kirsten26@yahoo.com")).toBeInTheDocument();
    expect(screen.getByText("Cecelia Senger")).toBeInTheDocument();
    expect(mockNavigate).toHaveBeenCalledWith(`/playlist/${userPlaylist.id}`);
  });
  
});

describe("Проверяем вызов метода setSearchParam из react-router-dom", () => {
  it("UsersPage, вызов setSearchParam при вводе имени пользователя", () => {
    const mockSetSearchParam = jest.fn();
    (useSearchParams as jest.Mock).mockReturnValue([new URLSearchParams(), mockSetSearchParam]);

    render(
      <MemoryRouter>
        <UsersPage />
      </MemoryRouter>
    );

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

    render(
      <MemoryRouter>
        <FilterProvider>
          <PlaylistPage />
        </FilterProvider>
      </MemoryRouter>
    );

    const genreInput = screen.getByPlaceholderText("Введите жанр");

    fireEvent.change(genreInput, { target: { value: "rock" } });

    expect(mockSetSearchParams).toHaveBeenCalledWith({ genre: "rock" });

    const nameInput = screen.getByPlaceholderText("Введите название");

    fireEvent.change(nameInput, { target: { value: "hits" } });

    expect(mockSetSearchParams).toHaveBeenCalledWith({ genre: "rock", name: "hits" });
  });

});


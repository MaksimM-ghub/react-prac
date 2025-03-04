import "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import * as ReactRouterDom from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { PlaylistInfoPage } from "../pages/PlaylistInfoPage/PlaylistInfoPage";
import { MainPage } from "../pages/MainPage/MainPage";
// import { PLAYLISTS } from "../data/playlists";
import { UserInfoPage } from "../pages";

describe("snapshot", () => {
  it("snapshot компонента MainPage", () => {
    const { asFragment } = render(<MainPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});


jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
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
  
    expect(screen.getByText(/Rock Hits/i)).toBeInTheDocument();
    expect(screen.getByText(/Жанр: Rock/i)).toBeInTheDocument();
  });
  
});

describe("Тест компонента UserInfoPage", () => {
  test("UserInfoPage, проверяем текст по умолчанию", () => {
    jest.spyOn(ReactRouterDom, "useParams").mockReturnValue({
      userId: "12345",
    });

    render(<UserInfoPage />);
    expect(screen.getByText(/Пользователя с таким userId нет/i)).toBeInTheDocument();
  });

  test("UserInfoPage, проверяем данные о пользователе", () => {
    jest.spyOn(ReactRouterDom, "useParams").mockReturnValue({
      userId: "1",
    });

    render(<UserInfoPage />);

    expect(screen.getByText("Kirsten26@yahoo.com")).toBeInTheDocument();
    expect(screen.getByText("Cecelia Senger")).toBeInTheDocument();
  });
});

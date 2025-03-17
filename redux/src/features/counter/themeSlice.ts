
import { createAppSlice } from "../../app/createAppSlice"

export interface ThemeState {
  theme: "light" | "dark"
}

const initialThemeState: ThemeState = {
  theme: "light",
}

export const themeSlice = createAppSlice({
    name: "theme",
    initialState: initialThemeState,
    reducers: create => ({
      toggleTheme: create.reducer(state => {
        state.theme = state.theme === "light" ? "dark" : "light"
      }),
      setTheme: create.reducer((state, action: PayloadAction<"light" | "dark">) => {
        state.theme = action.payload
      }),
    }),
    selectors: {
      selectTheme: theme => theme.theme,
    },
  })
  

  export const { toggleTheme, setTheme } = themeSlice.reducers;
  export default themeSlice.reducers
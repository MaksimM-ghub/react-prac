import { ReactNode, Dispatch, SetStateAction } from "react";

export interface filterProvider {
  children: ReactNode
}

export interface filterInput {
  filter: filterState,
  setFilter: Dispatch<SetStateAction<filterState>>
}

export interface filterState {
  genre: string,
  name: string
}
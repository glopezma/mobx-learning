import { observable, action } from "mobx";

interface AppState {
  title: string;
  showButtons: boolean;
}

const initialState: AppState = {
  title: "Pokemon",
  showButtons: false,
};

export const AppStore = observable({
  ...initialState,
  setTitle: action((title: string): void => {
    AppStore.title = title;
  }),
  setShowButtons: action((showButton: boolean): void => {
    AppStore.showButtons = showButton;
  }),
  resetAppStore: action(() => {
    AppStore.setTitle(initialState.title);
    AppStore.setShowButtons(initialState.showButtons);
  }),
});

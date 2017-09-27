# Beritapedia

made by Adhy Wiranata Prasetyo, for Tokopedia React Native Mobile Engineer Project Assessment.

## Technology and Libraries

- React Native
- React Navigation, for screen navigations
- Axios for HTTP requests to API
- Redux for State Management (along with React-Redux and Redux-Saga)
- RN Linear Gradient, Emoji, and Vector Icons for styling and UI

## Code Organization and Architecture

- Pages, Components, and Cores.
React Components is differentiated into three level. Pages are app's Screens, usually contains UI logics, as well as a container which connects to the redux store.
Components are stateless, presentational component which have a larger chunks of code, while Cores also are stateless component with smaller chunks of code, and also used to abstract native components.

- Store, Reducers, Actions, and Sagas
The app uses Redux for its state management, and Redux commonly uses these three: Store, Reducers, and Actions. to maintain app code's structure and also to handle asynchronous action dispatch calls, the app also make use of Redux Saga, contained inside the sagas folder.

Lint: AirBnB
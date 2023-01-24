import { Provider } from "react-redux";
import AppRouter from "./providers/AppRouter";
import { store } from "../shared/store/slices/store";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter/>
      </div>
    </Provider>
  );
}


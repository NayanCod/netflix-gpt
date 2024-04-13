import Body from "./components/Body";
import "./index.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
    <Body/>
    </Provider>
  );
}

export default App;

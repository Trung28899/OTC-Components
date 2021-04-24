import ModalScreen from "./screen/ModalScreen/ModalScreen";
import YoutubeEmbedded from "./screen/YoutubeEmebeddedScreen/YoutubeEmbedded";
import DropDownScreen from "./screen/DropDownLinkScreen/DropDown";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Switch>
        <Route path="/drop" component={DropDownScreen} />
        <Route path="/embedded" component={YoutubeEmbedded} />
        <Route path="/" exact component={ModalScreen} />
      </Switch>
    </div>
  );
}

export default App;

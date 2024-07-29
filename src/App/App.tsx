import { ANewForm } from "../components/ANewForm/ANewForm";
import { ANewHeader } from "../components/ANewHeader/ANewHeader";
import { ANewMore } from "../components/ANewMore/ANewMore";
import { ANewText } from "../components/ANewText/ANewText";
import { ANewTextTwo } from "../components/ANewTextTwo/ANewTextTwo";
// import { Count } from "../components/count/count";
// import { Header } from "../components/Header/Header";
// import { More } from "../components/More/More";
// import { Text } from "../components/Text/Text";
// import { TextTwo } from "../components/TextTwo/texttwo";
import "./App.css";

function App() {
  return (
    <>
    <ANewHeader/>
    <ANewText/>
    <ANewTextTwo/>
    <ANewForm/>
    <ANewMore/>
    {/* <Header/>
    <Text/>
    <TextTwo/>
    <More/>
    <Count/> */}
    </>
  );
}

export default App;

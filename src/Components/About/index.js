import "../../App.css";
import Fade from "react-reveal/Fade";
import A2oj from "./A2oj";
import Header from "./A2OJLog/Header";


export default function About() {
  return (
    <Fade duration={800} bottom>
      {/* <A2oj/> */}
      <Header/>
    </Fade>
  );
}

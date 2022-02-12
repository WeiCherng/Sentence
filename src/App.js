import "./App.css";
import Desc from "./Components/Desc/Desc";
import Faq from "./Components/Faq/Faq";
import Generate from "./Components/Generate/Generate";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Review from "./Components/Review/Review";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Desc></Desc>
      <Generate></Generate>
      <Faq></Faq>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
}

export default App;

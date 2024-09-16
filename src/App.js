import "./styles.css";
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Blogs from "./Components/Blogs.jsx";
import 

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="main">
        <div className="container">
          <Blogs />
          <Aside />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

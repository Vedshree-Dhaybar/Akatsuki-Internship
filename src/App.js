import "./index.css";
import Header from "./Components/Header/Header.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import Aside from "./Components/Aside/Aside.jsx";
import Footer from "./Components/Footer/Footer.jsx";

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

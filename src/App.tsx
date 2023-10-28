import "./styles/App.scss";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
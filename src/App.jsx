import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <div className="app">
        <Navbar />
        <div className="layout">
        <Sidebar />
        <main className="content">
        <h1>Home Page</h1>
        </main>
        </div>
        <Footer />
        </div>
        );
}

export default App;

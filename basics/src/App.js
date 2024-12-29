import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Header from "./Header";

function App() {

  return (
    <div>
    <h1>Hello from ReactJS</h1>
    <Home name = {'Jitu'} age = {23} />
    <About />
    <Contact />
    <Header />
    </div>
  );
}
export default App;
import Testimontials from "./components/Testimonials";
import userTestimonials from "./data/UserTestimonials.json";
import "./App.css";

function App() {
  return (
    <main>
      <Testimontials data={userTestimonials} />
    </main>
  );
}

export default App;

import "./App.css";
import Pomodoro from "./Pomodoro";

function App() {
  return (
    <div className="container">
      <div className="modes">
        <button>
          <i class="fa-solid fa-sun on"></i>
        </button>
        <button>
          <i class="fa-solid fa-moon off"></i>
        </button>
      </div>
      <Pomodoro />
    </div>
  );
}

export default App;

import "./App.css";
import ImageGrid from "./Components/ImageGrid";
import UploadForm from "./Components/UploadForm";
import Title from "./Title";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import ImageGrid from "./Components/ImageGrid";
import Modal from "./Components/Modal";
import UploadForm from "./Components/UploadForm";
import Title from "./Title";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default App;

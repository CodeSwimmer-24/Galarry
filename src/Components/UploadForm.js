import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const type = ["image/jpeg", "image/png", "video/mp4"];

  const changeHandler = (e) => {
    e.preventDefault();
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && type.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("please select an image file (png/jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="rooro">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default UploadForm;

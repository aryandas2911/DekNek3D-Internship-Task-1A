import React, { useState } from "react";
import { uploadFile } from "../api/api";

function Upload() {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState("obj");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    setError("");

    if (!file) {
      setError("Please select a GLB file");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("document", file); // must match multer.single("file")
      formData.append("format", format);

      const res = await uploadFile(formData);
      console.log(res.data.downloadUrl);
      // trigger download
      
      window.location.href = res.data.downloadUrl;
    } catch (err) {
      console.error(err);
      setError("Upload or conversion failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>GLB File Converter</h2>

      <form onSubmit={handleUpload}>
        {/* File input */}
        <input
          type="file"
          accept=".glb"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br /><br />

        {/* Format dropdown */}
        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="obj">OBJ</option>
          <option value="stl">STL</option>
          <option value="ply">PLY</option>
          <option value="fbx">FBX</option>
          <option value="3mf">3MF</option>
          <option value="glb">Optimized GLB</option>
          <option value="gltf">Optimized GLTF</option>
        </select>

        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Converting..." : "Upload & Convert"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default Upload;

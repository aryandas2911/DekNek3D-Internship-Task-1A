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
      formData.append("document", file);
      formData.append("format", format);

      const res = await uploadFile(formData);
      window.location.href = res.data.downloadUrl;
    } catch {
      setError("Upload or conversion failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <div className="tool">
        <div className="tool-card">
          <header className="tool-header">
            <h1 className="tool-title">GLB Converter</h1>
            <p className="tool-subtitle">
              Convert 3D models into production-ready formats.
            </p>
          </header>

          <form className="tool-form" onSubmit={handleUpload}>
            <div className="form-group">
              <label className="form-label">3D Model</label>
              <input
                type="file"
                accept=".glb"
                className="file-input"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Output Format</label>
              <select
                className="select-input"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              >
                <option value="obj">OBJ</option>
                <option value="stl">STL</option>
                <option value="ply">PLY</option>
                <option value="fbx">FBX</option>
                <option value="3mf">3MF</option>
                <option value="glb">Optimized GLB</option>
                <option value="gltf">Optimized GLTF</option>
              </select>
            </div>

            <div className="action-area">
              <button className="primary-btn" disabled={loading}>
                {loading ? "Generating…" : "Generate"}
              </button>
            </div>

            {error && <p className="form-error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Upload;

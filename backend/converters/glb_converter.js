import { execFile } from "child_process";
import path from "path";

const pythonCmd = "python";
const scriptPath = path.join("python_scripts", "glb_converter.py");

export function glb_convert(inputFilePath, outputFormat) {
  return new Promise((resolve, reject) => {
    execFile(
      pythonCmd,
      [scriptPath, inputFilePath, outputFormat],
      (error, stdout, stderr) => {
        if (error) return reject(error);
        if (stderr) console.warn(stderr);
        resolve(stdout.trim());
      }
    );
  });
}

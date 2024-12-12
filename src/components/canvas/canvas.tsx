import React, { useState } from 'react';

import "./canvas-style.css"; // Assuming a CSS file is used for styling

// Define the types for the canvas tool
const CanvasTools = {
  CREATE: "create",
  EDIT: "edit",
  DELETE: "delete"
};

type CanvasToolType = keyof typeof CanvasTools;

type CanvasProps = {
  tool: CanvasToolType;
  setTool: (tool: CanvasToolType) => void;
};

export function Canvas({ tool, setTool }: CanvasProps) {
  const [canvasName, setCanvasName] = useState('');

  const handleCanvasNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCanvasName(event.target.value);
  };

  const createCanvas = () => {
    if (!canvasName) return;
    // Create a new canvas endpoint using the canvas name
    const endpoint = `/canvases/${canvasName}`;
    // Store the canvas endpoint in the application's state or database
    console.log("Canvas created at endpoint:", endpoint);
  };

  return (
    <div className="canvasContainer">
      <div className="actionBar">
        {Object.values(CanvasTools).map((t, index) => (
          <div
            className={`inputWrapper ${tool === t ? "selected" : ""}`}
            key={t}
            onClick={() => setTool(t)}
          >
            <input
              type="radio"
              id={t}
              checked={tool === t}
              onChange={() => setTool(t)}
              readOnly
            />
            <label htmlFor={t}>{t}</label>
            <span>{index + 1}</span>
          </div>
        ))}
      </div>
      <div className="canvasInputSection">
        <input 
          type="text" 
          value={canvasName} 
          onChange={handleCanvasNameChange} 
          placeholder="Enter canvas name" 
        />
        {/* <button onClick={createCanvas}>Create Canvas</button> */}
      </div>
    </div>
  );
}

import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.post('/canvases', (req, res) => {
  const canvasName = req.body.canvasName;
  const endpoint = `/canvases/${canvasName}`;
  // Store the canvas endpoint in the database
  res.send({ endpoint });
});
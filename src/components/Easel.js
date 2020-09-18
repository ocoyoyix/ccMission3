import React, { useRef, useEffect, useState } from "react";

function Easel() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    //Canvas Fits the Easel Image
    const canvas = canvasRef.current;
    canvas.width = 640;
    canvas.height = 853;
    canvas.style.width = `640 px`;
    canvas.style.height = `853 px`;

    //Set up the canvas context
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    let gradient = context.createLinearGradient(0, 0, 700, 0);
    gradient.addColorStop(0.1, "green");
    gradient.addColorStop(0.3, "yellow");
    gradient.addColorStop(0.5, "orange");
    gradient.addColorStop(0.7, "red");
    gradient.addColorStop(0.8, "pink");
    gradient.addColorStop(1, "blue");
    context.strokeStyle = gradient;
    context.lineWidth = 5;

    //Getting Image from URL inorder to pre-draw it in the canvas
    var imgObj = new Image();
    imgObj.src =
      "https://images.unsplash.com/photo-1580493113011-ad79f792a7c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80";
    imgObj.onload = function () {
      context.drawImage(imgObj, 0, 0);
    };
    contextRef.current = context;
  }, []);

  //Will be called when the mouse button is pressed
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  //Will be called when the mouse button is released
  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  //Displays the line strokes in the canvas
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    //Canvas Element with event listeners
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
}

export default Easel;

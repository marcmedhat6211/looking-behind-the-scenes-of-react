import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const allowToggleHandler = () => {
    setAllowToggle(!allowToggle);
  };

  /**
   * The useCallback hook will make sure that react never re excecutes the function one more time
   * while using the useCallback hook, remember that js functions are closures
   */
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  /**
   * Here React memo will work with the demo output but NOT with the button why ?
   *    what memo does is that it makes a comparison using the === operator between the previous and the current values
   *    so for ex: demooutput.prev.show === demooutput.show -> false === false -> which will output true because those are primitive values
   *               button.prev.onClick === button.onClick -> object === object -> which will return false because those are reference values
   */
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;

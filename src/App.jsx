import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feedback from "./pages/Feedback";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const App = () => {
  const [score, setScore] = useState(null);

  const router = createBrowserRouter([
    { path: "/", element: <Feedback score={score} setScore={setScore} /> },
    { path: "/thank-you", element: <ThankYou score={score} /> },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
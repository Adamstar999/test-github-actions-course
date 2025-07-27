import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useQuery } from "@tanstack/react-query";

function App() {
  const request = useQuery({
    queryKey: ["Hello-world"],
    queryFn: () => {
      return Promise.resolve(4);
    },
  });

  console.log(request.data);

  return (
    <>
      <div>
        <h1>React Query</h1>
      </div>
    </>
  );
}

export default App;

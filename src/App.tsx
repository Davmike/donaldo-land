import { useState } from "react";
import { MyContext } from "./Components/Context";
import Main from "./Components/Main";





function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <MyContext.Provider
        value={{
          isMenuOpen,
          setIsMenuOpen
        }}
      >
        <Main />
      </MyContext.Provider>
    </>
  );
}

export default App

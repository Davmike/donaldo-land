import { useState } from "react";
import { MyContext } from "./Components/Context";
import Main from "./Components/Main";
import Programs from "./Components/Programs";





function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // state for programs component
  const [isHidePrograms, setIsHideprograms] = useState<boolean>(false);
  // state for heros component
  const [isHideHeros, setIsHideHeros] = useState<boolean>(false);
  // state for design component
  const [isHideDesign, setIsHideDesign] = useState<boolean>(false);
  // state for outdoor component
  const [isHideOutdoor, setIsHideOutdoor] = useState<boolean>(false);
  // state for eat and drink component
  const [isHideEat, setIsHideEat] = useState<boolean>(false);
  // state for contacts component
  const [isHideContact, setIsHideContact] = useState<boolean>(false);
  // state for shows component
  const [isHideShows, setIsHideShows] = useState<boolean>(false);

  return (
    <>
      <MyContext.Provider
        value={{
          isMenuOpen,
          setIsMenuOpen,
          isHidePrograms,
          setIsHideprograms,
          isHideHeros,
          setIsHideHeros,
          isHideDesign,
          setIsHideDesign,
          isHideOutdoor,
          setIsHideOutdoor,
          isHideEat,
          setIsHideEat,
          isHideContact,
          setIsHideContact,
          isHideShows,
          setIsHideShows
        }}
      >
        <Main />
        <Programs />
      </MyContext.Provider>
    </>
  );
}

export default App

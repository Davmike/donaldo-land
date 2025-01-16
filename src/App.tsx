import { MyContext } from "./Components/Context";
import Main from "./Components/Main";



function App() {
  return (
    <>
      <MyContext.Provider
        value={{
        }}
      >
        <Main />
      </MyContext.Provider>
    </>
  );
}

export default App

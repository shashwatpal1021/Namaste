import { useContext } from "react";
import { ThemeContext } from "../App";

const UseContextReact = () => {
  const theme = useContext(ThemeContext);

  return (
    <div><h1>UseContext</h1>
      current theme is {theme}
    </div>
  )

}

export default UseContextReact;
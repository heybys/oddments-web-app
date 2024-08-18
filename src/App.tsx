import {router} from "@/router";
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from "@/components/theme-provider";

function App() {

  return (
      <ThemeProvider defaultTheme="light">
        <RouterProvider router={router}/>
      </ThemeProvider>
  );
}

export default App

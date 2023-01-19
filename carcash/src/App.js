import Inventory from "./components/Inventory";
import { ChakraProvider } from "@chakra-ui/react";
import { Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sales from "./components/Sales";
import Home from "./components/Home";
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/sales" component={Sales} />
        </Switch>
        <style>
          @import
          url('https://fonts.googleapis.com/css?family=Lato:300,700|Prata')
        </style>
        <Navbar />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

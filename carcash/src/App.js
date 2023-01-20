import Inventory from "./components/Inventory/Inventory";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Sales from "./components/Sales";
import InventoryComponent from "./components/Inventory/InventoryComponent";
function App() {
  const { colorMode } = useColorMode();

  return (
    <ChakraProvider isDark={colorMode === "dark"}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

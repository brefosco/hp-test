import { Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import StudentsView from "./views/StudentsView";
import StaffView from "./views/StaffView";
import CharacterDetailsView from "./views/CharacterDetailsView";
import { useSetRecoilState } from "recoil";
import { preferredHouseState } from "./recoil/atoms";
import { Box } from "@chakra-ui/react";
import { House } from "./types";
import { useEffect } from "react";
import InitialHouseSelector from "./components/HouseSelector";
import NotFoundView from "./views/NotFoundView";
import HouseCharactersView from "./views/HouseCharactersView";
import AllCharactersView from "./views/AllCharactersView";

function App() {
  const setPreferredHouse = useSetRecoilState(preferredHouseState);
  const navigate = useNavigate();

  useEffect(() => {
    const savedHouse = localStorage.getItem("preferredHouse") as House | null;
    if (savedHouse) {
      setPreferredHouse(savedHouse);
    } else {
      navigate("/select-house");
    }
  }, [setPreferredHouse, navigate]);

  return (
    <Box minH="100vh" transition="background-color 0.2s" bgColor="#e5e5e5">
      <Navigation />
      <Routes>
        <Route path="/" element={<AllCharactersView />} />
        <Route path="/students" element={<StudentsView />} />
        <Route path="/staff" element={<StaffView />} />
        <Route path="/character/:id" element={<CharacterDetailsView />} />
        <Route path="/select-house" element={<InitialHouseSelector />} />
        <Route path="/house/:house" element={<HouseCharactersView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Box>
  );
}

export default App;

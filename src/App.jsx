import Gallery from "./components/Gallery";
import Header from "./components/Header";
import { GalleryContextProvider } from "./context/GalleryContext";
import { useContext } from "react";
import { GalleryContext } from "./context/GalleryContext";

const App = () => {
  const { searchTrigger } = useContext(GalleryContext);
  return (
    <GalleryContextProvider>
      <Header />
      <Gallery />
    </GalleryContextProvider>
  );
};

export default App;
import { useState } from "react";
import searchImages from "./api";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";


function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    //console.log('Do a search with', term);
    const result = await searchImages(term);
    setImages(result);
    console.log(result)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
  )
}

export default App;
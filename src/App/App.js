import {Header} from "../Header/header";
import {ContainersGallery} from "../ContainersGallery/ContainersGallery";
import './App.css';

function App() {
  return (
    <div id="App">
      <Header/>
      <div id="content">
        <ContainersGallery/>
      </div>
    </div>
  );
}

export default App;

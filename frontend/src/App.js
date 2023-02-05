import './App.css';
import Header from './Components/header/Header.tsx';
import SideBar from './Components/sideBar/sideBar.tsx';
import Questions from './Components/questions/questions.tsx';
import Ask from './Components/ask/ask.tsx';
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className='dashboard'>        
          <Routes>
            <Route path="/" element={<Questions/>}/>
            <Route path="/ask" element={<Ask/>}/>
          </Routes>
          <SideBar/>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

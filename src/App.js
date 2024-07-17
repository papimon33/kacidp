// App.js 예시
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
// 추가 컴포넌트 import...
import WorkdataPage from './pages/Workdatapage';
import SearchPage from './pages/SearchPage';
import Home from './pages/Home';

function App() {
  const [color, setColor] = useState('#1d4d69');
  const [textColor, setTextColor] = useState('#ffffff');

  return (
    <Router>
      <div>
        <Header color={color} textColor={textColor} />
        <Sidebar color={color} textColor={textColor}/>
        <div>
          <main className="content">
            <Routes>
              <Route path="/" exact element={<Home color={color} setColor={setColor} setTextColor={setTextColor}/>} /> 
              <Route path="/workdata/*" element={<WorkdataPage/>} />
              <Route path="/search" element={<SearchPage/>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

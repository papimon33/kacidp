// App.js 예시
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
// 추가 컴포넌트 import...
import WorkdataPage from './pages/Workdatapage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
      <div>
        {/* 여기에 공통 레이아웃 구성 요소 추가 (예: 상단 검색바, 좌측 메뉴) */}
        <Header/>
        <div>
          <Sidebar/>
          <main className="content">
            <Routes>
              {/* <Route path="/" exact component={Home} /> */}
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

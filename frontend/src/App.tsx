import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import TestSmartStudentHomepage from './Home/testHomePage'
import StudentHomepage from './Home/homepage'
import StudentTestpage from './Home/test'
import ProductPage from './Home/productPage'
import StudentTest2page from './Home/test2'
import EduStudioPage from './Home/Products/edustudio'
import GurukulPage from './Home/Products/AIGurukul'
import SmartPapersPage from './Home/Products/SmartPapers'
import EZPrepPage from './Home/Products/ezprep'

function App() {

  return (
    <HashRouter>
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/test3" element={<TestSmartStudentHomepage />} />
        <Route path='/home' element={<StudentHomepage />} />
        <Route path='/test' element={<StudentTestpage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/test2' element={<StudentTest2page />} />
        <Route path='/product/edustudio' element={<EduStudioPage />} />
        <Route path='/product/gurukul' element={<GurukulPage /> } />
        <Route path='/product/smartpapers' element={<SmartPapersPage />} />
        <Route path='/product/ezprep' element={<EZPrepPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App

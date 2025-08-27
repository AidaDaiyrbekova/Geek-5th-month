
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Error } from './pages/Error'
import { Layout } from './component/Layout'
import { Posts } from './pages/Posts'

function App() {


  return (
    <BrowserRouter>

    <Routes>
    <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/posts" element={<Posts />} />
   </Route>
   
    <Route path="*" element={<Error />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App

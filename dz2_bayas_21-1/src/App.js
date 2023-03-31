import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LayOut from "./components/LayOut/LayOut";
import PostsPage from "./pages/PostsPage/PostsPage";
import PostPage from "./pages/PostPage/PostPage";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayOut/>}>
            <Route index element={<MainPage/>}/>
        </Route>
          <Route path='/posts' element={<PostsPage/>}/>
          <Route path='/posts/:id' element={<PostPage/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;


import React from 'react'
import CreatePost from './component/CreatePost';
import ViewPost from './component/ViewPost';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import UpdatePost from './component/UpdatePost';
const Crud = () => {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/" element={<CreatePost />}/>
              <Route path="/viewposts" element={<ViewPost />}/>
              <Route path="/updateposts/:id" element={<UpdatePost/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default Crud
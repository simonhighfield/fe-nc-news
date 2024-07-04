import { useEffect, useState } from 'react'
import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css";
{/* <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/> */}
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ViewArticle from './components/ViewArticle';
import { fetchUsers } from '../utils/api';
import Loading from './components/Loading';
import ViewTopic from './components/ViewTopic';
import Error from './components/Error';
import NavBar from './components/NavBar';

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState("")
  const [users, setUsers] = useState([])
  const [topic, setTopic] = useState("")


  useEffect(() => {
    document.title = "Discus"
    setIsLoading(true)
    fetchUsers()
    .then((response) => {
      setIsLoading(false)
      setUsers(response)
    })
    .catch((err) => {
      setIsLoading(false)
      setIsError(err.response.data.msg)
    })
  }, [])

  return (
    <>
      <NavBar topic={topic} setTopic={setTopic}/>
      {isLoading ? <Loading /> : 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articles/:article_id' element={<ViewArticle users={users}/>} />
          <Route path='/topics/:topic' element={<ViewTopic users={users} setTopic={setTopic}/>} />
          <Route path="*" element={<Error message={"404 error!"}/>} />        
        </Routes>
      }
      {isError ? <Error message={isError}/> : null}
    </>
  )
}


export default App

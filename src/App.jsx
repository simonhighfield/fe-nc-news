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

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState("")
  const [users, setUsers] = useState([])

  useEffect(() => {
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
      <h1>NC News</h1>
      {isLoading ? <Loading /> : 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articles/:article_id' element={<ViewArticle users={users}/>} />
          <Route path='/topics/:topic' element={<ViewTopic users={users}/>} />        
        </Routes>
      }
      {isError ? <Error message={isError}/> : null}
    </>
  )
}


export default App

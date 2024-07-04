import { useEffect, useState } from 'react'
import './App.css'
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
      <NavBar/>
      {isLoading ? <Loading /> : 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/topics/:topic' element={<ViewTopic users={users}/>} />
          <Route path='/articles/:article_id' element={<ViewArticle users={users}/>} />
          <Route path="*" element={<Error message={"404 error!"}/>} />        
        </Routes>
      }
      {isError ? <Error message={isError}/> : null}
    </>
  )
}


export default App

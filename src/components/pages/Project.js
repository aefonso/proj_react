import styles from './Project.module.css'

import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'

function Project() {
  const { id } = useParams()
  
  const [project, setProject] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  useEffect (() => {
    fetch(`http://localhost:5000/projects/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProject(data)
    })
    .catch((err) => console.log(err))
  }, [id])

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }
  return (
    <>
    {project.name ? (
    <div>
      <Container customClass="column">
        <div>
          <h1>Projeto: {project.name}</h1>
          <button onClick={toggleProjectForm}>
            {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
          </button>
        </div>
      </Container>
    </div>  
   ) : (
   <Loading />)}</>
  )
}

export default Project
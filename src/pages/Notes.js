import { Button, Container, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { NoteCard } from '../components/NotesCard'

export default function Notes() {
  const [notes, setNotes] = useState([])
  const history = useHistory()

  const handleDelete = async (id) => {
    fetch('http://localhost:8000/notes' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete}/>
          </Grid>
        ))}
      </Grid>
      <Button color="secondary" variant="contained" onClick={() => history.push('/create')}>To Create</Button>
      
    </Container>
  )
}

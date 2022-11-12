import { DeleteOutlined } from "@mui/icons-material"
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === 'work') {
        return '1px solid red'
      }
    }
  }
})

export const NoteCard = ({note, handleDelete}) => {
  const classes = useStyles(note)

  return (
    <div>
      <Card elevation={2} className={classes.test}>
        <CardHeader 
          action={
            <IconButton 
              onClick={() => handleDelete(note.id)}
              >
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
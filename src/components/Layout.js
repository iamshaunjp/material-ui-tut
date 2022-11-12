import { ClassNames } from "@emotion/react"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  page: {
    background: '#e9e9e9',
    width: '100%'
  }
})

export const Layout = ({children}) => {
  const classes = useStyles()
  return (
    <div>
      Layout
      <div className={classes.page}>
        {children}
      </div>
    </div>
  )
}
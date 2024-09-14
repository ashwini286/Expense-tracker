import React, { FC } from 'react'
import { Link } from 'react-router-dom'
/* Styles */
import useStyles from './styles'
/* Components */
import Typography from '@material-ui/core/Typography'


interface HeaderProps {
  title: string,
}

const Header: FC<HeaderProps> = ({ title }) => {

  const classes = useStyles()

  return (
    <Typography variant='h5' component='h2' className={classes.root}   style={{
      backgroundImage: 'url("https://media.istockphoto.com/id/1459373176/vector/abstract-defocused-background-spring-summer-sea.jpg?s=612x612&w=0&k=20&c=P6D1VrXeeKsJfyKzlJeIqxyNXkeYtMb6C1mW6p68xro=")', // Replace with your image path

    }}>
      <Link to='/' className={classes.link}>
        {title}
      </Link>
    </Typography>
  )
}

export default Header

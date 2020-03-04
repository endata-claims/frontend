import React from 'react'
import { makeStyles, Button, ButtonGroup } from '@material-ui/core'
import { Link } from 'react-router-dom'

const RouteGroup = ({ routes, activeRoute, ...props }: any) => {
  const classes = useStyles()

  return (
    <ButtonGroup color='inherit' variant='text' size='large' {...props}>
      {routes.map(({ label, icon, path, href }: any, index: number) => (
        <Button
          key={index}

          component={href ? 'a' : Link}
          href={href}
          to={path}

          startIcon={icon}
          color='inherit'
          className={activeRoute === index ? classes.activeRoute : ''}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default RouteGroup

const useStyles = makeStyles(({
  activeRoute: {
    background: 'rgba(0,0,0, 0.3)'
  }
}))
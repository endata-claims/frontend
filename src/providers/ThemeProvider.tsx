import React from 'react'
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Helmet } from 'react-helmet'

const ThemeProvider: React.FC = ({ children }) => {
  overrideStyles({})

  MuiFormLabelStyles({})
  MuiSwitchStyles({})
  MuiButttonStyles({})
  MuiTabStyles({})

  return (
    <>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Helmet>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </>
  )
}
export default ThemeProvider

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0f5b78'
    }
  },
  // status: {
  //   danger: 'orange',
  // },
})
const overrideStyles = makeStyles({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }
})

// @ts-ignore
const MuiFormLabelStyles = makeStyles({
  root: {
    // color: 'rgba(0, 0, 0, 0.84) !important',
    fontWeight: '600 !important'
  }
}, { name: 'MuiFormLabel' })

const MuiSwitchStyles = makeStyles({
  checked: {
    '& .MuiSwitch-thumb': {
      color: 'green !important'
    }
  },
  thumb: {
    color: 'red'
  }
}, { name: 'MuiSwitch' })

const MuiButttonStyles = makeStyles({
  label: {
    textTransform: 'none'
  }
}, { name: 'MuiButton' })

const MuiTabStyles = makeStyles({
  wrapper: {
    textTransform: 'none'
  }
}, { name: 'MuiTab' })

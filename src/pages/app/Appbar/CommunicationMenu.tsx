import React from 'react'
import { IconButton, Menu, MenuItem, ListItem, ListItemText, Button, Badge, Divider } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import { useHistory } from 'react-router-dom'

import gql from 'graphql-tag'
import { useCommunicationmenuQuery } from 'generated/graphql'
gql`
  query Communicationmenu {
    communications: claimCommuications(
      first: 2
      where: {
        boxes: Inbox
        acknowledged: false
      }
    ) {
      totalCount
      edges {
        node {
          id
          claimRef
          message
        }
      }
    }
  }
`

const CommunicationMenu = (props: any) => {
  const { push } = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event: any) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const { data, loading } = useCommunicationmenuQuery()

  const handleSeeMore = () => {
    handleClose()
    push('/app/communicationtasks')
  }
  const handleSeeLink = (id: any) => {
    handleClose()
    push(`/app/claims/${id}/communications`)
  }

  return (
    <>
      <IconButton onClick={handleClick} color='inherit' disabled={loading} {...props}>
        <Badge color='secondary' max={99} badgeContent={data?.communications?.totalCount}>
          <MailIcon />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            minWidth: 200,
            maxWidth: 350,
          }
        }}
      >
        <ListItem tabIndex={-1}>
          <ListItemText primary='Communication Tasks' />
        </ListItem>
        <Divider />
        {data?.communications?.edges?.map(({ node: { id, claimRef, message } }: any) => (
          <ListItem key={id} component={MenuItem} button onClick={() => handleSeeLink(id)}>
            <ListItemText
              primary={claimRef}
              secondary={message}
            />
          </ListItem>
        ))}
        <Divider />
        <ListItem style={{ padding: 16 }}>
          <ListItemText>
            Total: {data?.communications?.totalCount}
          </ListItemText>
          <Button
            variant='outlined'
            color='primary'
            style={{ marginLeft: 8 }}
            onClick={handleSeeMore}
          >
            See more...
          </Button>
        </ListItem>
      </Menu>
    </>
  )
}
export default CommunicationMenu
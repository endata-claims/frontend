import React from 'react'
import QuickActionGroup from 'components/QuickActionGroup'

import AddClaimTypeDialog from './AddClaimTypeDialog'
import NextStepDialog from './NextStepDialog'
import AddDocumentDialog from './AddDocumentDialog'
import AddJobNoteAction from './AddJobNoteAction'
import AddCommunicationAction from './AddCommunicationAction'

const ClaimActionContext = React.createContext<any>({})

export default ({ children }: any) => {
  const {
    open: addClaimTypeOpen,
    helpers: [handleAddClaimTypeOpen, handleAddClaimTypeClose]
  } = useAction()
  const {
    open: addDocumentOpen,
    helpers: [handleAddDocumentOpen, handleAddDocumentClose]
  } = useAction()
  const {
    open: nextStepOpen,
    helpers: [handleNextStepOpen, handleNextStepClose]
  } = useAction()

  const {
    open: addJobNoteOpen,
    helpers: [handleAddJobNoteOpen, handleAddJobNoteClose, toggleAddJobNote]
  } = useAction()
  const {
    open: addCommunicationOpen,
    helpers: [handleAddCommunicationOpen, handleAddCommunicationClose, toggleAddCommunication]
  } = useAction()

  return (
    <>
      <ClaimActionContext.Provider value={{
        nextStep: {
          open: handleNextStepOpen,
          close: handleNextStepClose,
        },
        addDocument: {
          open: handleAddDocumentOpen,
          close: handleAddDocumentClose,
        },
        addClaimType: {
          open: handleAddClaimTypeOpen,
          close: handleAddClaimTypeClose,
        },
        addJobNote: {
          open: handleAddJobNoteOpen,
          close: handleAddJobNoteClose,
          toggle: toggleAddJobNote
        },
        addCommunication: {
          open: handleAddCommunicationOpen,
          close: handleAddCommunicationClose,
          toggle: toggleAddCommunication,
        },
      }}>
        {children}
      </ClaimActionContext.Provider>

      <NextStepDialog open={nextStepOpen} handleClose={handleNextStepClose} />
      <AddDocumentDialog open={addDocumentOpen} handleClose={handleAddDocumentClose} />
      <AddClaimTypeDialog open={addClaimTypeOpen} handleClose={handleAddClaimTypeClose} />
      <QuickActionGroup>
        <AddJobNoteAction open={addJobNoteOpen} handleClose={handleAddJobNoteClose} />
        <AddCommunicationAction open={addCommunicationOpen} handleClose={handleAddCommunicationClose} />
      </QuickActionGroup>
    </>
  )
}

export const useClaimActions = () => {
  const actions = React.useContext(ClaimActionContext)
  return actions
}

const useAction = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleToggle = () => setOpen((previous: boolean) => !previous)

  return {
    open,
    helpers: [handleOpen, handleClose, handleToggle]
  }
}
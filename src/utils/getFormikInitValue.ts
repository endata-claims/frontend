export const getInitialValue = (cards: any) => {
  return cards.reduce((totalCard: any, currentCard: any) => {
    const card = getGroupInitialValue(currentCard.fields)

    return {
      ...totalCard,
      ...card
    }
  }, {})
}

export const getGroupInitialValue = (fields: any) => fields.reduce((total: any, current: any) => {
  if (!current.name) return total
  const value =
    current.__typename === 'SwitchField' ? false :
    current.__typename === 'DateTimeField' ? new Date() :
    current.__typename === 'GroupField' ? [] :
    ''

  return {
    ...total,
    [current.name]: value
  }
}, {})
import {NoteCard, NoteHeading, NoteText} from './styledComponents'

const NoteItem = props => {
  const {each} = props
  const {title, description} = each
  return (
    <NoteCard>
      <NoteHeading>{title}</NoteHeading>
      <NoteText>{description}</NoteText>
    </NoteCard>
  )
}

export default NoteItem

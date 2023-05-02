import {useState} from 'react'

import {v4 as uuidV4} from 'uuid'
import NoteItem from '../NoteItem/index'

import {
  MainCont,
  MainHead,
  SubContainer,
  InputTitle,
  InputDescription,
  AddButton,
  ButtonCont,
  SubContainer2,
  NoteContainer,
  NoData,
  NoDataText,
  NoDataHeading,
  EmptyNotesImg,
} from './styledComponents'

const Notes = () => {
  const [title, changeTitle] = useState('')
  const [description, changeDescription] = useState('')
  const [list, setList] = useState([])

  const onChangeTitle = event => {
    changeTitle(event.target.value)
  }

  const onChangeDescription = event => {
    changeDescription(event.target.value)
  }

  const onAddButton = event => {
    event.preventDefault()

    const newComment = {
      id: uuidV4(),
      title,
      description,
    }

    setList(prevList => [...prevList, newComment])
    changeTitle('')
    changeDescription('')
  }

  const len = list.length

  return (
    <MainCont>
      <MainHead>Notes</MainHead>
      <SubContainer>
        <InputTitle
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <InputDescription
          placeholder="Take a Note..."
          value={description}
          onChange={onChangeDescription}
        />
        <ButtonCont>
          <AddButton type="submit" onClick={onAddButton}>
            Add
          </AddButton>
        </ButtonCont>
      </SubContainer>
      <SubContainer2>
        {len !== 0 ? (
          <NoteContainer>
            {list.map(each => (
              <NoteItem key={each.id} each={each} />
            ))}
          </NoteContainer>
        ) : (
          <NoData>
            <EmptyNotesImg
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <NoDataHeading>No Notes Yet</NoDataHeading>
            <NoDataText>Notes you add will appear here</NoDataText>
          </NoData>
        )}
      </SubContainer2>
    </MainCont>
  )
}

export default Notes

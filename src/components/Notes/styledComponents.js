import styled from 'styled-components'

export const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`
export const MainHead = styled.h1`
  padding: 10px;
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 30px;
`
export const SubContainer = styled.form`
  height: 250px;
  width: 80%;
  border: solid #cbd5e1 1px;
  border-radius: 5px;
  padding: 5px;
`
export const InputTitle = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  padding: 2px;
`
export const InputDescription = styled.textarea`
  width: 100%;
  height: 150px;
  border-style: none;
  padding: 4px;
`
export const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const AddButton = styled.button`
  width: 100px;
  height: 40px;
  text-align: center;
  color: #ffffff;
  background-color: #4c63b6;
  border: none;
`
export const SubContainer2 = styled.ul`
  width: 80%;
  border-radius: 5px;
  padding: 5px;
  margin: 15px;
`

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 650px;
  padding: 5px;
  margin: 10px;
`

export const NoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
`

export const EmptyNotesImg = styled.img`
  width: 150px;
`

export const NoDataHeading = styled.h1`
  font-size: 20px;
  color: #1e293b;
  font-family: 'Roboto';
`

export const NoDataText = styled.p`
  font-size: 14px;
  color: #334155;
  font-family: 'Roboto';
`

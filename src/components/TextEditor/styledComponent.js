import styled from 'styled-components'

export const Button1 = styled.button`
  background: transparent;
  border: 0px;
  margin-right: 10px;
  color: ${props => (props.isBold ? '#faff00' : '#f1f5f9')};
`

export const Button2 = styled.button`
  background: transparent;
  border: 0px;
  margin-right: 10px;
  color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9')};
`

export const Button3 = styled.button`
  background: transparent;
  border: 0px;
  margin-right: 10px;
  color: ${props => (props.isUnderline ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 50vh;
  background: #25262c;
  border: 1px solid #334155;
  border-bottom-left-radius: 5px;
  border-bottom-left-radius: 5px;
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  outline: none;
  padding: 20px;
  color: #f8fafc;
  font-size: 24px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
`

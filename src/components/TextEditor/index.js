import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Button1, Button2, Button3, TextArea} from './styledComponent'

import './index.css'

class TextEditor extends Component {
  state = {
    bold: false,
    italic: false,
    underline: false,
  }

  bold = () => {
    this.setState(prev => ({bold: !prev.bold}))
  }

  italic = () => {
    this.setState(prev => ({italic: !prev.italic}))
  }

  underline = () => {
    this.setState(prev => ({underline: !prev.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state

    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="image-heading-container">
            <h1 className="heading">Text Editor</h1>
            <div className="image-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png "
                alt="text editor"
              />
            </div>
          </div>
          <div className="text-button-container">
            <ul className="button-container">
              <li>
                <Button1
                  className="button"
                  data-testid="bold"
                  type="button"
                  isBold={bold}
                  onClick={this.bold}
                >
                  <VscBold size={25} />
                </Button1>
              </li>
              <li>
                <Button2
                  className="button"
                  data-testid="italic"
                  type="button"
                  isItalic={italic}
                  onClick={this.italic}
                >
                  <GoItalic size={25} />
                </Button2>
              </li>
              <li>
                <Button3
                  className="button"
                  data-testid="underline"
                  type="button"
                  isUnderline={underline}
                  onClick={this.underline}
                >
                  <AiOutlineUnderline size={25} />
                </Button3>
              </li>
            </ul>
            <hr className="line" />
            <TextArea isBold={bold} isItalic={italic} isUnderline={underline} />
          </div>
        </div>
      </div>
    )
  }
}
export default TextEditor

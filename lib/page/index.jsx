import CtrlComponent from 'ctrl-react-component'
import React from 'react'
import propTypes from 'prop-types'

class Page extends CtrlComponent {
  renderFiltered() {
    const props = this.props

    document.title = props.title

    return (
      <div id={props.id} className='page'>
        {props.children}
      </div>
    )
  }

  static propTypes = {
    id: propTypes.string.isRequired,
    title: propTypes.string,
  }
}

export default Page

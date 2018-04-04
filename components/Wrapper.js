import React from 'react'

export default class Wrapper extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div style={{ border: '1px solid blue', padding: '10px' }}>
        {this.props.children}
      </div>
    )
  }
}
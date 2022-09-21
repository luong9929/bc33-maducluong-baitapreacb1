import React, { Component } from 'react'
import Body from './BaiTapThucHanhLayout/Body/Body'
import Foodter from './BaiTapThucHanhLayout/Footer/Foodter'
import Header from './BaiTapThucHanhLayout/Header/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Foodter/>
      </div>
    )
  }
}

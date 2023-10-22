import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Item from './Item'
import Banner from './Banner'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Banner/>
        <Item/>
        <Footer/>
      </div>
    )
  }
}

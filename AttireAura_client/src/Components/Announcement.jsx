import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    height:30px;
    background-color: #2c2f2f;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <div>
      <Container>
      Unbeatable Summer Sale: Refresh Your Wardrobe with Trendy Styles!
      </Container>
    </div>
  )
}

export default Announcement

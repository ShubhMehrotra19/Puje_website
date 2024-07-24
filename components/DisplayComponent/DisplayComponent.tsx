"use client"
import React, { useEffect } from 'react'
import MainPage from '../MainPage/mainPage'
import VideoScreen from '../videoScreen/videoScreen'
import gsap from 'gsap'

interface Props {}

function DisplayComponent(props: Props) {
  const {} = props
const [show, setShow] = React.useState(false)

useEffect(() => {
  setTimeout(() => {
    setShow(true)
  }, 4000)
},[show])
  return (
    <>
    {show ? <MainPage /> : <VideoScreen />}
    </>
  )
}

export default DisplayComponent

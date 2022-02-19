import Image from 'next/image'
import mypic from './bba1acab429c4064a45868af07c3e384.png'

const MyImage = (props) => {
  return (
    <Image
      src={mypic}
      alt="Picture of the author"
      width="350px"
      height="300px"
    />
  )
import React from 'react'
import ImageGallery from 'react-image-gallery';
// import Navbar from '../components/Navbar';
import '../App.css';

function Page1(){
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ]
    return <div className="page">
        {/* <Navbar></Navbar> */}
        <div className = 'gallery'>
      <ImageGallery items={images} />
      </div>
    </div>
}

export default Page1
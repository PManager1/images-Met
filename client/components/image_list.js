import React from 'react';
import ImageDetail from './image_detail';
import axios from 'axios';


// axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


const IMAGES = [
  { title: 'Pen', link: 'https://dummyimage.com/600x400' },
  { title: 'Pine Tree', link: 'https://dummyimage.com/600x400' },
  { title: 'Mug', link: 'https://dummyimage.com/600x400' }
];


const ImageList = () => {
  const RenderedImages = IMAGES.map( (image) => {
      return  <ImageDetail key={image.title} image={ image }/>
  });

        return (
          <ul className="media-list list-group">
           {RenderedImages}
          </ul>
        );
};

export default ImageList;

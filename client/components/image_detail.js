import React from 'react';


const ImageDetail = (props) => {
        return (
          <li>
            <img src="https://dummyimage.com/600x400" />
            { props.image.title }
          </li>
        );
};

export default ImageDetail;

import React, { Component } from 'react';
import Unsplash from "unsplash-js";
// import Slideshow from 'Slideshow';
import axios from 'axios';
// import Image from './Image';

// const unsplash = new Unsplash({
//     applicationId: '5f282b6b60ee8b4f9e3ba90f878b1c94983f8dc738913d8d7cb8b24f37b0cdc9',
//     secret: '8fbaba616470b61c3b8ee3a3aa4902fadd487f9e04b715cb494476ca1cab7503'
// });

const unsplash = new Unsplash({
  applicationId: "b564c9e1c812ab8af76d47abe7031f1acf82c87adfb486025fecb84f6252ea14",
  secret: "2094838e590ea5496f25152e86dce356e7f498aa63f33218768bf002b48ee9ba"
});

class Images extends Component {
    state = {
      // images: [4],
      // city: ""
    };
  
    componentDidMount() {
      // const { city } = this.state;
      // axios
      //   .get(`/api/photos/${city}`)
      //   .then(res => this.setState({ images: res.data }));
    }
  
    fetchImages = async () => {
        let res = await unsplash.search.photos("clouds", 1);
        console.log(res)
        res = await res.json();
        console.log(res);
    //   const { city } = this.state;
    //   this.setState({ start: this.state.start + count });
    //   axios
    //     .get(`/api/photos?count=${count}&start=${start}`)
    //     .then(res =>
    //       this.setState({ images: this.state.images.concat(res.data) })
    //     );
    };
  
    render() {
      return (
        <div className='images'>
        <button onClick={this.fetchImages}>Images</button>
          {/* <Images
            dataLength={this.state.images.length}
            next={this.fetchImages}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {this.state.images.map(image => (
              <Image key={image.id} image={image} />
            ))}
          </Images> */}
        </div>
      );
    }
  }
  
  export default Images;
import React,{Component} from 'react';
import axios from 'axios'
import Image from "react-graceful-image";

export default class UserImages extends Component {
  constructor(props){
    super(props)
    this.state = {
      images: []
    }
  }

  componentDidMount(){
    axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${this.props.user_id}`)
    .then((response) => {
      // handle success
      console.log(response);
      this.setState({
        images: response.data
      })
    })
    .catch((error) =>{
      // handle error
      console.log(error);
    })
  }

  render(){
    const {images} = this.state
    return (
      <>
        {
          images.map(image =>
            <Image 
              src={image} 
              width="200px" 
              alt=""
            />
          )
        }
      </>
    )
  }
}

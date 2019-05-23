import React, {Component} from 'react';
import NavBar from './NavBar'

class AboutPage extends Component {

  render() {
    return (<div><NavBar currentPage='about'/>
      <h1>ABOUT ME</h1>
      <div className='about-me'>
      <img className='headshot' src='https://res.cloudinary.com/dczipv49x/image/upload/v1558388280/FullSizeRender_wxewcj.jpg'/>
      <p className='bio'>
      Izzy is an artist currently based outside of Philadelphia, PA, and has been tattooing at Intimate Body
       Art Studios in Glenside since January of 2017. While she has experience with many different styles, subjects, and skin
       types, Izzy primarily enjoys tattooing botanical and nature tattoos in a neotraditional style.</p>
      <p className='bio'>
       Aside from tattooing, Izzy has been an artist for as long as she can remember, and has been lucky enough to work in
        a wide range of mediums such as acrylic paint, polymer clay, colored pencils, watercolor, wood, and fiber media, and
        have a plethora of art-related jobs. She’s been a studio assistant to a puppet maker and a glass artist, has worked
        at UPenn’s Institute of Contemporary Art on their installation crew, and has done prop, set design, and carpentry
        work in theaters in three different states.
        </p>
       <p className='bio'> Izzy is always interested in learning more about the art she has access to, and one of her favorite things
       about tattooing is learning the stories and science behind the subjects her clients give her. She lives with
       her cat/studio assistant Raleigh, who she affectionately calls Ralphie, small man, and pook.
       </p>
      </div>
    </div>);
  }

}

export default AboutPage;

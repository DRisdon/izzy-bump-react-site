import React, {Component} from 'react';
import NavBar from './NavBar'

class AboutPage extends Component {

  render() {
    return (<div><NavBar currentPage='about'/>
      <h1>ABOUT THE ARTIST</h1>
      <div className='about-me'>
      <img className='headshot' src='https://res.cloudinary.com/dczipv49x/image/upload/v1612716069/bio_wqodat.jpg' alt="Izzy"/>
      <p className='bio'>
      Izzy is an artist based at Junkyard Ink in Louisville, Colorado, a ten minute drive outside of Boulder. She started her tattoo career at Intimate Body Art Studios
      outside of Philadelphia, Pennsylvania in January of 2017, and moved to Boulder the summer of 2019. While she has experience with many different styles, subjects,
      and skin types, Izzy primarily enjoys tattooing botanical and nature tattoos in a neotraditional style. She loves the challenge of coverups, and hopes to provide
      complimentary scar coverups in the future. For Izzy, tattoo art is about body positivity, artistic expression, and self love. The support she gives her clients in
      helping them love themselves and their bodies a little bit more is the most fulfilling part of her job.</p>
      <p className='bio'>
      Aside from tattooing, Izzy has been an artist for as long as she can remember, and has been lucky enough to work in a wide range of
      mediums such as acrylic paint, gouache, colored pencils, watercolor, wood, polymer clay, and fiber media. She’s been a studio assistant
      to a puppet maker and a glass artist, has worked at UPenn’s Institute of Contemporary Art on their installation crew, and has done prop,
      set design, and carpentry work in theaters in three different states. In addition to tattooing, she is a practicing witch who reads
      tarot and uses magic as self care. She frequently shares aspects of her practice on her Instagram, <a href="https://www.instagram.com/isabump/" target="_blank">@isabump</a>.</p>
       <p className='bio'>
       Izzy is always interested in learning more about the art she has access to. One of her favorite
       things about tattooing is learning the stories and science behind the subjects her clients give her.
       She lives with her boyfriend Junji, and their two cats, Lily and Ralph (who you may see tattooed on her shoulder if you pay her a visit!).
       </p>
      </div>
    </div>);
  }

}

export default AboutPage;

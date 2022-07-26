import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Slide.css";
import "../destinationslide/Item"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Slide() {
  return (
    <>
      <h2 className="desti"><strong>Holidays- Top Destination</strong></h2>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item><img className="taj" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Taj_Mahal_2%2C_Agra%2C_India.jpg"/><div className="bottomcenter1">AGRA</div></Item>

          <Item><img className="taj" src="https://vitaratours.com/wp-content/uploads/2021/04/i-love-ooty.jpg"/><div className="bottomcenter2">OOTY</div></Item>

          <Item><img className="taj" src="https://static.toiimg.com/thumb/msid-82446672,width-748,height-499,resizemode=4,imgsize-200897/.jpg"/><div className="bottomcenter3">LADAKH</div></Item>

          <Item><img className="taj" src="https://www.outlookindia.com/outlooktraveller/public/uploads/2017/02/ujjain3-1024x683.jpg"/><div className="bottomcenter4">UJJAIN</div></Item>

          <Item><img className="taj" src="https://stayatpurijagannatha.in/img/images/desk.jpg"/><div className="bottomcenter5">PURI</div></Item>

          <Item><img className="taj" src="https://seoimgak.mmtcdn.com/blog/sites/default/files/images/Rameshwaram-temple.jpg"/><div className="bottomcenter6">RAMESHWARAM</div></Item>

          <Item><img className="taj" src="https://www.learnreligions.com/thmb/n6fBq-MvXrTsO8bwpviXSiVzkgI=/2128x1197/smart/filters:no_upscale()/evening-at-varanasi-610625330-58e54bd25f9b58ef7e7c8bb9.jpg"/><div className="bottomcenter7">VARANASI</div></Item>

          <Item><img className="taj" src="https://static2.tripoto.com/media/filter/tst/img/OgData/1609564964_beautiful_ghats_of_vrindavan_1.jpg"/><div className="bottomcenter8">VRINDAVAN</div></Item>

          <Item><img className="taj" src="https://dynamic.tourtravelworld.com/package-images/photo-big/dir_8/233281/318450.jpg"/><div className="bottomcenter9">GUJRAT</div></Item>

          <Item><img className="taj" src="https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg"/><div className="bottomcenter10">JAIPUR</div></Item>

          <Item><img className="taj" src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"/><div className="bottomcenter11">NEW DELHI</div></Item>

          <Item><img className="taj" src="https://www.holidify.com/images/bgImages/GWALIOR.jpg"/><div className="bottomcenter12">GWALIOR</div></Item>
        </Carousel>
      </div>
    </>
  );
}

export default Slide;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
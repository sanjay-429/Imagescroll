import axios from "axios";
import React, { useEffect } from "react";
import Unsplace from "./Unsplace";
import "./styles.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonery from "react-masonry-css";

export default function App() {
  const [image, setImage] = React.useState([]);
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=CQXHhqrlWPxv5OGBtCxrYm75XYh9JiGRRcJhIUF8ayQ"
      )
      .then((res) => setImage([...image, ...res.data]));
  };

  const breakpointsclm = {
    default: 6,
    1200: 3,
    992: 3,
    768: 2,
    576: 1
  };

  return (
    <div className="App">
      <InfiniteScroll
        dataLength={image.length}
        next={fetchImages}
        loadMore={()=>fetchImages()}
        hasMore={true}
      >
        <Masonery
          breakpointCols={breakpointsclm}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {image.map((imag) => (
            <Unsplace url={imag.urls.thumb} key={imag.id} />
          ))}
        </Masonery>
      </InfiniteScroll>
    </div>
  );
}

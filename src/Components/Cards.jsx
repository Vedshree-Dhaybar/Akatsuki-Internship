// import PropTypes from "prop-types";

function Cards() {
  return (
    <>
      <div className="blog">
        <h2 className="h2">Latest Blog Post</h2>

        <div className="blog-card-group">
          <div className="blog-card">
            <div className="blog-card-banner">
              <img
                src={props.blogImage}
                alt={props.title}
                width="250"
                className="blog-banner-img"
              />
            </div>

            <div className="blog-content-wrapper">
              <button className="blog-topic text-tiny">{props.label}</button>

              <h3>
                <a href="#" className="h3">
                  {props.title}
                </a>
              </h3>

              <p className="blog-text">{props.text}</p>

              <div className="wrapper-flex">
                <div className="profile-wrapper">
                  <img src={props.profilePic} alt={props.author} width="50" />
                </div>

                <div className="wrapper">
                  <a href="#" className="h4">
                    {props.author}
                  </a>

                  <p className="text-sm">
                    <time datetime="2022-01-17">{props.date}</time>
                    <span className="separator"></span>
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT3M">{props.time}</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="btn load-more">Load More</button>
    </>
  );
}

export default Cards;

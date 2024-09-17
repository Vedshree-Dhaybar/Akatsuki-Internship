import Cards from "./Cards.jsx";
import data from "./data.jsx";

function Blogs() {
  return (
    <>
      {data.blogInfo.map((card, index) => {
        return (
          <Cards
            img={card.img}
            title={card.title}
            label={card.label}
            desc={card.desc}
            profile={card.profile}
            author={card.author}
            date={card.date}
            time={card.time}
          />
        );
      })}
    </>
  );
}
export default Blogs;

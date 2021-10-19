import * as Icon from "react-bootstrap-icons";

export default function StarRating(props) {
  let temp = [];
  let stars = props.rating;

  while (stars >= 0.5) {
    if (stars >= 1) {
      temp.push(<Icon.StarFill className="stars" />);
    } else {
      temp.push(<Icon.StarHalf className="stars" />);
    }
    stars -= 1;
  }

  while (temp.length < 5) {
    temp.push(<Icon.Star className="stars" />);
  }

  return temp;
}
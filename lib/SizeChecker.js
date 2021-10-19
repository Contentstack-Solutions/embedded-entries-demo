import {Col} from 'react-bootstrap';

export default function SizeChecker(props) {
  let sizes = ['xs', 's', 'm', 'l', 'xl'];
  let temp = []

  if (!props.sizes) {
    sizes.map((size) => {
            temp.push(<div className="size size-out-stock"><p>{size}</p></div>)
        })
    return temp
  }

  sizes.map((size) => {
    if (props.sizes[size] === 0) {
        temp.push(<div className="size size-out-stock"><p>{size}</p></div>)
    }
    else {
        temp.push(<div className="size size-in-stock"><p>{size}</p></div>)
    }
    })

  return temp;
}
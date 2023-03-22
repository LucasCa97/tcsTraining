import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchData } from '../actions/index';

const CardOne = () => {
const data = useSelector(state => state.fetch)
const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchData());
}, []);

  return (
    <div className="d-flex flex-row flex-wrap">
          {data.map((user) => (
            <Card key={user.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={user.avatar} />
          <Card.Body>
            <Card.Title>{user.first_name} {user.last_name}</Card.Title>
            <Card.Text>
              ID: {user.id} Email: {user.email}
            </Card.Text>
          </Card.Body>
        </Card>
          ))}
    </div>
  )
}

export default CardOne;

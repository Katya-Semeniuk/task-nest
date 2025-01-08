import { useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import StatusFilter from "../../pages/tasks/StatusFilter";

import { Container, Row, Col, Button } from "react-bootstrap";

export const DashboardPage = () => {
  const currentUser = useCurrentUser();
  const [statusPageOpened, setStatusPageOpened] = useState(false);

 const handeClick =()=> {
  setStatusPageOpened(!statusPageOpened);
 }

  return (
    <Container>
      <Row>
        <Col>
        {currentUser &&   <p>Hello, {currentUser.username}</p>}
        <Button onClick={handeClick}
            type="button"
          >
            {statusPageOpened ? 'Go Back' : 'Open StatusFilterPage'}
          </Button>
          {statusPageOpened && <StatusFilter />}
          
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;

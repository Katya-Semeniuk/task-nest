import { useCurrentUser } from "../../contexts/CurrentUserContext";

import { Container, Row, Col } from "react-bootstrap";

export const DashboardPage = () => {
  const currentUser = useCurrentUser();

  return (
    <Container>
      <Row>
        <Col>{currentUser && <p>Hello, {currentUser.username}</p>}</Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;

import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible({ teamName }) {
  const [show, setShow] = useState(true);

  let prompt = `You have successfully delete ${teamName}`;

  return (
    <>
      <Alert show={show} variant="secondary">
        <Alert.Heading>Deletion</Alert.Heading>
        <p>{prompt}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-secondary">
            Close
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default AlertDismissible;
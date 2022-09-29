import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import addNotification from 'react-push-notification';

const Div = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const Button = styled.button`
  height: 50px;
  width: 150px;
  font-size: 1.3rem;
  text-transform: uppercase;
  border: 2px solid black;
  border-radius: 25px;
  box-shadow: 1px 1px 1px 2px grey;
`;

const buttonClick = () => {
  addNotification({
    title: 'Einfacher Test',
    subtitle: 'Für die React push notifications',
    message: 'Für die React push notifications',
    theme: 'darkblue',
    native: true
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Div>
      <Button onClick={buttonClick}>
        Click me
      </Button>
    </Div>
  </React.StrictMode>
);
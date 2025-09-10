import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
  Image,
} from '@aws-amplify/ui-react';

function App({ signOut }) {
  return (
      <div>
      <h1>You logged In</h1>
       <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);

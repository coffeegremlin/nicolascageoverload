import './App.css';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App({ signOut, user }) {
  return (
    <>
      {/* add some kinda to do or carousel nic cage here */}
      <Heading level={1}>What's up {user.username}, do you also love Nic Cage?</Heading>
      <Button onClick={signOut}>Sign Out</Button>
    </>
  );
}

export default withAuthenticator(App);

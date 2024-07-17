import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';
import SignUp from '../../components/sign-up-form/sign-up.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>Sign In</button>
      <SignUp />
    </div>
  );
};

export default SignIn;

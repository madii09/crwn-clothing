import SignUp from '../../components/sign-up-form/sign-up.component';
import SignIn from '../../components/sign-in-form/sign-in.component';
import './authentication.scss';

const Authentication = () => {
  return (
    <div className='auth-container'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;

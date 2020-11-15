import React, { useContext, useState } from 'react';
import { AppContext } from '../../authentication/AppContext';
import { LanguageContext } from '../../authentication/LanguageContext';
import auth from '../../authentication/database';
import { useForm } from "react-hook-form";
import renderAccountFormInputs from '../../components/RenderAccountFormInputs';
import { PageNavigationTypes } from '../../utils/variables';
import languagePack from '../../utils/languagePack';
import NavigationBar from '../../components/NavigationBar';

interface sendRequestToChangePasswordInteface {
  oldPassword: string;
  newPassword: string;
  newPasswordRepeat: string;
}

const ChangePasswordPage: React.FC = ({ history }: any) => {
  const { setLoggedIn } = useContext(AppContext);
  const { language } = useContext(LanguageContext);
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState('')

  const ChangePasswordInputData = [{
    name: "oldPassword",
    type: "text",
    placeholder: languagePack[language].oldPassword,
    ref: register({ required: true, pattern: /^[a-zA-Z0-9-]+$/i, minLength: 2, maxLength: 50 }),
    errors: errors.oldPassword
  },
  {
    name: "newPassword",
    type: "text",
    placeholder: languagePack[language].newPassword,
    ref: register({ required: true, pattern: /^[a-zA-Z0-9-]+$/i, minLength: 2, maxLength: 50 }),
    errors: errors.newPassword
  },
  {
    name: "newPasswordRepeat",
    type: "text",
    placeholder: languagePack[language].newPasswordRepeat,
    ref: register({ required: true, pattern: /^[a-zA-Z0-9-]+$/i, minLength: 2, maxLength: 50 }),
    errors: errors.newPasswordRepeat
  }];

  const changePasswordAndForceUserToLogAgain = async (newPassword: string) => {
    setMessage(await auth.changeUserPassword(newPassword));

    setTimeout(() => {
      setMessage(languagePack[language].LogAgainMessage)
    }, 1000);
    return setTimeout(() => {
      auth.logout();
      setLoggedIn!({});
    }, 2000);
  }

  const checkPassword = (oldPassword: string, newPassword: string, newPasswordRepeat: string) => {
    if (newPassword === newPasswordRepeat) {
      if (newPassword !== oldPassword)
        return changePasswordAndForceUserToLogAgain(newPassword)

      return setMessage(languagePack[language].theSamePasswordError);
    }

    return setMessage(languagePack[language].checkNewPasswordError);
  }

  const sendRequestToChangePassword = async ({ oldPassword, newPassword, newPasswordRepeat }: sendRequestToChangePasswordInteface) => {
    const response = await auth.checkIfPasswordIsCorrect(oldPassword);

    if (response)
      return checkPassword(oldPassword, newPassword, newPasswordRepeat);

    return setMessage(languagePack[language].checkOldPasswordError)
  };

  return (
    <section className='change-password-page'>
      <NavigationBar type={PageNavigationTypes.DEFAULT} history={history} placeholder={languagePack[language].changePasswordText} />
      <form onSubmit={handleSubmit(sendRequestToChangePassword)}>
        {renderAccountFormInputs(ChangePasswordInputData)}
        {message && <p className='change-password-message'>{message}</p>}
        <input className="send-form-button" type="submit" value={languagePack[language].changeUserSettingsInputValue} />
      </form>
    </section>
  );
};

export default ChangePasswordPage;
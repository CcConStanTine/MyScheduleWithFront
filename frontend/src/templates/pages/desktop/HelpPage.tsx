import React, { useContext } from 'react';
import { LanguageContext } from '../../../authentication/LanguageContext';
import RenderHeader from '../../../components/desktop/RenderHeader';
import languagePack from '../../../utils/languagePack';
import { userQuestions } from '../../../utils/variables';
import renderHelpQuestion from '../../../components/desktop/renderUserQuestionOrOptions';

const HelpPage = (): JSX.Element => {
    const { language } = useContext(LanguageContext);

    return (
        <section className='help-page-desktop'>
            <RenderHeader header={languagePack[language].HELP.title} />
            {renderHelpQuestion(userQuestions[language])}
        </section>
    )
}

export default HelpPage;
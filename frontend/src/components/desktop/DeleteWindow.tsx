import React, { MouseEvent, useContext } from 'react';
import DataRequests from '../../authentication/DataRequests';
import { LanguageContext } from '../../authentication/LanguageContext';
import { PlanTypes } from '../../utils/enums';
import { DeleteMessage } from '../../utils/interfaces';
import languagePack from '../../utils/languagePack';
import { DeleteWindowDefaultValues } from '../../utils/variables';

const DeleteWindow = ({ setDeleteWindow, deleteWindow }: DeleteMessage) => {
    const { language } = useContext(LanguageContext);

    const deleteTask = async () => {
        const { status } = await DataRequests.deletePlanByTypeAndId(PlanTypes.DAY, deleteWindow.id!);

        return !status && setDeleteWindow(DeleteWindowDefaultValues);
    }

    const closeWindow = (event: MouseEvent) => {
        setDeleteWindow(DeleteWindowDefaultValues);
        event.stopPropagation();
    }

    return (
        <div className='delete-container' onClick={closeWindow}>
            <div className='delete-window' onClick={event => event.stopPropagation()}>
                <p>{languagePack[language].VIEWENTRY.deleteTask}</p>
                <div>
                    <button
                        onClick={deleteTask}
                        className='desktop-default-button two'>
                        {languagePack[language].VIEWENTRY.deleteTaskConfirm}
                    </button>
                    <button
                        onClick={() => setDeleteWindow(DeleteWindowDefaultValues)}
                        className='desktop-default-button two'>
                        {languagePack[language].GLOBAL.cancel}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteWindow;
import { appName } from './variables';
import { languageInterface } from './interfaces';

const languagePack: languageInterface = {
    'en-US': {
        signOutText: 'Sign Out',
        todayPlansText: "Today's plans:",
        otherPlansText: "Other plans:",
        darkModeText: "Dark Mode",
        languageText: "Language",
        changePasswordText: "Change Password",
        checkOldPasswordError: "Old password is wrong",
        checkNewPasswordError: "New passwords are not equal",
        changeUsernameText: "Change Username",
        LogAgainMessage: "You need to log in again",
        theSamePasswordError: "New password can't be the same like a previous one",
        settingsNavigationText: "Settings",
        changeUserEmail: "Change Email",
        changedUserEmailSuccessfully: "Email changed successfully",
        changedUsernameSuccessfully: "Username changed successfully",
        checkOldEmailError: "Current email is wrong",
        theSameEmailError: "New email can't be the same like a previous one",
        theSameUsernameError: "New username can't be the same like a previous one",
        changeUserSettingsInputValue: "Save",
        checkPasswordError: "Password is wrong",
        continueWithoutSigningInMessage: "Continue Without Signing In",
        appWelcomeSpanMessage: "or",
        signUp: "Sign Up",
        loginIn: "Log In",
        successfullyLoggedIn: 'Successfully',
        errorLoggedIn: 'Username or Password might be wrong',
        appLogoDescription: `${appName} logo`,
        createAccountText: "Create Account",
        appWelcomeMessage: "Hello there general kenobi. Hello there general kenobi",
        username: 'username',
        password: 'password',
        firstName: 'first name',
        lastName: 'last name',
        email: 'e-mail',
        search: 'Search schedule',
        currentEmail: 'Enter your current email',
        newEmail: 'Enter your new email',
        oldPassword: 'Old Password',
        newPassword: 'New Password',
        newPasswordRepeat: 'Repeat New Password',
        newUsername: 'Enter new username',
        userPhotoText: 'Change User Photo',
        uploadImageSuccessed: 'Image Uploaded Successfully',
        deleteImageSuccessed: 'Image Deleted Successfully',
        selectPhoto: 'Select Photo',
        uploadImage: 'Upload',
        deletePhoto: 'Delete Photo',
        viewEntry: 'View',
        viewEndDate: 'End Time',
        viewStartDate: 'Start Time',
        viewFulfilledPlan: 'This task has been completed',
        viewPlanDescription: 'Task Description',
        cancelText: 'Cancel',
        deleteText: 'Delete',
        entryDeleteText: "Are you sure? You won't be able to get your task back",
        successfulyFulfilledText: 'Have you finished this task?',
        successfulyFulfilledTextSendOption: 'I have',
        unFulfilledText: 'Do u want to restore this task?',
        unFulfilledTextSendOption: 'I do',
        january: 'January',
        february: 'February',
        march: 'March',
        april: 'April',
        may: 'May',
        june: 'June',
        july: 'July',
        august: 'August',
        september: 'September',
        october: 'October',
        november: 'November',
        december: 'December',
        yearPlanText: 'Year Plan',
        monthPlanText: 'Month Plan',
        dayPlanText: 'Day Plan',
        addEntryText: 'Add task',
        inputDateAcceptText: 'Done',
        inputDateMonthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        inputPlaceholderEndText: 'Select end date',
        inputPlaceholderStartText: 'Select start date',
        textareaPlaceholderText: 'Description',
    },
    'pl-PL': {
        signOutText: 'Wyloguj się',
        todayPlansText: "Dzisiejsze plany:",
        otherPlansText: "Inne plany:",
        darkModeText: "Tryb nocny",
        languageText: "Język",
        changePasswordText: "Zmień hasło",
        checkOldPasswordError: "Aktualne hasło jest błędne",
        checkNewPasswordError: "Nowe hasła nie są identyczne",
        changeUsernameText: "Zmień nazwę użytkownika",
        LogAgainMessage: "Musisz jeszcze raz się zalogować",
        theSamePasswordError: "Nowe hasło nie może być takie same jak stare",
        settingsNavigationText: "Ustawienia",
        changeUserEmail: "Zmień email",
        changedUserEmailSuccessfully: "Udało się zmienić email",
        changedUsernameSuccessfully: "Udało się zmienić nazwę użytkownika",
        checkOldEmailError: "Aktualny email jest błędny",
        theSameEmailError: "Nowy email nie może być taki sam jak poprzedni",
        theSameUsernameError: "Nowa nazwa użytkownika nie może być taka sama jak poprzednia",
        changeUserSettingsInputValue: "Zapisz",
        checkPasswordError: "Hasło jest błędne",
        continueWithoutSigningInMessage: "Kontynuuj bez rejestracji",
        appWelcomeSpanMessage: "lub",
        signUp: "Zarejestruj się",
        loginIn: "Zaloguj się",
        successfullyLoggedIn: 'Zalogowano',
        errorLoggedIn: 'Nazwa użytkownika lub hasło jest błędne',
        appLogoDescription: `${appName} logo`,
        createAccountText: "Zarejestruj",
        appWelcomeMessage: "Hello there general kenobi. Hello there general kenobi",
        username: 'Nazwa użytkownika',
        password: 'Hasło',
        firstName: 'Imie',
        lastName: 'Nazwisko',
        email: 'E-mail',
        search: 'Wyszukaj plan',
        currentEmail: 'Aktualny e-mail',
        newEmail: 'Nowy e-mail',
        oldPassword: 'Aktualne hasło',
        newPassword: 'Nowe hasło',
        newPasswordRepeat: 'Powtórz nowe hasło',
        newUsername: 'Nowa nazwa użytkownika',
        userPhotoText: 'Zmień zdjęcie użytkownika',
        uploadImageSuccessed: 'Udało się zmienić zdjęcie.',
        deleteImageSuccessed: 'Zdjęcie zostało usunięte',
        selectPhoto: 'Wybierz zdjęcie',
        uploadImage: 'Prześlij',
        deletePhoto: 'Usuń zdjęcie',
        viewEntry: 'Podgląd',
        viewStartDate: 'Godzina rozpoczęcia',
        viewEndDate: 'Godzina zakończenia',
        viewFulfilledPlan: 'Zadanie zostało ukończone',
        viewPlanDescription: 'Opis zadania',
        cancelText: 'Anuluj',
        deleteText: 'Usuń',
        entryDeleteText: 'Na pewno? Nie będzie można przywrócić tego zadania',
        successfulyFulfilledText: 'Czy chcesz ukończyć to zadanie?',
        successfulyFulfilledTextSendOption: 'Ukończ',
        unFulfilledText: 'Czy chcesz aktywować to zadanie?',
        unFulfilledTextSendOption: 'Aktywuj',
        january: 'Styczeń',
        february: 'Luty',
        march: 'Marzec',
        april: 'Kwiecień',
        may: 'Maj',
        june: 'Czerwiec',
        july: 'Lipiec',
        august: 'Sierpień',
        september: 'Wrzesień',
        october: 'Październik',
        november: 'Listopad',
        december: 'Grudzień',
        yearPlanText: 'Rok',
        monthPlanText: 'Miesiąc',
        dayPlanText: 'Dzień',
        addEntryText: 'Dodaj swoje zadanie',
        inputDateAcceptText: 'Wybierz',
        inputDateMonthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
        inputPlaceholderEndText: 'Wybierz datę ukończenia',
        inputPlaceholderStartText: 'Wybierz datę rozpoczęcia',
        textareaPlaceholderText: 'Opis zadania',
    }
}

export default languagePack;

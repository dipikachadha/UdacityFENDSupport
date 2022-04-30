// Reference: The final product from Lesson 4, Concept 8:
// https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0430/modules/c73f80be-8f45-406d-a709-8123a69e6d52/lessons/722ecfe4-3174-4a6e-8638-ea0ab8eb49ac/concepts/d8172904-6de9-4216-86e9-8b5a093d50aa
import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/form.scss';
import './styles/footer.scss';
import './styles/header.scss';


console.log(checkForName, handleSubmit);

export {
    checkForName,
    handleSubmit,
};

/**
 * Questionnaire page js here
 */
import './questionnaire.scss'
import contentLoaded from '../assets/js/vendor/contentloaded.js'
import initTelInputs from '../assets/js/intl-tel-input.js'
import MultiStepFormInit from '../assets/js/multi-step-form.js'

contentLoaded(window, function (e) {
    initTelInputs()
    MultiStepFormInit()
});
import './sections.scss';
import accordion from "../assets/js/accordion";
import { initModals, exitIntent } from "../assets/js/modal";
import contentLoaded from "../assets/js/vendor/contentloaded";
import timer from '../assets/js/timer';
import rolodex from '../assets/js/rolodex';
import initTelInputs from '../assets/js/intl-tel-input.js';
import beforeAfter from '../assets/js/before-after.js';
import testimonialTrim from '../assets/js/testimonial-concatenation.js';

contentLoaded(window, () => {
    initModals();
    // exitIntent();
    accordion();
    timer();
    rolodex();
    initTelInputs();
    beforeAfter();
    testimonialTrim();
})
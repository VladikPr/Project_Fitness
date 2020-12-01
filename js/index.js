//polyfills
import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

// Import modules
import watchInputs from './modules/watchInputs';
import dropDown from './modules/dropDown';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import mainSlider from './modules/mainSlider';
import sliderCarousel from './modules/sliderCarousel';
import slider from './modules/slider';
import sendForm from './modules/sendForm';
import calculator from './modules/calculator';
import toTop from './modules/toTop';


// Execute modules
window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    // Watch entered value
    watchInputs();
    // Select Fitness Club
    dropDown();
    // Menu
    toggleMenu();
    // Popup
    togglePopUp();
    // Slider header
    mainSlider();
    // Carousel and Galery
    sliderCarousel();
    // Slider
    slider();
    // Calculator
    calculator();
    // Send Data (AJAX) via JSON
    sendForm();
    // Smooth back to page start
    toTop();
});
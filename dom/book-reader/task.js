'use strict';

const book = document.getElementById('book');
const fontSizeControls = document.querySelectorAll('.book__control_font-size .font-size');

const fontSizeClasses = ['book_fs-small', 'book_fs-big'];

fontSizeControls.forEach(control => {
    control.addEventListener('click', (event) => {
        event.preventDefault();

        fontSizeControls.forEach(btn => btn.classList.remove('font-size_active'));

        control.classList.add('font-size_active');

        book.classList.remove(...fontSizeClasses);

        const size = control.dataset.size;
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});

const textColorControls = document.querySelectorAll('.book__control_color .color');

const textColorClasses = ['book_color-black', 'book_color-gray', 'book_color-whitesmoke'];

textColorControls.forEach(control => {
    control.addEventListener('click', (event) => {
        event.preventDefault();

        textColorControls.forEach(btn => btn.classList.remove('color_active'));
        control.classList.add('color_active');

        book.classList.remove(...textColorClasses);

        const textColor = control.dataset.textColor;
        if (textColor) {
            book.classList.add(`book_color-${textColor}`);
        }
    });
});

const bgColorControls = document.querySelectorAll('.book__control_background .color');

const bgColorClasses = ['book_bg-black', 'book_bg-gray', 'book_bg-white'];

bgColorControls.forEach(control => {
    control.addEventListener('click', (event) => {
        event.preventDefault();

        bgColorControls.forEach(btn => btn.classList.remove('color_active'));
        control.classList.add('color_active');

        book.classList.remove(...bgColorClasses);

        const bgColor = control.dataset.bgColor;
        if (bgColor) {
            book.classList.add(`book_bg-${bgColor}`);
        }
    });
});
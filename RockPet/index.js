const saveButton = document.getElementById('saveButton');
const nameField = document.getElementById('nameField')

const rockImage = document.getElementsByClassName('rock');
const blackrock = document.getElementById('blackrock');
const brownrock = document.getElementById('brownrock');
const bluerock = document.getElementById('bluerock');

    const blackpreview = document.getElementsByClassName('blackpreview')[0];
    const brownpreview = document.getElementsByClassName('brownpreview')[0];
    const bluepreview = document.getElementsByClassName('bluepreview')[0];

    blackpreview.addEventListener('click', () => {
        blackrock.style.display = 'block';
        brownrock.style.display = 'none';
        bluerock.style.display = 'none';
    });
    brownpreview.addEventListener('click', () => {
        brownrock.style.display = 'block';
        blackrock.style.display = 'none';
        bluerock.style.display = 'none';
    });
    bluepreview.addEventListener('click', () => {
        bluerock.style.display = 'block';
        blackrock.style.display = 'none';
        brownrock.style.display = 'none';
    });

const mustache1 = document.getElementsByClassName('mustache1')[0];
const mustache2 = document.getElementsByClassName('mustache2')[0];
const mustache1preview = document.getElementsByClassName('mustache1preview')[0];
const mustache2preview = document.getElementsByClassName('mustache2preview')[0];

mustache1preview.addEventListener('click', () => {
    mustache1.style.display = 'block';
    mustache2.style.display = 'none';
});

mustache2preview.addEventListener('click', () => {
    mustache1.style.display = 'none';
    mustache2.style.display = 'block';
})

const googly = document.getElementsByClassName('googly')[0];;
const googlyglasses = document.getElementsByClassName('googlyglasses')[0];
const googlypreview = document.getElementsByClassName('googlypreview')[0];
const googlyglassespreview = document.getElementsByClassName('googlyglassespreview')[0];

googlypreview.addEventListener('click', () => {
    googlyglasses.style.display = 'none';
    googly.style.display = 'block';
});

googlyglassespreview.addEventListener('click', () => {
    googly.style.display = 'none';
    googlyglasses.style.display = 'block';
});

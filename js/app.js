const featureDisplay = document.getElementById('feature-display');
const companyDisplay = document.getElementById('company-display');

// toggle the feature display and hide button
const toggleFeature = () => {
    featureDisplay.classList.toggle('feature-hidden');
    if (featureDisplay.classList.contains('feature-hidden')) {
        featureDisplay.innerHTML = `
        <img src="images/icon-arrow-up.svg" alt="">
        `;
    }
    else {
        featureDisplay.innerHTML = `
        <img src="images/icon-arrow-down.svg" alt="">
        `;
    }
};

// toggle the company display and hide button
const toggleCompany = () => {
    companyDisplay.classList.toggle('company-hidden');
    if (companyDisplay.classList.contains('company-hidden')) {
        companyDisplay.innerHTML = `
        <img src="images/icon-arrow-up.svg" alt="">
        `;
    }
    else {
        companyDisplay.innerHTML = `
        <img src="images/icon-arrow-down.svg" alt="">
        `;
    }
};
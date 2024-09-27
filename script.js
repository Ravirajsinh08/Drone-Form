// Farmer_____Form____start
$(document).ready(function() {
    // Apply masks to input fields
    // $('#calander-date').mask('00/00/0000');
    $('#Acer').mask('00000000');
    $('#KhataNo').mask('00000000');
    $('#SurveyNo').mask('00000000');
    $('#Hector').mask('00000000');
    $('#AdharCardNo').mask('000000000000');
});

// Farmer_____Form____END

// Farmer_____Details____Start
document.addEventListener('DOMContentLoaded', () => {
    const createAccountButton = document.querySelector('.create-account');

    // Check if createAccountButton exists before adding an event listener
    if (createAccountButton) {
        createAccountButton.addEventListener('click', function() {
            // Get input values
            const date = document.getElementById('calander-date')?.value || '';
            const farmerName = document.getElementById('Farmername')?.value || '';
            const acer = document.getElementById('Acer')?.value || '';
            const village = document.getElementById('Village')?.value || '';
            const taluka = document.getElementById('Taluka')?.value || '';
            const district = document.getElementById('District')?.value || '';
            const khataNo = document.getElementById('KhataNo')?.value || '';
            const surveyNo = document.getElementById('SurveyNo')?.value || '';
            const hector = document.getElementById('Hector')?.value || '';
            const crop = document.getElementById('Crop')?.value || '';
            const adharCardNo = document.getElementById('AdharCardNo')?.value || '';
            const latitudeLongitude = document.getElementById('Latitude')?.value || '';

            // Store values in localStorage
            localStorage.setItem('date', date);
            localStorage.setItem('farmerName', farmerName);
            localStorage.setItem('acer', acer);
            localStorage.setItem('village', village);
            localStorage.setItem('taluka', taluka);
            localStorage.setItem('district', district);
            localStorage.setItem('khataNo', khataNo);
            localStorage.setItem('surveyNo', surveyNo);
            localStorage.setItem('hector', hector);
            localStorage.setItem('crop', crop);
            localStorage.setItem('adharCardNo', adharCardNo);
            localStorage.setItem('latitudeLongitude', latitudeLongitude);

            // Redirect to the details page
            window.location.href = './Farmerdetails.html';
        });
    }

    // Retrieve stored values and display them on the details page
    document.querySelector('.FarmerName').innerText = localStorage.getItem('farmerName') || 'N/A';
    document.querySelector('.VillageName').innerText = localStorage.getItem('village') || 'N/A';
    document.querySelector('.Talukapanchyat').innerText = localStorage.getItem('taluka') || 'N/A';
    document.querySelector('.districtName').innerText = localStorage.getItem('district') || 'N/A';
    document.querySelector('.Farmer-Name').innerText = localStorage.getItem('farmerName') || 'N/A';
    document.querySelector('.Village-Name').innerText = localStorage.getItem('village') || 'N/A';
    document.querySelector('.Form-Date').innerText = localStorage.getItem('date') || 'N/A';
    document.querySelector('.Taluka-panchyat').innerText = localStorage.getItem('taluka') || 'N/A';
    document.querySelector('.district').innerText = localStorage.getItem('district') || 'N/A';
    document.querySelector('.KhataNo').innerText = localStorage.getItem('khataNo') || 'N/A';
    document.querySelector('.SurveyNo').innerText = localStorage.getItem('surveyNo') || 'N/A';
    document.querySelector('.Hector').innerText = localStorage.getItem('hector') || 'N/A';
    document.querySelector('.Crop-Name').innerText = localStorage.getItem('crop') || 'N/A';
    document.querySelector('.AdharCardNo').innerText = localStorage.getItem('adharCardNo') || 'N/A';
    document.querySelector('.Latitude-No').innerText = localStorage.getItem('latitudeLongitude') || 'N/A';
});
// Farmer_____Details____End

 
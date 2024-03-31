$(document).ready(function(){
    $('.sidebar a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        // Check if the clicked menu is "Calendar"
        if ($(this).text().trim() === 'Calendar') {
            displayCalendarImages();
        } else {
            $('.content').empty(); // Clear the content area if the clicked menu is not "Calendar"
        }
    });
});

function displayCalendarImages() {
    const calendarImages = [
        'https://i.ibb.co/hKtfSh0/JAN.jpg',
        'https://i.ibb.co/S0r96BY/FEB.jpg',
        'https://i.ibb.co/vcjZx51/MARCH.jpg',
        'https://i.ibb.co/x8LZ2mV/APR.jpg',
        'https://i.ibb.co/NTB5zdK/MAY.jpg',
        'https://i.ibb.co/ngjGvR0/JUNE.jpg',
        'https://i.ibb.co/2ZMnkhF/JULY.jpg',
        'https://i.ibb.co/w7Mjt90/AUG.jpg',
        'https://i.ibb.co/T0C1CZ3/SEPT.jpg',
        'https://i.ibb.co/Q6V2mBp/OCT.jpg',
        'https://i.ibb.co/19YyYBt/NOV.jpg',
        'https://i.ibb.co/VqPtk9C/DEC.jpg'
    ];

    const contentArea = $('.content');
    contentArea.empty(); // Clear existing content

    const calendarGrid = $('<div class="calendar-grid"></div>');

    calendarImages.forEach(function(imageUrl) {
        const image = $('<img>');
        image.attr('src', imageUrl);
        image.on('click', function() {
            openModal(imageUrl);
        });
        calendarGrid.append(image);
    });

    contentArea.append(calendarGrid);
}

function openModal(imageUrl) {
    const modal = $('<div class="modal"></div>');
    const modalContent = $('<div class="modal-content"></div>');
    const closeBtn = $('<span class="close">&times;</span>');
    const image = $('<img src="' + imageUrl + '">');

    modalContent.append(closeBtn);
    modalContent.append(image);
    modal.append(modalContent);

    $('.content').append(modal);

    // Close modal when close button is clicked
    closeBtn.on('click', function() {
        closeModal();
    });

    // Prevent closing modal when clicking outside of it
    modal.on('click', function(event) {
        event.stopPropagation();
    });
}

function closeModal() {
    $('.modal').remove();
}

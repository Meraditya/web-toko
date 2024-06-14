document.addEventListener('DOMContentLoaded', function() {
    // Menghandle form ulasan
    document.getElementById('review-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const reviewText = document.getElementById('review-text').value;
        const reviewerName = document.getElementById('reviewer-name').value;
        if (reviewText && reviewerName) {
            const reviewList = document.getElementById('reviews-list');
            const newReview = document.createElement('div');
            newReview.classList.add('review');
            newReview.innerHTML = `<p>"${reviewText}"</p><p>- ${reviewerName}</p>`;
            reviewList.appendChild(newReview);
            document.getElementById('review-form').reset();
        }
    });

    // Menghandle klik tombol "Beli Sekarang"
    const buyButtons = document.querySelectorAll('.buy-now');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = button.getAttribute('data-product');
            const price = button.getAttribute('data-price');
            const whatsappNumber = 'isi nomor wa kamu!'; // Ganti dengan nomor WhatsApp Anda
            const message = `Halo, saya ingin membeli ${product} dengan harga ${price}. Apakah masih tersedia?`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });
});



// Daftar kata/frasa yang dilarang
const bannedWords = [
    "kesembuhan instan", "jaminan hasil", "suplemen ajaib", 
    "efek cepat", "mengubah kehidupan", "hasil pasti",
    "penyembuhan", "alami 100%", "terjamin", "tanpa efek samping"
];

// Fungsi utama untuk mengecek judul dan deskripsi
function checkAd() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    // Menghitung panjang teks
    checkLength(title, "titleFeedback", 40);
    checkLength(description, "descriptionFeedback", 125);

    // Menyorot kata/frasa terlarang
    const highlightedTitle = highlightBannedWords(title);
    const highlightedDescription = highlightBannedWords(description);

    // Menampilkan hasil dengan highlight
    document.getElementById("result").innerHTML = `
        <h5>Hasil Pengecekan:</h5>
        <p><strong>Judul:</strong> ${highlightedTitle}</p>
        <p><strong>Deskripsi:</strong> ${highlightedDescription}</p>
    `;
}

// Fungsi untuk menyorot kata/frasa terlarang
function highlightBannedWords(text) {
    let highlightedText = text;

    bannedWords.forEach(word => {
        const regex = new RegExp(`(${word})`, "gi");
        highlightedText = highlightedText.replace(regex, '<span class="highlight">$1</span>');
    });

    return highlightedText;
}

// Fungsi untuk mengecek panjang teks dan memberikan peringatan
function checkLength(text, feedbackElementId, maxLength) {
    const feedbackElement = document.getElementById(feedbackElementId);
    const remainingChars = maxLength - text.length;

    if (remainingChars >= 0) {
        feedbackElement.innerText = `Sisa karakter: ${remainingChars}`;
        feedbackElement.classList.remove("text-danger");
    } else {
        feedbackElement.innerText = `Melebihi batas karakter sebanyak ${Math.abs(remainingChars)} karakter!`;
        feedbackElement.classList.add("text-danger");
    }
}

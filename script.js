const lyrics = [
    "You and I (don't let go) were alive (don't let go)",
    "With nothing to do, I could lay and just look in your eyes",
    "Wait (don't let go) and pretend (don't let go)",
    "Hold on and hope that we'll find our way back in the end",
    "Do you think I have forgotten?",
    "Do you think I have forgotten?",
    "Do you think I have forgotten",
    "About you?"
];

// Array timing: berisi jeda waktu untuk tiap baris lirik
const timing = [10000, 10000, 10000, 10000, 5000, 5000, 5000, 5000]; 

let currentLine = 0;

function displayNextLine() {
    const displayArea = document.getElementById("lyricsDisplay");

    // Tampilkan baris saat ini
    if (currentLine < lyrics.length) {
        let line = lyrics[currentLine];
        
        // Buat elemen paragraf baru untuk setiap lirik
        const p = document.createElement("p");

        // Jika ini adalah baris terakhir yang ingin ditonjolkan
        if (line === "About you?") {
            p.classList.add("strong-line");
        }
        
        p.classList.add("fade-in"); // Tambahkan kelas fade-in
        p.textContent = line;
        
        // Tambahkan lirik baru tanpa menghapus yang sebelumnya
        displayArea.appendChild(p);

        // Atur jeda tampilan untuk baris berikutnya, lalu panggil fungsi lagi
        setTimeout(() => {
            currentLine++;
            displayNextLine();
        }, timing[currentLine]); // Ambil jeda sesuai indeks timing
    }
}

function startLyrics() {
    const displayArea = document.getElementById("lyricsDisplay");
    displayArea.innerHTML = ""; // Reset tampilan
    currentLine = 0; // Reset index lirik
    displayNextLine(); // Mulai menampilkan lirik
}

// Memulai lirik saat halaman dimuat
window.onload = startLyrics;

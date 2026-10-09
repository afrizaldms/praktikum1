const profil = {
  nama: "Afrizal Dimas Sutanto",
  nim: "G.231.25.0075",
  kelas: "Teknik Informatika",
  kelompok: "1A",
  foto: "foto.jpg"
};

// Isi data ke halaman
document.getElementById("nama").textContent = profil.nama;
document.getElementById("nim").textContent = profil.nim;
document.getElementById("kelas").textContent = profil.kelas;
document.getElementById("kelompok").textContent = profil.kelompok;

// Foto (jika tidak ada, tampilkan inisial)
const img = document.getElementById("foto");
document.getElementById("inisial").textContent = profil.nama
  .split(" ")
  .slice(0, 2)
  .map((k) => k[0])
  .join("")
  .toUpperCase();
img.onload = () => (document.getElementById("inisial").style.display = "none");
img.onerror = () => (img.style.display = "none");
img.src = profil.foto;

// Salam sesuai waktu
const jam = new Date().getHours();
let salam = "Selamat malam";
if (jam < 11) salam = "Selamat pagi";
else if (jam < 15) salam = "Selamat siang";
else if (jam < 18) salam = "Selamat sore";
document.getElementById("salam").textContent = salam + "!";

const cover = document.getElementById("cover");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const bottomNav = document.getElementById("bottomNav");

function openInvitation(){
  cover.classList.add("hide");
  mainContent.classList.add("show");
  musicBtn.classList.add("show");
  bottomNav.classList.add("show");

  music.play().then(() => {
    musicBtn.classList.add("playing");
  }).catch(() => {
    console.log("Musik diblokir browser");
  });
}

function toggleMusic(){
  if(music.paused){
    music.play();
    musicBtn.classList.add("playing");
  }else{
    music.pause();
    musicBtn.classList.remove("playing");
  }
}

/* NAMA TAMU DARI LINK */
const params = new URLSearchParams(window.location.search);
const guest = params.get("kpd");

if(guest){
  document.getElementById("guestName").innerText = guest;
}

/* COUNTDOWN */
const weddingDate = new Date("June 22, 2026 09:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if(distance <= 0){
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2,"0");
  document.getElementById("hours").innerText = String(hours).padStart(2,"0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2,"0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2,"0");
}, 1000);

/* COPY REKENING */
function copyRekening(){
  const rekening = document.getElementById("rekening").innerText;

  navigator.clipboard.writeText(rekening).then(() => {
    alert("Nomor rekening berhasil disalin");
  });
}

/* RSVP KE WHATSAPP */
function sendRSVP(e){
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const status = document.getElementById("status").value;
  const ucapan = document.getElementById("ucapan").value;

  const nomorWa = "6282291316391";

  const text =
`Halo, saya ingin konfirmasi kehadiran.

Nama: ${nama}
Status: ${status}
Ucapan: ${ucapan}`;

  const url = `https://wa.me/${nomorWa}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
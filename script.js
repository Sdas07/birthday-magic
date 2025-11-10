document.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.getElementById("start-screen");
  const switchBtn = document.querySelector(".switch");
  const content = document.getElementById("content");
  const bgMusic = document.getElementById("bg-music");
  const slides = document.querySelectorAll(".slide");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  let currentSlide = 0;

  function showSlide(index){
    slides.forEach((s,i)=>{
      s.classList.add("hidden");
      if(i===index) s.classList.remove("hidden");
    });
  }

  function nextSlide() {
    currentSlide++;
    if(currentSlide < slides.length) showSlide(currentSlide);
  }

  function startSlides() {
    setTimeout(nextSlide, 5000);
    setTimeout(nextSlide, 10000);
  }

  function turnOnMagic() {
    // Play music
    if(bgMusic){ bgMusic.loop=true; bgMusic.play().catch(()=>{}); }

    // Fade out start screen
    if(startScreen){
      startScreen.style.transition="opacity 0.8s";
      startScreen.style.opacity="0";
      setTimeout(()=>{ startScreen.remove(); }, 800);
    }

    // Show content
    if(content){
      content.classList.remove("hidden");
      currentSlide=0;
      showSlide(currentSlide);
    }

    // Start slides after short delay
    setTimeout(startSlides, 1000);
  }

  if(switchBtn) switchBtn.addEventListener("click", turnOnMagic);

  if(yesBtn){
    yesBtn.addEventListener("click", ()=>{
      nextSlide();
      setTimeout(nextSlide, 5000);
    });
  }
  if(noBtn){
    noBtn.addEventListener("click", ()=>{
      alert("Aww 😝 You’re still gonna see it anyway!");
      nextSlide();
      setTimeout(nextSlide,5000);
    });
  }

  console.log("Script loaded", slides.length,"slides found");
});

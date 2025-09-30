
  function updateTime() {
    const now = new Date();
    document.getElementById("time").textContent = now.toLocaleTimeString();
  }
  setInterval(updateTime, 1000);
  updateTime();


document.addEventListener("scroll", function() {
  const cards = document.querySelectorAll(".testimonial-card");
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const boxTop = card.getBoundingClientRect().top;
    if(boxTop < triggerBottom) {
      card.classList.add("show");
    }
  });
});

async function loadSecurityNews() {
  try {
    let res = await fetch("https://gnews.io/api/v4/search?q=security&token=YOUR_API_KEY&lang=en");
    let data = await res.json();
    let track = document.querySelector(".news-track");
    track.innerHTML = data.articles.map(a => `<span>📰 ${a.title}</span>`).join("");
  } catch (err) {
    console.log("Error loading news:", err);
  }
}
loadSecurityNews();
setInterval(loadSecurityNews, 100000); 



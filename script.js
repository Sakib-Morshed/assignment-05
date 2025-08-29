// common function for get element by id
function getId(id) {
  return document.getElementById(id);
}

// counting heart
const hearts = document.getElementsByClassName("heart");
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    const countHeart = Number(getId("heart-count").innerText);
    const newHeartCount = countHeart + 1;
    document.getElementById("heart-count").innerText = newHeartCount;
  });
}

// giving alert when call button is clicked
const CallButtons = document.getElementsByClassName("call");

for (const CallButton of CallButtons) {
  CallButton.addEventListener("click", function () {
    const gold = document.getElementById("gold");
    const goldCount = Number(gold.innerText);
    if (goldCount < 20) {
      alert("❌আপনার পর্যাপ্ত কয়েন নেই,কল করতে কমপক্ষে ২০ কয়েন লাগবে");
      return;
    }

    const callTitle =
      this.closest(".card").querySelector(".callTitle").innerText;
    let callSubtitle =
      this.closest(".card").querySelector(".callSubtitle").innerText;
    alert(`📞 Calling ${callTitle} ${callSubtitle}...`);

    gold.innerText = goldCount - 20;

    let cardHistory = getId("clear-history");
    let createHistory = document.createElement("div");
    let currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    createHistory.innerHTML = `
    <div class="bg-[#f4f0f0] p-2 md:p-4 mx-2 md:mx-4 rounded-lg mb-2">
            <div class="md:flex justify-between items-center">
              <h2>${callTitle}</h2>
              <span>${currentTime}</span>
            </div>

            <span>${callSubtitle}</span>

          </div>
    `;
    cardHistory.appendChild(createHistory);
  });
}

// clear history button
getId("clear-btn").addEventListener("click", function () {
  let clearHistory = getId("clear-history");
  clearHistory.innerHTML = "";
});

// copy button
const copyButtons = document.getElementsByClassName("copy-btn");

for (const copyButton of copyButtons) {
  copyButton.addEventListener("click", function () {
    let callSubtitle =
      this.closest(".card").querySelector(".callSubtitle").innerText;
    navigator.clipboard.writeText(callSubtitle);
    alert(`নাম্বার কপি হয়েছে ${callSubtitle}`);
    let copyCount = getId("copy-count");
    copyCount.innerText = Number(copyCount.innerText) + 1;
  });
}

const textToSplit = document.querySelector('.js-split');

const splitIntoWords = el => {
  const str = el.innerText;
  const strArray = str.split(" ");
  const words = [];

  strArray.forEach((word, i) => {
    const wordWrapper = document.createElement("span");
    const wordSpan = document.createElement("span");

    wordWrapper.classList.add("word-wrapper");
    wordSpan.classList.add("word");
    wordSpan.innerText = i === strArray.length - 1 ? word : `${word} `;
    wordWrapper.innerHTML = wordSpan.outerHTML;

    words.push(wordWrapper.outerHTML);
  });

  el.innerHTML = "";
  words.forEach(word => el.innerHTML += word);
};

const CUSTOM_EASE = "M0,0 C0.402,0 0.238,0.39 0.428,0.7 0.574,0.938 0.818,1.001 1,1 ";

splitIntoWords(textToSplit);

const wordArr = gsap.utils.toArray('.word');

gsap.set(wordArr, { yPercent: 100 });

gsap.to(wordArr, {
  scrollTrigger: {
    trigger: '.js-section-1',
    start: '50% 50%',
    end: '50% 50%',
    toggleActions: 'restart none none none',
    markers: true },

  yPercent: 0,
  duration: 1,
  ease: CustomEase.create('custom', CUSTOM_EASE),
  stagger: {
    amount: 0.25,
    ease: 'power3.0ut' } });
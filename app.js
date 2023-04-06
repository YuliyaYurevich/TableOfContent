const content = document.querySelectorAll('h3');
const links = document.querySelectorAll('a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entries[0].isIntersecting === true) {
      links.forEach((contentValue) => {
        if (contentValue.innerText === entry.target.textContent) {
          contentValue.parentNode.classList.add('selected');
        } else {
          contentValue.parentNode.classList.remove('selected');
        }
      });
    }
  });
});

content.forEach((h3) => {
  observer.observe(h3);
});

function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No Slider paassed in');
  }
  // slect the element needed for the slider
  this.slider = slider;
  this.slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  // when this slider is create, run startSlider function
  this.startSlider();
  this.applyClasses();

  // Event Listeners
  prevButton.addEventListener('click', () => this.move('back'));
  nextButton.addEventListener('click', () => this.move());
}

Slider.prototype.startSlider = function() {
  this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function() {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
};

Slider.prototype.move = function(direction) {
  // strip classes off current slides
  const classesToRemove = ['prev', 'current', 'next'];
  [this.prev, this.current, this.next].forEach(el => el.classList.remove(...classesToRemove));
  // prev.classList.remove(...classesToRemove);
  // current.classList.remove(...classesToRemove);
  // next.classList.remove(...classesToRemove);
  if (direction === 'back') {
    // make a new array of the new values, and destructure them over and into the prev, current, and next values
    [this.prev, this.current, this.next] = [
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }
  this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);

import { debounce } from './util.js';
import { getRandomUniqueElements } from './random.js';


const RERENDER_DELAY = 500;
const RANDOM_PICTURES_COUNT = 10;


const sortByComments = (pictures) => {
  const mapped = pictures.map((picture, index) => ({
    index,
    value: picture.comments.length
  }));

  mapped.sort((a, b) => b.value - a.value);

  return mapped.map((picture) => pictures[picture.index]);
};


const switchActiveFilter = (target) => {
  const current = document.querySelector('.img-filters__button--active');

  if (current === target) {
    return false;
  }

  current.classList.remove('img-filters__button--active');
  target.classList.add('img-filters__button--active');
  return true;
};


const setFilterClick = (target, filterOut) => {
  const debouncedFill = debounce(filterOut, RERENDER_DELAY);

  const onFilterClick = () => {
    const isNotAlreadySelected = switchActiveFilter(target);
    const isRandom = target.id.includes('random');

    if (isNotAlreadySelected || isRandom) {
      debouncedFill();
    }
  };

  target.addEventListener('click', onFilterClick);
};


const useFilter = (getPictures, refill, ...rest) =>
  () => {
    const pictures = getPictures.apply(this, rest);
    refill(pictures);
  };


const showFilters = (refill, gottenPictures) => {
  const filters = document.querySelector('.img-filters');
  filters.classList.remove('img-filters--inactive');

  setFilterClick(
    filters.querySelector('#filter-default'),
    useFilter(() => gottenPictures, refill)
  );

  setFilterClick(
    filters.querySelector('#filter-random'),
    useFilter(getRandomUniqueElements, refill, gottenPictures, RANDOM_PICTURES_COUNT)
  );

  setFilterClick(
    filters.querySelector('#filter-discussed'),
    useFilter(sortByComments, refill, gottenPictures)
  );
};


export { showFilters };

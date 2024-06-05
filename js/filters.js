import { debounce } from './util.js';
import { getRandomUniqueElements } from './random.js';


const RERENDER_DELAY = 500;
const RANDOM_PICS_COUNT = 10;


const sortByComments = (arr) => {
  const mapped = arr.map((el, i) => ({
    index: i,
    value: el.comments.length
  }));

  mapped.sort((a, b) => b.value - a.value);

  return mapped.map((el) => arr[el.index]);
};


const switchActiveFilter = (target) => {
  const current = document.querySelector('.img-filters__button--active');
  current.classList.remove('img-filters__button--active');

  target.classList.add('img-filters__button--active');
};


const setFilterClick = (target, filterOut) => {
  const debouncedFill = debounce(filterOut, RERENDER_DELAY);

  const onFilterClick = () => {
    debouncedFill();
    switchActiveFilter(target);
  };

  target.addEventListener('click', onFilterClick);
};


const useFilter = (getPics, reFill, ...rest) =>
  () => {
    const pics = getPics.apply(this, rest);
    reFill(pics);
  };


const showFilters = (reFill, gottenPictures) => {
  const filters = document.querySelector('.img-filters');
  filters.classList.remove('img-filters--inactive');

  setFilterClick(
    filters.querySelector('#filter-default'),
    useFilter(() => gottenPictures, reFill)
  );

  setFilterClick(
    filters.querySelector('#filter-random'),
    useFilter(getRandomUniqueElements, reFill, gottenPictures, RANDOM_PICS_COUNT)
  );

  setFilterClick(
    filters.querySelector('#filter-discussed'),
    useFilter(sortByComments, reFill, gottenPictures)
  );
};


export {
  sortByComments,
  switchActiveFilter,
  setFilterClick,
  showFilters
};

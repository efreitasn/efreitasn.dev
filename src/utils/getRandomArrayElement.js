import getRandomNumber from './getRandomNumber';

export default arr => arr[getRandomNumber(0, arr.length - 1)];
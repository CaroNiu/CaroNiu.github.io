(function () {
  const month = new Date().getMonth() + 1;
  let season = 'winter';
  if (month >= 3 && month <= 5) season = 'spring';
  else if (month >= 6 && month <= 8) season = 'summer';
  else if (month >= 9 && month <= 11) season = 'autumn';

  document.body.dataset.season = season;
})();

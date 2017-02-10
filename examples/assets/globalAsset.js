var globalAsset = {
  lng: 'en',
  words: {
    totalTitle: {
      kr: '12개 역의 승객 추이 변화',
      en: 'Total ridership of 12 stops'
    },
    total: {
      kr: '총합',
      en: 'total'
    },
    max: {
      kr: '최대 평균증가량',
      en: 'max increment'
    },
    min: {
      kr:'최소 평균증가량',
      en: 'min increment'
    },
    ave: {
      kr:'평균',
      en:'average'
    },
    year: {
      kr: '년',
      en: ''
    },
    month: {
      kr: '월',
      en: ''
    },
    gap: {
      kr: '증가량',
      en: 'increment'
    },
    week: {
      kr: '째주',
      en: 'week '
    }
  },
  mainColor: "rgb(251, 106, 74)",
  subMainColor: 'rgb(203, 24, 29)',
  getAvereageIncrement: function(feature) {
    var size = 0;
    var previousSize = 0;
    for (var i = 0; i < feature.dates.length;i++) {
      size += feature.dates[i].turnstile_data[0].exits;
      previousSize += feature.previous_data[i].turnstile_data[0].exits;
    }
    size /= feature.dates.length;
    previousSize /= feature.dates.length;
    return Math.floor(size - previousSize);
  },
  getSizeByProperty: function(feature) {
    var size = 0;
    var previousSize = 0;
    for (var i = 0; i < feature.dates.length;i++) {
      size += feature.dates[i].turnstile_data[0].exits;
      previousSize += feature.previous_data[i].turnstile_data[0].exits;
    }
    size /= feature.dates.length;
    previousSize /= feature.dates.length;
    return Math.floor((Math.sqrt((size - previousSize)/20)+5));
  }
}
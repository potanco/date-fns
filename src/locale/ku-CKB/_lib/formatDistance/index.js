var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'کەمتر لە یەک چرکە',
    other: 'کەمتر لە {{count}} چرکە'
  },

  xSeconds: {
    one: '1 چرکە',
    other: '{{count}} چرکە'
  },

  halfAMinute: 'نیو خولەک',

  lessThanXMinutes: {
    one: 'کەمتر لە خولەکێک',
    other: 'کەمتر لە {{count}} خولەک'
  },

  xMinutes: {
    one: '1 خولەک',
    other: '{{count}} خولەک'
  },

  aboutXHours: {
    one: 'نزیکەی یەک کاتژمێر',
    other: 'نزیکەی {{count}} کاتژمێر'
  },

  xHours: {
    one: '1 کاتژمێر',
    other: '{{count}} کاتژمێر'
  },

  xDays: {
    one: '1 رۆژ',
    other: '{{count}} رۆژ'
  },

  aboutXWeeks: {
    one: 'نزیکەی 1 هەفتە',
    other: 'نزیکەی {{count}} هەفتە'
  },

  xWeeks: {
    one: '1 هەفتە',
    other: '{{count}} هەفتە'
  },

  aboutXMonths: {
    one: 'نزیکەی 1 مانگ',
    other: 'نزیکەی {{count}} مانگ'
  },

  xMonths: {
    one: '1 مانگ',
    other: '{{count}} مانگ'
  },

  aboutXYears: {
    one: 'نزیکەی 1 ساڵ',
    other: 'نزیکەی {{count}} ساڵ'
  },

  xYears: {
    one: '1 ساڵ',
    other: '{{count}} ساڵ'
  },

  overXYears: {
    one: 'زیاتر لە 1 ساڵ',
    other: 'زیاتر لە {{count}} ساڵ'
  },

  almostXYears: {
    one: 'نزیکەی 1 ساڵ',
    other: 'نزیکەی {{count}} ساڵ'
  }
}

export default function formatDistance(token, count, options) {
  options = options || {}

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'لە ' + result
    } else {
      return result + ' لەمەوبەر'
    }
  }

  return result
}

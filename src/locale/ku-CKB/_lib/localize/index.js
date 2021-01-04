import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

var eraValues = {
  narrow: ['پ', 'د'],
  abbreviated: ['پ.ز.', 'د.ز.'],
  wide: ['پێش زایین', 'دوای زایین']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['چ1', 'چ٢', 'چ٣', 'چ٤'],
  wide: ['چارەکی یەکەم', 'چارەکی دووەم', 'چارەکی سێیەم', 'چارەکی چوارەم']
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['ک', 'ش', 'ئ', 'ن', 'ئ', 'ح', 'ت', 'ئ', 'ئ', 'ت', 'ت', 'ک'],
  abbreviated: [
    'کانوونی د',
    'شوب',
    'ئاز',
    'نیس',
    'ئای',
    'حوزەی',
    'تەم',
    'ئاب',
    'ئەیل',
    'تشرینی ی',
    'تشرینی د',
    'کانوونی ی'
  ],
  wide: [
    'کانوونی دووەم',
    'شوبات',
    'ئازار',
    'نیسان',
    'ئایار',
    'حوزەیران',
    'تەمووز',
    'ئاب',
    'ئەیلوول',
    'تشرینی یەکەم',
    'تشرینی دووەم',
    'کانوونی یەکەم'
  ]
}

var dayValues = {
  narrow: ['ی', 'د', 'س', 'چ', 'پ', 'ه', 'ش'],
  short: ['1ش', '2ش', '3ش', '4ش', '5ش', 'ه', 'ش'],
  abbreviated: [
    'یەکشەممە',
    'دووشەممە',
    'سێشەممە',
    'چوارشەممە',
    'پێنجشەممە',
    'هەینی',
    'شەممە'
  ],
  wide: [
    'یەکشەممە',
    'دووشەممە',
    'سێشەممە',
    'چوارشەممە',
    'پێنجشەممە',
    'هەینی',
    'شەممە'
  ]
}

var dayPeriodValues = {
  narrow: {
    am: 'پ',
    pm: 'د',
    midnight: 'ن.ش',
    noon: 'ن',
    morning: 'بەیانی',
    afternoon: 'دوای نیوەڕۆ',
    evening: 'ئێوارە',
    night: 'شەو'
  },
  abbreviated: {
    am: 'پ.ن',
    pm: 'د.ن',
    midnight: 'نیوەشەو',
    noon: 'نیوەڕۆ',
    morning: 'بەیانی',
    afternoon: 'دوای نیوەڕۆ',
    evening: 'ئێوارە',
    night: 'شەو'
  },
  wide: {
    am: 'پێش نیوەڕۆ',
    pm: 'دوای نیوەڕۆ',
    midnight: 'نیوەشەو',
    noon: 'نیوەڕۆ',
    morning: 'بەیانی',
    afternoon: 'دوای نیوەڕۆ',
    evening: 'ئێوارە',
    night: 'شەو'
  }
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'پ',
    pm: 'د',
    midnight: 'ن.ش.',
    noon: 'ن',
    morning: 'بەیانی',
    afternoon: 'دوای نیوۆڕۆ',
    evening: 'ئێوارە',
    night: 'شەو'
  },
  abbreviated: {
    am: 'پ.ن.',
    pm: 'د.ن.',
    midnight: 'نیوەشەو',
    noon: 'نیوەڕۆ',
    morning: 'بەیانی',
    afternoon: 'دوای نیوەڕۆ',
    evening: 'ئێوارە',
    night: 'شەو'
  },
  wide: {
    am: 'پێش نیوەڕۆ',
    pm: 'دوای نیوەڕۆ',
    midnight: 'نیوەشەو',
    noon: 'نیوەڕۆ',
    morning: 'بەیانی',
    afternoon: 'نیوەڕۆ',
    evening: 'ئێوارە',
    night: 'شەو'
  }
}

function ordinalNumber(dirtyNumber) {
  return String(dirtyNumber)
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function(quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
}

export default localize

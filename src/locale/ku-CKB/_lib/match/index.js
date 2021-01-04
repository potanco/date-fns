import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index'
import buildMatchFn from '../../../_lib/buildMatchFn/index'

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^(پ|د)/i,
  abbreviated: /^(پ\.?\s?ز\.?|پ\.?\s?س\.?\s?ز\.?|ه\.?\s?|س\.?\s?ه\.?)/i,
  wide: /^(پێش زایین|پێش سەردەمی هاوبەش|زایینی|سەردەمی هاوبەش|دوای زایین)/i
}
var parseEraPatterns = {
  any: [/^پێش/i, /^(دوای)/i]
}

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^چ[1234]/i,
  wide: /^[1234](th|st|nd|rd)? چارەک/i
}
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
}

var matchMonthPatterns = {
  narrow: /^[کشئنئحتئئتتک]/i,
  abbreviated: /^(کانوونی د|شوب|ئاز|نیس|ئای|حوزەی|تەم|ئاب|ئەیل|تشرینی ی|تشرینی د|کانوونی ی)/i,
  wide: /^(کانوونی دووەم|شوبات|ئازار|نیسان|ئایار|حوزەیران|تەمووز|ئاب|ئەیلوول|تشرینی یەکەم|تشرینی دووەم|کانوونی یەکەم)/i
}
var parseMonthPatterns = {
  narrow: [
    /^ک/i,
    /^ش/i,
    /^ئ/i,
    /^ن/i,
    /^ئ/i,
    /^ح/i,
    /^ت/i,
    /^ئ/i,
    /^ئ/i,
    /^ت/i,
    /^ت/i,
    /^ک/i
  ],
  any: [
    /^ک.ی./i,
    /^ش/i,
    /^ئاز/i,
    /^ن/i,
    /^ئای/i,
    /^ح/i,
    /^تەم/i,
    /^ئاب/i,
    /^ئەی/i,
    /^ت.ی./i,
    /^ت.د./i,
    /^ک.د./i
  ]
}

var matchDayPatterns = {
  narrow: /^[شیدسچپه]/i,
  short: /^(ش|ه|1ش|2ش|3ش|4ش|5ش)/i,
  abbreviated: /^(یەکشەممە|دووشەممە|سێشەممە|چوارشەممە|پێنجشەممە|هەینی|شەممە)/i,
  wide: /^(یەکشەممە|دووشەممە|سێشەممە|چوارشەممە|پێنجشەممە|هەینی|شەممە)/i
}
var parseDayPatterns = {
  narrow: [/^ی/i, /^دوو/i, /^س/i, /^چ/i, /^پ/i, /^ه/i, /^ش/i],
  any: [
    /^(ی|1ش|یەکشەممە)/i,
    /^(د|2ش|دووشەممە)/i,
    /^(س|3ش|سێشەممە)/i,
    /^(چ|4ش|چوارشەممە)/i,
    /^(پ|5ش|پێنجشەممە)/i,
    /^(ه|هەینی)/i,
    /^(ش|شەممە)/i
  ]
}

var matchDayPeriodPatterns = {
  narrow: /^(پ|د|نیوەشەو|نیوەڕۆ|(لە|لە) (بەیانی|دواینیوەڕۆ|ئێوارە|شەو))/i,
  any: /^([پد]\.?\s?نیوەشەو\.?|نیوەشەو|نیوەڕۆ|(لە|لە) (بەیانی|دواینیوەڕۆ|ئێوارە|شەو))/i
}
var parseDayPeriodPatterns = {
  any: {
    am: /^(پ|پ.ن.|پێش نیوەڕۆ)/i,
    pm: /^(د|د.ن.|دوای نیوەڕۆ)/i,
    midnight: /^نیوەشەو/i,
    noon: /^نیوەڕۆ/i,
    morning: /بەیانی/i,
    afternoon: /دوای نیوەڕۆ/i,
    evening: /ئێوارە/i,
    night: /شەو/i
  }
}

var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function(value) {
      return parseInt(value, 10)
    }
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function(index) {
      return index + 1
    }
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
}

export default match

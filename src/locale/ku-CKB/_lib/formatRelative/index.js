var formatRelativeLocale = {
  lastWeek: "'پێشوو' eeee 'لە' p",
  yesterday: "'دوێنی لە' p",
  today: "'ئەمڕۆ لە' p",
  tomorrow: "'بەیانی لە' p",
  nextWeek: "eeee 'لە' p",
  other: 'P'
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}

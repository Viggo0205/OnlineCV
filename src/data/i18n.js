export function t(value, lang = 'da') {
  if (value == null) {
    return '';
  }

  if (typeof value === 'object' && (value.da !== undefined || value.en !== undefined)) {
    return value[lang] || value.da || value.en || '';
  }

  return String(value);
}

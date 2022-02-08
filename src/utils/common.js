export function scrollToTopOfPage () {
  if (window === 'undefined') return;

  window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
  });
  return;
}; 

export function scrollToTarget (targetRef, additionalOffset = 0) {
  if (window === 'undefined') return;

  window.scrollTo({
    top: targetRef.current.offsetTop - additionalOffset,
    behavior: "smooth"
  });
  return;
}; 

export function formatToCurrency (value, region = "id-ID") {
  const formatNumber = new Intl.NumberFormat(region);
  return formatNumber.format(value);
}

export function formatToPlural (word, value = 1) {
  if (value <= 1) return word;

  if (!word) return word;

  let tempword = word;

  const lastChar = word.charAt(word.length - 1);
  switch (lastChar) {
    // FIXME: not working on word with suffix y
    case 'i':
      tempword = word + 'es';
      break;
    case 's':
      tempword = word + 'es';
      break;
      
      default:
      tempword = word + 's';
      break;
  }

  return tempword;
}

export function formatToStringDate (date) {
  const dateObj = new Date(date);
  const dateFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
  const [
    { value: formattedMonth },
    ,
    { value: formattedDay }
  ] = dateFormat.formatToParts(dateObj);

  return `${formattedDay} ${formattedMonth}`;
};
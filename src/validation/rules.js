
export function isRuleApplied(selector) {
 var matches = document.querySelectorAll(selector);
 return matches.length ? true : false;
}

export function isValidXpath(xpathSelector) {
  const evaluated = document.evaluate(xpathSelector, document, null, XPathResult.ANY_TYPE, null);
  let result = evaluated.iterateNext();
  let size = 0
  console.group("Captured following nodes");
  while(result !== null) {
    console.info(result)
    size++;
    result = evaluated.iterateNext();
  }
  console.groupEnd();
  console.log('Captured group size is:', size)
  return size!==0 && !evaluated.invalidIteratorState
}

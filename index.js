const tutorials = [
  'what does the this keyword mean?',
  'what is the constructor oo pattern?',
  'implementing blockchain web api',
  'the test driven development workflow',
  'what is nan and how can we check for it',
  'what is the difference between stoppropagation and preventdefault?',
  'immutable state and pure functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is jsonp?'
];

function titleCased() {
  const acronyms = {
    'Oo': 'OO',
    'Api': 'API',
    'Nan': 'NaN',
    'Jsonp': 'JSONP',
    'Stoppropagation': 'StopPropagation',
    'Preventdefault': 'PreventDefault'
  };

  return tutorials.map(tut =>
    tut.split(' ')
       .map(word => {
         const punct = word.match(/[^\w]*$/)[0]; // garde la ponctuation finale
         const clean = word.replace(/[^\w]/g, ''); // enlève ponctuation pour comparer
         const cap = clean.charAt(0).toUpperCase() + clean.slice(1);
         return (acronyms[cap] || cap) + punct;
       })
       .join(' ')
  );
}








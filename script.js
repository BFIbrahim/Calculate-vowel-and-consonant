function calculate() {
    const inputString = document.getElementById('inputString').value;
    const counts = countVowelsAndConsonants(inputString);

    // Display the results in the respective elements
    document.getElementById('vowelCount').textContent = counts.vowels;
    document.getElementById('consonantCount').textContent = counts.consonants;
  }

  function countVowelsAndConsonants(str) {
    const lowerStr = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < lowerStr.length; i++) {
      const char = lowerStr.charAt(i);
      if (vowels.includes(char)) {
        vowelCount++;
      } else if (consonants.includes(char)) {
        consonantCount++;
      }
    }

    return { vowels: vowelCount, consonants: consonantCount };
  }
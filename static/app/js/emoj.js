const escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

function getEmoj(string){
    const emojiMap = {
        ':)': '😊',
        ':(': '🙁',
        ':D': '😁',
        ';(': '😥',
        ':O': '😮',
        ';)': '😉',
        '8)': '😎',
        '>:@': '😡',
      };
      const pattern = new RegExp(
        Object.keys(emojiMap).map(escape).join('|'),
        'g'
      );
      return string.replace(pattern, match => emojiMap[match]);
}
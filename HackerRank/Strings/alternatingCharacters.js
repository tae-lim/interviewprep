function alternatingCharacters(s) {
    var deletions = 0;
    var initial = s[0];
    for (var i = 1; i < s.length; i++) {
        if (s[i] === initial) {
            deletions++;
        } else { 
            initial = s[i];
        }
    }
    return deletions;
}
function countingValleys(n, s) {
    var stack = [];
    var result = 0;

    for (var i = 0; i < n; i++) {
        if (stack.length > 0) {
            if (s[i] === 'U' && stack[stack.length - 1] === 'D') {
                stack.pop();
                if (stack.length === 0) {
                    result++;
                }
            } else if (s[i] === 'D' && stack[stack.length - 1] === 'U') {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        } else {
            stack.push(s[i]);
        }
    }

    return result;
}
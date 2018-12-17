function jumpingOnClouds(c) {
    var result = 0;
    for (var i = 0; i < c.length; i++) {
      if (c[i + 1] === undefined) {
        return result;
      }
      if (c[i + 2] === 0) {
        result++;
        i++;
      } else {
          result++;
      }
    }
  }
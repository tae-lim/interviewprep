var isIsomorphic = function(s, t) {
  var cache = {};
  for (var i = 0; i < s.length; i++) {
    if (!cache['s' + s[i]]) {
      cache['s' + s[i]] = t[i];
    }
    if (!cache['t' + t[i]]) {
      cache['t' + t[i]] = s[i];
    }
    if (cache['t' + t[i]] !== s[i] || cache['s' + s[i]] !== t[i]) {
      return false;
    }
  }
  return true;
};
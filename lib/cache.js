var _       = require('underscore'),
    noodle  = require('./noodle'),
    cache   = [];

exports.start =  function () {
  // Check to see if a cache item is to be removed 
  // from the cache (expired)

  setInterval(function () {
    var now           = new Date().getTime(),
        initialLength = cache.length,
        x             = 0,
        out           = [];

    initialLength = cache.length;

    while (x < initialLength) {
      if ((now - cache[x].created) < noodle.config.cacheMaxTime) {
        out.unshift(cache[x]);
      }
      x++;
    }

    cache = out;
  }, 10000);

  // Remove all cache entries every time the cache purge time is reached

  if (noodle.config.cachePurgeTime > 0) {
    setInterval(function () {
      cache = [];
      console.log('Cached purged @ ' + new Date());
    }, noodle.config.cachePurgeTime)
  }
};

// Put something in the cache and then return 
// it for convinience


exports.put = function (query, results) {
  var item = {
    query: query,
    results: results,
    created: new Date()
  };

  if (cache.length >= noodle.config.maxSize) {
    cache.pop();
  }

  cache.unshift(item);
  return exports.get(query);
};


// Check to see if query is in the cache


exports.check = function (query) {
  return find(query) || false;
}


// Get a query results from the cache or return false


exports.get = function (query) {
  var item  = find(query),
      clone = _.clone(item);
  delete clone.query;
  return clone;
}

function find (query) {
  var i = 0;
  for (i; i < cache.length; i++) {
    if (_.isEqual(query, cache[i].query)) {
      return cache[i];
    }
  }
}
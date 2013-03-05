var fs = require("fs");

// Web document samples for the test server to serve

exports.documents = {
  html: fs.readFileSync("tests/document.html"),
  json: fs.readFileSync("tests/document.json"),
  feed: fs.readFileSync("tests/document.atom"),
  xml:  fs.readFileSync("tests/document.xml")
};

// Queries

exports.queries = {
  html: {
    simple: {
      "url": "http://localhost:8889/html",
      "type": "html",
      "selector": "title",
      "extract": "text",
      "cache": false
    },
    noSelector: {
      "url": "http://localhost:8889/html",
      "type": "html",
      "cache": false
    },
    noExtract: {
      "url": "http://localhost:8889/html",
      "type": "html",
      "selector": "title",
      "cache": false
    },
    noType: {
      "url": "http://localhost:8889/html",
      "selector": "title",
      "extract": "text",
      "cache": false
    },
    badSelector: {
      "url": "http://localhost:8889/html",
      "type": "html",
      "selector": "BAD SELECTOR",
      "extract": "text",
      "cache": false
    },
    badExtract: {
      "url": "http://localhost:8889/html",
      "type": "html",
      "selector": "title",
      "extract": "BAD EXTRACT",
      "cache": false
    }
  },
  json: {
    simple: {
      "url": "http://localhost:8889/json",
      "type": "json",
      "selector": ".query",
      "cache": false
    },
    noSelector: {
      "url": "http://localhost:8889/json",
      "type": "json",
      "cache": false
    },
    noType: {
      "url": "http://localhost:8889/json",
      "selector": ".query",
      "cache": false
    },
    badSelector: {
      "url": "http://localhost:8889/json",
      "type": "json",
      "selector": "BAD SELECTOR",
      "cache": false
    },
    badParse: {
      "url": "http://localhost:8889/html",
      "type": "json",
      "selector": ".query",
      "cache": false
    }
  },
  feed: {
    simple: {
      "url": "http://localhost:8889/feed",
      "type": "feed",
      "selector": ".title",
      "cache": false
    },
    noSelector: {
      "url": "http://localhost:8889/feed",
      "type": "feed",
      "cache": false
    },
    noType: {
      "url": "http://localhost:8889/feed",
      "selector": ".title",
      "cache": false
    },
    badSelector: {
      "url": "http://localhost:8889/feed",
      "type": "feed",
      "selector": "BAD SELECTOR",
      "cache": false
    },
    badParse: {
      "url": "http://localhost:8889/json",
      "type": "feed",
      "selector": ".title",
      "cache": false
    }
  },
  xml: {
    simple: {
      "url": "http://localhost:8889/xml",
      "type": "xml",
      "selector": ".CustomerName",
      "cache": false
    },
    noSelector: {
      "url": "http://localhost:8889/xml",
      "type": "xml",
      "cache": false
    },
    noType: {
      "url": "http://localhost:8889/xml",
      "selector": ".CustomerName",
      "cache": false
    },
    badSelector: {
      "url": "http://localhost:8889/xml",
      "type": "xml",
      "selector": "BAD SELECTOR",
      "cache": false
    },
    badParse: {
      "url": "http://localhost:8889/json",
      "type": "xml",
      "selector": ".CustomerName",
      "cache": false
    }
  },
  misc: {
    badUrl: {
      "url": "BAD URL",
      "cache": false
    },
    badType: {
      "url": "http://localhost:8889/html",
      "type": "BAD TYPE",
      "cache": false
    },
    emptyQuery: {}
  },
  map: {
    simple: {
      "url": "http://localhost:8889/html",
      "type": "html",
      "map": {
        "foo": {
          "select": "h1",
          "extract": "text"
        },
        "bar": {
          "select": "title"
        }
      }
    }
  }
};

// Query answers

exports.queries.answers = {
  html: {
    simple: [
      {
        "results": [
          {
            "text": "css Zen Garden: The Beauty in CSS Design"
          }
        ]
      }
    ],
    noExtract: [
      {
        "results": [
          {
            "html": "css Zen Garden: The Beauty in CSS Design"
          }
        ]
      }
    ],
    noType: [
      {
        "results": [
          {
            "text": "css Zen Garden: The Beauty in CSS Design"
          }
        ]
      }
    ],
    badSelector: [
      {
        "results": [],
        "error": "Could not match with that selector or extract value"
      }
    ],
    badExtract: [
      {
        "results": [],
        "error": "Could not match with that selector or extract value"
      }
    ]
  },
  json: {
    simple: [
        {
            "results": [
                "dinosaurs"
            ]
        }
    ],
    noType: [
        {
            "results": [
                "dinosaurs"
            ]
        }
    ],
    badSelector: [
        {
            "results": [],
            "error": "Could not match with that selector"
        }
    ],
    badParse: [
        {
            "results": [],
            "error": "Could not parse document"
        }
    ]
  },
  feed: {
    simple: [
        {
            "results": [
                "Atom-Powered Robots Run Amok",
                "Example Feed"
            ]
        }
    ],
    noSelector: [
        {
            "results": [
                {
                    "Order": {
                        "Date": "2003/07/04",
                        "CustomerId": 123,
                        "CustomerName": "Acme Alpha",
                        "Item": [
                            {
                                "ItemId": 987,
                                "ItemName": "Coupler",
                                "Quantity": 5
                            },
                            {
                                "ItemId": 654,
                                "ItemName": "Connector",
                                "Quantity": {
                                    "unit": 12,
                                    "$t": 3
                                }
                            },
                            {
                                "ItemId": 579,
                                "ItemName": "Clasp",
                                "Quantity": 1
                            }
                        ]
                    }
                }
            ]
        }
    ],
    noType: [
        {
            "results": [
                "Atom-Powered Robots Run Amok",
                "Example Feed"
            ]
        }
    ],
    badSelector: [
        {
            "results": [],
            "error": "Could not match with that selector"
        }
    ],
    badParse: [
        {
            "results": [],
            "error": "Could not parse document"
        }
    ]
  },
  xml: {
    simple: [
        {
            "results": [
                "Acme Alpha"
            ]
        }
    ],
    noSelector: [
        {
            "results": [
                {
                    "Order": {
                        "Date": "2003/07/04",
                        "CustomerId": 123,
                        "CustomerName": "Acme Alpha",
                        "Item": [
                            {
                                "ItemId": 987,
                                "ItemName": "Coupler",
                                "Quantity": 5
                            },
                            {
                                "ItemId": 654,
                                "ItemName": "Connector",
                                "Quantity": {
                                    "unit": 12,
                                    "$t": 3
                                }
                            },
                            {
                                "ItemId": 579,
                                "ItemName": "Clasp",
                                "Quantity": 1
                            }
                        ]
                    }
                }
            ]
        }
    ],
    noType: [
        {
            "results": [
                "Acme Alpha"
            ]
        }
    ],
    badSelector: [
        {
            "results": [],
            "error": "Could not match with that selector"
        }
    ],
    badParse: [
        {
            "results": [],
            "error": "Could not parse document"
        }
    ]
  },
  misc: {
    badUrl: [
        {
            "results": [],
            "error": "Document not found"
        }
    ],
    badType: [
        {
            "results": [],
            "error": "Document type not supported"
        }
    ],
    emptyQuery: [
        {
            "results": [],
            "error": "No query"
        }
    ]
  },
  map : {
    simple: {}
  }
};
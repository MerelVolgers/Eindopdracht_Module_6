"use strict";

var baseUrl = "https://jsonbox.io/";
var apiUrl = "https://jsonbox.io/box_1eace51228e3d7789800/";
var endPoint = "box_1eace51228e3d7789800";

var getData = function getData() {
  var response, data;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(apiUrl, {
            method: "GET",
            headers: {}
          }));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;
          console.log(data);
          return _context.abrupt("return", data);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

var postData = function postData(data) {
  var result, json;
  return regeneratorRuntime.async(function postData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
          }));

        case 2:
          result = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(result.json());

        case 5:
          json = _context2.sent;
          console.log(json);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var deleteDataById = function deleteDataById(id) {
  var idToRemove, result, json;
  return regeneratorRuntime.async(function deleteDataById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          idToRemove = apiUrl + id;
          _context3.next = 3;
          return regeneratorRuntime.awrap(fetch(idToRemove, {
            method: "DELETE"
          }));

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return regeneratorRuntime.awrap(result.json());

        case 6:
          json = _context3.sent;
          console.log(json);

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
}; // <-----------PUT: update en bestaande taak met de PUT method ----->


var putNewText = function putNewText(id, data) {
  var idToUpdate, result, json;
  return regeneratorRuntime.async(function putNewText$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          idToUpdate = apiUrl + id;
          _context4.next = 3;
          return regeneratorRuntime.awrap(fetch(idToUpdate, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
          }));

        case 3:
          result = _context4.sent;
          _context4.next = 6;
          return regeneratorRuntime.awrap(result.json());

        case 6:
          json = _context4.sent;
          console.log(json);

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
}; // <------PUT: update een bestaande taak de property done of niet done--->


var putDone = function putDone(id, data) {
  var idToUpdate, result, json;
  return regeneratorRuntime.async(function putDone$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          idToUpdate = apiUrl + id;
          _context5.next = 3;
          return regeneratorRuntime.awrap(fetch(idToUpdate, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
          }));

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return regeneratorRuntime.awrap(result.json());

        case 6:
          json = _context5.sent;
          console.log(json);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  });
}; // const putDone = async (id, data) => {
//     const descriptionToEdit = apiUrl + id;
//     const result = await fetch (descriptionToEdit, {
//         method: "PUT",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type" : "application/json",
//         },
//     });
//     const json = await result.json();
//     console.log(json);
// }
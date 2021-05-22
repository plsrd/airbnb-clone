/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/DashboardMap.js":
/*!************************************!*\
  !*** ./components/DashboardMap.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"@react-google-maps/api\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/rdl/codeGay/sanity/web/web/components/DashboardMap.js\";\n\n\n\nconst DashboardMap = ({\n  properties\n}) => {\n  var _properties$0$locatio, _properties$0$locatio2, _properties$0$locatio3;\n\n  const {\n    isLoaded\n  } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.useJsApiLoader)({\n    id: 'google-map-script',\n    googleMapsApiKey: process.env.googleMapsAPI\n  });\n  console.log((_properties$0$locatio = properties[0].location) === null || _properties$0$locatio === void 0 ? void 0 : _properties$0$locatio.lat);\n  const containerStyle = {\n    width: '100%',\n    height: '100vh'\n  };\n  const center = {\n    lat: (_properties$0$locatio2 = properties[0].location) === null || _properties$0$locatio2 === void 0 ? void 0 : _properties$0$locatio2.lat,\n    lng: (_properties$0$locatio3 = properties[0].location) === null || _properties$0$locatio3 === void 0 ? void 0 : _properties$0$locatio3.lng\n  };\n  const [map, setMap] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n  const onLoad = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function callback(map) {\n    const bounds = new window.google.maps.LatLngBounds();\n    map.fitBounds(bounds);\n    setMap(map);\n  }, []);\n  const onUnmount = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function callback(map) {\n    setMap(null);\n  }, []);\n  const image = \"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png\";\n  return isLoaded ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {\n    mapContainerStyle: containerStyle,\n    center: center,\n    zoom: 10,\n    onLoad: onLoad,\n    onUnmount: onUnmount,\n    children: [properties.map(property => {\n      var _property$location, _property$location2;\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n        position: {\n          lat: property === null || property === void 0 ? void 0 : (_property$location = property.location) === null || _property$location === void 0 ? void 0 : _property$location.lat,\n          lng: property === null || property === void 0 ? void 0 : (_property$location2 = property.location) === null || _property$location2 === void 0 ? void 0 : _property$location2.lng\n        },\n        icon: {\n          url: image,\n          anchor: new google.maps.Point(5, 58)\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, undefined);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 7\n  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(DashboardMap));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haXJibmItZmUvLi9jb21wb25lbnRzL0Rhc2hib2FyZE1hcC5qcz9hMDcxIl0sIm5hbWVzIjpbIkRhc2hib2FyZE1hcCIsInByb3BlcnRpZXMiLCJpc0xvYWRlZCIsInVzZUpzQXBpTG9hZGVyIiwiaWQiLCJnb29nbGVNYXBzQXBpS2V5IiwicHJvY2VzcyIsImVudiIsImdvb2dsZU1hcHNBUEkiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJsYXQiLCJjb250YWluZXJTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2VudGVyIiwibG5nIiwibWFwIiwic2V0TWFwIiwiUmVhY3QiLCJvbkxvYWQiLCJjYWxsYmFjayIsImJvdW5kcyIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJMYXRMbmdCb3VuZHMiLCJmaXRCb3VuZHMiLCJvblVubW91bnQiLCJpbWFnZSIsInByb3BlcnR5IiwidXJsIiwiYW5jaG9yIiwiUG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFvQjtBQUFBOztBQUN2QyxRQUFNO0FBQUVDO0FBQUYsTUFBZUMsc0VBQWMsQ0FBQztBQUNsQ0MsTUFBRSxFQUFFLG1CQUQ4QjtBQUVsQ0Msb0JBQWdCLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQUZJLEdBQUQsQ0FBbkM7QUFLQUMsU0FBTyxDQUFDQyxHQUFSLDBCQUFZVCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNVLFFBQTFCLDBEQUFZLHNCQUF3QkMsR0FBcEM7QUFFQSxRQUFNQyxjQUFjLEdBQUc7QUFDckJDLFNBQUssRUFBRSxNQURjO0FBRXJCQyxVQUFNLEVBQUU7QUFGYSxHQUF2QjtBQUtBLFFBQU1DLE1BQU0sR0FBRztBQUNiSixPQUFHLDRCQUFFWCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNVLFFBQWhCLDJEQUFFLHVCQUF3QkMsR0FEaEI7QUFFYkssT0FBRyw0QkFBRWhCLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY1UsUUFBaEIsMkRBQUUsdUJBQXdCTTtBQUZoQixHQUFmO0FBS0EsUUFBTSxDQUFDQyxHQUFELEVBQU1DLE1BQU4sSUFBZ0JDLHFEQUFBLENBQWUsSUFBZixDQUF0QjtBQUVBLFFBQU1DLE1BQU0sR0FBR0Qsd0RBQUEsQ0FBa0IsU0FBU0UsUUFBVCxDQUFrQkosR0FBbEIsRUFBdUI7QUFDdEQsVUFBTUssTUFBTSxHQUFHLElBQUlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CQyxZQUF2QixFQUFmO0FBQ0FULE9BQUcsQ0FBQ1UsU0FBSixDQUFjTCxNQUFkO0FBQ0FKLFVBQU0sQ0FBQ0QsR0FBRCxDQUFOO0FBQ0QsR0FKYyxFQUlaLEVBSlksQ0FBZjtBQU1BLFFBQU1XLFNBQVMsR0FBR1Qsd0RBQUEsQ0FBa0IsU0FBU0UsUUFBVCxDQUFrQkosR0FBbEIsRUFBdUI7QUFDekRDLFVBQU0sQ0FBQyxJQUFELENBQU47QUFDRCxHQUZpQixFQUVmLEVBRmUsQ0FBbEI7QUFJQSxRQUFNVyxLQUFLLEdBQUcsZ0dBQWQ7QUFFQSxTQUFPNUIsUUFBUSxnQkFDWCw4REFBQyw2REFBRDtBQUNFLHFCQUFpQixFQUFFVyxjQURyQjtBQUVFLFVBQU0sRUFBRUcsTUFGVjtBQUdFLFFBQUksRUFBRSxFQUhSO0FBSUUsVUFBTSxFQUFFSyxNQUpWO0FBS0UsYUFBUyxFQUFFUSxTQUxiO0FBQUEsZUFPQzVCLFVBQVUsQ0FBQ2lCLEdBQVgsQ0FBZ0JhLFFBQUQ7QUFBQTs7QUFBQSwwQkFDZCw4REFBQywwREFBRDtBQUNFLGdCQUFRLEVBQUU7QUFBRW5CLGFBQUcsRUFBRW1CLFFBQUYsYUFBRUEsUUFBRiw2Q0FBRUEsUUFBUSxDQUFFcEIsUUFBWix1REFBRSxtQkFBb0JDLEdBQTNCO0FBQWdDSyxhQUFHLEVBQUVjLFFBQUYsYUFBRUEsUUFBRiw4Q0FBRUEsUUFBUSxDQUFFcEIsUUFBWix3REFBRSxvQkFBb0JNO0FBQXpELFNBRFo7QUFFRSxZQUFJLEVBQUU7QUFDSmUsYUFBRyxFQUFFRixLQUREO0FBRUpHLGdCQUFNLEVBQUUsSUFBSVIsTUFBTSxDQUFDQyxJQUFQLENBQVlRLEtBQWhCLENBQXNCLENBQXRCLEVBQXlCLEVBQXpCO0FBRko7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURjO0FBQUEsS0FBZixDQVBELGVBZ0JFLDZJQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVyxnQkFtQlgsNklBbkJKO0FBb0JELENBcEREOztBQXNEQSw0RUFBZWQsaURBQUEsQ0FBV3BCLFlBQVgsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGFzaGJvYXJkTWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR29vZ2xlTWFwLCB1c2VKc0FwaUxvYWRlciwgTWFya2VyIH0gZnJvbSAnQHJlYWN0LWdvb2dsZS1tYXBzL2FwaSc7XG5cbmNvbnN0IERhc2hib2FyZE1hcCA9ICh7IHByb3BlcnRpZXMgfSkgPT4ge1xuICBjb25zdCB7IGlzTG9hZGVkIH0gPSB1c2VKc0FwaUxvYWRlcih7XG4gICAgaWQ6ICdnb29nbGUtbWFwLXNjcmlwdCcsXG4gICAgZ29vZ2xlTWFwc0FwaUtleTogcHJvY2Vzcy5lbnYuZ29vZ2xlTWFwc0FQSVxuICB9KVxuXG4gIGNvbnNvbGUubG9nKHByb3BlcnRpZXNbMF0ubG9jYXRpb24/LmxhdClcblxuICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMHZoJ1xuICB9O1xuICBcbiAgY29uc3QgY2VudGVyID0ge1xuICAgIGxhdDogcHJvcGVydGllc1swXS5sb2NhdGlvbj8ubGF0LFxuICAgIGxuZzogcHJvcGVydGllc1swXS5sb2NhdGlvbj8ubG5nXG4gIH07XG5cbiAgY29uc3QgW21hcCwgc2V0TWFwXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3Qgb25Mb2FkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gY2FsbGJhY2sobWFwKSB7XG4gICAgY29uc3QgYm91bmRzID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcbiAgICBtYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gICAgc2V0TWFwKG1hcClcbiAgfSwgW10pXG5cbiAgY29uc3Qgb25Vbm1vdW50ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gY2FsbGJhY2sobWFwKSB7XG4gICAgc2V0TWFwKG51bGwpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGltYWdlID0gXCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9leGFtcGxlcy9mdWxsL2ltYWdlcy9iZWFjaGZsYWcucG5nXCJcblxuICByZXR1cm4gaXNMb2FkZWQgPyAoXG4gICAgICA8R29vZ2xlTWFwXG4gICAgICAgIG1hcENvbnRhaW5lclN0eWxlPXtjb250YWluZXJTdHlsZX1cbiAgICAgICAgY2VudGVyPXtjZW50ZXJ9XG4gICAgICAgIHpvb209ezEwfVxuICAgICAgICBvbkxvYWQ9e29uTG9hZH1cbiAgICAgICAgb25Vbm1vdW50PXtvblVubW91bnR9XG4gICAgICA+XG4gICAgICB7cHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiAoXG4gICAgICAgIDxNYXJrZXIgXG4gICAgICAgICAgcG9zaXRpb249e3sgbGF0OiBwcm9wZXJ0eT8ubG9jYXRpb24/LmxhdCwgbG5nOiBwcm9wZXJ0eT8ubG9jYXRpb24/LmxuZ319XG4gICAgICAgICAgaWNvbj17e1xuICAgICAgICAgICAgdXJsOiBpbWFnZSxcbiAgICAgICAgICAgIGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDUsIDU4KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICAgICAgPD48Lz5cbiAgICAgIDwvR29vZ2xlTWFwPlxuICApIDogPD48Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhEYXNoYm9hcmRNYXApIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DashboardMap.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sanity */ \"./sanity.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./utils.js\");\n/* harmony import */ var _components_DashboardMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DashboardMap */ \"./components/DashboardMap.js\");\n\n\nvar _jsxFileName = \"/Users/rdl/codeGay/sanity/web/web/pages/index.js\";\n\n\n\n\n\nconst Home = ({\n  properties\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: properties && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"main\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"feed-container\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: \"Places to stay near you\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"feed\",\n          children: properties.map(property => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: `property/${property.slug.current}`,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"card\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_1__.urlFor)(property.mainImage).width(250).height(148).fit('crop')\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 17,\n                columnNumber: 21\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [property.reviews.length, \" review\", (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isMultiple)(property.reviews.length)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 18,\n                columnNumber: 21\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: property.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 19,\n                columnNumber: 21\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\"$\", property.pricePerNight]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 20,\n                columnNumber: 21\n              }, undefined)]\n            }, property._id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 19\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 17\n          }, undefined))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"map\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DashboardMap__WEBPACK_IMPORTED_MODULE_4__.default, {\n          properties: properties\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 15\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false);\n};\n\nconst getServerSideProps = async () => {\n  const query = `*[_type == \"property\"]`;\n  const properties = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n\n  if (!properties.length) {\n    return {\n      props: {\n        properties: []\n      }\n    };\n  } else {\n    return {\n      props: {\n        properties\n      }\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haXJibmItZmUvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wZXJ0aWVzIiwibWFwIiwicHJvcGVydHkiLCJzbHVnIiwiY3VycmVudCIsInVybEZvciIsIm1haW5JbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiZml0IiwicmV2aWV3cyIsImxlbmd0aCIsImlzTXVsdGlwbGUiLCJ0aXRsZSIsInByaWNlUGVyTmlnaHQiLCJfaWQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJxdWVyeSIsInNhbml0eUNsaWVudCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFvQjtBQUMvQixzQkFDRTtBQUFBLGNBQ0dBLFVBQVUsaUJBQ1Q7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxvQkFDR0EsVUFBVSxDQUFDQyxHQUFYLENBQWVDLFFBQVEsaUJBQ3RCLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBRyxZQUFXQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsT0FBUSxFQUE5QztBQUFBLG1DQUNFO0FBQXdCLHVCQUFTLEVBQUMsTUFBbEM7QUFBQSxzQ0FDRTtBQUFLLG1CQUFHLEVBQUVDLCtDQUFNLENBQUNILFFBQVEsQ0FBQ0ksU0FBVixDQUFOLENBQTJCQyxLQUEzQixDQUFpQyxHQUFqQyxFQUFzQ0MsTUFBdEMsQ0FBNkMsR0FBN0MsRUFBa0RDLEdBQWxELENBQXNELE1BQXREO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQUEsMkJBQUlQLFFBQVEsQ0FBQ1EsT0FBVCxDQUFpQkMsTUFBckIsYUFBb0NDLGtEQUFVLENBQUNWLFFBQVEsQ0FBQ1EsT0FBVCxDQUFpQkMsTUFBbEIsQ0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGLGVBR0U7QUFBQSwwQkFBS1QsUUFBUSxDQUFDVztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEYsZUFJRTtBQUFBLGdDQUFNWCxRQUFRLENBQUNZLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGO0FBQUEsZUFBVVosUUFBUSxDQUFDYSxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBZ0JFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsK0JBQ0ksOERBQUMsNkRBQUQ7QUFBYyxvQkFBVSxFQUFFZjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosbUJBREY7QUEwQkQsQ0EzQkQ7O0FBNkJPLE1BQU1nQixrQkFBa0IsR0FBRyxZQUFZO0FBQzVDLFFBQU1DLEtBQUssR0FBSSx3QkFBZjtBQUNBLFFBQU1qQixVQUFVLEdBQUcsTUFBTWtCLHVEQUFBLENBQW1CRCxLQUFuQixDQUF6Qjs7QUFFQSxNQUFJLENBQUNqQixVQUFVLENBQUNXLE1BQWhCLEVBQXdCO0FBQ3RCLFdBQU87QUFDTFEsV0FBSyxFQUFFO0FBQ0xuQixrQkFBVSxFQUFFO0FBRFA7QUFERixLQUFQO0FBS0QsR0FORCxNQU1PO0FBQ0wsV0FBTztBQUNMbUIsV0FBSyxFQUFFO0FBQ0xuQjtBQURLO0FBREYsS0FBUDtBQUtEO0FBQ0YsQ0FqQk07QUFtQlAsK0RBQWVELElBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNhbml0eUNsaWVudCwgdXJsRm9yIH0gZnJvbSAnLi4vc2FuaXR5J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgaXNNdWx0aXBsZSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IERhc2hib2FyZE1hcCBmcm9tICcuLi9jb21wb25lbnRzL0Rhc2hib2FyZE1hcCdcblxuY29uc3QgSG9tZSA9ICh7IHByb3BlcnRpZXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cHJvcGVydGllcyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmVlZC1jb250YWluZXInPlxuICAgICAgICAgICAgPGgxPlBsYWNlcyB0byBzdGF5IG5lYXIgeW91PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmZWVkJz5cbiAgICAgICAgICAgICAge3Byb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgcHJvcGVydHkvJHtwcm9wZXJ0eS5zbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJvcGVydHkuX2lkfSBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsRm9yKHByb3BlcnR5Lm1haW5JbWFnZSkud2lkdGgoMjUwKS5oZWlnaHQoMTQ4KS5maXQoJ2Nyb3AnKX0vPlxuICAgICAgICAgICAgICAgICAgICA8cD57cHJvcGVydHkucmV2aWV3cy5sZW5ndGh9IHJldmlld3tpc011bHRpcGxlKHByb3BlcnR5LnJldmlld3MubGVuZ3RoKX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57cHJvcGVydHkudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPiR7cHJvcGVydHkucHJpY2VQZXJOaWdodH08L2gzPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXAnPlxuICAgICAgICAgICAgICA8RGFzaGJvYXJkTWFwIHByb3BlcnRpZXM9e3Byb3BlcnRpZXN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwcm9wZXJ0eVwiXWBcbiAgY29uc3QgcHJvcGVydGllcyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSlcblxuICBpZiAoIXByb3BlcnRpZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHByb3BlcnRpZXM6IFtdXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwcm9wZXJ0aWVzXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./sanity.js":
/*!*******************!*\
  !*** ./sanity.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"urlFor\": function() { return /* binding */ urlFor; },\n/* harmony export */   \"sanityClient\": function() { return /* binding */ sanityClient; }\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n  /**\n   * Find your project ID and dataset in `sanity.json` in your studio project.\n   * These are considered “public”, but you can use environment variables\n   * if you want differ between local dev and production.\n   *\n   * https://nextjs.org/docs/basic-features/environment-variables\n   **/\n  dataset: \"production\" || 0,\n  projectId: \"n65ed0r6\",\n  useCdn: false\n  /**\n   * Set useCdn to `false` if your application require the freshest possible\n   * data always (potentially slightly slower and a bit more expensive).\n   * Authenticated request (like preview) will always bypass the CDN\n   **/\n\n};\n/**\n * Set up a helper function for generating Image URLs with only the asset reference data in your documents.\n * Read more: https://www.sanity.io/docs/image-url\n **/\n\nconst urlFor = source => (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createImageUrlBuilder)(config).image(source); // Set up the client for fetching data in the getProps page functions\n\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haXJibmItZmUvLi9zYW5pdHkuanM/MTk0ZCJdLCJuYW1lcyI6WyJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsInByb2plY3RJZCIsInVzZUNkbiIsInVybEZvciIsInNvdXJjZSIsImNyZWF0ZUltYWdlVXJsQnVpbGRlciIsImltYWdlIiwic2FuaXR5Q2xpZW50IiwiY3JlYXRlQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxNQUFNLEdBQUc7QUFDYjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFQyxTQUFPLEVBQUVDLFlBQUEsSUFBMEMsQ0FSdEM7QUFTYkMsV0FBUyxFQUFFRCxVQVRFO0FBVWJFLFFBQU07QUFDTjtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQWZlLENBQWY7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUMsTUFBTSxHQUFJQyxNQUFELElBQVlDLGtFQUFxQixDQUFDUCxNQUFELENBQXJCLENBQThCUSxLQUE5QixDQUFvQ0YsTUFBcEMsQ0FBM0IsQyxDQUVQOztBQUNPLE1BQU1HLFlBQVksR0FBR0MseURBQVksQ0FBQ1YsTUFBRCxDQUFqQyIsImZpbGUiOiIuL3Nhbml0eS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCwgY3JlYXRlSW1hZ2VVcmxCdWlsZGVyIH0gZnJvbSBcIm5leHQtc2FuaXR5XCJcblxuY29uc3QgY29uZmlnID0ge1xuICAvKipcbiAgICogRmluZCB5b3VyIHByb2plY3QgSUQgYW5kIGRhdGFzZXQgaW4gYHNhbml0eS5qc29uYCBpbiB5b3VyIHN0dWRpbyBwcm9qZWN0LlxuICAgKiBUaGVzZSBhcmUgY29uc2lkZXJlZCDigJxwdWJsaWPigJ0sIGJ1dCB5b3UgY2FuIHVzZSBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAgICogaWYgeW91IHdhbnQgZGlmZmVyIGJldHdlZW4gbG9jYWwgZGV2IGFuZCBwcm9kdWN0aW9uLlxuICAgKlxuICAgKiBodHRwczovL25leHRqcy5vcmcvZG9jcy9iYXNpYy1mZWF0dXJlcy9lbnZpcm9ubWVudC12YXJpYWJsZXNcbiAgICoqL1xuICBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCB8fCBcInByb2R1Y3Rpb25cIixcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCxcbiAgdXNlQ2RuOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gIC8qKlxuICAgKiBTZXQgdXNlQ2RuIHRvIGBmYWxzZWAgaWYgeW91ciBhcHBsaWNhdGlvbiByZXF1aXJlIHRoZSBmcmVzaGVzdCBwb3NzaWJsZVxuICAgKiBkYXRhIGFsd2F5cyAocG90ZW50aWFsbHkgc2xpZ2h0bHkgc2xvd2VyIGFuZCBhIGJpdCBtb3JlIGV4cGVuc2l2ZSkuXG4gICAqIEF1dGhlbnRpY2F0ZWQgcmVxdWVzdCAobGlrZSBwcmV2aWV3KSB3aWxsIGFsd2F5cyBieXBhc3MgdGhlIENETlxuICAgKiovXG59XG4vKipcbiAqIFNldCB1cCBhIGhlbHBlciBmdW5jdGlvbiBmb3IgZ2VuZXJhdGluZyBJbWFnZSBVUkxzIHdpdGggb25seSB0aGUgYXNzZXQgcmVmZXJlbmNlIGRhdGEgaW4geW91ciBkb2N1bWVudHMuXG4gKiBSZWFkIG1vcmU6IGh0dHBzOi8vd3d3LnNhbml0eS5pby9kb2NzL2ltYWdlLXVybFxuICoqL1xuZXhwb3J0IGNvbnN0IHVybEZvciA9IChzb3VyY2UpID0+IGNyZWF0ZUltYWdlVXJsQnVpbGRlcihjb25maWcpLmltYWdlKHNvdXJjZSlcblxuLy8gU2V0IHVwIHRoZSBjbGllbnQgZm9yIGZldGNoaW5nIGRhdGEgaW4gdGhlIGdldFByb3BzIHBhZ2UgZnVuY3Rpb25zXG5leHBvcnQgY29uc3Qgc2FuaXR5Q2xpZW50ID0gY3JlYXRlQ2xpZW50KGNvbmZpZykiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sanity.js\n");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isMultiple\": function() { return /* binding */ isMultiple; }\n/* harmony export */ });\nconst isMultiple = value => value === 0 || value === 1 ? '' : 's';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haXJibmItZmUvLi91dGlscy5qcz8xYjIzIl0sIm5hbWVzIjpbImlzTXVsdGlwbGUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFVBQVUsR0FBSUMsS0FBRCxJQUFZQSxLQUFLLEtBQUssQ0FBVixJQUFlQSxLQUFLLEtBQUssQ0FBMUIsR0FBK0IsRUFBL0IsR0FBb0MsR0FBbEUiLCJmaWxlIjoiLi91dGlscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpc011bHRpcGxlID0gKHZhbHVlKSA9PiAodmFsdWUgPT09IDAgfHwgdmFsdWUgPT09IDEpID8gJycgOiAncyciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils.js\n");

/***/ }),

/***/ "@react-google-maps/api":
/*!*****************************************!*\
  !*** external "@react-google-maps/api" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@react-google-maps/api");;

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-sanity");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
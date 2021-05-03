/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/validator/es/lib/isByteLength.js":
/*!*******************************************************!*\
  !*** ./node_modules/validator/es/lib/isByteLength.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isByteLength; });
/* harmony import */ var _util_assertString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/es/lib/util/assertString.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/* eslint-disable prefer-rest-params */

function isByteLength(str, options) {
  Object(_util_assertString__WEBPACK_IMPORTED_MODULE_0__["default"])(str);
  var min;
  var max;

  if (_typeof(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }

  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

/***/ }),

/***/ "./node_modules/validator/es/lib/isEmail.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/es/lib/isEmail.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmail; });
/* harmony import */ var _util_assertString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/es/lib/util/assertString.js");
/* harmony import */ var _util_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/merge */ "./node_modules/validator/es/lib/util/merge.js");
/* harmony import */ var _isByteLength__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isByteLength */ "./node_modules/validator/es/lib/isByteLength.js");
/* harmony import */ var _isFQDN__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isFQDN */ "./node_modules/validator/es/lib/isFQDN.js");
/* harmony import */ var _isIP__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isIP */ "./node_modules/validator/es/lib/isIP.js");





var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true,
  blacklisted_chars: '',
  ignore_max_length: false
};
/* eslint-disable max-len */

/* eslint-disable no-control-regex */

var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var gmailUserPart = /^[a-z\d]+$/;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
var defaultMaxEmailLength = 254;
/* eslint-enable max-len */

/* eslint-enable no-control-regex */

/**
 * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
 * @param {String} display_name
 */

function validateDisplayName(display_name) {
  var display_name_without_quotes = display_name.replace(/^"(.+)"$/, '$1'); // display name with only spaces is not valid

  if (!display_name_without_quotes.trim()) {
    return false;
  } // check whether display name contains illegal character


  var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);

  if (contains_illegal) {
    // if contains illegal characters,
    // must to be enclosed in double-quotes, otherwise it's not a valid display name
    if (display_name_without_quotes === display_name) {
      return false;
    } // the quotes in display name must start with character symbol \


    var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;

    if (!all_start_with_back_slash) {
      return false;
    }
  }

  return true;
}

function isEmail(str, options) {
  Object(_util_assertString__WEBPACK_IMPORTED_MODULE_0__["default"])(str);
  options = Object(_util_merge__WEBPACK_IMPORTED_MODULE_1__["default"])(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(splitNameAddress);

    if (display_email) {
      var display_name = display_email[1]; // Remove display name and angle brackets to get email address
      // Can be done in the regex but will introduce a ReDOS (See  #1597 for more info)

      str = str.replace(display_name, '').replace(/(^<|>$)/g, ''); // sometimes need to trim the last space to get the display name
      // because there may be a space between display name and email address
      // eg. myname <address@gmail.com>
      // the display name is `myname` instead of `myname `, so need to trim the last space

      if (display_name.endsWith(' ')) {
        display_name = display_name.substr(0, display_name.length - 1);
      }

      if (!validateDisplayName(display_name)) {
        return false;
      }
    } else if (options.require_display_name) {
      return false;
    }
  }

  if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
    return false;
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');
  var lower_domain = domain.toLowerCase();

  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
    /*
      Previously we removed dots for gmail addresses before validating.
      This was removed because it allows `multiple..dots@gmail.com`
      to be reported as valid, but it is not.
      Gmail only normalizes single dots, removing them from here is pointless,
      should be done in normalizeEmail
    */
    user = user.toLowerCase(); // Removing sub-address from username before gmail validation

    var username = user.split('+')[0]; // Dots are not included in gmail length restriction

    if (!Object(_isByteLength__WEBPACK_IMPORTED_MODULE_2__["default"])(username.replace('.', ''), {
      min: 6,
      max: 30
    })) {
      return false;
    }

    var _user_parts = username.split('.');

    for (var i = 0; i < _user_parts.length; i++) {
      if (!gmailUserPart.test(_user_parts[i])) {
        return false;
      }
    }
  }

  if (options.ignore_max_length === false && (!Object(_isByteLength__WEBPACK_IMPORTED_MODULE_2__["default"])(user, {
    max: 64
  }) || !Object(_isByteLength__WEBPACK_IMPORTED_MODULE_2__["default"])(domain, {
    max: 254
  }))) {
    return false;
  }

  if (!Object(_isFQDN__WEBPACK_IMPORTED_MODULE_3__["default"])(domain, {
    require_tld: options.require_tld
  })) {
    if (!options.allow_ip_domain) {
      return false;
    }

    if (!Object(_isIP__WEBPACK_IMPORTED_MODULE_4__["default"])(domain)) {
      if (!domain.startsWith('[') || !domain.endsWith(']')) {
        return false;
      }

      var noBracketdomain = domain.substr(1, domain.length - 2);

      if (noBracketdomain.length === 0 || !Object(_isIP__WEBPACK_IMPORTED_MODULE_4__["default"])(noBracketdomain)) {
        return false;
      }
    }
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
  var user_parts = user.split('.');

  for (var _i = 0; _i < user_parts.length; _i++) {
    if (!pattern.test(user_parts[_i])) {
      return false;
    }
  }

  if (options.blacklisted_chars) {
    if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), 'g')) !== -1) return false;
  }

  return true;
}

/***/ }),

/***/ "./node_modules/validator/es/lib/isFQDN.js":
/*!*************************************************!*\
  !*** ./node_modules/validator/es/lib/isFQDN.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isFQDN; });
/* harmony import */ var _util_assertString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/es/lib/util/assertString.js");
/* harmony import */ var _util_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/merge */ "./node_modules/validator/es/lib/util/merge.js");


var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_numeric_tld: false
};
function isFQDN(str, options) {
  Object(_util_assertString__WEBPACK_IMPORTED_MODULE_0__["default"])(str);
  options = Object(_util_merge__WEBPACK_IMPORTED_MODULE_1__["default"])(options, default_fqdn_options);
  /* Remove the optional trailing dot before checking validity */

  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }

  var parts = str.split('.');
  var tld = parts[parts.length - 1];

  if (options.require_tld) {
    // disallow fqdns without tld
    if (parts.length < 2) {
      return false;
    }

    if (!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    } // disallow spaces && special characers


    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(tld)) {
      return false;
    }
  } // reject numeric TLDs


  if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
    return false;
  }

  return parts.every(function (part) {
    if (part.length > 63) {
      return false;
    }

    if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    } // disallow full-width chars


    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    } // disallow parts starting or ending with hyphen


    if (/^-|-$/.test(part)) {
      return false;
    }

    if (!options.allow_underscores && /_/.test(part)) {
      return false;
    }

    return true;
  });
}

/***/ }),

/***/ "./node_modules/validator/es/lib/isIP.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/es/lib/isIP.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isIP; });
/* harmony import */ var _util_assertString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/assertString */ "./node_modules/validator/es/lib/util/assertString.js");

/**
11.3.  Examples

   The following addresses

             fe80::1234 (on the 1st link of the node)
             ff02::5678 (on the 5th link of the node)
             ff08::9abc (on the 10th organization of the node)

   would be represented as follows:

             fe80::1234%1
             ff02::5678%5
             ff08::9abc%10

   (Here we assume a natural translation from a zone index to the
   <zone_id> part, where the Nth zone of any scope is translated into
   "N".)

   If we use interface names as <zone_id>, those addresses could also be
   represented as follows:

            fe80::1234%ne0
            ff02::5678%pvc1.3
            ff08::9abc%interface10

   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
   to the 5th link, and "interface10" belongs to the 10th organization.
 * * */

var IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
var IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';
var IPv6AddressRegExp = new RegExp('^(' + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ')(%[0-9a-zA-Z-.:]{1,})?$');
function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  Object(_util_assertString__WEBPACK_IMPORTED_MODULE_0__["default"])(str);
  version = String(version);

  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  }

  if (version === '4') {
    if (!IPv4AddressRegExp.test(str)) {
      return false;
    }

    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  }

  if (version === '6') {
    return !!IPv6AddressRegExp.test(str);
  }

  return false;
}

/***/ }),

/***/ "./node_modules/validator/es/lib/util/assertString.js":
/*!************************************************************!*\
  !*** ./node_modules/validator/es/lib/util/assertString.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assertString; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    var invalidType = _typeof(input);

    if (input === null) invalidType = 'null';else if (invalidType === 'object') invalidType = input.constructor.name;
    throw new TypeError("Expected a string but received a ".concat(invalidType));
  }
}

/***/ }),

/***/ "./node_modules/validator/es/lib/util/merge.js":
/*!*****************************************************!*\
  !*** ./node_modules/validator/es/lib/util/merge.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return merge; });
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : undefined;

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }

  return obj;
}

/***/ }),

/***/ "./source/js/animation.js":
/*!********************************!*\
  !*** ./source/js/animation.js ***!
  \********************************/
/*! exports provided: fadeOut, fadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
const FADE_STEP = 0.1;

const fadeOut = (el) => {
  return new Promise((resolve) => {
    el.style.opacity = 1;
    (function fade() {
      if ((el.style.opacity -= FADE_STEP) <= 0) {
        return resolve();
      }
      requestAnimationFrame(fade);
    })();
  });
};

const fadeIn = (el) => {
  return new Promise((resolve) => {
    el.style.opacity = 0;
    (function fade () {
      let val = parseFloat(el.style.opacity);
      if ((val += FADE_STEP) >= 1 + FADE_STEP) {
        return resolve();
      }
      el.style.opacity = val;
      requestAnimationFrame(fade);
    })();
  });
};




/***/ }),

/***/ "./source/js/api.js":
/*!**************************!*\
  !*** ./source/js/api.js ***!
  \**************************/
/*! exports provided: getData, sendData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendData", function() { return sendData; });
const getData = (onSuccess, onError) => {
  return fetch('https://echo.htmlacademy.ru/courses')
    .then((responce) => {
      if (responce.ok) {
        return responce.json();
      }
      throw new Error(`${responce.status} ${responce.statusText}`);
    })
    .then(onSuccess)
    .catch(onError);
};

const sendData = (data, onSuccess, onError) => {
  return fetch(
    'https://echo.htmlacademy.ru/courses',
    {
      method: 'POST',
      mode: 'no-cors',
      body: data,
    })
    .then((responce) => {
      if (responce.ok) {
        return onSuccess(responce);
      }
      throw new Error(`${responce.status} ${responce.statusText}`);
    })
    .catch(onError);
};




/***/ }),

/***/ "./source/js/carousel.js":
/*!*******************************!*\
  !*** ./source/js/carousel.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation.js */ "./source/js/animation.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./source/js/util.js");



const result = document.querySelector('.result');
const resultList = result.querySelector('.result__list');
const resultItems = resultList.childNodes;
const prevButton = result.querySelector('.result__swipe--prev');
const nextButton = result.querySelector('.result__swipe--next');
const resultGalerries = Array.from(resultList.querySelectorAll('.result__gallery'));
const currentPaginationList = resultList.querySelector('.result__item--current .result__pagination-list');
const currentGalleryList = resultList.querySelector('.result__item--current .result__gallery-list');

let currentGalleryItems = Array.from(resultList.querySelectorAll('.result__item--current .result__gallery-item'));
let currentPaginationItems = Array.from(resultList.querySelectorAll('.result__item--current .result__pagination-item'));

const paintButtons = (galleries) => {
  galleries.forEach(gallery => {
    const galleryImages = Array.from(gallery.querySelectorAll('.result__gallery-image'));
    const paginationButtons = Array.from(gallery.querySelectorAll('.result__pagination-button'));

    galleryImages.forEach((image, index) => {
      paginationButtons[index].style.backgroundImage = `url("${image.src}")`;
    });
  });
};

const closeGalleryPopup = () => {
  const underlay = result.querySelector('.result__underlay');
  result.classList.remove('result--popup-open');
  Object(_animation_js__WEBPACK_IMPORTED_MODULE_0__["fadeOut"])(underlay)
    .then(() => {
      underlay.remove();
      result.style.height = 'auto';
      currentGalleryList.addEventListener('click', onGalleryLinkClick);
    });

  document.body.classList.remove('no-scroll');
  underlay.removeEventListener('click', closeGalleryPopup);
  document.removeEventListener('keydown', onPopupEsc);
};

const onPopupEsc = (evt) => {
  evt.preventDefault();
  if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["isEsc"])(evt)) {
    return;
  }
  closeGalleryPopup();
};

const onGalleryLinkClick = (evt) => {
  evt.preventDefault();
  if (!evt.target.className === 'result__gallery-link') {
    return;
  }

  const underlay = document.createElement('div');
  underlay.classList.add('result__underlay');
  result.prepend(underlay);
  Object(_animation_js__WEBPACK_IMPORTED_MODULE_0__["fadeIn"])(underlay)
    .then(() => {
      underlay.addEventListener('click', closeGalleryPopup);
      document.addEventListener('keydown', onPopupEsc);
    });

  const resultHeight = result.getBoundingClientRect().height;
  result.style.height = `${resultHeight}px`;
  result.classList.add('result--popup-open');
  document.body.classList.add('no-scroll');
  currentGalleryList.removeEventListener('click', onGalleryLinkClick);
};

const onThumbnailClick = (evt) => {
  evt.preventDefault();
  if (
    evt.target.className !== 'result__pagination-button' ||
    evt.target.closest('.result__pagination-item--current')
  ) {
    return;
  }

  const currentPaginationList = evt.currentTarget;
  currentPaginationList.removeEventListener('click', onThumbnailClick);

  const prevPaginationItem = currentPaginationItems.find(item => item.matches('.result__pagination-item--current'));
  const prevPaginationItemUnderline = prevPaginationItem.querySelector('.result__pagination-item-underline--current');
  const prevPaginationItemX = prevPaginationItem.getBoundingClientRect().x;
  const prevGalleryItem = currentGalleryItems.find(item => item.matches('.result__gallery-item--current'));
  const nextPaginationItem = evt.target.closest('.result__pagination-item');
  const nextPaginationItemUnderline = nextPaginationItem.querySelector('.result__pagination-item-underline');
  const nextPaginationItemX = nextPaginationItem.getBoundingClientRect().x;
  const itemIndex = currentPaginationItems.indexOf(nextPaginationItem);
  const nextGalleryItem = currentGalleryItems[itemIndex];
  prevPaginationItem.classList.remove('result__pagination-item--current');
  nextPaginationItem.classList.add('result__pagination-item--current');

  let transitionsDoneCount = 0;

  const activateThumbnails = () => {
    transitionsDoneCount += 1;
    if (transitionsDoneCount === 2) {
      currentPaginationList.addEventListener('click', onThumbnailClick);
    }
  };

  Object(_animation_js__WEBPACK_IMPORTED_MODULE_0__["fadeOut"])(prevGalleryItem)
    .then(() => {
      prevGalleryItem.classList.remove('result__gallery-item--current');
      nextGalleryItem.classList.add('result__gallery-item--current');
      return Object(_animation_js__WEBPACK_IMPORTED_MODULE_0__["fadeIn"])(nextGalleryItem);
    })
    .then(() => {
      activateThumbnails();
    });

  prevPaginationItemUnderline.addEventListener('transitionend', () => {
    nextPaginationItemUnderline.classList.add('result__pagination-item-underline--current');
    prevPaginationItemUnderline.classList.remove('result__pagination-item-underline--current');
    prevPaginationItemUnderline.style.transform = 'none';
    activateThumbnails();
  }, {
    once: true,
  });

  prevPaginationItemUnderline.style.transform = `translateX(${nextPaginationItemX - prevPaginationItemX}px)`;
};

const onNextClick = (evt) => {
  evt.preventDefault();

  nextButton.removeEventListener('click', onNextClick);
  prevButton.removeEventListener('click', onPrevClick);

  const prevItem = resultList.querySelector('.result__item--current');
  const prevGalleryList = prevItem.querySelector('.result__gallery-list');
  const prevPaginationList = prevItem.querySelector('.result__pagination-list');
  const nextItem = prevItem.nextSibling ? prevItem.nextSibling : resultItems[0];
  const nextGalleryList = nextItem.querySelector('.result__gallery-list');
  const nextPaginationList = nextItem.querySelector('.result__pagination-list');
  currentGalleryItems = Array.from(nextGalleryList.childNodes);
  currentPaginationItems = Array.from(nextPaginationList.childNodes);

  Object(_animation_js__WEBPACK_IMPORTED_MODULE_0__["fadeOut"])(prevItem)
    .then(() => {
      prevItem.classList.remove('result__item--current');
      nextItem.classList.add('result__item--current');
      return Object(_animation_js__WEBPACK_IMPORTED_MODULE_0__["fadeIn"])(nextItem);
    })
    .then(() => {
      nextButton.addEventListener('click', onNextClick);
      prevButton.addEventListener('click', onPrevClick);
    });

  prevGalleryList.removeEventListener('click', onGalleryLinkClick);
  prevPaginationList.removeEventListener('click', onThumbnailClick);
  nextGalleryList.addEventListener('click', onGalleryLinkClick);
  nextPaginationList.addEventListener('click', onThumbnailClick);
};

const onPrevClick = (evt) => {
  evt.preventDefault();

  nextButton.removeEventListener('click', onNextClick);
  prevButton.removeEventListener('click', onPrevClick);

  const prevItem = resultList.querySelector('.result__item--current');
  const prevGalleryList = prevItem.querySelector('.result__gallery-list');
  const prevPaginationList = prevItem.querySelector('.result__pagination-list');
  const nextItem = prevItem.previousSibling ? prevItem.previousSibling : resultItems[resultItems.length - 1];
  const nextGalleryList = nextItem.querySelector('.result__gallery-list');
  const nextPaginationList = nextItem.querySelector('.result__pagination-list');
  currentGalleryItems = Array.from(nextGalleryList.childNodes);
  currentPaginationItems = Array.from(nextPaginationList.childNodes);

  Object(_animation_js__WEBPACK_IMPORTED_MODULE_0__["fadeOut"])(prevItem)
    .then(() => {
      prevItem.classList.remove('result__item--current');
      nextItem.classList.add('result__item--current');
      return Object(_animation_js__WEBPACK_IMPORTED_MODULE_0__["fadeIn"])(nextItem);
    })
    .then(() => {
      nextButton.addEventListener('click', onNextClick);
      prevButton.addEventListener('click', onPrevClick);
    });

  prevGalleryList.removeEventListener('click', onGalleryLinkClick);
  prevPaginationList.removeEventListener('click', onThumbnailClick);
  nextGalleryList.addEventListener('click', onGalleryLinkClick);
  nextPaginationList.addEventListener('click', onThumbnailClick);
};

result.classList.remove('result--no-js');
paintButtons(resultGalerries);
nextButton.addEventListener('click', onNextClick);
prevButton.addEventListener('click', onPrevClick);
currentGalleryList.addEventListener('click', onGalleryLinkClick);
currentPaginationList.addEventListener('click', onThumbnailClick);


/***/ }),

/***/ "./source/js/form.js":
/*!***************************!*\
  !*** ./source/js/form.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./source/js/api.js");
/* harmony import */ var validator_es_lib_isEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator/es/lib/isEmail */ "./node_modules/validator/es/lib/isEmail.js");



const PHONE_REGEX = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{2}[\s-]?([0-9][\s-]?){3}[0-9]{2}$/;
const ERROR_TIMEOUT = 5000;
const ERROR_MESSAGE = 'Ошибка отправки данных. Попробуйте еще раз.';
const ButtonTexts = {
  DEFAULT: 'Отправить',
  SUCCESS: 'Отправлено!',
};
const SUCCESS_MESSAGE = 'Мы свяжемся с вами в ближайшее время';

const form = document.querySelector('.contact__form');
const inputs = Array.from(form.querySelectorAll('.contact__form-input'));
const nameInput = form.querySelector('#contact-name');
const addressInput = form.querySelector('#contact-address');
const messageInput = form.querySelector('#contact-message');
const submitWrapper = form.querySelector('.contact__form-submit-wrapper');
const submitButton = submitWrapper.querySelector('.contact__form-submit');

// валидация
const showInputInvalid = (input) => {
  const invalidMessage = input.parentElement.querySelector('.contact__form-label-invalid');
  input.classList.add('contact__form-input--invalid');

  if (invalidMessage) {
    return;
  }

  const message = document.createElement('span');
  message.classList.add('contact__form-label-invalid');
  message.textContent = input.dataset.error;
  input.parentNode.append(message);
}

const hideInputInvalid = (input) => {
  const message = input.parentNode.querySelector('.contact__form-label-invalid');
  if (message) {
    message.remove();
  }
  input.classList.remove('contact__form-input--invalid');
};

const validateName = () => {
  const value = nameInput.value;
  if (value === '') {
    return false;
  }

  const isValid = value.trim() !== '';

  isValid ? hideInputInvalid(nameInput) : showInputInvalid(nameInput);

  return isValid;
};

const validateAddress = () => {
  const value = addressInput.value;
  if (value === '') {
    return false;
  }

  const isValid = Object(validator_es_lib_isEmail__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || PHONE_REGEX.test(value.trim());

  isValid ? hideInputInvalid(addressInput) : showInputInvalid(addressInput);

  return isValid;
};

const validateMessage = () => {
  const value = messageInput.value;
  if (value === '') {
    return false;
  }

  const isValid = value.trim() !== '';

  isValid ? hideInputInvalid(messageInput) : showInputInvalid(messageInput);

  return isValid;
};

const validateForm = () => {
  const validators = [validateName(), validateAddress(), validateMessage()]
  return validators.every(validator => validator === true);
};

// Отправка
const showSuccessMessage = () => {
  const message = document.createElement('p');
  message.classList.add('contact__form-submitted');
  message.textContent = SUCCESS_MESSAGE;
  submitWrapper.append(message);
};

const hideSuccessMessage = () => {
  const message = submitWrapper.querySelector('.contact__form-submitted');
  message.remove();
};

const showSuccessButton = () => {
  submitButton.classList.add('contact__form-submit--success');
  submitButton.textContent = ButtonTexts.SUCCESS;
}

const hideSuccessButton = () => {
  submitButton.classList.remove('contact__form-submit--success');
  submitButton.textContent = ButtonTexts.DEFAULT;
}

const onRepeatedFormClick = () => {
  hideSuccessMessage();
  hideSuccessButton();
  submitButton.disabled = false;
  form.removeEventListener('click', onRepeatedFormClick);
};

const onSuccessSubmit = (responce) => {
  showSuccessMessage();
  showSuccessButton();
  form.reset();
  submitButton.disabled = true;
  form.addEventListener('click', onRepeatedFormClick);
  responce.text().then((text) => {
    const tab = window.open();
    tab.document.write(text);
  });
};

const onErrorSubmit = () => {
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('contact__form-submit-error');
  errorMessage.textContent = ERROR_MESSAGE;
  form.append(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, ERROR_TIMEOUT);
};

const onSubmit = (evt) => {
  evt.preventDefault();
  submitButton.blur();
  if (validateForm()) {
    Object(_api_js__WEBPACK_IMPORTED_MODULE_0__["sendData"])(new FormData(evt.target), onSuccessSubmit, onErrorSubmit)
  } else {
    const emptyInputs = Array.from(form.querySelectorAll('*:placeholder-shown'));
    emptyInputs.forEach(input => showInputInvalid(input));
    form.querySelector('.contact__form-input--invalid').focus();
  }

};

inputs.forEach(input => input.required = false);
nameInput.addEventListener('blur', validateName);
addressInput.addEventListener('blur', validateAddress);
messageInput.addEventListener('blur', validateMessage);
form.addEventListener('submit', onSubmit);


/***/ }),

/***/ "./source/js/menu.js":
/*!***************************!*\
  !*** ./source/js/menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

const navWrapper = document.querySelector('.header__nav-wrapper');
const currentLink = navWrapper.querySelector('.header__nav-link--current');
const navToggle = navWrapper.querySelector('.header__nav-toggle');

const toggleMenu = (evt) => {
  evt.preventDefault();
  navWrapper.classList.toggle('header__nav-wrapper--opened');
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !isExpanded);
};

const closeMenu = (evt) => {
  evt.preventDefault();
  navWrapper.classList.remove('header__nav-wrapper--opened');
  navToggle.setAttribute('aria-expanded', 'false');
};

const renderUnderlay = () => {
  const navUnderlay = document.createElement('div');
  navUnderlay.classList.add('header__nav-underlay');
  navWrapper.prepend(navUnderlay);

  navUnderlay.addEventListener('click', closeMenu);
}

renderUnderlay();
navWrapper.classList.remove('header__nav-wrapper--no-js');
navToggle.addEventListener('click', toggleMenu);

if (currentLink) {
  currentLink.addEventListener('click', closeMenu);
}


/***/ }),

/***/ "./source/js/procedure-tabs.js":
/*!*************************************!*\
  !*** ./source/js/procedure-tabs.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation.js */ "./source/js/animation.js");


const regionList = document.querySelector('.header__region-list');
const procedure = document.querySelector('.procedure');

const DEFAULT_ID = '#head';

const currentUnit = {
  navList: null,
  price: null,
};

const getRegionId = () => {
  const id = sessionStorage.getItem('regionId');
  sessionStorage.removeItem('regionId');
  return id ? id : DEFAULT_ID;
};


const getTabId = url => url.slice(url.indexOf('#'));

const initializePage = () => {
  const id = getRegionId();
  const activeLink = regionList.querySelector(`.header__region-link[href="${id}"]`);
  const activeUnit = procedure.querySelector(`${id}`);

  activeLink.classList.add('header__region-link--current');
  activeUnit.classList.add('procedure__unit--current');

  currentUnit.navList = activeUnit.querySelector('.procedure__nav-list');
  currentUnit.price = activeUnit.querySelector('.procedure__price');

  procedure.classList.remove('procedure--no-js');
  currentUnit.navList.addEventListener('click', onTabClick);
};

const onTabClick = (evt) => {
  evt.preventDefault();
  if (evt.target.className !== 'procedure__nav-link') {
    return;
  }

  currentUnit.navList.removeEventListener('click', onTabClick);

  const prevLink = currentUnit.navList.querySelector('.procedure__nav-link--current');
  const nextLink = evt.target;
  prevLink.classList.remove('procedure__nav-link--current');
  nextLink.classList.add('procedure__nav-link--current');

  const id = getTabId(evt.target.href);
  const prevSection = currentUnit.price.querySelector('.procedure__section--current');
  const nextSection = currentUnit.price.querySelector(`${id}`);

  Object(_animation_js__WEBPACK_IMPORTED_MODULE_0__["fadeOut"])(prevSection)
    .then(() => {
      prevSection.classList.remove('procedure__section--current');
      nextSection.classList.add('procedure__section--current');
      return Object(_animation_js__WEBPACK_IMPORTED_MODULE_0__["fadeIn"])(nextSection);
    })
    .then(() => {
      currentUnit.navList.addEventListener('click', onTabClick);
    });
};

const onRegionClick = (evt) => {
  evt.preventDefault();
  if (
    !evt.target.matches('.header__region-link') ||
    evt.target.matches('.header__region-link--current')
  ) {
    return;
  }

  regionList.removeEventListener('click', onRegionClick);

  const prevLink = regionList.querySelector('.header__region-link--current');
  const nextLink = evt.target;
  prevLink.classList.remove('header__region-link--current');
  nextLink.classList.add('header__region-link--current');

  const id = evt.target.href.slice(evt.target.href.indexOf('#'));
  const prevUnit = procedure.querySelector('.procedure__unit--current');
  const prevNavList = prevUnit.querySelector('.procedure__nav-list');
  const nextUnit = procedure.querySelector(`${id}`);
  const nextNavList = nextUnit.querySelector('.procedure__nav-list');

  Object(_animation_js__WEBPACK_IMPORTED_MODULE_0__["fadeOut"])(prevUnit)
    .then(() => {
      prevUnit.classList.remove('procedure__unit--current');
      nextUnit.classList.add('procedure__unit--current');
      return Object(_animation_js__WEBPACK_IMPORTED_MODULE_0__["fadeIn"])(nextUnit);
    })
    .then(() => {
      regionList.addEventListener('click', onRegionClick);
    });

  currentUnit.navList = nextNavList;
  currentUnit.price = nextUnit.querySelector('.procedure__price');

  prevNavList.removeEventListener('click', onTabClick);
  nextNavList.addEventListener('click', onTabClick);
}

initializePage();
regionList.addEventListener('click', onRegionClick);


/***/ }),

/***/ "./source/js/util.js":
/*!***************************!*\
  !*** ./source/js/util.js ***!
  \***************************/
/*! exports provided: isEsc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEsc", function() { return isEsc; });
const escKeyValues = ['Escape', 'Esc'];

const isEsc = (evt) => {
  return escKeyValues.some((code) => evt.key === code);
};




/***/ }),

/***/ 1:
/*!***********************************************************************************************************!*\
  !*** multi ./source/js/menu.js ./source/js/procedure-tabs.js ./source/js/form.js ./source/js/carousel.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./source/js/menu.js */"./source/js/menu.js");
__webpack_require__(/*! ./source/js/procedure-tabs.js */"./source/js/procedure-tabs.js");
__webpack_require__(/*! ./source/js/form.js */"./source/js/form.js");
module.exports = __webpack_require__(/*! ./source/js/carousel.js */"./source/js/carousel.js");


/***/ })

/******/ });
//# sourceMappingURL=procedure.bundle.js.map
(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!********************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/main.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 29));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 32));\n__webpack_require__(/*! ./uni.promisify.adaptor */ 33);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFHbkI7QUFDQTtBQUFnQztBQUFBO0FBQ2hDQSxZQUFHLENBQUNDLE1BQU0sQ0FBQ0MsYUFBYSxHQUFHLEtBQUs7QUFDaENDLFlBQUcsQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7QUFDbEIsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUcsbUJBQ2RHLFlBQUcsRUFDTjtBQUNGRSxHQUFHLENBQUNDLE1BQU0sRUFBRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgJy4vdW5pLnByb21pc2lmeS5hZGFwdG9yJ1xuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcbkFwcC5tcFR5cGUgPSAnYXBwJ1xuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gIC4uLkFwcFxufSlcbmFwcC4kbW91bnQoKVxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!***********************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/pages.json ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});
__definePage('pages/config/config', function () {
  return Vue.extend(__webpack_require__(/*! pages/config/config.vue?mpType=page */ 20).default);
});

/***/ }),
/* 7 */
/*!**********************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/pages/index/index.vue?mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 13);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzBNO0FBQzFNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguNC4yOS4yMDI0MDkzMDA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "title"), attrs: { _i: 1 } }, [
        _c(
          "view",
          { staticClass: _vm._$s(2, "sc", "header"), attrs: { _i: 2 } },
          [
            _c(
              "view",
              { staticClass: _vm._$s(3, "sc", "sx"), attrs: { _i: 3 } },
              [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.school)))]
            ),
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(4, "sc", "header"), attrs: { _i: 4 } },
          [
            _c(
              "view",
              { staticClass: _vm._$s(5, "sc", "zy"), attrs: { _i: 5 } },
              [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.specialized)))]
            ),
          ]
        ),
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(6, "sc", "signdetaildata"), attrs: { _i: 6 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(7, "sc", "itemdata"), attrs: { _i: 7 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(8, "sc", "datatitle"),
                  attrs: { _i: 8 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(9, "sc", "dataradio"),
                    attrs: { _i: 9 },
                  }),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(10, "sc", "datanum"),
                  attrs: { _i: 10 },
                },
                [_vm._v(_vm._$s(10, "t0-0", _vm._s(_vm.needSign))), _c("text")]
              ),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(12, "sc", "itemdata"), attrs: { _i: 12 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(13, "sc", "datatitle"),
                  attrs: { _i: 13 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(14, "sc", "dataradio"),
                    attrs: { _i: 14 },
                  }),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(15, "sc", "datanum"),
                  attrs: { _i: 15 },
                },
                [_vm._v(_vm._$s(15, "t0-0", _vm._s(_vm.signed))), _c("text")]
              ),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(17, "sc", "itemdata"), attrs: { _i: 17 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(18, "sc", "datatitle"),
                  attrs: { _i: 18 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(19, "sc", "dataradio"),
                    attrs: { _i: 19 },
                  }),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(20, "sc", "datanum"),
                  attrs: { _i: 20 },
                },
                [
                  _vm._v(_vm._$s(20, "t0-0", _vm._s(_vm.signfrequency))),
                  _c("text"),
                ]
              ),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(22, "sc", "itemdata"), attrs: { _i: 22 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(23, "sc", "datatitle"),
                  attrs: { _i: 23 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(24, "sc", "dataradio"),
                    attrs: { _i: 24 },
                  }),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(25, "sc", "datanum"),
                  attrs: { _i: 25 },
                },
                [_vm._v(_vm._$s(25, "t0-0", _vm._s(_vm.noSign))), _c("text")]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(27, "sc", "signday"), attrs: { _i: 27 } },
        [
          _c("view", [
            _c("view", {
              staticClass: _vm._$s(29, "sc", "dataradio"),
              attrs: { _i: 29 },
            }),
            _vm._v(_vm._$s(28, "t1-0", _vm._s(_vm.rightSign))),
          ]),
          _c("view", [
            _c("view", {
              staticClass: _vm._$s(31, "sc", "dataradio"),
              attrs: { _i: 31 },
            }),
            _vm._v(_vm._$s(30, "t1-0", _vm._s(_vm.errSign))),
          ]),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(32, "sc", "signdetail"), attrs: { _i: 32 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(33, "sc", "signstart"), attrs: { _i: 33 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(34, "sc", "signtitle"),
                  attrs: { _i: 34 },
                },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(35, "a-src", _vm.signInimgUrl),
                      _i: 35,
                    },
                  }),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(36, "sc", "signstatus"),
                  attrs: { _i: 36 },
                },
                [
                  _c(
                    "view",
                    {
                      class: _vm._$s(
                        37,
                        "c",
                        _vm.signInStatus == "正常" ? "status" : "noright"
                      ),
                      attrs: { _i: 37 },
                    },
                    [_vm._v(_vm._$s(37, "t0-0", _vm._s(_vm.signInStatus)))]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(38, "sc", "signtime"),
                      attrs: { _i: 38 },
                    },
                    [_vm._v(_vm._$s(38, "t0-0", _vm._s(_vm.signIntime)))]
                  ),
                ]
              ),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(39, "sc", "signstart"), attrs: { _i: 39 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(40, "sc", "signtitle"),
                  attrs: { _i: 40 },
                },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(41, "a-src", _vm.signOutimgUrl),
                      _i: 41,
                    },
                  }),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(42, "sc", "signstatus"),
                  attrs: { _i: 42 },
                },
                [
                  _c(
                    "view",
                    {
                      class: _vm._$s(
                        43,
                        "c",
                        _vm.signOutStatus == "正常" ? "status" : "noright"
                      ),
                      attrs: { _i: 43 },
                    },
                    [_vm._v(_vm._$s(43, "t0-0", _vm._s(_vm.signOutStatus)))]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(44, "sc", "signtime"),
                      attrs: { _i: 44 },
                    },
                    [_vm._v(_vm._$s(44, "t0-0", _vm._s(_vm.signOuttime)))]
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(45, "sc", "sign_location"), attrs: { _i: 45 } },
        [
          _c(
            "div",
            { staticClass: _vm._$s(46, "sc", "phone"), attrs: { _i: 46 } },
            [
              _c("image", {
                attrs: {
                  src: _vm._$s(47, "a-src", __webpack_require__(/*! ../../static/phonee.png */ 10)),
                  _i: 47,
                },
              }),
              _c("view", [_vm._v(_vm._$s(48, "t0-0", _vm._s(_vm.phone)))]),
            ]
          ),
          _c(
            "div",
            { staticClass: _vm._$s(49, "sc", "signin"), attrs: { _i: 49 } },
            [
              _c("image", {
                attrs: {
                  src: _vm._$s(
                    50,
                    "a-src",
                    __webpack_require__(/*! ../../static/addresss.png */ 11)
                  ),
                  _i: 50,
                },
              }),
              _c("view", [
                _vm._v(_vm._$s(51, "t0-0", _vm._s(_vm.signLocation))),
              ]),
            ]
          ),
          _c(
            "div",
            { staticClass: _vm._$s(52, "sc", "signout"), attrs: { _i: 52 } },
            [
              _c("image", {
                attrs: {
                  src: _vm._$s(
                    53,
                    "a-src",
                    __webpack_require__(/*! ../../static/addresss.png */ 11)
                  ),
                  _i: 53,
                },
              }),
              _c("view", [
                _vm._v(_vm._$s(54, "t0-0", _vm._s(_vm.signOutLocation))),
              ]),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(55, "sc", "listshow"), attrs: { _i: 55 } },
        [_c("view", [_vm._v(_vm._$s(56, "t0-0", _vm._s(_vm.className)))])]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(57, "sc", "rank"), attrs: { _i: 57 } },
        _vm._l(
          _vm._$s(58, "f", { forItems: _vm.rankList }),
          function (item, index, $20, $30) {
            return _c(
              "view",
              {
                key: _vm._$s(58, "f", { forIndex: $20, key: 58 + "-" + $30 }),
                staticClass: _vm._$s("58-" + $30, "sc", "rankitem"),
                attrs: { _i: "58-" + $30 },
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("59-" + $30, "sc", "stuname"),
                    attrs: { _i: "59-" + $30 },
                  },
                  [
                    _vm._$s("60-" + $30, "i", item.rankUrl)
                      ? _c("image", {
                          staticClass: _vm._$s("60-" + $30, "sc", "rankimg"),
                          attrs: {
                            src: _vm._$s("60-" + $30, "a-src", item.rankUrl),
                            _i: "60-" + $30,
                          },
                        })
                      : _c(
                          "view",
                          {
                            staticClass: _vm._$s("61-" + $30, "sc", "paiming"),
                            attrs: { _i: "61-" + $30 },
                          },
                          [
                            _vm._v(
                              _vm._$s("61-" + $30, "t0-0", _vm._s(item.ranking))
                            ),
                          ]
                        ),
                    _c("image", {
                      staticClass: _vm._$s("62-" + $30, "sc", "rankavatar"),
                      attrs: {
                        src: _vm._$s(
                          "62-" + $30,
                          "a-src",
                          __webpack_require__(/*! ../../static/avatar_man.png */ 12)
                        ),
                        _i: "62-" + $30,
                      },
                    }),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s("63-" + $30, "sc", "rankname"),
                        attrs: { _i: "63-" + $30 },
                      },
                      [
                        _vm._v(
                          _vm._$s("63-" + $30, "t0-0", _vm._s(item.userName))
                        ),
                      ]
                    ),
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s("64-" + $30, "sc", "ranktime"),
                    attrs: { _i: "64-" + $30 },
                  },
                  [_vm._v(_vm._$s("64-" + $30, "t0-0", _vm._s(item.avgWorks)))]
                ),
              ]
            )
          }
        ),
        0
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!******************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/static/phonee.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/phonee.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixxQkFBdUIiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvcGhvbmVlLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!********************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/static/addresss.png ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/addresss.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixxQkFBdUIiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvYWRkcmVzc3MucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**********************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/static/avatar_man.png ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/avatar_man.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixxQkFBdUIiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvYXZhdGFyX21hbi5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!**********************************************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 14);\n/* harmony import */ var _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdzQixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC40LjI5LjIwMjQwOTMwMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjQuMjkuMjAyNDA5MzAwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguNC4yOS4yMDI0MDkzMDA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguNC4yOS4yMDI0MDkzMDA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguNC4yOS4yMDI0MDkzMDA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC40LjI5LjIwMjQwOTMwMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjQuMjkuMjAyNDA5MzAwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjQuMjkuMjAyNDA5MzAwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _request = _interopRequireDefault(__webpack_require__(/*! ../../utils/request.js */ 16));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      school: '毕业实习',\n      signLocation: '未知',\n      signOutLocation: '未知',\n      phone: '未知',\n      specialized: '未知',\n      needSign: '未知',\n      signed: '未知',\n      signfrequency: '未知',\n      noSign: '未知',\n      rightSign: '未知',\n      errSign: '未知',\n      signInStatus: '未知',\n      signOutStatus: '未知',\n      signIntime: '未知',\n      signOuttime: '未知',\n      sessionId: '',\n      traineeId: '',\n      planId: '',\n      status: 2,\n      encryptValue: '',\n      signInimgUrl: '../../static/bag.png',\n      signOutimgUrl: '../../static/bag.png',\n      className: '未知',\n      rankList: [{\n        rankUrl: '../../static/rankone.png',\n        userName: '请配置信息',\n        avgWorks: 'null'\n      }, {\n        rankUrl: '../../static/ranktwo.png',\n        userName: '请配置信息',\n        avgWorks: 'null'\n      }, {\n        rankUrl: '../../static/rankthree.png',\n        userName: '请配置信息',\n        avgWorks: 'null'\n      }]\n    };\n  },\n  onLoad: function onLoad() {},\n  onShow: function onShow() {\n    var user_data = uni.getStorageSync('user_data');\n    if (uni.getStorageSync('JSESSIONID')) {\n      this.sessionId = uni.getStorageSync('JSESSIONID');\n    }\n    if (user_data) {\n      this.login(user_data);\n    }\n  },\n  methods: {\n    login: function login(user_data) {\n      var _this = this;\n      var md5 = __webpack_require__(/*! blueimp-md5 */ 18);\n      (0, _request.default)({\n        url: 'login/login.action',\n        method: 'POST',\n        data: {\n          username: user_data.username,\n          password: md5(user_data.password),\n          openId: user_data.openId,\n          unionId: user_data.unionId\n        },\n        cookie: 'JSESSIONID=' + this.sessionId,\n        addHeader: {\n          'referer': 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'\n        }\n      }).then(function (res) {\n        __f__(\"log\", res, \" at pages/index/index.vue:170\");\n        _this.phone = res.data.phone;\n        _this.sessionId = res.data.sessionId;\n        _this.encryptValue = res.data.encryptValue;\n        //获取trainrrId\n        _this.getTraineeId();\n      });\n    },\n    getPlan: function getPlan() {\n      var _this2 = this;\n      (0, _request.default)({\n        url: 'student/clock/GetPlan!detail.action',\n        method: \"POST\",\n        data: {\n          traineeId: this.traineeId\n        },\n        cookie: 'JSESSIONID=' + this.sessionId,\n        addHeader: {\n          encryptValue: this.encryptValue,\n          Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'\n        }\n      }).then(function (res) {\n        var data = res.data;\n        _this2.signInimgUrl = data.clockInfo.inImgUrl ? data.clockInfo.inImgUrl : _this2.signInimgUrl;\n        _this2.signOutimgUrl = data.clockInfo.outImgUrl ? data.clockInfo.outImgUrl : _this2.signOutimgUrl;\n        var inImgUrl = data.clockInfo.inImgUrl;\n        _this2.status = res.data.clockInfo.status;\n        if (_this2.status == 2) {\n          _this2.signInStatus = '未签';\n          _this2.signOutStatus = '未签';\n          _this2.signIntime = '请签到';\n          _this2.signOuttime = '请签到';\n          _this2.signLocation = '未签到，无法获取';\n          _this2.signOutLocation = '未签到，无法获取';\n        } else {\n          _this2.signInStatus = data.clockInfo.inStatus == 1 ? '外勤' : '正常';\n          _this2.signIntime = data.clockInfo.inTime + '已打卡';\n          _this2.signLocation = data.clockInfo.inAddress;\n          _this2.signOuttime = '请签到';\n          _this2.signOutLocation = '未签到，无法获取';\n          if (_this2.status == 1) {\n            _this2.signOutStatus = '未签';\n          } else {\n            _this2.signOutStatus = data.clockInfo.outStatus == 1 ? '外勤' : '正常';\n            _this2.signOutLocation = data.clockInfo.outAddress;\n            _this2.signOuttime = data.clockInfo.outTime + '已打卡';\n          }\n        }\n        _this2.getplanId();\n      });\n    },\n    getplanId: function getplanId() {\n      var _this3 = this;\n      (0, _request.default)({\n        url: 'student/clock/GetPlan!getDefault.action',\n        method: 'GET',\n        data: {\n          status: 'INTERRUPTED'\n        },\n        cookie: 'JSESSIONID=' + this.sessionId,\n        addHeader: {\n          encryptValue: this.encryptValue,\n          Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'\n        }\n      }).then(function (res) {\n        __f__(\"log\", res, \" at pages/index/index.vue:229\");\n        _this3.planId = res.data.clockVo.planId;\n        _this3.specialized = res.data.clockVo.planName;\n        _this3.school = res.data.clockVo.projectName;\n        _this3.getTongJi();\n      });\n    },\n    getTongJi: function getTongJi() {\n      var _this4 = this;\n      (0, _request.default)({\n        url: \"student/clock/clockStatistic.action\",\n        method: 'GET',\n        data: {\n          planId: this.planId\n        },\n        cookie: 'JSESSIONID=' + this.sessionId,\n        addHeader: {\n          encryptValue: this.encryptValue,\n          Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'\n        }\n      }).then(function (res) {\n        _this4.needSign = res.data.needClockDays;\n        _this4.signed = res.data.clockDays;\n        _this4.signfrequency = res.data.clockTimes;\n        _this4.noSign = res.data.unClockDays;\n        _this4.rightSign = res.data.normalClockDays;\n        _this4.errSign = res.data.abnormalClockDays;\n        _this4.getRank();\n      });\n    },\n    getRank: function getRank() {\n      var _this5 = this;\n      (0, _request.default)({\n        url: 'student/clock/PunchIn!rankingList.action',\n        method: 'POST',\n        cookie: 'JSESSIONID=' + this.sessionId,\n        data: {\n          traineeId: this.traineeId,\n          months: new Date().getFullYear() + '-' + (new Date().getMonth() + 1)\n        },\n        addHeader: {\n          encryptValue: this.encryptValue,\n          Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'\n        }\n      }).then(function (res) {\n        _this5.className = res.data.className;\n        var sortRanking = res.data.rankingList.sort(function (a, b) {\n          return a.ranking - b.ranking;\n        });\n        sortRanking[0].rankUrl = '../../static/rankone.png';\n        sortRanking[1].rankUrl = '../../static/ranktwo.png';\n        sortRanking[2].rankUrl = '../../static/rankthree.png';\n        _this5.rankList = sortRanking;\n      });\n    },\n    getTraineeId: function getTraineeId() {\n      var _this6 = this;\n      (0, _request.default)({\n        url: 'student/clock/GetPlan.action',\n        method: 'POST',\n        cookie: 'JSESSIONID=' + this.sessionId,\n        addHeader: {\n          encryptValue: this.encryptValue,\n          Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'\n        }\n      }).then(function (res) {\n        _this6.traineeId = res.data[0].dateList[0].traineeId;\n        _this6.getPlan();\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 15)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJzY2hvb2wiLCJzaWduTG9jYXRpb24iLCJzaWduT3V0TG9jYXRpb24iLCJwaG9uZSIsInNwZWNpYWxpemVkIiwibmVlZFNpZ24iLCJzaWduZWQiLCJzaWduZnJlcXVlbmN5Iiwibm9TaWduIiwicmlnaHRTaWduIiwiZXJyU2lnbiIsInNpZ25JblN0YXR1cyIsInNpZ25PdXRTdGF0dXMiLCJzaWduSW50aW1lIiwic2lnbk91dHRpbWUiLCJzZXNzaW9uSWQiLCJ0cmFpbmVlSWQiLCJwbGFuSWQiLCJzdGF0dXMiLCJlbmNyeXB0VmFsdWUiLCJzaWduSW5pbWdVcmwiLCJzaWduT3V0aW1nVXJsIiwiY2xhc3NOYW1lIiwicmFua0xpc3QiLCJyYW5rVXJsIiwidXNlck5hbWUiLCJhdmdXb3JrcyIsIm9uTG9hZCIsIm9uU2hvdyIsInVzZXJfZGF0YSIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwibG9naW4iLCJtZXRob2RzIiwibWQ1IiwicmVxdWlyZSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwib3BlbklkIiwidW5pb25JZCIsImNvb2tpZSIsImFkZEhlYWRlciIsInRoZW4iLCJyZXMiLCJnZXRUcmFpbmVlSWQiLCJnZXRQbGFuIiwiUmVmZXJlciIsImNsb2NrSW5mbyIsImluSW1nVXJsIiwib3V0SW1nVXJsIiwiaW5TdGF0dXMiLCJpblRpbWUiLCJpbkFkZHJlc3MiLCJvdXRTdGF0dXMiLCJvdXRBZGRyZXNzIiwib3V0VGltZSIsImdldHBsYW5JZCIsImNsb2NrVm8iLCJwbGFuTmFtZSIsInByb2plY3ROYW1lIiwiZ2V0VG9uZ0ppIiwibmVlZENsb2NrRGF5cyIsImNsb2NrRGF5cyIsImNsb2NrVGltZXMiLCJ1bkNsb2NrRGF5cyIsIm5vcm1hbENsb2NrRGF5cyIsImFibm9ybWFsQ2xvY2tEYXlzIiwiZ2V0UmFuayIsIm1vbnRocyIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwic29ydFJhbmtpbmciLCJyYW5raW5nTGlzdCIsInNvcnQiLCJhIiwiYiIsInJhbmtpbmciLCJkYXRlTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQW1IQztBQW5IRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxlQUdnQjtFQUNkQSxJQUFJLGtCQUFHO0lBQ04sT0FBTztNQUNOQyxNQUFNLEVBQUMsTUFBTTtNQUNiQyxZQUFZLEVBQUMsSUFBSTtNQUNqQkMsZUFBZSxFQUFDLElBQUk7TUFDcEJDLEtBQUssRUFBQyxJQUFJO01BQ1ZDLFdBQVcsRUFBQyxJQUFJO01BQ2hCQyxRQUFRLEVBQUMsSUFBSTtNQUNiQyxNQUFNLEVBQUMsSUFBSTtNQUNYQyxhQUFhLEVBQUMs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RUFBQyxNQUFNO1FBQ2JLLE1BQU0sRUFBQyxhQUFhLEdBQUMsSUFBSSxDQUFDNUIsU0FBUztRQUM5QjZCLFNBQVMsRUFBQztVQUNSekIsWUFBWSxFQUFDLElBQUksQ0FBQ0EsWUFBWTtVQUM5QjhCLE9BQU8sRUFBQztRQUNWO01BQ04sQ0FBQyxDQUFDLENBQUNKLElBQUksQ0FBQyxVQUFBQyxHQUFHLEVBQUU7UUFDWixNQUFJLENBQUM5QixTQUFTLEdBQUM4QixHQUFHLENBQUMvQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNrRixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNqRSxTQUFTO1FBQ2hELE1BQUksQ0FBQ2dDLE9BQU8sRUFBRTtNQUNmLENBQUMsQ0FBQztJQUNIO0VBQ0Q7QUFDRCxDQUFDO0FBQUEsMkIiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cblx0aW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4uLy4uL3V0aWxzL3JlcXVlc3QuanNcIlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHNjaG9vbDon5q+V5Lia5a6e5LmgJyxcblx0XHRcdFx0c2lnbkxvY2F0aW9uOifmnKrnn6UnLFxuXHRcdFx0XHRzaWduT3V0TG9jYXRpb246J+acquefpScsXG5cdFx0XHRcdHBob25lOifmnKrnn6UnLFxuXHRcdFx0XHRzcGVjaWFsaXplZDon5pyq55+lJyxcblx0XHRcdFx0bmVlZFNpZ246J+acquefpScsXG5cdFx0XHRcdHNpZ25lZDon5pyq55+lJyxcblx0XHRcdFx0c2lnbmZyZXF1ZW5jeTon5pyq55+lJyxcblx0XHRcdFx0bm9TaWduOifmnKrnn6UnLFxuXHRcdFx0XHRyaWdodFNpZ246J+acquefpScsXG5cdFx0XHRcdGVyclNpZ246J+acquefpScsXG5cdFx0XHRcdHNpZ25JblN0YXR1czon5pyq55+lJyxcblx0XHRcdFx0c2lnbk91dFN0YXR1czon5pyq55+lJyxcblx0XHRcdFx0c2lnbkludGltZTon5pyq55+lJyxcblx0XHRcdFx0c2lnbk91dHRpbWU6J+acquefpScsXG5cdFx0XHRcdHNlc3Npb25JZDonJyxcblx0XHRcdFx0dHJhaW5lZUlkOicnLFxuXHRcdFx0XHRwbGFuSWQ6JycsXG5cdFx0XHRcdHN0YXR1czoyLFxuICAgICAgICBlbmNyeXB0VmFsdWU6JycsXG4gICAgICAgIHNpZ25JbmltZ1VybDonLi4vLi4vc3RhdGljL2JhZy5wbmcnLFxuICAgICAgICBzaWduT3V0aW1nVXJsOicuLi8uLi9zdGF0aWMvYmFnLnBuZycsXG4gICAgICAgIGNsYXNzTmFtZTon5pyq55+lJyxcbiAgICAgICAgcmFua0xpc3Q6W3tyYW5rVXJsOicuLi8uLi9zdGF0aWMvcmFua29uZS5wbmcnLHVzZXJOYW1lOifor7fphY3nva7kv6Hmga8nLGF2Z1dvcmtzOidudWxsJ30se3JhbmtVcmw6Jy4uLy4uL3N0YXRpYy9yYW5rdHdvLnBuZycsdXNlck5hbWU6J+ivt+mFjee9ruS/oeaBrycsYXZnV29ya3M6J251bGwnfSx7cmFua1VybDonLi4vLi4vc3RhdGljL3Jhbmt0aHJlZS5wbmcnLHVzZXJOYW1lOifor7fphY3nva7kv6Hmga8nLGF2Z1dvcmtzOidudWxsJ31dXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvbkxvYWQoKSB7XG5cblx0XHR9LFxuXHRcdG9uU2hvdygpIHtcblx0XHRcdGxldCB1c2VyX2RhdGE9dW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VyX2RhdGEnKVxuICAgICAgaWYodW5pLmdldFN0b3JhZ2VTeW5jKCdKU0VTU0lPTklEJykpe1xuICAgICAgICB0aGlzLnNlc3Npb25JZD11bmkuZ2V0U3RvcmFnZVN5bmMoJ0pTRVNTSU9OSUQnKVxuICAgICAgfVxuXHRcdFx0aWYodXNlcl9kYXRhKXtcblx0XHRcdFx0dGhpcy5sb2dpbih1c2VyX2RhdGEpXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRsb2dpbih1c2VyX2RhdGEpe1xuICAgICAgICBjb25zdCBtZDUgPSByZXF1aXJlKFwiYmx1ZWltcC1tZDVcIik7XG5cdFx0XHRcdHJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDonbG9naW4vbG9naW4uYWN0aW9uJyxcblx0XHRcdFx0XHRtZXRob2Q6J1BPU1QnLFxuXHRcdFx0XHRcdGRhdGE6e3VzZXJuYW1lOnVzZXJfZGF0YS51c2VybmFtZSxwYXNzd29yZDptZDUodXNlcl9kYXRhLnBhc3N3b3JkKSxvcGVuSWQ6dXNlcl9kYXRhLm9wZW5JZCx1bmlvbklkOnVzZXJfZGF0YS51bmlvbklkfSxcbiAgICAgICAgICBjb29raWU6J0pTRVNTSU9OSUQ9Jyt0aGlzLnNlc3Npb25JZCxcbiAgICAgICAgICBhZGRIZWFkZXI6e1xuICAgICAgICAgICAgJ3JlZmVyZXInOidodHRwczovL3NlcnZpY2V3ZWNoYXQuY29tL3d4OWYxYzJlMGJiYzEwNjczYy80NTcvcGFnZS1mcmFtZS5odG1sJ1xuICAgICAgICAgIH1cblx0XHRcdFx0fSkudGhlbihyZXM9PntcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHRcdFx0dGhpcy5waG9uZT1yZXMuZGF0YS5waG9uZVxuXHRcdFx0XHRcdHRoaXMuc2Vzc2lvbklkPXJlcy5kYXRhLnNlc3Npb25JZFxuICAgICAgICAgIHRoaXMuZW5jcnlwdFZhbHVlPXJlcy5kYXRhLmVuY3J5cHRWYWx1ZVxuXHRcdFx0XHRcdC8v6I635Y+WdHJhaW5ycklkXG5cdFx0XHRcdFx0dGhpcy5nZXRUcmFpbmVlSWQoKVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdGdldFBsYW4oKXtcblx0XHRcdFx0cmVxdWVzdCh7XG5cdFx0XHRcdFx0dXJsOidzdHVkZW50L2Nsb2NrL0dldFBsYW4hZGV0YWlsLmFjdGlvbicsXG5cdFx0XHRcdFx0bWV0aG9kOlwiUE9TVFwiLFxuXHRcdFx0XHRcdGRhdGE6e3RyYWluZWVJZDp0aGlzLnRyYWluZWVJZH0sXG5cdFx0XHRcdFx0Y29va2llOidKU0VTU0lPTklEPScrdGhpcy5zZXNzaW9uSWQsXG4gICAgICAgICAgYWRkSGVhZGVyOntcbiAgICAgICAgICAgIGVuY3J5cHRWYWx1ZTp0aGlzLmVuY3J5cHRWYWx1ZSxcbiAgICAgICAgICAgIFJlZmVyZXI6J2h0dHBzOi8vc2VydmljZXdlY2hhdC5jb20vd3g5ZjFjMmUwYmJjMTA2NzNjLzQ1Ny9wYWdlLWZyYW1lLmh0bWwnXG4gICAgICAgICAgfVxuXHRcdFx0XHR9KS50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGxldCBkYXRhPXJlcy5kYXRhXG4gICAgICAgICAgdGhpcy5zaWduSW5pbWdVcmw9ZGF0YS5jbG9ja0luZm8uaW5JbWdVcmw/ZGF0YS5jbG9ja0luZm8uaW5JbWdVcmw6dGhpcy5zaWduSW5pbWdVcmxcbiAgICAgICAgICB0aGlzLnNpZ25PdXRpbWdVcmw9ZGF0YS5jbG9ja0luZm8ub3V0SW1nVXJsP2RhdGEuY2xvY2tJbmZvLm91dEltZ1VybDp0aGlzLnNpZ25PdXRpbWdVcmxcbiAgICAgICAgICBsZXQgaW5JbWdVcmw9ZGF0YS5jbG9ja0luZm8uaW5JbWdVcmxcblx0XHRcdFx0XHR0aGlzLnN0YXR1cz1yZXMuZGF0YS5jbG9ja0luZm8uc3RhdHVzXG5cdFx0XHRcdFx0aWYodGhpcy5zdGF0dXM9PTIpe1xuXHRcdFx0XHRcdFx0dGhpcy5zaWduSW5TdGF0dXM9J+acquetvidcblx0XHRcdFx0XHRcdHRoaXMuc2lnbk91dFN0YXR1cz0n5pyq562+J1xuXHRcdFx0XHRcdFx0dGhpcy5zaWduSW50aW1lPSfor7fnrb7liLAnXG5cdFx0XHRcdFx0XHR0aGlzLnNpZ25PdXR0aW1lPSfor7fnrb7liLAnXG5cdFx0XHRcdFx0XHR0aGlzLnNpZ25Mb2NhdGlvbj0n5pyq562+5Yiw77yM5peg5rOV6I635Y+WJ1xuXHRcdFx0XHRcdFx0dGhpcy5zaWduT3V0TG9jYXRpb249J+acquetvuWIsO+8jOaXoOazleiOt+WPlidcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHRoaXMuc2lnbkluU3RhdHVzPWRhdGEuY2xvY2tJbmZvLmluU3RhdHVzPT0xPyflpJbli6QnOifmraPluLgnXG5cdFx0XHRcdFx0XHR0aGlzLnNpZ25JbnRpbWU9ZGF0YS5jbG9ja0luZm8uaW5UaW1lKyflt7LmiZPljaEnXG5cdFx0XHRcdFx0XHR0aGlzLnNpZ25Mb2NhdGlvbj1kYXRhLmNsb2NrSW5mby5pbkFkZHJlc3Ncblx0XHRcdFx0XHRcdHRoaXMuc2lnbk91dHRpbWU9J+ivt+etvuWIsCdcblx0XHRcdFx0XHRcdHRoaXMuc2lnbk91dExvY2F0aW9uPSfmnKrnrb7liLDvvIzml6Dms5Xojrflj5YnXG5cdFx0XHRcdFx0XHRpZih0aGlzLnN0YXR1cz09MSl7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2lnbk91dFN0YXR1cz0n5pyq562+J1xuXHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2lnbk91dFN0YXR1cz1kYXRhLmNsb2NrSW5mby5vdXRTdGF0dXM9PTE/J+WkluWLpCc6J+ato+W4uCdcblx0XHRcdFx0XHRcdFx0dGhpcy5zaWduT3V0TG9jYXRpb249ZGF0YS5jbG9ja0luZm8ub3V0QWRkcmVzc1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNpZ25PdXR0aW1lPWRhdGEuY2xvY2tJbmZvLm91dFRpbWUrJ+W3suaJk+WNoSdcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5nZXRwbGFuSWQoKVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdGdldHBsYW5JZCgpe1xuXHRcdFx0XHRyZXF1ZXN0KHtcblx0XHRcdFx0XHR1cmw6J3N0dWRlbnQvY2xvY2svR2V0UGxhbiFnZXREZWZhdWx0LmFjdGlvbicsXG5cdFx0XHRcdFx0bWV0aG9kOidHRVQnLFxuXHRcdFx0XHRcdGRhdGE6e3N0YXR1czonSU5URVJSVVBURUQnfSxcblx0XHRcdFx0XHRjb29raWU6J0pTRVNTSU9OSUQ9Jyt0aGlzLnNlc3Npb25JZCxcbiAgICAgICAgICBhZGRIZWFkZXI6e1xuICAgICAgICAgICAgZW5jcnlwdFZhbHVlOnRoaXMuZW5jcnlwdFZhbHVlLFxuICAgICAgICAgICAgUmVmZXJlcjonaHR0cHM6Ly9zZXJ2aWNld2VjaGF0LmNvbS93eDlmMWMyZTBiYmMxMDY3M2MvNDU3L3BhZ2UtZnJhbWUuaHRtbCdcbiAgICAgICAgICB9XG5cdFx0XHRcdH0pLnRoZW4ocmVzPT57XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdFx0XHRcdHRoaXMucGxhbklkPXJlcy5kYXRhLmNsb2NrVm8ucGxhbklkXG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFsaXplZD1yZXMuZGF0YS5jbG9ja1ZvLnBsYW5OYW1lXG5cdFx0XHRcdFx0dGhpcy5zY2hvb2w9cmVzLmRhdGEuY2xvY2tWby5wcm9qZWN0TmFtZVxuXHRcdFx0XHRcdHRoaXMuZ2V0VG9uZ0ppKClcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRnZXRUb25nSmkoKXtcblx0XHRcdFx0cmVxdWVzdCh7XG5cdFx0XHRcdFx0dXJsOlwic3R1ZGVudC9jbG9jay9jbG9ja1N0YXRpc3RpYy5hY3Rpb25cIixcblx0XHRcdFx0XHRtZXRob2Q6J0dFVCcsXG5cdFx0XHRcdFx0ZGF0YTp7cGxhbklkOnRoaXMucGxhbklkfSxcblx0XHRcdFx0XHRjb29raWU6J0pTRVNTSU9OSUQ9Jyt0aGlzLnNlc3Npb25JZCxcbiAgICAgICAgICBhZGRIZWFkZXI6e1xuICAgICAgICAgICAgZW5jcnlwdFZhbHVlOnRoaXMuZW5jcnlwdFZhbHVlLFxuICAgICAgICAgICAgUmVmZXJlcjonaHR0cHM6Ly9zZXJ2aWNld2VjaGF0LmNvbS93eDlmMWMyZTBiYmMxMDY3M2MvNDU3L3BhZ2UtZnJhbWUuaHRtbCdcbiAgICAgICAgICB9XG5cdFx0XHRcdH0pLnRoZW4ocmVzPT57XG5cdFx0XHRcdFx0dGhpcy5uZWVkU2lnbj1yZXMuZGF0YS5uZWVkQ2xvY2tEYXlzXG5cdFx0XHRcdFx0dGhpcy5zaWduZWQ9cmVzLmRhdGEuY2xvY2tEYXlzXG5cdFx0XHRcdFx0dGhpcy5zaWduZnJlcXVlbmN5PXJlcy5kYXRhLmNsb2NrVGltZXNcblx0XHRcdFx0XHR0aGlzLm5vU2lnbj1yZXMuZGF0YS51bkNsb2NrRGF5c1xuXHRcdFx0XHRcdHRoaXMucmlnaHRTaWduPXJlcy5kYXRhLm5vcm1hbENsb2NrRGF5c1xuXHRcdFx0XHRcdHRoaXMuZXJyU2lnbj1yZXMuZGF0YS5hYm5vcm1hbENsb2NrRGF5c1xuICAgICAgICAgIHRoaXMuZ2V0UmFuaygpXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuICAgICAgZ2V0UmFuaygpe1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6J3N0dWRlbnQvY2xvY2svUHVuY2hJbiFyYW5raW5nTGlzdC5hY3Rpb24nLFxuICAgICAgICAgIG1ldGhvZDonUE9TVCcsXG4gICAgICAgICAgY29va2llOidKU0VTU0lPTklEPScrdGhpcy5zZXNzaW9uSWQsXG4gICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICB0cmFpbmVlSWQ6dGhpcy50cmFpbmVlSWQsXG4gICAgICAgICAgICBtb250aHM6bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKyctJysobmV3IERhdGUoKS5nZXRNb250aCgpKzEpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhZGRIZWFkZXI6e1xuICAgICAgICAgICAgZW5jcnlwdFZhbHVlOnRoaXMuZW5jcnlwdFZhbHVlLFxuICAgICAgICAgICAgUmVmZXJlcjonaHR0cHM6Ly9zZXJ2aWNld2VjaGF0LmNvbS93eDlmMWMyZTBiYmMxMDY3M2MvNDU3L3BhZ2UtZnJhbWUuaHRtbCdcbiAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocmVzPT57XG4gICAgICAgICAgdGhpcy5jbGFzc05hbWU9cmVzLmRhdGEuY2xhc3NOYW1lXG4gICAgICAgICAgbGV0IHNvcnRSYW5raW5nPXJlcy5kYXRhLnJhbmtpbmdMaXN0LnNvcnQoKGEsYik9PmEucmFua2luZy1iLnJhbmtpbmcpXG4gICAgICAgICAgc29ydFJhbmtpbmdbMF0ucmFua1VybD0nLi4vLi4vc3RhdGljL3JhbmtvbmUucG5nJ1xuICAgICAgICAgIHNvcnRSYW5raW5nWzFdLnJhbmtVcmw9Jy4uLy4uL3N0YXRpYy9yYW5rdHdvLnBuZydcbiAgICAgICAgICBzb3J0UmFua2luZ1syXS5yYW5rVXJsPScuLi8uLi9zdGF0aWMvcmFua3RocmVlLnBuZydcbiAgICAgICAgICB0aGlzLnJhbmtMaXN0PXNvcnRSYW5raW5nXG4gICAgICAgIH0pXG4gICAgICB9LFxuXHRcdFx0Z2V0VHJhaW5lZUlkKCl7XG5cdFx0XHRcdHJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDonc3R1ZGVudC9jbG9jay9HZXRQbGFuLmFjdGlvbicsXG5cdFx0XHRcdFx0bWV0aG9kOidQT1NUJyxcblx0XHRcdFx0XHRjb29raWU6J0pTRVNTSU9OSUQ9Jyt0aGlzLnNlc3Npb25JZCxcbiAgICAgICAgICBhZGRIZWFkZXI6e1xuICAgICAgICAgICAgZW5jcnlwdFZhbHVlOnRoaXMuZW5jcnlwdFZhbHVlLFxuICAgICAgICAgICAgUmVmZXJlcjonaHR0cHM6Ly9zZXJ2aWNld2VjaGF0LmNvbS93eDlmMWMyZTBiYmMxMDY3M2MvNDU3L3BhZ2UtZnJhbWUuaHRtbCdcbiAgICAgICAgICB9XG5cdFx0XHRcdH0pLnRoZW4ocmVzPT57XG5cdFx0XHRcdFx0dGhpcy50cmFpbmVlSWQ9cmVzLmRhdGFbMF0uZGF0ZUxpc3RbMF0udHJhaW5lZUlkXG5cdFx0XHRcdFx0dGhpcy5nZXRQbGFuKClcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 16 */
/*!*****************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/utils/request.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _require = __webpack_require__(/*! ./xyb.js */ 17),\n  getHeaders = _require.getHeaders;\nvar baseUrl = 'https://xcx.xybsyw.com/';\nvar _default = function _default(params) {\n  var url = params.url;\n  var method = params.method;\n  var data = params.data;\n  var cookie = params.cookie ? params.cookie : '';\n  __f__(\"log\", cookie, \" at utils/request.js:8\");\n  return new Promise(function (resolve, reject) {\n    uni.request({\n      url: baseUrl + url,\n      withCredentials: true,\n      method: method,\n      data: data,\n      header: _objectSpread(_objectSpread({}, getHeaders(url, data)), {}, {\n        'Content-Type': 'application/x-www-form-urlencoded',\n        Cookie: cookie\n      }, params.addHeader),\n      success: function success(response) {\n        resolve(response.data);\n      }\n    });\n  });\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 15)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZ2V0SGVhZGVycyIsImJhc2VVcmwiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiY29va2llIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1bmkiLCJyZXF1ZXN0Iiwid2l0aENyZWRlbnRpYWxzIiwiaGVhZGVyIiwiQ29va2llIiwiYWRkSGVhZGVyIiwic3VjY2VzcyIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsZUFBbUJBLG1CQUFPLENBQUMsa0JBQVUsQ0FBQztFQUEvQkMsVUFBVSxZQUFWQSxVQUFVO0FBQ2pCLElBQU1DLE9BQU8sR0FBQyx5QkFBeUI7QUFBQSxlQUN4QixrQkFBQ0MsTUFBTSxFQUFHO0VBQ3hCLElBQUlDLEdBQUcsR0FBQ0QsTUFBTSxDQUFDQyxHQUFHO0VBQ2xCLElBQUlDLE1BQU0sR0FBQ0YsTUFBTSxDQUFDRSxNQUFNO0VBQ3hCLElBQUlDLElBQUksR0FBQ0gsTUFBTSxDQUFDRyxJQUFJO0VBQ3BCLElBQUlDLE1BQU0sR0FBQ0osTUFBTSxDQUFDSSxNQUFNLEdBQUNKLE1BQU0sQ0FBQ0ksTUFBTSxHQUFDLEVBQUU7RUFDekMsYUFBWUEsTUFBTTtFQUNsQixPQUFPLElBQUlDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUNDLE1BQU0sRUFBRztJQUNwQ0MsR0FBRyxDQUFDQyxPQUFPLENBQUM7TUFDWFIsR0FBRyxFQUFDRixPQUFPLEdBQUNFLEdBQUc7TUFDZlMsZUFBZSxFQUFDLElBQUk7TUFDcEJSLE1BQU0sRUFBTkEsTUFBTTtNQUNOQyxJQUFJLEVBQUpBLElBQUk7TUFDSlEsTUFBTSxrQ0FDRmIsVUFBVSxDQUFDRyxHQUFHLEVBQUNFLElBQUksQ0FBQztRQUN2QixjQUFjLEVBQUMsbUNBQW1DO1FBQ2xEUyxNQUFNLEVBQUNSO01BQU0sR0FDVkosTUFBTSxDQUFDYSxTQUFTLENBQ25CO01BQ0RDLE9BQU8sRUFBQyxpQkFBQ0MsUUFBUSxFQUFHO1FBQ25CVCxPQUFPLENBQUNTLFFBQVEsQ0FBQ1osSUFBSSxDQUFDO01BQ3ZCO0lBQ0QsQ0FBQyxDQUFDO0VBQ0gsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2dldEhlYWRlcnN9PXJlcXVpcmUoJy4veHliLmpzJylcclxuY29uc3QgYmFzZVVybD0naHR0cHM6Ly94Y3gueHlic3l3LmNvbS8nXHJcbmV4cG9ydCBkZWZhdWx0IChwYXJhbXMpPT57XHJcblx0bGV0IHVybD1wYXJhbXMudXJsXHJcblx0bGV0IG1ldGhvZD1wYXJhbXMubWV0aG9kXHJcblx0bGV0IGRhdGE9cGFyYW1zLmRhdGFcclxuXHRsZXQgY29va2llPXBhcmFtcy5jb29raWU/cGFyYW1zLmNvb2tpZTonJ1xyXG5cdGNvbnNvbGUubG9nKGNvb2tpZSlcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG5cdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHR1cmw6YmFzZVVybCt1cmwsXHJcblx0XHRcdHdpdGhDcmVkZW50aWFsczp0cnVlLFxyXG5cdFx0XHRtZXRob2QsXHJcblx0XHRcdGRhdGEsXHJcblx0XHRcdGhlYWRlcjp7XHJcblx0XHRcdFx0Li4uZ2V0SGVhZGVycyh1cmwsZGF0YSksXHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcblx0XHRcdFx0Q29va2llOmNvb2tpZSxcclxuXHRcdFx0XHQuLi5wYXJhbXMuYWRkSGVhZGVyXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Y2Nlc3M6KHJlc3BvbnNlKT0+e1xyXG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UuZGF0YSlcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/utils/xyb.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var md5 = __webpack_require__(/*! blueimp-md5 */ 18);\nvar Q = new RegExp(\"[`~!@#$%^&*()+=|{}':;',\\\\[\\\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]\"),\n  W = function W(e) {\n    var t = [\"`\", \"~\", \"!\", \"@\", \"#\", \"$\", \"%\", \"^\", \"&\", \"*\", \"(\", \")\", \"+\", \"=\", \"|\", \"{\", \"}\", \"'\", \":\", \";\", \"'\", \",\", \"[\", \"]\", \".\", \"<\", \">\", \"/\", \"?\", \"~\", \"！\", \"@\", \"#\", \"￥\", \"%\", \"…\", \"…\", \"&\", \"*\", \"（\", \"）\", \"—\", \"—\", \"+\", \"|\", \"{\", \"}\", \"【\", \"】\", \"‘\", \"；\", \"：\", \"”\", \"“\", \"’\", \"。\", \"，\", \"、\", \"？\", '\"'],\n      n = [\"content\", \"deviceName\", \"keyWord\", \"blogBody\", \"blogTitle\", \"getType\", \"responsibilities\", \"street\", \"text\", \"reason\", \"searchvalue\", \"key\", \"answers\", \"leaveReason\", \"personRemark\", \"selfAppraisal\", \"imgUrl\", \"wxname\", \"deviceId\", \"avatarTempPath\", \"file\", \"file\", \"model\", \"brand\", \"system\", \"deviceId\", \"platform\", \"code\", \"openId\", \"unionid\", \"clockDeviceToken\", \"clockDevice\"];\n    for (var a in e) {\n      //!(过滤的字段 ||  特殊字符）不添加到字符串中\n      var o = e[a] + \"\";\n      o && o.split(\"\").some(function (e, o) {\n        if (t.indexOf(e) > -1) return -1 == n.indexOf(a) && n.push(a), !0;\n      });\n    }\n    return n;\n  },\n  V = function V() {\n    var e = [\"front/enterprise/loadEnterprise.action\", \"front/post/EnterprisePostLoad.action\", \"helpcenter/video/VideoPlayAuth.action\", \"login/teacher/sendMobileOrEmailCode.action\", \"login/student/sendMobileCode.action\"];\n    return e;\n  },\n  z = function z(e) {\n    //分割字符串\n    if (void 0 == e) return {};\n    for (var t = Object.keys(e).sort(), n = {}, a = 0; a < t.length; a++) {\n      n[t[a]] = e[t[a]];\n    }\n    return n;\n  },\n  F = function F(e, t) {\n    //生成(e.length - t)个随机排序的数字\n    var n,\n      a,\n      o = e.slice(0),\n      i = e.length,\n      r = i - t;\n    while (i-- > r) {\n      a = Math.floor((i + 1) * Math.random()), n = o[a], o[a] = o[i], o[i] = n;\n    }\n    return o.slice(r);\n  },\n  H = function H(e, t) {\n    var n = [\"5\", \"b\", \"f\", \"A\", \"J\", \"Q\", \"g\", \"a\", \"l\", \"p\", \"s\", \"q\", \"H\", \"4\", \"L\", \"Q\", \"g\", \"1\", \"6\", \"Q\", \"Z\", \"v\", \"w\", \"b\", \"c\", \"e\", \"2\", \"2\", \"m\", \"l\", \"E\", \"g\", \"G\", \"H\", \"I\", \"r\", \"o\", \"s\", \"d\", \"5\", \"7\", \"x\", \"t\", \"J\", \"S\", \"T\", \"F\", \"v\", \"w\", \"4\", \"8\", \"9\", \"0\", \"K\", \"E\", \"3\", \"4\", \"0\", \"m\", \"r\", \"i\", \"n\"],\n      a = [];\n    for (var u = 0; u < 62; u++) {\n      a.push(u + \"\");\n    }\n    var o = Math.round(new Date().getTime() / 1e3),\n      i = F(a, 20),\n      r = \"\";\n    i.forEach(function (e, t) {\n      r += n[e];\n    });\n    var s = z(e);\n    var c = \"\";\n    //!(过滤的字段 ||  特殊字符）不添加到字符串中  过滤 &nbsp;\n    // 过滤出参与加密的字段\n    for (var l in s) {\n      -1 != W(e).indexOf(l) || Q.test(s[l]) || null != s[l] && \"\" !== s[l] && '\"\"' !== s[l] && (c += s[l]);\n    }\n    return c += o, c += r, c = c.replace(/\\s+/g, \"\"), c = c.replace(/\\n+/g, \"\"), c = c.replace(/\\r+/g, \"\"), c = c.replace(/</g, \"\"), c = c.replace(/>/g, \"\"), c = c.replace(/&/g, \"\"), c = c.replace(/-/g, \"\"), c = c.replace(/\\uD83C[\\uDF00-\\uDFFF]|\\uD83D[\\uDC00-\\uDE4F]/g, \"\"), c = encodeURIComponent(c), c = md5(c), {\n      md5: c,\n      tstr: o,\n      iArrStr: i && i.length > 0 ? i.join(\"_\") : \"\"\n    };\n  },\n  Y = function Y(e, t) {\n    if (!e) return;\n    var n = [\"5\", \"b\", \"f\", \"A\", \"J\", \"Q\", \"g\", \"a\", \"l\", \"p\", \"s\", \"q\", \"H\", \"4\", \"L\", \"Q\", \"g\", \"1\", \"6\", \"Q\", \"Z\", \"v\", \"w\", \"b\", \"c\", \"e\", \"2\", \"2\", \"m\", \"l\", \"E\", \"g\", \"G\", \"H\", \"I\", \"r\", \"o\", \"s\", \"d\", \"5\", \"7\", \"x\", \"t\", \"J\", \"S\", \"T\", \"F\", \"v\", \"w\", \"4\", \"8\", \"9\", \"0\", \"K\", \"E\", \"3\", \"4\", \"0\", \"m\", \"r\", \"i\", \"n\"],\n      a = e.t,\n      o = e.s.split(\"_\"),\n      i = \"\";\n    o.forEach(function (e, t) {\n      i += n[e];\n    });\n    var r = \"\";\n    return r += a, r += i, r = r.replace(/\\s+/g, \"\"), r = r.replace(/\\n+/g, \"\"), r = r.replace(/\\r+/g, \"\"), r = r.replace(/</g, \"\"), r = r.replace(/>/g, \"\"), r = r.replace(/&/g, \"\"), r = r.replace(/-/g, \"\"), r = r.replace(/\\uD83C[\\uDF00-\\uDFFF]|\\uD83D[\\uDC00-\\uDE4F]/g, \"\"), r = encodeURIComponent(r), r = md5(r), r == e.m;\n  };\nvar t = {\n  Z: {\n    set: function set(e, t, n) {\n      var a = new Date();\n      a.setDate(a.getDate() + n), document.cookie = e + \"=\" + t + \";expires=\" + a;\n    },\n    get: function get(e) {\n      var t = document.cookie.replace(/\\s/g, \"\").split(\";\");\n      for (var n = 0; n < t.length; n++) {\n        var a = t[n].split(\"=\");\n        if (a[0] === e) return decodeURIComponent(a[1]);\n      }\n      return \"\";\n    },\n    remove: function remove(e) {\n      this.set(e, \"1\", -1);\n    },\n    getAll: function getAll() {\n      var e = document.cookie.split(\";\"),\n        t = {};\n      for (var n = 0; n < e.length; n++) {\n        var a = e[n].split(\"\");\n        t[a[0]] = unescape(a[1]);\n      }\n      return t;\n    },\n    clear: function clear() {\n      var e = document.cookie.match(/[^ =;]+(?=\\=)/g);\n      if (e) for (var _t = e.length; _t--;) {\n        document.cookie = e[_t] + \"=0;expires=\" + new Date(0).toUTCString();\n      }\n    }\n  }\n};\nvar Z = {\n  getTokenData: H,\n  checkToken: Y,\n  nocheckArrs: W,\n  checkUrl: V\n};\nvar getHeaders = function getHeaders(url, data) {\n  var headers = {\n    Host: \"xcx.xybsyw.com\",\n    Connection: \"keep-alive\",\n    \"User-agent\": \"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat\",\n    // referer: \"https://servicewechat.com/wx9f1c2e0bbc10673c/317/page-frame.html\",\n    \"Accept-Encoding\": \"gzip, deflate, br\",\n    \"Accept-Language\": \"zh-cn\",\n    \"content-type\": \"application/x-www-form-urlencoded\",\n    v: \"1.6.36\"\n    // xweb_xhr: 1,\n  };\n\n  var n = Z.nocheckArrs(data).join(\",\"),\n    a = Z.getTokenData(data, url);\n  Z.checkUrl();\n  headers.n = n, headers.m = a.md5, headers.t = a.tstr, headers.s = a.iArrStr;\n  return headers;\n};\nmodule.exports = {\n  getHeaders: getHeaders\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMveHliLmpzIl0sIm5hbWVzIjpbIm1kNSIsInJlcXVpcmUiLCJRIiwiUmVnRXhwIiwiVyIsImUiLCJ0IiwibiIsImEiLCJvIiwic3BsaXQiLCJzb21lIiwiaW5kZXhPZiIsInB1c2giLCJWIiwieiIsIk9iamVjdCIsImtleXMiLCJzb3J0IiwibGVuZ3RoIiwiRiIsInNsaWNlIiwiaSIsInIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJIIiwidSIsInJvdW5kIiwiRGF0ZSIsImdldFRpbWUiLCJmb3JFYWNoIiwicyIsImMiLCJsIiwidGVzdCIsInJlcGxhY2UiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0c3RyIiwiaUFyclN0ciIsImpvaW4iLCJZIiwibSIsIloiLCJzZXQiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImRvY3VtZW50IiwiY29va2llIiwiZ2V0IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVtb3ZlIiwiZ2V0QWxsIiwidW5lc2NhcGUiLCJjbGVhciIsIm1hdGNoIiwidG9VVENTdHJpbmciLCJnZXRUb2tlbkRhdGEiLCJjaGVja1Rva2VuIiwibm9jaGVja0FycnMiLCJjaGVja1VybCIsImdldEhlYWRlcnMiLCJ1cmwiLCJkYXRhIiwiaGVhZGVycyIsIkhvc3QiLCJDb25uZWN0aW9uIiwidiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxxQkFBYSxDQUFDO0FBQ2xDLElBQU1DLENBQUMsR0FBRyxJQUFJQyxNQUFNLENBQ2hCLG1FQUFtRSxDQUNwRTtFQUNEQyxDQUFDLEdBQUcsU0FBSkEsQ0FBQyxDQUFJQyxDQUFDLEVBQUs7SUFDVCxJQUFJQyxDQUFDLEdBQUcsQ0FDTixHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gs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QixPQUFPLEVBQUVsQixDQUFDLElBQUlBLENBQUMsQ0FBQ0gsTUFBTSxHQUFHLENBQUMsR0FBR0csQ0FBQyxDQUFDbUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHO0lBQzdDLENBQUM7RUFFTCxDQUFDO0VBQ0RDLENBQUMsR0FBRyxTQUFKQSxDQUFDLENBQUlyQyxDQUFDLEVBQUVDLENBQUMsRUFBSztJQUNaLElBQUksQ0FBQ0QsQ0FBQyxFQUFFO0lBQ1IsSUFBSUUsQ0FBQyxHQUFHLENBQ0osR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsQ0FDSjtNQUNEQyxDQUFDLEdBQUdILENBQUMsQ0FBQ0MsQ0FBQztNQUNQRyxDQUFDLEdBQUdKLENBQUMsQ0FB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QUNIO0VBQ0YsQ0FBQzs7RUFDRCxJQUFJN0QsQ0FBQyxHQUFHcUMsQ0FBQyxDQUFDZ0IsV0FBVyxDQUFDSSxJQUFJLENBQUMsQ0FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbkNqQyxDQUFDLEdBQUdvQyxDQUFDLENBQUNjLFlBQVksQ0FBQ00sSUFBSSxFQUFFRCxHQUFHLENBQUM7RUFDL0JuQixDQUFDLENBQUNpQixRQUFRLEVBQUU7RUFDWEksT0FBTyxDQUFDMUQsQ0FBQyxHQUFHQSxDQUFDLEVBQ1gwRCxPQUFPLENBQUN0QixDQUFDLEdBQUduQyxDQUFDLENBQUNSLEdBQUcsRUFDakJpRSxPQUFPLENBQUMzRCxDQUFDLEdBQUdFLENBQUMsQ0FBQytCLElBQUksRUFDbEIwQixPQUFPLENBQUNoQyxDQUFDLEdBQUd6QixDQUFDLENBQUNnQyxPQUFRO0VBQ3pCLE9BQU95QixPQUFPO0FBQ2hCLENBQUM7QUFFREksTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFBRVIsVUFBVSxFQUFWQTtBQUFXLENBQUMiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZDUgPSByZXF1aXJlKFwiYmx1ZWltcC1tZDVcIik7XG5jb25zdCBRID0gbmV3IFJlZ0V4cChcbiAgICBcIltgfiFAIyQlXiYqKCkrPXx7fSc6OycsXFxcXFtcXFxcXS48Pi8/fu+8gUAj77+lJeKApuKApiYq77yI77yJ4oCU4oCUK3x7feOAkOOAkeKAmO+8m++8muKAneKAnOKAmeOAgu+8jOOAge+8n11cIlxuICApLFxuICBXID0gKGUpID0+IHtcbiAgICBsZXQgdCA9IFtcbiAgICAgIFwiYFwiLFxuICAgICAgXCJ+XCIsXG4gICAgICBcIiFcIixcbiAgICAgIFwiQFwiLFxuICAgICAgXCIjXCIsXG4gICAgICBcIiRcIixcbiAgICAgIFwiJVwiLFxuICAgICAgXCJeXCIsXG4gICAgICBcIiZcIixcbiAgICAgIFwiKlwiLFxuICAgICAgXCIoXCIsXG4gICAgICBcIilcIixcbiAgICAgIFwiK1wiLFxuICAgICAgXCI9XCIsXG4gICAgICBcInxcIixcbiAgICAgIFwie1wiLFxuICAgICAgXCJ9XCIsXG4gICAgICBcIidcIixcbiAgICAgIFwiOlwiLFxuICAgICAgXCI7XCIsXG4gICAgICBcIidcIixcbiAgICAgIFwiLFwiLFxuICAgICAgXCJbXCIsXG4gICAgICBcIl1cIixcbiAgICAgIFwiLlwiLFxuICAgICAgXCI8XCIsXG4gICAgICBcIj5cIixcbiAgICAgIFwiL1wiLFxuICAgICAgXCI/XCIsXG4gICAgICBcIn5cIixcbiAgICAgIFwi77yBXCIsXG4gICAgICBcIkBcIixcbiAgICAgIFwiI1wiLFxuICAgICAgXCLvv6VcIixcbiAgICAgIFwiJVwiLFxuICAgICAgXCLigKZcIixcbiAgICAgIFwi4oCmXCIsXG4gICAgICBcIiZcIixcbiAgICAgIFwiKlwiLFxuICAgICAgXCLvvIhcIixcbiAgICAgIFwi77yJXCIsXG4gICAgICBcIuKAlFwiLFxuICAgICAgXCLigJRcIixcbiAgICAgIFwiK1wiLFxuICAgICAgXCJ8XCIsXG4gICAgICBcIntcIixcbiAgICAgIFwifVwiLFxuICAgICAgXCLjgJBcIixcbiAgICAgIFwi44CRXCIsXG4gICAgICBcIuKAmFwiLFxuICAgICAgXCLvvJtcIixcbiAgICAgIFwi77yaXCIsXG4gICAgICBcIuKAnVwiLFxuICAgICAgXCLigJxcIixcbiAgICAgIFwi4oCZXCIsXG4gICAgICBcIuOAglwiLFxuICAgICAgXCLvvIxcIixcbiAgICAgIFwi44CBXCIsXG4gICAgICBcIu+8n1wiLFxuICAgICAgJ1wiJyxcbiAgICBdLFxuICAgICAgbiA9IFtcbiAgICAgIFwiY29udGVudFwiLFxuICAgICAgXCJkZXZpY2VOYW1lXCIsXG4gICAgICBcImtleVdvcmRcIixcbiAgICAgIFwiYmxvZ0JvZHlcIixcbiAgICAgIFwiYmxvZ1RpdGxlXCIsXG4gICAgICBcImdldFR5cGVcIixcbiAgICAgIFwicmVzcG9uc2liaWxpdGllc1wiLFxuICAgICAgXCJzdHJlZXRcIixcbiAgICAgIFwidGV4dFwiLFxuICAgICAgXCJyZWFzb25cIixcbiAgICAgIFwic2VhcmNodmFsdWVcIixcbiAgICAgIFwia2V5XCIsXG4gICAgICBcImFuc3dlcnNcIixcbiAgICAgIFwibGVhdmVSZWFzb25cIixcbiAgICAgIFwicGVyc29uUmVtYXJrXCIsXG4gICAgICBcInNlbGZBcHByYWlzYWxcIixcbiAgICAgIFwiaW1nVXJsXCIsXG4gICAgICBcInd4bmFtZVwiLFxuICAgICAgXCJkZXZpY2VJZFwiLFxuICAgICAgXCJhdmF0YXJUZW1wUGF0aFwiLFxuICAgICAgXCJmaWxlXCIsXG4gICAgICBcImZpbGVcIixcbiAgICAgIFwibW9kZWxcIixcbiAgICAgIFwiYnJhbmRcIixcbiAgICAgIFwic3lzdGVtXCIsXG4gICAgICBcImRldmljZUlkXCIsXG4gICAgICBcInBsYXRmb3JtXCIsXG4gICAgICBcImNvZGVcIixcbiAgICAgIFwib3BlbklkXCIsXG4gICAgICBcInVuaW9uaWRcIixcbiAgICAgIFwiY2xvY2tEZXZpY2VUb2tlblwiLFxuICAgICAgXCJjbG9ja0RldmljZVwiLFxuICAgIF07XG4gICAgZm9yICh2YXIgYSBpbiBlKSB7XG4gICAgICAvLyEo6L+H5ruk55qE5a2X5q61IHx8ICDnibnmrorlrZfnrKbvvInkuI3mt7vliqDliLDlrZfnrKbkuLLkuK1cbiAgICAgIGxldCBvID0gZVthXSArIFwiXCI7XG4gICAgICBvICYmXG4gICAgICAgIG8uc3BsaXQoXCJcIikuc29tZSgoZSwgbykgPT4ge1xuICAgICAgICAgIGlmICh0LmluZGV4T2YoZSkgPiAtMSkgcmV0dXJuIC0xID09IG4uaW5kZXhPZihhKSAmJiBuLnB1c2goYSksICEwO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG47XG4gIH0sXG4gIFYgPSAoKSA9PiB7XG4gICAgbGV0IGUgPSBbXG4gICAgICBcImZyb250L2VudGVycHJpc2UvbG9hZEVudGVycHJpc2UuYWN0aW9uXCIsXG4gICAgICBcImZyb250L3Bvc3QvRW50ZXJwcmlzZVBvc3RMb2FkLmFjdGlvblwiLFxuICAgICAgXCJoZWxwY2VudGVyL3ZpZGVvL1ZpZGVvUGxheUF1dGguYWN0aW9uXCIsXG4gICAgICBcImxvZ2luL3RlYWNoZXIvc2VuZE1vYmlsZU9yRW1haWxDb2RlLmFjdGlvblwiLFxuICAgICAgXCJsb2dpbi9zdHVkZW50L3NlbmRNb2JpbGVDb2RlLmFjdGlvblwiLFxuICAgIF07XG4gICAgcmV0dXJuIGU7XG4gIH0sXG4gIHogPSAoZSkgPT4ge1xuICAgIC8v5YiG5Ymy5a2X56ym5LiyXG4gICAgaWYgKHZvaWQgMCA9PSBlKSByZXR1cm4ge307XG4gICAgZm9yICh2YXIgdCA9IE9iamVjdC5rZXlzKGUpLnNvcnQoKSwgbiA9IHt9LCBhID0gMDsgYSA8IHQubGVuZ3RoOyBhKyspXG4gICAgICBuW3RbYV1dID0gZVt0W2FdXTtcbiAgICByZXR1cm4gbjtcbiAgfSxcbiAgRiA9IChlLCB0KSA9PiB7XG4gICAgLy/nlJ/miJAoZS5sZW5ndGggLSB0KeS4qumaj+acuuaOkuW6j+eahOaVsOWtl1xuICAgIHZhciBuLFxuICAgICAgYSxcbiAgICAgIG8gPSBlLnNsaWNlKDApLFxuICAgICAgaSA9IGUubGVuZ3RoLFxuICAgICAgciA9IGkgLSB0O1xuICAgIHdoaWxlIChpLS0gPiByKVxuICAgICAgKGEgPSBNYXRoLmZsb29yKChpICsgMSkgKiBNYXRoLnJhbmRvbSgpKSksXG4gICAgICAgIChuID0gb1thXSksXG4gICAgICAgIChvW2FdID0gb1tpXSksXG4gICAgICAgIChvW2ldID0gbik7XG4gICAgcmV0dXJuIG8uc2xpY2Uocik7XG4gIH0sXG4gIEggPSAoZSwgdCkgPT4ge1xuICAgIGxldCBuID0gW1xuICAgICAgICBcIjVcIixcbiAgICAgICAgXCJiXCIsXG4gICAgICAgIFwiZlwiLFxuICAgICAgICBcIkFcIixcbiAgICAgICAgXCJKXCIsXG4gICAgICAgIFwiUVwiLFxuICAgICAgICBcImdcIixcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIFwibFwiLFxuICAgICAgICBcInBcIixcbiAgICAgICAgXCJzXCIsXG4gICAgICAgIFwicVwiLFxuICAgICAgICBcIkhcIixcbiAgICAgICAgXCI0XCIsXG4gICAgICAgIFwiTFwiLFxuICAgICAgICBcIlFcIixcbiAgICAgICAgXCJnXCIsXG4gICAgICAgIFwiMVwiLFxuICAgICAgICBcIjZcIixcbiAgICAgICAgXCJRXCIsXG4gICAgICAgIFwiWlwiLFxuICAgICAgICBcInZcIixcbiAgICAgICAgXCJ3XCIsXG4gICAgICAgIFwiYlwiLFxuICAgICAgICBcImNcIixcbiAgICAgICAgXCJlXCIsXG4gICAgICAgIFwiMlwiLFxuICAgICAgICBcIjJcIixcbiAgICAgICAgXCJtXCIsXG4gICAgICAgIFwibFwiLFxuICAgICAgICBcIkVcIixcbiAgICAgICAgXCJnXCIsXG4gICAgICAgIFwiR1wiLFxuICAgICAgICBcIkhcIixcbiAgICAgICAgXCJJXCIsXG4gICAgICAgIFwiclwiLFxuICAgICAgICBcIm9cIixcbiAgICAgICAgXCJzXCIsXG4gICAgICAgIFwiZFwiLFxuICAgICAgICBcIjVcIixcbiAgICAgICAgXCI3XCIsXG4gICAgICAgIFwieFwiLFxuICAgICAgICBcInRcIixcbiAgICAgICAgXCJKXCIsXG4gICAgICAgIFwiU1wiLFxuICAgICAgICBcIlRcIixcbiAgICAgICAgXCJGXCIsXG4gICAgICAgIFwidlwiLFxuICAgICAgICBcIndcIixcbiAgICAgICAgXCI0XCIsXG4gICAgICAgIFwiOFwiLFxuICAgICAgICBcIjlcIixcbiAgICAgICAgXCIwXCIsXG4gICAgICAgIFwiS1wiLFxuICAgICAgICBcIkVcIixcbiAgICAgICAgXCIzXCIsXG4gICAgICAgIFwiNFwiLFxuICAgICAgICBcIjBcIixcbiAgICAgICAgXCJtXCIsXG4gICAgICAgIFwiclwiLFxuICAgICAgICBcImlcIixcbiAgICAgICAgXCJuXCIsXG4gICAgICBdLFxuICAgICAgYSA9IFtdO1xuICAgIGZvciAobGV0IHUgPSAwOyB1IDwgNjI7IHUrKykgYS5wdXNoKHUgKyBcIlwiKTtcbiAgICBsZXQgbyA9IE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxZTMpLFxuICAgICAgaSA9IEYoYSwgMjApLFxuICAgICAgciA9IFwiXCI7XG4gICAgaS5mb3JFYWNoKChlLCB0KSA9PiB7XG4gICAgICByICs9IG5bZV07XG4gICAgfSk7XG4gICAgbGV0IHMgPSB6KGUpO1xuICAgIHZhciBjID0gXCJcIjtcbiAgICAvLyEo6L+H5ruk55qE5a2X5q61IHx8ICDnibnmrorlrZfnrKbvvInkuI3mt7vliqDliLDlrZfnrKbkuLLkuK0gIOi/h+a7pCAmbmJzcDtcbiAgICAvLyDov4fmu6Tlh7rlj4LkuI7liqDlr4bnmoTlrZfmrrVcbiAgICBmb3IgKHZhciBsIGluIHMpIHtcbiAgICAgIC0xICE9IFcoZSkuaW5kZXhPZihsKSB8fFxuICAgICAgICBRLnRlc3Qoc1tsXSkgfHxcbiAgICAgICAgKG51bGwgIT0gc1tsXSAmJiBcIlwiICE9PSBzW2xdICYmICdcIlwiJyAhPT0gc1tsXSAmJiAoYyArPSBzW2xdKSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAoYyArPSBvKSxcbiAgICAgIChjICs9IHIpLFxuICAgICAgKGMgPSBjLnJlcGxhY2UoL1xccysvZywgXCJcIikpLFxuICAgICAgKGMgPSBjLnJlcGxhY2UoL1xcbisvZywgXCJcIikpLFxuICAgICAgKGMgPSBjLnJlcGxhY2UoL1xccisvZywgXCJcIikpLFxuICAgICAgKGMgPSBjLnJlcGxhY2UoLzwvZywgXCJcIikpLFxuICAgICAgKGMgPSBjLnJlcGxhY2UoLz4vZywgXCJcIikpLFxuICAgICAgKGMgPSBjLnJlcGxhY2UoLyYvZywgXCJcIikpLFxuICAgICAgKGMgPSBjLnJlcGxhY2UoLy0vZywgXCJcIikpLFxuICAgICAgKGMgPSBjLnJlcGxhY2UoL1xcdUQ4M0NbXFx1REYwMC1cXHVERkZGXXxcXHVEODNEW1xcdURDMDAtXFx1REU0Rl0vZywgXCJcIikpLFxuICAgICAgKGMgPSBlbmNvZGVVUklDb21wb25lbnQoYykpLFxuICAgICAgKGMgPSBtZDUoYykpLFxuICAgICAge1xuICAgICAgICBtZDU6IGMsXG4gICAgICAgIHRzdHI6IG8sXG4gICAgICAgIGlBcnJTdHI6IGkgJiYgaS5sZW5ndGggPiAwID8gaS5qb2luKFwiX1wiKSA6IFwiXCIsXG4gICAgICB9XG4gICAgKTtcbiAgfSxcbiAgWSA9IChlLCB0KSA9PiB7XG4gICAgaWYgKCFlKSByZXR1cm47XG4gICAgbGV0IG4gPSBbXG4gICAgICAgIFwiNVwiLFxuICAgICAgICBcImJcIixcbiAgICAgICAgXCJmXCIsXG4gICAgICAgIFwiQVwiLFxuICAgICAgICBcIkpcIixcbiAgICAgICAgXCJRXCIsXG4gICAgICAgIFwiZ1wiLFxuICAgICAgICBcImFcIixcbiAgICAgICAgXCJsXCIsXG4gICAgICAgIFwicFwiLFxuICAgICAgICBcInNcIixcbiAgICAgICAgXCJxXCIsXG4gICAgICAgIFwiSFwiLFxuICAgICAgICBcIjRcIixcbiAgICAgICAgXCJMXCIsXG4gICAgICAgIFwiUVwiLFxuICAgICAgICBcImdcIixcbiAgICAgICAgXCIxXCIsXG4gICAgICAgIFwiNlwiLFxuICAgICAgICBcIlFcIixcbiAgICAgICAgXCJaXCIsXG4gICAgICAgIFwidlwiLFxuICAgICAgICBcIndcIixcbiAgICAgICAgXCJiXCIsXG4gICAgICAgIFwiY1wiLFxuICAgICAgICBcImVcIixcbiAgICAgICAgXCIyXCIsXG4gICAgICAgIFwiMlwiLFxuICAgICAgICBcIm1cIixcbiAgICAgICAgXCJsXCIsXG4gICAgICAgIFwiRVwiLFxuICAgICAgICBcImdcIixcbiAgICAgICAgXCJHXCIsXG4gICAgICAgIFwiSFwiLFxuICAgICAgICBcIklcIixcbiAgICAgICAgXCJyXCIsXG4gICAgICAgIFwib1wiLFxuICAgICAgICBcInNcIixcbiAgICAgICAgXCJkXCIsXG4gICAgICAgIFwiNVwiLFxuICAgICAgICBcIjdcIixcbiAgICAgICAgXCJ4XCIsXG4gICAgICAgIFwidFwiLFxuICAgICAgICBcIkpcIixcbiAgICAgICAgXCJTXCIsXG4gICAgICAgIFwiVFwiLFxuICAgICAgICBcIkZcIixcbiAgICAgICAgXCJ2XCIsXG4gICAgICAgIFwid1wiLFxuICAgICAgICBcIjRcIixcbiAgICAgICAgXCI4XCIsXG4gICAgICAgIFwiOVwiLFxuICAgICAgICBcIjBcIixcbiAgICAgICAgXCJLXCIsXG4gICAgICAgIFwiRVwiLFxuICAgICAgICBcIjNcIixcbiAgICAgICAgXCI0XCIsXG4gICAgICAgIFwiMFwiLFxuICAgICAgICBcIm1cIixcbiAgICAgICAgXCJyXCIsXG4gICAgICAgIFwiaVwiLFxuICAgICAgICBcIm5cIixcbiAgICAgIF0sXG4gICAgICBhID0gZS50LFxuICAgICAgbyA9IGUucy5zcGxpdChcIl9cIiksXG4gICAgICBpID0gXCJcIjtcbiAgICBvLmZvckVhY2goKGUsIHQpID0+IHtcbiAgICAgIGkgKz0gbltlXTtcbiAgICB9KTtcbiAgICB2YXIgciA9IFwiXCI7XG4gICAgcmV0dXJuIChcbiAgICAgIChyICs9IGEpLFxuICAgICAgKHIgKz0gaSksXG4gICAgICAociA9IHIucmVwbGFjZSgvXFxzKy9nLCBcIlwiKSksXG4gICAgICAociA9IHIucmVwbGFjZSgvXFxuKy9nLCBcIlwiKSksXG4gICAgICAociA9IHIucmVwbGFjZSgvXFxyKy9nLCBcIlwiKSksXG4gICAgICAociA9IHIucmVwbGFjZSgvPC9nLCBcIlwiKSksXG4gICAgICAociA9IHIucmVwbGFjZSgvPi9nLCBcIlwiKSksXG4gICAgICAociA9IHIucmVwbGFjZSgvJi9nLCBcIlwiKSksXG4gICAgICAociA9IHIucmVwbGFjZSgvLS9nLCBcIlwiKSksXG4gICAgICAociA9IHIucmVwbGFjZSgvXFx1RDgzQ1tcXHVERjAwLVxcdURGRkZdfFxcdUQ4M0RbXFx1REMwMC1cXHVERTRGXS9nLCBcIlwiKSksXG4gICAgICAociA9IGVuY29kZVVSSUNvbXBvbmVudChyKSksXG4gICAgICAociA9IG1kNShyKSksXG4gICAgICByID09IGUubVxuICAgICk7XG4gIH07XG5jb25zdCB0ID0ge1xuICBaOiB7XG4gICAgc2V0KGUsIHQsIG4pIHtcbiAgICAgIGNvbnN0IGEgPSBuZXcgRGF0ZSgpO1xuICAgICAgYS5zZXREYXRlKGEuZ2V0RGF0ZSgpICsgbiksXG4gICAgICAgIChkb2N1bWVudC5jb29raWUgPSBlICsgXCI9XCIgKyB0ICsgXCI7ZXhwaXJlcz1cIiArIGEpO1xuICAgIH0sXG4gICAgZ2V0KGUpIHtcbiAgICAgIGxldCB0ID0gZG9jdW1lbnQuY29va2llLnJlcGxhY2UoL1xccy9nLCBcIlwiKS5zcGxpdChcIjtcIik7XG4gICAgICBmb3IgKGxldCBuID0gMDsgbiA8IHQubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgbGV0IGEgPSB0W25dLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgaWYgKGFbMF0gPT09IGUpIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoYVsxXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9LFxuICAgIHJlbW92ZShlKSB7XG4gICAgICB0aGlzLnNldChlLCBcIjFcIiwgLTEpO1xuICAgIH0sXG4gICAgZ2V0QWxsKCkge1xuICAgICAgbGV0IGUgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpLFxuICAgICAgICB0ID0ge307XG4gICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgbGV0IGEgPSBlW25dLnNwbGl0KFwiXCIpO1xuICAgICAgICB0W2FbMF1dID0gdW5lc2NhcGUoYVsxXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdDtcbiAgICB9LFxuICAgIGNsZWFyKCkge1xuICAgICAgbGV0IGUgPSBkb2N1bWVudC5jb29raWUubWF0Y2goL1teID07XSsoPz1cXD0pL2cpO1xuICAgICAgaWYgKGUpXG4gICAgICAgIGZvciAobGV0IHQgPSBlLmxlbmd0aDsgdC0tOyApXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gZVt0XSArIFwiPTA7ZXhwaXJlcz1cIiArIG5ldyBEYXRlKDApLnRvVVRDU3RyaW5nKCk7XG4gICAgfSxcbiAgfSxcbn07XG5jb25zdCBaID0ge1xuICBnZXRUb2tlbkRhdGE6IEgsXG4gIGNoZWNrVG9rZW46IFksXG4gIG5vY2hlY2tBcnJzOiBXLFxuICBjaGVja1VybDogVixcbn07XG5cbmNvbnN0IGdldEhlYWRlcnMgPSBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XG4gIGxldCBoZWFkZXJzID0ge1xuICAgIEhvc3Q6IFwieGN4Lnh5YnN5dy5jb21cIixcbiAgICBDb25uZWN0aW9uOiBcImtlZXAtYWxpdmVcIixcbiAgICBcIlVzZXItYWdlbnRcIjpcbiAgICAgIFwiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgNi4xOyBXT1c2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzUzLjAuMjc4NS4xNDMgU2FmYXJpLzUzNy4zNiBNaWNyb01lc3Nlbmdlci83LjAuOS41MDEgTmV0VHlwZS9XSUZJIE1pbmlQcm9ncmFtRW52L1dpbmRvd3MgV2luZG93c1dlY2hhdFwiLFxuICAgIC8vIHJlZmVyZXI6IFwiaHR0cHM6Ly9zZXJ2aWNld2VjaGF0LmNvbS93eDlmMWMyZTBiYmMxMDY3M2MvMzE3L3BhZ2UtZnJhbWUuaHRtbFwiLFxuICAgIFwiQWNjZXB0LUVuY29kaW5nXCI6IFwiZ3ppcCwgZGVmbGF0ZSwgYnJcIixcbiAgICBcIkFjY2VwdC1MYW5ndWFnZVwiOiBcInpoLWNuXCIsXG4gICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICB2OiBcIjEuNi4zNlwiLFxuICAgIC8vIHh3ZWJfeGhyOiAxLFxuICB9O1xuICBsZXQgbiA9IFoubm9jaGVja0FycnMoZGF0YSkuam9pbihcIixcIiksXG4gICAgYSA9IFouZ2V0VG9rZW5EYXRhKGRhdGEsIHVybCk7XG4gIFouY2hlY2tVcmwoKTtcbiAgKGhlYWRlcnMubiA9IG4pLFxuICAgIChoZWFkZXJzLm0gPSBhLm1kNSksXG4gICAgKGhlYWRlcnMudCA9IGEudHN0ciksXG4gICAgKGhlYWRlcnMucyA9IGEuaUFyclN0cik7XG4gIHJldHVybiBoZWFkZXJzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IGdldEhlYWRlcnMgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!***********************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/node_modules/blueimp-md5/js/md5.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);
/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/* global define */

/* eslint-disable strict */

;
(function ($) {
  'use strict';

  /**
   * Add integers, wrapping at 2^32.
   * This uses 16-bit operations internally to work around bugs in interpreters.
   *
   * @param {number} x First integer
   * @param {number} y Second integer
   * @returns {number} Sum
   */
  function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
  }

  /**
   * Bitwise rotate a 32-bit number to the left.
   *
   * @param {number} num 32-bit number
   * @param {number} cnt Rotation count
   * @returns {number} Rotated number
   */
  function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }

  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} q q
   * @param {number} a a
   * @param {number} b b
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  /**
   * Calculate the MD5 of an array of little-endian words, and a bit length.
   *
   * @param {Array} x Array of little-endian words
   * @param {number} len Bit length
   * @returns {Array<number>} MD5 Array
   */
  function binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;
    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;
      a = md5ff(a, b, c, d, x[i], 7, -680876936);
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5gg(b, c, d, a, x[i], 20, -373897302);
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5hh(d, a, b, c, x[i], 11, -358537222);
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5ii(a, b, c, d, x[i], 6, -198630844);
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safeAdd(a, olda);
      b = safeAdd(b, oldb);
      c = safeAdd(c, oldc);
      d = safeAdd(d, oldd);
    }
    return [a, b, c, d];
  }

  /**
   * Convert an array of little-endian words to a string
   *
   * @param {Array<number>} input MD5 Array
   * @returns {string} MD5 string
   */
  function binl2rstr(input) {
    var i;
    var output = '';
    var length32 = input.length * 32;
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
    }
    return output;
  }

  /**
   * Convert a raw string to an array of little-endian words
   * Characters >255 have their high-byte silently ignored.
   *
   * @param {string} input Raw input string
   * @returns {Array<number>} Array of little-endian words
   */
  function rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }
    var length8 = input.length * 8;
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
    }
    return output;
  }

  /**
   * Calculate the MD5 of a raw string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */
  function rstrMD5(s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
  }

  /**
   * Calculates the HMAC-MD5 of a key and some data (raw strings)
   *
   * @param {string} key HMAC key
   * @param {string} data Raw input string
   * @returns {string} Raw MD5 string
   */
  function rstrHMACMD5(key, data) {
    var i;
    var bkey = rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8);
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
  }

  /**
   * Convert a raw string to a hex string
   *
   * @param {string} input Raw input string
   * @returns {string} Hex encoded string
   */
  function rstr2hex(input) {
    var hexTab = '0123456789abcdef';
    var output = '';
    var x;
    var i;
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
    }
    return output;
  }

  /**
   * Encode a string as UTF-8
   *
   * @param {string} input Input string
   * @returns {string} UTF8 string
   */
  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  }

  /**
   * Encodes input string as raw MD5 string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */
  function rawMD5(s) {
    return rstrMD5(str2rstrUTF8(s));
  }
  /**
   * Encodes input string as Hex encoded string
   *
   * @param {string} s Input string
   * @returns {string} Hex encoded string
   */
  function hexMD5(s) {
    return rstr2hex(rawMD5(s));
  }
  /**
   * Calculates the raw HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */
  function rawHMACMD5(k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
  }
  /**
   * Calculates the Hex encoded HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */
  function hexHMACMD5(k, d) {
    return rstr2hex(rawHMACMD5(k, d));
  }

  /**
   * Calculates MD5 value for a given string.
   * If a key is provided, calculates the HMAC-MD5 value.
   * Returns a Hex encoded string unless the raw argument is given.
   *
   * @param {string} string Input string
   * @param {string} [key] HMAC key
   * @param {boolean} [raw] Raw output switch
   * @returns {string} MD5 output
   */
  function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string);
      }
      return rawMD5(string);
    }
    if (!raw) {
      return hexHMACMD5(key, string);
    }
    return rawHMACMD5(key, string);
  }
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return md5;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this);

/***/ }),
/* 19 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 20 */
/*!************************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/pages/config/config.vue?mpType=page ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_vue_vue_type_template_id_1138f3d6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.vue?vue&type=template&id=1138f3d6&scoped=true&mpType=page */ 21);\n/* harmony import */ var _config_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.vue?vue&type=script&lang=js&mpType=page */ 27);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _config_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _config_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _config_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _config_vue_vue_type_template_id_1138f3d6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _config_vue_vue_type_template_id_1138f3d6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1138f3d6\",\n  null,\n  false,\n  _config_vue_vue_type_template_id_1138f3d6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/config/config.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEk7QUFDMUk7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQzBNO0FBQzFNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSx3R0FBTTtBQUNSLEVBQUUsaUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NvbmZpZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTEzOGYzZDYmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbmZpZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29uZmlnLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjQuMjkuMjAyNDA5MzAwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTEzOGYzZDZcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY29uZmlnL2NvbmZpZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/pages/config/config.vue?vue&type=template&id=1138f3d6&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_1138f3d6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./config.vue?vue&type=template&id=1138f3d6&scoped=true&mpType=page */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_1138f3d6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_1138f3d6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_1138f3d6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_1138f3d6_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/pages/config/config.vue?vue&type=template&id=1138f3d6&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "config"), attrs: { _i: 0 } },
    [
      _c("div", { staticClass: _vm._$s(1, "sc", "avatar"), attrs: { _i: 1 } }, [
        _c("image", {
          attrs: { src: _vm._$s(2, "a-src", _vm.imgUrl.defaultUrl), _i: 2 },
          on: { click: _vm.openImg, longpress: _vm.clearSignImg },
        }),
      ]),
      _c(
        "div",
        { staticClass: _vm._$s(3, "sc", "userInfo"), attrs: { _i: 3 } },
        [
          _c(
            "div",
            { staticClass: _vm._$s(4, "sc", "Info"), attrs: { _i: 4 } },
            [
              _c(
                "div",
                {
                  staticClass: _vm._$s(5, "sc", "avatarImg"),
                  attrs: { _i: 5 },
                },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(6, "a-src", __webpack_require__(/*! ../../static/id.png */ 23)),
                      _i: 6,
                    },
                  }),
                ]
              ),
              _c(
                "div",
                {
                  staticClass: _vm._$s(7, "sc", "avararInput"),
                  attrs: { _i: 7 },
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.openId,
                        expression: "openId",
                      },
                    ],
                    attrs: { _i: 8 },
                    domProps: { value: _vm._$s(8, "v-model", _vm.openId) },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.openId = $event.target.value
                      },
                    },
                  }),
                ]
              ),
            ]
          ),
          _c(
            "div",
            { staticClass: _vm._$s(9, "sc", "Info"), attrs: { _i: 9 } },
            [
              _c(
                "div",
                {
                  staticClass: _vm._$s(10, "sc", "avatarImg"),
                  attrs: { _i: 10 },
                },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(
                        11,
                        "a-src",
                        __webpack_require__(/*! ../../static/idlogin.png */ 24)
                      ),
                      _i: 11,
                    },
                  }),
                ]
              ),
              _c(
                "div",
                {
                  staticClass: _vm._$s(12, "sc", "avararInput"),
                  attrs: { _i: 12 },
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.unionId,
                        expression: "unionId",
                      },
                    ],
                    attrs: { _i: 13 },
                    domProps: { value: _vm._$s(13, "v-model", _vm.unionId) },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.unionId = $event.target.value
                      },
                    },
                  }),
                ]
              ),
            ]
          ),
          _c(
            "div",
            { staticClass: _vm._$s(14, "sc", "Info"), attrs: { _i: 14 } },
            [
              _c(
                "div",
                {
                  staticClass: _vm._$s(15, "sc", "avatarImg"),
                  attrs: { _i: 15 },
                },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(
                        16,
                        "a-src",
                        __webpack_require__(/*! ../../static/idlogin.png */ 24)
                      ),
                      _i: 16,
                    },
                  }),
                ]
              ),
              _c(
                "div",
                {
                  staticClass: _vm._$s(17, "sc", "avararInput"),
                  attrs: { _i: 17 },
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.username,
                        expression: "username",
                      },
                    ],
                    attrs: { _i: 18 },
                    domProps: { value: _vm._$s(18, "v-model", _vm.username) },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.username = $event.target.value
                      },
                    },
                  }),
                ]
              ),
            ]
          ),
          _c(
            "div",
            { staticClass: _vm._$s(19, "sc", "Info"), attrs: { _i: 19 } },
            [
              _c(
                "div",
                {
                  staticClass: _vm._$s(20, "sc", "avatarImg"),
                  attrs: { _i: 20 },
                },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(
                        21,
                        "a-src",
                        __webpack_require__(/*! ../../static/idlogin.png */ 24)
                      ),
                      _i: 21,
                    },
                  }),
                ]
              ),
              _c(
                "div",
                {
                  staticClass: _vm._$s(22, "sc", "avararInput"),
                  attrs: { _i: 22 },
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.password,
                        expression: "password",
                      },
                    ],
                    attrs: { _i: 23 },
                    domProps: { value: _vm._$s(23, "v-model", _vm.password) },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.password = $event.target.value
                      },
                    },
                  }),
                ]
              ),
            ]
          ),
          _c(
            "div",
            { staticClass: _vm._$s(24, "sc", "Info"), attrs: { _i: 24 } },
            [
              _c(
                "div",
                {
                  staticClass: _vm._$s(25, "sc", "avatarImg"),
                  attrs: { _i: 25 },
                },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(
                        26,
                        "a-src",
                        __webpack_require__(/*! ../../static/lat.png */ 25)
                      ),
                      _i: 26,
                    },
                  }),
                ]
              ),
              _c(
                "div",
                {
                  staticClass: _vm._$s(27, "sc", "avararInput"),
                  attrs: { _i: 27 },
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.lat,
                        expression: "lat",
                      },
                    ],
                    attrs: { _i: 28 },
                    domProps: { value: _vm._$s(28, "v-model", _vm.lat) },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.lat = $event.target.value
                      },
                    },
                  }),
                ]
              ),
            ]
          ),
          _c(
            "div",
            { staticClass: _vm._$s(29, "sc", "Info"), attrs: { _i: 29 } },
            [
              _c(
                "div",
                {
                  staticClass: _vm._$s(30, "sc", "avatarImg"),
                  attrs: { _i: 30 },
                },
                [
                  _c("image", {
                    attrs: {
                      src: _vm._$s(
                        31,
                        "a-src",
                        __webpack_require__(/*! ../../static/lng.png */ 26)
                      ),
                      _i: 31,
                    },
                  }),
                ]
              ),
              _c(
                "div",
                {
                  staticClass: _vm._$s(32, "sc", "avararInput"),
                  attrs: { _i: 32 },
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.lng,
                        expression: "lng",
                      },
                    ],
                    attrs: { _i: 33 },
                    domProps: { value: _vm._$s(33, "v-model", _vm.lng) },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.lng = $event.target.value
                      },
                    },
                  }),
                ]
              ),
            ]
          ),
        ]
      ),
      _c("div", { staticClass: _vm._$s(34, "sc", "sign"), attrs: { _i: 34 } }, [
        _c("div", {
          staticClass: _vm._$s(35, "sc", "sumit"),
          attrs: { _i: 35 },
          on: { click: _vm.sumitInfo },
        }),
      ]),
      _c("canvas", {
        ref: "mycanvas",
        style: _vm._$s(36, "s", {
          width: _vm.canvansWidth + "px",
          height: _vm.canvansHeight + "px",
        }),
        attrs: { _i: 36 },
      }),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!**************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/static/id.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/id.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixxQkFBdUIiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvaWQucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*******************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/static/idlogin.png ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/idlogin.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixxQkFBdUIiLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvaWRsb2dpbi5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!***************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/static/lat.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/lat.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixxQkFBdUIiLCJmaWxlIjoiMjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbGF0LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!***************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/static/lng.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/lng.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixxQkFBdUIiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbG5nLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!************************************************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/pages/config/config.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./config.vue?vue&type=script&lang=js&mpType=page */ 28);\n/* harmony import */ var _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlzQixDQUFnQix1dEJBQUcsRUFBQyIsImZpbGUiOiIyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC40LjI5LjIwMjQwOTMwMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjQuMjkuMjAyNDA5MzAwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguNC4yOS4yMDI0MDkzMDA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguNC4yOS4yMDI0MDkzMDA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbmZpZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjQuMjkuMjAyNDA5MzAwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguNC4yOS4yMDI0MDkzMDA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC40LjI5LjIwMjQwOTMwMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC40LjI5LjIwMjQwOTMwMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29uZmlnLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/pages/config/config.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));\nvar _request = _interopRequireDefault(__webpack_require__(/*! ../../utils/request.js */ 16));\nvar _blueimpMd = _interopRequireDefault(__webpack_require__(/*! blueimp-md5 */ 18));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      openId: '',\n      unionId: '',\n      lat: '',\n      lng: '',\n      sessionId: '',\n      traineeId: '',\n      phone: '',\n      adcode: '',\n      address: '',\n      status: '',\n      username: '',\n      password: '',\n      imgUrl: {\n        isChoose: 0,\n        defaultUrl: '../../static/avatar.png'\n      },\n      signImgStr: '',\n      encryptValue: '',\n      model: '',\n      week: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],\n      canvansWidth: 0,\n      canvansHeight: 0,\n      cache: ''\n    };\n  },\n  methods: {\n    sumitInfo: function sumitInfo() {\n      var _this = this;\n      if (this.week[new Date().getDay()] == '星期日' || this.week[new Date().getDay()] == '星期六') {\n        uni.showModal({\n          title: '提示',\n          content: '周六周日不用打卡',\n          success: function success(res) {\n            return;\n          }\n        });\n        return;\n      }\n      uni.showLoading({\n        title: '加载中'\n      });\n      uni.setStorageSync('user_data', {\n        openId: this.openId,\n        unionId: this.unionId,\n        lat: this.lat,\n        lng: this.lng,\n        username: this.username,\n        password: this.password\n      });\n      var md5 = __webpack_require__(/*! blueimp-md5 */ 18);\n      (0, _request.default)({\n        url: 'login/login.action',\n        method: 'POST',\n        data: {\n          username: this.username,\n          password: md5(this.password),\n          openId: this.openId,\n          unionId: this.unionId\n        },\n        addHeader: {\n          'referer': 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'\n        }\n      }).then(function (res) {\n        if (res.code != 200) {\n          uni.hideLoading();\n          uni.showModal({\n            title: '提示',\n            content: '登录出错，请检查登录信息是否正确',\n            success: function success(res) {\n              return;\n            }\n          });\n        } else {\n          _this.phone = res.data.phone;\n          _this.sessionId = res.data.sessionId;\n          _this.encryptValue = res.data.encryptValue;\n          uni.setStorageSync('JSESSIONID', _this.sessionId);\n          //获取trainrrId\n          _this.getTraineeId();\n        }\n      });\n    },\n    openImg: function openImg() {\n      var _this2 = this;\n      __f__(\"log\", '------------------------', \" at pages/config/config.vue:154\");\n      uni.chooseImage({\n        success: function success(res) {\n          __f__(\"log\", res, \" at pages/config/config.vue:157\");\n          uni.saveFile({\n            tempFilePath: res.tempFilePaths[0],\n            success: function success(saveImg) {\n              __f__(\"log\", saveImg, \" at pages/config/config.vue:161\");\n              _this2.cache = saveImg.savedFilePath;\n              _this2.imgUrl = {\n                isChoose: 1,\n                defaultUrl: saveImg.savedFilePath\n              };\n            }\n          });\n          _this2.imgUrl = {\n            isChoose: 1,\n            defaultUrl: res.tempFilePaths[0]\n          };\n          // this.commonPostPolicy()\n        }\n      });\n    },\n    clearSignImg: function clearSignImg() {\n      this.imgUrl = {\n        isChoose: 0,\n        defaultUrl: '../../static/avatar.png'\n      };\n    },\n    getAdcode: function getAdcode() {\n      var _this3 = this;\n      var locationParams = {\n        key: \"c222383ff12d31b556c3ad6145bb95f4\",\n        location: this.lng + ',' + this.lat,\n        extensions: \"all\",\n        s: \"rsx\",\n        platform: \"WXJS\",\n        appname: \"c222383ff12d31b556c3ad6145bb95f4\",\n        sdkversion: \"1.2.0\",\n        logversion: \"2.0\"\n      };\n      uni.request({\n        url: 'https://restapi.amap.com/v3/geocode/regeo',\n        method: 'GET',\n        data: locationParams,\n        header: {\n          Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'\n        }\n      }).then(function (res) {\n        __f__(\"log\", res, \" at pages/config/config.vue:202\");\n        _this3.address = res.data.regeocode.formatted_address;\n        _this3.adcode = res.data.regeocode.addressComponent.adcode;\n        uni.hideLoading();\n        if ((0, _typeof2.default)(_this3.address) == 'object') {\n          uni.showModal({\n            title: '打卡位置信息有误',\n            content: '是否自动获取学校打卡位置',\n            success: function success(res) {\n              if (res.confirm) {\n                uni.showLoading({\n                  title: '加载中'\n                });\n                _this3.getStatus('getLocation');\n              }\n            }\n          });\n        } else {\n          uni.showModal({\n            title: '确认打卡位置',\n            content: _this3.address,\n            success: function success(res) {\n              if (res.confirm) {\n                uni.showLoading({\n                  title: '加载中'\n                });\n                _this3.getStatus('normal');\n              }\n            }\n          });\n        }\n\n        // this.SIGN_IN()\n      });\n    },\n    getTraineeId: function getTraineeId() {\n      var _this4 = this;\n      (0, _request.default)({\n        url: 'student/clock/GetPlan.action',\n        method: 'POST',\n        cookie: 'JSESSIONID=' + this.sessionId,\n        addHeader: {\n          encryptValue: this.encryptValue,\n          Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'\n        }\n      }).then(function (res) {\n        _this4.traineeId = res.data[0].dateList[0].traineeId;\n        _this4.getAdcode();\n      });\n    },\n    getStatus: function getStatus(key) {\n      var _this5 = this;\n      (0, _request.default)({\n        url: 'student/clock/GetPlan!detail.action',\n        method: \"POST\",\n        data: {\n          traineeId: this.traineeId\n        },\n        cookie: 'JSESSIONID=' + this.sessionId,\n        addHeader: {\n          encryptValue: this.encryptValue,\n          Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'\n        }\n      }).then(function (res) {\n        if (key == 'getLocation') {\n          _this5.lat = res.data.postInfo.lat;\n          _this5.lng = res.data.postInfo.lng;\n          uni.setStorageSync('user_data', {\n            openId: _this5.openId,\n            unionId: _this5.unionId,\n            lat: _this5.lat,\n            lng: _this5.lng,\n            username: _this5.username,\n            password: _this5.password\n          });\n          _this5.getAdcode();\n        } else {\n          var status = res.data.clockInfo.status;\n          _this5.status = status;\n          __f__(\"log\", _this5.status, \" at pages/config/config.vue:279\");\n          if (_this5.imgUrl.isChoose) {\n            //获取信息\n            _this5.getUserInfo();\n            // this.commonPostPolicy()\n          } else {\n            if (_this5.status != 0) {\n              _this5.SIGN_IN('student/clock/PostNew.action', _this5.status);\n            } else {\n              _this5.SIGN_IN('student/clock/PostNew!updateClock.action', '1');\n            }\n          }\n        }\n      });\n    },\n    getUserInfo: function getUserInfo() {\n      var _this6 = this;\n      (0, _request.default)({\n        url: 'account/LoadAccountInfo.action',\n        method: 'POST',\n        cookie: 'JSESSIONID=' + this.sessionId,\n        addHeader: {\n          encryptValue: this.encryptValue,\n          Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'\n        }\n      }).then(function (res) {\n        var _res$data = res.data,\n          loginer = _res$data.loginer,\n          klass = _res$data.klass;\n        _this6.drawInfoImg(loginer, klass);\n      });\n    },\n    drawInfoImg: function drawInfoImg(loginer, klass) {\n      var _this7 = this;\n      uni.getImageInfo({\n        src: this.imgUrl.defaultUrl,\n        success: function success(e) {\n          __f__(\"log\", e, \" at pages/config/config.vue:313\");\n          _this7.canvansWidth = e.width / 2;\n          _this7.canvansHeight = e.height / 2;\n          var ctx = uni.createCanvasContext('firstCanvas', _this7);\n          setTimeout(function () {\n            ctx.fillRect(0, 0, _this7.canvansWidth, _this7.canvansHeight);\n            // //将图片src放到cancas内，宽高为图片大小\n            ctx.drawImage(e.path, 0, 0, _this7.canvansWidth, _this7.canvansHeight);\n            ctx.beginPath();\n            ctx.setFontSize(12);\n            ctx.setFillStyle('#fff');\n            var hour = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();\n            var minutes = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();\n            var month = new Date().getMonth() + 1 < 10 ? '0' + new Date().getMonth() + 1 : new Date().getMonth();\n            var today = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate();\n            var year = new Date().getFullYear();\n            var currentWeek = _this7.week[new Date().getDay()];\n            ctx.fillText(year + '.' + month + '.' + today, 90, 25, _this7.canvansWidth);\n            ctx.fillText(currentWeek, 144, 25, _this7.canvansWidth);\n            ctx.fillText(_this7.address, 30, 50);\n            ctx.fillText(\"\".concat(loginer, \" \").concat(klass), 30, 70);\n            ctx.setFontSize(18);\n            ctx.fillText(hour + ':' + minutes, 30, 25, _this7.canvansWidth);\n            __f__(\"log\", ctx, \" at pages/config/config.vue:336\");\n            ctx.draw(false, function () {\n              uni.canvasToTempFilePath({\n                //将画布中内容转成图片，即水印与图片合成\n                canvasId: 'firstCanvas',\n                success: function success(newImg) {\n                  _this7.imgUrl = {\n                    isChoose: 0,\n                    defaultUrl: newImg.tempFilePath\n                  };\n                  _this7.commonPostPolicy();\n                },\n                fail: function fail(dx) {\n                  __f__(\"log\", dx, \" at pages/config/config.vue:348\");\n                }\n              });\n            });\n          }, 1000);\n        },\n        fail: function fail(jjj) {\n          __f__(\"log\", _this7.imgUrl.defaultUrl, \" at pages/config/config.vue:355\");\n          __f__(\"log\", jjj, \" at pages/config/config.vue:356\");\n        }\n      });\n    },\n    commonPostPolicy: function commonPostPolicy() {\n      var _this8 = this;\n      __f__(\"log\", 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', \" at pages/config/config.vue:362\");\n      (0, _request.default)({\n        url: 'uploadfile/commonPostPolicy.action',\n        method: 'POST',\n        data: {\n          customerType: 'STUDENT',\n          uploadType: 'UPLOAD_STUDENT_CLOCK_IMGAGES',\n          publicRead: true\n        },\n        cookie: 'JSESSIONID=' + this.sessionId,\n        addHeader: {\n          encryptValue: this.encryptValue,\n          Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'\n        }\n      }).then(function (res) {\n        _this8.uplodFile(res.data);\n      });\n    },\n    uplodFile: function uplodFile(data) {\n      var _this9 = this;\n      __f__(\"log\", data, \" at pages/config/config.vue:381\");\n      __f__(\"log\", data.dir, \" at pages/config/config.vue:382\");\n      uni.uploadFile({\n        url: 'https://xyb001-new.oss-cn-hangzhou.aliyuncs.com/',\n        filePath: this.imgUrl.defaultUrl,\n        name: 'file',\n        formData: {\n          key: data.dir + '/' + new Date().getTime() + '.jpg',\n          policy: data.policy,\n          OSSAccessKeyId: data.accessid,\n          signature: data.signature,\n          success_action_status: '200',\n          customerType: 'STUDENT',\n          uploadType: 'UPLOAD_STUDENT_CLOCK_IMGAGES',\n          callback: data.callback\n        },\n        success: function success(res) {\n          __f__(\"log\", res, \" at pages/config/config.vue:398\");\n          _this9.signImgStr = JSON.parse(res.data).vo.key;\n          if (_this9.status != 0) {\n            _this9.SIGN_IN('student/clock/PostNew.action', _this9.status);\n          } else {\n            _this9.SIGN_IN('student/clock/PostNew!updateClock.action', '1');\n          }\n        }\n      });\n    },\n    SIGN_IN: function SIGN_IN(url, status) {\n      var _this10 = this;\n      var data = {\n        'traineeId': this.traineeId,\n        'adcode': this.adcode,\n        'lat': this.lat,\n        'lng': this.lng,\n        'address': this.address,\n        'deviceName': this.model,\n        'punchInStatus': '0',\n        'clockStatus': status,\n        'imgUrl': this.signImgStr,\n        'addressId': 'null'\n      };\n      (0, _request.default)({\n        url: url,\n        method: 'POST',\n        data: data,\n        cookie: 'JSESSIONID=' + this.sessionId,\n        addHeader: {\n          encryptValue: this.encryptValue,\n          Referer: 'https://servicewechat.com/wx9f1c2e0bbc10673c/457/page-frame.html'\n        }\n      }).then(function (res) {\n        __f__(\"log\", '---------------------------', \" at pages/config/config.vue:431\");\n        __f__(\"log\", res, \" at pages/config/config.vue:432\");\n        __f__(\"log\", '---------------------------', \" at pages/config/config.vue:433\");\n        uni.removeSavedFile({\n          filePath: _this10.cache,\n          success: function success(fileImg) {\n            __f__(\"log\", fileImg, '删除成功', \" at pages/config/config.vue:437\");\n          },\n          fail: function fail(rr) {\n            __f__(\"log\", rr, \" at pages/config/config.vue:440\");\n          }\n        });\n        __f__(\"log\", 'qwertyuiouytfdx--------------dfvgbthtgfdrgtgt---------------', \" at pages/config/config.vue:443\");\n        uni.hideLoading();\n        uni.showModal({\n          title: '提示',\n          content: '打卡成功',\n          success: function success(res) {\n            if (res.confirm) {\n              uni.switchTab({\n                url: '/pages/index/index'\n              });\n            }\n          }\n        });\n      });\n    }\n  },\n  onLoad: function onLoad() {\n    var _this11 = this;\n    uni.getSystemInfo({\n      success: function success(res) {\n        _this11.model = res.model;\n      }\n    });\n    var user_data = uni.getStorageSync('user_data');\n    if (user_data) {\n      this.openId = user_data.openId;\n      this.unionId = user_data.unionId;\n      this.lat = user_data.lat;\n      this.lng = user_data.lng;\n      this.username = user_data.username;\n      this.password = user_data.password;\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 15)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY29uZmlnL2NvbmZpZy52dWUiXSwibmFtZXMiOlsiZGF0YSIsIm9wZW5JZCIsInVuaW9uSWQiLCJsYXQiLCJsbmciLCJzZXNzaW9uSWQiLCJ0cmFpbmVlSWQiLCJwaG9uZSIsImFkY29kZSIsImFkZHJlc3MiLCJzdGF0dXMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaW1nVXJsIiwiaXNDaG9vc2UiLCJkZWZhdWx0VXJsIiwic2lnbkltZ1N0ciIsImVuY3J5cHRWYWx1ZSIsIm1vZGVsIiwid2VlayIsImNhbnZhbnNXaWR0aCIsImNhbnZhbnNIZWlnaHQiLCJjYWNoZSIsIm1ldGhvZHMiLCJzdW1pdEluZm8iLCJEYXRlIiwiZ2V0RGF5IiwidW5pIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3VjY2VzcyIsInJlcyIsInNob3dMb2FkaW5nIiwic2V0U3RvcmFnZVN5bmMiLCJtZDUiLCJyZXF1aXJlIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImFkZEhlYWRlciIsInRoZW4iLCJjb2RlIiwiaGlkZUxvYWRpbmciLCJnZXRUcmFpbmVlSWQiLCJvcGVuSW1nIiwiY2hvb3NlSW1hZ2UiLCJzYXZlRmlsZSIsInRlbXBGaWxlUGF0aCIsInRlbXBGaWxlUGF0aHMiLCJzYXZlSW1nIiwic2F2ZWRGaWxlUGF0aCIsImNsZWFyU2lnbkltZyIsImdldEFkY29kZSIsImxvY2F0aW9uUGFyYW1zIiwia2V5IiwibG9jYXRpb24iLCJleHRlbnNpb25zIiwicyIsInBsYXRmb3JtIiwiYXBwbmFtZSIsInNka3ZlcnNpb24iLCJsb2d2ZXJzaW9uIiwiaGVhZGVyIiwiUmVmZXJlciIsInJlZ2VvY29kZSIsImZvcm1hdHRlZF9hZGRyZXNzIiwiYWRkcmVzc0NvbXBvbmVudCIsImNvbmZpcm0iLCJnZXRTdGF0dXMiLCJjb29raWUiLCJkYXRlTGlzdCIsInBvc3RJbmZvIiwiY2xvY2tJbmZvIiwiZ2V0VXNlckluZm8iLCJTSUdOX0lOIiwibG9naW5lciIsImtsYXNzIiwiZHJhd0luZm9JbWciLCJnZXRJbWFnZUluZm8iLCJzcmMiLCJlIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJjcmVhdGVDYW52YXNDb250ZXh0Iiwic2V0VGltZW91dCIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIiwicGF0aCIsImJlZ2luUGF0aCIsInNldEZvbnRTaXplIiwic2V0RmlsbFN0eWxlIiwiaG91ciIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJtb250aCIsImdldE1vbnRoIiwidG9kYXkiLCJnZXREYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwiY3VycmVudFdlZWsiLCJmaWxsVGV4dCIsImRyYXciLCJjYW52YXNUb1RlbXBGaWxlUGF0aCIsImNhbnZhc0lkIiwibmV3SW1nIiwiY29tbW9uUG9zdFBvbGljeSIsImZhaWwiLCJkeCIsImpqaiIsImN1c3RvbWVyVHlwZSIsInVwbG9hZFR5cGUiLCJwdWJsaWNSZWFkIiwidXBsb2RGaWxlIiwiZGlyIiwidXBsb2FkRmlsZSIsImZpbGVQYXRoIiwibmFtZSIsImZvcm1EYXRhIiwiZ2V0VGltZSIsInBvbGljeSIsIk9TU0FjY2Vzc0tleUlkIiwiYWNjZXNzaWQiLCJzaWduYXR1cmUiLCJzdWNjZXNzX2FjdGlvbl9zdGF0dXMiLCJjYWxsYmFjayIsIkpTT04iLCJwYXJzZSIsInZvIiwicmVtb3ZlU2F2ZWRGaWxlIiwiZmlsZUltZyIsInJyIiwic3dpdGNoVGFiIiwib25Mb2FkIiwiZ2V0U3lzdGVtSW5mbyIsInVzZXJfZGF0YSIsImdldFN0b3JhZ2VTeW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQWtFQztBQUNBO0FBbkVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QVMsQ0FBQy9ILFFBQVE7TUFDbEMsSUFBSSxDQUFDQyxRQUFRLEdBQUc4SCxTQUFTLENBQUM5SCxRQUFRO0lBQ25DO0VBQ0Q7QUFDRCxDQUFDO0FBQUEsMkIiLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuXHRpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi4vLi4vdXRpbHMvcmVxdWVzdC5qc1wiXG5cdGltcG9ydCBtZDUgZnJvbSBcImJsdWVpbXAtbWQ1XCI7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0b3BlbklkOiAnJyxcblx0XHRcdFx0dW5pb25JZDogJycsXG5cdFx0XHRcdGxhdDogJycsXG5cdFx0XHRcdGxuZzogJycsXG5cdFx0XHRcdHNlc3Npb25JZDogJycsXG5cdFx0XHRcdHRyYWluZWVJZDogJycsXG5cdFx0XHRcdHBob25lOiAnJyxcblx0XHRcdFx0YWRjb2RlOiAnJyxcblx0XHRcdFx0YWRkcmVzczogJycsXG5cdFx0XHRcdHN0YXR1czogJycsXG5cdFx0XHRcdHVzZXJuYW1lOiAnJyxcblx0XHRcdFx0cGFzc3dvcmQ6ICcnLFxuXHRcdFx0XHRpbWdVcmw6IHtcblx0XHRcdFx0XHRpc0Nob29zZTogMCxcblx0XHRcdFx0XHRkZWZhdWx0VXJsOiAnLi4vLi4vc3RhdGljL2F2YXRhci5wbmcnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNpZ25JbWdTdHI6ICcnLFxuXHRcdFx0XHRlbmNyeXB0VmFsdWU6ICcnLFxuXHRcdFx0XHRtb2RlbDogJycsXG4gICAgICAgIHdlZWs6WyfmmJ/mnJ/ml6UnLCfmmJ/mnJ/kuIAnLCfmmJ/mnJ/kuownLCfmmJ/mnJ/kuIknLCfmmJ/mnJ/lm5snLCfmmJ/mnJ/kupQnLCfmmJ/mnJ/lha0nXSxcbiAgICAgICAgY2FudmFuc1dpZHRoOjAsXG4gICAgICAgIGNhbnZhbnNIZWlnaHQ6MCxcbiAgICAgICAgY2FjaGU6Jydcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHN1bWl0SW5mbygpIHtcbiAgICAgICAgaWYodGhpcy53ZWVrW25ldyBEYXRlKCkuZ2V0RGF5KCldPT0n5pif5pyf5pelJ3x8dGhpcy53ZWVrW25ldyBEYXRlKCkuZ2V0RGF5KCldPT0n5pif5pyf5YWtJyl7XG4gICAgICAgICAgdW5pLnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn5ZGo5YWt5ZGo5pel5LiN55So5omT5Y2hJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xuXHRcdFx0XHRcdHRpdGxlOiAn5Yqg6L295LitJ1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCd1c2VyX2RhdGEnLCB7XG5cdFx0XHRcdFx0b3BlbklkOiB0aGlzLm9wZW5JZCxcblx0XHRcdFx0XHR1bmlvbklkOiB0aGlzLnVuaW9uSWQsXG5cdFx0XHRcdFx0bGF0OiB0aGlzLmxhdCxcblx0XHRcdFx0XHRsbmc6IHRoaXMubG5nLFxuXHRcdFx0XHRcdHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxuXHRcdFx0XHRcdHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGNvbnN0IG1kNSA9IHJlcXVpcmUoXCJibHVlaW1wLW1kNVwiKTtcblx0XHRcdFx0cmVxdWVzdCh7XG5cdFx0XHRcdFx0dXJsOiAnbG9naW4vbG9naW4uYWN0aW9uJyxcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHR1c2VybmFtZTogdGhpcy51c2VybmFtZSxcblx0XHRcdFx0XHRcdHBhc3N3b3JkOiBtZDUodGhpcy5wYXNzd29yZCksXG5cdFx0XHRcdFx0XHRvcGVuSWQ6IHRoaXMub3BlbklkLFxuXHRcdFx0XHRcdFx0dW5pb25JZDogdGhpcy51bmlvbklkXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRhZGRIZWFkZXI6IHtcblx0XHRcdFx0XHRcdCdyZWZlcmVyJzogJ2h0dHBzOi8vc2VydmljZXdlY2hhdC5jb20vd3g5ZjFjMmUwYmJjMTA2NzNjLzQ1Ny9wYWdlLWZyYW1lLmh0bWwnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlICE9IDIwMCkge1xuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmj5DnpLonLFxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAn55m75b2V5Ye66ZSZ77yM6K+35qOA5p+l55m75b2V5L+h5oGv5piv5ZCm5q2j56GuJyxcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnBob25lID0gcmVzLmRhdGEucGhvbmVcblx0XHRcdFx0XHRcdHRoaXMuc2Vzc2lvbklkID0gcmVzLmRhdGEuc2Vzc2lvbklkXG5cdFx0XHRcdFx0XHR0aGlzLmVuY3J5cHRWYWx1ZSA9IHJlcy5kYXRhLmVuY3J5cHRWYWx1ZVxuICAgICAgICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKCdKU0VTU0lPTklEJywgdGhpcy5zZXNzaW9uSWQpXG5cdFx0XHRcdFx0XHQvL+iOt+WPlnRyYWlucnJJZFxuXHRcdFx0XHRcdFx0dGhpcy5nZXRUcmFpbmVlSWQoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRvcGVuSW1nKCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJylcblx0XHRcdFx0dW5pLmNob29zZUltYWdlKHtcblx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICB1bmkuc2F2ZUZpbGUoe1xuICAgICAgICAgICAgICB0ZW1wRmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGhzWzBdLFxuICAgICAgICAgICAgICBzdWNjZXNzOnNhdmVJbWc9PntcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzYXZlSW1nKVxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGU9c2F2ZUltZy5zYXZlZEZpbGVQYXRoXG4gICAgICAgICAgICAgICAgdGhpcy5pbWdVcmwgPSB7XG4gICAgICAgICAgICAgICAgICBpc0Nob29zZTogMSxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRVcmw6IHNhdmVJbWcuc2F2ZWRGaWxlUGF0aFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblx0XHRcdFx0XHRcdHRoaXMuaW1nVXJsID0ge1xuXHRcdFx0XHRcdFx0XHRpc0Nob29zZTogMSxcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdFVybDogcmVzLnRlbXBGaWxlUGF0aHNbMF1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIHRoaXMuY29tbW9uUG9zdFBvbGljeSgpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcbiAgICAgIGNsZWFyU2lnbkltZygpe1xuICAgICAgICB0aGlzLmltZ1VybCA9IHtcbiAgICAgICAgICBpc0Nob29zZTogMCxcbiAgICAgICAgICBkZWZhdWx0VXJsOiAnLi4vLi4vc3RhdGljL2F2YXRhci5wbmcnXG4gICAgICAgIH1cbiAgICAgIH0sXG5cdFx0XHRnZXRBZGNvZGUoKSB7XG5cdFx0XHRcdGxldCBsb2NhdGlvblBhcmFtcyA9IHtcblx0XHRcdFx0XHRrZXk6IFwiYzIyMjM4M2ZmMTJkMzFiNTU2YzNhZDYxNDViYjk1ZjRcIixcblx0XHRcdFx0XHRsb2NhdGlvbjogdGhpcy5sbmcgKyAnLCcgKyB0aGlzLmxhdCxcblx0XHRcdFx0XHRleHRlbnNpb25zOiBcImFsbFwiLFxuXHRcdFx0XHRcdHM6IFwicnN4XCIsXG5cdFx0XHRcdFx0cGxhdGZvcm06IFwiV1hKU1wiLFxuXHRcdFx0XHRcdGFwcG5hbWU6IFwiYzIyMjM4M2ZmMTJkMzFiNTU2YzNhZDYxNDViYjk1ZjRcIixcblx0XHRcdFx0XHRzZGt2ZXJzaW9uOiBcIjEuMi4wXCIsXG5cdFx0XHRcdFx0bG9ndmVyc2lvbjogXCIyLjBcIixcblx0XHRcdFx0fVxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0dXJsOiAnaHR0cHM6Ly9yZXN0YXBpLmFtYXAuY29tL3YzL2dlb2NvZGUvcmVnZW8nLFxuXHRcdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdFx0ZGF0YTogbG9jYXRpb25QYXJhbXMsXG5cdFx0XHRcdFx0aGVhZGVyOiB7XG5cdFx0XHRcdFx0XHRSZWZlcmVyOiAnaHR0cHM6Ly9zZXJ2aWNld2VjaGF0LmNvbS93eDlmMWMyZTBiYmMxMDY3M2MvNDU3L3BhZ2UtZnJhbWUuaHRtbCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHRcdFx0dGhpcy5hZGRyZXNzID0gcmVzLmRhdGEucmVnZW9jb2RlLmZvcm1hdHRlZF9hZGRyZXNzXG5cdFx0XHRcdFx0dGhpcy5hZGNvZGUgPSByZXMuZGF0YS5yZWdlb2NvZGUuYWRkcmVzc0NvbXBvbmVudC5hZGNvZGVcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHRoaXMuYWRkcmVzcyA9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5omT5Y2h5L2N572u5L+h5oGv5pyJ6K+vJyxcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+aYr+WQpuiHquWKqOiOt+WPluWtpuagoeaJk+WNoeS9jee9ricsXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5Yqg6L295LitJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmdldFN0YXR1cygnZ2V0TG9jYXRpb24nKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn56Gu6K6k5omT5Y2h5L2N572uJyxcblx0XHRcdFx0XHRcdFx0Y29udGVudDogdGhpcy5hZGRyZXNzLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+WKoOi9veS4rSdcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nZXRTdGF0dXMoJ25vcm1hbCcpXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIHRoaXMuU0lHTl9JTigpXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Z2V0VHJhaW5lZUlkKCkge1xuXHRcdFx0XHRyZXF1ZXN0KHtcblx0XHRcdFx0XHR1cmw6ICdzdHVkZW50L2Nsb2NrL0dldFBsYW4uYWN0aW9uJyxcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0XHRjb29raWU6ICdKU0VTU0lPTklEPScgKyB0aGlzLnNlc3Npb25JZCxcblx0XHRcdFx0XHRhZGRIZWFkZXI6IHtcblx0XHRcdFx0XHRcdGVuY3J5cHRWYWx1ZTogdGhpcy5lbmNyeXB0VmFsdWUsXG5cdFx0XHRcdFx0XHRSZWZlcmVyOiAnaHR0cHM6Ly9zZXJ2aWNld2VjaGF0LmNvbS93eDlmMWMyZTBiYmMxMDY3M2MvNDU3L3BhZ2UtZnJhbWUuaHRtbCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0XHR0aGlzLnRyYWluZWVJZCA9IHJlcy5kYXRhWzBdLmRhdGVMaXN0WzBdLnRyYWluZWVJZFxuXHRcdFx0XHRcdHRoaXMuZ2V0QWRjb2RlKClcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRnZXRTdGF0dXMoa2V5KSB7XG5cdFx0XHRcdHJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDogJ3N0dWRlbnQvY2xvY2svR2V0UGxhbiFkZXRhaWwuYWN0aW9uJyxcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHRyYWluZWVJZDogdGhpcy50cmFpbmVlSWRcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNvb2tpZTogJ0pTRVNTSU9OSUQ9JyArIHRoaXMuc2Vzc2lvbklkLFxuXHRcdFx0XHRcdGFkZEhlYWRlcjoge1xuXHRcdFx0XHRcdFx0ZW5jcnlwdFZhbHVlOiB0aGlzLmVuY3J5cHRWYWx1ZSxcblx0XHRcdFx0XHRcdFJlZmVyZXI6ICdodHRwczovL3NlcnZpY2V3ZWNoYXQuY29tL3d4OWYxYzJlMGJiYzEwNjczYy80NTcvcGFnZS1mcmFtZS5odG1sJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdGlmIChrZXkgPT0gJ2dldExvY2F0aW9uJykge1xuXHRcdFx0XHRcdFx0dGhpcy5sYXQgPSByZXMuZGF0YS5wb3N0SW5mby5sYXRcblx0XHRcdFx0XHRcdHRoaXMubG5nID0gcmVzLmRhdGEucG9zdEluZm8ubG5nXG5cdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3VzZXJfZGF0YScsIHtcblx0XHRcdFx0XHRcdFx0b3BlbklkOiB0aGlzLm9wZW5JZCxcblx0XHRcdFx0XHRcdFx0dW5pb25JZDogdGhpcy51bmlvbklkLFxuXHRcdFx0XHRcdFx0XHRsYXQ6IHRoaXMubGF0LFxuXHRcdFx0XHRcdFx0XHRsbmc6IHRoaXMubG5nLFxuXHRcdFx0XHRcdFx0XHR1c2VybmFtZTogdGhpcy51c2VybmFtZSxcblx0XHRcdFx0XHRcdFx0cGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR0aGlzLmdldEFkY29kZSgpXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxldCBzdGF0dXMgPSByZXMuZGF0YS5jbG9ja0luZm8uc3RhdHVzXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXR1cyA9IHN0YXR1c1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5zdGF0dXMpXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5pbWdVcmwuaXNDaG9vc2UpIHtcbiAgICAgICAgICAgICAgLy/ojrflj5bkv6Hmga9cbiAgICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpXG5cdFx0XHRcdFx0XHRcdC8vIHRoaXMuY29tbW9uUG9zdFBvbGljeSgpXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zdGF0dXMgIT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuU0lHTl9JTignc3R1ZGVudC9jbG9jay9Qb3N0TmV3LmFjdGlvbicsIHRoaXMuc3RhdHVzKVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuU0lHTl9JTignc3R1ZGVudC9jbG9jay9Qb3N0TmV3IXVwZGF0ZUNsb2NrLmFjdGlvbicsICcxJylcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcbiAgICAgIGdldFVzZXJJbmZvKCl7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2FjY291bnQvTG9hZEFjY291bnRJbmZvLmFjdGlvbicsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgY29va2llOiAnSlNFU1NJT05JRD0nICsgdGhpcy5zZXNzaW9uSWQsXG4gICAgICAgICAgYWRkSGVhZGVyOiB7XG4gICAgICAgICAgICBlbmNyeXB0VmFsdWU6IHRoaXMuZW5jcnlwdFZhbHVlLFxuICAgICAgICAgICAgUmVmZXJlcjogJ2h0dHBzOi8vc2VydmljZXdlY2hhdC5jb20vd3g5ZjFjMmUwYmJjMTA2NzNjLzQ1Ny9wYWdlLWZyYW1lLmh0bWwnXG4gICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHJlcz0+e1xuICAgICAgICAgIGxldCB7bG9naW5lcixrbGFzc309cmVzLmRhdGE7XG4gICAgICAgICAgdGhpcy5kcmF3SW5mb0ltZyhsb2dpbmVyLGtsYXNzKVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGRyYXdJbmZvSW1nKGxvZ2luZXIsa2xhc3Mpe1xuICAgICAgICB1bmkuZ2V0SW1hZ2VJbmZvKHtcbiAgICAgICAgICBzcmM6IHRoaXMuaW1nVXJsLmRlZmF1bHRVcmwsXG4gICAgICAgICAgc3VjY2VzczogKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICB0aGlzLmNhbnZhbnNXaWR0aD1lLndpZHRoLzJcbiAgICAgICAgICAgIHRoaXMuY2FudmFuc0hlaWdodD1lLmhlaWdodC8yXG4gICAgICAgICAgICBsZXQgY3R4ID0gdW5pLmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2ZpcnN0Q2FudmFzJywgdGhpcylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFuc1dpZHRoLHRoaXMuY2FudmFuc0hlaWdodCk7XG4gICAgICAgICAgICAgIC8vIC8v5bCG5Zu+54mHc3Jj5pS+5YiwY2FuY2Fz5YaF77yM5a696auY5Li65Zu+54mH5aSn5bCPXG4gICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZS5wYXRoLCAwLCAwLHRoaXMuY2FudmFuc1dpZHRoICwgdGhpcy5jYW52YW5zSGVpZ2h0KTtcbiAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgICAgICAgIGN0eC5zZXRGb250U2l6ZSgxMilcbiAgICAgICAgICAgICAgY3R4LnNldEZpbGxTdHlsZSgnI2ZmZicpO1xuICAgICAgICAgICAgICBsZXQgaG91cj1uZXcgRGF0ZSgpLmdldEhvdXJzKCk8MTA/JzAnK25ldyBEYXRlKCkuZ2V0SG91cnMoKTpuZXcgRGF0ZSgpLmdldEhvdXJzKClcbiAgICAgICAgICAgICAgbGV0IG1pbnV0ZXM9bmV3IERhdGUoKS5nZXRNaW51dGVzKCk8MTA/JzAnK25ldyBEYXRlKCkuZ2V0TWludXRlcygpOm5ldyBEYXRlKCkuZ2V0TWludXRlcygpXG4gICAgICAgICAgICAgIGxldCBtb250aD1uZXcgRGF0ZSgpLmdldE1vbnRoKCkrMTwxMD8nMCcrbmV3IERhdGUoKS5nZXRNb250aCgpKzE6bmV3IERhdGUoKS5nZXRNb250aCgpXG4gICAgICAgICAgICAgIGxldCB0b2RheT1uZXcgRGF0ZSgpLmdldERhdGUoKTwxMD8nMCcrbmV3IERhdGUoKS5nZXREYXRlKCk6bmV3IERhdGUoKS5nZXREYXRlKClcbiAgICAgICAgICAgICAgbGV0IHllYXI9bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gICAgICAgICAgICAgIGxldCBjdXJyZW50V2Vlaz10aGlzLndlZWtbbmV3IERhdGUoKS5nZXREYXkoKV1cbiAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHllYXIrJy4nK21vbnRoKycuJyt0b2RheSw5MCwyNSx0aGlzLmNhbnZhbnNXaWR0aCk7XG4gICAgICAgICAgICAgIGN0eC5maWxsVGV4dChjdXJyZW50V2VlaywxNDQsMjUsdGhpcy5jYW52YW5zV2lkdGgpO1xuICAgICAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5hZGRyZXNzLDMwLDUwKVxuICAgICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7bG9naW5lcn0gJHtrbGFzc31gLDMwLDcwKVxuICAgICAgICAgICAgICBjdHguc2V0Rm9udFNpemUoMTgpXG4gICAgICAgICAgICAgIGN0eC5maWxsVGV4dChob3VyKyc6JyttaW51dGVzLDMwLDI1LHRoaXMuY2FudmFuc1dpZHRoKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY3R4KVxuICAgICAgICAgICAgICBjdHguZHJhdyhmYWxzZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHVuaS5jYW52YXNUb1RlbXBGaWxlUGF0aCh7IC8v5bCG55S75biD5Lit5YaF5a656L2s5oiQ5Zu+54mH77yM5Y2z5rC05Y2w5LiO5Zu+54mH5ZCI5oiQXG4gICAgICAgICAgICAgICAgICBjYW52YXNJZDogJ2ZpcnN0Q2FudmFzJyxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChuZXdJbWcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWdVcmwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgaXNDaG9vc2U6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFVybDogbmV3SW1nLnRlbXBGaWxlUGF0aFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbW9uUG9zdFBvbGljeSgpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZmFpbDpkeD0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkeClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwxMDAwKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDpqamo9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW1nVXJsLmRlZmF1bHRVcmwpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqamopXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICB9LFxuXHRcdFx0Y29tbW9uUG9zdFBvbGljeSgpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3FxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcScpXG5cdFx0XHRcdHJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDogJ3VwbG9hZGZpbGUvY29tbW9uUG9zdFBvbGljeS5hY3Rpb24nLFxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdGN1c3RvbWVyVHlwZTogJ1NUVURFTlQnLFxuXHRcdFx0XHRcdFx0dXBsb2FkVHlwZTogJ1VQTE9BRF9TVFVERU5UX0NMT0NLX0lNR0FHRVMnLFxuXHRcdFx0XHRcdFx0cHVibGljUmVhZDogdHJ1ZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y29va2llOiAnSlNFU1NJT05JRD0nICsgdGhpcy5zZXNzaW9uSWQsXG5cdFx0XHRcdFx0YWRkSGVhZGVyOiB7XG5cdFx0XHRcdFx0XHRlbmNyeXB0VmFsdWU6IHRoaXMuZW5jcnlwdFZhbHVlLFxuXHRcdFx0XHRcdFx0UmVmZXJlcjogJ2h0dHBzOi8vc2VydmljZXdlY2hhdC5jb20vd3g5ZjFjMmUwYmJjMTA2NzNjLzQ1Ny9wYWdlLWZyYW1lLmh0bWwnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdFx0dGhpcy51cGxvZEZpbGUocmVzLmRhdGEpXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0dXBsb2RGaWxlKGRhdGEpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSlcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS5kaXIpXG5cdFx0XHRcdHVuaS51cGxvYWRGaWxlKHtcblx0XHRcdFx0XHR1cmw6ICdodHRwczovL3h5YjAwMS1uZXcub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbS8nLFxuXHRcdFx0XHRcdGZpbGVQYXRoOiB0aGlzLmltZ1VybC5kZWZhdWx0VXJsLFxuXHRcdFx0XHRcdG5hbWU6ICdmaWxlJyxcblx0XHRcdFx0XHRmb3JtRGF0YToge1xuXHRcdFx0XHRcdFx0a2V5OiBkYXRhLmRpciArICcvJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJy5qcGcnLFxuXHRcdFx0XHRcdFx0cG9saWN5OiBkYXRhLnBvbGljeSxcblx0XHRcdFx0XHRcdE9TU0FjY2Vzc0tleUlkOiBkYXRhLmFjY2Vzc2lkLFxuXHRcdFx0XHRcdFx0c2lnbmF0dXJlOiBkYXRhLnNpZ25hdHVyZSxcblx0XHRcdFx0XHRcdHN1Y2Nlc3NfYWN0aW9uX3N0YXR1czogJzIwMCcsXG5cdFx0XHRcdFx0XHRjdXN0b21lclR5cGU6ICdTVFVERU5UJyxcblx0XHRcdFx0XHRcdHVwbG9hZFR5cGU6ICdVUExPQURfU1RVREVOVF9DTE9DS19JTUdBR0VTJyxcblx0XHRcdFx0XHRcdGNhbGxiYWNrOiBkYXRhLmNhbGxiYWNrXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHRcdFx0XHR0aGlzLnNpZ25JbWdTdHIgPSBKU09OLnBhcnNlKHJlcy5kYXRhKS52by5rZXlcblx0XHRcdFx0XHRcdGlmICh0aGlzLnN0YXR1cyAhPSAwKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuU0lHTl9JTignc3R1ZGVudC9jbG9jay9Qb3N0TmV3LmFjdGlvbicsIHRoaXMuc3RhdHVzKVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5TSUdOX0lOKCdzdHVkZW50L2Nsb2NrL1Bvc3ROZXchdXBkYXRlQ2xvY2suYWN0aW9uJywgJzEnKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRTSUdOX0lOKHVybCwgc3RhdHVzKSB7XG5cdFx0XHRcdGxldCBkYXRhID0ge1xuXHRcdFx0XHRcdCd0cmFpbmVlSWQnOiB0aGlzLnRyYWluZWVJZCxcblx0XHRcdFx0XHQnYWRjb2RlJzogdGhpcy5hZGNvZGUsXG5cdFx0XHRcdFx0J2xhdCc6IHRoaXMubGF0LFxuXHRcdFx0XHRcdCdsbmcnOiB0aGlzLmxuZyxcblx0XHRcdFx0XHQnYWRkcmVzcyc6IHRoaXMuYWRkcmVzcyxcblx0XHRcdFx0XHQnZGV2aWNlTmFtZSc6IHRoaXMubW9kZWwsXG5cdFx0XHRcdFx0J3B1bmNoSW5TdGF0dXMnOiAnMCcsXG5cdFx0XHRcdFx0J2Nsb2NrU3RhdHVzJzogc3RhdHVzLFxuXHRcdFx0XHRcdCdpbWdVcmwnOiB0aGlzLnNpZ25JbWdTdHIsXG5cdFx0XHRcdFx0J2FkZHJlc3NJZCc6ICdudWxsJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybCxcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0XHRkYXRhLFxuXHRcdFx0XHRcdGNvb2tpZTogJ0pTRVNTSU9OSUQ9JyArIHRoaXMuc2Vzc2lvbklkLFxuXHRcdFx0XHRcdGFkZEhlYWRlcjoge1xuXHRcdFx0XHRcdFx0ZW5jcnlwdFZhbHVlOiB0aGlzLmVuY3J5cHRWYWx1ZSxcblx0XHRcdFx0XHRcdFJlZmVyZXI6ICdodHRwczovL3NlcnZpY2V3ZWNoYXQuY29tL3d4OWYxYzJlMGJiYzEwNjczYy80NTcvcGFnZS1mcmFtZS5odG1sJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJylcbiAgICAgICAgICB1bmkucmVtb3ZlU2F2ZWRGaWxlKHtcbiAgICAgICAgICAgIGZpbGVQYXRoOnRoaXMuY2FjaGUsXG4gICAgICAgICAgICBzdWNjZXNzOihmaWxlSW1nKT0+e1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlSW1nLCfliKDpmaTmiJDlip8nKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6cnI9PntcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocnIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmxvZygncXdlcnR5dWlvdXl0ZmR4LS0tLS0tLS0tLS0tLS1kZnZnYnRodGdmZHJndGd0LS0tLS0tLS0tLS0tLS0tJylcblx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcblx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0XHRcdHRpdGxlOiAn5o+Q56S6Jyxcblx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfmiZPljaHmiJDlip8nLFxuXHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcblx0XHRcdFx0XHRcdFx0XHR1bmkuc3dpdGNoVGFiKHtcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uTG9hZDogZnVuY3Rpb24oKSB7XG5cdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XG5cdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0XHR0aGlzLm1vZGVsID0gcmVzLm1vZGVsXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cblx0XHRcdGxldCB1c2VyX2RhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJfZGF0YScpXG5cdFx0XHRpZiAodXNlcl9kYXRhKSB7XG5cdFx0XHRcdHRoaXMub3BlbklkID0gdXNlcl9kYXRhLm9wZW5JZFxuXHRcdFx0XHR0aGlzLnVuaW9uSWQgPSB1c2VyX2RhdGEudW5pb25JZFxuXHRcdFx0XHR0aGlzLmxhdCA9IHVzZXJfZGF0YS5sYXRcblx0XHRcdFx0dGhpcy5sbmcgPSB1c2VyX2RhdGEubG5nXG5cdFx0XHRcdHRoaXMudXNlcm5hbWUgPSB1c2VyX2RhdGEudXNlcm5hbWVcblx0XHRcdFx0dGhpcy5wYXNzd29yZCA9IHVzZXJfZGF0YS5wYXNzd29yZFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!********************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/App.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 30);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDb007QUFDcE0sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC40LjI5LjIwMjQwOTMwMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*********************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../Downloads/HBuilderX.4.29.2024093009/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 31);\n/* harmony import */ var _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Downloads_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1xQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC40LjI5LjIwMjQwOTMwMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjQuMjkuMjAyNDA5MzAwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguNC4yOS4yMDI0MDkzMDA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguNC4yOS4yMDI0MDkzMDA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC40LjI5LjIwMjQwOTMwMDkvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjQuMjkuMjAyNDA5MzAwOS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguNC4yOS4yMDI0MDkzMDA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguNC4yOS4yMDI0MDkzMDA5L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 15)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 33 */
/*!*************************************************************************************!*\
  !*** C:/Users/ASUS/Documents/HBuilderProjects/xysautosign/uni.promisify.adaptor.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);\nuni.addInterceptor({\n  returnValue: function returnValue(res) {\n    if (!(!!res && (_typeof(res) === \"object\" || typeof res === \"function\") && typeof res.then === \"function\")) {\n      return res;\n    }\n    return new Promise(function (resolve, reject) {\n      res.then(function (res) {\n        if (!res) return resolve(res);\n        return res[0] ? reject(res[0]) : resolve(res[1]);\n      });\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pLnByb21pc2lmeS5hZGFwdG9yLmpzIl0sIm5hbWVzIjpbInVuaSIsImFkZEludGVyY2VwdG9yIiwicmV0dXJuVmFsdWUiLCJyZXMiLCJ0aGVuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7QUFBQUEsR0FBRyxDQUFDQyxjQUFjLENBQUM7RUFDakJDLFdBQVcsdUJBQUVDLEdBQUcsRUFBRTtJQUNoQixJQUFJLEVBQUUsQ0FBQyxDQUFDQSxHQUFHLEtBQUssUUFBT0EsR0FBRyxNQUFLLFFBQVEsSUFBSSxPQUFPQSxHQUFHLEtBQUssVUFBVSxDQUFDLElBQUksT0FBT0EsR0FBRyxDQUFDQyxJQUFJLEtBQUssVUFBVSxDQUFDLEVBQUU7TUFDeEcsT0FBT0QsR0FBRztJQUNaO0lBQ0EsT0FBTyxJQUFJRSxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7TUFDdENKLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNELEdBQUcsRUFBSztRQUNoQixJQUFJLENBQUNBLEdBQUcsRUFBRSxPQUFPRyxPQUFPLENBQUNILEdBQUcsQ0FBQztRQUM3QixPQUFPQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdJLE1BQU0sQ0FBQ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLE9BQU8sQ0FBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2xELENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDIiwiZmlsZSI6IjMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidW5pLmFkZEludGVyY2VwdG9yKHtcbiAgcmV0dXJuVmFsdWUgKHJlcykge1xuICAgIGlmICghKCEhcmVzICYmICh0eXBlb2YgcmVzID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiByZXMgPT09IFwiZnVuY3Rpb25cIikgJiYgdHlwZW9mIHJlcy50aGVuID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVzLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAoIXJlcykgcmV0dXJuIHJlc29sdmUocmVzKSBcbiAgICAgICAgcmV0dXJuIHJlc1swXSA/IHJlamVjdChyZXNbMF0pIDogcmVzb2x2ZShyZXNbMV0pXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ })
],[[0,"app-config"]]]);
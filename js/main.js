/******/ (function () {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/components/accordion/accordion.js":
      /*!***********************************************!*\
  !*** ./src/components/accordion/accordion.js ***!
  \***********************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _js_const_media__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../js/const/media */ "./src/js/const/media.js"
          );

        const accordionItems = document.querySelectorAll(".accordionItem");
        const accordionPanel = document.querySelectorAll(".accordionPanel");
        const accordionButtons = document.querySelectorAll(".accordionBtn");
        const faqAnswer = document.querySelector(".faqAnswer");
        const answerTitle = document.querySelector(".answerTitle");
        const answerDesc = document.querySelector(".answerDesc");
        function accordion(options) {
          let def = {
            closeAll: false,
          };
          let setting = extend(def, options);
          function extend() {
            for (let i = 1; i < arguments.length; i++) {
              for (let key in arguments[i]) {
                // eslint-disable-next-line no-prototype-builtins
                if (arguments[i].hasOwnProperty(key)) {
                  arguments[0][key] = arguments[i][key];
                }
              }
            }
            return arguments[0];
          }
          function toggleItems() {
            accordionButtons.forEach((item) => {
              item.addEventListener("click", () => {
                if (
                  _js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_XL
                    .matches
                ) {
                  if (!item.parentElement.classList.contains("is-show")) {
                    accordionItems.forEach((item) =>
                      item.classList.remove("is-show")
                    );
                    item.parentElement.classList.add("is-show");
                    const title =
                      item.parentElement.querySelector(
                        ".accordionTitle"
                      ).textContent;
                    const desc =
                      item.parentElement.querySelector(
                        ".accordionDesc"
                      ).innerHTML;

                    faqAnswer.style.opacity = "0";
                    setTimeout(() => {
                      answerTitle.textContent = title;
                      answerDesc.innerHTML = desc;
                      faqAnswer.style.opacity = "1";
                    }, 200);
                  }
                } else {
                  accordionItems.forEach((item) =>
                    item.classList.remove("is-show")
                  );
                  let panel = item.nextElementSibling;
                  if (panel.style.maxHeight) {
                    item.parentElement.classList.remove("is-active");
                    panel.style.maxHeight = null;
                  } else {
                    if (setting.closeAll) {
                      const accPanel = item
                        .closest(".accordion")
                        .querySelectorAll(".accordionPanel");
                      const accButton = item
                        .closest(".accordion")
                        .querySelectorAll(".accordionBtn");
                      accPanel.forEach((item) => (item.style.maxHeight = null));
                      accButton.forEach((item) =>
                        item.parentElement.classList.remove("is-active")
                      );
                    }
                    panel.style.maxHeight = `${panel.scrollHeight / 10}rem`;
                    item.parentElement.classList.add("is-active");
                  }
                }
              });
            });
          }
          toggleItems();
        }
        function breakpointChecker() {
          if (
            _js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_XL.matches
          ) {
            accordionItems.forEach((item) =>
              item.classList.remove("is-active")
            );
            accordionPanel.forEach((item) => item.removeAttribute("style"));
            const defaultItem = document.querySelector(
              ".accordion > *:first-child .accordionItem"
            );
            const defaultTitle = document.querySelector(
              ".accordion > *:first-child .accordionTitle"
            ).textContent;
            const defaultDesc = document.querySelector(
              ".accordion > *:first-child .accordionDesc"
            ).textContent;
            defaultItem.classList.add("is-show");
            answerTitle.textContent = defaultTitle;
            answerDesc.textContent = defaultDesc;
          } else {
            accordionItems.forEach((item) => item.classList.remove("is-show"));
          }
        }
        accordion({
          closeAll: true, // close all items if current element is open
        });

        breakpointChecker();
        _js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_XL.addEventListener(
          "change",
          breakpointChecker
        );

        /***/
      },

    /***/ "./src/components/footer/footer.js":
      /*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
      /***/ function () {
        const currentYear = document.querySelector("#currentYear");
        const getCurrentYear = new Date().getFullYear();
        currentYear.textContent = getCurrentYear;

        /***/
      },

    /***/ "./src/components/menu-btn/menu-btn.js":
      /*!*********************************************!*\
  !*** ./src/components/menu-btn/menu-btn.js ***!
  \*********************************************/
      /***/ function () {
        const menuButton = document.querySelector("#toggler");
        menuButton.addEventListener("click", () => {
          document.body.classList.toggle("menu-open");
        });

        /***/
      },

    /***/ "./src/components/menu/menu.js":
      /*!*************************************!*\
  !*** ./src/components/menu/menu.js ***!
  \*************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _js_const_media__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../js/const/media */ "./src/js/const/media.js"
          );

        // if element in Viewport
        function inViewport(elem) {
          const cssPadding = 150;
          const allElements = document.querySelectorAll(elem);
          const windowHeight =
            window.innerHeight - window.innerHeight / 2 - cssPadding;
          const elems = () => {
            allElements.forEach((item) => {
              let viewportOffset = item.getBoundingClientRect();
              let top = viewportOffset.top;
              if (top < windowHeight) {
                if (
                  !_js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M
                    .matches
                ) {
                  item.classList.add("is-active");
                  const sectionID = item.getAttribute("id");
                  const menuItems = document.querySelectorAll("[data-id]");
                  menuItems.forEach((el) => el.classList.remove("is-active"));
                  document
                    .querySelector(`[data-id="${sectionID}"]`)
                    .classList.add("is-active");
                }
              } else {
                item.classList.remove("is-active");
              }
            });
          };
          if (
            _js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.matches
          ) {
            window.removeEventListener("scroll", elems);
          } else {
            window.addEventListener("scroll", elems);
          }
        }

        // inViewport('.section');

        function breakpointChecker() {
          inViewport(".section");
          if (
            _js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.matches
          ) {
            const activeSections =
              document.querySelectorAll(".section.is-active");
            activeSections.forEach((item, index) => {
              if (index === activeSections.length - 1) {
                // console.log('item');
              } else {
                item.classList.remove("is-active");
              }
            });
          } else {
            document.querySelector(".section.is-active").scrollIntoView();
          }
        }
        breakpointChecker();
        _js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.addEventListener(
          "change",
          breakpointChecker
        );

        /***/
      },

    /***/ "./src/components/nav/nav.js":
      /*!***********************************!*\
  !*** ./src/components/nav/nav.js ***!
  \***********************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _js_const_media__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../js/const/media */ "./src/js/const/media.js"
          );

        const sections = document.querySelectorAll(".section");
        const btnSectionPrev = document.querySelector(".prevSection");
        const btnSectionNext = document.querySelector(".nextSection");
        const firstSection = document.querySelector(".section:first-of-type");
        const lastSection = document.querySelector(".section:last-of-type");
        const menuListItem = document.querySelectorAll("[data-section]");
        const firstMenuItem = document.querySelector('[data-section="1"]');
        const logo = document.querySelector("#logo");
        const step = document
          .querySelector(".menu > .menu__nav > .ul > .menu__item.is-active")
          .getAttribute("data-section");
        let sectionIndex = step !== null ? step : 1;
        function showButton() {
          if (firstSection.classList.contains("is-active")) {
            btnSectionPrev.classList.add("is-hide");
          } else {
            btnSectionPrev.classList.remove("is-hide");
          }
          if (lastSection.classList.contains("is-active")) {
            btnSectionNext.classList.add("is-disabled");
          } else {
            btnSectionNext.classList.remove("is-disabled");
          }
        }
        function checkLogo() {
          if (
            _js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.matches
          ) {
            if (firstSection.classList.contains("is-active")) {
              logo.classList.add("is-start");
            } else {
              logo.classList.remove("is-start");
            }
          }
        }
        function changeSection() {
          sections.forEach((item) => item.classList.remove("is-active"));
          sections[sectionIndex - 1].classList.add("is-active", "is-visited");
          checkLogo();
        }
        function activeMenuItem() {
          menuListItem.forEach((item) => item.classList.remove("is-active"));
          menuListItem[sectionIndex - 1].classList.add("is-active");
          changeSection();
        }
        function scrollToSections() {
          if (
            !_js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.matches
          ) {
            const needSection = document.querySelector("section.is-active");
            needSection.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
        menuListItem.forEach((item) => {
          item.addEventListener("click", () => {
            if (!item.classList.contains("is-active")) {
              const activeItem = item.getAttribute("data-section");
              sectionIndex = activeItem;
              activeMenuItem();
              showButton();
              if (document.body.classList.contains("menu-open")) {
                document.body.classList.remove("menu-open");
              }
              if (
                !_js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M
                  .matches
              ) {
                scrollToSections();
              }
            }
          });
        });
        document.addEventListener("keydown", function (event) {
          if (event.keyCode === 39 || event.key === "ArrowRight") {
            if (sectionIndex === 11) {
              return;
            } else {
              if (
                _js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.matches
              ) {
                if (sectionIndex === sections.length) {
                  sectionIndex = 1;
                } else {
                  sectionIndex++;
                }
                changeSection();
                activeMenuItem();
                showButton();
              } else {
                return false;
              }
            }
          }
        });
        document.addEventListener("keydown", function (event) {
          if (event.keyCode === 37 || event.key === "ArrowLeft") {
            if (sectionIndex == 1) {
              return;
            } else {
              if (
                _js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.matches
              ) {
                if (sectionIndex === 1) {
                  sectionIndex = sections.length;
                } else {
                  sectionIndex--;
                }
                changeSection();
                activeMenuItem();
                showButton();
              } else {
                return false;
              }
            }
          }
        });

        btnSectionPrev.addEventListener("click", () => {
          if (
            _js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.matches
          ) {
            if (sectionIndex === 1) {
              sectionIndex = sections.length;
              // console.log('sectionIndex', sectionIndex);
            } else {
              sectionIndex--;
              // console.log('sectionIndex--', sectionIndex);
            }
            changeSection();
            activeMenuItem();
            showButton();
          } else {
            return false;
          }
        });
        btnSectionNext.addEventListener("click", () => {
          if (
            _js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.matches
          ) {
            if (sectionIndex === sections.length) {
              sectionIndex = 1;
              // console.log('sectionIndex', sectionIndex);
            } else {
              sectionIndex++;
              // console.log('sectionIndex++', sectionIndex);
            }
            changeSection();
            activeMenuItem();
            showButton();
          } else {
            return false;
          }
        });
        function breakpointChecker() {
          showButton();
          checkLogo();
          logo.addEventListener("click", () => {
            if (
              _js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.matches
            ) {
              if (!firstMenuItem.classList.contains("is-active")) {
                sectionIndex = 1;
                activeMenuItem();
                showButton();
              }
            } else {
              if (window.pageYOffset > 0) {
                window.scroll({
                  top: 0,
                  behavior: "smooth",
                });
                if (document.body.classList.contains("menu-open")) {
                  document.body.classList.remove("menu-open");
                }
                sections.forEach((item) => item.classList.remove("is-active"));
                menuListItem.forEach((item) =>
                  item.classList.remove("is-active")
                );
                firstSection.classList.add("is-active");
                firstMenuItem.classList.add("is-active");
              }
            }
          });
        }
        breakpointChecker();
        _js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.addEventListener(
          "change",
          breakpointChecker
        );

        /***/
      },

    /***/ "./src/components/progress/progress.js":
      /*!*********************************************!*\
  !*** ./src/components/progress/progress.js ***!
  \*********************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ progressBar: function () {
            return /* binding */ progressBar;
          },
          /* harmony export */
        });
        /* harmony import */ var _js_const_media__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../js/const/media */ "./src/js/const/media.js"
          );

        function progressBar() {
          const progressBar = document.querySelector("#progress");
          if (progressBar) {
            const progressFill = progressBar.firstElementChild;
            const updateProgress = () => {
              const progress =
                window.pageYOffset /
                (document.body.scrollHeight - window.innerHeight);
              progressFill.style.width = `${progress * 100}%`;
            };
            if (
              !_js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.matches
            ) {
              updateProgress();
              window.addEventListener("scroll", updateProgress);
            } else {
              window.removeEventListener("scroll", updateProgress);
            }
          }
        }
        function breakpointChecker() {
          progressBar();
        }
        breakpointChecker();
        _js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.addEventListener(
          "change",
          breakpointChecker
        );

        /***/
      },

    /***/ "./src/js/const/media.js":
      /*!*******************************!*\
  !*** ./src/js/const/media.js ***!
  \*******************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ L: function () {
            return /* binding */ L;
          },
          /* harmony export */ M: function () {
            return /* binding */ M;
          },
          /* harmony export */ MIN_WIDTH_L: function () {
            return /* binding */ MIN_WIDTH_L;
          },
          /* harmony export */ MIN_WIDTH_M: function () {
            return /* binding */ MIN_WIDTH_M;
          },
          /* harmony export */ MIN_WIDTH_S: function () {
            return /* binding */ MIN_WIDTH_S;
          },
          /* harmony export */ MIN_WIDTH_XL: function () {
            return /* binding */ MIN_WIDTH_XL;
          },
          /* harmony export */ MIN_WIDTH_XS: function () {
            return /* binding */ MIN_WIDTH_XS;
          },
          /* harmony export */ MIN_WIDTH_XXL: function () {
            return /* binding */ MIN_WIDTH_XXL;
          },
          /* harmony export */ S: function () {
            return /* binding */ S;
          },
          /* harmony export */ XL: function () {
            return /* binding */ XL;
          },
          /* harmony export */ XS: function () {
            return /* binding */ XS;
          },
          /* harmony export */ XXL: function () {
            return /* binding */ XXL;
          },
          /* harmony export */
        });
        const style = getComputedStyle(document.body);
        const XS = style.getPropertyValue("--XS");
        const S = style.getPropertyValue("--S");
        const M = style.getPropertyValue("--M");
        const L = style.getPropertyValue("--L");
        const XL = style.getPropertyValue("--XL");
        const XXL = style.getPropertyValue("--XXL");
        const MIN_WIDTH_XS = window.matchMedia(`(min-width: ${XS}px)`);
        const MIN_WIDTH_S = window.matchMedia(`(min-width: ${S}px)`);
        const MIN_WIDTH_M = window.matchMedia(`(min-width: ${M}px)`);
        const MIN_WIDTH_L = window.matchMedia(`(min-width: ${L}px)`);
        const MIN_WIDTH_XL = window.matchMedia(`(min-width: ${XL}px)`);
        const MIN_WIDTH_XXL = window.matchMedia(`(min-width: ${XXL}px)`);

        /***/
      },

    /***/ "./src/sections/section3/workshop.js":
      /*!*******************************************!*\
  !*** ./src/sections/section3/workshop.js ***!
  \*******************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _js_const_media__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../js/const/media */ "./src/js/const/media.js"
          );
        /* harmony import */ var _components_progress_progress__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../components/progress/progress */ "./src/components/progress/progress.js"
          );

        const workshopBtnShow = document.querySelector("#workshopBtnShow");

        // if element in Viewport
        function inViewport(elem) {
          const indent = 150;
          const allElements = document.querySelectorAll(elem);
          const windowHeight =
            window.innerHeight -
            (!_js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.matches
              ? -100
              : indent);
          const container = document.querySelector("#workshop > .container");
          const elems = () => {
            allElements.forEach((item) => {
              let viewportOffset = item.getBoundingClientRect();
              let top = viewportOffset.top;
              if (top < windowHeight) {
                item.classList.add("in-viewport");
              } else {
                // item.classList.remove("is-active");
              }
            });
          };
          if (
            !_js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.matches
          ) {
            elems();
            window.addEventListener("scroll", elems);
            workshopBtnShow.addEventListener(
              "click",
              function () {
                elems();
              },
              {
                once: true,
              }
            );
          } else {
            container.addEventListener("scroll", elems);
          }
        }
        function breakpointChecker() {
          if (
            !_js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.matches
          ) {
            const workshopBtnHide = document.querySelector("#workshopBtnHide");
            const workshopWrap = document.querySelector("#workshopWrap");
            const workshopItems = document.querySelectorAll(
              "#workshopWrap > *:not(:first-child)"
            );
            if (window.innerHeight > 600) {
              workshopBtnShow.classList.add("is-hide");
            } else {
              workshopBtnShow.classList.remove("is-hide");
            }
            workshopItems.forEach((item) => {
              item.classList.add("is-hide");
            });
            workshopBtnShow.addEventListener("click", function () {
              this.classList.remove("is-hide");
              this.style.display = "none";
              workshopItems.forEach((item) => {
                if (item.classList.contains("is-hide")) {
                  item.classList.remove("is-hide");
                }
              });
              if (!workshopWrap.classList.contains("was-opened")) {
                // nextAll elements start
                const nextAll = (element) => {
                  const nextElements = [];
                  let nextElement = element;
                  while (nextElement.nextElementSibling) {
                    nextElements.push(nextElement.nextElementSibling);
                    nextElement = nextElement.nextElementSibling;
                  }
                  return nextElements;
                };
                nextAll(this).forEach((item) =>
                  item.classList.remove("in-viewport")
                );
                // nextAll elements end

                this.parentElement.nextElementSibling
                  .querySelectorAll("#workshopHide .in-viewport")
                  .forEach((item) => item.classList.remove("in-viewport"));
              }
              (0,
              _components_progress_progress__WEBPACK_IMPORTED_MODULE_1__.progressBar)();
            });
            workshopBtnHide.addEventListener("click", function (e) {
              e.preventDefault();
              workshopBtnShow.classList.add("is-hide");
              workshopBtnShow.style.display = "block";
              workshopItems.forEach((item) => {
                item.classList.add("is-hide");
              });
              workshopWrap.classList.add("was-opened");
              workshopWrap.scrollIntoView();
              (0,
              _components_progress_progress__WEBPACK_IMPORTED_MODULE_1__.progressBar)();
            });
            inViewport(".anim-scroll");
          } else {
            inViewport(".anim-scroll-container");
          }
        }
        breakpointChecker();
        _js_const_media__WEBPACK_IMPORTED_MODULE_0__.MIN_WIDTH_M.addEventListener(
          "change",
          breakpointChecker
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ !(function () {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function () {
              return module["default"];
            }
          : /******/ function () {
              return module;
            };
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ !(function () {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = function (exports, definition) {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ !(function () {
    /******/ __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ !(function () {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  !(function () {
    "use strict";
    /*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(
        /*! ../components/menu/menu */ "./src/components/menu/menu.js"
      );
    /* harmony import */ var _components_menu_btn_menu_btn__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(
        /*! ../components/menu-btn/menu-btn */ "./src/components/menu-btn/menu-btn.js"
      );
    /* harmony import */ var _components_menu_btn_menu_btn__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        _components_menu_btn_menu_btn__WEBPACK_IMPORTED_MODULE_1__
      );
    /* harmony import */ var _components_nav_nav__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(
        /*! ../components/nav/nav */ "./src/components/nav/nav.js"
      );
    /* harmony import */ var _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(
        /*! ../components/accordion/accordion */ "./src/components/accordion/accordion.js"
      );
    /* harmony import */ var _components_progress_progress__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(
        /*! ../components/progress/progress */ "./src/components/progress/progress.js"
      );
    /* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_5__ =
      __webpack_require__(
        /*! ../components/footer/footer */ "./src/components/footer/footer.js"
      );
    /* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_5___default =
      /*#__PURE__*/ __webpack_require__.n(
        _components_footer_footer__WEBPACK_IMPORTED_MODULE_5__
      );
    /* harmony import */ var _sections_section3_workshop__WEBPACK_IMPORTED_MODULE_6__ =
      __webpack_require__(
        /*! ../sections/section3/workshop */ "./src/sections/section3/workshop.js"
      );
    // import { MIN_WIDTH_M } from '../js/const/media';

    // components

    // section

    window.addEventListener("DOMContentLoaded", () => {
      document.body.classList.remove("is-visit");
    });
    function breakpointChecker() {
      const container = document.querySelectorAll(".section > .container");
      container.forEach((item) => {
        // console.log(item.offsetHeight);

        if (item.offsetHeight + 5 >= window.innerHeight) {
          item.parentElement.classList.add("is-scroll");
          document.body.classList.add("container-scroll");
        } else {
          item.parentElement.classList.remove("is-scroll");
          document.body.classList.remove("container-scroll");
        }
      });
    }
    breakpointChecker();
    window.addEventListener("resize", breakpointChecker);
  })();
  /******/
})();
//# sourceMappingURL=main.js.map

import {
  require_test
} from "/build/_shared/chunk-22VNYELM.js";
import {
  require_session
} from "/build/_shared/chunk-V22J52NZ.js";
import {
  Award,
  Clock,
  Users,
  motion
} from "/build/_shared/chunk-2BIIUQRO.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-LHG5PAY4.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-U5E2PCIK.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/tests._index.tsx
var import_node = __toESM(require_node(), 1);
var import_test = __toESM(require_test(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/tests._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/tests._index.tsx"
  );
  import.meta.hot.lastModified = "1747716749494.9998";
}
function TestsIndex() {
  _s();
  const {
    tests
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "bg-white shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Available Tests" }, void 0, false, {
        fileName: "app/routes/tests._index.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", className: "btn btn-outline", children: "Back to Dashboard" }, void 0, false, {
        fileName: "app/routes/tests._index.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tests._index.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/tests._index.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      duration: 0.5
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: tests.map((test, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.3,
        delay: index * 0.1
      }, className: "card hover:shadow-lg transition-all duration-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-2", children: test.title }, void 0, false, {
          fileName: "app/routes/tests._index.tsx",
          lineNumber: 72,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4", children: test.description }, void 0, false, {
          fileName: "app/routes/tests._index.tsx",
          lineNumber: 73,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-sm text-gray-500 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-4 w-4 mr-1" }, void 0, false, {
            fileName: "app/routes/tests._index.tsx",
            lineNumber: 76,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-4", children: [
            test.estimatedTime,
            " mins"
          ] }, void 0, true, {
            fileName: "app/routes/tests._index.tsx",
            lineNumber: 77,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-4 w-4 mr-1" }, void 0, false, {
            fileName: "app/routes/tests._index.tsx",
            lineNumber: 79,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            test.completions,
            " completed"
          ] }, void 0, true, {
            fileName: "app/routes/tests._index.tsx",
            lineNumber: 80,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tests._index.tsx",
          lineNumber: 75,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2 mb-4", children: test.tags.map((tag, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded", children: tag }, i, false, {
          fileName: "app/routes/tests._index.tsx",
          lineNumber: 84,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/routes/tests._index.tsx",
          lineNumber: 83,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Award, { className: "h-5 w-5 text-accent-500 mr-1" }, void 0, false, {
              fileName: "app/routes/tests._index.tsx",
              lineNumber: 91,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium", children: test.difficulty }, void 0, false, {
              fileName: "app/routes/tests._index.tsx",
              lineNumber: 92,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/tests._index.tsx",
            lineNumber: 90,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/tests/${test.id}`, className: "btn btn-primary", children: "Start Test" }, void 0, false, {
            fileName: "app/routes/tests._index.tsx",
            lineNumber: 97,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tests._index.tsx",
          lineNumber: 89,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tests._index.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this) }, test.id, false, {
        fileName: "app/routes/tests._index.tsx",
        lineNumber: 61,
        columnNumber: 41
      }, this)) }, void 0, false, {
        fileName: "app/routes/tests._index.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      tests.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No tests available yet" }, void 0, false, {
          fileName: "app/routes/tests._index.tsx",
          lineNumber: 106,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Check back soon for new assessments." }, void 0, false, {
          fileName: "app/routes/tests._index.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tests._index.tsx",
        lineNumber: 105,
        columnNumber: 34
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tests._index.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/tests._index.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tests._index.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(TestsIndex, "I/HcNgGXls8Ev8Zrk6sbDap+N98=", false, function() {
  return [useLoaderData];
});
_c = TestsIndex;
var _c;
$RefreshReg$(_c, "TestsIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TestsIndex as default
};
//# sourceMappingURL=/build/routes/tests._index-WCSG6JBF.js.map

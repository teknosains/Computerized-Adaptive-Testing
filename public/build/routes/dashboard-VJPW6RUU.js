import {
  require_test_session
} from "/build/_shared/chunk-POVMGWPA.js";
import {
  require_test
} from "/build/_shared/chunk-22VNYELM.js";
import {
  require_session
} from "/build/_shared/chunk-V22J52NZ.js";
import {
  Activity,
  Award,
  Book,
  Brain,
  Lightbulb,
  LineChart,
  PanelRight,
  User,
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

// app/routes/dashboard.tsx
var import_node = __toESM(require_node(), 1);
var import_test_session = __toESM(require_test_session(), 1);
var import_test = __toESM(require_test(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.tsx"
  );
  import.meta.hot.lastModified = "1747716749494.9998";
}
function Dashboard() {
  _s();
  const {
    user,
    stats,
    recentSessions,
    recommendedTests
  } = useLoaderData();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(date);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "hidden md:flex md:w-64 lg:w-72 flex-col fixed inset-y-0 bg-white shadow-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center h-16 border-b border-gray-200 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Brain, { className: "h-6 w-6 text-primary-500" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-semibold", children: "Adaptive IRT" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex-1 pt-4 pb-4 overflow-y-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3 px-3 py-3 rounded-lg bg-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-full bg-primary-100 p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "h-5 w-5 text-primary-500" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 89,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate", children: user.name || "User" }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 92,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 truncate", children: user.email }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 95,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 91,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 87,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1 px-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", className: "flex items-center px-3 py-2 text-sm font-medium text-primary-700 rounded-md bg-primary-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Activity, { className: "mr-3 h-5 w-5 text-primary-500" }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 104,
              columnNumber: 17
            }, this),
            "Dashboard"
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tests", className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Book, { className: "mr-3 h-5 w-5 text-gray-500" }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 109,
              columnNumber: 17
            }, this),
            "Available Tests"
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 108,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard/history", className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineChart, { className: "mr-3 h-5 w-5 text-gray-500" }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 114,
              columnNumber: 17
            }, this),
            "Test History"
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard/profile", className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "mr-3 h-5 w-5 text-gray-500" }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 119,
              columnNumber: 17
            }, this),
            "Profile"
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 118,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 px-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider", children: "Resources" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 space-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/help", className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lightbulb, { className: "mr-3 h-5 w-5 text-gray-500" }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 130,
              columnNumber: 19
            }, this),
            "Help & Support"
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 129,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 124,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 border-t border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
      }, className: "flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "mr-3 h-5 w-5 text-gray-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm7 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm2-1a1 1 0 011 1v4a1 1 0 11-2 0V7a1 1 0 011-1z", clipRule: "evenodd" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 142,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 141,
          columnNumber: 15
        }, this),
        "Sign Out"
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 138,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:hidden bg-white shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between h-16 px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Brain, { className: "h-6 w-6 text-primary-500" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 154,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-semibold", children: "Adaptive IRT" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 155,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 153,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 152,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "p-2 rounded-md text-gray-500 hover:text-primary-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PanelRight, { className: "h-6 w-6" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 160,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 159,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 151,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 150,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 md:ml-64 lg:ml-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.h1, { initial: {
          opacity: 0,
          y: -10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.3
        }, className: "text-2xl md:text-3xl font-bold text-gray-900", children: [
          "Welcome back, ",
          user.name || "User"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 169,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.p, { initial: {
          opacity: 0,
          y: -10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.3,
          delay: 0.1
        }, className: "mt-1 text-gray-500", children: "Here's an overview of your testing progress and recommendations." }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 168,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.3,
            delay: 0.2
          }, className: "card p-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 rounded-md bg-primary-100 p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Book, { className: "h-6 w-6 text-primary-500" }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 209,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 208,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Tests Completed" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 212,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-3xl font-semibold text-gray-900", children: stats.completedTests }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 213,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 211,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 207,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 197,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.3,
            delay: 0.3
          }, className: "card p-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 rounded-md bg-accent-100 p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Award, { className: "h-6 w-6 text-accent-500" }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 230,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 229,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Average Ability" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 233,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-3xl font-semibold text-gray-900", children: stats.averageAbility.toFixed(2) }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 234,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 232,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 228,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 218,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.3,
            delay: 0.4
          }, className: "card p-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 rounded-md bg-secondary-100 p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Activity, { className: "h-6 w-6 text-secondary-500" }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 251,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 250,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Questions Answered" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 254,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-3xl font-semibold text-gray-900", children: stats.totalQuestions }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 255,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 253,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 249,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 239,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 196,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.3,
            delay: 0.5
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-gray-900 mb-4", children: "Recent Activity" }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 273,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card overflow-hidden", children: recentSessions.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "divide-y divide-gray-200", children: recentSessions.map((session) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/tests/${session.testId}/results?sessionId=${session.id}`, className: "block hover:bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-primary-600 truncate", children: session.testTitle }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 280,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2 flex-shrink-0 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `px-2 py-1 text-xs rounded-full
                                      ${session.isComplete ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`, children: session.isComplete ? "Complete" : "In Progress" }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 284,
                  columnNumber: 37
                }, this) }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 283,
                  columnNumber: 35
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 279,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 flex justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "flex items-center text-sm text-gray-500", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Award, { className: "flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" }, void 0, false, {
                      fileName: "app/routes/dashboard.tsx",
                      lineNumber: 293,
                      columnNumber: 39
                    }, this),
                    "Ability: ",
                    session.currentAbility.toFixed(2)
                  ] }, void 0, true, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 292,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Activity, { className: "flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" }, void 0, false, {
                      fileName: "app/routes/dashboard.tsx",
                      lineNumber: 297,
                      columnNumber: 39
                    }, this),
                    "Questions: ",
                    session.answeredQuestions.length
                  ] }, void 0, true, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 296,
                    columnNumber: 37
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 291,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: formatDate(session.updatedAt) }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 301,
                  columnNumber: 35
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 290,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 278,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 277,
              columnNumber: 29
            }, this) }, session.id, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 276,
              columnNumber: 56
            }, this)) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 275,
              columnNumber: 50
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500", children: "You haven't taken any tests yet." }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 309,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tests", className: "btn btn-primary mt-4", children: "Start Your First Test" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 310,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 308,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 274,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 263,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.3,
            delay: 0.6
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-gray-900 mb-4", children: "Recommended Tests" }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 327,
              columnNumber: 19
            }, this),
            recommendedTests.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: recommendedTests.map((test) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card p-5 hover:shadow-md transition-shadow", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium mb-1", children: test.title }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 330,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 mb-3", children: test.description }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 331,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2 mb-4", children: test.tags.map((tag, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded", children: tag }, i, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 333,
                columnNumber: 56
              }, this)) }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 332,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-sm text-gray-500", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-4 w-4 mr-1" }, void 0, false, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 339,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                    "Est. ",
                    test.estimatedTime,
                    " mins"
                  ] }, void 0, true, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 340,
                    columnNumber: 31
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 338,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/tests/${test.id}`, className: "btn btn-primary", children: "Start Test" }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 342,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 337,
                columnNumber: 27
              }, this)
            ] }, test.id, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 329,
              columnNumber: 53
            }, this)) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 328,
              columnNumber: 50
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card p-6 text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500", children: "You've completed all available tests!" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 348,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tests", className: "btn btn-primary mt-4", children: "View All Tests" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 349,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 347,
              columnNumber: 30
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 317,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 262,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 194,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 167,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 166,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s(Dashboard, "ZMtd31leJsm1mkzZGKOWXQcNhdw=", false, function() {
  return [useLoaderData];
});
_c = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-VJPW6RUU.js.map

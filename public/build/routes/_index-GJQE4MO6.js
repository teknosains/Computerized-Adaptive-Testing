import {
  BarChart4,
  Brain,
  Target,
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

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1747716749494.9998";
}
var meta = () => {
  return [{
    title: "Adaptive IRT Test App"
  }, {
    name: "description",
    content: "An adaptive testing platform using Item Response Theory"
  }];
};
function Index() {
  _s();
  const {
    stats
  } = useLoaderData();
  const features = [{
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Brain, { className: "h-6 w-6 text-primary-500" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this),
    title: "Adaptive Intelligence",
    description: "Our tests adapt to your skill level in real-time, providing a personalized experience."
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Target, { className: "h-6 w-6 text-primary-500" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this),
    title: "Precise Assessment",
    description: "Item Response Theory ensures highly accurate measurement of abilities and knowledge."
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart4, { className: "h-6 w-6 text-primary-500" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 58,
      columnNumber: 11
    }, this),
    title: "Detailed Analytics",
    description: "Track progress and understand strengths and weaknesses with comprehensive reports."
  }, {
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-6 w-6 text-primary-500" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this),
    title: "For Educators & Students",
    description: "Create custom assessments or focus on your learning journey with adaptive technology."
  }];
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "bg-gradient-to-r from-primary-600 to-accent-500 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
      opacity: 0,
      y: -20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.5
    }, className: "max-w-3xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight mb-4", children: "Adaptive Testing Platform" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl md:text-2xl mb-8 opacity-90", children: "Leverage the power of Item Response Theory for precise, efficient, and personalized assessments." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tests", className: "btn btn-accent px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300", children: "Start Testing" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 107,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth/login", className: "btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300", children: "Login" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 91,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 90,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Revolutionize Testing with IRT" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 122,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl mx-auto text-lg text-gray-600", children: "Item Response Theory delivers more accurate results with fewer questions, adapting to each test-taker's ability level in real-time." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { variants: container, initial: "hidden", whileInView: "show", viewport: {
        once: true
      }, className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { variants: item, className: "card p-6 hover:shadow-lg transition-shadow duration-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-full bg-primary-50 p-3 inline-flex mb-4", children: feature.icon }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 133,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-2", children: feature.title }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 136,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: feature.description }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 137,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 132,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-gray-50 py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
        opacity: 0,
        scale: 0.9
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.3
      }, className: "card p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl md:text-4xl font-bold text-primary-500", children: stats.totalTests }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 158,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-1", children: "Tests Created" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 159,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 147,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
        opacity: 0,
        scale: 0.9
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.3,
        delay: 0.1
      }, className: "card p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl md:text-4xl font-bold text-primary-500", children: stats.totalQuestions }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 174,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-1", children: "Questions" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 175,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 162,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
        opacity: 0,
        scale: 0.9
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.3,
        delay: 0.2
      }, className: "card p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl md:text-4xl font-bold text-primary-500", children: stats.activeUsers }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 190,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-1", children: "Active Users" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 191,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
        opacity: 0,
        scale: 0.9
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.3,
        delay: 0.3
      }, className: "card p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-3xl md:text-4xl font-bold text-primary-500", children: stats.averageTime }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 206,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-1", children: "Avg. Test Time" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 207,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 194,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 146,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 145,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-accent-500 text-white py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold mb-4", children: "Ready to Transform Your Testing?" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl mx-auto text-lg mb-8 opacity-90", children: "Get started now with our adaptive testing platform and experience the power of Item Response Theory." }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 217,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth/register", className: "btn bg-white text-accent-600 hover:bg-gray-100 px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300", children: "Create Free Account" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 220,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 215,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 214,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "bg-gray-900 text-gray-400 py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white text-lg font-medium mb-4", children: "Adaptive IRT" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 231,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: "Modern testing platform using Item Response Theory to deliver precise, efficient, and personalized assessments." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 232,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 230,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white text-lg font-medium mb-4", children: "Platform" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 239,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tests", className: "hover:text-white transition", children: "Tests" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 241,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 241,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/features", className: "hover:text-white transition", children: "Features" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 242,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 242,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/pricing", className: "hover:text-white transition", children: "Pricing" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 243,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 243,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", className: "hover:text-white transition", children: "About" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 244,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 244,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 240,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 238,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white text-lg font-medium mb-4", children: "Resources" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 249,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/docs", className: "hover:text-white transition", children: "Documentation" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 251,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 251,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/api", className: "hover:text-white transition", children: "API" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 252,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 252,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/blog", className: "hover:text-white transition", children: "Blog" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 253,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 253,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/help", className: "hover:text-white transition", children: "Help Center" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 254,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 254,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 250,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 248,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white text-lg font-medium mb-4", children: "Legal" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 259,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/terms", className: "hover:text-white transition", children: "Terms of Service" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 261,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 261,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/privacy", className: "hover:text-white transition", children: "Privacy Policy" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 262,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 262,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/cookies", className: "hover:text-white transition", children: "Cookie Policy" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 263,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 263,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 260,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 258,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 229,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: "\xA9 2025 Adaptive IRT. All rights reserved." }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 269,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-6 mt-4 md:mt-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-gray-400 hover:text-white transition", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Twitter" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 272,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 274,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 273,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 271,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-gray-400 hover:text-white transition", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "GitHub" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 278,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", clipRule: "evenodd" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 280,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 279,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 277,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-gray-400 hover:text-white transition", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "LinkedIn" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 284,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", clipRule: "evenodd" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 286,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 285,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 283,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 270,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 268,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 228,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 227,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 87,
    columnNumber: 10
  }, this);
}
_s(Index, "glWwXbowokwNwpVNU8Yux2Z5J1U=", false, function() {
  return [useLoaderData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-GJQE4MO6.js.map

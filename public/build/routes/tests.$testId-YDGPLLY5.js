import {
  require_irt
} from "/build/_shared/chunk-3NOK24W4.js";
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
  AlertCircle,
  AnimatePresence,
  Clock,
  motion
} from "/build/_shared/chunk-2BIIUQRO.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  useLoaderData,
  useNavigate,
  useSubmit
} from "/build/_shared/chunk-LHG5PAY4.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-U5E2PCIK.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/tests.$testId.tsx
var import_react = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_test = __toESM(require_test(), 1);
var import_session = __toESM(require_session(), 1);
var import_irt = __toESM(require_irt(), 1);
var import_test_session = __toESM(require_test_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/tests.$testId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/tests.$testId.tsx"
  );
  import.meta.hot.lastModified = "1747716749494.9998";
}
function TestPage() {
  _s();
  const {
    test,
    session,
    currentQuestion
  } = useLoaderData();
  const [timeSpent, setTimeSpent] = (0, import_react.useState)(0);
  const [selectedAnswer, setSelectedAnswer] = (0, import_react.useState)(null);
  const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
  const navigate = useNavigate();
  const submit = useSubmit();
  (0, import_react.useEffect)(() => {
    const timer = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1e3);
    return () => clearInterval(timer);
  }, []);
  (0, import_react.useEffect)(() => {
    setSelectedAnswer(null);
    setTimeSpent(0);
  }, [currentQuestion?.id]);
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };
  const handleSubmitAnswer = () => {
    if (!selectedAnswer || isSubmitting)
      return;
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("sessionId", session.id);
    formData.append("questionId", currentQuestion.id);
    formData.append("answer", selectedAnswer);
    formData.append("timeSpent", timeSpent.toString());
    submit(formData, {
      method: "post"
    });
  };
  const questionProgress = Math.round(session.answeredQuestions.length / test.maxQuestions * 100);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "bg-white shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-gray-900", children: test.title }, void 0, false, {
        fileName: "app/routes/tests.$testId.tsx",
        lineNumber: 135,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-gray-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-5 w-5 mr-1" }, void 0, false, {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: formatTime(timeSpent) }, void 0, false, {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tests.$testId.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Activity, { className: "h-5 w-5 mr-1 text-primary-500" }, void 0, false, {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 144,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium", children: [
            "Question ",
            session.answeredQuestions.length + 1,
            " of approximately ",
            test.maxQuestions
          ] }, void 0, true, {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 145,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tests.$testId.tsx",
          lineNumber: 143,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
          if (confirm("Are you sure you want to exit this test? Your progress will be saved.")) {
            navigate("/tests");
          }
        }, className: "btn btn-outline py-1", children: "Exit" }, void 0, false, {
          fileName: "app/routes/tests.$testId.tsx",
          lineNumber: 150,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tests.$testId.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tests.$testId.tsx",
      lineNumber: 134,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/tests.$testId.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "progress-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "progress-bar-fill", style: {
      width: `${questionProgress}%`
    } }, void 0, false, {
      fileName: "app/routes/tests.$testId.tsx",
      lineNumber: 163,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/tests.$testId.tsx",
      lineNumber: 162,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/tests.$testId.tsx",
      lineNumber: 161,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-grow flex items-center justify-center p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -20
    }, transition: {
      duration: 0.3
    }, className: "card w-full max-w-3xl p-6 md:p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl md:text-2xl font-semibold mb-4", children: currentQuestion?.content }, void 0, false, {
          fileName: "app/routes/tests.$testId.tsx",
          lineNumber: 184,
          columnNumber: 15
        }, this),
        currentQuestion?.imageUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: currentQuestion.imageUrl, alt: "Question visual", className: "w-full rounded-lg" }, void 0, false, {
          fileName: "app/routes/tests.$testId.tsx",
          lineNumber: 189,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/tests.$testId.tsx",
          lineNumber: 188,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: currentQuestion?.options.map((option, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => setSelectedAnswer(option.id), className: `p-4 border rounded-lg cursor-pointer transition-all duration-200 ${selectedAnswer === option.id ? "border-primary-500 bg-primary-50" : "border-gray-200 hover:border-primary-300"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-5 w-5 mr-3 rounded-full flex items-center justify-center border ${selectedAnswer === option.id ? "bg-primary-500 border-primary-500" : "border-gray-300"}`, children: selectedAnswer === option.id && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-2 w-2 rounded-full bg-white" }, void 0, false, {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 196,
            columnNumber: 58
          }, this) }, void 0, false, {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 195,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: selectedAnswer === option.id ? "font-medium" : "", children: option.text }, void 0, false, {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 198,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tests.$testId.tsx",
          lineNumber: 194,
          columnNumber: 21
        }, this) }, index, false, {
          fileName: "app/routes/tests.$testId.tsx",
          lineNumber: 193,
          columnNumber: 66
        }, this)) }, void 0, false, {
          fileName: "app/routes/tests.$testId.tsx",
          lineNumber: 192,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tests.$testId.tsx",
        lineNumber: 183,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500 flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertCircle, { className: "h-4 w-4 mr-1" }, void 0, false, {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 208,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Select an answer to continue" }, void 0, false, {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 209,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tests.$testId.tsx",
          lineNumber: 207,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleSubmitAnswer, disabled: !selectedAnswer || isSubmitting, className: `btn btn-primary px-8 ${!selectedAnswer || isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`, children: isSubmitting ? "Submitting..." : "Next Question" }, void 0, false, {
          fileName: "app/routes/tests.$testId.tsx",
          lineNumber: 212,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tests.$testId.tsx",
        lineNumber: 206,
        columnNumber: 13
      }, this)
    ] }, currentQuestion?.id, true, {
      fileName: "app/routes/tests.$testId.tsx",
      lineNumber: 171,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/tests.$testId.tsx",
      lineNumber: 170,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/tests.$testId.tsx",
      lineNumber: 169,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tests.$testId.tsx",
    lineNumber: 132,
    columnNumber: 10
  }, this);
}
_s(TestPage, "L0bd/rUKSB6+gr+I6B5oS9iDQvQ=", false, function() {
  return [useLoaderData, useNavigate, useSubmit];
});
_c = TestPage;
var _c;
$RefreshReg$(_c, "TestPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TestPage as default
};
//# sourceMappingURL=/build/routes/tests.$testId-YDGPLLY5.js.map

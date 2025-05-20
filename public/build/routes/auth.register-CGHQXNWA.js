import {
  require_session
} from "/build/_shared/chunk-V22J52NZ.js";
import {
  Brain,
  CheckCircle,
  Eye,
  EyeOff,
  motion
} from "/build/_shared/chunk-2BIIUQRO.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Link,
  useActionData,
  useNavigation
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

// app/routes/auth.register.tsx
var import_react = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/auth.register.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/auth.register.tsx"
  );
  import.meta.hot.lastModified = "1747716749494.9998";
}
function Register() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = (0, import_react.useState)(false);
  const [password, setPassword] = (0, import_react.useState)("");
  const isSubmitting = navigation.state === "submitting";
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  const passwordStrength = [hasMinLength, hasUppercase, hasLowercase, hasNumber, hasSpecialChar].filter(Boolean).length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Brain, { className: "h-10 w-10 text-primary-500" }, void 0, false, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-center text-3xl font-bold text-gray-900", children: "Create your account" }, void 0, false, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-center text-sm text-gray-600", children: [
        "Or",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth/login", className: "font-medium text-primary-600 hover:text-primary-500", children: "sign in to your existing account" }, void 0, false, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.register.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.3
    }, className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 bg-error-50 border border-error-200 text-error-700 px-4 py-3 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: actionData.error }, void 0, false, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 114,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 113,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", className: "label", children: "Full name" }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 118,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "name", name: "name", type: "text", autoComplete: "name", required: true, className: "input" }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 122,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "label", children: "Email address" }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email", name: "email", type: "email", autoComplete: "email", required: true, className: "input" }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "label", children: "Password" }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", name: "password", type: showPassword ? "text" : "password", autoComplete: "new-password", required: true, value: password, onChange: (e) => setPassword(e.target.value), className: "input pr-10" }, void 0, false, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 140,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500", children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { className: "h-5 w-5" }, void 0, false, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 142,
              columnNumber: 35
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "h-5 w-5" }, void 0, false, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 142,
              columnNumber: 68
            }, this) }, void 0, false, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 141,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-1 mb-2", children: Array.from({
              length: 5
            }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-1 flex-1 rounded-full ${i < passwordStrength ? i < 2 ? "bg-error-500" : i < 4 ? "bg-warning-500" : "bg-success-500" : "bg-gray-200"}` }, i, false, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 151,
              columnNumber: 34
            }, this)) }, void 0, false, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 148,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1 text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-gray-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircle, { className: `h-4 w-4 mr-2 ${hasMinLength ? "text-success-500" : "text-gray-300"}` }, void 0, false, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 156,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "At least 8 characters" }, void 0, false, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 157,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 155,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-gray-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircle, { className: `h-4 w-4 mr-2 ${hasUppercase ? "text-success-500" : "text-gray-300"}` }, void 0, false, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 160,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Contains uppercase letter" }, void 0, false, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 161,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 159,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-gray-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircle, { className: `h-4 w-4 mr-2 ${hasLowercase ? "text-success-500" : "text-gray-300"}` }, void 0, false, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 164,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Contains lowercase letter" }, void 0, false, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 165,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 163,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-gray-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircle, { className: `h-4 w-4 mr-2 ${hasNumber ? "text-success-500" : "text-gray-300"}` }, void 0, false, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 168,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Contains number" }, void 0, false, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 169,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 167,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-gray-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircle, { className: `h-4 w-4 mr-2 ${hasSpecialChar ? "text-success-500" : "text-gray-300"}` }, void 0, false, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 172,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Contains special character" }, void 0, false, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 173,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 171,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 154,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 147,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "terms", name: "terms", type: "checkbox", required: true, className: "h-4 w-4 text-primary-600 border-gray-300 rounded" }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 181,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "terms", className: "ml-2 block text-sm text-gray-700", children: [
            "I agree to the",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/terms", className: "text-primary-600 hover:text-primary-500", children: "Terms of Service" }, void 0, false, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 184,
              columnNumber: 19
            }, this),
            " ",
            "and",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/privacy", className: "text-primary-600 hover:text-primary-500", children: "Privacy Policy" }, void 0, false, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 188,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 182,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 179,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting || passwordStrength < 3, className: `btn btn-primary w-full text-center py-2 ${isSubmitting || passwordStrength < 3 ? "opacity-50 cursor-not-allowed" : ""}`, children: isSubmitting ? "Creating account..." : "Create account" }, void 0, false, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 196,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 195,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-t border-gray-300" }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 205,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 204,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 bg-white text-gray-500", children: "Or sign up with" }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 208,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 203,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "btn btn-outline py-2 px-4 flex justify-center items-center w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 mr-2", fill: "currentColor", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z", fill: "#EA4335" }, void 0, false, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 215,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z", fill: "#4285F4" }, void 0, false, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 216,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z", fill: "#FBBC05" }, void 0, false, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 217,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z", fill: "#34A853" }, void 0, false, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 218,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 214,
              columnNumber: 17
            }, this),
            "Google"
          ] }, void 0, true, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 213,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "btn btn-outline py-2 px-4 flex justify-center items-center w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 mr-2", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" }, void 0, false, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 225,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 224,
              columnNumber: 17
            }, this),
            "Twitter"
          ] }, void 0, true, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 223,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 212,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 202,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.register.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/auth.register.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth.register.tsx",
    lineNumber: 84,
    columnNumber: 10
  }, this);
}
_s(Register, "4hk1xSXFrlFwVVHQnZep51nsQjQ=", false, function() {
  return [useActionData, useNavigation];
});
_c = Register;
var _c;
$RefreshReg$(_c, "Register");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Register as default
};
//# sourceMappingURL=/build/routes/auth.register-CGHQXNWA.js.map

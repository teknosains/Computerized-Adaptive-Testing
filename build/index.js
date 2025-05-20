var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 95,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import { json } from "@remix-run/node";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-TPZQRIJE.css";

// app/utils/session.server.ts
import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { v4 as uuid } from "uuid";
var users = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com",
    password: "password123"
    // In a real app, this would be hashed
  }
], sessionSecret = "super-secret-session-key", storage = createCookieSessionStorage({
  cookie: {
    name: "adaptive_irt_session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    // 30 days
    httpOnly: !0
  }
});
async function getUserSession(request) {
  let userId = (await storage.getSession(request.headers.get("Cookie"))).get("userId");
  return userId && users.find((u) => u.id === userId) || null;
}

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
async function loader({ request }) {
  let user = await getUserSession(request);
  return json({ user });
}
function App() {
  let { user } = useLoaderData();
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("title", { children: "Adaptive IRT Test" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "h-full bg-gray-50", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/tests.$testId.results.tsx
var tests_testId_results_exports = {};
__export(tests_testId_results_exports, {
  default: () => TestResultsPage,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { Link, useLoaderData as useLoaderData2 } from "@remix-run/react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Brain, Award, Clock as Clock2, ArrowRight } from "lucide-react";
import { getTestSession } from "~/models/test-session.server";
import { getTest } from "~/models/test.server";
import { requireUser } from "~/utils/session.server";
import { getAbilityDescriptor } from "~/utils/irt.server";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
async function loader2({ request, params }) {
  await requireUser(request);
  let { testId } = params, sessionId = new URL(request.url).searchParams.get("sessionId");
  if (!sessionId || !testId)
    throw new Response("Missing required parameters", { status: 400 });
  let session = await getTestSession(sessionId);
  if (!session)
    throw new Response("Test session not found", { status: 404 });
  let test = await getTest(testId);
  if (!test)
    throw new Response("Test not found", { status: 404 });
  let abilityScore = session.currentAbility, abilityPercentile = Math.round((1 - Math.exp(-Math.max(0, abilityScore))) * 100), abilityDescriptor = getAbilityDescriptor(abilityScore), questionDifficulties = session.answeredQuestions.map((q) => q.difficulty), avgDifficulty = questionDifficulties.reduce((sum, diff) => sum + diff, 0) / questionDifficulties.length, performanceData = session.answeredQuestions.map((q, index) => ({
    questionNumber: index + 1,
    difficulty: parseFloat(q.difficulty.toFixed(2)),
    correct: q.isCorrect ? 1 : 0,
    ability: parseFloat(q.abilityAfter.toFixed(2))
  })), totalTime = session.answeredQuestions.reduce((sum, q) => sum + q.timeSpent, 0), avgTimePerQuestion = Math.round(totalTime / session.answeredQuestions.length), correctAnswers = session.answeredQuestions.filter((q) => q.isCorrect).length, accuracy = Math.round(correctAnswers / session.answeredQuestions.length * 100);
  return json2({
    test,
    session,
    results: {
      abilityScore,
      abilityPercentile,
      abilityDescriptor,
      avgDifficulty,
      performanceData,
      totalTime,
      avgTimePerQuestion,
      accuracy
    }
  });
}
function TestResultsPage() {
  let { test, session, results } = useLoaderData2(), formatTime = (seconds) => {
    let mins = Math.floor(seconds / 60), secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };
  return /* @__PURE__ */ jsxDEV3("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxDEV3("header", { className: "bg-gradient-to-r from-primary-600 to-accent-500 text-white", children: /* @__PURE__ */ jsxDEV3("div", { className: "max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center", children: [
      /* @__PURE__ */ jsxDEV3("div", { children: [
        /* @__PURE__ */ jsxDEV3("h1", { className: "text-2xl md:text-3xl font-bold", children: test.title }, void 0, !1, {
          fileName: "app/routes/tests.$testId.results.tsx",
          lineNumber: 87,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV3("p", { className: "text-primary-100 mt-1", children: "Test Results" }, void 0, !1, {
          fileName: "app/routes/tests.$testId.results.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/tests.$testId.results.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(Link, { to: "/dashboard", className: "btn bg-white text-primary-600 hover:bg-gray-100 mt-4 md:mt-0", children: "Back to Dashboard" }, void 0, !1, {
        fileName: "app/routes/tests.$testId.results.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tests.$testId.results.tsx",
      lineNumber: 85,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/tests.$testId.results.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tests.$testId.results.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("main", { className: "max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV3("div", { className: "grid gap-8 md:grid-cols-3 mb-8", children: [
        /* @__PURE__ */ jsxDEV3(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3 },
            className: "card p-6",
            children: [
              /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsxDEV3("div", { className: "rounded-full bg-primary-100 p-3 mr-4", children: /* @__PURE__ */ jsxDEV3(Brain, { className: "h-6 w-6 text-primary-500" }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 108,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 107,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV3("div", { children: [
                  /* @__PURE__ */ jsxDEV3("h2", { className: "text-lg font-semibold", children: "Ability Score" }, void 0, !1, {
                    fileName: "app/routes/tests.$testId.results.tsx",
                    lineNumber: 111,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV3("p", { className: "text-gray-500 text-sm", children: "Based on IRT analysis" }, void 0, !1, {
                    fileName: "app/routes/tests.$testId.results.tsx",
                    lineNumber: 112,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 110,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/tests.$testId.results.tsx",
                lineNumber: 106,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV3("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxDEV3("div", { className: "text-4xl font-bold text-primary-500", children: results.abilityScore.toFixed(2) }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 117,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV3("p", { className: "text-gray-500 mt-1", children: results.abilityDescriptor }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 120,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV3("div", { className: "mt-3 text-sm text-gray-500", children: [
                  "Better than ",
                  results.abilityPercentile,
                  "% of test takers"
                ] }, void 0, !0, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 123,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/tests.$testId.results.tsx",
                lineNumber: 116,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/tests.$testId.results.tsx",
            lineNumber: 100,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV3(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3, delay: 0.1 },
            className: "card p-6",
            children: [
              /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsxDEV3("div", { className: "rounded-full bg-secondary-100 p-3 mr-4", children: /* @__PURE__ */ jsxDEV3(Award, { className: "h-6 w-6 text-secondary-500" }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 137,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 136,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV3("div", { children: [
                  /* @__PURE__ */ jsxDEV3("h2", { className: "text-lg font-semibold", children: "Performance" }, void 0, !1, {
                    fileName: "app/routes/tests.$testId.results.tsx",
                    lineNumber: 140,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV3("p", { className: "text-gray-500 text-sm", children: "Accuracy and difficulty" }, void 0, !1, {
                    fileName: "app/routes/tests.$testId.results.tsx",
                    lineNumber: 141,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 139,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/tests.$testId.results.tsx",
                lineNumber: 135,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV3("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxDEV3("div", { className: "text-4xl font-bold text-secondary-500", children: [
                  results.accuracy,
                  "%"
                ] }, void 0, !0, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 146,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV3("p", { className: "text-gray-500 mt-1", children: "Correct Answers" }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 149,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV3("div", { className: "mt-3 text-sm text-gray-500", children: [
                  "Avg. Question Difficulty: ",
                  results.avgDifficulty.toFixed(2)
                ] }, void 0, !0, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 152,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/tests.$testId.results.tsx",
                lineNumber: 145,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/tests.$testId.results.tsx",
            lineNumber: 129,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV3(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3, delay: 0.2 },
            className: "card p-6",
            children: [
              /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsxDEV3("div", { className: "rounded-full bg-accent-100 p-3 mr-4", children: /* @__PURE__ */ jsxDEV3(Clock2, { className: "h-6 w-6 text-accent-500" }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 166,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 165,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV3("div", { children: [
                  /* @__PURE__ */ jsxDEV3("h2", { className: "text-lg font-semibold", children: "Time" }, void 0, !1, {
                    fileName: "app/routes/tests.$testId.results.tsx",
                    lineNumber: 169,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV3("p", { className: "text-gray-500 text-sm", children: "Test duration" }, void 0, !1, {
                    fileName: "app/routes/tests.$testId.results.tsx",
                    lineNumber: 170,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 168,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/tests.$testId.results.tsx",
                lineNumber: 164,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV3("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxDEV3("div", { className: "text-4xl font-bold text-accent-500", children: formatTime(results.totalTime) }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 175,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV3("p", { className: "text-gray-500 mt-1", children: "Total Time" }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 178,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV3("div", { className: "mt-3 text-sm text-gray-500", children: [
                  "Avg. Time per Question: ",
                  formatTime(results.avgTimePerQuestion)
                ] }, void 0, !0, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 181,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/tests.$testId.results.tsx",
                lineNumber: 174,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/tests.$testId.results.tsx",
            lineNumber: 158,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/tests.$testId.results.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4 },
          className: "card p-6 mb-8",
          children: [
            /* @__PURE__ */ jsxDEV3("h2", { className: "text-xl font-semibold mb-4", children: "Performance Analysis" }, void 0, !1, {
              fileName: "app/routes/tests.$testId.results.tsx",
              lineNumber: 194,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { className: "h-80", children: /* @__PURE__ */ jsxDEV3(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV3(
              BarChart,
              {
                data: results.performanceData,
                margin: { top: 20, right: 30, left: 0, bottom: 20 },
                children: [
                  /* @__PURE__ */ jsxDEV3(XAxis, { dataKey: "questionNumber" }, void 0, !1, {
                    fileName: "app/routes/tests.$testId.results.tsx",
                    lineNumber: 201,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV3(YAxis, { yAxisId: "left", orientation: "left", stroke: "#6D28D9", domain: [-3, 3] }, void 0, !1, {
                    fileName: "app/routes/tests.$testId.results.tsx",
                    lineNumber: 202,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV3(YAxis, { yAxisId: "right", orientation: "right", stroke: "#0077FF", domain: [-3, 3] }, void 0, !1, {
                    fileName: "app/routes/tests.$testId.results.tsx",
                    lineNumber: 203,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV3(
                    Tooltip,
                    {
                      formatter: (value, name) => name === "correct" ? [value === 1 ? "Correct" : "Incorrect", "Result"] : [value, name.charAt(0).toUpperCase() + name.slice(1)]
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/tests.$testId.results.tsx",
                      lineNumber: 204,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV3(Bar, { dataKey: "difficulty", name: "Difficulty", yAxisId: "left", fill: "#6D28D9", children: results.performanceData.map((entry2, index) => /* @__PURE__ */ jsxDEV3(Cell, { fillOpacity: 0.7 }, `difficulty-${index}`, !1, {
                    fileName: "app/routes/tests.$testId.results.tsx",
                    lineNumber: 212,
                    columnNumber: 21
                  }, this)) }, void 0, !1, {
                    fileName: "app/routes/tests.$testId.results.tsx",
                    lineNumber: 210,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV3(Bar, { dataKey: "ability", name: "Ability", yAxisId: "right", fill: "#0077FF", children: results.performanceData.map((entry2, index) => /* @__PURE__ */ jsxDEV3(Cell, { fillOpacity: 0.7 }, `ability-${index}`, !1, {
                    fileName: "app/routes/tests.$testId.results.tsx",
                    lineNumber: 217,
                    columnNumber: 21
                  }, this)) }, void 0, !1, {
                    fileName: "app/routes/tests.$testId.results.tsx",
                    lineNumber: 215,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/tests.$testId.results.tsx",
                lineNumber: 197,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/tests.$testId.results.tsx",
              lineNumber: 196,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/tests.$testId.results.tsx",
              lineNumber: 195,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { className: "text-sm text-gray-500 mt-2", children: /* @__PURE__ */ jsxDEV3("p", { children: "This chart shows how your ability estimate (blue) changed with each question, compared to the difficulty level (purple) of each question." }, void 0, !1, {
              fileName: "app/routes/tests.$testId.results.tsx",
              lineNumber: 224,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/tests.$testId.results.tsx",
              lineNumber: 223,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/tests.$testId.results.tsx",
          lineNumber: 188,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "card p-6",
          children: [
            /* @__PURE__ */ jsxDEV3("h2", { className: "text-xl font-semibold mb-4", children: "Summary and Recommendations" }, void 0, !1, {
              fileName: "app/routes/tests.$testId.results.tsx",
              lineNumber: 234,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV3("p", { className: "mb-4", children: [
              "Based on your performance, you've demonstrated ",
              results.abilityDescriptor.toLowerCase(),
              " proficiency in ",
              test.title,
              ". Your ability score of ",
              results.abilityScore.toFixed(2),
              " indicates",
              results.abilityScore > 1 ? " strong mastery of the concepts covered." : results.abilityScore > 0 ? " good understanding with room for improvement." : " a need for additional study in this area."
            ] }, void 0, !0, {
              fileName: "app/routes/tests.$testId.results.tsx",
              lineNumber: 236,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV3("h3", { className: "text-lg font-medium mt-6 mb-3", children: "Suggested Next Steps" }, void 0, !1, {
              fileName: "app/routes/tests.$testId.results.tsx",
              lineNumber: 246,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV3("ul", { className: "space-y-2 mb-6", children: [
              /* @__PURE__ */ jsxDEV3("li", { className: "flex", children: [
                /* @__PURE__ */ jsxDEV3(ArrowRight, { className: "h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 249,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV3("span", { children: results.abilityScore > 1 ? "Explore advanced topics in this subject area." : results.abilityScore > 0 ? "Focus on strengthening your understanding of moderately difficult concepts." : "Review fundamental concepts in this subject area." }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 250,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/tests.$testId.results.tsx",
                lineNumber: 248,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV3("li", { className: "flex", children: [
                /* @__PURE__ */ jsxDEV3(ArrowRight, { className: "h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 259,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV3("span", { children: [
                  'Consider taking our related test: "',
                  test.relatedTests?.[0]?.title || "Advanced Concepts",
                  '"'
                ] }, void 0, !0, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 260,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/tests.$testId.results.tsx",
                lineNumber: 258,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV3("li", { className: "flex", children: [
                /* @__PURE__ */ jsxDEV3(ArrowRight, { className: "h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 263,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV3("span", { children: "Review your performance pattern to identify specific areas for improvement." }, void 0, !1, {
                  fileName: "app/routes/tests.$testId.results.tsx",
                  lineNumber: 264,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/tests.$testId.results.tsx",
                lineNumber: 262,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/tests.$testId.results.tsx",
              lineNumber: 247,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { className: "mt-8 flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxDEV3(Link, { to: `/tests/${test.id}`, className: "btn btn-primary", children: "Retake Test" }, void 0, !1, {
                fileName: "app/routes/tests.$testId.results.tsx",
                lineNumber: 269,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV3(Link, { to: "/tests", className: "btn btn-outline", children: "Try Another Test" }, void 0, !1, {
                fileName: "app/routes/tests.$testId.results.tsx",
                lineNumber: 272,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/tests.$testId.results.tsx",
              lineNumber: 268,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/tests.$testId.results.tsx",
          lineNumber: 228,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/tests.$testId.results.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tests.$testId.results.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard._index.tsx
var dashboard_index_exports = {};
__export(dashboard_index_exports, {
  default: () => Dashboard,
  loader: () => loader3
});
import { json as json3 } from "@remix-run/node";
import { Link as Link2, useLoaderData as useLoaderData3 } from "@remix-run/react";
import { motion as motion2 } from "framer-motion";
import { Activity, Award as Award2, Book, Clock as Clock3, Brain as Brain2, Lightbulb, LineChart, PanelRight, User } from "lucide-react";
import { getUserTestSessions } from "~/models/test-session.server";
import { getAllTests } from "~/models/test.server";
import { requireUser as requireUser2 } from "~/utils/session.server";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
async function loader3({ request }) {
  let user = await requireUser2(request), sessions = await getUserTestSessions(user.id), tests = await getAllTests(), completedTests = sessions.filter((s) => s.isComplete).length, averageAbility = sessions.length > 0 ? sessions.reduce((sum, s) => sum + s.currentAbility, 0) / sessions.length : 0, recentSessions = sessions.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 5), takenTestIds = new Set(sessions.map((s) => s.testId)), recommendedTests = tests.filter((test) => !takenTestIds.has(test.id)).slice(0, 3);
  return json3({
    user,
    stats: {
      completedTests,
      averageAbility,
      totalQuestions: sessions.reduce((sum, s) => sum + s.answeredQuestions.length, 0)
    },
    recentSessions,
    recommendedTests
  });
}
function Dashboard() {
  let { user, stats, recentSessions, recommendedTests } = useLoaderData3(), formatDate = (dateString) => {
    let date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(date);
  };
  return /* @__PURE__ */ jsxDEV4("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex", children: [
    /* @__PURE__ */ jsxDEV4("aside", { className: "hidden md:flex md:w-64 lg:w-72 flex-col fixed inset-y-0 bg-white shadow-md", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center justify-center h-16 border-b border-gray-200 px-4", children: /* @__PURE__ */ jsxDEV4(Link2, { to: "/", className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxDEV4(Brain2, { className: "h-6 w-6 text-primary-500" }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV4("span", { className: "text-xl font-semibold", children: "Adaptive IRT" }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("nav", { className: "flex-1 pt-4 pb-4 overflow-y-auto", children: [
        /* @__PURE__ */ jsxDEV4("div", { className: "px-4 mb-4", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center space-x-3 px-3 py-3 rounded-lg bg-gray-50", children: [
          /* @__PURE__ */ jsxDEV4("div", { className: "rounded-full bg-primary-100 p-2", children: /* @__PURE__ */ jsxDEV4(User, { className: "h-5 w-5 text-primary-500" }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 72,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 71,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxDEV4("p", { className: "text-sm font-medium text-gray-900 truncate", children: user.name || "User" }, void 0, !1, {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 75,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV4("p", { className: "text-xs text-gray-500 truncate", children: user.email }, void 0, !1, {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 78,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "space-y-1 px-2", children: [
          /* @__PURE__ */ jsxDEV4(
            Link2,
            {
              to: "/dashboard",
              className: "flex items-center px-3 py-2 text-sm font-medium text-primary-700 rounded-md bg-primary-50",
              children: [
                /* @__PURE__ */ jsxDEV4(Activity, { className: "mr-3 h-5 w-5 text-primary-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 90,
                  columnNumber: 17
                }, this),
                "Dashboard"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 86,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(
            Link2,
            {
              to: "/tests",
              className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50",
              children: [
                /* @__PURE__ */ jsxDEV4(Book, { className: "mr-3 h-5 w-5 text-gray-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 98,
                  columnNumber: 17
                }, this),
                "Available Tests"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 94,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(
            Link2,
            {
              to: "/dashboard/history",
              className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50",
              children: [
                /* @__PURE__ */ jsxDEV4(LineChart, { className: "mr-3 h-5 w-5 text-gray-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 106,
                  columnNumber: 17
                }, this),
                "Test History"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 102,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(
            Link2,
            {
              to: "/dashboard/profile",
              className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50",
              children: [
                /* @__PURE__ */ jsxDEV4(User, { className: "mr-3 h-5 w-5 text-gray-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 114,
                  columnNumber: 17
                }, this),
                "Profile"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 110,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "pt-6 px-2", children: [
          /* @__PURE__ */ jsxDEV4("h3", { className: "px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider", children: "Resources" }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 120,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "mt-2 space-y-1", children: /* @__PURE__ */ jsxDEV4(
            Link2,
            {
              to: "/help",
              className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50",
              children: [
                /* @__PURE__ */ jsxDEV4(Lightbulb, { className: "mr-3 h-5 w-5 text-gray-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 128,
                  columnNumber: 19
                }, this),
                "Help & Support"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 124,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 123,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "p-4 border-t border-gray-200", children: /* @__PURE__ */ jsxDEV4(
        Form,
        {
          method: "post",
          action: "/dashboard/logout",
          className: "w-full",
          children: /* @__PURE__ */ jsxDEV4(
            "button",
            {
              type: "submit",
              className: "flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50",
              children: [
                /* @__PURE__ */ jsxDEV4("svg", { className: "mr-3 h-5 w-5 text-gray-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsxDEV4("path", { fillRule: "evenodd", d: "M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm7 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm2-1a1 1 0 011 1v4a1 1 0 11-2 0V7a1 1 0 011-1z", clipRule: "evenodd" }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 146,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 145,
                  columnNumber: 17
                }, this),
                "Sign Out"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 141,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 136,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 135,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard._index.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "md:hidden bg-white shadow", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center justify-between h-16 px-4", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV4(Link2, { to: "/", className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxDEV4(Brain2, { className: "h-6 w-6 text-primary-500" }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 159,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV4("span", { className: "text-xl font-semibold", children: "Adaptive IRT" }, void 0, !1, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 160,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 158,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 157,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4(
        "button",
        {
          type: "button",
          className: "p-2 rounded-md text-gray-500 hover:text-primary-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500",
          children: /* @__PURE__ */ jsxDEV4(PanelRight, { className: "h-6 w-6" }, void 0, !1, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 168,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 164,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard._index.tsx",
      lineNumber: 156,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard._index.tsx",
      lineNumber: 155,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4("main", { className: "flex-1 md:ml-64 lg:ml-72", children: /* @__PURE__ */ jsxDEV4("div", { className: "py-6", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8", children: [
        /* @__PURE__ */ jsxDEV4(
          motion2.h1,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3 },
            className: "text-2xl md:text-3xl font-bold text-gray-900",
            children: [
              "Welcome back, ",
              user.name || "User"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 177,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV4(
          motion2.p,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3, delay: 0.1 },
            className: "mt-1 text-gray-500",
            children: "Here's an overview of your testing progress and recommendations."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 185,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 176,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8", children: [
        /* @__PURE__ */ jsxDEV4("div", { className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxDEV4(
            motion2.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.2 },
              className: "card p-5",
              children: /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV4("div", { className: "flex-shrink-0 rounded-md bg-primary-100 p-3", children: /* @__PURE__ */ jsxDEV4(Book, { className: "h-6 w-6 text-primary-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 206,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 205,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV4("div", { className: "ml-5", children: [
                  /* @__PURE__ */ jsxDEV4("p", { className: "text-sm font-medium text-gray-500", children: "Tests Completed" }, void 0, !1, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 209,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV4("p", { className: "mt-1 text-3xl font-semibold text-gray-900", children: stats.completedTests }, void 0, !1, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 210,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 208,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 204,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 198,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(
            motion2.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.3 },
              className: "card p-5",
              children: /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV4("div", { className: "flex-shrink-0 rounded-md bg-accent-100 p-3", children: /* @__PURE__ */ jsxDEV4(Award2, { className: "h-6 w-6 text-accent-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 223,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 222,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV4("div", { className: "ml-5", children: [
                  /* @__PURE__ */ jsxDEV4("p", { className: "text-sm font-medium text-gray-500", children: "Average Ability" }, void 0, !1, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 226,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV4("p", { className: "mt-1 text-3xl font-semibold text-gray-900", children: stats.averageAbility.toFixed(2) }, void 0, !1, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 227,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 225,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 221,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 215,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(
            motion2.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.4 },
              className: "card p-5",
              children: /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV4("div", { className: "flex-shrink-0 rounded-md bg-secondary-100 p-3", children: /* @__PURE__ */ jsxDEV4(Activity, { className: "h-6 w-6 text-secondary-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 240,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 239,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV4("div", { className: "ml-5", children: [
                  /* @__PURE__ */ jsxDEV4("p", { className: "text-sm font-medium text-gray-500", children: "Questions Answered" }, void 0, !1, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 243,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV4("p", { className: "mt-1 text-3xl font-semibold text-gray-900", children: stats.totalQuestions }, void 0, !1, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 244,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 242,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 238,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 232,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 197,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxDEV4(
            motion2.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.5 },
              children: [
                /* @__PURE__ */ jsxDEV4("h2", { className: "text-xl font-bold text-gray-900 mb-4", children: "Recent Activity" }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 257,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV4("div", { className: "card overflow-hidden", children: recentSessions.length > 0 ? /* @__PURE__ */ jsxDEV4("ul", { className: "divide-y divide-gray-200", children: recentSessions.map((session) => /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4(
                  Link2,
                  {
                    to: `/tests/${session.testId}/results?sessionId=${session.id}`,
                    className: "block hover:bg-gray-50",
                    children: /* @__PURE__ */ jsxDEV4("div", { className: "px-6 py-4", children: [
                      /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsxDEV4("p", { className: "text-sm font-medium text-primary-600 truncate", children: session.testTitle }, void 0, !1, {
                          fileName: "app/routes/dashboard._index.tsx",
                          lineNumber: 269,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ jsxDEV4("div", { className: "ml-2 flex-shrink-0 flex", children: /* @__PURE__ */ jsxDEV4(
                          "p",
                          {
                            className: `px-2 py-1 text-xs rounded-full
                                      ${session.isComplete ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`,
                            children: session.isComplete ? "Complete" : "In Progress"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/dashboard._index.tsx",
                            lineNumber: 273,
                            columnNumber: 37
                          },
                          this
                        ) }, void 0, !1, {
                          fileName: "app/routes/dashboard._index.tsx",
                          lineNumber: 272,
                          columnNumber: 35
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/routes/dashboard._index.tsx",
                        lineNumber: 268,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ jsxDEV4("div", { className: "mt-2 flex justify-between", children: [
                        /* @__PURE__ */ jsxDEV4("div", { className: "sm:flex", children: [
                          /* @__PURE__ */ jsxDEV4("p", { className: "flex items-center text-sm text-gray-500", children: [
                            /* @__PURE__ */ jsxDEV4(Award2, { className: "flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" }, void 0, !1, {
                              fileName: "app/routes/dashboard._index.tsx",
                              lineNumber: 286,
                              columnNumber: 39
                            }, this),
                            "Ability: ",
                            session.currentAbility.toFixed(2)
                          ] }, void 0, !0, {
                            fileName: "app/routes/dashboard._index.tsx",
                            lineNumber: 285,
                            columnNumber: 37
                          }, this),
                          /* @__PURE__ */ jsxDEV4("p", { className: "mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6", children: [
                            /* @__PURE__ */ jsxDEV4(Activity, { className: "flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" }, void 0, !1, {
                              fileName: "app/routes/dashboard._index.tsx",
                              lineNumber: 290,
                              columnNumber: 39
                            }, this),
                            "Questions: ",
                            session.answeredQuestions.length
                          ] }, void 0, !0, {
                            fileName: "app/routes/dashboard._index.tsx",
                            lineNumber: 289,
                            columnNumber: 37
                          }, this)
                        ] }, void 0, !0, {
                          fileName: "app/routes/dashboard._index.tsx",
                          lineNumber: 284,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ jsxDEV4("p", { className: "text-sm text-gray-500", children: formatDate(session.updatedAt) }, void 0, !1, {
                          fileName: "app/routes/dashboard._index.tsx",
                          lineNumber: 294,
                          columnNumber: 35
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/routes/dashboard._index.tsx",
                        lineNumber: 283,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/dashboard._index.tsx",
                      lineNumber: 267,
                      columnNumber: 31
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 263,
                    columnNumber: 29
                  },
                  this
                ) }, session.id, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 262,
                  columnNumber: 27
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 260,
                  columnNumber: 23
                }, this) : /* @__PURE__ */ jsxDEV4("div", { className: "p-6 text-center", children: [
                  /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-500", children: "You haven't taken any tests yet." }, void 0, !1, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 305,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV4(Link2, { to: "/tests", className: "btn btn-primary mt-4", children: "Start Your First Test" }, void 0, !1, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 306,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 304,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 258,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 252,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(
            motion2.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.6 },
              children: [
                /* @__PURE__ */ jsxDEV4("h2", { className: "text-xl font-bold text-gray-900 mb-4", children: "Recommended Tests" }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 319,
                  columnNumber: 19
                }, this),
                recommendedTests.length > 0 ? /* @__PURE__ */ jsxDEV4("div", { className: "space-y-4", children: recommendedTests.map((test) => /* @__PURE__ */ jsxDEV4("div", { className: "card p-5 hover:shadow-md transition-shadow", children: [
                  /* @__PURE__ */ jsxDEV4("h3", { className: "text-lg font-medium mb-1", children: test.title }, void 0, !1, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 324,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV4("p", { className: "text-sm text-gray-500 mb-3", children: test.description }, void 0, !1, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 325,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-wrap gap-2 mb-4", children: test.tags.map((tag, i) => /* @__PURE__ */ jsxDEV4(
                    "span",
                    {
                      className: "bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded",
                      children: tag
                    },
                    i,
                    !1,
                    {
                      fileName: "app/routes/dashboard._index.tsx",
                      lineNumber: 328,
                      columnNumber: 31
                    },
                    this
                  )) }, void 0, !1, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 326,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV4("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center text-sm text-gray-500", children: [
                      /* @__PURE__ */ jsxDEV4(Clock3, { className: "h-4 w-4 mr-1" }, void 0, !1, {
                        fileName: "app/routes/dashboard._index.tsx",
                        lineNumber: 338,
                        columnNumber: 31
                      }, this),
                      /* @__PURE__ */ jsxDEV4("span", { children: [
                        "Est. ",
                        test.estimatedTime,
                        " mins"
                      ] }, void 0, !0, {
                        fileName: "app/routes/dashboard._index.tsx",
                        lineNumber: 339,
                        columnNumber: 31
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/dashboard._index.tsx",
                      lineNumber: 337,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ jsxDEV4(Link2, { to: `/tests/${test.id}`, className: "btn btn-primary", children: "Start Test" }, void 0, !1, {
                      fileName: "app/routes/dashboard._index.tsx",
                      lineNumber: 341,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 336,
                    columnNumber: 27
                  }, this)
                ] }, test.id, !0, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 323,
                  columnNumber: 25
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 321,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ jsxDEV4("div", { className: "card p-6 text-center", children: [
                  /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-500", children: "You've completed all available tests!" }, void 0, !1, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 350,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV4(Link2, { to: "/tests", className: "btn btn-primary mt-4", children: "View All Tests" }, void 0, !1, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 351,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 349,
                  columnNumber: 21
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 314,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 251,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 195,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard._index.tsx",
      lineNumber: 175,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard._index.tsx",
      lineNumber: 174,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard._index.tsx",
    lineNumber: 58,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard._index.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.logout.tsx
var dashboard_logout_exports = {};
__export(dashboard_logout_exports, {
  action: () => action,
  loader: () => loader4
});
import { redirect as redirect2 } from "@remix-run/node";
import { logout } from "~/utils/session.server";
async function action({ request }) {
  return logout(request);
}
async function loader4() {
  return redirect2("/");
}

// app/routes/auth.register.tsx
var auth_register_exports = {};
__export(auth_register_exports, {
  action: () => action2,
  default: () => Register,
  loader: () => loader5
});
import { useState } from "react";
import { json as json4, redirect as redirect3 } from "@remix-run/node";
import { Form as Form2, Link as Link3, useActionData, useNavigation } from "@remix-run/react";
import { motion as motion3 } from "framer-motion";
import { Brain as Brain3, CheckCircle, Eye, EyeOff } from "lucide-react";
import { createUser, createUserSession, getUserId } from "~/utils/session.server";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
async function loader5({ request }) {
  return await getUserId(request) ? redirect3("/dashboard") : json4({});
}
async function action2({ request }) {
  let formData = await request.formData(), name = formData.get("name"), email = formData.get("email"), password = formData.get("password");
  if (!name || !email || !password)
    return json4(
      { error: "All fields are required" },
      { status: 400 }
    );
  try {
    let user = await createUser(name, email, password);
    return createUserSession(user.id, "/dashboard");
  } catch (error) {
    return error.message === "User already exists" ? json4(
      { error: "A user with this email already exists" },
      { status: 400 }
    ) : json4(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
}
function Register() {
  let actionData = useActionData(), navigation = useNavigation(), [showPassword, setShowPassword] = useState(!1), [password, setPassword] = useState(""), isSubmitting = navigation.state === "submitting", hasMinLength = password.length >= 8, hasUppercase = /[A-Z]/.test(password), hasLowercase = /[a-z]/.test(password), hasNumber = /[0-9]/.test(password), hasSpecialChar = /[^A-Za-z0-9]/.test(password), passwordStrength = [
    hasMinLength,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSpecialChar
  ].filter(Boolean).length;
  return /* @__PURE__ */ jsxDEV5("div", { className: "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV5(Link3, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxDEV5(Brain3, { className: "h-10 w-10 text-primary-500" }, void 0, !1, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("h2", { className: "mt-6 text-center text-3xl font-bold text-gray-900", children: "Create your account" }, void 0, !1, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { className: "mt-2 text-center text-sm text-gray-600", children: [
        "Or",
        " ",
        /* @__PURE__ */ jsxDEV5(Link3, { to: "/auth/login", className: "font-medium text-primary-600 hover:text-primary-500", children: "sign in to your existing account" }, void 0, !1, {
          fileName: "app/routes/auth.register.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth.register.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ jsxDEV5(
      motion3.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
        className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
        children: [
          /* @__PURE__ */ jsxDEV5(Form2, { method: "post", children: [
            actionData?.error && /* @__PURE__ */ jsxDEV5("div", { className: "mb-4 bg-error-50 border border-error-200 text-error-700 px-4 py-3 rounded-md", children: /* @__PURE__ */ jsxDEV5("p", { children: actionData.error }, void 0, !1, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 98,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 97,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxDEV5("label", { htmlFor: "name", className: "label", children: "Full name" }, void 0, !1, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 103,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV5("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV5(
                "input",
                {
                  id: "name",
                  name: "name",
                  type: "text",
                  autoComplete: "name",
                  required: !0,
                  className: "input"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 107,
                  columnNumber: 17
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 106,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 102,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxDEV5("label", { htmlFor: "email", className: "label", children: "Email address" }, void 0, !1, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 119,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV5("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV5(
                "input",
                {
                  id: "email",
                  name: "email",
                  type: "email",
                  autoComplete: "email",
                  required: !0,
                  className: "input"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 123,
                  columnNumber: 17
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 122,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 118,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxDEV5("label", { htmlFor: "password", className: "label", children: "Password" }, void 0, !1, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 135,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV5("div", { className: "mt-1 relative", children: [
                /* @__PURE__ */ jsxDEV5(
                  "input",
                  {
                    id: "password",
                    name: "password",
                    type: showPassword ? "text" : "password",
                    autoComplete: "new-password",
                    required: !0,
                    value: password,
                    onChange: (e) => setPassword(e.target.value),
                    className: "input pr-10"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/auth.register.tsx",
                    lineNumber: 139,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV5(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowPassword(!showPassword),
                    className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500",
                    children: showPassword ? /* @__PURE__ */ jsxDEV5(EyeOff, { className: "h-5 w-5" }, void 0, !1, {
                      fileName: "app/routes/auth.register.tsx",
                      lineNumber: 155,
                      columnNumber: 21
                    }, this) : /* @__PURE__ */ jsxDEV5(Eye, { className: "h-5 w-5" }, void 0, !1, {
                      fileName: "app/routes/auth.register.tsx",
                      lineNumber: 157,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/auth.register.tsx",
                    lineNumber: 149,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 138,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV5("div", { className: "mt-2", children: [
                /* @__PURE__ */ jsxDEV5("div", { className: "flex space-x-1 mb-2", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxDEV5(
                  "div",
                  {
                    className: `h-1 flex-1 rounded-full ${i < passwordStrength ? i < 2 ? "bg-error-500" : i < 4 ? "bg-warning-500" : "bg-success-500" : "bg-gray-200"}`
                  },
                  i,
                  !1,
                  {
                    fileName: "app/routes/auth.register.tsx",
                    lineNumber: 166,
                    columnNumber: 21
                  },
                  this
                )) }, void 0, !1, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 164,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV5("div", { className: "space-y-1 text-sm", children: [
                  /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center text-gray-500", children: [
                    /* @__PURE__ */ jsxDEV5(
                      CheckCircle,
                      {
                        className: `h-4 w-4 mr-2 ${hasMinLength ? "text-success-500" : "text-gray-300"}`
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/auth.register.tsx",
                        lineNumber: 183,
                        columnNumber: 21
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV5("span", { children: "At least 8 characters" }, void 0, !1, {
                      fileName: "app/routes/auth.register.tsx",
                      lineNumber: 186,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/auth.register.tsx",
                    lineNumber: 182,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center text-gray-500", children: [
                    /* @__PURE__ */ jsxDEV5(
                      CheckCircle,
                      {
                        className: `h-4 w-4 mr-2 ${hasUppercase ? "text-success-500" : "text-gray-300"}`
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/auth.register.tsx",
                        lineNumber: 189,
                        columnNumber: 21
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV5("span", { children: "Contains uppercase letter" }, void 0, !1, {
                      fileName: "app/routes/auth.register.tsx",
                      lineNumber: 192,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/auth.register.tsx",
                    lineNumber: 188,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center text-gray-500", children: [
                    /* @__PURE__ */ jsxDEV5(
                      CheckCircle,
                      {
                        className: `h-4 w-4 mr-2 ${hasLowercase ? "text-success-500" : "text-gray-300"}`
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/auth.register.tsx",
                        lineNumber: 195,
                        columnNumber: 21
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV5("span", { children: "Contains lowercase letter" }, void 0, !1, {
                      fileName: "app/routes/auth.register.tsx",
                      lineNumber: 198,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/auth.register.tsx",
                    lineNumber: 194,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center text-gray-500", children: [
                    /* @__PURE__ */ jsxDEV5(
                      CheckCircle,
                      {
                        className: `h-4 w-4 mr-2 ${hasNumber ? "text-success-500" : "text-gray-300"}`
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/auth.register.tsx",
                        lineNumber: 201,
                        columnNumber: 21
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV5("span", { children: "Contains number" }, void 0, !1, {
                      fileName: "app/routes/auth.register.tsx",
                      lineNumber: 204,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/auth.register.tsx",
                    lineNumber: 200,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center text-gray-500", children: [
                    /* @__PURE__ */ jsxDEV5(
                      CheckCircle,
                      {
                        className: `h-4 w-4 mr-2 ${hasSpecialChar ? "text-success-500" : "text-gray-300"}`
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/auth.register.tsx",
                        lineNumber: 207,
                        columnNumber: 21
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV5("span", { children: "Contains special character" }, void 0, !1, {
                      fileName: "app/routes/auth.register.tsx",
                      lineNumber: 210,
                      columnNumber: 21
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/auth.register.tsx",
                    lineNumber: 206,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 181,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 163,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 134,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "mb-6", children: /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxDEV5(
                "input",
                {
                  id: "terms",
                  name: "terms",
                  type: "checkbox",
                  required: !0,
                  className: "h-4 w-4 text-primary-600 border-gray-300 rounded"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 218,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5("label", { htmlFor: "terms", className: "ml-2 block text-sm text-gray-700", children: [
                "I agree to the",
                " ",
                /* @__PURE__ */ jsxDEV5(Link3, { to: "/terms", className: "text-primary-600 hover:text-primary-500", children: "Terms of Service" }, void 0, !1, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 227,
                  columnNumber: 19
                }, this),
                " ",
                "and",
                " ",
                /* @__PURE__ */ jsxDEV5(Link3, { to: "/privacy", className: "text-primary-600 hover:text-primary-500", children: "Privacy Policy" }, void 0, !1, {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 231,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 225,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 217,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 216,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5(
              "button",
              {
                type: "submit",
                disabled: isSubmitting || passwordStrength < 3,
                className: `btn btn-primary w-full text-center py-2 ${isSubmitting || passwordStrength < 3 ? "opacity-50 cursor-not-allowed" : ""}`,
                children: isSubmitting ? "Creating account..." : "Create account"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 239,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 238,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 95,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxDEV5("div", { className: "relative", children: [
              /* @__PURE__ */ jsxDEV5("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxDEV5("div", { className: "w-full border-t border-gray-300" }, void 0, !1, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 254,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 253,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV5("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ jsxDEV5("span", { className: "px-2 bg-white text-gray-500", children: "Or sign up with" }, void 0, !1, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 257,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/auth.register.tsx",
                lineNumber: 256,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 252,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "mt-6 grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxDEV5(
                "button",
                {
                  type: "button",
                  className: "btn btn-outline py-2 px-4 flex justify-center items-center w-full",
                  children: [
                    /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5 mr-2", fill: "currentColor", viewBox: "0 0 24 24", children: [
                      /* @__PURE__ */ jsxDEV5("path", { d: "M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z", fill: "#EA4335" }, void 0, !1, {
                        fileName: "app/routes/auth.register.tsx",
                        lineNumber: 267,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ jsxDEV5("path", { d: "M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z", fill: "#4285F4" }, void 0, !1, {
                        fileName: "app/routes/auth.register.tsx",
                        lineNumber: 268,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ jsxDEV5("path", { d: "M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z", fill: "#FBBC05" }, void 0, !1, {
                        fileName: "app/routes/auth.register.tsx",
                        lineNumber: 269,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ jsxDEV5("path", { d: "M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z", fill: "#34A853" }, void 0, !1, {
                        fileName: "app/routes/auth.register.tsx",
                        lineNumber: 270,
                        columnNumber: 19
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/auth.register.tsx",
                      lineNumber: 266,
                      columnNumber: 17
                    }, this),
                    "Google"
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 262,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5(
                "button",
                {
                  type: "button",
                  className: "btn btn-outline py-2 px-4 flex justify-center items-center w-full",
                  children: [
                    /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5 mr-2", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV5("path", { d: "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" }, void 0, !1, {
                      fileName: "app/routes/auth.register.tsx",
                      lineNumber: 280,
                      columnNumber: 19
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/auth.register.tsx",
                      lineNumber: 279,
                      columnNumber: 17
                    }, this),
                    "Twitter"
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/auth.register.tsx",
                  lineNumber: 275,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/auth.register.tsx",
              lineNumber: 261,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/auth.register.tsx",
            lineNumber: 251,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/auth.register.tsx",
        lineNumber: 89,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/auth.register.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.register.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

// app/routes/tests.$testId.tsx
var tests_testId_exports = {};
__export(tests_testId_exports, {
  action: () => action3,
  default: () => TestPage,
  loader: () => loader6
});
import { useEffect, useState as useState2 } from "react";
import { json as json5, redirect as redirect4 } from "@remix-run/node";
import { useLoaderData as useLoaderData4, useNavigate, useSubmit } from "@remix-run/react";
import { motion as motion4, AnimatePresence } from "framer-motion";
import { Activity as Activity2, AlertCircle, Clock as Clock4 } from "lucide-react";
import { getTest as getTest2 } from "~/models/test.server";
import { requireUser as requireUser3 } from "~/utils/session.server";
import { getNextQuestion } from "~/utils/irt.server";
import { createTestSession, updateTestSession } from "~/models/test-session.server";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
async function loader6({ request, params }) {
  let user = await requireUser3(request), { testId } = params;
  if (!testId)
    return redirect4("/tests");
  let test = await getTest2(testId);
  if (!test)
    throw new Response("Test not found", { status: 404 });
  let session = await createTestSession(user.id, testId), currentQuestion = await getNextQuestion(session.id, session.currentAbility);
  return json5({ test, session, currentQuestion });
}
async function action3({ request, params }) {
  let user = await requireUser3(request), formData = await request.formData(), sessionId = formData.get("sessionId"), questionId = formData.get("questionId"), answer = formData.get("answer"), timeSpent = formData.get("timeSpent"), updatedSession = await updateTestSession({
    sessionId,
    questionId,
    answer,
    timeSpent: parseInt(timeSpent, 10)
  });
  if (updatedSession.isComplete)
    return redirect4(`/tests/${params.testId}/results?sessionId=${sessionId}`);
  let nextQuestion = await getNextQuestion(sessionId, updatedSession.currentAbility);
  return json5({ session: updatedSession, nextQuestion });
}
function TestPage() {
  let { test, session, currentQuestion } = useLoaderData4(), [timeSpent, setTimeSpent] = useState2(0), [selectedAnswer, setSelectedAnswer] = useState2(null), [isSubmitting, setIsSubmitting] = useState2(!1), navigate = useNavigate(), submit = useSubmit();
  useEffect(() => {
    let timer = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1e3);
    return () => clearInterval(timer);
  }, []), useEffect(() => {
    setSelectedAnswer(null), setTimeSpent(0);
  }, [currentQuestion?.id]);
  let formatTime = (seconds) => {
    let mins = Math.floor(seconds / 60), secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }, handleSubmitAnswer = () => {
    if (!selectedAnswer || isSubmitting)
      return;
    setIsSubmitting(!0);
    let formData = new FormData();
    formData.append("sessionId", session.id), formData.append("questionId", currentQuestion.id), formData.append("answer", selectedAnswer), formData.append("timeSpent", timeSpent.toString()), submit(formData, { method: "post" });
  }, questionProgress = Math.round(session.answeredQuestions.length / test.maxQuestions * 100);
  return /* @__PURE__ */ jsxDEV6("div", { className: "min-h-screen bg-gray-50 flex flex-col", children: [
    /* @__PURE__ */ jsxDEV6("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsxDEV6("div", { className: "max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV6("h1", { className: "text-2xl font-bold text-gray-900", children: test.title }, void 0, !1, {
        fileName: "app/routes/tests.$testId.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center text-gray-600", children: [
          /* @__PURE__ */ jsxDEV6(Clock4, { className: "h-5 w-5 mr-1" }, void 0, !1, {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6("span", { children: formatTime(timeSpent) }, void 0, !1, {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/tests.$testId.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "hidden md:flex items-center", children: [
          /* @__PURE__ */ jsxDEV6(Activity2, { className: "h-5 w-5 mr-1 text-primary-500" }, void 0, !1, {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 117,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6("span", { className: "text-sm font-medium", children: [
            "Question ",
            session.answeredQuestions.length + 1,
            " of approximately ",
            test.maxQuestions
          ] }, void 0, !0, {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 118,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/tests.$testId.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6(
          "button",
          {
            onClick: () => {
              confirm("Are you sure you want to exit this test? Your progress will be saved.") && navigate("/tests");
            },
            className: "btn btn-outline py-1",
            children: "Exit"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 123,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/tests.$testId.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tests.$testId.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tests.$testId.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4", children: /* @__PURE__ */ jsxDEV6("div", { className: "progress-bar", children: /* @__PURE__ */ jsxDEV6(
      "div",
      {
        className: "progress-bar-fill",
        style: { width: `${questionProgress}%` }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/tests.$testId.tsx",
        lineNumber: 139,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/tests.$testId.tsx",
      lineNumber: 138,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tests.$testId.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("main", { className: "flex-grow flex items-center justify-center p-4", children: /* @__PURE__ */ jsxDEV6(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxDEV6(
      motion4.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.3 },
        className: "card w-full max-w-3xl p-6 md:p-8",
        children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxDEV6("h2", { className: "text-xl md:text-2xl font-semibold mb-4", children: currentQuestion?.content }, void 0, !1, {
              fileName: "app/routes/tests.$testId.tsx",
              lineNumber: 157,
              columnNumber: 15
            }, this),
            currentQuestion?.imageUrl && /* @__PURE__ */ jsxDEV6("div", { className: "mb-4", children: /* @__PURE__ */ jsxDEV6(
              "img",
              {
                src: currentQuestion.imageUrl,
                alt: "Question visual",
                className: "w-full rounded-lg"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/tests.$testId.tsx",
                lineNumber: 163,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/tests.$testId.tsx",
              lineNumber: 162,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "space-y-3", children: currentQuestion?.options.map((option, index) => /* @__PURE__ */ jsxDEV6(
              "div",
              {
                onClick: () => setSelectedAnswer(option.id),
                className: `p-4 border rounded-lg cursor-pointer transition-all duration-200 ${selectedAnswer === option.id ? "border-primary-500 bg-primary-50" : "border-gray-200 hover:border-primary-300"}`,
                children: /* @__PURE__ */ jsxDEV6("div", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsxDEV6("div", { className: `h-5 w-5 mr-3 rounded-full flex items-center justify-center border ${selectedAnswer === option.id ? "bg-primary-500 border-primary-500" : "border-gray-300"}`, children: selectedAnswer === option.id && /* @__PURE__ */ jsxDEV6("div", { className: "h-2 w-2 rounded-full bg-white" }, void 0, !1, {
                    fileName: "app/routes/tests.$testId.tsx",
                    lineNumber: 189,
                    columnNumber: 27
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/tests.$testId.tsx",
                    lineNumber: 183,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV6("span", { className: selectedAnswer === option.id ? "font-medium" : "", children: option.text }, void 0, !1, {
                    fileName: "app/routes/tests.$testId.tsx",
                    lineNumber: 192,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/tests.$testId.tsx",
                  lineNumber: 182,
                  columnNumber: 21
                }, this)
              },
              index,
              !1,
              {
                fileName: "app/routes/tests.$testId.tsx",
                lineNumber: 173,
                columnNumber: 19
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/tests.$testId.tsx",
              lineNumber: 171,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 156,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxDEV6("div", { className: "text-sm text-gray-500 flex items-center", children: [
              /* @__PURE__ */ jsxDEV6(AlertCircle, { className: "h-4 w-4 mr-1" }, void 0, !1, {
                fileName: "app/routes/tests.$testId.tsx",
                lineNumber: 203,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV6("span", { children: "Select an answer to continue" }, void 0, !1, {
                fileName: "app/routes/tests.$testId.tsx",
                lineNumber: 204,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/tests.$testId.tsx",
              lineNumber: 202,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "button",
              {
                onClick: handleSubmitAnswer,
                disabled: !selectedAnswer || isSubmitting,
                className: `btn btn-primary px-8 ${!selectedAnswer || isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`,
                children: isSubmitting ? "Submitting..." : "Next Question"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/tests.$testId.tsx",
                lineNumber: 207,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/tests.$testId.tsx",
            lineNumber: 201,
            columnNumber: 13
          }, this)
        ]
      },
      currentQuestion?.id,
      !0,
      {
        fileName: "app/routes/tests.$testId.tsx",
        lineNumber: 148,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/tests.$testId.tsx",
      lineNumber: 147,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tests.$testId.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tests.$testId.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
}

// app/routes/tests._index.tsx
var tests_index_exports = {};
__export(tests_index_exports, {
  default: () => TestsIndex,
  loader: () => loader7
});
import { json as json6 } from "@remix-run/node";
import { Link as Link4, useLoaderData as useLoaderData5 } from "@remix-run/react";
import { Clock as Clock5, Users, Award as Award3 } from "lucide-react";
import { motion as motion5 } from "framer-motion";
import { getAllTests as getAllTests2 } from "~/models/test.server";
import { requireUser as requireUser4 } from "~/utils/session.server";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
async function loader7({ request }) {
  await requireUser4(request);
  let tests = await getAllTests2();
  return json6({ tests });
}
function TestsIndex() {
  let { tests } = useLoaderData5();
  return /* @__PURE__ */ jsxDEV7("div", { className: "bg-gray-50 min-h-screen", children: [
    /* @__PURE__ */ jsxDEV7("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsxDEV7("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV7("h1", { className: "text-3xl font-bold text-gray-900", children: "Available Tests" }, void 0, !1, {
        fileName: "app/routes/tests._index.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7(Link4, { to: "/dashboard", className: "btn btn-outline", children: "Back to Dashboard" }, void 0, !1, {
        fileName: "app/routes/tests._index.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tests._index.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tests._index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("main", { className: "max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV7(
      motion5.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxDEV7("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: tests.map((test, index) => /* @__PURE__ */ jsxDEV7(
            motion5.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: index * 0.1 },
              className: "card hover:shadow-lg transition-all duration-300",
              children: /* @__PURE__ */ jsxDEV7("div", { className: "p-6", children: [
                /* @__PURE__ */ jsxDEV7("h2", { className: "text-xl font-semibold mb-2", children: test.title }, void 0, !1, {
                  fileName: "app/routes/tests._index.tsx",
                  lineNumber: 44,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV7("p", { className: "text-gray-600 mb-4", children: test.description }, void 0, !1, {
                  fileName: "app/routes/tests._index.tsx",
                  lineNumber: 45,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center text-sm text-gray-500 mb-4", children: [
                  /* @__PURE__ */ jsxDEV7(Clock5, { className: "h-4 w-4 mr-1" }, void 0, !1, {
                    fileName: "app/routes/tests._index.tsx",
                    lineNumber: 48,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV7("span", { className: "mr-4", children: [
                    test.estimatedTime,
                    " mins"
                  ] }, void 0, !0, {
                    fileName: "app/routes/tests._index.tsx",
                    lineNumber: 49,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV7(Users, { className: "h-4 w-4 mr-1" }, void 0, !1, {
                    fileName: "app/routes/tests._index.tsx",
                    lineNumber: 51,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV7("span", { children: [
                    test.completions,
                    " completed"
                  ] }, void 0, !0, {
                    fileName: "app/routes/tests._index.tsx",
                    lineNumber: 52,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/tests._index.tsx",
                  lineNumber: 47,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV7("div", { className: "flex flex-wrap gap-2 mb-4", children: test.tags.map((tag, i) => /* @__PURE__ */ jsxDEV7("span", { className: "bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded", children: tag }, i, !1, {
                  fileName: "app/routes/tests._index.tsx",
                  lineNumber: 57,
                  columnNumber: 23
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/tests._index.tsx",
                  lineNumber: 55,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV7("div", { className: "mt-4 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsxDEV7(Award3, { className: "h-5 w-5 text-accent-500 mr-1" }, void 0, !1, {
                      fileName: "app/routes/tests._index.tsx",
                      lineNumber: 65,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV7("span", { className: "text-sm font-medium", children: test.difficulty }, void 0, !1, {
                      fileName: "app/routes/tests._index.tsx",
                      lineNumber: 66,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/tests._index.tsx",
                    lineNumber: 64,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV7(Link4, { to: `/tests/${test.id}`, className: "btn btn-primary", children: "Start Test" }, void 0, !1, {
                    fileName: "app/routes/tests._index.tsx",
                    lineNumber: 71,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/tests._index.tsx",
                  lineNumber: 63,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/tests._index.tsx",
                lineNumber: 43,
                columnNumber: 17
              }, this)
            },
            test.id,
            !1,
            {
              fileName: "app/routes/tests._index.tsx",
              lineNumber: 36,
              columnNumber: 15
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/tests._index.tsx",
            lineNumber: 34,
            columnNumber: 11
          }, this),
          tests.length === 0 && /* @__PURE__ */ jsxDEV7("div", { className: "text-center py-12", children: [
            /* @__PURE__ */ jsxDEV7("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No tests available yet" }, void 0, !1, {
              fileName: "app/routes/tests._index.tsx",
              lineNumber: 82,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV7("p", { className: "text-gray-600", children: "Check back soon for new assessments." }, void 0, !1, {
              fileName: "app/routes/tests._index.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/tests._index.tsx",
            lineNumber: 81,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/tests._index.tsx",
        lineNumber: 29,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/tests._index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tests._index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/auth.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  action: () => action4,
  default: () => Login,
  loader: () => loader8
});
import { useState as useState3 } from "react";
import { json as json7, redirect as redirect5 } from "@remix-run/node";
import { Form as Form4, Link as Link5, useActionData as useActionData2, useNavigation as useNavigation2 } from "@remix-run/react";
import { motion as motion6 } from "framer-motion";
import { Brain as Brain4, Eye as Eye2, EyeOff as EyeOff2 } from "lucide-react";
import { createUserSession as createUserSession2, getUserId as getUserId2, loginUser } from "~/utils/session.server";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
async function loader8({ request }) {
  return await getUserId2(request) ? redirect5("/dashboard") : json7({});
}
async function action4({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password");
  if (!email || !password)
    return json7(
      { error: "Email and password are required" },
      { status: 400 }
    );
  try {
    let user = await loginUser(email, password);
    return user ? createUserSession2(user.id, "/dashboard") : json7(
      { error: "Invalid email or password" },
      { status: 401 }
    );
  } catch {
    return json7(
      { error: "An error occurred during login" },
      { status: 500 }
    );
  }
}
function Login() {
  let actionData = useActionData2(), navigation = useNavigation2(), [showPassword, setShowPassword] = useState3(!1), isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ jsxDEV8("div", { className: "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV8(Link5, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxDEV8(Brain4, { className: "h-10 w-10 text-primary-500" }, void 0, !1, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("h2", { className: "mt-6 text-center text-3xl font-bold text-gray-900", children: "Sign in to your account" }, void 0, !1, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "mt-2 text-center text-sm text-gray-600", children: [
        "Or",
        " ",
        /* @__PURE__ */ jsxDEV8(Link5, { to: "/auth/register", className: "font-medium text-primary-600 hover:text-primary-500", children: "create a new account" }, void 0, !1, {
          fileName: "app/routes/auth.login.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth.login.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ jsxDEV8(
      motion6.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
        className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
        children: [
          /* @__PURE__ */ jsxDEV8(Form4, { method: "post", children: [
            actionData?.error && /* @__PURE__ */ jsxDEV8("div", { className: "mb-4 bg-error-50 border border-error-200 text-error-700 px-4 py-3 rounded-md", children: /* @__PURE__ */ jsxDEV8("p", { children: actionData.error }, void 0, !1, {
              fileName: "app/routes/auth.login.tsx",
              lineNumber: 82,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/auth.login.tsx",
              lineNumber: 81,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV8("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxDEV8("label", { htmlFor: "email", className: "label", children: "Email address" }, void 0, !1, {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 87,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV8("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV8(
                "input",
                {
                  id: "email",
                  name: "email",
                  type: "email",
                  autoComplete: "email",
                  required: !0,
                  className: "input"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/auth.login.tsx",
                  lineNumber: 91,
                  columnNumber: 17
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 90,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/auth.login.tsx",
              lineNumber: 86,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV8("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxDEV8("label", { htmlFor: "password", className: "label", children: "Password" }, void 0, !1, {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 103,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV8("div", { className: "mt-1 relative", children: [
                /* @__PURE__ */ jsxDEV8(
                  "input",
                  {
                    id: "password",
                    name: "password",
                    type: showPassword ? "text" : "password",
                    autoComplete: "current-password",
                    required: !0,
                    className: "input pr-10"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/auth.login.tsx",
                    lineNumber: 107,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV8(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowPassword(!showPassword),
                    className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500",
                    children: showPassword ? /* @__PURE__ */ jsxDEV8(EyeOff2, { className: "h-5 w-5" }, void 0, !1, {
                      fileName: "app/routes/auth.login.tsx",
                      lineNumber: 121,
                      columnNumber: 21
                    }, this) : /* @__PURE__ */ jsxDEV8(Eye2, { className: "h-5 w-5" }, void 0, !1, {
                      fileName: "app/routes/auth.login.tsx",
                      lineNumber: 123,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/auth.login.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 106,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/auth.login.tsx",
              lineNumber: 102,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center justify-between mb-6", children: [
              /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV8(
                  "input",
                  {
                    id: "remember_me",
                    name: "remember_me",
                    type: "checkbox",
                    className: "h-4 w-4 text-primary-600 border-gray-300 rounded"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/auth.login.tsx",
                    lineNumber: 131,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV8("label", { htmlFor: "remember_me", className: "ml-2 block text-sm text-gray-700", children: "Remember me" }, void 0, !1, {
                  fileName: "app/routes/auth.login.tsx",
                  lineNumber: 137,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 130,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV8("div", { className: "text-sm", children: /* @__PURE__ */ jsxDEV8(Link5, { to: "/auth/forgot-password", className: "font-medium text-primary-600 hover:text-primary-500", children: "Forgot your password?" }, void 0, !1, {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 143,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 142,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/auth.login.tsx",
              lineNumber: 129,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV8("div", { children: /* @__PURE__ */ jsxDEV8(
              "button",
              {
                type: "submit",
                disabled: isSubmitting,
                className: "btn btn-primary w-full text-center py-2",
                children: isSubmitting ? "Signing in..." : "Sign in"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 150,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/auth.login.tsx",
              lineNumber: 149,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/auth.login.tsx",
            lineNumber: 79,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxDEV8("div", { className: "relative", children: [
              /* @__PURE__ */ jsxDEV8("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxDEV8("div", { className: "w-full border-t border-gray-300" }, void 0, !1, {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 163,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 162,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV8("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ jsxDEV8("span", { className: "px-2 bg-white text-gray-500", children: "Or continue with" }, void 0, !1, {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 166,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/routes/auth.login.tsx",
                lineNumber: 165,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/auth.login.tsx",
              lineNumber: 161,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV8("div", { className: "mt-6 grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxDEV8(
                "button",
                {
                  type: "button",
                  className: "btn btn-outline py-2 px-4 flex justify-center items-center w-full",
                  children: [
                    /* @__PURE__ */ jsxDEV8("svg", { className: "h-5 w-5 mr-2", fill: "currentColor", viewBox: "0 0 24 24", children: [
                      /* @__PURE__ */ jsxDEV8("path", { d: "M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z", fill: "#EA4335" }, void 0, !1, {
                        fileName: "app/routes/auth.login.tsx",
                        lineNumber: 176,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ jsxDEV8("path", { d: "M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z", fill: "#4285F4" }, void 0, !1, {
                        fileName: "app/routes/auth.login.tsx",
                        lineNumber: 177,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ jsxDEV8("path", { d: "M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z", fill: "#FBBC05" }, void 0, !1, {
                        fileName: "app/routes/auth.login.tsx",
                        lineNumber: 178,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ jsxDEV8("path", { d: "M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z", fill: "#34A853" }, void 0, !1, {
                        fileName: "app/routes/auth.login.tsx",
                        lineNumber: 179,
                        columnNumber: 19
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/auth.login.tsx",
                      lineNumber: 175,
                      columnNumber: 17
                    }, this),
                    "Google"
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/auth.login.tsx",
                  lineNumber: 171,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV8(
                "button",
                {
                  type: "button",
                  className: "btn btn-outline py-2 px-4 flex justify-center items-center w-full",
                  children: [
                    /* @__PURE__ */ jsxDEV8("svg", { className: "h-5 w-5 mr-2", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV8("path", { d: "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" }, void 0, !1, {
                      fileName: "app/routes/auth.login.tsx",
                      lineNumber: 189,
                      columnNumber: 19
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/auth.login.tsx",
                      lineNumber: 188,
                      columnNumber: 17
                    }, this),
                    "Twitter"
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/auth.login.tsx",
                  lineNumber: 184,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/auth.login.tsx",
              lineNumber: 170,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/auth.login.tsx",
            lineNumber: 160,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 73,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/auth.login.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.login.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard2,
  loader: () => loader9
});
import { json as json8 } from "@remix-run/node";
import { Link as Link6, useLoaderData as useLoaderData7 } from "@remix-run/react";
import { motion as motion7 } from "framer-motion";
import { Activity as Activity3, Award as Award4, Book as Book2, Brain as Brain5, Lightbulb as Lightbulb2, LineChart as LineChart2, PanelRight as PanelRight2, User as User2 } from "lucide-react";
import { getUserTestSessions as getUserTestSessions2 } from "~/models/test-session.server";
import { getAllTests as getAllTests3 } from "~/models/test.server";
import { requireUser as requireUser5 } from "~/utils/session.server";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
async function loader9({ request }) {
  let user = await requireUser5(request), sessions = await getUserTestSessions2(user.id), tests = await getAllTests3(), completedTests = sessions.filter((s) => s.isComplete).length, averageAbility = sessions.length > 0 ? sessions.reduce((sum, s) => sum + s.currentAbility, 0) / sessions.length : 0, recentSessions = sessions.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 5), takenTestIds = new Set(sessions.map((s) => s.testId)), recommendedTests = tests.filter((test) => !takenTestIds.has(test.id)).slice(0, 3);
  return json8({
    user,
    stats: {
      completedTests,
      averageAbility,
      totalQuestions: sessions.reduce((sum, s) => sum + s.answeredQuestions.length, 0)
    },
    recentSessions,
    recommendedTests
  });
}
function Dashboard2() {
  let { user, stats, recentSessions, recommendedTests } = useLoaderData7(), formatDate = (dateString) => {
    let date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(date);
  };
  return /* @__PURE__ */ jsxDEV9("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxDEV9("div", { className: "flex", children: [
    /* @__PURE__ */ jsxDEV9("aside", { className: "hidden md:flex md:w-64 lg:w-72 flex-col fixed inset-y-0 bg-white shadow-md", children: [
      /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center justify-center h-16 border-b border-gray-200 px-4", children: /* @__PURE__ */ jsxDEV9(Link6, { to: "/", className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxDEV9(Brain5, { className: "h-6 w-6 text-primary-500" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV9("span", { className: "text-xl font-semibold", children: "Adaptive IRT" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV9("nav", { className: "flex-1 pt-4 pb-4 overflow-y-auto", children: [
        /* @__PURE__ */ jsxDEV9("div", { className: "px-4 mb-4", children: /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center space-x-3 px-3 py-3 rounded-lg bg-gray-50", children: [
          /* @__PURE__ */ jsxDEV9("div", { className: "rounded-full bg-primary-100 p-2", children: /* @__PURE__ */ jsxDEV9(User2, { className: "h-5 w-5 text-primary-500" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 72,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 71,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxDEV9("p", { className: "text-sm font-medium text-gray-900 truncate", children: user.name || "User" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 75,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV9("p", { className: "text-xs text-gray-500 truncate", children: user.email }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 78,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { className: "space-y-1 px-2", children: [
          /* @__PURE__ */ jsxDEV9(
            Link6,
            {
              to: "/dashboard",
              className: "flex items-center px-3 py-2 text-sm font-medium text-primary-700 rounded-md bg-primary-50",
              children: [
                /* @__PURE__ */ jsxDEV9(Activity3, { className: "mr-3 h-5 w-5 text-primary-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 90,
                  columnNumber: 17
                }, this),
                "Dashboard"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 86,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV9(
            Link6,
            {
              to: "/tests",
              className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50",
              children: [
                /* @__PURE__ */ jsxDEV9(Book2, { className: "mr-3 h-5 w-5 text-gray-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 98,
                  columnNumber: 17
                }, this),
                "Available Tests"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 94,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV9(
            Link6,
            {
              to: "/dashboard/history",
              className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50",
              children: [
                /* @__PURE__ */ jsxDEV9(LineChart2, { className: "mr-3 h-5 w-5 text-gray-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 106,
                  columnNumber: 17
                }, this),
                "Test History"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 102,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV9(
            Link6,
            {
              to: "/dashboard/profile",
              className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50",
              children: [
                /* @__PURE__ */ jsxDEV9(User2, { className: "mr-3 h-5 w-5 text-gray-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 114,
                  columnNumber: 17
                }, this),
                "Profile"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 110,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { className: "pt-6 px-2", children: [
          /* @__PURE__ */ jsxDEV9("h3", { className: "px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider", children: "Resources" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 120,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "mt-2 space-y-1", children: /* @__PURE__ */ jsxDEV9(
            Link6,
            {
              to: "/help",
              className: "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50",
              children: [
                /* @__PURE__ */ jsxDEV9(Lightbulb2, { className: "mr-3 h-5 w-5 text-gray-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 128,
                  columnNumber: 19
                }, this),
                "Help & Support"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 124,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 123,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV9("div", { className: "p-4 border-t border-gray-200", children: /* @__PURE__ */ jsxDEV9(
        "button",
        {
          onClick: () => {
          },
          className: "flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50",
          children: [
            /* @__PURE__ */ jsxDEV9("svg", { className: "mr-3 h-5 w-5 text-gray-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsxDEV9("path", { fillRule: "evenodd", d: "M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm7 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm2-1a1 1 0 011 1v4a1 1 0 11-2 0V7a1 1 0 011-1z", clipRule: "evenodd" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 143,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 142,
              columnNumber: 15
            }, this),
            "Sign Out"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 136,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 135,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { className: "md:hidden bg-white shadow", children: /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center justify-between h-16 px-4", children: [
      /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV9(Link6, { to: "/", className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxDEV9(Brain5, { className: "h-6 w-6 text-primary-500" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 155,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV9("span", { className: "text-xl font-semibold", children: "Adaptive IRT" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 156,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 154,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 153,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV9(
        "button",
        {
          type: "button",
          className: "p-2 rounded-md text-gray-500 hover:text-primary-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500",
          children: /* @__PURE__ */ jsxDEV9(PanelRight2, { className: "h-6 w-6" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 164,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 160,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 152,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 151,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV9("main", { className: "flex-1 md:ml-64 lg:ml-72", children: /* @__PURE__ */ jsxDEV9("div", { className: "py-6", children: [
      /* @__PURE__ */ jsxDEV9("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8", children: [
        /* @__PURE__ */ jsxDEV9(
          motion7.h1,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3 },
            className: "text-2xl md:text-3xl font-bold text-gray-900",
            children: [
              "Welcome back, ",
              user.name || "User"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 173,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV9(
          motion7.p,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3, delay: 0.1 },
            className: "mt-1 text-gray-500",
            children: "Here's an overview of your testing progress and recommendations."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 181,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 172,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV9("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8", children: [
        /* @__PURE__ */ jsxDEV9("div", { className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxDEV9(
            motion7.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.2 },
              className: "card p-5",
              children: /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV9("div", { className: "flex-shrink-0 rounded-md bg-primary-100 p-3", children: /* @__PURE__ */ jsxDEV9(Book2, { className: "h-6 w-6 text-primary-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 202,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 201,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV9("div", { className: "ml-5", children: [
                  /* @__PURE__ */ jsxDEV9("p", { className: "text-sm font-medium text-gray-500", children: "Tests Completed" }, void 0, !1, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 205,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV9("p", { className: "mt-1 text-3xl font-semibold text-gray-900", children: stats.completedTests }, void 0, !1, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 206,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 204,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 200,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 194,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV9(
            motion7.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.3 },
              className: "card p-5",
              children: /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV9("div", { className: "flex-shrink-0 rounded-md bg-accent-100 p-3", children: /* @__PURE__ */ jsxDEV9(Award4, { className: "h-6 w-6 text-accent-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 219,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 218,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV9("div", { className: "ml-5", children: [
                  /* @__PURE__ */ jsxDEV9("p", { className: "text-sm font-medium text-gray-500", children: "Average Ability" }, void 0, !1, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 222,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV9("p", { className: "mt-1 text-3xl font-semibold text-gray-900", children: stats.averageAbility.toFixed(2) }, void 0, !1, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 223,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 221,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 217,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 211,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV9(
            motion7.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.4 },
              className: "card p-5",
              children: /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV9("div", { className: "flex-shrink-0 rounded-md bg-secondary-100 p-3", children: /* @__PURE__ */ jsxDEV9(Activity3, { className: "h-6 w-6 text-secondary-500" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 236,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 235,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV9("div", { className: "ml-5", children: [
                  /* @__PURE__ */ jsxDEV9("p", { className: "text-sm font-medium text-gray-500", children: "Questions Answered" }, void 0, !1, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 239,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV9("p", { className: "mt-1 text-3xl font-semibold text-gray-900", children: stats.totalQuestions }, void 0, !1, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 240,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 238,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 234,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 228,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 193,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { className: "mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxDEV9(
            motion7.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.5 },
              children: [
                /* @__PURE__ */ jsxDEV9("h2", { className: "text-xl font-bold text-gray-900 mb-4", children: "Recent Activity" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 253,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV9("div", { className: "card overflow-hidden", children: recentSessions.length > 0 ? /* @__PURE__ */ jsxDEV9("ul", { className: "divide-y divide-gray-200", children: recentSessions.map((session) => /* @__PURE__ */ jsxDEV9("li", { children: /* @__PURE__ */ jsxDEV9(
                  Link6,
                  {
                    to: `/tests/${session.testId}/results?sessionId=${session.id}`,
                    className: "block hover:bg-gray-50",
                    children: /* @__PURE__ */ jsxDEV9("div", { className: "px-6 py-4", children: [
                      /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsxDEV9("p", { className: "text-sm font-medium text-primary-600 truncate", children: session.testTitle }, void 0, !1, {
                          fileName: "app/routes/dashboard.tsx",
                          lineNumber: 265,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ jsxDEV9("div", { className: "ml-2 flex-shrink-0 flex", children: /* @__PURE__ */ jsxDEV9(
                          "p",
                          {
                            className: `px-2 py-1 text-xs rounded-full
                                      ${session.isComplete ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`,
                            children: session.isComplete ? "Complete" : "In Progress"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/dashboard.tsx",
                            lineNumber: 269,
                            columnNumber: 37
                          },
                          this
                        ) }, void 0, !1, {
                          fileName: "app/routes/dashboard.tsx",
                          lineNumber: 268,
                          columnNumber: 35
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/routes/dashboard.tsx",
                        lineNumber: 264,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ jsxDEV9("div", { className: "mt-2 flex justify-between", children: [
                        /* @__PURE__ */ jsxDEV9("div", { className: "sm:flex", children: [
                          /* @__PURE__ */ jsxDEV9("p", { className: "flex items-center text-sm text-gray-500", children: [
                            /* @__PURE__ */ jsxDEV9(Award4, { className: "flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" }, void 0, !1, {
                              fileName: "app/routes/dashboard.tsx",
                              lineNumber: 282,
                              columnNumber: 39
                            }, this),
                            "Ability: ",
                            session.currentAbility.toFixed(2)
                          ] }, void 0, !0, {
                            fileName: "app/routes/dashboard.tsx",
                            lineNumber: 281,
                            columnNumber: 37
                          }, this),
                          /* @__PURE__ */ jsxDEV9("p", { className: "mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6", children: [
                            /* @__PURE__ */ jsxDEV9(Activity3, { className: "flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" }, void 0, !1, {
                              fileName: "app/routes/dashboard.tsx",
                              lineNumber: 286,
                              columnNumber: 39
                            }, this),
                            "Questions: ",
                            session.answeredQuestions.length
                          ] }, void 0, !0, {
                            fileName: "app/routes/dashboard.tsx",
                            lineNumber: 285,
                            columnNumber: 37
                          }, this)
                        ] }, void 0, !0, {
                          fileName: "app/routes/dashboard.tsx",
                          lineNumber: 280,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ jsxDEV9("p", { className: "text-sm text-gray-500", children: formatDate(session.updatedAt) }, void 0, !1, {
                          fileName: "app/routes/dashboard.tsx",
                          lineNumber: 290,
                          columnNumber: 35
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/routes/dashboard.tsx",
                        lineNumber: 279,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/dashboard.tsx",
                      lineNumber: 263,
                      columnNumber: 31
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 259,
                    columnNumber: 29
                  },
                  this
                ) }, session.id, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 258,
                  columnNumber: 27
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 256,
                  columnNumber: 23
                }, this) : /* @__PURE__ */ jsxDEV9("div", { className: "p-6 text-center", children: [
                  /* @__PURE__ */ jsxDEV9("p", { className: "text-gray-500", children: "You haven't taken any tests yet." }, void 0, !1, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 301,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV9(Link6, { to: "/tests", className: "btn btn-primary mt-4", children: "Start Your First Test" }, void 0, !1, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 302,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 300,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 254,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 248,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV9(
            motion7.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.6 },
              children: [
                /* @__PURE__ */ jsxDEV9("h2", { className: "text-xl font-bold text-gray-900 mb-4", children: "Recommended Tests" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 315,
                  columnNumber: 19
                }, this),
                recommendedTests.length > 0 ? /* @__PURE__ */ jsxDEV9("div", { className: "space-y-4", children: recommendedTests.map((test) => /* @__PURE__ */ jsxDEV9("div", { className: "card p-5 hover:shadow-md transition-shadow", children: [
                  /* @__PURE__ */ jsxDEV9("h3", { className: "text-lg font-medium mb-1", children: test.title }, void 0, !1, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 320,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV9("p", { className: "text-sm text-gray-500 mb-3", children: test.description }, void 0, !1, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 321,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV9("div", { className: "flex flex-wrap gap-2 mb-4", children: test.tags.map((tag, i) => /* @__PURE__ */ jsxDEV9(
                    "span",
                    {
                      className: "bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded",
                      children: tag
                    },
                    i,
                    !1,
                    {
                      fileName: "app/routes/dashboard.tsx",
                      lineNumber: 324,
                      columnNumber: 31
                    },
                    this
                  )) }, void 0, !1, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 322,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV9("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center text-sm text-gray-500", children: [
                      /* @__PURE__ */ jsxDEV9(Clock, { className: "h-4 w-4 mr-1" }, void 0, !1, {
                        fileName: "app/routes/dashboard.tsx",
                        lineNumber: 334,
                        columnNumber: 31
                      }, this),
                      /* @__PURE__ */ jsxDEV9("span", { children: [
                        "Est. ",
                        test.estimatedTime,
                        " mins"
                      ] }, void 0, !0, {
                        fileName: "app/routes/dashboard.tsx",
                        lineNumber: 335,
                        columnNumber: 31
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/dashboard.tsx",
                      lineNumber: 333,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ jsxDEV9(Link6, { to: `/tests/${test.id}`, className: "btn btn-primary", children: "Start Test" }, void 0, !1, {
                      fileName: "app/routes/dashboard.tsx",
                      lineNumber: 337,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 332,
                    columnNumber: 27
                  }, this)
                ] }, test.id, !0, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 319,
                  columnNumber: 25
                }, this)) }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 317,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ jsxDEV9("div", { className: "card p-6 text-center", children: [
                  /* @__PURE__ */ jsxDEV9("p", { className: "text-gray-500", children: "You've completed all available tests!" }, void 0, !1, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 346,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV9(Link6, { to: "/tests", className: "btn btn-primary mt-4", children: "View All Tests" }, void 0, !1, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 347,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 345,
                  columnNumber: 21
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 310,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 247,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 191,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 171,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 170,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 58,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader10,
  meta: () => meta
});
import { json as json9 } from "@remix-run/node";
import { Link as Link7, useLoaderData as useLoaderData8 } from "@remix-run/react";
import { Brain as Brain6, Target, BarChart4, Users as Users2 } from "lucide-react";
import { motion as motion8 } from "framer-motion";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Adaptive IRT Test App" },
  { name: "description", content: "An adaptive testing platform using Item Response Theory" }
];
async function loader10() {
  return json9({
    stats: {
      totalTests: 42,
      totalQuestions: 256,
      activeUsers: 189,
      averageTime: "18 min"
    }
  });
}
function Index() {
  let { stats } = useLoaderData8(), features = [
    {
      icon: /* @__PURE__ */ jsxDEV10(Brain6, { className: "h-6 w-6 text-primary-500" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      title: "Adaptive Intelligence",
      description: "Our tests adapt to your skill level in real-time, providing a personalized experience."
    },
    {
      icon: /* @__PURE__ */ jsxDEV10(Target, { className: "h-6 w-6 text-primary-500" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      title: "Precise Assessment",
      description: "Item Response Theory ensures highly accurate measurement of abilities and knowledge."
    },
    {
      icon: /* @__PURE__ */ jsxDEV10(BarChart4, { className: "h-6 w-6 text-primary-500" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      title: "Detailed Analytics",
      description: "Track progress and understand strengths and weaknesses with comprehensive reports."
    },
    {
      icon: /* @__PURE__ */ jsxDEV10(Users2, { className: "h-6 w-6 text-primary-500" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this),
      title: "For Educators & Students",
      description: "Create custom assessments or focus on your learning journey with adaptive technology."
    }
  ], container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }, item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  return /* @__PURE__ */ jsxDEV10("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxDEV10("header", { className: "bg-gradient-to-r from-primary-600 to-accent-500 text-white", children: /* @__PURE__ */ jsxDEV10("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24", children: /* @__PURE__ */ jsxDEV10(
      motion8.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "max-w-3xl",
        children: [
          /* @__PURE__ */ jsxDEV10("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight mb-4", children: "Adaptive Testing Platform" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV10("p", { className: "text-xl md:text-2xl mb-8 opacity-90", children: "Leverage the power of Item Response Theory for precise, efficient, and personalized assessments." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV10("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxDEV10(Link7, { to: "/tests", className: "btn btn-accent px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300", children: "Start Testing" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV10(Link7, { to: "/auth/login", className: "btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300", children: "Login" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 86,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxDEV10("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV10("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Revolutionize Testing with IRT" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("p", { className: "max-w-2xl mx-auto text-lg text-gray-600", children: "Item Response Theory delivers more accurate results with fewer questions, adapting to each test-taker's ability level in real-time." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10(
        motion8.div,
        {
          variants: container,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: !0 },
          className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
          children: features.map((feature, index) => /* @__PURE__ */ jsxDEV10(
            motion8.div,
            {
              variants: item,
              className: "card p-6 hover:shadow-lg transition-shadow duration-300",
              children: [
                /* @__PURE__ */ jsxDEV10("div", { className: "rounded-full bg-primary-50 p-3 inline-flex mb-4", children: feature.icon }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 118,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV10("h3", { className: "text-xl font-semibold mb-2", children: feature.title }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 121,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV10("p", { className: "text-gray-600", children: feature.description }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 122,
                  columnNumber: 17
                }, this)
              ]
            },
            index,
            !0,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 113,
              columnNumber: 15
            },
            this
          ))
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 105,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("section", { className: "bg-gray-50 py-16", children: /* @__PURE__ */ jsxDEV10("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV10("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8", children: [
      /* @__PURE__ */ jsxDEV10(
        motion8.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.3 },
          className: "card p-6 text-center",
          children: [
            /* @__PURE__ */ jsxDEV10("p", { className: "text-3xl md:text-4xl font-bold text-primary-500", children: stats.totalTests }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 140,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV10("p", { className: "text-gray-600 mt-1", children: "Tests Created" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 141,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 133,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        motion8.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.3, delay: 0.1 },
          className: "card p-6 text-center",
          children: [
            /* @__PURE__ */ jsxDEV10("p", { className: "text-3xl md:text-4xl font-bold text-primary-500", children: stats.totalQuestions }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 151,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV10("p", { className: "text-gray-600 mt-1", children: "Questions" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 152,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 144,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        motion8.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.3, delay: 0.2 },
          className: "card p-6 text-center",
          children: [
            /* @__PURE__ */ jsxDEV10("p", { className: "text-3xl md:text-4xl font-bold text-primary-500", children: stats.activeUsers }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 162,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV10("p", { className: "text-gray-600 mt-1", children: "Active Users" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 163,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 155,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        motion8.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.3, delay: 0.3 },
          className: "card p-6 text-center",
          children: [
            /* @__PURE__ */ jsxDEV10("p", { className: "text-3xl md:text-4xl font-bold text-primary-500", children: stats.averageTime }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 173,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV10("p", { className: "text-gray-600 mt-1", children: "Avg. Test Time" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 174,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 166,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 132,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("section", { className: "bg-accent-500 text-white py-16", children: /* @__PURE__ */ jsxDEV10("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxDEV10("h2", { className: "text-3xl font-bold mb-4", children: "Ready to Transform Your Testing?" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 183,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10("p", { className: "max-w-2xl mx-auto text-lg mb-8 opacity-90", children: "Get started now with our adaptive testing platform and experience the power of Item Response Theory." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 184,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10(Link7, { to: "/auth/register", className: "btn bg-white text-accent-600 hover:bg-gray-100 px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300", children: "Create Free Account" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 182,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 181,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("footer", { className: "bg-gray-900 text-gray-400 py-12", children: /* @__PURE__ */ jsxDEV10("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxDEV10("div", { children: [
          /* @__PURE__ */ jsxDEV10("h3", { className: "text-white text-lg font-medium mb-4", children: "Adaptive IRT" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 198,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("p", { className: "text-sm", children: "Modern testing platform using Item Response Theory to deliver precise, efficient, and personalized assessments." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 199,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 197,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { children: [
          /* @__PURE__ */ jsxDEV10("h3", { className: "text-white text-lg font-medium mb-4", children: "Platform" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 206,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(Link7, { to: "/tests", className: "hover:text-white transition", children: "Tests" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 208,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 208,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(Link7, { to: "/features", className: "hover:text-white transition", children: "Features" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 209,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 209,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(Link7, { to: "/pricing", className: "hover:text-white transition", children: "Pricing" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 210,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 210,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(Link7, { to: "/about", className: "hover:text-white transition", children: "About" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 211,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 211,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 205,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { children: [
          /* @__PURE__ */ jsxDEV10("h3", { className: "text-white text-lg font-medium mb-4", children: "Resources" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 216,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(Link7, { to: "/docs", className: "hover:text-white transition", children: "Documentation" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 218,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 218,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(Link7, { to: "/api", className: "hover:text-white transition", children: "API" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 219,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 219,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(Link7, { to: "/blog", className: "hover:text-white transition", children: "Blog" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 220,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 220,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(Link7, { to: "/help", className: "hover:text-white transition", children: "Help Center" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 221,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 221,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 217,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 215,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { children: [
          /* @__PURE__ */ jsxDEV10("h3", { className: "text-white text-lg font-medium mb-4", children: "Legal" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 226,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(Link7, { to: "/terms", className: "hover:text-white transition", children: "Terms of Service" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 228,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 228,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(Link7, { to: "/privacy", className: "hover:text-white transition", children: "Privacy Policy" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 229,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 229,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(Link7, { to: "/cookies", className: "hover:text-white transition", children: "Cookie Policy" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 230,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 230,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 227,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 225,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 196,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center", children: [
        /* @__PURE__ */ jsxDEV10("p", { className: "text-sm", children: "\xA9 2025 Adaptive IRT. All rights reserved." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 236,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "flex space-x-6 mt-4 md:mt-0", children: [
          /* @__PURE__ */ jsxDEV10("a", { href: "#", className: "text-gray-400 hover:text-white transition", children: [
            /* @__PURE__ */ jsxDEV10("span", { className: "sr-only", children: "Twitter" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 239,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV10("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV10("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 241,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 240,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 238,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("a", { href: "#", className: "text-gray-400 hover:text-white transition", children: [
            /* @__PURE__ */ jsxDEV10("span", { className: "sr-only", children: "GitHub" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 245,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV10("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV10("path", { fillRule: "evenodd", d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", clipRule: "evenodd" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 247,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 246,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 244,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV10("a", { href: "#", className: "text-gray-400 hover:text-white transition", children: [
            /* @__PURE__ */ jsxDEV10("span", { className: "sr-only", children: "LinkedIn" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 251,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV10("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV10("path", { fillRule: "evenodd", d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", clipRule: "evenodd" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 253,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 252,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 250,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 237,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 235,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 195,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 194,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-UEN35WJK.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-LHG5PAY4.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U5E2PCIK.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-UBLDEMIO.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-GJQE4MO6.js", imports: ["/build/_shared/chunk-2BIIUQRO.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-XY44XCL2.js", imports: ["/build/_shared/chunk-V22J52NZ.js", "/build/_shared/chunk-2BIIUQRO.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.register": { id: "routes/auth.register", parentId: "root", path: "auth/register", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.register-CGHQXNWA.js", imports: ["/build/_shared/chunk-V22J52NZ.js", "/build/_shared/chunk-2BIIUQRO.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-VJPW6RUU.js", imports: ["/build/_shared/chunk-POVMGWPA.js", "/build/_shared/chunk-22VNYELM.js", "/build/_shared/chunk-V22J52NZ.js", "/build/_shared/chunk-2BIIUQRO.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard._index": { id: "routes/dashboard._index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard._index-C7V2ZWT4.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard.logout": { id: "routes/dashboard.logout", parentId: "routes/dashboard", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.logout-MNQQUWU4.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/tests.$testId": { id: "routes/tests.$testId", parentId: "root", path: "tests/:testId", index: void 0, caseSensitive: void 0, module: "/build/routes/tests.$testId-YDGPLLY5.js", imports: ["/build/_shared/chunk-3NOK24W4.js", "/build/_shared/chunk-POVMGWPA.js", "/build/_shared/chunk-22VNYELM.js", "/build/_shared/chunk-V22J52NZ.js", "/build/_shared/chunk-2BIIUQRO.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/tests.$testId.results": { id: "routes/tests.$testId.results", parentId: "routes/tests.$testId", path: "results", index: void 0, caseSensitive: void 0, module: "/build/routes/tests.$testId.results-GRU4BISW.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/tests._index": { id: "routes/tests._index", parentId: "root", path: "tests", index: !0, caseSensitive: void 0, module: "/build/routes/tests._index-WCSG6JBF.js", imports: ["/build/_shared/chunk-22VNYELM.js", "/build/_shared/chunk-V22J52NZ.js", "/build/_shared/chunk-2BIIUQRO.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "7a77cb4e", hmr: { runtime: "/build/_shared/chunk-U5E2PCIK.js", timestamp: 1747716791823 }, url: "/build/manifest-7A77CB4E.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/tests.$testId.results": {
    id: "routes/tests.$testId.results",
    parentId: "routes/tests.$testId",
    path: "results",
    index: void 0,
    caseSensitive: void 0,
    module: tests_testId_results_exports
  },
  "routes/dashboard._index": {
    id: "routes/dashboard._index",
    parentId: "routes/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_index_exports
  },
  "routes/dashboard.logout": {
    id: "routes/dashboard.logout",
    parentId: "routes/dashboard",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_logout_exports
  },
  "routes/auth.register": {
    id: "routes/auth.register",
    parentId: "root",
    path: "auth/register",
    index: void 0,
    caseSensitive: void 0,
    module: auth_register_exports
  },
  "routes/tests.$testId": {
    id: "routes/tests.$testId",
    parentId: "root",
    path: "tests/:testId",
    index: void 0,
    caseSensitive: void 0,
    module: tests_testId_exports
  },
  "routes/tests._index": {
    id: "routes/tests._index",
    parentId: "root",
    path: "tests",
    index: !0,
    caseSensitive: void 0,
    module: tests_index_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map

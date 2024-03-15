var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var ReactDOMServer = __toESM(require("react-dom/server")), import_react = require("@remix-run/react");

// app/src/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/src/theme.ts
var import_styles = require("@mui/material/styles"), import_colors = require("@mui/material/colors"), theme = (0, import_styles.createTheme)({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: import_colors.red.A400
    }
  }
}), theme_default = theme;

// app/entry.server.tsx
var import_CssBaseline = __toESM(require("@mui/material/CssBaseline")), import_styles2 = require("@mui/material/styles"), import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache);
  function MuiRemixServer() {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_styles2.ThemeProvider, { theme: theme_default, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_CssBaseline.default, {}, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/entry.server.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this);
  }
  let html = ReactDOMServer.renderToString(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MuiRemixServer, {}, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 34,
    columnNumber: 46
  }, this)), { styles } = extractCriticalToChunks(html), stylesHTML = "";
  styles.forEach(({ key, ids, css }) => {
    let newStyleTag = `<style data-emotion="${`${key} ${ids.join(" ")}`}">${css}</style>`;
    stylesHTML = `${stylesHTML}${newStyleTag}`;
  });
  let markup = html.replace(
    /<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/,
    `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App
});
var React2 = __toESM(require("react")), import_react3 = require("@remix-run/react"), import_react4 = require("@emotion/react"), import_material = require("@mui/material");

// app/src/ClientStyleContext.tsx
var React = __toESM(require("react")), ClientStyleContext_default = React.createContext({
  reset: () => {
  }
});

// app/src/Layout.tsx
var import_Container = __toESM(require("@mui/material/Container")), import_Box = __toESM(require("@mui/material/Box"));

// app/src/ProTip.tsx
var import_Link = __toESM(require("@mui/material/Link")), import_SvgIcon = __toESM(require("@mui/material/SvgIcon")), import_Typography = __toESM(require("@mui/material/Typography")), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function LightBulbIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_SvgIcon.default, { ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" }, void 0, !1, {
    fileName: "app/src/ProTip.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/src/ProTip.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
function ProTip() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_Typography.default, { sx: { mt: 6, mb: 3, color: "text.secondary" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LightBulbIcon, { sx: { mr: 1, verticalAlign: "middle" } }, void 0, !1, {
      fileName: "app/src/ProTip.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    "Pro tip: See more ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_Link.default, { href: "https://mui.com/material-ui/getting-started/templates/", children: "templates" }, void 0, !1, {
      fileName: "app/src/ProTip.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    " in the Material\xA0UI documentation."
  ] }, void 0, !0, {
    fileName: "app/src/ProTip.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/src/Copyright.tsx
var import_Typography2 = __toESM(require("@mui/material/Typography")), import_Link2 = __toESM(require("@mui/material/Link")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Copyright() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_Typography2.default, { variant: "body2", color: "text.secondary", align: "center", children: [
    "Copyright \xA9 ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_Link2.default, { color: "inherit", href: "https://mui.com/", children: "Your Website" }, void 0, !1, {
      fileName: "app/src/Copyright.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    " ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    "."
  ] }, void 0, !0, {
    fileName: "app/src/Copyright.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/src/Layout.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Container.default, { maxWidth: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Box.default, { sx: { my: 4 }, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProTip, {}, void 0, !1, {
      fileName: "app/src/Layout.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Copyright, {}, void 0, !1, {
      fileName: "app/src/Layout.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/src/Layout.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/src/Layout.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), Document = (0, import_react4.withEmotionCache)(({ children, title }, emotionCache) => {
  let clientStyleData = React2.useContext(ClientStyleContext_default);
  return (0, import_material.unstable_useEnhancedEffect)(() => {
    emotionCache.sheet.container = document.head;
    let tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush(), tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    }), clientStyleData.reset();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "theme-color", content: theme_default.palette.primary.main }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 18
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "emotion-insertion-point", content: "emotion-insertion-point" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 75,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 74,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react3.useRouteError)();
  if ((0, import_react3.isRouteErrorResponse)(error)) {
    let message;
    switch (error.status) {
      case 401:
        message = /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 89,
          columnNumber: 19
        }, this);
        break;
      case 404:
        message = /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that does not exist." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 92,
          columnNumber: 19
        }, this);
        break;
      default:
        throw new Error(error.data || error.statusText);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { title: `${error.status} ${error.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: [
        error.status,
        ": ",
        error.statusText
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this),
      message
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this);
  }
  return error instanceof Error ? (console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "There was an error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 117,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 118,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 119,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Hey, developer, you should replace this with what you want your users to see." }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 120,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 116,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 115,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 114,
    columnNumber: 7
  }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 127,
    columnNumber: 10
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
var React3 = __toESM(require("react")), import_react5 = require("@remix-run/react"), import_Typography3 = __toESM(require("@mui/material/Typography")), import_Link3 = __toESM(require("@mui/material/Link")), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Remix Starter" },
  { name: "description", content: "Welcome to remix!" }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(React3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_Typography3.default, { variant: "h4", component: "h1", sx: { mb: 2 }, children: "Material UI Remix in TypeScript example" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_Link3.default, { to: "/about", color: "secondary", component: import_react5.Link, children: "Go to the about page" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
var React4 = __toESM(require("react")), import_react6 = require("@remix-run/react"), import_Typography4 = __toESM(require("@mui/material/Typography")), import_Button = __toESM(require("@mui/material/Button")), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(React4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_Typography4.default, { variant: "h4", component: "h1", sx: { mb: 2 }, children: "Material UI Remix in TypeScript example" }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_Button.default, { variant: "contained", component: import_react6.Link, to: "/", children: "Go to the main page" }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-PX4C3UA5.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-2I6C7HIR.js", "/build/_shared/chunk-MVCYDWQZ.js", "/build/_shared/chunk-N4N74OHA.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-ITTLVO2K.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7EUMTNJ7.js", imports: ["/build/_shared/chunk-2SERIGV2.js", "/build/_shared/chunk-FMWBOWAV.js", "/build/_shared/chunk-SCVB2HY2.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-YB47ZV5P.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-A4KACLBH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "c5f9d9d7", hmr: { runtime: "/build/_shared\\chunk-ITTLVO2K.js", timestamp: 1710475032124 }, url: "/build/manifest-C5F9D9D7.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map

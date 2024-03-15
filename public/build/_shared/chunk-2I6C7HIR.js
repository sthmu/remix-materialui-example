import {
  ThemeProvider_default,
  _extends,
  _objectWithoutPropertiesLoose,
  createTheme_default,
  identifier_default,
  init_extends,
  init_objectWithoutPropertiesLoose,
  red_default,
  require_prop_types
} from "/build/_shared/chunk-MVCYDWQZ.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  createHotContext
} from "/build/_shared/chunk-ITTLVO2K.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@mui/material/styles/ThemeProvider.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_jsx_runtime = __toESM(require_jsx_runtime());
"use client";
var _excluded = ["theme"];
function ThemeProvider(_ref) {
  let {
    theme: themeInput
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const scopedTheme = themeInput[identifier_default];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider_default, _extends({}, props, {
    themeId: scopedTheme ? identifier_default : void 0,
    theme: scopedTheme || themeInput
  }));
}
true ? ThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: import_prop_types.default.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.func]).isRequired
} : void 0;

// node_modules/@mui/material/styles/index.js
"use client";

// app/src/ClientStyleContext.tsx
var React2 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\src\\ClientStyleContext.tsx"
  );
  import.meta.hot.lastModified = "1710474377828.6604";
}
var ClientStyleContext_default = React2.createContext({
  reset: () => {
  }
});

// app/src/theme.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\src\\theme.ts"
  );
  import.meta.hot.lastModified = "1710474377705.3042";
}
var theme = createTheme_default({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red_default.A400
    }
  }
});
var theme_default = theme;

export {
  ThemeProvider,
  ClientStyleContext_default,
  theme_default
};
//# sourceMappingURL=/build/_shared/chunk-2I6C7HIR.js.map

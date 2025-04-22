import { b1 as inject, b2 as isRef, i as createElementBlock, g as openBlock, k as createBaseVNode, d as defineComponent, q as computed, j as createVNode, e as createBlock, f as createCommentVNode, m as unref, t as toDisplayString, J as withModifiers, _ as _export_sfc, b3 as toRefs, r as ref, o as onMounted, n as normalizeClass, x as renderSlot, b4 as normalizeProps, b5 as guardReactiveProps, b6 as resolveDynamicComponent, b7 as mergeProps, b8 as VueMarkdown, F as Fragment, D as renderList, b9 as markdownLink, ba as useFileDialog, bb as onUnmounted, B as normalizeStyle, aC as withDirectives, bc as vModelText, H as withKeys, w as withCtx, I as watch, h as resolveComponent, l as createTextVNode, bd as N8nText, be as useClipboard, a as useToast, c as useI18n$1, aS as N8nTooltip, bf as N8nButton, aU as _sfc_main$h, aW as createSlots, aL as useStorage, a$ as watchEffect, y as onBeforeUnmount, K as useDebounce, bg as provide, bh as useProvideTooltipAppendTo, bi as IsInPiPWindowSymbol, bj as CHAT_TRIGGER_NODE_TYPE, bk as MANUAL_CHAT_TRIGGER_NODE_TYPE, bl as NodeConnectionTypes, bm as v4, bn as get, bo as isEmpty, bp as usePinnedData, ak as useMessage, al as MODAL_CONFIRM, bq as CHAIN_SUMMARIZATION_LANGCHAIN_NODE_TYPE, br as AI_SUBCATEGORY, bs as AI_CATEGORY_AGENTS, bt as AI_CATEGORY_CHAINS, bu as AI_CODE_NODE_TYPE, bv as getNodeInputs, bw as getConnectionTypes, bx as getNodeOutputs, U as useWorkflowsStore, by as useNodeTypesStore, a2 as useCanvasStore, b as useRouter, bz as useNodeHelpers, bA as useRunWorkflow, V as VIEWS, a_ as LOGS_PANEL_STATE, aZ as useTemplateRef, bB as _sfc_main$j, bC as I18nT, bD as N8nIcon, au as useNDVStore, bE as ElTree, bF as N8nRadioButtons, ai as useTelemetry, bG as uniqBy, aT as N8nLink, ax as useLocalStorage, bH as LOG_DETAILS_CONTENT, b0 as N8nResizeWrapper, bI as useStyles } from "./index-Dhp_73Xq.js";
import { u as useClearExecutionButtonVisible } from "./useClearExecutionButtonVisible-B4hcICd8.js";
import { H as HighlightJS, f as formatTokenUsageCount, _ as _sfc_main$i, g as getSubtreeTotalConsumedTokens, a as getTotalConsumedTokens, R as RunData, c as createLogEntries, b as findLogEntryToAutoSelect } from "./RunData-rNYibGmm.js";
import { t as toTime, a as toDayMonth } from "./dateFormatter-fQZrLdBW.js";
import { u as upperFirst } from "./useCanvasOperations-QksuGSs1.js";
function bash(hljs) {
  const regex = hljs.regex;
  const VAR = {};
  const BRACED_VAR = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [VAR]
      }
      // default values
    ]
  };
  Object.assign(VAR, {
    className: "variable",
    variants: [
      { begin: regex.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        `(?![\\w\\d])(?![$])`
      ) },
      BRACED_VAR
    ]
  });
  const SUBST = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  const HERE_DOC = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      hljs.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  };
  const QUOTE_STRING = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VAR,
      SUBST
    ]
  };
  SUBST.contains.push(QUOTE_STRING);
  const ESCAPED_QUOTE = {
    match: /\\"/
  };
  const APOS_STRING = {
    className: "string",
    begin: /'/,
    end: /'/
  };
  const ESCAPED_APOS = {
    match: /\\'/
  };
  const ARITHMETIC = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      hljs.NUMBER_MODE,
      VAR
    ]
  };
  const SH_LIKE_SHELLS = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ];
  const KNOWN_SHEBANG = hljs.SHEBANG({
    binary: `(${SH_LIKE_SHELLS.join("|")})`,
    relevance: 10
  });
  const FUNCTION = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: true,
    contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  };
  const KEYWORDS2 = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "function",
    "select"
  ];
  const LITERALS2 = [
    "true",
    "false"
  ];
  const PATH_MODE = { match: /(\/[a-z._-]+)+/ };
  const SHELL_BUILT_INS = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ];
  const BASH_BUILT_INS = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ];
  const ZSH_BUILT_INS = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ];
  const GNU_CORE_UTILS = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: ["sh"],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: KEYWORDS2,
      literal: LITERALS2,
      built_in: [
        ...SHELL_BUILT_INS,
        ...BASH_BUILT_INS,
        // Shell modifiers
        "set",
        "shopt",
        ...ZSH_BUILT_INS,
        ...GNU_CORE_UTILS
      ]
    },
    contains: [
      KNOWN_SHEBANG,
      // to catch known shells and boost relevancy
      hljs.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      FUNCTION,
      ARITHMETIC,
      hljs.HASH_COMMENT_MODE,
      HERE_DOC,
      PATH_MODE,
      QUOTE_STRING,
      ESCAPED_QUOTE,
      APOS_STRING,
      ESCAPED_APOS,
      VAR
    ]
  };
}
const IDENT_RE$1 = "[A-Za-z$_][0-9A-Za-z$_]*";
const KEYWORDS$1 = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
];
const LITERALS$1 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];
const TYPES$1 = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
];
const ERROR_TYPES$1 = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];
const BUILT_IN_GLOBALS$1 = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];
const BUILT_IN_VARIABLES$1 = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
];
const BUILT_INS$1 = [].concat(
  BUILT_IN_GLOBALS$1,
  TYPES$1,
  ERROR_TYPES$1
);
function javascript$1(hljs) {
  const regex = hljs.regex;
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };
  const IDENT_RE$1$1 = IDENT_RE$1;
  const FRAGMENT = {
    begin: "<>",
    end: "</>"
  };
  const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        nextChar === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        nextChar === ","
      ) {
        response.ignoreMatch();
        return;
      }
      if (nextChar === ">") {
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
      let m;
      const afterMatch = match.input.substring(afterMatchIndex);
      if (m = afterMatch.match(/^\s*=/)) {
        response.ignoreMatch();
        return;
      }
      if (m = afterMatch.match(/^\s+extends\s+/)) {
        if (m.index === 0) {
          response.ignoreMatch();
          return;
        }
      }
    }
  };
  const KEYWORDS$1$1 = {
    $pattern: IDENT_RE$1,
    keyword: KEYWORDS$1,
    literal: LITERALS$1,
    built_in: BUILT_INS$1,
    "variable.language": BUILT_IN_VARIABLES$1
  };
  const decimalDigits = "[0-9](_?[0-9])*";
  const frac = `\\.(${decimalDigits})`;
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  };
  const SUBST = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: KEYWORDS$1$1,
    contains: []
    // defined later
  };
  const HTML_TEMPLATE = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "xml"
    }
  };
  const CSS_TEMPLATE = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "css"
    }
  };
  const GRAPHQL_TEMPLATE = {
    begin: "gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "graphql"
    }
  };
  const TEMPLATE_STRING = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
    /\/\*\*(?!\/)/,
    "\\*/",
    {
      relevance: 0,
      contains: [
        {
          begin: "(?=@[A-Za-z]+)",
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            },
            {
              className: "type",
              begin: "\\{",
              end: "\\}",
              excludeEnd: true,
              excludeBegin: true,
              relevance: 0
            },
            {
              className: "variable",
              begin: IDENT_RE$1$1 + "(?=\\s*(-)|$)",
              endsParent: true,
              relevance: 0
            },
            // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    GRAPHQL_TEMPLATE,
    TEMPLATE_STRING,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    NUMBER
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS$1$1,
    contains: [
      "self"
    ].concat(SUBST_INTERNALS)
  });
  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: KEYWORDS$1$1,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$1$1,
    contains: PARAMS_CONTAINS
  };
  const CLASS_OR_EXTENDS = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1$1,
          /\s+/,
          /extends/,
          /\s+/,
          regex.concat(IDENT_RE$1$1, "(", regex.concat(/\./, IDENT_RE$1$1), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1$1
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  };
  const CLASS_REFERENCE = {
    relevance: 0,
    match: regex.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...TYPES$1,
        ...ERROR_TYPES$1
      ]
    }
  };
  const USE_STRICT = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  };
  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          IDENT_RE$1$1,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [PARAMS],
    illegal: /%/
  };
  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function noneOf(list) {
    return regex.concat("(?!", list.join("|"), ")");
  }
  const FUNCTION_CALL = {
    match: regex.concat(
      /\b/,
      noneOf([
        ...BUILT_IN_GLOBALS$1,
        "super",
        "import"
      ]),
      IDENT_RE$1$1,
      regex.lookahead(/\(/)
    ),
    className: "title.function",
    relevance: 0
  };
  const PROPERTY_ACCESS = {
    begin: regex.concat(/\./, regex.lookahead(
      regex.concat(IDENT_RE$1$1, /(?![0-9A-Za-z$_(])/)
    )),
    end: IDENT_RE$1$1,
    excludeBegin: true,
    keywords: "prototype",
    className: "property",
    relevance: 0
  };
  const GETTER_OR_SETTER = {
    match: [
      /get|set/,
      /\s+/,
      IDENT_RE$1$1,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      PARAMS
    ]
  };
  const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/,
      /\s+/,
      IDENT_RE$1$1,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      regex.lookahead(FUNC_LEAD_IN_RE)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: KEYWORDS$1$1,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      USE_STRICT,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER,
      CLASS_REFERENCE,
      {
        className: "attr",
        begin: IDENT_RE$1$1 + regex.lookahead(":"),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      {
        // "value" container
        begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          COMMENT,
          hljs.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$1$1,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      FUNCTION_DEFINITION,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1$1, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + IDENT_RE$1$1,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [PARAMS]
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function python(hljs) {
  const regex = hljs.regex;
  const IDENT_RE2 = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u");
  const RESERVED_WORDS = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ];
  const BUILT_INS2 = [
    "__import__",
    "abs",
    "all",
    "any",
    "ascii",
    "bin",
    "bool",
    "breakpoint",
    "bytearray",
    "bytes",
    "callable",
    "chr",
    "classmethod",
    "compile",
    "complex",
    "delattr",
    "dict",
    "dir",
    "divmod",
    "enumerate",
    "eval",
    "exec",
    "filter",
    "float",
    "format",
    "frozenset",
    "getattr",
    "globals",
    "hasattr",
    "hash",
    "help",
    "hex",
    "id",
    "input",
    "int",
    "isinstance",
    "issubclass",
    "iter",
    "len",
    "list",
    "locals",
    "map",
    "max",
    "memoryview",
    "min",
    "next",
    "object",
    "oct",
    "open",
    "ord",
    "pow",
    "print",
    "property",
    "range",
    "repr",
    "reversed",
    "round",
    "set",
    "setattr",
    "slice",
    "sorted",
    "staticmethod",
    "str",
    "sum",
    "super",
    "tuple",
    "type",
    "vars",
    "zip"
  ];
  const LITERALS2 = [
    "__debug__",
    "Ellipsis",
    "False",
    "None",
    "NotImplemented",
    "True"
  ];
  const TYPES2 = [
    "Any",
    "Callable",
    "Coroutine",
    "Dict",
    "List",
    "Literal",
    "Generic",
    "Optional",
    "Sequence",
    "Set",
    "Tuple",
    "Type",
    "Union"
  ];
  const KEYWORDS2 = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: RESERVED_WORDS,
    built_in: BUILT_INS2,
    literal: LITERALS2,
    type: TYPES2
  };
  const PROMPT = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  };
  const SUBST = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS2,
    illegal: /#/
  };
  const LITERAL_BRACKET = {
    begin: /\{\{/,
    relevance: 0
  };
  const STRING = {
    className: "string",
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };
  const digitpart = "[0-9](_?[0-9])*";
  const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
  const lookahead = `\\b|${RESERVED_WORDS.join("|")}`;
  const NUMBER = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead})`
      },
      {
        begin: `(${pointfloat})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${lookahead})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${lookahead})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${digitpart})[jJ](?=${lookahead})`
      }
    ]
  };
  const COMMENT_TYPE = {
    className: "comment",
    begin: regex.lookahead(/# type:/),
    end: /$/,
    keywords: KEYWORDS2,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: true
      }
    ]
  };
  const PARAMS = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: true
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS2,
        contains: [
          "self",
          PROMPT,
          NUMBER,
          STRING,
          hljs.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  SUBST.contains = [
    STRING,
    NUMBER,
    PROMPT
  ];
  return {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: true,
    keywords: KEYWORDS2,
    illegal: /(<\/|\?)|=>/,
    contains: [
      PROMPT,
      NUMBER,
      {
        // very common convention
        begin: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      STRING,
      COMMENT_TYPE,
      hljs.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          IDENT_RE2
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [PARAMS]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              IDENT_RE2,
              /\s*/,
              /\(\s*/,
              IDENT_RE2,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              IDENT_RE2
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          NUMBER,
          PARAMS,
          STRING
        ]
      }
    ]
  };
}
const IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
const KEYWORDS = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
];
const LITERALS = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];
const TYPES = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
];
const ERROR_TYPES = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];
const BUILT_IN_GLOBALS = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];
const BUILT_IN_VARIABLES = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
];
const BUILT_INS = [].concat(
  BUILT_IN_GLOBALS,
  TYPES,
  ERROR_TYPES
);
function javascript(hljs) {
  const regex = hljs.regex;
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };
  const IDENT_RE$12 = IDENT_RE;
  const FRAGMENT = {
    begin: "<>",
    end: "</>"
  };
  const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        nextChar === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        nextChar === ","
      ) {
        response.ignoreMatch();
        return;
      }
      if (nextChar === ">") {
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
      let m;
      const afterMatch = match.input.substring(afterMatchIndex);
      if (m = afterMatch.match(/^\s*=/)) {
        response.ignoreMatch();
        return;
      }
      if (m = afterMatch.match(/^\s+extends\s+/)) {
        if (m.index === 0) {
          response.ignoreMatch();
          return;
        }
      }
    }
  };
  const KEYWORDS$12 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS,
    literal: LITERALS,
    built_in: BUILT_INS,
    "variable.language": BUILT_IN_VARIABLES
  };
  const decimalDigits = "[0-9](_?[0-9])*";
  const frac = `\\.(${decimalDigits})`;
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  };
  const SUBST = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: KEYWORDS$12,
    contains: []
    // defined later
  };
  const HTML_TEMPLATE = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "xml"
    }
  };
  const CSS_TEMPLATE = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "css"
    }
  };
  const GRAPHQL_TEMPLATE = {
    begin: "gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "graphql"
    }
  };
  const TEMPLATE_STRING = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
    /\/\*\*(?!\/)/,
    "\\*/",
    {
      relevance: 0,
      contains: [
        {
          begin: "(?=@[A-Za-z]+)",
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            },
            {
              className: "type",
              begin: "\\{",
              end: "\\}",
              excludeEnd: true,
              excludeBegin: true,
              relevance: 0
            },
            {
              className: "variable",
              begin: IDENT_RE$12 + "(?=\\s*(-)|$)",
              endsParent: true,
              relevance: 0
            },
            // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    GRAPHQL_TEMPLATE,
    TEMPLATE_STRING,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    NUMBER
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS$12,
    contains: [
      "self"
    ].concat(SUBST_INTERNALS)
  });
  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: KEYWORDS$12,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$12,
    contains: PARAMS_CONTAINS
  };
  const CLASS_OR_EXTENDS = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$12,
          /\s+/,
          /extends/,
          /\s+/,
          regex.concat(IDENT_RE$12, "(", regex.concat(/\./, IDENT_RE$12), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$12
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  };
  const CLASS_REFERENCE = {
    relevance: 0,
    match: regex.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...TYPES,
        ...ERROR_TYPES
      ]
    }
  };
  const USE_STRICT = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  };
  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          IDENT_RE$12,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [PARAMS],
    illegal: /%/
  };
  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function noneOf(list) {
    return regex.concat("(?!", list.join("|"), ")");
  }
  const FUNCTION_CALL = {
    match: regex.concat(
      /\b/,
      noneOf([
        ...BUILT_IN_GLOBALS,
        "super",
        "import"
      ]),
      IDENT_RE$12,
      regex.lookahead(/\(/)
    ),
    className: "title.function",
    relevance: 0
  };
  const PROPERTY_ACCESS = {
    begin: regex.concat(/\./, regex.lookahead(
      regex.concat(IDENT_RE$12, /(?![0-9A-Za-z$_(])/)
    )),
    end: IDENT_RE$12,
    excludeBegin: true,
    keywords: "prototype",
    className: "property",
    relevance: 0
  };
  const GETTER_OR_SETTER = {
    match: [
      /get|set/,
      /\s+/,
      IDENT_RE$12,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      PARAMS
    ]
  };
  const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/,
      /\s+/,
      IDENT_RE$12,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      regex.lookahead(FUNC_LEAD_IN_RE)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: KEYWORDS$12,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      USE_STRICT,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER,
      CLASS_REFERENCE,
      {
        className: "attr",
        begin: IDENT_RE$12 + regex.lookahead(":"),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      {
        // "value" container
        begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          COMMENT,
          hljs.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$12,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      FUNCTION_DEFINITION,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$12, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + IDENT_RE$12,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [PARAMS]
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function typescript(hljs) {
  const tsLanguage = javascript(hljs);
  const IDENT_RE$12 = IDENT_RE;
  const TYPES2 = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ];
  const NAMESPACE = {
    beginKeywords: "namespace",
    end: /\{/,
    excludeEnd: true,
    contains: [tsLanguage.exports.CLASS_REFERENCE]
  };
  const INTERFACE = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: true,
    keywords: {
      keyword: "interface extends",
      built_in: TYPES2
    },
    contains: [tsLanguage.exports.CLASS_REFERENCE]
  };
  const USE_STRICT = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  };
  const TS_SPECIFIC_KEYWORDS = [
    "type",
    "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override"
  ];
  const KEYWORDS$12 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS.concat(TS_SPECIFIC_KEYWORDS),
    literal: LITERALS,
    built_in: BUILT_INS.concat(TYPES2),
    "variable.language": BUILT_IN_VARIABLES
  };
  const DECORATOR = {
    className: "meta",
    begin: "@" + IDENT_RE$12
  };
  const swapMode = (mode, label, replacement) => {
    const indx = mode.contains.findIndex((m) => m.label === label);
    if (indx === -1) {
      throw new Error("can not find mode to replace");
    }
    mode.contains.splice(indx, 1, replacement);
  };
  Object.assign(tsLanguage.keywords, KEYWORDS$12);
  tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
  tsLanguage.contains = tsLanguage.contains.concat([
    DECORATOR,
    NAMESPACE,
    INTERFACE
  ]);
  swapMode(tsLanguage, "shebang", hljs.SHEBANG());
  swapMode(tsLanguage, "use_strict", USE_STRICT);
  const functionDeclaration = tsLanguage.contains.find((m) => m.label === "func.def");
  functionDeclaration.relevance = 0;
  Object.assign(tsLanguage, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  });
  return tsLanguage;
}
function xml(hljs) {
  const regex = hljs.regex;
  const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
  const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
  const XML_ENTITIES = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  };
  const XML_META_KEYWORDS = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  };
  const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
    begin: /\(/,
    end: /\)/
  });
  const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: "string" });
  const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" });
  const TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: true,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [XML_ENTITIES]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [XML_ENTITIES]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: true,
    unicodeRegex: true,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          XML_META_KEYWORDS,
          QUOTE_META_STRING_MODE,
          APOS_META_STRING_MODE,
          XML_META_PAR_KEYWORDS,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  XML_META_KEYWORDS,
                  XML_META_PAR_KEYWORDS,
                  QUOTE_META_STRING_MODE,
                  APOS_META_STRING_MODE
                ]
              }
            ]
          }
        ]
      },
      hljs.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      XML_ENTITIES,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              QUOTE_META_STRING_MODE
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/script>/,
          returnEnd: true,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: regex.concat(
          /</,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            // <tag/>
            // <tag>
            // <tag ...
            regex.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0,
            starts: TAG_INTERNALS
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: regex.concat(
          /<\//,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: true
          }
        ]
      }
    ]
  };
}
const ChatSymbol = "Chat";
const ChatOptionsSymbol = "ChatOptions";
function useChat() {
  return inject(ChatSymbol);
}
function useOptions() {
  const options = inject(ChatOptionsSymbol);
  return {
    options
  };
}
function useI18n() {
  const { options } = useOptions();
  const language = options?.defaultLanguage ?? "en";
  function t(key) {
    const val = options?.i18n?.[language]?.[key];
    if (isRef(val)) {
      return val.value;
    }
    return val ?? key;
  }
  function te(key) {
    return !!options?.i18n?.[language]?.[key];
  }
  return { t, te };
}
const _hoisted_1$c = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
    }, null, -1)
  ]));
}
const IconDelete = { name: "mdi-closeThick", render: render$7 };
const _hoisted_1$b = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m0 18h12v-8l-4 4l-2-2zM8 9a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
    }, null, -1)
  ]));
}
const IconFileImage = { name: "mdi-fileImage", render: render$6 };
const _hoisted_1$a = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 11h-2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2c.4 0 .7.1 1 .3V11h3zm0-4V3.5L18.5 9z"
    }, null, -1)
  ]));
}
const IconFileMusic = { name: "mdi-fileMusic", render: render$5 };
const _hoisted_1$9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2zm3-4v-2H6v2z"
    }, null, -1)
  ]));
}
const IconFileText = { name: "mdi-fileText", render: render$4 };
const _hoisted_1$8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m11 17v-6l-3 2.2V13H7v6h7v-2.2z"
    }, null, -1)
  ]));
}
const IconFileVideo = { name: "mdi-fileVideo", render: render$3 };
const _hoisted_1$7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
    }, null, -1)
  ]));
}
const IconPreview = { name: "mdi-openInNew", render: render$2 };
const _hoisted_1$6 = { class: "chat-file-name" };
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "ChatFile",
  props: {
    file: {},
    isRemovable: { type: Boolean },
    isPreviewable: { type: Boolean }
  },
  emits: ["remove"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const iconMapper = {
      document: IconFileText,
      audio: IconFileMusic,
      image: IconFileImage,
      video: IconFileVideo
    };
    const TypeIcon = computed(() => {
      const type = props.file?.type.split("/")[0];
      return iconMapper[type] || IconFileText;
    });
    function onClick() {
      if (props.isPreviewable) {
        window.open(URL.createObjectURL(props.file));
      }
    }
    function onDelete() {
      emit("remove", props.file);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "chat-file",
        onClick
      }, [
        createVNode(unref(TypeIcon)),
        createBaseVNode("p", _hoisted_1$6, toDisplayString(_ctx.file.name), 1),
        _ctx.isRemovable ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "chat-file-delete",
          onClick: withModifiers(onDelete, ["stop"])
        }, [
          createVNode(unref(IconDelete))
        ])) : _ctx.isPreviewable ? (openBlock(), createBlock(unref(IconPreview), {
          key: 1,
          class: "chat-file-preview"
        })) : createCommentVNode("", true)
      ]);
    };
  }
});
const ChatFile = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-70b9370d"]]);
const _hoisted_1$5 = {
  key: 0,
  class: "chat-message-actions"
};
const _hoisted_2$2 = {
  key: 2,
  class: "chat-message-files"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Message",
  props: {
    message: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    HighlightJS.registerLanguage("javascript", javascript$1);
    HighlightJS.registerLanguage("typescript", typescript);
    HighlightJS.registerLanguage("python", python);
    HighlightJS.registerLanguage("xml", xml);
    HighlightJS.registerLanguage("bash", bash);
    const { message } = toRefs(props);
    const { options } = useOptions();
    const messageContainer = ref(null);
    const fileSources = ref({});
    const messageText = computed(() => {
      return message.value.text || "&lt;Empty response&gt;";
    });
    const classes = computed(() => {
      return {
        "chat-message-from-user": message.value.sender === "user",
        "chat-message-from-bot": message.value.sender === "bot",
        "chat-message-transparent": message.value.transparent === true
      };
    });
    const linksNewTabPlugin = (vueMarkdownItInstance) => {
      vueMarkdownItInstance.use(markdownLink, {
        attrs: {
          target: "_blank",
          rel: "noopener"
        }
      });
    };
    const scrollToView = () => {
      if (messageContainer.value?.scrollIntoView) {
        messageContainer.value.scrollIntoView({
          block: "start"
        });
      }
    };
    const markdownOptions = {
      highlight(str, lang) {
        if (lang && HighlightJS.getLanguage(lang)) {
          try {
            return HighlightJS.highlight(str, { language: lang }).value;
          } catch {
          }
        }
        return "";
      }
    };
    const messageComponents = { ...options?.messageComponents ?? {} };
    __expose({ scrollToView });
    const readFileAsDataURL = async (file) => await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    onMounted(async () => {
      if (message.value.files) {
        for (const file of message.value.files) {
          try {
            const dataURL = await readFileAsDataURL(file);
            fileSources.value[file.name] = dataURL;
          } catch (error2) {
            console.error("Error reading file:", error2);
          }
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "messageContainer",
        ref: messageContainer,
        class: normalizeClass(["chat-message", classes.value])
      }, [
        _ctx.$slots.beforeMessage ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
          renderSlot(_ctx.$slots, "beforeMessage", normalizeProps(guardReactiveProps({ message: unref(message) })))
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, () => [
          unref(message).type === "component" && messageComponents[unref(message).key] ? (openBlock(), createBlock(resolveDynamicComponent(messageComponents[unref(message).key]), normalizeProps(mergeProps({ key: 0 }, unref(message).arguments)), null, 16)) : (openBlock(), createBlock(unref(VueMarkdown), {
            key: 1,
            class: "chat-message-markdown",
            source: messageText.value,
            options: markdownOptions,
            plugins: [linksNewTabPlugin]
          }, null, 8, ["source", "plugins"])),
          (unref(message).files ?? []).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(message).files ?? [], (file) => {
              return openBlock(), createElementBlock("div", {
                key: file.name,
                class: "chat-message-file"
              }, [
                createVNode(ChatFile, {
                  file,
                  "is-removable": false,
                  "is-previewable": true
                }, null, 8, ["file"])
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const _hoisted_1$4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M16.5 6v11.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5A2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4a4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V6z"
    }, null, -1)
  ]));
}
const IconPaperclip = { name: "mdi-paperclip", render: render$1 };
const _hoisted_1$3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "m2 21l21-9L2 3v7l15 2l-15 2z"
    }, null, -1)
  ]));
}
const IconSend = { name: "mdi-send", render };
function createEventBus() {
  const handlers = /* @__PURE__ */ new Map();
  function off(eventName, fn) {
    const eventFns = handlers.get(eventName);
    if (eventFns) {
      eventFns.splice(eventFns.indexOf(fn) >>> 0, 1);
    }
  }
  function on(eventName, fn) {
    let eventFns = handlers.get(eventName);
    if (!eventFns) {
      eventFns = [fn];
    } else {
      eventFns.push(fn);
    }
    handlers.set(eventName, eventFns);
    return () => off(eventName, fn);
  }
  function emit(eventName, event) {
    const eventFns = handlers.get(eventName);
    if (eventFns) {
      eventFns.slice().forEach(async (handler) => {
        await handler(event);
      });
    }
  }
  return {
    on,
    off,
    emit
  };
}
const chatEventBus = createEventBus();
const _hoisted_1$2 = { class: "chat-inputs" };
const _hoisted_2$1 = {
  key: 0,
  class: "chat-input-left-panel"
};
const _hoisted_3$1 = ["disabled", "placeholder"];
const _hoisted_4 = { class: "chat-inputs-controls" };
const _hoisted_5 = ["disabled"];
const _hoisted_6 = ["disabled"];
const _hoisted_7 = {
  key: 0,
  class: "chat-files"
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Input",
  props: {
    placeholder: { default: "inputPlaceholder" }
  },
  emits: ["arrowKeyDown"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { t } = useI18n();
    const emit = __emit;
    const { options } = useOptions();
    const chatStore = useChat();
    const { waitingForResponse } = chatStore;
    const files = ref(null);
    const chatTextArea = ref(null);
    const input = ref("");
    const isSubmitting = ref(false);
    const resizeObserver = ref(null);
    const isSubmitDisabled = computed(() => {
      return input.value === "" || unref(waitingForResponse) || options.disabled?.value === true;
    });
    const isInputDisabled = computed(() => options.disabled?.value === true);
    const isFileUploadDisabled = computed(
      () => isFileUploadAllowed.value && unref(waitingForResponse) && !options.disabled?.value
    );
    const isFileUploadAllowed = computed(() => unref(options.allowFileUploads) === true);
    const allowedFileTypes = computed(() => unref(options.allowedFilesMimeTypes));
    const styleVars = computed(() => {
      const controlsCount = isFileUploadAllowed.value ? 2 : 1;
      return {
        "--controls-count": controlsCount
      };
    });
    const {
      open: openFileDialog,
      reset: resetFileDialog,
      onChange
    } = useFileDialog({
      multiple: true,
      reset: false
    });
    onChange((newFiles) => {
      if (!newFiles) return;
      const newFilesDT = new DataTransfer();
      if (files.value) {
        for (let i = 0; i < files.value.length; i++) {
          newFilesDT.items.add(files.value[i]);
        }
      }
      for (let i = 0; i < newFiles.length; i++) {
        newFilesDT.items.add(newFiles[i]);
      }
      files.value = newFilesDT.files;
    });
    onMounted(() => {
      chatEventBus.on("focusInput", focusChatInput);
      chatEventBus.on("blurInput", blurChatInput);
      chatEventBus.on("setInputValue", setInputValue);
      if (chatTextArea.value) {
        resizeObserver.value = new ResizeObserver((entries) => {
          for (const entry of entries) {
            if (entry.target === chatTextArea.value) {
              adjustTextAreaHeight();
            }
          }
        });
        resizeObserver.value.observe(chatTextArea.value);
      }
    });
    onUnmounted(() => {
      chatEventBus.off("focusInput", focusChatInput);
      chatEventBus.off("blurInput", blurChatInput);
      chatEventBus.off("setInputValue", setInputValue);
      if (resizeObserver.value) {
        resizeObserver.value.disconnect();
        resizeObserver.value = null;
      }
    });
    function blurChatInput() {
      if (chatTextArea.value) {
        chatTextArea.value.blur();
      }
    }
    function focusChatInput() {
      if (chatTextArea.value) {
        chatTextArea.value.focus();
      }
    }
    function setInputValue(value) {
      input.value = value;
      focusChatInput();
    }
    async function onSubmit(event) {
      event.preventDefault();
      if (isSubmitDisabled.value) {
        return;
      }
      const messageText = input.value;
      input.value = "";
      isSubmitting.value = true;
      await chatStore.sendMessage(messageText, Array.from(files.value ?? []));
      isSubmitting.value = false;
      resetFileDialog();
      files.value = null;
    }
    async function onSubmitKeydown(event) {
      if (event.shiftKey) {
        return;
      }
      await onSubmit(event);
      adjustTextAreaHeight();
    }
    function onFileRemove(file) {
      if (!files.value) return;
      const dt = new DataTransfer();
      for (let i = 0; i < files.value.length; i++) {
        const currentFile = files.value[i];
        if (file.name !== currentFile.name) dt.items.add(currentFile);
      }
      resetFileDialog();
      files.value = dt.files;
    }
    function onKeyDown(event) {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
        emit("arrowKeyDown", {
          key: event.key,
          currentInputValue: input.value
        });
      }
    }
    function onOpenFileDialog() {
      if (isFileUploadDisabled.value) return;
      openFileDialog({ accept: unref(allowedFileTypes) });
    }
    function adjustTextAreaHeight() {
      const textarea = chatTextArea.value;
      if (!textarea) return;
      textarea.style.height = "var(--chat--textarea--height)";
      const newHeight = Math.min(textarea.scrollHeight, 480);
      textarea.style.height = `${newHeight}px`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "chat-input",
        style: normalizeStyle(styleVars.value),
        onKeydown: withModifiers(onKeyDown, ["stop"])
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          _ctx.$slots.leftPanel ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
            renderSlot(_ctx.$slots, "leftPanel", {}, void 0, true)
          ])) : createCommentVNode("", true),
          withDirectives(createBaseVNode("textarea", {
            ref_key: "chatTextArea",
            ref: chatTextArea,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
            "data-test-id": "chat-input",
            disabled: isInputDisabled.value,
            placeholder: unref(t)(props.placeholder),
            onKeydown: withKeys(onSubmitKeydown, ["enter"]),
            onInput: adjustTextAreaHeight,
            onMousedown: adjustTextAreaHeight,
            onFocus: adjustTextAreaHeight
          }, null, 40, _hoisted_3$1), [
            [vModelText, input.value]
          ]),
          createBaseVNode("div", _hoisted_4, [
            isFileUploadAllowed.value ? (openBlock(), createElementBlock("button", {
              key: 0,
              disabled: isFileUploadDisabled.value,
              class: "chat-input-file-button",
              "data-test-id": "chat-attach-file-button",
              onClick: onOpenFileDialog
            }, [
              createVNode(unref(IconPaperclip), {
                height: "24",
                width: "24"
              })
            ], 8, _hoisted_5)) : createCommentVNode("", true),
            createBaseVNode("button", {
              disabled: isSubmitDisabled.value,
              class: "chat-input-send-button",
              onClick: onSubmit
            }, [
              createVNode(unref(IconSend), {
                height: "24",
                width: "24"
              })
            ], 8, _hoisted_6)
          ])
        ]),
        files.value?.length && !isSubmitting.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(files.value, (file) => {
            return openBlock(), createBlock(ChatFile, {
              key: file.name,
              file,
              "is-removable": true,
              "is-previewable": true,
              onRemove: onFileRemove
            }, null, 8, ["file"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 36);
    };
  }
});
const ChatInput = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-f0e5731e"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "MessageTyping",
  props: {
    animation: { default: "bouncing" }
  },
  setup(__props) {
    const props = __props;
    const message = {
      id: "typing",
      text: "",
      sender: "bot"
    };
    const messageContainer = ref();
    const classes = computed(() => {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "chat-message-typing": true,
        [`chat-message-typing-animation-${props.animation}`]: true
      };
    });
    onMounted(() => {
      messageContainer.value?.scrollToView();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$f), {
        ref_key: "messageContainer",
        ref: messageContainer,
        class: normalizeClass(classes.value),
        message,
        "data-test-id": "chat-message-typing"
      }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "chat-message-typing-body" }, [
            createBaseVNode("span", { class: "chat-message-typing-circle" }),
            createBaseVNode("span", { class: "chat-message-typing-circle" }),
            createBaseVNode("span", { class: "chat-message-typing-circle" })
          ], -1)
        ])),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "empty-container"
};
const _hoisted_2 = {
  class: "empty",
  "data-test-id": "chat-messages-empty"
};
const _hoisted_3 = {
  key: 1,
  class: "chat-messages-list"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "MessagesList",
  props: {
    messages: {},
    emptyText: {}
  },
  setup(__props) {
    const chatStore = useChat();
    const messageComponents = ref([]);
    const { initialMessages, waitingForResponse } = chatStore;
    watch(
      () => messageComponents.value.length,
      () => {
        const lastMessageComponent = messageComponents.value[messageComponents.value.length - 1];
        if (lastMessageComponent) {
          lastMessageComponent.scrollToView();
        }
      }
    );
    return (_ctx, _cache) => {
      const _component_N8nIcon = resolveComponent("N8nIcon");
      const _component_N8nText = resolveComponent("N8nText");
      return _ctx.emptyText && unref(initialMessages).length === 0 && _ctx.messages.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_N8nIcon, {
            icon: "comment",
            size: "large",
            class: "emptyIcon"
          }),
          createVNode(_component_N8nText, {
            tag: "p",
            size: "medium",
            color: "text-base"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.emptyText), 1)
            ]),
            _: 1
          })
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(initialMessages), (initialMessage) => {
          return openBlock(), createBlock(_sfc_main$f, {
            key: initialMessage.id,
            message: initialMessage
          }, null, 8, ["message"]);
        }), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.messages, (message) => {
          return openBlock(), createBlock(_sfc_main$f, {
            key: message.id,
            ref_for: true,
            ref_key: "messageComponents",
            ref: messageComponents,
            message
          }, {
            beforeMessage: withCtx(({ message: message2 }) => [
              renderSlot(_ctx.$slots, "beforeMessage", mergeProps({ ref_for: true }, { message: message2 }))
            ]),
            _: 2
          }, 1032, ["message"]);
        }), 128)),
        unref(waitingForResponse) ? (openBlock(), createBlock(_sfc_main$d, { key: 0 })) : createCommentVNode("", true)
      ]));
    };
  }
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "MessageOptionTooltip",
  props: {
    placement: {
      type: String,
      default: "top"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_n8n_icon = resolveComponent("n8n-icon");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(_component_n8n_tooltip, { placement: __props.placement }, {
          content: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          default: withCtx(() => [
            createBaseVNode("span", {
              class: normalizeClass(_ctx.$style.icon)
            }, [
              createVNode(_component_n8n_icon, {
                icon: "info",
                size: "xsmall"
              })
            ], 2)
          ]),
          _: 3
        }, 8, ["placement"])
      ], 2);
    };
  }
});
const container$8 = "_container_pqtqf_123";
const icon$3 = "_icon_pqtqf_129";
const style0$a = {
  container: container$8,
  icon: icon$3
};
const cssModules$a = {
  "$style": style0$a
};
const MessageOptionTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__cssModules", cssModules$a]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "MessageOptionAction",
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      default: "top"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_n8n_icon = resolveComponent("n8n-icon");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(_component_n8n_tooltip, { placement: __props.placement }, {
          content: withCtx(() => [
            createTextVNode(toDisplayString(__props.label), 1)
          ]),
          default: withCtx(() => [
            createVNode(_component_n8n_icon, {
              class: normalizeClass(_ctx.$style.icon),
              icon: __props.icon,
              size: "xsmall",
              onClick: _ctx.$attrs.onClick
            }, null, 8, ["class", "icon", "onClick"])
          ]),
          _: 1
        }, 8, ["placement"])
      ], 2);
    };
  }
});
const container$7 = "_container_u1r1u_123";
const icon$2 = "_icon_u1r1u_129";
const style0$9 = {
  container: container$7,
  icon: icon$2
};
const cssModules$9 = {
  "$style": style0$9
};
const MessageOptionAction = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__cssModules", cssModules$9]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "PanelHeader",
  props: {
    title: {}
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(_ctx.$style.container),
        onClick: _cache[0] || (_cache[0] = ($event) => emit("click"))
      }, [
        createVNode(unref(N8nText), {
          class: normalizeClass(_ctx.$style.title),
          bold: true,
          size: "small"
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"]),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.actions)
        }, [
          renderSlot(_ctx.$slots, "actions")
        ], 2)
      ], 2);
    };
  }
});
const container$6 = "_container_w45gq_123";
const title$2 = "_title_w45gq_144";
const actions$1 = "_actions_w45gq_152";
const style0$8 = {
  container: container$6,
  title: title$2,
  actions: actions$1
};
const cssModules$8 = {
  "$style": style0$8
};
const PanelHeader = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__cssModules", cssModules$8]]);
const _hoisted_1 = ["onClick"];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ChatMessagesPanel",
  props: {
    pastChatMessages: {},
    messages: {},
    sessionId: {},
    showCloseButton: { type: Boolean },
    isOpen: { type: Boolean, default: true },
    isReadOnly: { type: Boolean, default: false },
    isNewLogsEnabled: { type: Boolean, default: false }
  },
  emits: ["displayExecution", "sendMessage", "refreshSession", "close", "clickHeader"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const clipboard = useClipboard();
    const locale = useI18n$1();
    const toast = useToast();
    const previousMessageIndex = ref(0);
    const sessionIdText = computed(
      () => locale.baseText("chat.window.session.id", {
        interpolate: { id: `${props.sessionId.slice(0, 5)}...` }
      })
    );
    const inputPlaceholder = computed(() => {
      if (props.messages.length > 0) {
        return locale.baseText("chat.window.chat.placeholder");
      }
      return locale.baseText("chat.window.chat.placeholderPristine");
    });
    function isTextMessage(message) {
      return message.type === "text" || !message.type;
    }
    function repostMessage(message) {
      void sendMessage(message.text);
    }
    function reuseMessage(message) {
      chatEventBus.emit("setInputValue", message.text);
    }
    function sendMessage(message) {
      previousMessageIndex.value = 0;
      emit("sendMessage", message);
    }
    function onRefreshSession() {
      emit("refreshSession");
    }
    function onArrowKeyDown({ currentInputValue, key }) {
      const pastMessages = props.pastChatMessages;
      const isCurrentInputEmptyOrMatch = currentInputValue.length === 0 || pastMessages.includes(currentInputValue);
      if (isCurrentInputEmptyOrMatch && (key === "ArrowUp" || key === "ArrowDown")) {
        if (pastMessages.length === 0) return;
        chatEventBus.emit("blurInput");
        if (pastMessages.length === 1) {
          previousMessageIndex.value = 0;
        } else {
          if (key === "ArrowUp") {
            if (currentInputValue.length === 0 && previousMessageIndex.value === 0) {
              previousMessageIndex.value = pastMessages.length - 1;
            } else {
              previousMessageIndex.value = previousMessageIndex.value === 0 ? pastMessages.length - 1 : previousMessageIndex.value - 1;
            }
          } else if (key === "ArrowDown") {
            previousMessageIndex.value = previousMessageIndex.value === pastMessages.length - 1 ? 0 : previousMessageIndex.value + 1;
          }
        }
        const selectedMessage = pastMessages[previousMessageIndex.value];
        chatEventBus.emit("setInputValue", selectedMessage);
        chatEventBus.emit("focusInput");
      }
      if (!isCurrentInputEmptyOrMatch) {
        previousMessageIndex.value = 0;
      }
    }
    async function copySessionId() {
      await clipboard.copy(props.sessionId);
      toast.showMessage({
        title: locale.baseText("generic.copiedToClipboard"),
        message: "",
        type: "success"
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.chat),
        "data-test-id": "workflow-lm-chat-dialog"
      }, [
        _ctx.isNewLogsEnabled ? (openBlock(), createBlock(PanelHeader, {
          key: 0,
          "data-test-id": "chat-header",
          title: unref(locale).baseText("chat.window.title"),
          onClick: _cache[0] || (_cache[0] = ($event) => emit("clickHeader"))
        }, {
          actions: withCtx(() => [
            unref(clipboard).isSupported.value && !_ctx.isReadOnly ? (openBlock(), createBlock(unref(N8nTooltip), { key: 0 }, {
              content: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.sessionId) + " ", 1),
                _cache[5] || (_cache[5] = createBaseVNode("br", null, null, -1)),
                createTextVNode(" " + toDisplayString(unref(locale).baseText("chat.window.session.id.copy")), 1)
              ]),
              default: withCtx(() => [
                createVNode(unref(N8nButton), {
                  "data-test-id": "chat-session-id",
                  type: "secondary",
                  size: "mini",
                  class: normalizeClass(_ctx.$style.newHeaderButton),
                  onClick: withModifiers(copySessionId, ["stop"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(sessionIdText.value), 1)
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            _ctx.messages.length > 0 && !_ctx.isReadOnly ? (openBlock(), createBlock(unref(N8nTooltip), {
              key: 1,
              content: unref(locale).baseText("chat.window.session.resetSession")
            }, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$h), {
                  class: normalizeClass(_ctx.$style.newHeaderButton),
                  "data-test-id": "refresh-session-button",
                  outline: "",
                  type: "secondary",
                  size: "small",
                  "icon-size": "medium",
                  icon: "undo",
                  title: unref(locale).baseText("chat.window.session.reset"),
                  onClick: withModifiers(onRefreshSession, ["stop"])
                }, null, 8, ["class", "title"])
              ]),
              _: 1
            }, 8, ["content"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["title"])) : (openBlock(), createElementBlock("header", {
          key: 1,
          class: normalizeClass(_ctx.$style.chatHeader)
        }, [
          createBaseVNode("span", {
            class: normalizeClass(_ctx.$style.chatTitle)
          }, toDisplayString(unref(locale).baseText("chat.window.title")), 3),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.session)
          }, [
            createBaseVNode("span", null, toDisplayString(unref(locale).baseText("chat.window.session.title")), 1),
            createVNode(unref(N8nTooltip), { placement: "left" }, {
              content: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.sessionId), 1)
              ]),
              default: withCtx(() => [
                createBaseVNode("span", {
                  class: normalizeClass([_ctx.$style.sessionId, unref(clipboard).isSupported.value ? _ctx.$style.copyable : ""]),
                  "data-test-id": "chat-session-id",
                  onClick: _cache[1] || (_cache[1] = ($event) => unref(clipboard).isSupported.value ? copySessionId() : null)
                }, toDisplayString(_ctx.sessionId), 3)
              ]),
              _: 1
            }),
            createVNode(unref(_sfc_main$h), {
              class: normalizeClass(_ctx.$style.headerButton),
              "data-test-id": "refresh-session-button",
              outline: "",
              type: "secondary",
              size: "mini",
              icon: "undo",
              title: unref(locale).baseText("chat.window.session.reset"),
              onClick: onRefreshSession
            }, null, 8, ["class", "title"]),
            _ctx.showCloseButton ? (openBlock(), createBlock(unref(_sfc_main$h), {
              key: 0,
              class: normalizeClass(_ctx.$style.headerButton),
              outline: "",
              type: "secondary",
              size: "mini",
              icon: "times",
              onClick: _cache[2] || (_cache[2] = ($event) => emit("close"))
            }, null, 8, ["class"])) : createCommentVNode("", true)
          ], 2)
        ], 2)),
        _ctx.isOpen ? (openBlock(), createElementBlock("main", {
          key: 2,
          class: normalizeClass(_ctx.$style.chatBody)
        }, [
          createVNode(_sfc_main$c, {
            messages: _ctx.messages,
            class: normalizeClass(_ctx.$style.messages),
            "empty-text": _ctx.isNewLogsEnabled ? unref(locale).baseText("chat.window.chat.emptyChatMessage.v2") : void 0
          }, {
            beforeMessage: withCtx(({ message }) => [
              !_ctx.isReadOnly && message.sender === "bot" && !message.id.includes("preload") ? (openBlock(), createBlock(MessageOptionTooltip, {
                key: 0,
                placement: "right",
                "data-test-id": "execution-id-tooltip"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("chat.window.chat.chatMessageOptions.executionId")) + ": ", 1),
                  createBaseVNode("a", {
                    href: "#",
                    onClick: ($event) => emit("displayExecution", message.id)
                  }, toDisplayString(message.id), 9, _hoisted_1)
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              !_ctx.isReadOnly && isTextMessage(message) && message.sender === "user" ? (openBlock(), createBlock(MessageOptionAction, {
                key: 1,
                "data-test-id": "repost-message-button",
                icon: "redo",
                label: unref(locale).baseText("chat.window.chat.chatMessageOptions.repostMessage"),
                placement: "left",
                onClickOnce: ($event) => repostMessage(message)
              }, null, 8, ["label", "onClickOnce"])) : createCommentVNode("", true),
              !_ctx.isReadOnly && isTextMessage(message) && message.sender === "user" ? (openBlock(), createBlock(MessageOptionAction, {
                key: 2,
                "data-test-id": "reuse-message-button",
                icon: "copy",
                label: unref(locale).baseText("chat.window.chat.chatMessageOptions.reuseMessage"),
                placement: "left",
                onClick: ($event) => reuseMessage(message)
              }, null, 8, ["label", "onClick"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["messages", "class", "empty-text"])
        ], 2)) : createCommentVNode("", true),
        _ctx.isOpen ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass(_ctx.$style.messagesInput)
        }, [
          createVNode(ChatInput, {
            "data-test-id": "lm-chat-inputs",
            placeholder: inputPlaceholder.value,
            onArrowKeyDown
          }, createSlots({ _: 2 }, [
            _ctx.pastChatMessages.length > 0 ? {
              name: "leftPanel",
              fn: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.messagesHistory)
                }, [
                  createVNode(unref(N8nButton), {
                    title: "Navigate to previous message",
                    icon: "chevron-up",
                    type: "tertiary",
                    text: "",
                    size: "mini",
                    onClick: _cache[3] || (_cache[3] = ($event) => onArrowKeyDown({ currentInputValue: "", key: "ArrowUp" }))
                  }),
                  createVNode(unref(N8nButton), {
                    title: "Navigate to next message",
                    icon: "chevron-down",
                    type: "tertiary",
                    text: "",
                    size: "mini",
                    onClick: _cache[4] || (_cache[4] = ($event) => onArrowKeyDown({ currentInputValue: "", key: "ArrowDown" }))
                  })
                ], 2)
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["placeholder"])
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const chat$1 = "_chat_1r0jy_123";
const chatHeader = "_chatHeader_1r0jy_148";
const chatTitle = "_chatTitle_1r0jy_161";
const session = "_session_1r0jy_165";
const sessionId = "_sessionId_1r0jy_173";
const copyable = "_copyable_1r0jy_179";
const headerButton = "_headerButton_1r0jy_183";
const newHeaderButton = "_newHeaderButton_1r0jy_188";
const chatBody = "_chatBody_1r0jy_193";
const messages = "_messages_1r0jy_202";
const messagesInput = "_messagesInput_1r0jy_213";
const style0$7 = {
  chat: chat$1,
  chatHeader,
  chatTitle,
  session,
  sessionId,
  copyable,
  headerButton,
  newHeaderButton,
  chatBody,
  messages,
  messagesInput
};
const cssModules$7 = {
  "$style": style0$7
};
const ChatMessagesPanel = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__cssModules", cssModules$7]]);
const LOCAL_STORAGE_PANEL_HEIGHT = "N8N_CANVAS_CHAT_HEIGHT";
const LOCAL_STORAGE_PANEL_WIDTH = "N8N_CANVAS_CHAT_WIDTH";
const LOCAL_STORAGE_OVERVIEW_PANEL_WIDTH = "N8N_LOGS_OVERVIEW_PANEL_WIDTH";
const MAX_WIDTH_PERCENTAGE = 0.8;
const MIN_WIDTH_PERCENTAGE = 0.3;
const MIN_HEIGHT_PERCENTAGE = 0.3;
const MAX_HEIGHT_PERCENTAGE = 0.75;
function useResize(container2) {
  const storage = {
    height: useStorage(LOCAL_STORAGE_PANEL_HEIGHT),
    width: useStorage(LOCAL_STORAGE_PANEL_WIDTH)
  };
  const dimensions = {
    container: ref(0),
    // Container width
    minHeight: ref(0),
    maxHeight: ref(0),
    chat: ref(0),
    // Chat panel width
    logs: ref(0),
    height: ref(0)
  };
  const rootStyles = computed(() => ({
    "--panel-height": `${dimensions.height.value}px`,
    "--chat-width": `${dimensions.chat.value}px`
  }));
  const panelToContainerRatio = computed(() => {
    const chatRatio = dimensions.chat.value / dimensions.container.value;
    const containerRatio = dimensions.container.value / window.screen.width;
    return {
      chat: chatRatio.toFixed(2),
      logs: (1 - chatRatio).toFixed(2),
      container: containerRatio.toFixed(2)
    };
  });
  function onResize(newHeight) {
    const { minHeight, maxHeight } = dimensions;
    dimensions.height.value = Math.min(Math.max(newHeight, minHeight.value), maxHeight.value);
  }
  function onResizeDebounced(data) {
    void useDebounce().callDebounced(onResize, { debounceTime: 10, trailing: true }, data.height);
  }
  function onResizeChat(width) {
    const containerWidth = dimensions.container.value;
    const maxWidth = containerWidth * MAX_WIDTH_PERCENTAGE;
    const minWidth = containerWidth * MIN_WIDTH_PERCENTAGE;
    dimensions.chat.value = Math.min(Math.max(width, minWidth), maxWidth);
    dimensions.logs.value = dimensions.container.value - dimensions.chat.value;
  }
  function onResizeChatDebounced(data) {
    void useDebounce().callDebounced(
      onResizeChat,
      { debounceTime: 10, trailing: true },
      data.width
    );
  }
  function restorePersistedDimensions() {
    const persistedHeight = parseInt(storage.height.value ?? "0", 10);
    const persistedWidth = parseInt(storage.width.value ?? "0", 10);
    if (persistedHeight) onResize(persistedHeight);
    if (persistedWidth) onResizeChat(persistedWidth);
  }
  function onWindowResize() {
    if (!container2.value) return;
    dimensions.container.value = container2.value.getBoundingClientRect().width;
    onResizeChat(dimensions.chat.value);
    dimensions.minHeight.value = window.innerHeight * MIN_HEIGHT_PERCENTAGE;
    dimensions.maxHeight.value = window.innerHeight * MAX_HEIGHT_PERCENTAGE;
    onResize(dimensions.height.value);
  }
  watchEffect(() => {
    const { chat: chat2, height } = dimensions;
    if (chat2.value > 0) storage.width.value = chat2.value.toString();
    if (height.value > 0) storage.height.value = height.value.toString();
  });
  watchEffect(() => {
    if (container2.value) {
      onWindowResize();
      restorePersistedDimensions();
    }
  });
  onMounted(() => window.addEventListener("resize", onWindowResize));
  onBeforeUnmount(() => window.removeEventListener("resize", onWindowResize));
  return {
    height: dimensions.height,
    chatWidth: dimensions.chat,
    logsWidth: dimensions.logs,
    rootStyles,
    onWindowResize,
    onResizeDebounced,
    onResizeChatDebounced,
    panelToContainerRatio
  };
}
function usePiPWindow({
  container: container2,
  content: content2,
  initialHeight,
  initialWidth,
  shouldPopOut,
  onRequestClose
}) {
  const pipWindow = ref();
  const isUnmounting = ref(false);
  const canPopOut = computed(
    () => !!window.documentPictureInPicture && window.parent === window
  );
  const isPoppedOut = computed(() => !!pipWindow.value);
  const tooltipContainer = computed(
    () => isPoppedOut.value ? content2.value ?? void 0 : void 0
  );
  provide(IsInPiPWindowSymbol, isPoppedOut);
  useProvideTooltipAppendTo(tooltipContainer);
  async function showPip() {
    if (!content2.value) {
      return;
    }
    pipWindow.value = pipWindow.value ?? await window.documentPictureInPicture?.requestWindow({
      width: initialWidth,
      height: initialHeight,
      disallowReturnToOpener: true
    });
    [...document.styleSheets].forEach((styleSheet) => {
      try {
        const cssRules = [...styleSheet.cssRules].map((rule) => rule.cssText).join("");
        const style = document.createElement("style");
        style.textContent = cssRules;
        pipWindow.value?.document.head.appendChild(style);
      } catch (e) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = styleSheet.type;
        link.media = styleSheet.media;
        link.href = styleSheet.href;
        pipWindow.value?.document.head.appendChild(link);
      }
    });
    pipWindow.value?.document.body.append(content2.value);
    pipWindow.value?.addEventListener("pagehide", () => !isUnmounting.value && onRequestClose());
  }
  function hidePiP() {
    pipWindow.value?.close();
    pipWindow.value = void 0;
    if (content2.value) {
      container2.value?.appendChild(content2.value);
    }
  }
  watch(shouldPopOut, (value) => value ? requestAnimationFrame(showPip) : hidePiP(), {
    immediate: true
  });
  onBeforeUnmount(() => {
    isUnmounting.value = true;
    pipWindow.value?.close();
  });
  return { canPopOut, isPoppedOut, pipWindow };
}
function isChatNode(node) {
  return [CHAT_TRIGGER_NODE_TYPE, MANUAL_CHAT_TRIGGER_NODE_TYPE].includes(node.type);
}
function getInputKey(node) {
  if (node.type === MANUAL_CHAT_TRIGGER_NODE_TYPE && node.typeVersion < 1.1) {
    return "input";
  }
  if (node.type === CHAT_TRIGGER_NODE_TYPE) {
    return "chatInput";
  }
  return "chatInput";
}
function extractChatInput(workflow, resultData) {
  const chatTrigger = workflow.nodes.find(isChatNode);
  if (chatTrigger === void 0) {
    return void 0;
  }
  const inputKey = getInputKey(chatTrigger);
  const runData = (resultData.runData[chatTrigger.name] ?? [])[0];
  const message = runData?.data?.[NodeConnectionTypes.Main]?.[0]?.[0]?.json?.[inputKey];
  if (runData === void 0 || typeof message !== "string") {
    return void 0;
  }
  return {
    text: message,
    sender: "user",
    id: v4()
  };
}
function extractBotResponse(resultData, executionId, emptyText2) {
  const lastNodeExecuted = resultData.lastNodeExecuted;
  if (!lastNodeExecuted) return void 0;
  const nodeResponseDataArray = get(resultData.runData, lastNodeExecuted) ?? [];
  const nodeResponseData = nodeResponseDataArray[nodeResponseDataArray.length - 1];
  let responseMessage;
  if (get(nodeResponseData, "error")) {
    responseMessage = "[ERROR: " + get(nodeResponseData, "error.message") + "]";
  } else {
    const responseData = get(nodeResponseData, "data.main[0][0].json");
    const text = extractResponseText(responseData) ?? emptyText2;
    if (!text) {
      return void 0;
    }
    responseMessage = text;
  }
  return {
    text: responseMessage,
    sender: "bot",
    id: executionId ?? v4()
  };
}
function extractResponseText(responseData) {
  if (!responseData || isEmpty(responseData)) {
    return void 0;
  }
  const paths = ["output", "text", "response.text"];
  const matchedPath = paths.find((path) => get(responseData, path));
  if (!matchedPath) return JSON.stringify(responseData, null, 2);
  const matchedOutput = get(responseData, matchedPath);
  if (typeof matchedOutput === "object") {
    return "```json\n" + JSON.stringify(matchedOutput, null, 2) + "\n```";
  }
  return matchedOutput?.toString() ?? "";
}
function restoreChatHistory(workflowExecutionData, emptyText2) {
  if (!workflowExecutionData?.data) {
    return [];
  }
  const userMessage = extractChatInput(
    workflowExecutionData.workflowData,
    workflowExecutionData.data.resultData
  );
  const botMessage = extractBotResponse(
    workflowExecutionData.data.resultData,
    workflowExecutionData.id,
    emptyText2
  );
  return [...userMessage ? [userMessage] : [], ...botMessage ? [botMessage] : []];
}
function useChatMessaging({
  chatTrigger,
  messages: messages2,
  sessionId: sessionId2,
  executionResultData,
  onRunChatWorkflow
}) {
  const locale = useI18n$1();
  const { showError } = useToast();
  const previousMessageIndex = ref(0);
  const isLoading = ref(false);
  async function convertFileToBinaryData(file) {
    const reader = new FileReader();
    return await new Promise((resolve, reject) => {
      reader.onload = () => {
        const binaryData = {
          data: reader.result.split("base64,")?.[1] ?? "",
          mimeType: file.type,
          fileName: file.name,
          fileSize: `${file.size} bytes`,
          fileExtension: file.name.split(".").pop() ?? "",
          fileType: file.type.split("/")[0]
        };
        resolve(binaryData);
      };
      reader.onerror = () => {
        reject(new Error("Failed to convert file to binary data"));
      };
      reader.readAsDataURL(file);
    });
  }
  async function getKeyedFiles(files) {
    const binaryData = {};
    await Promise.all(
      files.map(async (file, index) => {
        const data = await convertFileToBinaryData(file);
        const key = `data${index}`;
        binaryData[key] = data;
      })
    );
    return binaryData;
  }
  function extractFileMeta(file) {
    return {
      fileName: file.name,
      fileSize: `${file.size} bytes`,
      fileExtension: file.name.split(".").pop() ?? "",
      fileType: file.type.split("/")[0],
      mimeType: file.type
    };
  }
  async function startWorkflowWithMessage(message, files) {
    const triggerNode = chatTrigger.value;
    if (!triggerNode) {
      showError(new Error("Chat Trigger Node could not be found!"), "Trigger Node not found");
      return;
    }
    const inputKey = getInputKey(triggerNode);
    const inputPayload = {
      json: {
        sessionId: sessionId2.value,
        action: "sendMessage",
        [inputKey]: message
      }
    };
    if (files && files.length > 0) {
      const filesMeta = files.map((file) => extractFileMeta(file));
      const binaryData = await getKeyedFiles(files);
      inputPayload.json.files = filesMeta;
      inputPayload.binary = binaryData;
    }
    const nodeData = {
      startTime: Date.now(),
      executionTime: 0,
      executionIndex: 0,
      executionStatus: "success",
      data: {
        main: [[inputPayload]]
      },
      source: [null]
    };
    isLoading.value = true;
    const response = await onRunChatWorkflow({
      triggerNode: triggerNode.name,
      nodeData,
      source: "RunData.ManualChatMessage",
      message
    });
    isLoading.value = false;
    if (!response?.executionId) {
      return;
    }
    const chatMessage = executionResultData.value ? extractBotResponse(
      executionResultData.value,
      response.executionId,
      locale.baseText("chat.window.chat.response.empty")
    ) : void 0;
    if (chatMessage !== void 0) {
      messages2.value.push(chatMessage);
    }
  }
  async function sendMessage(message, files) {
    previousMessageIndex.value = 0;
    if (message.trim() === "" && (!files || files.length === 0)) {
      showError(
        new Error(locale.baseText("chat.window.chat.provideMessage")),
        locale.baseText("chat.window.chat.emptyChatMessage")
      );
      return;
    }
    const pinnedChatData = usePinnedData(chatTrigger.value);
    if (pinnedChatData.hasData.value) {
      const confirmResult = await useMessage().confirm(
        locale.baseText("chat.window.chat.unpinAndExecute.description"),
        locale.baseText("chat.window.chat.unpinAndExecute.title"),
        {
          confirmButtonText: locale.baseText("chat.window.chat.unpinAndExecute.confirm"),
          cancelButtonText: locale.baseText("chat.window.chat.unpinAndExecute.cancel")
        }
      );
      if (!(confirmResult === MODAL_CONFIRM)) return;
      pinnedChatData.unsetData("unpin-and-send-chat-message-modal");
    }
    const newMessage = {
      text: message,
      sender: "user",
      sessionId: sessionId2.value,
      id: v4(),
      files
    };
    messages2.value.push(newMessage);
    await startWorkflowWithMessage(newMessage.text, files);
  }
  return {
    previousMessageIndex,
    isLoading: computed(() => isLoading.value),
    sendMessage
  };
}
function useChatTrigger({
  getNodeByName,
  getNodeType,
  canvasNodes,
  workflow
}) {
  const chatTriggerName = ref(null);
  const connectedNode = ref(null);
  const chatTriggerNode = computed(
    () => chatTriggerName.value ? getNodeByName(chatTriggerName.value) : null
  );
  const allowFileUploads = computed(() => {
    return chatTriggerNode.value?.parameters?.options?.allowFileUploads === true;
  });
  const allowedFilesMimeTypes = computed(() => {
    return chatTriggerNode.value?.parameters?.options?.allowedFilesMimeTypes?.toString() ?? "";
  });
  function setChatTriggerNode() {
    const triggerNode = unref(canvasNodes).find(isChatNode);
    if (!triggerNode) {
      return;
    }
    chatTriggerName.value = triggerNode.name;
  }
  function setConnectedNode() {
    const triggerNode = chatTriggerNode.value;
    if (!triggerNode) {
      return;
    }
    const chatChildren = workflow.value.getChildNodes(triggerNode.name);
    const chatRootNode = chatChildren.reverse().map((nodeName) => getNodeByName(nodeName)).filter((n) => n !== null).reverse().find((storeNode) => {
      if (storeNode.type === CHAIN_SUMMARIZATION_LANGCHAIN_NODE_TYPE) return false;
      const nodeType = getNodeType(storeNode.type, storeNode.typeVersion);
      if (!nodeType) return false;
      const isAgent = nodeType.codex?.subcategories?.[AI_SUBCATEGORY]?.includes(AI_CATEGORY_AGENTS);
      const isChain = nodeType.codex?.subcategories?.[AI_SUBCATEGORY]?.includes(AI_CATEGORY_CHAINS);
      let isCustomChainOrAgent = false;
      if (nodeType.name === AI_CODE_NODE_TYPE) {
        const inputs = getNodeInputs(workflow.value, storeNode, nodeType);
        const inputTypes = getConnectionTypes(inputs);
        const outputs = getNodeOutputs(workflow.value, storeNode, nodeType);
        const outputTypes = getConnectionTypes(outputs);
        if (inputTypes.includes(NodeConnectionTypes.AiLanguageModel) && inputTypes.includes(NodeConnectionTypes.Main) && outputTypes.includes(NodeConnectionTypes.Main)) {
          isCustomChainOrAgent = true;
        }
      }
      if (!isAgent && !isChain && !isCustomChainOrAgent) return false;
      const parentNodes = workflow.value.getParentNodes(storeNode.name);
      const isChatChild = parentNodes.some(
        (parentNodeName) => parentNodeName === triggerNode.name
      );
      const result = Boolean(isChatChild && (isAgent || isChain || isCustomChainOrAgent));
      return result;
    });
    connectedNode.value = chatRootNode ?? null;
  }
  return {
    allowFileUploads,
    allowedFilesMimeTypes,
    chatTriggerNode,
    connectedNode: computed(() => connectedNode.value),
    setChatTriggerNode,
    setConnectedNode
  };
}
function useChatState(isReadOnly, onWindowResize) {
  const locale = useI18n$1();
  const workflowsStore = useWorkflowsStore();
  const nodeTypesStore = useNodeTypesStore();
  const canvasStore = useCanvasStore();
  const router = useRouter();
  const nodeHelpers = useNodeHelpers();
  const { runWorkflow } = useRunWorkflow({ router });
  const messages2 = ref([]);
  const currentSessionId = ref(v4().replace(/-/g, ""));
  const canvasNodes = computed(() => workflowsStore.allNodes);
  const allConnections = computed(() => workflowsStore.allConnections);
  const logsPanelState = computed(() => workflowsStore.logsPanelState);
  const workflow = computed(() => workflowsStore.getCurrentWorkflow());
  const {
    chatTriggerNode,
    connectedNode,
    allowFileUploads,
    allowedFilesMimeTypes,
    setChatTriggerNode,
    setConnectedNode
  } = useChatTrigger({
    workflow,
    canvasNodes,
    getNodeByName: workflowsStore.getNodeByName,
    getNodeType: nodeTypesStore.getNodeType
  });
  const { sendMessage, isLoading } = useChatMessaging({
    chatTrigger: chatTriggerNode,
    messages: messages2,
    sessionId: currentSessionId,
    executionResultData: computed(() => workflowsStore.getWorkflowExecution?.data?.resultData),
    onRunChatWorkflow
  });
  function createChatConfig(params) {
    const chatConfig2 = {
      messages: params.messages,
      sendMessage: params.sendMessage,
      initialMessages: ref([]),
      currentSessionId: params.currentSessionId,
      waitingForResponse: params.isLoading
    };
    const chatOptions2 = {
      i18n: {
        en: {
          title: "",
          footer: "",
          subtitle: "",
          inputPlaceholder: params.locale.baseText("chat.window.chat.placeholder"),
          getStarted: "",
          closeButtonTooltip: ""
        }
      },
      webhookUrl: "",
      mode: "window",
      showWindowCloseButton: true,
      disabled: params.isDisabled,
      allowFileUploads: params.allowFileUploads,
      allowedFilesMimeTypes
    };
    return { chatConfig: chatConfig2, chatOptions: chatOptions2 };
  }
  const { chatConfig, chatOptions } = createChatConfig({
    messages: messages2,
    sendMessage,
    currentSessionId,
    isLoading,
    isDisabled: computed(() => isReadOnly),
    allowFileUploads,
    locale
  });
  const restoredChatMessages = computed(
    () => restoreChatHistory(
      workflowsStore.workflowExecutionData,
      locale.baseText("chat.window.chat.response.empty")
    )
  );
  provide(ChatSymbol, chatConfig);
  provide(ChatOptionsSymbol, chatOptions);
  watch(
    () => logsPanelState.value,
    (state) => {
      if (state !== LOGS_PANEL_STATE.CLOSED) {
        setChatTriggerNode();
        setConnectedNode();
        setTimeout(() => {
          onWindowResize?.();
          chatEventBus.emit("focusInput");
        }, 0);
      }
    },
    { immediate: true }
  );
  watch(
    () => allConnections.value,
    () => {
      if (canvasStore.isLoading) return;
      setTimeout(() => {
        if (!chatTriggerNode.value) {
          setChatTriggerNode();
        }
        setConnectedNode();
      }, 0);
    },
    { deep: true }
  );
  async function createExecutionPromise() {
    return await new Promise((resolve) => {
      const resolveIfFinished = (isRunning) => {
        if (!isRunning) {
          unwatch();
          resolve();
        }
      };
      const unwatch = watch(() => workflowsStore.isWorkflowRunning, resolveIfFinished);
      resolveIfFinished(workflowsStore.isWorkflowRunning);
    });
  }
  async function onRunChatWorkflow(payload) {
    const runWorkflowOptions = {
      triggerNode: payload.triggerNode,
      nodeData: payload.nodeData,
      source: payload.source
    };
    if (workflowsStore.chatPartialExecutionDestinationNode) {
      runWorkflowOptions.destinationNode = workflowsStore.chatPartialExecutionDestinationNode;
      workflowsStore.chatPartialExecutionDestinationNode = null;
    }
    const response = await runWorkflow(runWorkflowOptions);
    if (response) {
      await createExecutionPromise();
      workflowsStore.appendChatMessage(payload.message);
      return response;
    }
    return;
  }
  function refreshSession() {
    workflowsStore.setWorkflowExecutionData(null);
    nodeHelpers.updateNodesExecutionIssues();
    messages2.value = [];
    currentSessionId.value = v4().replace(/-/g, "");
  }
  function displayExecution(executionId) {
    const route = router.resolve({
      name: VIEWS.EXECUTION_PREVIEW,
      params: { name: workflow.value.id, executionId }
    });
    window.open(route.href, "_blank");
  }
  return {
    currentSessionId,
    messages: computed(() => isReadOnly ? restoredChatMessages.value : messages2.value),
    chatTriggerNode,
    connectedNode,
    sendMessage,
    refreshSession,
    displayExecution
  };
}
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ConsumedTokenCountText",
  props: {
    consumedTokens: {}
  },
  setup(__props) {
    const locale = useI18n$1();
    return (_ctx, _cache) => {
      const _component_ConsumedTokensDetails = _sfc_main$i;
      return _ctx.consumedTokens !== void 0 ? (openBlock(), createBlock(unref(N8nTooltip), {
        key: 0,
        enterable: false
      }, {
        content: withCtx(() => [
          createVNode(_component_ConsumedTokensDetails, { "consumed-tokens": _ctx.consumedTokens }, null, 8, ["consumed-tokens"])
        ]),
        default: withCtx(() => [
          createBaseVNode("span", null, toDisplayString(unref(locale).baseText("runData.aiContentBlock.tokens", {
            interpolate: {
              count: unref(formatTokenUsageCount)(_ctx.consumedTokens, "total")
            }
          })), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "LogsOverviewRow",
  props: {
    data: {},
    node: {},
    isSelected: { type: Boolean },
    isReadOnly: { type: Boolean },
    shouldShowConsumedTokens: { type: Boolean },
    isCompact: { type: Boolean }
  },
  emits: ["toggleExpanded", "triggerPartialExecution", "openNdv"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const locale = useI18n$1();
    const containerRef = useTemplateRef("containerRef");
    const workflowsStore = useWorkflowsStore();
    const nodeTypeStore = useNodeTypesStore();
    const node = computed(() => workflowsStore.nodesByName[props.data.node]);
    const runData = computed(
      () => node.value ? workflowsStore.workflowExecutionData?.data?.resultData.runData[node.value.name]?.[props.data.runIndex] : void 0
    );
    const type = computed(() => node.value ? nodeTypeStore.getNodeType(node.value.type) : void 0);
    const depth = computed(() => (props.node.level ?? 1) - 1);
    const isSettled = computed(
      () => runData.value?.executionStatus && ["crashed", "error", "success"].includes(runData.value.executionStatus)
    );
    const isError = computed(() => !!runData.value?.error);
    const startedAtText = computed(() => {
      const time = new Date(runData.value?.startTime ?? 0);
      return locale.baseText("logs.overview.body.started", {
        interpolate: {
          time: `${toTime(time, true)}, ${toDayMonth(time)}`
        }
      });
    });
    const subtreeConsumedTokens = computed(
      () => props.shouldShowConsumedTokens ? getSubtreeTotalConsumedTokens(props.data) : void 0
    );
    function isLastChild(level) {
      let parent = props.data.parent;
      let data = props.data;
      for (let i = 0; i < depth.value - level; i++) {
        data = parent;
        parent = parent?.parent;
      }
      const siblings = parent?.children ?? [];
      const lastSibling = siblings[siblings.length - 1];
      return data === void 0 && lastSibling === void 0 || data?.node === lastSibling?.node && data?.runIndex === lastSibling?.runIndex;
    }
    watch(
      [() => props.isSelected, containerRef],
      ([isSelected, ref2]) => {
        if (isSelected && ref2) {
          ref2.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      const _component_NodeIcon = _sfc_main$j;
      return node.value !== void 0 ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "containerRef",
        ref: containerRef,
        class: normalizeClass({
          [_ctx.$style.container]: true,
          [_ctx.$style.compact]: props.isCompact,
          [_ctx.$style.error]: isError.value,
          [_ctx.$style.selected]: props.isSelected
        })
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(depth.value, (level) => {
          return openBlock(), createElementBlock("div", {
            key: level,
            class: normalizeClass({
              [_ctx.$style.indent]: true,
              [_ctx.$style.connectorCurved]: level === depth.value,
              [_ctx.$style.connectorStraight]: !isLastChild(level)
            })
          }, null, 2);
        }), 128)),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.background),
          style: normalizeStyle({ "--indent-depth": depth.value })
        }, null, 6),
        createVNode(_component_NodeIcon, {
          "node-type": type.value,
          size: 16,
          class: normalizeClass(_ctx.$style.icon)
        }, null, 8, ["node-type", "class"]),
        createVNode(unref(N8nText), {
          tag: "div",
          bold: true,
          size: "small",
          class: normalizeClass(_ctx.$style.name),
          color: isError.value ? "danger" : void 0
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(node.value.name), 1)
          ]),
          _: 1
        }, 8, ["class", "color"]),
        createVNode(unref(N8nText), {
          tag: "div",
          color: "text-light",
          size: "small",
          class: normalizeClass(_ctx.$style.timeTook)
        }, {
          default: withCtx(() => [
            isSettled.value && runData.value ? (openBlock(), createBlock(unref(I18nT), {
              key: 0,
              keypath: "logs.overview.body.summaryText"
            }, {
              status: withCtx(() => [
                isError.value ? (openBlock(), createBlock(unref(N8nText), {
                  key: 0,
                  color: "danger",
                  bold: true,
                  size: "small"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(N8nIcon), {
                      icon: "exclamation-triangle",
                      class: normalizeClass(_ctx.$style.errorIcon)
                    }, null, 8, ["class"]),
                    createTextVNode(toDisplayString(unref(upperFirst)(runData.value.executionStatus)), 1)
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(unref(upperFirst)(runData.value.executionStatus)), 1)
                ], 64))
              ]),
              time: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).displayTimer(runData.value.executionTime, true)), 1)
              ]),
              _: 1
            })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(unref(upperFirst)(runData.value?.executionStatus)), 1)
            ], 64))
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(unref(N8nText), {
          tag: "div",
          color: "text-light",
          size: "small",
          class: normalizeClass(_ctx.$style.startedAt)
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(startedAtText.value), 1)
          ]),
          _: 1
        }, 8, ["class"]),
        subtreeConsumedTokens.value !== void 0 ? (openBlock(), createBlock(unref(N8nText), {
          key: 0,
          tag: "div",
          color: "text-light",
          size: "small",
          class: normalizeClass(_ctx.$style.consumedTokens)
        }, {
          default: withCtx(() => [
            subtreeConsumedTokens.value.totalTokens > 0 && (props.data.children.length === 0 || !props.node.expanded) ? (openBlock(), createBlock(_sfc_main$7, {
              key: 0,
              "consumed-tokens": subtreeConsumedTokens.value
            }, null, 8, ["consumed-tokens"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("", true),
        isError.value && _ctx.isCompact ? (openBlock(), createBlock(unref(N8nIcon), {
          key: 1,
          size: "medium",
          color: "danger",
          icon: "exclamation-triangle",
          class: normalizeClass(_ctx.$style.compactErrorIcon)
        }, null, 8, ["class"])) : createCommentVNode("", true),
        !props.isReadOnly ? (openBlock(), createBlock(unref(_sfc_main$h), {
          key: 2,
          type: "secondary",
          size: "small",
          icon: "play",
          style: { "color": "var(--color-text-base)" },
          "aria-label": unref(locale).baseText("logs.overview.body.run"),
          class: normalizeClass([_ctx.$style.partialExecutionButton, depth.value > 0 ? _ctx.$style.unavailable : ""]),
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("triggerPartialExecution", props.data), ["stop"]))
        }, null, 8, ["aria-label", "class"])) : createCommentVNode("", true),
        createVNode(unref(_sfc_main$h), {
          type: "secondary",
          size: "small",
          icon: "external-link-alt",
          style: { "color": "var(--color-text-base)" },
          class: normalizeClass(_ctx.$style.openNdvButton),
          "aria-label": unref(locale).baseText("logs.overview.body.open"),
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("openNdv", props.data), ["stop"]))
        }, null, 8, ["class", "aria-label"]),
        !_ctx.isCompact || props.data.children.length > 0 ? (openBlock(), createBlock(unref(N8nButton), {
          key: 3,
          type: "secondary",
          size: "small",
          square: true,
          style: normalizeStyle({
            visibility: props.data.children.length === 0 ? "hidden" : "",
            color: "var(--color-text-base)"
            // give higher specificity than the style from the component itself
          }),
          class: normalizeClass(_ctx.$style.toggleButton),
          "aria-label": unref(locale).baseText("logs.overview.body.toggleRow"),
          onClick: _cache[2] || (_cache[2] = withModifiers(($event) => emit("toggleExpanded", props.node), ["stop"]))
        }, {
          default: withCtx(() => [
            createVNode(unref(N8nIcon), {
              size: "medium",
              icon: props.node.expanded ? "chevron-down" : "chevron-up"
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["style", "class", "aria-label"])) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const container$5 = "_container_jrkhv_123";
const background = "_background_jrkhv_140";
const selected = "_selected_jrkhv_149";
const error = "_error_jrkhv_152";
const indent = "_indent_jrkhv_156";
const connectorCurved = "_connectorCurved_jrkhv_165";
const connectorStraight = "_connectorStraight_jrkhv_175";
const icon$1 = "_icon_jrkhv_184";
const name$1 = "_name_jrkhv_190";
const timeTook = "_timeTook_jrkhv_196";
const errorIcon = "_errorIcon_jrkhv_201";
const compact = "_compact_jrkhv_205";
const startedAt = "_startedAt_jrkhv_215";
const consumedTokens = "_consumedTokens_jrkhv_224";
const compactErrorIcon = "_compactErrorIcon_jrkhv_240";
const partialExecutionButton = "_partialExecutionButton_jrkhv_248";
const openNdvButton = "_openNdvButton_jrkhv_249";
const unavailable = "_unavailable_jrkhv_259";
const toggleButton = "_toggleButton_jrkhv_267";
const style0$6 = {
  container: container$5,
  background,
  selected,
  error,
  indent,
  connectorCurved,
  connectorStraight,
  icon: icon$1,
  name: name$1,
  timeTook,
  errorIcon,
  compact,
  startedAt,
  consumedTokens,
  compactErrorIcon,
  partialExecutionButton,
  openNdvButton,
  unavailable,
  toggleButton
};
const cssModules$6 = {
  "$style": style0$6
};
const LogsOverviewRow = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__cssModules", cssModules$6]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ExecutionSummary",
  props: {
    status: {},
    consumedTokens: {},
    timeTook: {}
  },
  setup(__props) {
    const locale = useI18n$1();
    const executionStatusText = computed(
      () => __props.timeTook === void 0 ? upperFirst(__props.status) : locale.baseText("logs.overview.body.summaryText", {
        interpolate: {
          status: upperFirst(__props.status),
          time: locale.displayTimer(__props.timeTook, true)
        }
      })
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nText), {
        tag: "div",
        color: "text-light",
        size: "small",
        class: normalizeClass(_ctx.$style.container)
      }, {
        default: withCtx(() => [
          createBaseVNode("span", null, toDisplayString(executionStatusText.value), 1),
          _ctx.consumedTokens.totalTokens > 0 ? (openBlock(), createBlock(_sfc_main$7, {
            key: 0,
            "consumed-tokens": _ctx.consumedTokens
          }, null, 8, ["consumed-tokens"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const container$4 = "_container_pt5hk_123";
const style0$5 = {
  container: container$4
};
const cssModules$5 = {
  "$style": style0$5
};
const ExecutionSummary = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$5]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LogsOverviewPanel",
  props: {
    isOpen: { type: Boolean },
    selected: {},
    isReadOnly: { type: Boolean },
    isCompact: { type: Boolean },
    executionTree: {}
  },
  emits: ["clickHeader", "select"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const locale = useI18n$1();
    const telemetry = useTelemetry();
    const workflowsStore = useWorkflowsStore();
    const router = useRouter();
    const runWorkflow = useRunWorkflow({ router });
    const ndvStore = useNDVStore();
    const nodeHelpers = useNodeHelpers();
    const isClearExecutionButtonVisible = useClearExecutionButtonVisible();
    const workflow = computed(() => workflowsStore.getCurrentWorkflow());
    const isEmpty2 = computed(() => workflowsStore.workflowExecutionData === null);
    const switchViewOptions = computed(() => [
      { label: locale.baseText("logs.overview.header.switch.details"), value: "details" },
      { label: locale.baseText("logs.overview.header.switch.overview"), value: "overview" }
    ]);
    const execution = computed(() => workflowsStore.workflowExecutionData);
    const consumedTokens2 = computed(
      () => getTotalConsumedTokens(...__props.executionTree.map(getSubtreeTotalConsumedTokens))
    );
    function onClearExecutionData() {
      workflowsStore.setWorkflowExecutionData(null);
      nodeHelpers.updateNodesExecutionIssues();
    }
    function handleClickNode(clicked) {
      if (__props.selected?.node === clicked.node && __props.selected?.runIndex === clicked.runIndex) {
        emit("select", void 0);
        return;
      }
      emit("select", clicked);
      telemetry.track("User selected node in log view", {
        node_type: workflowsStore.nodesByName[clicked.node].type,
        node_id: workflowsStore.nodesByName[clicked.node].id,
        execution_id: workflowsStore.workflowExecutionData?.id,
        workflow_id: workflow.value.id
      });
    }
    function handleSwitchView(value) {
      emit("select", value === "overview" || __props.executionTree.length === 0 ? void 0 : __props.executionTree[0]);
    }
    function handleToggleExpanded(treeNode) {
      treeNode.expanded = !treeNode.expanded;
    }
    async function handleOpenNdv(treeNode) {
      ndvStore.setActiveNodeName(treeNode.node);
    }
    async function handleTriggerPartialExecution(treeNode) {
      await runWorkflow.runWorkflow({ destinationNode: treeNode.node });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container),
        "data-test-id": "logs-overview"
      }, [
        createVNode(PanelHeader, {
          title: unref(locale).baseText("logs.overview.header.title"),
          "data-test-id": "logs-overview-header",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("clickHeader"))
        }, {
          actions: withCtx(() => [
            unref(isClearExecutionButtonVisible) ? (openBlock(), createBlock(unref(N8nTooltip), {
              key: 0,
              content: unref(locale).baseText("logs.overview.header.actions.clearExecution.tooltip")
            }, {
              default: withCtx(() => [
                createVNode(unref(N8nButton), {
                  size: "mini",
                  type: "secondary",
                  icon: "trash",
                  "icon-size": "medium",
                  class: normalizeClass(_ctx.$style.clearButton),
                  onClick: withModifiers(onClearExecutionData, ["stop"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("logs.overview.header.actions.clearExecution")), 1)
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            }, 8, ["content"])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "actions")
          ]),
          _: 3
        }, 8, ["title"]),
        _ctx.isOpen ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([_ctx.$style.content, isEmpty2.value ? _ctx.$style.empty : ""]),
          "data-test-id": "logs-overview-body"
        }, [
          isEmpty2.value ? (openBlock(), createBlock(unref(N8nText), {
            key: 0,
            tag: "p",
            size: "medium",
            color: "text-base",
            class: normalizeClass(_ctx.$style.emptyText),
            "data-test-id": "logs-overview-empty"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("logs.overview.body.empty.message")), 1)
            ]),
            _: 1
          }, 8, ["class"])) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.$style.scrollable)
          }, [
            execution.value ? (openBlock(), createBlock(ExecutionSummary, {
              key: 0,
              class: normalizeClass(_ctx.$style.summary),
              status: execution.value.status,
              "consumed-tokens": consumedTokens2.value,
              "time-took": execution.value.startedAt && execution.value.stoppedAt ? +new Date(execution.value.stoppedAt) - +new Date(execution.value.startedAt) : void 0
            }, null, 8, ["class", "status", "consumed-tokens", "time-took"])) : createCommentVNode("", true),
            _ctx.executionTree.length > 0 ? (openBlock(), createBlock(unref(ElTree), {
              key: 1,
              "node-key": "id",
              class: normalizeClass(_ctx.$style.tree),
              indent: 0,
              data: _ctx.executionTree,
              "expand-on-click-node": false,
              "default-expand-all": true,
              onNodeClick: handleClickNode
            }, {
              default: withCtx(({ node: elTreeNode, data }) => [
                createVNode(LogsOverviewRow, {
                  data,
                  node: elTreeNode,
                  "is-read-only": _ctx.isReadOnly,
                  "is-selected": data.node === _ctx.selected?.node && data.runIndex === _ctx.selected?.runIndex,
                  "is-compact": _ctx.isCompact,
                  "should-show-consumed-tokens": consumedTokens2.value.totalTokens > 0,
                  onToggleExpanded: handleToggleExpanded,
                  onOpenNdv: handleOpenNdv,
                  onTriggerPartialExecution: handleTriggerPartialExecution
                }, null, 8, ["data", "node", "is-read-only", "is-selected", "is-compact", "should-show-consumed-tokens"])
              ]),
              _: 1
            }, 8, ["class", "data"])) : createCommentVNode("", true),
            createVNode(unref(N8nRadioButtons), {
              size: "medium",
              class: normalizeClass(_ctx.$style.switchViewButtons),
              "model-value": _ctx.selected ? "details" : "overview",
              options: switchViewOptions.value,
              "onUpdate:modelValue": handleSwitchView
            }, null, 8, ["class", "model-value", "options"])
          ], 2))
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container$3 = "_container_ow69g_123";
const clearButton = "_clearButton_ow69g_133";
const content$1 = "_content_ow69g_138";
const empty = "_empty_ow69g_147";
const emptyText = "_emptyText_ow69g_152";
const scrollable = "_scrollable_ow69g_157";
const summary = "_summary_ow69g_163";
const tree = "_tree_ow69g_169";
const switchViewButtons = "_switchViewButtons_ow69g_176";
const style0$4 = {
  container: container$3,
  clearButton,
  content: content$1,
  empty,
  emptyText,
  scrollable,
  summary,
  tree,
  switchViewButtons
};
const cssModules$4 = {
  "$style": style0$4
};
const LogsOverviewPanel = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$4]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "RunDataView",
  props: {
    title: {},
    paneType: {},
    logEntry: {}
  },
  setup(__props) {
    const locale = useI18n$1();
    const workflowsStore = useWorkflowsStore();
    const ndvStore = useNDVStore();
    const workflow = computed(() => workflowsStore.getCurrentWorkflow());
    const node = computed(() => {
      if (__props.logEntry.depth > 0 || __props.paneType === "output") {
        return workflowsStore.nodesByName[__props.logEntry.node];
      }
      const parent = workflow.value.getParentNodesByDepth(__props.logEntry.node)[0];
      if (!parent) {
        return void 0;
      }
      return workflowsStore.nodesByName[parent.name];
    });
    const isMultipleInput = computed(
      () => __props.paneType === "input" && uniqBy(
        workflow.value.getParentNodesByDepth(__props.logEntry.node).filter((n) => n.name !== __props.logEntry.node),
        (n) => n.name
      ).length > 1
    );
    function handleClickOpenNdv() {
      ndvStore.setActiveNodeName(__props.logEntry.node);
    }
    return (_ctx, _cache) => {
      return node.value ? (openBlock(), createBlock(RunData, {
        key: 0,
        node: node.value,
        workflow: workflow.value,
        "run-index": _ctx.logEntry.runIndex,
        "too-much-data-title": unref(locale).baseText("ndv.output.tooMuchData.title"),
        "no-data-in-branch-message": unref(locale).baseText("ndv.output.noOutputDataInBranch"),
        "executing-message": unref(locale).baseText("ndv.output.executing"),
        "pane-type": _ctx.paneType,
        "disable-run-index-selection": true,
        compact: true,
        "disable-pin": true,
        "disable-edit": true,
        "table-header-bg-color": "light"
      }, createSlots({
        header: withCtx(() => [
          createVNode(unref(N8nText), {
            class: normalizeClass(_ctx.$style.title),
            bold: true,
            color: "text-light",
            size: "small"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ]),
            _: 1
          }, 8, ["class"])
        ]),
        "no-output-data": withCtx(() => [
          createVNode(unref(N8nText), {
            bold: true,
            color: "text-dark",
            size: "large"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("ndv.output.noOutputData.title")), 1)
            ]),
            _: 1
          })
        ]),
        _: 2
      }, [
        isMultipleInput.value ? {
          name: "content",
          fn: withCtx(() => []),
          key: "0"
        } : void 0,
        isMultipleInput.value ? {
          name: "callout-message",
          fn: withCtx(() => [
            createVNode(unref(I18nT), { keypath: "logs.details.body.multipleInputs" }, {
              button: withCtx(() => [
                createVNode(unref(N8nLink), {
                  size: "small",
                  onClick: handleClickOpenNdv
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("logs.details.body.multipleInputs.openingTheNode")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["node", "workflow", "run-index", "too-much-data-title", "no-data-in-branch-message", "executing-message", "pane-type"])) : createCommentVNode("", true);
    };
  }
});
const title$1 = "_title_1ur7r_123";
const style0$3 = {
  title: title$1
};
const cssModules$3 = {
  "$style": style0$3
};
const RunDataView = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$3]]);
function useResizablePanel(localStorageKey, {
  container: container2,
  defaultSize,
  snap = true,
  minSize = 0,
  maxSize = (size) => size,
  position = "left",
  allowCollapse,
  allowFullSize
}) {
  const containerSize = ref(0);
  const size = useLocalStorage(localStorageKey, -1, { writeDefaults: false });
  const isResizing = ref(false);
  const constrainedSize = computed(() => {
    if (isResizing.value && allowCollapse && size.value < 30) {
      return 0;
    }
    if (isResizing.value && allowFullSize && size.value > containerSize.value - 30) {
      return containerSize.value;
    }
    const defaultSizeValue = resolveSize(defaultSize, containerSize.value);
    if (Number.isNaN(size.value) || size.value < 0) {
      return defaultSizeValue;
    }
    const minSizeValue = resolveSize(minSize, containerSize.value);
    const maxSizeValue = resolveSize(maxSize, containerSize.value);
    return Math.max(
      minSizeValue,
      Math.min(
        snap && Math.abs(defaultSizeValue - size.value) < 30 ? defaultSizeValue : size.value,
        maxSizeValue
      )
    );
  });
  function getSize(el) {
    return position === "bottom" ? el.height : el.width;
  }
  function getOffsetSize(el) {
    return position === "bottom" ? el.offsetHeight : el.offsetWidth;
  }
  function getValue(data) {
    return position === "bottom" ? data.y : data.x;
  }
  function resolveSize(getter, containerSizeValue) {
    return typeof getter === "number" ? getter : getter(containerSizeValue);
  }
  function onResize(data) {
    const containerRect = unref(container2)?.getBoundingClientRect();
    isResizing.value = true;
    size.value = Math.max(
      0,
      position === "bottom" ? (containerRect ? getSize(containerRect) : 0) - getValue(data) : getValue(data) - (containerRect ? getValue(containerRect) : 0)
    );
  }
  function onResizeEnd() {
    isResizing.value = false;
  }
  watch(
    () => unref(container2),
    (el, _, onCleanUp) => {
      if (!el) {
        return;
      }
      const observer = new ResizeObserver(() => {
        containerSize.value = getOffsetSize(el);
      });
      observer.observe(el);
      containerSize.value = getOffsetSize(el);
      onCleanUp(() => observer.disconnect());
    },
    { immediate: true }
  );
  watch(containerSize, (newValue, oldValue) => {
    if (size.value > 0 && oldValue > 0) {
      const ratio = size.value / oldValue;
      size.value = Math.round(newValue * ratio);
    }
  });
  return {
    isResizing: computed(() => isResizing.value),
    isCollapsed: computed(() => isResizing.value && constrainedSize.value <= 0),
    isFullSize: computed(() => isResizing.value && constrainedSize.value >= containerSize.value),
    size: constrainedSize,
    onResize,
    onResizeEnd
  };
}
const MIN_IO_PANEL_WIDTH = 200;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LogDetailsPanel",
  props: {
    isOpen: { type: Boolean },
    logEntry: {},
    window: {}
  },
  emits: ["clickHeader"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const locale = useI18n$1();
    const telemetry = useTelemetry();
    const workflowsStore = useWorkflowsStore();
    const nodeTypeStore = useNodeTypesStore();
    const content2 = ref(LOG_DETAILS_CONTENT.BOTH);
    const node = computed(() => workflowsStore.nodesByName[__props.logEntry.node]);
    const type = computed(() => node.value ? nodeTypeStore.getNodeType(node.value.type) : void 0);
    const runData = computed(
      () => (workflowsStore.workflowExecutionData?.data?.resultData.runData[__props.logEntry.node] ?? [])[__props.logEntry.runIndex]
    );
    const consumedTokens2 = computed(() => getSubtreeTotalConsumedTokens(__props.logEntry));
    const isTriggerNode = computed(() => type.value?.group.includes("trigger"));
    const container2 = useTemplateRef("container");
    const resizer = useResizablePanel("N8N_LOGS_INPUT_PANEL_WIDTH", {
      container: container2,
      defaultSize: (size) => size / 2,
      minSize: MIN_IO_PANEL_WIDTH,
      maxSize: (size) => size - MIN_IO_PANEL_WIDTH,
      allowCollapse: true,
      allowFullSize: true
    });
    const shouldResize = computed(() => content2.value === LOG_DETAILS_CONTENT.BOTH);
    function handleToggleInput(open) {
      const wasOpen = [LOG_DETAILS_CONTENT.INPUT, LOG_DETAILS_CONTENT.BOTH].includes(content2.value);
      if (open === wasOpen) {
        return;
      }
      content2.value = wasOpen ? LOG_DETAILS_CONTENT.OUTPUT : LOG_DETAILS_CONTENT.BOTH;
      telemetry.track("User toggled log view sub pane", {
        pane: "input",
        newState: wasOpen ? "hidden" : "visible"
      });
    }
    function handleToggleOutput(open) {
      const wasOpen = [LOG_DETAILS_CONTENT.OUTPUT, LOG_DETAILS_CONTENT.BOTH].includes(content2.value);
      if (open === wasOpen) {
        return;
      }
      content2.value = wasOpen ? LOG_DETAILS_CONTENT.INPUT : LOG_DETAILS_CONTENT.BOTH;
      telemetry.track("User toggled log view sub pane", {
        pane: "output",
        newState: wasOpen ? "hidden" : "visible"
      });
    }
    function handleResizeEnd() {
      if (resizer.isCollapsed.value) {
        handleToggleInput(false);
      }
      if (resizer.isFullSize.value) {
        handleToggleOutput(false);
      }
      resizer.onResizeEnd();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "container",
        ref: container2,
        class: normalizeClass(_ctx.$style.container),
        "data-test-id": "log-details"
      }, [
        createVNode(PanelHeader, {
          "data-test-id": "log-details-header",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("clickHeader"))
        }, {
          title: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.title)
            }, [
              createVNode(_sfc_main$j, {
                "node-type": type.value,
                size: 16,
                class: normalizeClass(_ctx.$style.icon)
              }, null, 8, ["node-type", "class"]),
              createVNode(unref(N8nText), {
                tag: "div",
                bold: true,
                size: "small",
                class: normalizeClass(_ctx.$style.name)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(node.value?.name), 1)
                ]),
                _: 1
              }, 8, ["class"]),
              _ctx.isOpen ? (openBlock(), createBlock(ExecutionSummary, {
                key: 0,
                class: normalizeClass(_ctx.$style.executionSummary),
                status: runData.value?.executionStatus ?? "unknown",
                "consumed-tokens": consumedTokens2.value,
                "time-took": runData.value?.executionTime
              }, null, 8, ["class", "status", "consumed-tokens", "time-took"])) : createCommentVNode("", true)
            ], 2)
          ]),
          actions: withCtx(() => [
            _ctx.isOpen && !isTriggerNode.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.actions)
            }, [
              createVNode(unref(N8nButton), {
                size: "mini",
                type: "secondary",
                class: normalizeClass(content2.value === unref(LOG_DETAILS_CONTENT).OUTPUT ? "" : _ctx.$style.pressed),
                onClick: withModifiers(handleToggleInput, ["stop"])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("logs.details.header.actions.input")), 1)
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(unref(N8nButton), {
                size: "mini",
                type: "secondary",
                class: normalizeClass(content2.value === unref(LOG_DETAILS_CONTENT).INPUT ? "" : _ctx.$style.pressed),
                onClick: withModifiers(handleToggleOutput, ["stop"])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("logs.details.header.actions.output")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ], 2)) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "actions")
          ]),
          _: 3
        }),
        _ctx.isOpen ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.content),
          "data-test-id": "logs-details-body"
        }, [
          !isTriggerNode.value && content2.value !== unref(LOG_DETAILS_CONTENT).OUTPUT ? (openBlock(), createBlock(unref(N8nResizeWrapper), {
            key: 0,
            class: normalizeClass({
              [_ctx.$style.inputResizer]: true,
              [_ctx.$style.collapsed]: unref(resizer).isCollapsed.value,
              [_ctx.$style.full]: unref(resizer).isFullSize.value
            }),
            width: unref(resizer).size.value,
            style: normalizeStyle(shouldResize.value ? { width: `${unref(resizer).size.value ?? 0}px` } : void 0),
            "supported-directions": ["right"],
            "is-resizing-enabled": shouldResize.value,
            window: _ctx.window,
            onResize: unref(resizer).onResize,
            onResizeend: handleResizeEnd
          }, {
            default: withCtx(() => [
              createVNode(RunDataView, {
                "data-test-id": "log-details-input",
                "pane-type": "input",
                title: unref(locale).baseText("logs.details.header.actions.input"),
                "log-entry": _ctx.logEntry
              }, null, 8, ["title", "log-entry"])
            ]),
            _: 1
          }, 8, ["class", "width", "style", "is-resizing-enabled", "window", "onResize"])) : createCommentVNode("", true),
          isTriggerNode.value || content2.value !== unref(LOG_DETAILS_CONTENT).INPUT ? (openBlock(), createBlock(RunDataView, {
            key: 1,
            "data-test-id": "log-details-output",
            "pane-type": "output",
            class: normalizeClass(_ctx.$style.outputPanel),
            title: unref(locale).baseText("logs.details.header.actions.output"),
            "log-entry": _ctx.logEntry
          }, null, 8, ["class", "title", "log-entry"])) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container$2 = "_container_v1vl1_123";
const actions = "_actions_v1vl1_132";
const pressed = "_pressed_v1vl1_138";
const title = "_title_v1vl1_142";
const icon = "_icon_v1vl1_148";
const name = "_name_v1vl1_152";
const executionSummary = "_executionSummary_v1vl1_158";
const content = "_content_v1vl1_162";
const outputPanel = "_outputPanel_v1vl1_170";
const inputResizer = "_inputResizer_v1vl1_175";
const collapsed = "_collapsed_v1vl1_179";
const full = "_full_v1vl1_179";
const style0$2 = {
  container: container$2,
  actions,
  pressed,
  title,
  icon,
  name,
  executionSummary,
  content,
  outputPanel,
  inputResizer,
  collapsed,
  full
};
const cssModules$2 = {
  "$style": style0$2
};
const LogsDetailsPanel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LogsPanelActions",
  props: {
    isOpen: { type: Boolean },
    showToggleButton: { type: Boolean },
    showPopOutButton: { type: Boolean }
  },
  emits: ["popOut", "toggleOpen"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const appStyles = useStyles();
    const locales = useI18n$1();
    const tooltipZIndex = computed(() => appStyles.APP_Z_INDEXES.ASK_ASSISTANT_FLOATING_BUTTON + 100);
    const popOutButtonText = computed(() => locales.baseText("runData.panel.actions.popOut"));
    const toggleButtonText = computed(
      () => locales.baseText(__props.isOpen ? "runData.panel.actions.collapse" : "runData.panel.actions.open")
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        _ctx.showPopOutButton ? (openBlock(), createBlock(unref(N8nTooltip), {
          key: 0,
          "z-index": tooltipZIndex.value,
          content: popOutButtonText.value
        }, {
          default: withCtx(() => [
            createVNode(unref(_sfc_main$h), {
              icon: "pop-out",
              type: "secondary",
              size: "small",
              "icon-size": "medium",
              "aria-label": popOutButtonText.value,
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("popOut"), ["stop"]))
            }, null, 8, ["aria-label"])
          ]),
          _: 1
        }, 8, ["z-index", "content"])) : createCommentVNode("", true),
        _ctx.showToggleButton ? (openBlock(), createBlock(unref(N8nTooltip), {
          key: 1,
          "z-index": tooltipZIndex.value,
          content: toggleButtonText.value
        }, {
          default: withCtx(() => [
            createVNode(unref(_sfc_main$h), {
              type: "secondary",
              size: "small",
              "icon-size": "medium",
              icon: _ctx.isOpen ? "chevron-down" : "chevron-up",
              "aria-label": toggleButtonText.value,
              style: { "color": "var(--color-text-base)" },
              onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("toggleOpen"), ["stop"]))
            }, null, 8, ["icon", "aria-label"])
          ]),
          _: 1
        }, 8, ["z-index", "content"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container$1 = "_container_1qwjg_123";
const style0$1 = {
  container: container$1
};
const cssModules$1 = {
  "$style": style0$1
};
const LogsPanelActions = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
function useLayout(pipContainer, pipContent2, container2, logsContainer2) {
  const canvasStore = useCanvasStore();
  const telemetry = useTelemetry();
  const workflowsStore = useWorkflowsStore();
  const panelState = computed(() => workflowsStore.logsPanelState);
  const resizer = useResizablePanel(LOCAL_STORAGE_PANEL_HEIGHT, {
    container: document.body,
    position: "bottom",
    snap: false,
    defaultSize: (size) => size * 0.3,
    minSize: 160,
    maxSize: (size) => size * 0.75,
    allowCollapse: true
  });
  const chatPanelResizer = useResizablePanel(LOCAL_STORAGE_PANEL_WIDTH, {
    container: container2,
    defaultSize: (size) => size * 0.3,
    minSize: 300,
    maxSize: (size) => size * 0.8
  });
  const overviewPanelResizer = useResizablePanel(LOCAL_STORAGE_OVERVIEW_PANEL_WIDTH, {
    container: logsContainer2,
    defaultSize: (size) => size * 0.3,
    minSize: 80,
    maxSize: 500,
    allowFullSize: true
  });
  const isOpen = computed(
    () => panelState.value === LOGS_PANEL_STATE.CLOSED ? resizer.isResizing.value && resizer.size.value > 0 : !resizer.isCollapsed.value
  );
  const isCollapsingDetailsPanel = computed(() => overviewPanelResizer.isFullSize.value);
  const { canPopOut, isPoppedOut, pipWindow } = usePiPWindow({
    initialHeight: 400,
    initialWidth: window.document.body.offsetWidth * 0.8,
    container: pipContainer,
    content: pipContent2,
    shouldPopOut: computed(() => panelState.value === LOGS_PANEL_STATE.FLOATING),
    onRequestClose: () => {
      if (!isOpen.value) {
        return;
      }
      telemetry.track("User toggled log view", { new_state: "attached" });
      workflowsStore.setPreferPoppedOutLogsView(false);
    }
  });
  function handleToggleOpen(open) {
    const wasOpen = panelState.value !== LOGS_PANEL_STATE.CLOSED;
    if (open === wasOpen) {
      return;
    }
    workflowsStore.toggleLogsPanelOpen(open);
    telemetry.track("User toggled log view", {
      new_state: wasOpen ? "collapsed" : "attached"
    });
  }
  function handlePopOut() {
    telemetry.track("User toggled log view", { new_state: "floating" });
    workflowsStore.toggleLogsPanelOpen(true);
    workflowsStore.setPreferPoppedOutLogsView(true);
  }
  function handleResizeEnd() {
    if (panelState.value === LOGS_PANEL_STATE.CLOSED && !resizer.isCollapsed.value) {
      handleToggleOpen(true);
    }
    if (resizer.isCollapsed.value) {
      handleToggleOpen(false);
    }
    resizer.onResizeEnd();
  }
  watch([panelState, resizer.size], ([state, height]) => {
    canvasStore.setPanelHeight(
      state === LOGS_PANEL_STATE.FLOATING ? 0 : state === LOGS_PANEL_STATE.ATTACHED ? height : 32
    );
  });
  return {
    height: resizer.size,
    chatPanelWidth: chatPanelResizer.size,
    overviewPanelWidth: overviewPanelResizer.size,
    canPopOut,
    isOpen,
    isCollapsingDetailsPanel,
    isPoppedOut,
    isOverviewPanelFullWidth: overviewPanelResizer.isFullSize,
    pipWindow,
    onToggleOpen: handleToggleOpen,
    onPopOut: handlePopOut,
    onResize: resizer.onResize,
    onResizeEnd: handleResizeEnd,
    onChatPanelResize: chatPanelResizer.onResize,
    onChatPanelResizeEnd: chatPanelResizer.onResizeEnd,
    onOverviewPanelResize: overviewPanelResizer.onResize,
    onOverviewPanelResizeEnd: overviewPanelResizer.onResizeEnd
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LogsPanel",
  props: {
    isReadOnly: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const workflowsStore = useWorkflowsStore();
    const container2 = useTemplateRef("container");
    const logsContainer2 = useTemplateRef("logsContainer");
    const pipContainer = useTemplateRef("pipContainer");
    const pipContent2 = useTemplateRef("pipContent");
    const previousChatMessages = computed(() => workflowsStore.getPastChatMessages);
    const {
      height,
      chatPanelWidth,
      overviewPanelWidth,
      canPopOut,
      isOpen,
      isPoppedOut,
      isCollapsingDetailsPanel,
      isOverviewPanelFullWidth,
      pipWindow,
      onResize,
      onResizeEnd,
      onToggleOpen,
      onPopOut,
      onChatPanelResize,
      onChatPanelResizeEnd,
      onOverviewPanelResize,
      onOverviewPanelResizeEnd
    } = useLayout(pipContainer, pipContent2, container2, logsContainer2);
    const { currentSessionId, messages: messages2, sendMessage, refreshSession, displayExecution } = useChatState(
      props.isReadOnly
    );
    const hasChat = computed(
      () => workflowsStore.workflowTriggerNodes.some(isChatNode) && (!props.isReadOnly || messages2.value.length > 0)
    );
    const workflow = computed(() => workflowsStore.getCurrentWorkflow());
    const executionTree = computed(
      () => createLogEntries(
        workflow.value,
        workflowsStore.workflowExecutionData?.data?.resultData.runData ?? {}
      )
    );
    const manualLogEntrySelection = ref({ type: "initial" });
    const autoSelectedLogEntry = computed(
      () => findLogEntryToAutoSelect(
        executionTree.value,
        workflowsStore.nodesByName,
        workflowsStore.workflowExecutionData?.data?.resultData.runData ?? {}
      )
    );
    const selectedLogEntry = computed(
      () => manualLogEntrySelection.value.type === "initial" || manualLogEntrySelection.value.workflowId !== workflowsStore.workflow.id ? autoSelectedLogEntry.value : manualLogEntrySelection.value.type === "none" ? void 0 : manualLogEntrySelection.value.data
    );
    const isLogDetailsOpen = computed(
      () => selectedLogEntry.value !== void 0 && !isCollapsingDetailsPanel.value
    );
    const isLogDetailsOpenOrCollapsing = computed(() => selectedLogEntry.value !== void 0);
    const logsPanelActionsProps = computed(() => ({
      isOpen: isOpen.value,
      showToggleButton: !isPoppedOut.value,
      showPopOutButton: canPopOut.value && !isPoppedOut.value,
      onPopOut,
      onToggleOpen
    }));
    function handleSelectLogEntry(selected2) {
      manualLogEntrySelection.value = selected2 === void 0 ? { type: "none", workflowId: workflowsStore.workflow.id } : { type: "selected", workflowId: workflowsStore.workflow.id, data: selected2 };
    }
    function handleResizeOverviewPanelEnd() {
      if (isOverviewPanelFullWidth.value) {
        handleSelectLogEntry(void 0);
      }
      onOverviewPanelResizeEnd();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "pipContainer",
        ref: pipContainer
      }, [
        createBaseVNode("div", {
          ref_key: "pipContent",
          ref: pipContent2,
          class: normalizeClass(_ctx.$style.pipContent)
        }, [
          createVNode(unref(N8nResizeWrapper), {
            height: unref(height),
            "supported-directions": ["top"],
            "is-resizing-enabled": !unref(isPoppedOut),
            class: normalizeClass(_ctx.$style.resizeWrapper),
            style: normalizeStyle({ height: unref(isOpen) ? `${unref(height)}px` : "auto" }),
            onResize: unref(onResize),
            onResizeend: unref(onResizeEnd)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                ref_key: "container",
                ref: container2,
                class: normalizeClass([_ctx.$style.container, "ignore-key-press-canvas"]),
                tabindex: "0"
              }, [
                hasChat.value ? (openBlock(), createBlock(unref(N8nResizeWrapper), {
                  key: 0,
                  "supported-directions": ["right"],
                  "is-resizing-enabled": unref(isOpen),
                  width: unref(chatPanelWidth),
                  style: normalizeStyle({ width: `${unref(chatPanelWidth)}px` }),
                  class: normalizeClass(_ctx.$style.chat),
                  window: unref(pipWindow),
                  onResize: unref(onChatPanelResize),
                  onResizeend: unref(onChatPanelResizeEnd)
                }, {
                  default: withCtx(() => [
                    createVNode(ChatMessagesPanel, {
                      "data-test-id": "canvas-chat",
                      "is-open": unref(isOpen),
                      "is-read-only": _ctx.isReadOnly,
                      messages: unref(messages2),
                      "session-id": unref(currentSessionId),
                      "past-chat-messages": previousChatMessages.value,
                      "show-close-button": false,
                      "is-new-logs-enabled": true,
                      onClose: unref(onToggleOpen),
                      onRefreshSession: unref(refreshSession),
                      onDisplayExecution: unref(displayExecution),
                      onSendMessage: unref(sendMessage),
                      onClickHeader: _cache[0] || (_cache[0] = ($event) => unref(onToggleOpen)(true))
                    }, null, 8, ["is-open", "is-read-only", "messages", "session-id", "past-chat-messages", "onClose", "onRefreshSession", "onDisplayExecution", "onSendMessage"])
                  ]),
                  _: 1
                }, 8, ["is-resizing-enabled", "width", "style", "class", "window", "onResize", "onResizeend"])) : createCommentVNode("", true),
                createBaseVNode("div", {
                  ref_key: "logsContainer",
                  ref: logsContainer2,
                  class: normalizeClass(_ctx.$style.logsContainer)
                }, [
                  createVNode(unref(N8nResizeWrapper), {
                    class: normalizeClass(_ctx.$style.overviewResizer),
                    width: unref(overviewPanelWidth),
                    style: normalizeStyle({ width: isLogDetailsOpen.value ? `${unref(overviewPanelWidth)}px` : "" }),
                    "supported-directions": ["right"],
                    "is-resizing-enabled": isLogDetailsOpenOrCollapsing.value,
                    window: unref(pipWindow),
                    onResize: unref(onOverviewPanelResize),
                    onResizeend: handleResizeOverviewPanelEnd
                  }, {
                    default: withCtx(() => [
                      createVNode(LogsOverviewPanel, {
                        class: normalizeClass(_ctx.$style.logsOverview),
                        "is-open": unref(isOpen),
                        "is-read-only": _ctx.isReadOnly,
                        "is-compact": isLogDetailsOpen.value,
                        selected: selectedLogEntry.value,
                        "execution-tree": executionTree.value,
                        onClickHeader: _cache[1] || (_cache[1] = ($event) => unref(onToggleOpen)(true)),
                        onSelect: handleSelectLogEntry
                      }, {
                        actions: withCtx(() => [
                          !isLogDetailsOpen.value ? (openBlock(), createBlock(LogsPanelActions, normalizeProps(mergeProps({ key: 0 }, logsPanelActionsProps.value)), null, 16)) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["class", "is-open", "is-read-only", "is-compact", "selected", "execution-tree"])
                    ]),
                    _: 1
                  }, 8, ["class", "width", "style", "is-resizing-enabled", "window", "onResize"]),
                  isLogDetailsOpenOrCollapsing.value && selectedLogEntry.value ? (openBlock(), createBlock(LogsDetailsPanel, {
                    key: 0,
                    class: normalizeClass(_ctx.$style.logDetails),
                    "is-open": unref(isOpen),
                    "log-entry": selectedLogEntry.value,
                    window: unref(pipWindow),
                    onClickHeader: _cache[2] || (_cache[2] = ($event) => unref(onToggleOpen)(true))
                  }, {
                    actions: withCtx(() => [
                      isLogDetailsOpen.value ? (openBlock(), createBlock(LogsPanelActions, normalizeProps(mergeProps({ key: 0 }, logsPanelActionsProps.value)), null, 16)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["class", "is-open", "log-entry", "window"])) : createCommentVNode("", true)
                ], 2)
              ], 2)
            ]),
            _: 1
          }, 8, ["height", "is-resizing-enabled", "class", "style", "onResize", "onResizeend"])
        ], 2)
      ], 512);
    };
  }
});
const resizeWrapper = "_resizeWrapper_19m2p_124";
const pipContent = "_pipContent_19m2p_129";
const container = "_container_19m2p_143";
const chat = "_chat_19m2p_152";
const logsContainer = "_logsContainer_19m2p_156";
const overviewResizer = "_overviewResizer_19m2p_166";
const logsOverview = "_logsOverview_19m2p_174";
const logsDetails = "_logsDetails_19m2p_178";
const style0 = {
  resizeWrapper,
  pipContent,
  container,
  chat,
  logsContainer,
  overviewResizer,
  logsOverview,
  logsDetails
};
const cssModules = {
  "$style": style0
};
const LogsPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  ChatMessagesPanel as C,
  LogsPanel as L,
  usePiPWindow as a,
  useChatState as b,
  useResize as u
};

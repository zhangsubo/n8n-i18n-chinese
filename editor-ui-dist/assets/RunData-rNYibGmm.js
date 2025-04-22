const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RunDataTable-DN3IIGP-.js","assets/index-Dhp_73Xq.js","assets/index-C5OXOcIJ.css","assets/useExecutionHelpers-B31gzua1.js","assets/dateFormatter-fQZrLdBW.js","assets/RunDataTable-DyUvXWfl.css","assets/RunDataJson-DSOxLRy4.js","assets/FileSaver.min-DG2dn2Gc.js","assets/RunDataJson-Txw0lqay.css","assets/RunDataSearch-C6b4tOPr.js","assets/RunDataSearch-R6qtl0Jf.css"])))=>i.map(i=>d[i]);
import { dB as hasKey, cl as getDefaultExportFromCjs, dC as AGENT_LANGCHAIN_NODE_TYPE, d as defineComponent, be as useClipboard, a as useToast, dD as useAIAssistantHelpers, by as useNodeTypesStore, au as useNDVStore, a1 as useRootStore, dl as useAssistantStore, L as useUIStore, q as computed, dE as MAX_DISPLAY_DATA_SIZE, dF as isCommunityPackageName, c as useI18n, h as resolveComponent, cc as resolveDirective, i as createElementBlock, g as openBlock, k as createBaseVNode, f as createCommentVNode, aC as withDirectives, t as toDisplayString, j as createVNode, m as unref, dG as InlineAskAssistantButton, w as withCtx, l as createTextVNode, F as Fragment, D as renderList, dH as NEW_ASSISTANT_SESSION_MODAL, ci as sanitizeHtml, bd as N8nText, J as withModifiers, n as normalizeClass, _ as _export_sfc, dI as requireVue, dJ as sanitizeHtml$1, dK as sanitizeHtmlExports, r as ref, U as useWorkflowsStore, o as onMounted, bV as jsonParse, e as createBlock, bz as useNodeHelpers, aS as N8nTooltip, aU as _sfc_main$a, aT as N8nLink, bF as N8nRadioButtons, aW as createSlots, bD as N8nIcon, bl as NodeConnectionTypes, a3 as useSourceControlStore, du as useSchemaPreviewStore, aw as usePostHog, W as useRoute, bJ as toRef, bp as usePinnedData, dL as useNodeType, cH as storeToRefs, dM as TRIMMED_TASK_DATA_CONNECTIONS_KEY, dN as executionDataToJson, dO as NODE_TYPES_EXCLUDED_FROM_OUTPUT_NAME_APPEND, dP as CORE_NODES_CATEGORY, dQ as SCHEMA_PREVIEW_EXPERIMENT, dR as computedAsync, I as watch, ai as useTelemetry, y as onBeforeUnmount, aL as useStorage, dS as LOCAL_STORAGE_PIN_DATA_DISCOVERY_NDV_FLAG, dT as dataPinningEventBus, dU as LOCAL_STORAGE_PIN_DATA_DISCOVERY_CANVAS_FLAG, dV as searchInObject, bw as getConnectionTypes, dW as isObject, dX as MAX_DISPLAY_DATA_SIZE_SCHEMA_VIEW, dY as HTML_NODE_TYPE, x as renderSlot, b$ as N8nCallout, dZ as DATA_PINNING_DOCS_URL, aD as vShow, bZ as Suspense, b_ as defineAsyncComponent, b4 as normalizeProps, b7 as mergeProps, bf as N8nButton, d_ as _sfc_main$b, d$ as N8nSelect, e0 as N8nTabs, b5 as guardReactiveProps, e1 as _sfc_main$c, e2 as JsonEditor, e3 as DATA_EDITING_DOCS_URL, df as InfoTip, e4 as N8nBlockUi, aq as __vitePreload, e5 as isPresent, bx as getNodeOutputs, e6 as getNodeHints, e7 as getGenericHints, e8 as clearJsonKey, e9 as TEST_PIN_DATA, aR as useExternalHooks, ea as isEmpty, eb as isEqual } from "./index-Dhp_73Xq.js";
import { F as FileSaver_minExports } from "./FileSaver.min-DG2dn2Gc.js";
import { u as useExecutionHelpers } from "./useExecutionHelpers-B31gzua1.js";
function responseHasSubworkflowData(response) {
  return ["executionId", "workflowId"].every(
    (x) => hasKey(response, x) && typeof response[x] === "string"
  );
}
function parseErrorResponseWorkflowMetadata(response) {
  if (!responseHasSubworkflowData(response)) return void 0;
  return {
    subExecution: {
      executionId: response.executionId,
      workflowId: response.workflowId
    },
    subExecutionsCount: 1
  };
}
function parseErrorMetadata(error) {
  if (hasKey(error, "errorResponse")) {
    return parseErrorResponseWorkflowMetadata(error.errorResponse);
  }
  return parseErrorResponseWorkflowMetadata(error);
}
const ViewableMimeTypes = [
  "application/json",
  "audio/mpeg",
  "audio/ogg",
  "audio/wav",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/tiff",
  "image/webp",
  "text/css",
  "text/csv",
  "text/markdown",
  "text/plain",
  "video/mp4",
  "video/ogg",
  "video/webm"
];
var core;
var hasRequiredCore;
function requireCore() {
  if (hasRequiredCore) return core;
  hasRequiredCore = 1;
  function deepFreeze(obj) {
    if (obj instanceof Map) {
      obj.clear = obj.delete = obj.set = function() {
        throw new Error("map is read-only");
      };
    } else if (obj instanceof Set) {
      obj.add = obj.clear = obj.delete = function() {
        throw new Error("set is read-only");
      };
    }
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((name) => {
      const prop = obj[name];
      const type = typeof prop;
      if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
        deepFreeze(prop);
      }
    });
    return obj;
  }
  class Response {
    /**
     * @param {CompiledMode} mode
     */
    constructor(mode) {
      if (mode.data === void 0) mode.data = {};
      this.data = mode.data;
      this.isMatchIgnored = false;
    }
    ignoreMatch() {
      this.isMatchIgnored = true;
    }
  }
  function escapeHTML(value) {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function inherit$1(original, ...objects) {
    const result = /* @__PURE__ */ Object.create(null);
    for (const key in original) {
      result[key] = original[key];
    }
    objects.forEach(function(obj) {
      for (const key in obj) {
        result[key] = obj[key];
      }
    });
    return (
      /** @type {T} */
      result
    );
  }
  const SPAN_CLOSE = "</span>";
  const emitsWrappingTags = (node) => {
    return !!node.scope;
  };
  const scopeToCSSClass = (name, { prefix }) => {
    if (name.startsWith("language:")) {
      return name.replace("language:", "language-");
    }
    if (name.includes(".")) {
      const pieces = name.split(".");
      return [
        `${prefix}${pieces.shift()}`,
        ...pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`)
      ].join(" ");
    }
    return `${prefix}${name}`;
  };
  class HTMLRenderer {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(parseTree, options) {
      this.buffer = "";
      this.classPrefix = options.classPrefix;
      parseTree.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(text) {
      this.buffer += escapeHTML(text);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(node) {
      if (!emitsWrappingTags(node)) return;
      const className = scopeToCSSClass(
        node.scope,
        { prefix: this.classPrefix }
      );
      this.span(className);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(node) {
      if (!emitsWrappingTags(node)) return;
      this.buffer += SPAN_CLOSE;
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(className) {
      this.buffer += `<span class="${className}">`;
    }
  }
  const newNode = (opts = {}) => {
    const result = { children: [] };
    Object.assign(result, opts);
    return result;
  };
  class TokenTree {
    constructor() {
      this.rootNode = newNode();
      this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(node) {
      this.top.children.push(node);
    }
    /** @param {string} scope */
    openNode(scope) {
      const node = newNode({ scope });
      this.add(node);
      this.stack.push(node);
    }
    closeNode() {
      if (this.stack.length > 1) {
        return this.stack.pop();
      }
      return void 0;
    }
    closeAllNodes() {
      while (this.closeNode()) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(builder) {
      return this.constructor._walk(builder, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(builder, node) {
      if (typeof node === "string") {
        builder.addText(node);
      } else if (node.children) {
        builder.openNode(node);
        node.children.forEach((child) => this._walk(builder, child));
        builder.closeNode(node);
      }
      return builder;
    }
    /**
     * @param {Node} node
     */
    static _collapse(node) {
      if (typeof node === "string") return;
      if (!node.children) return;
      if (node.children.every((el) => typeof el === "string")) {
        node.children = [node.children.join("")];
      } else {
        node.children.forEach((child) => {
          TokenTree._collapse(child);
        });
      }
    }
  }
  class TokenTreeEmitter extends TokenTree {
    /**
     * @param {*} options
     */
    constructor(options) {
      super();
      this.options = options;
    }
    /**
     * @param {string} text
     */
    addText(text) {
      if (text === "") {
        return;
      }
      this.add(text);
    }
    /** @param {string} scope */
    startScope(scope) {
      this.openNode(scope);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(emitter, name) {
      const node = emitter.root;
      if (name) node.scope = `language:${name}`;
      this.add(node);
    }
    toHTML() {
      const renderer = new HTMLRenderer(this, this.options);
      return renderer.value();
    }
    finalize() {
      this.closeAllNodes();
      return true;
    }
  }
  function source(re) {
    if (!re) return null;
    if (typeof re === "string") return re;
    return re.source;
  }
  function lookahead(re) {
    return concat("(?=", re, ")");
  }
  function anyNumberOfTimes(re) {
    return concat("(?:", re, ")*");
  }
  function optional(re) {
    return concat("(?:", re, ")?");
  }
  function concat(...args) {
    const joined = args.map((x) => source(x)).join("");
    return joined;
  }
  function stripOptionsFromArgs(args) {
    const opts = args[args.length - 1];
    if (typeof opts === "object" && opts.constructor === Object) {
      args.splice(args.length - 1, 1);
      return opts;
    } else {
      return {};
    }
  }
  function either(...args) {
    const opts = stripOptionsFromArgs(args);
    const joined = "(" + (opts.capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
    return joined;
  }
  function countMatchGroups(re) {
    return new RegExp(re.toString() + "|").exec("").length - 1;
  }
  function startsWith(re, lexeme) {
    const match = re && re.exec(lexeme);
    return match && match.index === 0;
  }
  const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function _rewriteBackreferences(regexps, { joinWith }) {
    let numCaptures = 0;
    return regexps.map((regex) => {
      numCaptures += 1;
      const offset = numCaptures;
      let re = source(regex);
      let out = "";
      while (re.length > 0) {
        const match = BACKREF_RE.exec(re);
        if (!match) {
          out += re;
          break;
        }
        out += re.substring(0, match.index);
        re = re.substring(match.index + match[0].length);
        if (match[0][0] === "\\" && match[1]) {
          out += "\\" + String(Number(match[1]) + offset);
        } else {
          out += match[0];
          if (match[0] === "(") {
            numCaptures++;
          }
        }
      }
      return out;
    }).map((re) => `(${re})`).join(joinWith);
  }
  const MATCH_NOTHING_RE = /\b\B/;
  const IDENT_RE = "[a-zA-Z]\\w*";
  const UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
  const NUMBER_RE = "\\b\\d+(\\.\\d+)?";
  const C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
  const BINARY_NUMBER_RE = "\\b(0b[01]+)";
  const RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
  const SHEBANG = (opts = {}) => {
    const beginShebang = /^#![ ]*\//;
    if (opts.binary) {
      opts.begin = concat(
        beginShebang,
        /.*\b/,
        opts.binary,
        /\b.*/
      );
    }
    return inherit$1({
      scope: "meta",
      begin: beginShebang,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (m, resp) => {
        if (m.index !== 0) resp.ignoreMatch();
      }
    }, opts);
  };
  const BACKSLASH_ESCAPE = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  };
  const APOS_STRING_MODE = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [BACKSLASH_ESCAPE]
  };
  const QUOTE_STRING_MODE = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [BACKSLASH_ESCAPE]
  };
  const PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  const COMMENT = function(begin, end, modeOptions = {}) {
    const mode = inherit$1(
      {
        scope: "comment",
        begin,
        end,
        contains: []
      },
      modeOptions
    );
    mode.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: true,
      relevance: 0
    });
    const ENGLISH_WORD = either(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    mode.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: concat(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          ENGLISH_WORD,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    );
    return mode;
  };
  const C_LINE_COMMENT_MODE = COMMENT("//", "$");
  const C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
  const HASH_COMMENT_MODE = COMMENT("#", "$");
  const NUMBER_MODE = {
    scope: "number",
    begin: NUMBER_RE,
    relevance: 0
  };
  const C_NUMBER_MODE = {
    scope: "number",
    begin: C_NUMBER_RE,
    relevance: 0
  };
  const BINARY_NUMBER_MODE = {
    scope: "number",
    begin: BINARY_NUMBER_RE,
    relevance: 0
  };
  const REGEXP_MODE = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [BACKSLASH_ESCAPE]
      }
    ]
  };
  const TITLE_MODE = {
    scope: "title",
    begin: IDENT_RE,
    relevance: 0
  };
  const UNDERSCORE_TITLE_MODE = {
    scope: "title",
    begin: UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  const METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  const END_SAME_AS_BEGIN = function(mode) {
    return Object.assign(
      mode,
      {
        /** @type {ModeCallback} */
        "on:begin": (m, resp) => {
          resp.data._beginMatch = m[1];
        },
        /** @type {ModeCallback} */
        "on:end": (m, resp) => {
          if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();
        }
      }
    );
  };
  var MODES = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE,
    BACKSLASH_ESCAPE,
    BINARY_NUMBER_MODE,
    BINARY_NUMBER_RE,
    COMMENT,
    C_BLOCK_COMMENT_MODE,
    C_LINE_COMMENT_MODE,
    C_NUMBER_MODE,
    C_NUMBER_RE,
    END_SAME_AS_BEGIN,
    HASH_COMMENT_MODE,
    IDENT_RE,
    MATCH_NOTHING_RE,
    METHOD_GUARD,
    NUMBER_MODE,
    NUMBER_RE,
    PHRASAL_WORDS_MODE,
    QUOTE_STRING_MODE,
    REGEXP_MODE,
    RE_STARTERS_RE,
    SHEBANG,
    TITLE_MODE,
    UNDERSCORE_IDENT_RE,
    UNDERSCORE_TITLE_MODE
  });
  function skipIfHasPrecedingDot(match, response) {
    const before = match.input[match.index - 1];
    if (before === ".") {
      response.ignoreMatch();
    }
  }
  function scopeClassName(mode, _parent) {
    if (mode.className !== void 0) {
      mode.scope = mode.className;
      delete mode.className;
    }
  }
  function beginKeywords(mode, parent) {
    if (!parent) return;
    if (!mode.beginKeywords) return;
    mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
    mode.__beforeBegin = skipIfHasPrecedingDot;
    mode.keywords = mode.keywords || mode.beginKeywords;
    delete mode.beginKeywords;
    if (mode.relevance === void 0) mode.relevance = 0;
  }
  function compileIllegal(mode, _parent) {
    if (!Array.isArray(mode.illegal)) return;
    mode.illegal = either(...mode.illegal);
  }
  function compileMatch(mode, _parent) {
    if (!mode.match) return;
    if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");
    mode.begin = mode.match;
    delete mode.match;
  }
  function compileRelevance(mode, _parent) {
    if (mode.relevance === void 0) mode.relevance = 1;
  }
  const beforeMatchExt = (mode, parent) => {
    if (!mode.beforeMatch) return;
    if (mode.starts) throw new Error("beforeMatch cannot be used with starts");
    const originalMode = Object.assign({}, mode);
    Object.keys(mode).forEach((key) => {
      delete mode[key];
    });
    mode.keywords = originalMode.keywords;
    mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
    mode.starts = {
      relevance: 0,
      contains: [
        Object.assign(originalMode, { endsParent: true })
      ]
    };
    mode.relevance = 0;
    delete originalMode.beforeMatch;
  };
  const COMMON_KEYWORDS = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ];
  const DEFAULT_KEYWORD_SCOPE = "keyword";
  function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
    const compiledKeywords = /* @__PURE__ */ Object.create(null);
    if (typeof rawKeywords === "string") {
      compileList(scopeName, rawKeywords.split(" "));
    } else if (Array.isArray(rawKeywords)) {
      compileList(scopeName, rawKeywords);
    } else {
      Object.keys(rawKeywords).forEach(function(scopeName2) {
        Object.assign(
          compiledKeywords,
          compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
        );
      });
    }
    return compiledKeywords;
    function compileList(scopeName2, keywordList) {
      if (caseInsensitive) {
        keywordList = keywordList.map((x) => x.toLowerCase());
      }
      keywordList.forEach(function(keyword) {
        const pair = keyword.split("|");
        compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
      });
    }
  }
  function scoreForKeyword(keyword, providedScore) {
    if (providedScore) {
      return Number(providedScore);
    }
    return commonKeyword(keyword) ? 0 : 1;
  }
  function commonKeyword(keyword) {
    return COMMON_KEYWORDS.includes(keyword.toLowerCase());
  }
  const seenDeprecations = {};
  const error = (message) => {
    console.error(message);
  };
  const warn = (message, ...args) => {
    console.log(`WARN: ${message}`, ...args);
  };
  const deprecated = (version2, message) => {
    if (seenDeprecations[`${version2}/${message}`]) return;
    console.log(`Deprecated as of ${version2}. ${message}`);
    seenDeprecations[`${version2}/${message}`] = true;
  };
  const MultiClassError = new Error();
  function remapScopeNames(mode, regexes, { key }) {
    let offset = 0;
    const scopeNames = mode[key];
    const emit = {};
    const positions = {};
    for (let i = 1; i <= regexes.length; i++) {
      positions[i + offset] = scopeNames[i];
      emit[i + offset] = true;
      offset += countMatchGroups(regexes[i - 1]);
    }
    mode[key] = positions;
    mode[key]._emit = emit;
    mode[key]._multi = true;
  }
  function beginMultiClass(mode) {
    if (!Array.isArray(mode.begin)) return;
    if (mode.skip || mode.excludeBegin || mode.returnBegin) {
      error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
      throw MultiClassError;
    }
    if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
      error("beginScope must be object");
      throw MultiClassError;
    }
    remapScopeNames(mode, mode.begin, { key: "beginScope" });
    mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
  }
  function endMultiClass(mode) {
    if (!Array.isArray(mode.end)) return;
    if (mode.skip || mode.excludeEnd || mode.returnEnd) {
      error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
      throw MultiClassError;
    }
    if (typeof mode.endScope !== "object" || mode.endScope === null) {
      error("endScope must be object");
      throw MultiClassError;
    }
    remapScopeNames(mode, mode.end, { key: "endScope" });
    mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
  }
  function scopeSugar(mode) {
    if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
      mode.beginScope = mode.scope;
      delete mode.scope;
    }
  }
  function MultiClass(mode) {
    scopeSugar(mode);
    if (typeof mode.beginScope === "string") {
      mode.beginScope = { _wrap: mode.beginScope };
    }
    if (typeof mode.endScope === "string") {
      mode.endScope = { _wrap: mode.endScope };
    }
    beginMultiClass(mode);
    endMultiClass(mode);
  }
  function compileLanguage(language) {
    function langRe(value, global) {
      return new RegExp(
        source(value),
        "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : "")
      );
    }
    class MultiRegex {
      constructor() {
        this.matchIndexes = {};
        this.regexes = [];
        this.matchAt = 1;
        this.position = 0;
      }
      // @ts-ignore
      addRule(re, opts) {
        opts.position = this.position++;
        this.matchIndexes[this.matchAt] = opts;
        this.regexes.push([opts, re]);
        this.matchAt += countMatchGroups(re) + 1;
      }
      compile() {
        if (this.regexes.length === 0) {
          this.exec = () => null;
        }
        const terminators = this.regexes.map((el) => el[1]);
        this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
        this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(s) {
        this.matcherRe.lastIndex = this.lastIndex;
        const match = this.matcherRe.exec(s);
        if (!match) {
          return null;
        }
        const i = match.findIndex((el, i2) => i2 > 0 && el !== void 0);
        const matchData = this.matchIndexes[i];
        match.splice(0, i);
        return Object.assign(match, matchData);
      }
    }
    class ResumableMultiRegex {
      constructor() {
        this.rules = [];
        this.multiRegexes = [];
        this.count = 0;
        this.lastIndex = 0;
        this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(index) {
        if (this.multiRegexes[index]) return this.multiRegexes[index];
        const matcher = new MultiRegex();
        this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
        matcher.compile();
        this.multiRegexes[index] = matcher;
        return matcher;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(re, opts) {
        this.rules.push([re, opts]);
        if (opts.type === "begin") this.count++;
      }
      /** @param {string} s */
      exec(s) {
        const m = this.getMatcher(this.regexIndex);
        m.lastIndex = this.lastIndex;
        let result = m.exec(s);
        if (this.resumingScanAtSamePosition()) {
          if (result && result.index === this.lastIndex) ;
          else {
            const m2 = this.getMatcher(0);
            m2.lastIndex = this.lastIndex + 1;
            result = m2.exec(s);
          }
        }
        if (result) {
          this.regexIndex += result.position + 1;
          if (this.regexIndex === this.count) {
            this.considerAll();
          }
        }
        return result;
      }
    }
    function buildModeRegex(mode) {
      const mm = new ResumableMultiRegex();
      mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
      if (mode.terminatorEnd) {
        mm.addRule(mode.terminatorEnd, { type: "end" });
      }
      if (mode.illegal) {
        mm.addRule(mode.illegal, { type: "illegal" });
      }
      return mm;
    }
    function compileMode(mode, parent) {
      const cmode = (
        /** @type CompiledMode */
        mode
      );
      if (mode.isCompiled) return cmode;
      [
        scopeClassName,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        compileMatch,
        MultiClass,
        beforeMatchExt
      ].forEach((ext) => ext(mode, parent));
      language.compilerExtensions.forEach((ext) => ext(mode, parent));
      mode.__beforeBegin = null;
      [
        beginKeywords,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        compileIllegal,
        // default to 1 relevance if not specified
        compileRelevance
      ].forEach((ext) => ext(mode, parent));
      mode.isCompiled = true;
      let keywordPattern = null;
      if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
        mode.keywords = Object.assign({}, mode.keywords);
        keywordPattern = mode.keywords.$pattern;
        delete mode.keywords.$pattern;
      }
      keywordPattern = keywordPattern || /\w+/;
      if (mode.keywords) {
        mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
      }
      cmode.keywordPatternRe = langRe(keywordPattern, true);
      if (parent) {
        if (!mode.begin) mode.begin = /\B|\b/;
        cmode.beginRe = langRe(cmode.begin);
        if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
        if (mode.end) cmode.endRe = langRe(cmode.end);
        cmode.terminatorEnd = source(cmode.end) || "";
        if (mode.endsWithParent && parent.terminatorEnd) {
          cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
        }
      }
      if (mode.illegal) cmode.illegalRe = langRe(
        /** @type {RegExp | string} */
        mode.illegal
      );
      if (!mode.contains) mode.contains = [];
      mode.contains = [].concat(...mode.contains.map(function(c) {
        return expandOrCloneMode(c === "self" ? mode : c);
      }));
      mode.contains.forEach(function(c) {
        compileMode(
          /** @type Mode */
          c,
          cmode
        );
      });
      if (mode.starts) {
        compileMode(mode.starts, parent);
      }
      cmode.matcher = buildModeRegex(cmode);
      return cmode;
    }
    if (!language.compilerExtensions) language.compilerExtensions = [];
    if (language.contains && language.contains.includes("self")) {
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    }
    language.classNameAliases = inherit$1(language.classNameAliases || {});
    return compileMode(
      /** @type Mode */
      language
    );
  }
  function dependencyOnParent(mode) {
    if (!mode) return false;
    return mode.endsWithParent || dependencyOnParent(mode.starts);
  }
  function expandOrCloneMode(mode) {
    if (mode.variants && !mode.cachedVariants) {
      mode.cachedVariants = mode.variants.map(function(variant) {
        return inherit$1(mode, { variants: null }, variant);
      });
    }
    if (mode.cachedVariants) {
      return mode.cachedVariants;
    }
    if (dependencyOnParent(mode)) {
      return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
    }
    if (Object.isFrozen(mode)) {
      return inherit$1(mode);
    }
    return mode;
  }
  var version = "11.9.0";
  class HTMLInjectionError extends Error {
    constructor(reason, html) {
      super(reason);
      this.name = "HTMLInjectionError";
      this.html = html;
    }
  }
  const escape = escapeHTML;
  const inherit = inherit$1;
  const NO_MATCH = Symbol("nomatch");
  const MAX_KEYWORD_HITS = 7;
  const HLJS = function(hljs) {
    const languages = /* @__PURE__ */ Object.create(null);
    const aliases = /* @__PURE__ */ Object.create(null);
    const plugins = [];
    let SAFE_MODE = true;
    const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
    const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
    let options = {
      ignoreUnescapedHTML: false,
      throwUnescapedHTML: false,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: TokenTreeEmitter
    };
    function shouldNotHighlight(languageName) {
      return options.noHighlightRe.test(languageName);
    }
    function blockLanguage(block) {
      let classes = block.className + " ";
      classes += block.parentNode ? block.parentNode.className : "";
      const match = options.languageDetectRe.exec(classes);
      if (match) {
        const language = getLanguage(match[1]);
        if (!language) {
          warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
          warn("Falling back to no-highlight mode for this block.", block);
        }
        return language ? match[1] : "no-highlight";
      }
      return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
    }
    function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
      let code = "";
      let languageName = "";
      if (typeof optionsOrCode === "object") {
        code = codeOrLanguageName;
        ignoreIllegals = optionsOrCode.ignoreIllegals;
        languageName = optionsOrCode.language;
      } else {
        deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
        deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
        languageName = codeOrLanguageName;
        code = optionsOrCode;
      }
      if (ignoreIllegals === void 0) {
        ignoreIllegals = true;
      }
      const context = {
        code,
        language: languageName
      };
      fire("before:highlight", context);
      const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
      result.code = context.code;
      fire("after:highlight", result);
      return result;
    }
    function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
      const keywordHits = /* @__PURE__ */ Object.create(null);
      function keywordData(mode, matchText) {
        return mode.keywords[matchText];
      }
      function processKeywords() {
        if (!top.keywords) {
          emitter.addText(modeBuffer);
          return;
        }
        let lastIndex = 0;
        top.keywordPatternRe.lastIndex = 0;
        let match = top.keywordPatternRe.exec(modeBuffer);
        let buf = "";
        while (match) {
          buf += modeBuffer.substring(lastIndex, match.index);
          const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
          const data = keywordData(top, word);
          if (data) {
            const [kind, keywordRelevance] = data;
            emitter.addText(buf);
            buf = "";
            keywordHits[word] = (keywordHits[word] || 0) + 1;
            if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
            if (kind.startsWith("_")) {
              buf += match[0];
            } else {
              const cssClass = language.classNameAliases[kind] || kind;
              emitKeyword(match[0], cssClass);
            }
          } else {
            buf += match[0];
          }
          lastIndex = top.keywordPatternRe.lastIndex;
          match = top.keywordPatternRe.exec(modeBuffer);
        }
        buf += modeBuffer.substring(lastIndex);
        emitter.addText(buf);
      }
      function processSubLanguage() {
        if (modeBuffer === "") return;
        let result2 = null;
        if (typeof top.subLanguage === "string") {
          if (!languages[top.subLanguage]) {
            emitter.addText(modeBuffer);
            return;
          }
          result2 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
          continuations[top.subLanguage] = /** @type {CompiledMode} */
          result2._top;
        } else {
          result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
        }
        if (top.relevance > 0) {
          relevance += result2.relevance;
        }
        emitter.__addSublanguage(result2._emitter, result2.language);
      }
      function processBuffer() {
        if (top.subLanguage != null) {
          processSubLanguage();
        } else {
          processKeywords();
        }
        modeBuffer = "";
      }
      function emitKeyword(keyword, scope) {
        if (keyword === "") return;
        emitter.startScope(scope);
        emitter.addText(keyword);
        emitter.endScope();
      }
      function emitMultiClass(scope, match) {
        let i = 1;
        const max = match.length - 1;
        while (i <= max) {
          if (!scope._emit[i]) {
            i++;
            continue;
          }
          const klass = language.classNameAliases[scope[i]] || scope[i];
          const text = match[i];
          if (klass) {
            emitKeyword(text, klass);
          } else {
            modeBuffer = text;
            processKeywords();
            modeBuffer = "";
          }
          i++;
        }
      }
      function startNewMode(mode, match) {
        if (mode.scope && typeof mode.scope === "string") {
          emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
        }
        if (mode.beginScope) {
          if (mode.beginScope._wrap) {
            emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
            modeBuffer = "";
          } else if (mode.beginScope._multi) {
            emitMultiClass(mode.beginScope, match);
            modeBuffer = "";
          }
        }
        top = Object.create(mode, { parent: { value: top } });
        return top;
      }
      function endOfMode(mode, match, matchPlusRemainder) {
        let matched = startsWith(mode.endRe, matchPlusRemainder);
        if (matched) {
          if (mode["on:end"]) {
            const resp = new Response(mode);
            mode["on:end"](match, resp);
            if (resp.isMatchIgnored) matched = false;
          }
          if (matched) {
            while (mode.endsParent && mode.parent) {
              mode = mode.parent;
            }
            return mode;
          }
        }
        if (mode.endsWithParent) {
          return endOfMode(mode.parent, match, matchPlusRemainder);
        }
      }
      function doIgnore(lexeme) {
        if (top.matcher.regexIndex === 0) {
          modeBuffer += lexeme[0];
          return 1;
        } else {
          resumeScanAtSamePosition = true;
          return 0;
        }
      }
      function doBeginMatch(match) {
        const lexeme = match[0];
        const newMode = match.rule;
        const resp = new Response(newMode);
        const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
        for (const cb of beforeCallbacks) {
          if (!cb) continue;
          cb(match, resp);
          if (resp.isMatchIgnored) return doIgnore(lexeme);
        }
        if (newMode.skip) {
          modeBuffer += lexeme;
        } else {
          if (newMode.excludeBegin) {
            modeBuffer += lexeme;
          }
          processBuffer();
          if (!newMode.returnBegin && !newMode.excludeBegin) {
            modeBuffer = lexeme;
          }
        }
        startNewMode(newMode, match);
        return newMode.returnBegin ? 0 : lexeme.length;
      }
      function doEndMatch(match) {
        const lexeme = match[0];
        const matchPlusRemainder = codeToHighlight.substring(match.index);
        const endMode = endOfMode(top, match, matchPlusRemainder);
        if (!endMode) {
          return NO_MATCH;
        }
        const origin = top;
        if (top.endScope && top.endScope._wrap) {
          processBuffer();
          emitKeyword(lexeme, top.endScope._wrap);
        } else if (top.endScope && top.endScope._multi) {
          processBuffer();
          emitMultiClass(top.endScope, match);
        } else if (origin.skip) {
          modeBuffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            modeBuffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            modeBuffer = lexeme;
          }
        }
        do {
          if (top.scope) {
            emitter.closeNode();
          }
          if (!top.skip && !top.subLanguage) {
            relevance += top.relevance;
          }
          top = top.parent;
        } while (top !== endMode.parent);
        if (endMode.starts) {
          startNewMode(endMode.starts, match);
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }
      function processContinuations() {
        const list = [];
        for (let current = top; current !== language; current = current.parent) {
          if (current.scope) {
            list.unshift(current.scope);
          }
        }
        list.forEach((item) => emitter.openNode(item));
      }
      let lastMatch = {};
      function processLexeme(textBeforeMatch, match) {
        const lexeme = match && match[0];
        modeBuffer += textBeforeMatch;
        if (lexeme == null) {
          processBuffer();
          return 0;
        }
        if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
          modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
          if (!SAFE_MODE) {
            const err = new Error(`0 width match regex (${languageName})`);
            err.languageName = languageName;
            err.badRule = lastMatch.rule;
            throw err;
          }
          return 1;
        }
        lastMatch = match;
        if (match.type === "begin") {
          return doBeginMatch(match);
        } else if (match.type === "illegal" && !ignoreIllegals) {
          const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
          err.mode = top;
          throw err;
        } else if (match.type === "end") {
          const processed = doEndMatch(match);
          if (processed !== NO_MATCH) {
            return processed;
          }
        }
        if (match.type === "illegal" && lexeme === "") {
          return 1;
        }
        if (iterations > 1e5 && iterations > match.index * 3) {
          const err = new Error("potential infinite loop, way more iterations than matches");
          throw err;
        }
        modeBuffer += lexeme;
        return lexeme.length;
      }
      const language = getLanguage(languageName);
      if (!language) {
        error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
        throw new Error('Unknown language: "' + languageName + '"');
      }
      const md = compileLanguage(language);
      let result = "";
      let top = continuation || md;
      const continuations = {};
      const emitter = new options.__emitter(options);
      processContinuations();
      let modeBuffer = "";
      let relevance = 0;
      let index = 0;
      let iterations = 0;
      let resumeScanAtSamePosition = false;
      try {
        if (!language.__emitTokens) {
          top.matcher.considerAll();
          for (; ; ) {
            iterations++;
            if (resumeScanAtSamePosition) {
              resumeScanAtSamePosition = false;
            } else {
              top.matcher.considerAll();
            }
            top.matcher.lastIndex = index;
            const match = top.matcher.exec(codeToHighlight);
            if (!match) break;
            const beforeMatch = codeToHighlight.substring(index, match.index);
            const processedCount = processLexeme(beforeMatch, match);
            index = match.index + processedCount;
          }
          processLexeme(codeToHighlight.substring(index));
        } else {
          language.__emitTokens(codeToHighlight, emitter);
        }
        emitter.finalize();
        result = emitter.toHTML();
        return {
          language: languageName,
          value: result,
          relevance,
          illegal: false,
          _emitter: emitter,
          _top: top
        };
      } catch (err) {
        if (err.message && err.message.includes("Illegal")) {
          return {
            language: languageName,
            value: escape(codeToHighlight),
            illegal: true,
            relevance: 0,
            _illegalBy: {
              message: err.message,
              index,
              context: codeToHighlight.slice(index - 100, index + 100),
              mode: err.mode,
              resultSoFar: result
            },
            _emitter: emitter
          };
        } else if (SAFE_MODE) {
          return {
            language: languageName,
            value: escape(codeToHighlight),
            illegal: false,
            relevance: 0,
            errorRaised: err,
            _emitter: emitter,
            _top: top
          };
        } else {
          throw err;
        }
      }
    }
    function justTextHighlightResult(code) {
      const result = {
        value: escape(code),
        illegal: false,
        relevance: 0,
        _top: PLAINTEXT_LANGUAGE,
        _emitter: new options.__emitter(options)
      };
      result._emitter.addText(code);
      return result;
    }
    function highlightAuto(code, languageSubset) {
      languageSubset = languageSubset || options.languages || Object.keys(languages);
      const plaintext = justTextHighlightResult(code);
      const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
        (name) => _highlight(name, code, false)
      );
      results.unshift(plaintext);
      const sorted = results.sort((a, b) => {
        if (a.relevance !== b.relevance) return b.relevance - a.relevance;
        if (a.language && b.language) {
          if (getLanguage(a.language).supersetOf === b.language) {
            return 1;
          } else if (getLanguage(b.language).supersetOf === a.language) {
            return -1;
          }
        }
        return 0;
      });
      const [best, secondBest] = sorted;
      const result = best;
      result.secondBest = secondBest;
      return result;
    }
    function updateClassName(element, currentLang, resultLang) {
      const language = currentLang && aliases[currentLang] || resultLang;
      element.classList.add("hljs");
      element.classList.add(`language-${language}`);
    }
    function highlightElement(element) {
      let node = null;
      const language = blockLanguage(element);
      if (shouldNotHighlight(language)) return;
      fire(
        "before:highlightElement",
        { el: element, language }
      );
      if (element.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
        return;
      }
      if (element.children.length > 0) {
        if (!options.ignoreUnescapedHTML) {
          console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
          console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
          console.warn("The element with unescaped HTML:");
          console.warn(element);
        }
        if (options.throwUnescapedHTML) {
          const err = new HTMLInjectionError(
            "One of your code blocks includes unescaped HTML.",
            element.innerHTML
          );
          throw err;
        }
      }
      node = element;
      const text = node.textContent;
      const result = language ? highlight2(text, { language, ignoreIllegals: true }) : highlightAuto(text);
      element.innerHTML = result.value;
      element.dataset.highlighted = "yes";
      updateClassName(element, language, result.language);
      element.result = {
        language: result.language,
        // TODO: remove with version 11.0
        re: result.relevance,
        relevance: result.relevance
      };
      if (result.secondBest) {
        element.secondBest = {
          language: result.secondBest.language,
          relevance: result.secondBest.relevance
        };
      }
      fire("after:highlightElement", { el: element, result, text });
    }
    function configure(userOptions) {
      options = inherit(options, userOptions);
    }
    const initHighlighting = () => {
      highlightAll();
      deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function initHighlightingOnLoad() {
      highlightAll();
      deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let wantsHighlight = false;
    function highlightAll() {
      if (document.readyState === "loading") {
        wantsHighlight = true;
        return;
      }
      const blocks = document.querySelectorAll(options.cssSelector);
      blocks.forEach(highlightElement);
    }
    function boot() {
      if (wantsHighlight) highlightAll();
    }
    if (typeof window !== "undefined" && window.addEventListener) {
      window.addEventListener("DOMContentLoaded", boot, false);
    }
    function registerLanguage(languageName, languageDefinition) {
      let lang = null;
      try {
        lang = languageDefinition(hljs);
      } catch (error$1) {
        error("Language definition for '{}' could not be registered.".replace("{}", languageName));
        if (!SAFE_MODE) {
          throw error$1;
        } else {
          error(error$1);
        }
        lang = PLAINTEXT_LANGUAGE;
      }
      if (!lang.name) lang.name = languageName;
      languages[languageName] = lang;
      lang.rawDefinition = languageDefinition.bind(null, hljs);
      if (lang.aliases) {
        registerAliases(lang.aliases, { languageName });
      }
    }
    function unregisterLanguage(languageName) {
      delete languages[languageName];
      for (const alias of Object.keys(aliases)) {
        if (aliases[alias] === languageName) {
          delete aliases[alias];
        }
      }
    }
    function listLanguages() {
      return Object.keys(languages);
    }
    function getLanguage(name) {
      name = (name || "").toLowerCase();
      return languages[name] || languages[aliases[name]];
    }
    function registerAliases(aliasList, { languageName }) {
      if (typeof aliasList === "string") {
        aliasList = [aliasList];
      }
      aliasList.forEach((alias) => {
        aliases[alias.toLowerCase()] = languageName;
      });
    }
    function autoDetection(name) {
      const lang = getLanguage(name);
      return lang && !lang.disableAutodetect;
    }
    function upgradePluginAPI(plugin) {
      if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
        plugin["before:highlightElement"] = (data) => {
          plugin["before:highlightBlock"](
            Object.assign({ block: data.el }, data)
          );
        };
      }
      if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
        plugin["after:highlightElement"] = (data) => {
          plugin["after:highlightBlock"](
            Object.assign({ block: data.el }, data)
          );
        };
      }
    }
    function addPlugin(plugin) {
      upgradePluginAPI(plugin);
      plugins.push(plugin);
    }
    function removePlugin(plugin) {
      const index = plugins.indexOf(plugin);
      if (index !== -1) {
        plugins.splice(index, 1);
      }
    }
    function fire(event, args) {
      const cb = event;
      plugins.forEach(function(plugin) {
        if (plugin[cb]) {
          plugin[cb](args);
        }
      });
    }
    function deprecateHighlightBlock(el) {
      deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
      deprecated("10.7.0", "Please use highlightElement now.");
      return highlightElement(el);
    }
    Object.assign(hljs, {
      highlight: highlight2,
      highlightAuto,
      highlightAll,
      highlightElement,
      // TODO: Remove with v12 API
      highlightBlock: deprecateHighlightBlock,
      configure,
      initHighlighting,
      initHighlightingOnLoad,
      registerLanguage,
      unregisterLanguage,
      listLanguages,
      getLanguage,
      registerAliases,
      autoDetection,
      inherit,
      addPlugin,
      removePlugin
    });
    hljs.debugMode = function() {
      SAFE_MODE = false;
    };
    hljs.safeMode = function() {
      SAFE_MODE = true;
    };
    hljs.versionString = version;
    hljs.regex = {
      concat,
      lookahead,
      either,
      optional,
      anyNumberOfTimes
    };
    for (const key in MODES) {
      if (typeof MODES[key] === "object") {
        deepFreeze(MODES[key]);
      }
    }
    Object.assign(hljs, MODES);
    return hljs;
  };
  const highlight = HLJS({});
  highlight.newInstance = () => HLJS({});
  core = highlight;
  highlight.HighlightJS = highlight;
  highlight.default = highlight;
  return core;
}
var coreExports = /* @__PURE__ */ requireCore();
const HighlightJS = /* @__PURE__ */ getDefaultExportFromCjs(coreExports);
function createNode(parent, nodeName, currentDepth, runIndex, r, children = []) {
  return {
    parent,
    node: nodeName,
    id: `${nodeName}:${runIndex}`,
    depth: currentDepth,
    startTime: r?.data?.metadata?.startTime ?? 0,
    runIndex,
    children,
    consumedTokens: getConsumedTokens(r?.data)
  };
}
function getTreeNodeData(nodeName, workflow, aiData, runIndex) {
  return getTreeNodeDataRec(void 0, nodeName, 0, workflow, aiData, runIndex);
}
function getTreeNodeDataRec(parent, nodeName, currentDepth, workflow, aiData, runIndex) {
  const connections = workflow.connectionsByDestinationNode[nodeName];
  const resultData = aiData?.filter(
    (data) => data.node === nodeName && (runIndex === void 0 || runIndex === data.runIndex)
  ) ?? [];
  if (!connections) {
    return resultData.map((d) => createNode(parent, nodeName, currentDepth, d.runIndex, d));
  }
  const connectedSubNodes = workflow.getParentNodes(nodeName, "ALL_NON_MAIN", 1);
  const treeNode = createNode(parent, nodeName, currentDepth, runIndex ?? 0);
  const children = (aiData ?? []).flatMap(
    (data) => connectedSubNodes.includes(data.node) && (runIndex === void 0 || data.runIndex === runIndex) ? getTreeNodeDataRec(treeNode, data.node, currentDepth + 1, workflow, aiData, data.runIndex) : []
  );
  treeNode.children = children;
  if (resultData.length) {
    return resultData.map(
      (r) => createNode(parent, nodeName, currentDepth, r.runIndex, r, children)
    );
  }
  return [treeNode];
}
function createAiData(nodeName, workflow, getWorkflowResultDataByNodeName) {
  return workflow.getParentNodes(nodeName, "ALL_NON_MAIN").flatMap(
    (node) => (getWorkflowResultDataByNodeName(node) ?? []).map((task, index) => ({ node, task, index }))
  ).sort((a, b) => {
    if (a.task.executionIndex !== void 0 && b.task.executionIndex !== void 0) {
      return a.task.executionIndex - b.task.executionIndex;
    }
    const aTime = a.task.startTime ?? 0;
    const bTime = b.task.startTime ?? 0;
    return aTime - bTime;
  }).map(({ node, task, index }) => ({
    data: getReferencedData(task, false)[0],
    node,
    runIndex: index
  }));
}
function getReferencedData(taskData, withInput, withOutput) {
  if (!taskData) {
    return [];
  }
  const returnData = [];
  function addFunction(data, inOut) {
    if (!data) {
      return;
    }
    Object.keys(data).map((type) => {
      returnData.push({
        data: data[type][0],
        inOut,
        type,
        metadata: {
          executionTime: taskData.executionTime,
          startTime: taskData.startTime,
          subExecution: taskData.metadata?.subExecution
        }
      });
    });
  }
  if (withInput) {
    addFunction(taskData.inputOverride, "input");
  }
  {
    addFunction(taskData.data, "output");
  }
  return returnData;
}
const emptyTokenUsageData = {
  completionTokens: 0,
  promptTokens: 0,
  totalTokens: 0,
  isEstimate: false
};
function addTokenUsageData(one, another) {
  return {
    completionTokens: one.completionTokens + another.completionTokens,
    promptTokens: one.promptTokens + another.promptTokens,
    totalTokens: one.totalTokens + another.totalTokens,
    isEstimate: one.isEstimate || another.isEstimate
  };
}
function getConsumedTokens(outputRun) {
  if (!outputRun?.data) {
    return emptyTokenUsageData;
  }
  const tokenUsage = outputRun.data.reduce(
    (acc, curr) => {
      const tokenUsageData = curr.json?.tokenUsage ?? curr.json?.tokenUsageEstimate;
      if (!tokenUsageData) return acc;
      return addTokenUsageData(acc, {
        ...tokenUsageData,
        isEstimate: !!curr.json.tokenUsageEstimate
      });
    },
    emptyTokenUsageData
  );
  return tokenUsage;
}
function getTotalConsumedTokens(...usage) {
  return usage.reduce(addTokenUsageData, emptyTokenUsageData);
}
function getSubtreeTotalConsumedTokens(treeNode) {
  return getTotalConsumedTokens(
    treeNode.consumedTokens,
    ...treeNode.children.map(getSubtreeTotalConsumedTokens)
  );
}
function formatTokenUsageCount(usage, field) {
  const count = field === "total" ? usage.totalTokens : field === "completion" ? usage.completionTokens : usage.promptTokens;
  return usage.isEstimate ? `~${count}` : count.toLocaleString();
}
function findLogEntryToAutoSelect(tree, nodesByName, runData) {
  return findLogEntryToAutoSelectRec(tree, nodesByName, runData, 0);
}
function findLogEntryToAutoSelectRec(tree, nodesByName, runData, depth) {
  for (const entry of tree) {
    const taskData = runData[entry.node]?.[entry.runIndex];
    if (taskData?.error) {
      return entry;
    }
    const childAutoSelect = findLogEntryToAutoSelectRec(
      entry.children,
      nodesByName,
      runData,
      depth + 1
    );
    if (childAutoSelect) {
      return childAutoSelect;
    }
    if (nodesByName[entry.node]?.type === AGENT_LANGCHAIN_NODE_TYPE) {
      return entry;
    }
  }
  return depth === 0 ? tree[0] : void 0;
}
function createLogEntries(workflow, runData) {
  const runs = Object.entries(runData).filter(([nodeName]) => workflow.getChildNodes(nodeName, "ALL_NON_MAIN").length === 0).flatMap(
    ([nodeName, taskData]) => taskData.map((task, runIndex) => ({ nodeName, task, runIndex }))
  ).sort((a, b) => {
    if (a.task.executionIndex !== void 0 && b.task.executionIndex !== void 0) {
      return a.task.executionIndex - b.task.executionIndex;
    }
    return a.nodeName === b.nodeName ? a.runIndex - b.runIndex : a.task.startTime - b.task.startTime;
  });
  return runs.flatMap(({ nodeName, runIndex, task }) => {
    if (workflow.getParentNodes(nodeName, "ALL_NON_MAIN").length > 0) {
      return getTreeNodeData(
        nodeName,
        workflow,
        createAiData(nodeName, workflow, (node) => runData[node] ?? []),
        void 0
      );
    }
    return getTreeNodeData(
      nodeName,
      workflow,
      [
        {
          data: getReferencedData(task, false)[0],
          node: nodeName,
          runIndex
        }
      ],
      runIndex
    );
  });
}
const _hoisted_1$8 = { class: "node-error-view" };
const _hoisted_2$4 = { class: "node-error-view__header" };
const _hoisted_3$3 = {
  class: "node-error-view__header-message",
  "data-test-id": "node-error-message"
};
const _hoisted_4$3 = {
  key: 0,
  "data-test-id": "node-error-description",
  class: "node-error-view__header-description"
};
const _hoisted_5$3 = { key: 1 };
const _hoisted_6$2 = {
  key: 2,
  class: "node-error-view__button",
  "data-test-id": "node-error-view-ask-assistant-button"
};
const _hoisted_7$2 = {
  key: 0,
  class: "node-error-view__info"
};
const _hoisted_8$2 = { class: "node-error-view__info-header" };
const _hoisted_9$2 = { class: "node-error-view__info-title" };
const _hoisted_10 = { class: "copy-button" };
const _hoisted_11 = { class: "node-error-view__info-content" };
const _hoisted_12 = {
  key: 0,
  class: "node-error-view__details"
};
const _hoisted_13 = { class: "node-error-view__details-summary" };
const _hoisted_14 = { class: "node-error-view__details-content" };
const _hoisted_15 = {
  key: 0,
  class: "node-error-view__details-row"
};
const _hoisted_16 = { class: "node-error-view__details-label" };
const _hoisted_17 = { class: "node-error-view__details-value" };
const _hoisted_18 = {
  key: 1,
  class: "node-error-view__details-row"
};
const _hoisted_19 = { class: "node-error-view__details-label" };
const _hoisted_20 = { class: "node-error-view__details-value" };
const _hoisted_21 = {
  key: 2,
  class: "node-error-view__details-row"
};
const _hoisted_22 = { class: "node-error-view__details-label" };
const _hoisted_23 = { class: "node-error-view__details-value" };
const _hoisted_24 = {
  key: 3,
  class: "node-error-view__details-row"
};
const _hoisted_25 = { class: "node-error-view__details-label" };
const _hoisted_26 = { class: "node-error-view__details-value" };
const _hoisted_27 = {
  key: 4,
  class: "node-error-view__details-row"
};
const _hoisted_28 = { class: "node-error-view__details-label" };
const _hoisted_29 = { class: "node-error-view__details-value" };
const _hoisted_30 = { class: "node-error-view__details" };
const _hoisted_31 = { class: "node-error-view__details-summary" };
const _hoisted_32 = { class: "node-error-view__details-content" };
const _hoisted_33 = {
  key: 0,
  class: "node-error-view__details-row"
};
const _hoisted_34 = { class: "node-error-view__details-label" };
const _hoisted_35 = { class: "node-error-view__details-value" };
const _hoisted_36 = {
  key: 1,
  class: "node-error-view__details-row"
};
const _hoisted_37 = { class: "node-error-view__details-label" };
const _hoisted_38 = { class: "node-error-view__details-value" };
const _hoisted_39 = {
  key: 2,
  class: "node-error-view__details-row"
};
const _hoisted_40 = { class: "node-error-view__details-label" };
const _hoisted_41 = { class: "node-error-view__details-value" };
const _hoisted_42 = {
  key: 3,
  class: "node-error-view__details-row"
};
const _hoisted_43 = { class: "node-error-view__details-label" };
const _hoisted_44 = { class: "node-error-view__details-value" };
const _hoisted_45 = {
  key: 4,
  class: "node-error-view__details-row"
};
const _hoisted_46 = { class: "node-error-view__details-label" };
const _hoisted_47 = { class: "node-error-view__details-value" };
const _hoisted_48 = { class: "node-error-view__details-row" };
const _hoisted_49 = { class: "node-error-view__details-label" };
const _hoisted_50 = { class: "node-error-view__details-value" };
const _hoisted_51 = {
  key: 5,
  class: "node-error-view__details-row"
};
const _hoisted_52 = { class: "node-error-view__details-label" };
const _hoisted_53 = { class: "node-error-view__details-value" };
const _hoisted_54 = {
  key: 6,
  class: "node-error-view__details-row"
};
const _hoisted_55 = { class: "node-error-view__details-label" };
const _hoisted_56 = { class: "node-error-view__details-value" };
const _hoisted_57 = {
  key: 7,
  class: "node-error-view__details-row"
};
const _hoisted_58 = { class: "node-error-view__details-label" };
const _hoisted_59 = { class: "node-error-view__details-value" };
const _hoisted_60 = {
  key: 8,
  class: "node-error-view__details-row"
};
const _hoisted_61 = { class: "node-error-view__details-label" };
const _hoisted_62 = { class: "node-error-view__details-value" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "NodeErrorView",
  props: {
    error: {},
    compact: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const clipboard = useClipboard();
    const toast = useToast();
    const i18n = useI18n();
    const assistantHelpers = useAIAssistantHelpers();
    const nodeTypesStore = useNodeTypesStore();
    const ndvStore = useNDVStore();
    const rootStore = useRootStore();
    const assistantStore = useAssistantStore();
    const uiStore = useUIStore();
    const displayCause = computed(() => {
      return JSON.stringify(props.error.cause ?? "").length < MAX_DISPLAY_DATA_SIZE;
    });
    const node = computed(() => {
      return props.error.node || ndvStore.activeNode;
    });
    const parameters = computed(() => {
      if (!node.value) {
        return [];
      }
      const nodeType = nodeTypesStore.getNodeType(node.value.type, node.value.typeVersion);
      if (nodeType === null) {
        return [];
      }
      return nodeType.properties;
    });
    const n8nVersion = computed(() => {
      const baseUrl = rootStore.urlBaseEditor;
      let instanceType = "Self Hosted";
      if (baseUrl.includes("n8n.cloud")) {
        instanceType = "Cloud";
      }
      return rootStore.versionCli + ` (${instanceType})`;
    });
    const hasManyInputItems = computed(() => {
      return ndvStore.ndvInputData.length > 1;
    });
    const nodeDefaultName = computed(() => {
      if (!node.value) {
        return "Node";
      }
      const nodeType = nodeTypesStore.getNodeType(node.value.type, node.value.typeVersion);
      return nodeType?.defaults?.name || node.value.name;
    });
    const prepareRawMessages = computed(() => {
      const returnData = [];
      if (!props.error.messages?.length) {
        return [];
      }
      const errorMessage = getErrorMessage();
      Array.from(new Set(props.error.messages)).forEach((message) => {
        const isParsable = /^\d{3} - \{/.test(message);
        const parts = isParsable ? message.split(" - ").map((part) => part.trim()) : [];
        for (const part of parts) {
          try {
            const parsed = JSON.parse(part);
            if (typeof parsed === "object") {
              returnData.push(parsed);
              return;
            }
          } catch (error) {
          }
        }
        if (message === errorMessage) return;
        returnData.push(message);
      });
      return returnData;
    });
    const isAskAssistantAvailable = computed(() => {
      if (!node.value || isSubNodeError.value) {
        return false;
      }
      const isCustomNode = node.value.type === void 0 || isCommunityPackageName(node.value.type);
      return assistantStore.canShowAssistantButtonsOnCanvas && !isCustomNode && !nodeIsHidden();
    });
    const assistantAlreadyAsked = computed(() => {
      return assistantStore.isNodeErrorActive({
        error: assistantHelpers.simplifyErrorForAssistant(props.error),
        node: props.error.node || ndvStore.activeNode
      });
    });
    const isSubNodeError = computed(() => {
      return props.error.name === "NodeOperationError" && props.error.functionality === "configuration-node";
    });
    function nodeVersionTag(nodeType) {
      if (!nodeType || "hidden" in nodeType && nodeType.hidden) {
        return i18n.baseText("nodeSettings.deprecated");
      }
      const latestNodeVersion = Math.max(...nodeTypesStore.getNodeVersions(nodeType.type));
      if (latestNodeVersion === nodeType.typeVersion) {
        return i18n.baseText("nodeSettings.latest");
      }
      return i18n.baseText("nodeSettings.latestVersion", {
        interpolate: { version: latestNodeVersion.toString() }
      });
    }
    function prepareDescription(description) {
      return sanitizeHtml(description.replace(/`(.*?)`/g, "<code>$1</code>"));
    }
    function getErrorDescription() {
      if (props.error.context?.descriptionKey) {
        const interpolate = {
          nodeCause: props.error.context.nodeCause,
          runIndex: props.error.context.runIndex ?? "0",
          itemIndex: props.error.context.itemIndex ?? "0"
        };
        return prepareDescription(
          i18n.baseText(
            `nodeErrorView.description.${props.error.context.descriptionKey}`,
            { interpolate }
          )
        );
      }
      if (!props.error.context?.descriptionTemplate) {
        return prepareDescription(props.error.description ?? "");
      }
      const parameterName = parameterDisplayName(props.error.context.parameter);
      return prepareDescription(
        props.error.context.descriptionTemplate.replace(/%%PARAMETER%%/g, parameterName)
      );
    }
    function addItemIndexSuffix(message) {
      let itemIndexSuffix = "";
      if (hasManyInputItems.value && props.error?.context?.itemIndex !== void 0) {
        itemIndexSuffix = `item ${props.error.context.itemIndex}`;
      }
      if (message.includes(itemIndexSuffix)) return message;
      return `${message} [${itemIndexSuffix}]`;
    }
    function getErrorMessage() {
      let message = "";
      const isNonEmptyString = (value) => !!value && typeof value === "string";
      if (isSubNodeError.value) {
        message = i18n.baseText("nodeErrorView.errorSubNode", {
          interpolate: { node: props.error.node.name }
        });
      } else if (isNonEmptyString(props.error.message) && (props.error.message === props.error.description || !props.error.context?.messageTemplate)) {
        message = props.error.message;
      } else if (isNonEmptyString(props.error.context?.messageTemplate) && isNonEmptyString(props.error.context?.parameter)) {
        const parameterName = parameterDisplayName(props.error.context.parameter);
        message = props.error.context.messageTemplate.replace(/%%PARAMETER%%/g, parameterName);
      } else if (Array.isArray(props.error.messages) && props.error.messages.length > 0) {
        message = props.error.messages[0];
      }
      return addItemIndexSuffix(message);
    }
    function parameterDisplayName(path, fullPath = true) {
      try {
        const params = getParameterName(parameters.value, path.split("."));
        if (!params.length) {
          throw new Error();
        }
        if (!fullPath) {
          return params.pop().displayName;
        }
        return params.map((parameter) => parameter.displayName).join(" > ");
      } catch (error) {
        return `Could not find parameter "${path}"`;
      }
    }
    function getParameterName(params, pathParts) {
      let currentParameterName = pathParts.shift();
      if (currentParameterName === void 0) {
        return [];
      }
      const arrayMatch = currentParameterName.match(/(.*)\[([\d])\]$/);
      if (arrayMatch !== null && arrayMatch.length > 0) {
        currentParameterName = arrayMatch[1];
      }
      const currentParameter = params.find(
        (parameter) => parameter.name === currentParameterName
      );
      if (currentParameter === void 0) {
        throw new Error(`Could not find parameter "${currentParameterName}"`);
      }
      if (pathParts.length === 0) {
        return [currentParameter];
      }
      if (currentParameter.hasOwnProperty("options")) {
        return [
          currentParameter,
          ...getParameterName(currentParameter.options, pathParts)
        ];
      }
      if (currentParameter.hasOwnProperty("values")) {
        return [
          currentParameter,
          ...getParameterName(currentParameter.values, pathParts)
        ];
      }
      return [currentParameter];
    }
    function copyErrorDetails() {
      const error = props.error;
      const errorInfo = {
        errorMessage: getErrorMessage()
      };
      if (error.description) {
        errorInfo.errorDescription = error.description;
      }
      const errorDetails = {};
      if (error?.messages?.length) {
        errorDetails.rawErrorMessage = error.messages;
      }
      if ("httpCode" in error && error.httpCode) {
        errorDetails.httpCode = error.httpCode;
      }
      if (error.context && error.context.data) {
        errorDetails.errorData = error.context.data;
      }
      if (error.extra) {
        errorDetails.errorExtra = error.extra;
      }
      errorInfo.errorDetails = errorDetails;
      const n8nDetails = {};
      if (error.node) {
        n8nDetails.nodeName = error.node.name;
        n8nDetails.nodeType = error.node.type;
        n8nDetails.nodeVersion = error.node.typeVersion;
        if (error.node?.parameters?.resource) {
          n8nDetails.resource = error.node.parameters.resource;
        }
        if (error?.node?.parameters?.operation) {
          n8nDetails.operation = error.node.parameters.operation;
        }
      }
      if (error.context) {
        if (error.context.itemIndex !== void 0) {
          n8nDetails.itemIndex = error.context.itemIndex;
        }
        if (error.context.runIndex !== void 0) {
          n8nDetails.runIndex = error.context.runIndex;
        }
        if (error.context.parameter !== void 0) {
          n8nDetails.parameter = error.context.parameter;
        }
        if (error.context.causeDetailed) {
          n8nDetails.causeDetailed = error.context.causeDetailed;
        }
      }
      if (error.timestamp) {
        n8nDetails.time = new Date(error.timestamp).toLocaleString();
      }
      n8nDetails.n8nVersion = n8nVersion.value;
      n8nDetails.binaryDataMode = rootStore.binaryDataMode;
      if (error.cause) {
        n8nDetails.cause = error.cause;
      }
      n8nDetails.stackTrace = error.stack?.split("\n");
      errorInfo.n8nDetails = n8nDetails;
      void clipboard.copy(JSON.stringify(errorInfo, null, 2));
      copySuccess();
    }
    function copySuccess() {
      toast.showMessage({
        title: i18n.baseText("nodeErrorView.showMessage.title"),
        type: "info"
      });
    }
    function nodeIsHidden() {
      const nodeType = nodeTypesStore.getNodeType(node?.value.type);
      return nodeType?.hidden ?? false;
    }
    const onOpenErrorNodeDetailClick = () => {
      ndvStore.activeNodeName = props.error.node.name;
    };
    async function onAskAssistantClick() {
      const { message, lineNumber, description } = props.error;
      const sessionInProgress = !assistantStore.isSessionEnded;
      const errorHelp = {
        error: {
          name: props.error.name,
          message,
          lineNumber,
          description: description ?? getErrorDescription(),
          type: "type" in props.error ? props.error.type : void 0
        },
        node: node.value
      };
      if (sessionInProgress) {
        uiStore.openModalWithData({
          name: NEW_ASSISTANT_SESSION_MODAL,
          data: { context: { errorHelp } }
        });
        return;
      }
      await assistantStore.initErrorHelper(errorHelp);
      assistantStore.trackUserOpenedAssistant({
        source: "error",
        task: "error",
        has_existing_session: false
      });
    }
    return (_ctx, _cache) => {
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_n8n_icon_button = resolveComponent("n8n-icon-button");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("div", _hoisted_3$3, [
            createBaseVNode("div", null, toDisplayString(getErrorMessage()), 1)
          ]),
          (_ctx.error.description || _ctx.error.context?.descriptionKey) && !isSubNodeError.value ? withDirectives((openBlock(), createElementBlock("div", _hoisted_4$3, null, 512)), [
            [_directive_n8n_html, getErrorDescription()]
          ]) : createCommentVNode("", true),
          isSubNodeError.value ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
            createVNode(_component_n8n_button, {
              icon: "arrow-right",
              type: "secondary",
              label: unref(i18n).baseText("pushConnection.executionError.openNode"),
              class: "node-error-view__button",
              "data-test-id": "node-error-view-open-node-button",
              onClick: onOpenErrorNodeDetailClick
            }, null, 8, ["label"])
          ])) : createCommentVNode("", true),
          isAskAssistantAvailable.value ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
            createVNode(InlineAskAssistantButton, {
              asked: assistantAlreadyAsked.value,
              onClick: onAskAssistantClick
            }, null, 8, ["asked"])
          ])) : createCommentVNode("", true)
        ]),
        !_ctx.compact ? (openBlock(), createElementBlock("div", _hoisted_7$2, [
          createBaseVNode("div", _hoisted_8$2, [
            createBaseVNode("p", _hoisted_9$2, toDisplayString(unref(i18n).baseText("nodeErrorView.details.title")), 1),
            createVNode(_component_n8n_tooltip, {
              class: "item",
              content: unref(i18n).baseText("nodeErrorView.copyToClipboard.tooltip"),
              placement: "left"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_10, [
                  createVNode(_component_n8n_icon_button, {
                    icon: "copy",
                    type: "secondary",
                    size: "mini",
                    text: "true",
                    "transparent-background": "transparent",
                    onClick: copyErrorDetails
                  })
                ])
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          createBaseVNode("div", _hoisted_11, [
            "httpCode" in _ctx.error && _ctx.error.httpCode || prepareRawMessages.value.length || _ctx.error?.context?.data || _ctx.error.extra ? (openBlock(), createElementBlock("details", _hoisted_12, [
              createBaseVNode("summary", _hoisted_13, [
                createVNode(_component_font_awesome_icon, {
                  class: "node-error-view__details-icon",
                  icon: "angle-right"
                }),
                createTextVNode(" " + toDisplayString(unref(i18n).baseText("nodeErrorView.details.from", {
                  interpolate: { node: `${nodeDefaultName.value}` }
                })), 1)
              ]),
              createBaseVNode("div", _hoisted_14, [
                "httpCode" in _ctx.error && _ctx.error.httpCode ? (openBlock(), createElementBlock("div", _hoisted_15, [
                  createBaseVNode("p", _hoisted_16, toDisplayString(unref(i18n).baseText("nodeErrorView.errorCode")), 1),
                  createBaseVNode("p", _hoisted_17, [
                    createBaseVNode("code", null, toDisplayString(_ctx.error.httpCode), 1)
                  ])
                ])) : createCommentVNode("", true),
                prepareRawMessages.value.length ? (openBlock(), createElementBlock("div", _hoisted_18, [
                  createBaseVNode("p", _hoisted_19, toDisplayString(unref(i18n).baseText("nodeErrorView.details.rawMessages")), 1),
                  createBaseVNode("div", _hoisted_20, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(prepareRawMessages.value, (msg, index) => {
                      return openBlock(), createElementBlock("div", { key: index }, [
                        createBaseVNode("pre", null, [
                          createBaseVNode("code", null, toDisplayString(msg), 1)
                        ])
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error?.context?.data ? (openBlock(), createElementBlock("div", _hoisted_21, [
                  createBaseVNode("p", _hoisted_22, toDisplayString(unref(i18n).baseText("nodeErrorView.details.errorData")), 1),
                  createBaseVNode("div", _hoisted_23, [
                    createBaseVNode("pre", null, [
                      createBaseVNode("code", null, toDisplayString(_ctx.error.context.data), 1)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.extra ? (openBlock(), createElementBlock("div", _hoisted_24, [
                  createBaseVNode("p", _hoisted_25, toDisplayString(unref(i18n).baseText("nodeErrorView.details.errorExtra")), 1),
                  createBaseVNode("div", _hoisted_26, [
                    createBaseVNode("pre", null, [
                      createBaseVNode("code", null, toDisplayString(_ctx.error.extra), 1)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.context && _ctx.error.context.request ? (openBlock(), createElementBlock("div", _hoisted_27, [
                  createBaseVNode("p", _hoisted_28, toDisplayString(unref(i18n).baseText("nodeErrorView.details.request")), 1),
                  createBaseVNode("div", _hoisted_29, [
                    createBaseVNode("pre", null, [
                      createBaseVNode("code", null, toDisplayString(_ctx.error.context.request), 1)
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("details", _hoisted_30, [
              createBaseVNode("summary", _hoisted_31, [
                createVNode(_component_font_awesome_icon, {
                  class: "node-error-view__details-icon",
                  icon: "angle-right"
                }),
                createTextVNode(" " + toDisplayString(unref(i18n).baseText("nodeErrorView.details.info")), 1)
              ]),
              createBaseVNode("div", _hoisted_32, [
                _ctx.error.context && _ctx.error.context.itemIndex !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_33, [
                  createBaseVNode("p", _hoisted_34, toDisplayString(unref(i18n).baseText("nodeErrorView.itemIndex")), 1),
                  createBaseVNode("p", _hoisted_35, [
                    createBaseVNode("code", null, toDisplayString(_ctx.error.context.itemIndex), 1)
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.context && _ctx.error.context.runIndex !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_36, [
                  createBaseVNode("p", _hoisted_37, toDisplayString(unref(i18n).baseText("nodeErrorView.runIndex")), 1),
                  createBaseVNode("p", _hoisted_38, [
                    createBaseVNode("code", null, toDisplayString(_ctx.error.context.runIndex), 1)
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.context && _ctx.error.context.parameter !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_39, [
                  createBaseVNode("p", _hoisted_40, toDisplayString(unref(i18n).baseText("nodeErrorView.inParameter")), 1),
                  createBaseVNode("p", _hoisted_41, [
                    createBaseVNode("code", null, toDisplayString(parameterDisplayName(`${_ctx.error.context.parameter}`)), 1)
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.node && _ctx.error.node.type ? (openBlock(), createElementBlock("div", _hoisted_42, [
                  createBaseVNode("p", _hoisted_43, toDisplayString(unref(i18n).baseText("nodeErrorView.details.nodeType")), 1),
                  createBaseVNode("p", _hoisted_44, [
                    createBaseVNode("code", null, toDisplayString(_ctx.error.node.type), 1)
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.node && _ctx.error.node.typeVersion ? (openBlock(), createElementBlock("div", _hoisted_45, [
                  createBaseVNode("p", _hoisted_46, toDisplayString(unref(i18n).baseText("nodeErrorView.details.nodeVersion")), 1),
                  createBaseVNode("p", _hoisted_47, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", null, toDisplayString(_ctx.error.node.typeVersion + " "), 1),
                      createBaseVNode("span", null, "(" + toDisplayString(nodeVersionTag(_ctx.error.node)) + ")", 1)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_48, [
                  createBaseVNode("p", _hoisted_49, toDisplayString(unref(i18n).baseText("nodeErrorView.details.n8nVersion")), 1),
                  createBaseVNode("p", _hoisted_50, [
                    createBaseVNode("code", null, toDisplayString(n8nVersion.value), 1)
                  ])
                ]),
                _ctx.error.timestamp ? (openBlock(), createElementBlock("div", _hoisted_51, [
                  createBaseVNode("p", _hoisted_52, toDisplayString(unref(i18n).baseText("nodeErrorView.time")), 1),
                  createBaseVNode("p", _hoisted_53, [
                    createBaseVNode("code", null, toDisplayString(new Date(_ctx.error.timestamp).toLocaleString()), 1)
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.cause && displayCause.value ? (openBlock(), createElementBlock("div", _hoisted_54, [
                  createBaseVNode("p", _hoisted_55, toDisplayString(unref(i18n).baseText("nodeErrorView.details.errorCause")), 1),
                  createBaseVNode("pre", _hoisted_56, [
                    createBaseVNode("code", null, toDisplayString(_ctx.error.cause), 1)
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.context && _ctx.error.context.causeDetailed ? (openBlock(), createElementBlock("div", _hoisted_57, [
                  createBaseVNode("p", _hoisted_58, toDisplayString(unref(i18n).baseText("nodeErrorView.details.causeDetailed")), 1),
                  createBaseVNode("pre", _hoisted_59, [
                    createBaseVNode("code", null, toDisplayString(_ctx.error.context.causeDetailed), 1)
                  ])
                ])) : createCommentVNode("", true),
                _ctx.error.stack ? (openBlock(), createElementBlock("div", _hoisted_60, [
                  createBaseVNode("p", _hoisted_61, toDisplayString(unref(i18n).baseText("nodeErrorView.details.stackTrace")), 1),
                  createBaseVNode("pre", _hoisted_62, [
                    createBaseVNode("code", null, toDisplayString(_ctx.error.stack), 1)
                  ])
                ])) : createCommentVNode("", true)
              ])
            ])
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ConsumedTokensDetails",
  props: {
    consumedTokens: {}
  },
  setup(__props) {
    const i18n = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(N8nText), {
          bold: true,
          size: "small"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens.prompt")) + " " + toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens", {
              interpolate: {
                count: unref(formatTokenUsageCount)(_ctx.consumedTokens, "prompt")
              }
            })), 1)
          ]),
          _: 1
        }),
        _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
        createVNode(unref(N8nText), {
          bold: true,
          size: "small"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens.completion")) + " " + toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens", {
              interpolate: {
                count: unref(formatTokenUsageCount)(_ctx.consumedTokens, "completion")
              }
            })), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _hoisted_1$7 = ["href"];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ViewSubExecution",
  props: {
    taskMetadata: {},
    displayMode: {},
    inline: { type: Boolean, default: false }
  },
  setup(__props) {
    const { trackOpeningRelatedExecution, resolveRelatedExecutionUrl } = useExecutionHelpers();
    const i18n = useI18n();
    const props = __props;
    const hasRelatedExecution = computed(() => {
      return Boolean(props.taskMetadata.subExecution ?? props.taskMetadata.parentExecution);
    });
    function getExecutionLinkLabel(task) {
      if (task.parentExecution) {
        return i18n.baseText("runData.openParentExecution", {
          interpolate: { id: task.parentExecution.executionId }
        });
      }
      if (task.subExecution) {
        if (props.taskMetadata.subExecutionsCount === 1) {
          return i18n.baseText("runData.openSubExecutionSingle");
        } else {
          return i18n.baseText("runData.openSubExecutionWithId", {
            interpolate: { id: task.subExecution.executionId }
          });
        }
      }
      return;
    }
    return (_ctx, _cache) => {
      const _component_N8nIcon = resolveComponent("N8nIcon");
      return hasRelatedExecution.value ? (openBlock(), createElementBlock("a", {
        key: 0,
        class: normalizeClass({ [_ctx.$style.relatedExecutionInfo]: !_ctx.inline }),
        "data-test-id": "related-execution-link",
        href: unref(resolveRelatedExecutionUrl)(_ctx.taskMetadata),
        target: "_blank",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => unref(trackOpeningRelatedExecution)(_ctx.taskMetadata, _ctx.displayMode), ["stop"]))
      }, [
        createVNode(_component_N8nIcon, {
          icon: "external-link-alt",
          size: "xsmall"
        }),
        createTextVNode(" " + toDisplayString(getExecutionLinkLabel(_ctx.taskMetadata)), 1)
      ], 10, _hoisted_1$7)) : createCommentVNode("", true);
    };
  }
});
const relatedExecutionInfo = "_relatedExecutionInfo_saqms_123";
const style0$4 = {
  relatedExecutionInfo
};
const cssModules$4 = {
  "$style": style0$4
};
const ViewSubExecution = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__cssModules", cssModules$4]]);
var vueJsonPretty$1 = { exports: {} };
var vueJsonPretty = vueJsonPretty$1.exports;
var hasRequiredVueJsonPretty;
function requireVueJsonPretty() {
  if (hasRequiredVueJsonPretty) return vueJsonPretty$1.exports;
  hasRequiredVueJsonPretty = 1;
  (function(module, exports) {
    !function(e, t) {
      module.exports = t(requireVue());
    }(vueJsonPretty, function(e) {
      return function() {
        var t = { 789: function(t2) {
          t2.exports = e;
        } }, n = {};
        function o(e2) {
          var r2 = n[e2];
          if (void 0 !== r2) return r2.exports;
          var l = n[e2] = { exports: {} };
          return t[e2](l, l.exports, o), l.exports;
        }
        o.d = function(e2, t2) {
          for (var n2 in t2) o.o(t2, n2) && !o.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
        }, o.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, o.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        };
        var r = {};
        return function() {
          function e2(e3, t3) {
            (null == t3 || t3 > e3.length) && (t3 = e3.length);
            for (var n3 = 0, o2 = new Array(t3); n3 < t3; n3++) o2[n3] = e3[n3];
            return o2;
          }
          function t2(t3, n3) {
            if (t3) {
              if ("string" == typeof t3) return e2(t3, n3);
              var o2 = Object.prototype.toString.call(t3).slice(8, -1);
              return "Object" === o2 && t3.constructor && (o2 = t3.constructor.name), "Map" === o2 || "Set" === o2 ? Array.from(t3) : "Arguments" === o2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o2) ? e2(t3, n3) : void 0;
            }
          }
          function n2(n3) {
            return function(t3) {
              if (Array.isArray(t3)) return e2(t3);
            }(n3) || function(e3) {
              if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
            }(n3) || t2(n3) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function l(e3, t3, n3) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
          }
          o.r(r), o.d(r, { default: function() {
            return k;
          } });
          var a = o(789), c = (0, a.defineComponent)({ props: { data: { required: true, type: String }, onClick: Function }, render: function() {
            var e3 = this.data, t3 = this.onClick;
            return (0, a.createVNode)("span", { class: "vjs-tree-brackets", onClick: t3 }, [e3]);
          } }), i = (0, a.defineComponent)({ emits: ["change", "update:modelValue"], props: { checked: { type: Boolean, default: false }, isMultiple: Boolean, onChange: Function }, setup: function(e3, t3) {
            var n3 = t3.emit;
            return { uiType: (0, a.computed)(function() {
              return e3.isMultiple ? "checkbox" : "radio";
            }), model: (0, a.computed)({ get: function() {
              return e3.checked;
            }, set: function(e4) {
              return n3("update:modelValue", e4);
            } }) };
          }, render: function() {
            var e3 = this.uiType, t3 = this.model, n3 = this.$emit;
            return (0, a.createVNode)("label", { class: ["vjs-check-controller", t3 ? "is-checked" : ""], onClick: function(e4) {
              return e4.stopPropagation();
            } }, [(0, a.createVNode)("span", { class: "vjs-check-controller-inner is-".concat(e3) }, null), (0, a.createVNode)("input", { checked: t3, class: "vjs-check-controller-original is-".concat(e3), type: e3, onChange: function() {
              return n3("change", t3);
            } }, null)]);
          } }), u = (0, a.defineComponent)({ props: { nodeType: { required: true, type: String }, onClick: Function }, render: function() {
            var e3 = this.nodeType, t3 = this.onClick, n3 = "objectStart" === e3 || "arrayStart" === e3;
            return n3 || "objectCollapsed" === e3 || "arrayCollapsed" === e3 ? (0, a.createVNode)("span", { class: "vjs-carets vjs-carets-".concat(n3 ? "open" : "close"), onClick: t3 }, [(0, a.createVNode)("svg", { viewBox: "0 0 1024 1024", focusable: "false", "data-icon": "caret-down", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" }, [(0, a.createVNode)("path", { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" }, null)])]) : null;
          } });
          function d(e3) {
            return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, d(e3);
          }
          function s(e3) {
            return Object.prototype.toString.call(e3).slice(8, -1).toLowerCase();
          }
          function p(e3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root", n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o2 = arguments.length > 3 ? arguments[3] : void 0, r2 = o2 || {}, l2 = r2.key, a2 = r2.index, c2 = r2.type, i2 = void 0 === c2 ? "content" : c2, u2 = r2.showComma, d2 = void 0 !== u2 && u2, f2 = r2.length, y2 = void 0 === f2 ? 1 : f2, v2 = s(e3);
            if ("array" === v2) {
              var b2 = h(e3.map(function(e4, o3, r3) {
                return p(e4, "".concat(t3, "[").concat(o3, "]"), n3 + 1, { index: o3, showComma: o3 !== r3.length - 1, length: y2, type: i2 });
              }));
              return [p("[", t3, n3, { showComma: false, key: l2, length: e3.length, type: "arrayStart" })[0]].concat(b2, p("]", t3, n3, { showComma: d2, length: e3.length, type: "arrayEnd" })[0]);
            }
            if ("object" === v2) {
              var g2 = Object.keys(e3), m2 = h(g2.map(function(o3, r3, l3) {
                return p(e3[o3], /^[a-zA-Z_]\w*$/.test(o3) ? "".concat(t3, ".").concat(o3) : "".concat(t3, '["').concat(o3, '"]'), n3 + 1, { key: o3, showComma: r3 !== l3.length - 1, length: y2, type: i2 });
              }));
              return [p("{", t3, n3, { showComma: false, key: l2, index: a2, length: g2.length, type: "objectStart" })[0]].concat(m2, p("}", t3, n3, { showComma: d2, length: g2.length, type: "objectEnd" })[0]);
            }
            return [{ content: e3, level: n3, key: l2, index: a2, path: t3, showComma: d2, length: y2, type: i2 }];
          }
          function h(e3) {
            if ("function" == typeof Array.prototype.flat) return e3.flat();
            for (var t3 = n2(e3), o2 = []; t3.length; ) {
              var r2 = t3.shift();
              Array.isArray(r2) ? t3.unshift.apply(t3, n2(r2)) : o2.push(r2);
            }
            return o2;
          }
          function f(e3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /* @__PURE__ */ new WeakMap();
            if (null == e3) return e3;
            if (e3 instanceof Date) return new Date(e3);
            if (e3 instanceof RegExp) return new RegExp(e3);
            if ("object" !== d(e3)) return e3;
            if (t3.get(e3)) return t3.get(e3);
            if (Array.isArray(e3)) {
              var n3 = e3.map(function(e4) {
                return f(e4, t3);
              });
              return t3.set(e3, n3), n3;
            }
            var o2 = {};
            for (var r2 in e3) o2[r2] = f(e3[r2], t3);
            return t3.set(e3, o2), o2;
          }
          function y(e3, t3) {
            var n3 = Object.keys(e3);
            if (Object.getOwnPropertySymbols) {
              var o2 = Object.getOwnPropertySymbols(e3);
              t3 && (o2 = o2.filter(function(t4) {
                return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
              })), n3.push.apply(n3, o2);
            }
            return n3;
          }
          function v(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n3 = null != arguments[t3] ? arguments[t3] : {};
              t3 % 2 ? y(Object(n3), true).forEach(function(t4) {
                l(e3, t4, n3[t4]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : y(Object(n3)).forEach(function(t4) {
                Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
              });
            }
            return e3;
          }
          var b = { showLength: { type: Boolean, default: false }, showDoubleQuotes: { type: Boolean, default: true }, renderNodeKey: Function, renderNodeValue: Function, selectableType: String, showSelectController: { type: Boolean, default: false }, showLine: { type: Boolean, default: true }, showLineNumber: { type: Boolean, default: false }, selectOnClickNode: { type: Boolean, default: true }, nodeSelectable: { type: Function, default: function() {
            return true;
          } }, highlightSelectedNode: { type: Boolean, default: true }, showIcon: { type: Boolean, default: false }, showKeyValueSpace: { type: Boolean, default: true }, editable: { type: Boolean, default: false }, editableTrigger: { type: String, default: "click" }, onNodeClick: { type: Function }, onBracketsClick: { type: Function }, onIconClick: { type: Function }, onValueChange: { type: Function } }, g = (0, a.defineComponent)({ name: "TreeNode", props: v(v({}, b), {}, { node: { type: Object, required: true }, collapsed: Boolean, checked: Boolean, style: Object, onSelectedChange: { type: Function } }), emits: ["nodeClick", "bracketsClick", "iconClick", "selectedChange", "valueChange"], setup: function(e3, t3) {
            var n3 = t3.emit, o2 = (0, a.computed)(function() {
              return s(e3.node.content);
            }), r2 = (0, a.computed)(function() {
              return "vjs-value vjs-value-".concat(o2.value);
            }), l2 = (0, a.computed)(function() {
              return e3.showDoubleQuotes ? '"'.concat(e3.node.key, '"') : e3.node.key;
            }), d2 = (0, a.computed)(function() {
              return "multiple" === e3.selectableType;
            }), p2 = (0, a.computed)(function() {
              return "single" === e3.selectableType;
            }), h2 = (0, a.computed)(function() {
              return e3.nodeSelectable(e3.node) && (d2.value || p2.value);
            }), f2 = (0, a.reactive)({ editing: false }), y2 = function(t4) {
              var o3, r3, l3 = "null" === (r3 = null === (o3 = t4.target) || void 0 === o3 ? void 0 : o3.value) ? null : "undefined" === r3 ? void 0 : "true" === r3 || "false" !== r3 && (r3[0] + r3[r3.length - 1] === '""' || r3[0] + r3[r3.length - 1] === "''" ? r3.slice(1, -1) : "number" == typeof Number(r3) && !isNaN(Number(r3)) || "NaN" === r3 ? Number(r3) : r3);
              n3("valueChange", l3, e3.node.path);
            }, v2 = (0, a.computed)(function() {
              var t4, n4 = null === (t4 = e3.node) || void 0 === t4 ? void 0 : t4.content;
              return null === n4 ? n4 = "null" : void 0 === n4 && (n4 = "undefined"), "string" === o2.value ? '"'.concat(n4, '"') : n4 + "";
            }), b2 = function() {
              var t4 = e3.renderNodeValue;
              return t4 ? t4({ node: e3.node, defaultValue: v2.value }) : v2.value;
            }, g2 = function() {
              n3("bracketsClick", !e3.collapsed, e3.node.path);
            }, m2 = function() {
              n3("iconClick", !e3.collapsed, e3.node.path);
            }, C2 = function() {
              n3("selectedChange", e3.node);
            }, k2 = function() {
              n3("nodeClick", e3.node), h2.value && e3.selectOnClickNode && n3("selectedChange", e3.node);
            }, w = function(t4) {
              if (e3.editable && !f2.editing) {
                f2.editing = true;
                var n4 = function e4(n5) {
                  var o3;
                  n5.target !== t4.target && (null === (o3 = n5.target) || void 0 === o3 ? void 0 : o3.parentElement) !== t4.target && (f2.editing = false, document.removeEventListener("click", e4));
                };
                document.removeEventListener("click", n4), document.addEventListener("click", n4);
              }
            };
            return function() {
              var t4, n4 = e3.node;
              return (0, a.createVNode)("div", { class: { "vjs-tree-node": true, "has-selector": e3.showSelectController, "has-carets": e3.showIcon, "is-highlight": e3.highlightSelectedNode && e3.checked }, onClick: k2, style: e3.style }, [e3.showLineNumber && (0, a.createVNode)("span", { class: "vjs-node-index" }, [n4.id + 1]), e3.showSelectController && h2.value && "objectEnd" !== n4.type && "arrayEnd" !== n4.type && (0, a.createVNode)(i, { isMultiple: d2.value, checked: e3.checked, onChange: C2 }, null), (0, a.createVNode)("div", { class: "vjs-indent" }, [Array.from(Array(n4.level)).map(function(t5, n5) {
                return (0, a.createVNode)("div", { key: n5, class: { "vjs-indent-unit": true, "has-line": e3.showLine } }, null);
              }), e3.showIcon && (0, a.createVNode)(u, { nodeType: n4.type, onClick: m2 }, null)]), n4.key && (0, a.createVNode)("span", { class: "vjs-key" }, [(t4 = e3.renderNodeKey, t4 ? t4({ node: e3.node, defaultKey: l2.value || "" }) : l2.value), (0, a.createVNode)("span", { class: "vjs-colon" }, [":".concat(e3.showKeyValueSpace ? " " : "")])]), (0, a.createVNode)("span", null, ["content" !== n4.type && n4.content ? (0, a.createVNode)(c, { data: n4.content.toString(), onClick: g2 }, null) : (0, a.createVNode)("span", { class: r2.value, onClick: !e3.editable || e3.editableTrigger && "click" !== e3.editableTrigger ? void 0 : w, onDblclick: e3.editable && "dblclick" === e3.editableTrigger ? w : void 0 }, [e3.editable && f2.editing ? (0, a.createVNode)("input", { value: v2.value, onChange: y2, style: { padding: "3px 8px", border: "1px solid #eee", boxShadow: "none", boxSizing: "border-box", borderRadius: 5, fontFamily: "inherit" } }, null) : b2()]), n4.showComma && (0, a.createVNode)("span", null, [","]), e3.showLength && e3.collapsed && (0, a.createVNode)("span", { class: "vjs-comment" }, [(0, a.createTextVNode)(" // "), n4.length, (0, a.createTextVNode)(" items ")])])]);
            };
          } });
          function m(e3, t3) {
            var n3 = Object.keys(e3);
            if (Object.getOwnPropertySymbols) {
              var o2 = Object.getOwnPropertySymbols(e3);
              t3 && (o2 = o2.filter(function(t4) {
                return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
              })), n3.push.apply(n3, o2);
            }
            return n3;
          }
          function C(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n3 = null != arguments[t3] ? arguments[t3] : {};
              t3 % 2 ? m(Object(n3), true).forEach(function(t4) {
                l(e3, t4, n3[t4]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : m(Object(n3)).forEach(function(t4) {
                Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
              });
            }
            return e3;
          }
          var k = (0, a.defineComponent)({ name: "Tree", props: C(C({}, b), {}, { data: { type: [String, Number, Boolean, Array, Object], default: null }, deep: { type: Number, default: 1 / 0 }, pathCollapsible: { type: Function, default: function() {
            return false;
          } }, rootPath: { type: String, default: "root" }, virtual: { type: Boolean, default: false }, height: { type: Number, default: 400 }, itemHeight: { type: Number, default: 20 }, selectedValue: { type: [String, Array], default: function() {
            return "";
          } }, collapsedOnClickBrackets: { type: Boolean, default: true }, style: Object, onSelectedChange: { type: Function } }), slots: ["renderNodeKey", "renderNodeValue"], emits: ["nodeClick", "bracketsClick", "iconClick", "selectedChange", "update:selectedValue", "update:data"], setup: function(e3, o2) {
            var r2 = o2.emit, c2 = o2.slots, i2 = (0, a.ref)(), u2 = (0, a.computed)(function() {
              return p(e3.data, e3.rootPath);
            }), d2 = function(t3) {
              return u2.value.reduce(function(n3, o3) {
                var r3, a2 = o3.level >= t3, c3 = null === (r3 = e3.pathCollapsible) || void 0 === r3 ? void 0 : r3.call(e3, o3);
                return "objectStart" !== o3.type && "arrayStart" !== o3.type || !a2 && !c3 ? n3 : C(C({}, n3), {}, l({}, o3.path, 1));
              }, {});
            }, s2 = (0, a.reactive)({ translateY: 0, visibleData: null, hiddenPaths: d2(e3.deep) }), h2 = (0, a.computed)(function() {
              for (var e4 = null, t3 = [], n3 = u2.value.length, o3 = 0; o3 < n3; o3++) {
                var r3 = C(C({}, u2.value[o3]), {}, { id: o3 }), l2 = s2.hiddenPaths[r3.path];
                if (e4 && e4.path === r3.path) {
                  var a2 = "objectStart" === e4.type, c3 = C(C(C({}, r3), e4), {}, { showComma: r3.showComma, content: a2 ? "{...}" : "[...]", type: a2 ? "objectCollapsed" : "arrayCollapsed" });
                  e4 = null, t3.push(c3);
                } else {
                  if (l2 && !e4) {
                    e4 = r3;
                    continue;
                  }
                  if (e4) continue;
                  t3.push(r3);
                }
              }
              return t3;
            }), y2 = (0, a.computed)(function() {
              var t3 = e3.selectedValue;
              return t3 && "multiple" === e3.selectableType && Array.isArray(t3) ? t3 : [t3];
            }), v2 = (0, a.computed)(function() {
              return !e3.selectableType || e3.selectOnClickNode || e3.showSelectController ? "" : "When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail.";
            }), b2 = function() {
              var t3 = h2.value;
              if (e3.virtual) {
                var n3, o3 = e3.height / e3.itemHeight, r3 = (null === (n3 = i2.value) || void 0 === n3 ? void 0 : n3.scrollTop) || 0, l2 = Math.floor(r3 / e3.itemHeight), a2 = l2 < 0 ? 0 : l2 + o3 > t3.length ? t3.length - o3 : l2;
                a2 < 0 && (a2 = 0);
                var c3 = a2 + o3;
                s2.translateY = a2 * e3.itemHeight, s2.visibleData = t3.filter(function(e4, t4) {
                  return t4 >= a2 && t4 < c3;
                });
              } else s2.visibleData = t3;
            }, m2 = function() {
              b2();
            }, k2 = function(o3) {
              var l2, a2, c3 = o3.path, i3 = e3.selectableType;
              if ("multiple" === i3) {
                var u3 = y2.value.findIndex(function(e4) {
                  return e4 === c3;
                }), d3 = n2(y2.value);
                -1 !== u3 ? d3.splice(u3, 1) : d3.push(c3), r2("update:selectedValue", d3), r2("selectedChange", d3, n2(y2.value));
              } else if ("single" === i3 && y2.value[0] !== c3) {
                var s3 = (l2 = y2.value, a2 = 1, function(e4) {
                  if (Array.isArray(e4)) return e4;
                }(l2) || function(e4, t3) {
                  var n3 = null == e4 ? null : "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
                  if (null != n3) {
                    var o4, r3, l3 = [], a3 = true, c4 = false;
                    try {
                      for (n3 = n3.call(e4); !(a3 = (o4 = n3.next()).done) && (l3.push(o4.value), !t3 || l3.length !== t3); a3 = true) ;
                    } catch (e5) {
                      c4 = true, r3 = e5;
                    } finally {
                      try {
                        a3 || null == n3.return || n3.return();
                      } finally {
                        if (c4) throw r3;
                      }
                    }
                    return l3;
                  }
                }(l2, a2) || t2(l2, a2) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }())[0], p2 = c3;
                r2("update:selectedValue", p2), r2("selectedChange", p2, s3);
              }
            }, w = function(e4) {
              r2("nodeClick", e4);
            }, N = function(e4, t3) {
              if (e4) s2.hiddenPaths = C(C({}, s2.hiddenPaths), {}, l({}, t3, 1));
              else {
                var n3 = C({}, s2.hiddenPaths);
                delete n3[t3], s2.hiddenPaths = n3;
              }
            }, j = function(t3, n3) {
              e3.collapsedOnClickBrackets && N(t3, n3), r2("bracketsClick", t3);
            }, S = function(e4, t3) {
              N(e4, t3), r2("iconClick", e4);
            }, O = function(t3, n3) {
              var o3 = f(e3.data), l2 = e3.rootPath;
              new Function("data", "val", "data".concat(n3.slice(l2.length), "=val"))(o3, t3), r2("update:data", o3);
            };
            return (0, a.watchEffect)(function() {
              v2.value && function(e4) {
                throw new Error("[VueJSONPretty] ".concat(e4));
              }(v2.value);
            }), (0, a.watchEffect)(function() {
              h2.value && b2();
            }), (0, a.watch)(function() {
              return e3.deep;
            }, function(e4) {
              e4 && (s2.hiddenPaths = d2(e4));
            }), function() {
              var t3, n3, o3 = null !== (t3 = e3.renderNodeKey) && void 0 !== t3 ? t3 : c2.renderNodeKey, r3 = null !== (n3 = e3.renderNodeValue) && void 0 !== n3 ? n3 : c2.renderNodeValue, l2 = s2.visibleData && s2.visibleData.map(function(t4) {
                return (0, a.createVNode)(g, { key: t4.id, node: t4, collapsed: !!s2.hiddenPaths[t4.path], showDoubleQuotes: e3.showDoubleQuotes, showLength: e3.showLength, checked: y2.value.includes(t4.path), selectableType: e3.selectableType, showLine: e3.showLine, showLineNumber: e3.showLineNumber, showSelectController: e3.showSelectController, selectOnClickNode: e3.selectOnClickNode, nodeSelectable: e3.nodeSelectable, highlightSelectedNode: e3.highlightSelectedNode, editable: e3.editable, editableTrigger: e3.editableTrigger, showIcon: e3.showIcon, showKeyValueSpace: e3.showKeyValueSpace, renderNodeKey: o3, renderNodeValue: r3, onNodeClick: w, onBracketsClick: j, onIconClick: S, onSelectedChange: k2, onValueChange: O, style: e3.itemHeight && 20 !== e3.itemHeight ? { lineHeight: "".concat(e3.itemHeight, "px") } : {} }, null);
              });
              return (0, a.createVNode)("div", { ref: i2, class: { "vjs-tree": true, "is-virtual": e3.virtual }, onScroll: e3.virtual ? m2 : void 0, style: e3.showLineNumber ? C({ paddingLeft: "".concat(12 * Number(u2.value.length.toString().length), "px") }, e3.style) : e3.style }, [e3.virtual ? (0, a.createVNode)("div", { class: "vjs-tree-list", style: { height: "".concat(e3.height, "px") } }, [(0, a.createVNode)("div", { class: "vjs-tree-list-holder", style: { height: "".concat(h2.value.length * e3.itemHeight, "px") } }, [(0, a.createVNode)("div", { class: "vjs-tree-list-holder-inner", style: { transform: "translateY(".concat(s2.translateY, "px)") } }, [l2])])]) : l2]);
            };
          } });
        }(), r;
      }();
    });
  })(vueJsonPretty$1);
  return vueJsonPretty$1.exports;
}
var vueJsonPrettyExports = requireVueJsonPretty();
const VueJsonPretty = /* @__PURE__ */ getDefaultExportFromCjs(vueJsonPrettyExports);
const sanitizeOptions = {
  allowVulnerableTags: false,
  enforceHtmlBoundary: false,
  disallowedTagsMode: "discard",
  allowedTags: [...sanitizeHtmlExports.defaults.allowedTags, "style", "img", "title"],
  allowedAttributes: {
    ...sanitizeHtmlExports.defaults.allowedAttributes,
    "*": ["class", "style"]
  },
  transformTags: {
    head: ""
  }
};
const _sfc_main$6 = {
  name: "RunDataHtml",
  props: {
    inputHtml: {
      type: String,
      required: true
    }
  },
  computed: {
    sanitizedHtml() {
      return sanitizeHtml$1(this.inputHtml, sanitizeOptions);
    }
  }
};
const _hoisted_1$6 = ["srcdoc"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("iframe", {
    class: "__html-display",
    srcdoc: $options.sanitizedHtml
  }, null, 8, _hoisted_1$6);
}
const RunDataHtml = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render]]);
const RunDataHtml$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RunDataHtml
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$5 = { key: 0 };
const _hoisted_2$3 = { key: 1 };
const _hoisted_3$2 = { key: 2 };
const _hoisted_4$2 = {
  key: 0,
  controls: "",
  autoplay: ""
};
const _hoisted_5$2 = ["src", "type"];
const _hoisted_6$1 = {
  key: 1,
  controls: "",
  autoplay: ""
};
const _hoisted_7$1 = ["src", "type"];
const _hoisted_8$1 = ["src"];
const _hoisted_9$1 = ["src"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BinaryDataDisplayEmbed",
  props: {
    binaryData: {}
  },
  setup(__props) {
    const props = __props;
    const isLoading = ref(true);
    const embedSource = ref("");
    const error = ref(false);
    const data = ref("");
    const workflowsStore = useWorkflowsStore();
    const i18n = useI18n();
    const embedClass = computed(() => {
      return [props.binaryData.fileType ?? "other"];
    });
    onMounted(async () => {
      const { id, data: binaryData, fileName, fileType, mimeType } = props.binaryData;
      const isJSONData = fileType === "json";
      const isHTMLData = fileType === "html";
      if (!id) {
        if (isJSONData || isHTMLData) {
          data.value = jsonParse(atob(binaryData));
        } else {
          embedSource.value = "data:" + mimeType + ";base64," + binaryData;
        }
      } else {
        try {
          const binaryUrl = workflowsStore.getBinaryUrl(id, "view", fileName ?? "", mimeType);
          if (isJSONData || isHTMLData) {
            const fetchedData = await fetch(binaryUrl, { credentials: "include" });
            data.value = await (isJSONData ? fetchedData.json() : fetchedData.text());
          } else {
            embedSource.value = binaryUrl;
          }
        } catch (e) {
          error.value = true;
        }
      }
      isLoading.value = false;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, [
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_1$5, "Loading binary data...")) : error.value ? (openBlock(), createElementBlock("div", _hoisted_2$3, "Error loading binary data")) : (openBlock(), createElementBlock("span", _hoisted_3$2, [
          _ctx.binaryData.fileType === "video" ? (openBlock(), createElementBlock("video", _hoisted_4$2, [
            createBaseVNode("source", {
              src: embedSource.value,
              type: _ctx.binaryData.mimeType
            }, null, 8, _hoisted_5$2),
            createTextVNode(" " + toDisplayString(unref(i18n).baseText("binaryDataDisplay.yourBrowserDoesNotSupport")), 1)
          ])) : _ctx.binaryData.fileType === "audio" ? (openBlock(), createElementBlock("audio", _hoisted_6$1, [
            createBaseVNode("source", {
              src: embedSource.value,
              type: _ctx.binaryData.mimeType
            }, null, 8, _hoisted_7$1),
            createTextVNode(" " + toDisplayString(unref(i18n).baseText("binaryDataDisplay.yourBrowserDoesNotSupport")), 1)
          ])) : _ctx.binaryData.fileType === "image" ? (openBlock(), createElementBlock("img", {
            key: 2,
            src: embedSource.value
          }, null, 8, _hoisted_8$1)) : _ctx.binaryData.fileType === "json" ? (openBlock(), createBlock(unref(VueJsonPretty), {
            key: 3,
            data: data.value,
            deep: 3,
            "show-length": true
          }, null, 8, ["data"])) : _ctx.binaryData.fileType === "html" ? (openBlock(), createBlock(RunDataHtml, {
            key: 4,
            "input-html": data.value
          }, null, 8, ["input-html"])) : (openBlock(), createElementBlock("embed", {
            key: 5,
            src: embedSource.value,
            class: normalizeClass(["binary-data", embedClass.value])
          }, null, 10, _hoisted_9$1))
        ]))
      ]);
    };
  }
});
const _hoisted_1$4 = { class: "binary-data-window-wrapper" };
const _hoisted_2$2 = { key: 0 };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BinaryDataDisplay",
  props: {
    displayData: {},
    windowVisible: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const nodeHelpers = useNodeHelpers();
    const workflowsStore = useWorkflowsStore();
    const i18n = useI18n();
    const workflowRunData = computed(() => {
      const workflowExecution = workflowsStore.getWorkflowExecution;
      if (workflowExecution === null) {
        return null;
      }
      const executionData = workflowExecution.data;
      return executionData ? executionData.resultData.runData : null;
    });
    const binaryData = computed(() => {
      if (typeof props.displayData.node !== "string" || typeof props.displayData.key !== "string" || typeof props.displayData.runIndex !== "number" || typeof props.displayData.index !== "number" || typeof props.displayData.outputIndex !== "number") {
        return null;
      }
      const binaryDataLocal = nodeHelpers.getBinaryData(
        workflowRunData.value,
        props.displayData.node,
        props.displayData.runIndex,
        props.displayData.outputIndex
      );
      if (binaryDataLocal.length === 0) {
        return null;
      }
      if (props.displayData.index >= binaryDataLocal.length || binaryDataLocal[props.displayData.index][props.displayData.key] === void 0) {
        return null;
      }
      const binaryDataItem = binaryDataLocal[props.displayData.index][props.displayData.key];
      return binaryDataItem;
    });
    function closeWindow() {
      emit("close");
      return false;
    }
    return (_ctx, _cache) => {
      const _component_n8n_button = resolveComponent("n8n-button");
      return _ctx.windowVisible ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["binary-data-window", binaryData.value?.fileType])
      }, [
        createVNode(_component_n8n_button, {
          size: "small",
          class: "binary-data-window-back",
          title: unref(i18n).baseText("binaryDataDisplay.backToOverviewPage"),
          icon: "arrow-left",
          label: unref(i18n).baseText("binaryDataDisplay.backToList"),
          onClick: withModifiers(closeWindow, ["stop"])
        }, null, 8, ["title", "label"]),
        createBaseVNode("div", _hoisted_1$4, [
          !binaryData.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, toDisplayString(unref(i18n).baseText("binaryDataDisplay.noDataFoundToDisplay")), 1)) : (openBlock(), createBlock(_sfc_main$5, {
            key: 1,
            "binary-data": binaryData.value
          }, null, 8, ["binary-data"]))
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$3 = { key: 0 };
const _hoisted_2$1 = { key: 1 };
const _hoisted_3$1 = { key: 2 };
const _hoisted_4$1 = { key: 0 };
const _hoisted_5$1 = { key: 1 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "RunDataPinButton",
  props: {
    tooltipContentsVisibility: {},
    dataPinningDocsUrl: {},
    pinnedData: {},
    disabled: { type: Boolean }
  },
  emits: ["togglePinData"],
  setup(__props, { emit: __emit }) {
    const locale = useI18n();
    const props = __props;
    const emit = __emit;
    const visible = computed(
      () => props.tooltipContentsVisibility.pinDataDiscoveryTooltipContent ? true : void 0
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nTooltip), {
        placement: "bottom-end",
        visible: visible.value
      }, {
        content: withCtx(() => [
          props.tooltipContentsVisibility.binaryDataTooltipContent ? (openBlock(), createElementBlock("div", _hoisted_1$3, toDisplayString(unref(locale).baseText("ndv.pinData.pin.binary")), 1)) : props.tooltipContentsVisibility.pinDataDiscoveryTooltipContent ? (openBlock(), createElementBlock("div", _hoisted_2$1, toDisplayString(unref(locale).baseText("node.discovery.pinData.ndv")), 1)) : (openBlock(), createElementBlock("div", _hoisted_3$1, [
            _ctx.pinnedData.hasData.value ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
              createBaseVNode("strong", null, toDisplayString(unref(locale).baseText("ndv.pinData.unpin.title")), 1)
            ])) : (openBlock(), createElementBlock("div", _hoisted_5$1, [
              createBaseVNode("strong", null, toDisplayString(unref(locale).baseText("ndv.pinData.pin.title")), 1),
              createVNode(unref(N8nText), {
                size: "small",
                tag: "p"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("ndv.pinData.pin.description")) + " ", 1),
                  createVNode(unref(N8nLink), {
                    to: props.dataPinningDocsUrl,
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("ndv.pinData.pin.link")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                _: 1
              })
            ]))
          ]))
        ]),
        default: withCtx(() => [
          createVNode(unref(_sfc_main$a), {
            class: normalizeClass(_ctx.$style.pinDataButton),
            type: "tertiary",
            active: props.pinnedData.hasData.value,
            icon: "thumbtack",
            disabled: props.disabled,
            "data-test-id": "ndv-pin-data",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("togglePinData"))
          }, null, 8, ["class", "active", "disabled"])
        ]),
        _: 1
      }, 8, ["visible"]);
    };
  }
});
const pinDataButton = "_pinDataButton_12tk2_123";
const style0$3 = {
  pinDataButton
};
const cssModules$3 = {
  "$style": style0$3
};
const RunDataPinButton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$3]]);
const _hoisted_1$2 = { key: 0 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RunDataItemCount",
  props: {
    dataCount: {},
    unfilteredDataCount: {},
    subExecutionsCount: { default: 0 },
    search: {},
    muted: { type: Boolean }
  },
  setup(__props) {
    const i18n = useI18n();
    return (_ctx, _cache) => {
      return _ctx.search ? (openBlock(), createBlock(unref(N8nText), {
        key: 0,
        class: normalizeClass([_ctx.$style.itemsText, _ctx.muted ? _ctx.$style.muted : ""])
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(i18n).baseText("ndv.search.items", {
            adjustToNumber: _ctx.unfilteredDataCount,
            interpolate: { matched: _ctx.dataCount, count: _ctx.unfilteredDataCount }
          })), 1)
        ]),
        _: 1
      }, 8, ["class"])) : (openBlock(), createBlock(unref(N8nText), {
        key: 1,
        class: normalizeClass([_ctx.$style.itemsText, _ctx.muted ? _ctx.$style.muted : ""])
      }, {
        default: withCtx(() => [
          createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("ndv.output.items", {
            adjustToNumber: _ctx.dataCount,
            interpolate: { count: _ctx.dataCount }
          })), 1),
          _ctx.subExecutionsCount > 0 ? (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(unref(i18n).baseText("ndv.output.andSubExecutions", {
            adjustToNumber: _ctx.subExecutionsCount,
            interpolate: { count: _ctx.subExecutionsCount }
          })), 1)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"]));
    };
  }
});
const itemsText = "_itemsText_1p5xj_123";
const muted = "_muted_1p5xj_130";
const style0$2 = {
  itemsText,
  muted
};
const cssModules$2 = {
  "$style": style0$2
};
const RunDataItemCount = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1$1 = { key: 5 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RunDataDisplayModeSelect",
  props: {
    compact: { type: Boolean },
    value: {},
    hasBinaryData: { type: Boolean },
    paneType: {},
    nodeGeneratesHtml: { type: Boolean }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const i18n = useI18n();
    const options = computed(() => {
      const defaults = [
        { label: i18n.baseText("runData.schema"), value: "schema" },
        { label: i18n.baseText("runData.table"), value: "table" },
        { label: i18n.baseText("runData.json"), value: "json" }
      ];
      if (__props.hasBinaryData) {
        defaults.push({ label: i18n.baseText("runData.binary"), value: "binary" });
      }
      if (__props.paneType === "output" && __props.nodeGeneratesHtml) {
        defaults.unshift({ label: "HTML", value: "html" });
      }
      return defaults;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nRadioButtons), {
        "model-value": _ctx.value,
        options: options.value,
        "data-test-id": "ndv-run-data-display-mode",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = (selected) => emit("change", selected))
      }, createSlots({ _: 2 }, [
        _ctx.compact ? {
          name: "option",
          fn: withCtx((option) => [
            option.value === "table" ? (openBlock(), createBlock(unref(N8nIcon), {
              key: 0,
              icon: "table",
              size: "small",
              class: normalizeClass(_ctx.$style.icon)
            }, null, 8, ["class"])) : option.value === "json" ? (openBlock(), createBlock(unref(N8nIcon), {
              key: 1,
              icon: "json",
              size: "small",
              class: normalizeClass(_ctx.$style.icon)
            }, null, 8, ["class"])) : option.value === "binary" ? (openBlock(), createBlock(unref(N8nIcon), {
              key: 2,
              icon: "binary",
              size: "small",
              class: normalizeClass(_ctx.$style.icon)
            }, null, 8, ["class"])) : option.value === "schema" ? (openBlock(), createBlock(unref(N8nIcon), {
              key: 3,
              icon: "schema",
              size: "small",
              class: normalizeClass(_ctx.$style.icon)
            }, null, 8, ["class"])) : option.value === "html" ? (openBlock(), createBlock(unref(N8nIcon), {
              key: 4,
              icon: "html",
              size: "small",
              class: normalizeClass(_ctx.$style.icon)
            }, null, 8, ["class"])) : (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(option.label), 1))
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["model-value", "options"]);
    };
  }
});
const icon = "_icon_1xx9c_123";
const style0$1 = {
  icon
};
const cssModules$1 = {
  "$style": style0$1
};
const RunDataDisplayModeSelect = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = {
  key: 0,
  class: "ml-4xs"
};
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["data-test-id"];
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { key: 2 };
const _hoisted_8 = { key: 3 };
const _hoisted_9 = { key: 4 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RunData",
  props: {
    workflow: {},
    runIndex: {},
    tooMuchDataTitle: {},
    executingMessage: {},
    pushRef: {},
    paneType: {},
    noDataInBranchMessage: {},
    node: { default: null },
    nodes: { default: () => [] },
    linkedRuns: { type: Boolean },
    canLinkRuns: { type: Boolean },
    isExecuting: { type: Boolean, default: false },
    overrideOutputs: { default: void 0 },
    mappingEnabled: { type: Boolean, default: false },
    distanceFromActive: { default: 0 },
    blockUI: { type: Boolean, default: false },
    isProductionExecutionPreview: { type: Boolean, default: false },
    isPaneActive: { type: Boolean, default: false },
    hidePagination: { type: Boolean, default: false },
    calloutMessage: { default: void 0 },
    disableRunIndexSelection: { type: Boolean, default: false },
    disableEdit: { type: Boolean, default: false },
    disablePin: { type: Boolean, default: false },
    compact: { type: Boolean, default: false },
    tableHeaderBgColor: { default: "base" }
  },
  emits: ["search", "runChange", "itemHover", "linkRun", "unlinkRun", "activatePane", "tableMounted"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const LazyRunDataTable = defineAsyncComponent(
      async () => await __vitePreload(() => import("./RunDataTable-DN3IIGP-.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0)
    );
    const LazyRunDataJson = defineAsyncComponent(
      async () => await __vitePreload(() => import("./RunDataJson-DSOxLRy4.js"), true ? __vite__mapDeps([6,1,2,7,3,4,8]) : void 0)
    );
    const LazyRunDataSchema = defineAsyncComponent(
      async () => await __vitePreload(() => import("./index-Dhp_73Xq.js").then((n) => n.is), true ? __vite__mapDeps([1,2]) : void 0)
    );
    const LazyRunDataHtml = defineAsyncComponent(
      async () => await __vitePreload(() => Promise.resolve().then(() => RunDataHtml$1), true ? void 0 : void 0)
    );
    const LazyRunDataSearch = defineAsyncComponent(
      async () => await __vitePreload(() => import("./RunDataSearch-C6b4tOPr.js"), true ? __vite__mapDeps([9,1,2,10]) : void 0)
    );
    const props = __props;
    const emit = __emit;
    const connectionType = ref(NodeConnectionTypes.Main);
    const dataSize = ref(0);
    const showData = ref(false);
    const userEnabledShowData = ref(false);
    const outputIndex = ref(0);
    const binaryDataDisplayVisible = ref(false);
    const binaryDataDisplayData = ref(null);
    const currentPage = ref(1);
    const pageSize = ref(10);
    const pageSizes = [1, 10, 25, 50, 100];
    const pinDataDiscoveryTooltipVisible = ref(false);
    const isControlledPinDataTooltip = ref(false);
    const search2 = ref("");
    const dataContainerRef = ref();
    const nodeTypesStore = useNodeTypesStore();
    const ndvStore = useNDVStore();
    const workflowsStore = useWorkflowsStore();
    const sourceControlStore = useSourceControlStore();
    const rootStore = useRootStore();
    const uiStore = useUIStore();
    const schemaPreviewStore = useSchemaPreviewStore();
    const posthogStore = usePostHog();
    const toast = useToast();
    const route = useRoute();
    const nodeHelpers = useNodeHelpers();
    const externalHooks = useExternalHooks();
    const telemetry = useTelemetry();
    const i18n = useI18n();
    const node = toRef(props, "node");
    const pinnedData = usePinnedData(node, {
      runIndex: props.runIndex,
      displayMode: props.paneType === "input" ? ndvStore.inputPanelDisplayMode : ndvStore.outputPanelDisplayMode
    });
    const { isSubNodeType } = useNodeType({
      node
    });
    const displayMode = computed(
      () => props.paneType === "input" ? ndvStore.inputPanelDisplayMode : ndvStore.outputPanelDisplayMode
    );
    const isReadOnlyRoute = computed(() => route.meta.readOnlyCanvas === true);
    const isWaitNodeWaiting = computed(() => {
      return node.value?.name && workflowExecution.value?.data?.resultData?.runData?.[node.value?.name]?.[props.runIndex]?.executionStatus === "waiting";
    });
    const { activeNode } = storeToRefs(ndvStore);
    const nodeType = computed(() => {
      if (!node.value) return null;
      return nodeTypesStore.getNodeType(node.value.type, node.value.typeVersion);
    });
    const isSchemaView = computed(() => displayMode.value === "schema");
    const isSearchInSchemaView = computed(() => isSchemaView.value && !!search2.value);
    const displaysMultipleNodes = computed(
      () => isSchemaView.value && props.paneType === "input" && props.nodes.length > 0
    );
    const isTriggerNode = computed(() => !!node.value && nodeTypesStore.isTriggerNode(node.value.type));
    const canPinData = computed(
      () => !!node.value && pinnedData.canPinNode(false, currentOutputIndex.value) && !isPaneTypeInput.value && pinnedData.isValidNodeType.value && !(binaryData.value && binaryData.value.length > 0)
    );
    const hasNodeRun = computed(
      () => Boolean(
        !props.isExecuting && node.value && (workflowRunData.value && workflowRunData.value.hasOwnProperty(node.value.name) || pinnedData.hasData.value)
      )
    );
    const isArtificialRecoveredEventItem = computed(
      () => rawInputData.value?.[0]?.json?.isArtificialRecoveredEventItem
    );
    const isTrimmedManualExecutionDataItem = computed(
      () => rawInputData.value?.[0]?.json?.[TRIMMED_TASK_DATA_CONNECTIONS_KEY]
    );
    const subworkflowExecutionError = computed(() => {
      if (!node.value) return null;
      return {
        node: node.value,
        messages: [workflowsStore.subWorkflowExecutionError?.message ?? ""]
      };
    });
    const hasSubworkflowExecutionError = computed(
      () => Boolean(workflowsStore.subWorkflowExecutionError)
    );
    const parentNodeError = computed(() => {
      const parentNode = props.workflow.getChildNodes(node.value?.name ?? "", "ALL_NON_MAIN")[0];
      return workflowRunData.value?.[parentNode]?.[props.runIndex]?.error;
    });
    const workflowRunErrorAsNodeError = computed(() => {
      if (!node.value) {
        return null;
      }
      if (isSubNodeType.value && props.paneType === "input") {
        return parentNodeError.value;
      }
      return workflowRunData.value?.[node.value?.name]?.[props.runIndex]?.error;
    });
    const hasRunError = computed(() => Boolean(node.value && workflowRunErrorAsNodeError.value));
    const executionHints = computed(() => {
      if (hasNodeRun.value) {
        const hints = node.value && workflowRunData.value?.[node.value.name]?.[props.runIndex]?.hints;
        if (hints) return hints;
      }
      return [];
    });
    const workflowExecution = computed(() => workflowsStore.getWorkflowExecution);
    const workflowRunData = computed(() => {
      if (workflowExecution.value === null) {
        return null;
      }
      const executionData = workflowExecution.value.data;
      if (executionData?.resultData) {
        return executionData.resultData.runData;
      }
      return null;
    });
    const dataCount = computed(
      () => getDataCount(props.runIndex, currentOutputIndex.value, connectionType.value)
    );
    const unfilteredDataCount = computed(
      () => pinnedData.data.value ? pinnedData.data.value.length : rawInputData.value.length
    );
    const dataSizeInMB = computed(() => (dataSize.value / (1024 * 1024)).toFixed(1));
    const maxOutputIndex = computed(() => {
      if (node.value === null || props.runIndex === void 0) {
        return 0;
      }
      const runData = workflowRunData.value;
      if (runData === null || !runData.hasOwnProperty(node.value.name)) {
        return 0;
      }
      if (runData[node.value.name].length < props.runIndex) {
        return 0;
      }
      if (runData[node.value.name][props.runIndex]) {
        const taskData = runData[node.value.name][props.runIndex].data;
        if (taskData?.main) {
          return taskData.main.length - 1;
        }
      }
      return 0;
    });
    const currentPageOffset = computed(() => pageSize.value * (currentPage.value - 1));
    const maxRunIndex = computed(() => {
      if (!node.value) {
        return 0;
      }
      const runData = workflowRunData.value;
      if (runData === null || !runData.hasOwnProperty(node.value.name)) {
        return 0;
      }
      if (runData[node.value.name].length) {
        return runData[node.value.name].length - 1;
      }
      return 0;
    });
    const rawInputData = computed(
      () => getRawInputData(props.runIndex, currentOutputIndex.value, connectionType.value)
    );
    const unfilteredInputData = computed(() => getPinDataOrLiveData(rawInputData.value));
    const inputData = computed(() => getFilteredData(unfilteredInputData.value));
    const inputDataPage = computed(() => {
      const offset = pageSize.value * (currentPage.value - 1);
      return inputData.value.slice(offset, offset + pageSize.value);
    });
    const jsonData = computed(() => executionDataToJson(inputData.value));
    const binaryData = computed(() => {
      if (!node.value) {
        return [];
      }
      return nodeHelpers.getBinaryData(workflowRunData.value, node.value.name, props.runIndex, currentOutputIndex.value).filter((data) => Boolean(data && Object.keys(data).length));
    });
    const inputHtml = computed(() => String(inputData.value[0]?.json?.html ?? ""));
    const currentOutputIndex = computed(() => {
      if (props.overrideOutputs?.length && !props.overrideOutputs.includes(outputIndex.value)) {
        return props.overrideOutputs[0];
      }
      return Math.min(outputIndex.value, maxOutputIndex.value);
    });
    const branches = computed(() => {
      const capitalize = (name) => name.charAt(0).toLocaleUpperCase() + name.slice(1);
      const result = [];
      for (let i = 0; i <= maxOutputIndex.value; i++) {
        if (props.overrideOutputs && !props.overrideOutputs.includes(i)) {
          continue;
        }
        const totalItemsCount = getRawInputData(props.runIndex, i).length;
        const itemsCount2 = getDataCount(props.runIndex, i);
        const items = search2.value ? i18n.baseText("ndv.search.items", {
          adjustToNumber: totalItemsCount,
          interpolate: { matched: itemsCount2, total: totalItemsCount }
        }) : i18n.baseText("ndv.output.items", {
          adjustToNumber: itemsCount2,
          interpolate: { count: itemsCount2 }
        });
        let outputName = getOutputName(i);
        if (`${outputName}` === `${i}`) {
          outputName = `${i18n.baseText("ndv.output")} ${outputName}`;
        } else {
          const appendBranchWord = NODE_TYPES_EXCLUDED_FROM_OUTPUT_NAME_APPEND.includes(
            node.value?.type ?? ""
          ) ? "" : ` ${i18n.baseText("ndv.output.branch")}`;
          outputName = capitalize(`${getOutputName(i)}${appendBranchWord}`);
        }
        result.push({
          label: search2.value && itemsCount2 || totalItemsCount ? `${outputName} (${items})` : outputName,
          value: i
        });
      }
      return result;
    });
    const editMode2 = computed(() => {
      return isPaneTypeInput.value ? { enabled: false, value: "" } : ndvStore.outputPanelEditMode;
    });
    const isPaneTypeInput = computed(() => props.paneType === "input");
    const isPaneTypeOutput = computed(() => props.paneType === "output");
    const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
    const showIOSearch = computed(
      () => hasNodeRun.value && !hasRunError.value && unfilteredInputData.value.length > 0
    );
    const inputSelectLocation = computed(() => {
      if (isSchemaView.value) return "none";
      if (!hasNodeRun.value) return "header";
      if (maxRunIndex.value > 0) return "runs";
      if (maxOutputIndex.value > 0 && branches.value.length > 1) {
        return "outputs";
      }
      return "items";
    });
    const showIoSearchNoMatchContent = computed(
      () => hasNodeRun.value && !inputData.value.length && !!search2.value
    );
    const parentNodeOutputData = computed(() => {
      const parentNode = props.workflow.getParentNodesByDepth(node.value?.name ?? "")[0];
      let parentNodeData = [];
      if (parentNode?.name) {
        parentNodeData = nodeHelpers.getNodeInputData(
          props.workflow.getNode(parentNode?.name),
          props.runIndex,
          outputIndex.value,
          "input",
          connectionType.value
        );
      }
      return parentNodeData;
    });
    const parentNodePinnedData = computed(() => {
      const parentNode = props.workflow.getParentNodesByDepth(node.value?.name ?? "")[0];
      return props.workflow.pinData?.[parentNode?.name || ""] ?? [];
    });
    const showPinButton = computed(() => {
      if (props.disablePin) {
        return false;
      }
      if (!rawInputData.value.length && !pinnedData.hasData.value) {
        return false;
      }
      if (editMode2.value.enabled) {
        return false;
      }
      if (binaryData.value?.length) {
        return isPaneTypeOutput.value;
      }
      return canPinData.value;
    });
    const pinButtonDisabled = computed(
      () => !rawInputData.value.length && !pinnedData.hasData.value || !!binaryData.value?.length || isReadOnlyRoute.value || readOnlyEnv.value
    );
    const activeTaskMetadata = computed(() => {
      if (!node.value) {
        return null;
      }
      const errorMetadata = parseErrorMetadata(workflowRunErrorAsNodeError.value);
      if (errorMetadata !== void 0) {
        return errorMetadata;
      }
      if (parentNodeError.value) {
        const subNodeMetadata = parseErrorMetadata(parentNodeError.value);
        if (subNodeMetadata !== void 0) {
          return subNodeMetadata;
        }
      }
      return workflowRunData.value?.[node.value.name]?.[props.runIndex]?.metadata ?? null;
    });
    const hasInputOverwrite = computed(() => {
      if (!node.value) {
        return false;
      }
      const taskData = nodeHelpers.getNodeTaskData(node.value, props.runIndex);
      return Boolean(taskData?.inputOverride);
    });
    const isSchemaPreviewEnabled = computed(
      () => props.paneType === "input" && !(nodeType.value?.codex?.categories ?? []).some(
        (category) => category === CORE_NODES_CATEGORY
      ) && posthogStore.isVariantEnabled(
        SCHEMA_PREVIEW_EXPERIMENT.name,
        SCHEMA_PREVIEW_EXPERIMENT.variant
      )
    );
    const hasPreviewSchema = computedAsync(async () => {
      if (!isSchemaPreviewEnabled.value || props.nodes.length === 0) return false;
      const nodes = props.nodes.filter((n) => n.depth === 1).map((n) => workflowsStore.getNodeByName(n.name)).filter(isPresent);
      for (const connectedNode of nodes) {
        const { type, typeVersion, parameters } = connectedNode;
        const hasPreview = await schemaPreviewStore.getSchemaPreview({
          nodeType: type,
          version: typeVersion,
          resource: parameters.resource,
          operation: parameters.operation
        });
        if (hasPreview.ok) return true;
      }
      return false;
    }, false);
    const itemsCountProps = computed(() => ({
      search: search2.value,
      dataCount: dataCount.value,
      unfilteredDataCount: unfilteredDataCount.value,
      subExecutionsCount: activeTaskMetadata.value?.subExecutionsCount,
      muted: props.compact || props.paneType === "input" && maxRunIndex.value === 0
    }));
    watch(node, (newNode, prevNode) => {
      if (newNode?.id === prevNode?.id) return;
      init();
    });
    watch(hasNodeRun, () => {
      if (props.paneType === "output") setDisplayMode();
      else {
        outputIndex.value = determineInitialOutputIndex();
      }
    });
    watch(
      inputDataPage,
      (data) => {
        if (props.paneType && data) {
          ndvStore.setNDVPanelDataIsEmpty({
            panel: props.paneType,
            isEmpty: data.every((item) => isEmpty(item.json))
          });
        }
      },
      { immediate: true, deep: true }
    );
    watch(jsonData, (data, prevData) => {
      if (isEqual(data, prevData)) return;
      refreshDataSize();
      if (dataCount.value) {
        resetCurrentPageIfTooFar();
      }
      showPinDataDiscoveryTooltip(data);
    });
    watch(binaryData, (newData, prevData) => {
      if (newData.length && !prevData.length && displayMode.value !== "binary") {
        switchToBinary();
      } else if (!newData.length && displayMode.value === "binary") {
        onDisplayModeChange("table");
      }
    });
    watch(currentOutputIndex, (branchIndex) => {
      ndvStore.setNDVBranchIndex({
        pane: props.paneType,
        branchIndex
      });
    });
    watch(search2, (newSearch) => {
      emit("search", newSearch);
    });
    onMounted(() => {
      init();
      if (!isPaneTypeInput.value) {
        showPinDataDiscoveryTooltip(jsonData.value);
      }
      ndvStore.setNDVBranchIndex({
        pane: props.paneType,
        branchIndex: currentOutputIndex.value
      });
      if (props.paneType === "output") {
        setDisplayMode();
        activatePane();
      }
      if (hasRunError.value && node.value) {
        const error = workflowRunData.value?.[node.value.name]?.[props.runIndex]?.error;
        const errorsToTrack = ["unknown error"];
        if (error && errorsToTrack.some((e) => error.message?.toLowerCase().includes(e))) {
          telemetry.track(
            "User encountered an error",
            {
              node: node.value.type,
              errorMessage: error.message,
              nodeVersion: node.value.typeVersion,
              n8nVersion: rootStore.versionCli
            },
            {
              withPostHog: true
            }
          );
        }
      }
    });
    onBeforeUnmount(() => {
      hidePinDataDiscoveryTooltip();
    });
    function getResolvedNodeOutputs() {
      if (node.value && nodeType.value) {
        const workflowNode = props.workflow.getNode(node.value.name);
        if (workflowNode) {
          const outputs2 = getNodeOutputs(props.workflow, workflowNode, nodeType.value);
          return outputs2;
        }
      }
      return [];
    }
    function shouldHintBeDisplayed(hint) {
      const { location, whenToDisplay } = hint;
      if (location) {
        if (location === "ndv" && !["input", "output"].includes(props.paneType)) {
          return false;
        }
        if (location === "inputPane" && props.paneType !== "input") {
          return false;
        }
        if (location === "outputPane" && props.paneType !== "output") {
          return false;
        }
      }
      if (whenToDisplay === "afterExecution" && !hasNodeRun.value) {
        return false;
      }
      if (whenToDisplay === "beforeExecution" && hasNodeRun.value) {
        return false;
      }
      return true;
    }
    function getNodeHints$1() {
      try {
        if (node.value && nodeType.value) {
          const workflowNode = props.workflow.getNode(node.value.name);
          if (workflowNode) {
            const nodeHints = getNodeHints(props.workflow, workflowNode, nodeType.value, {
              runExecutionData: workflowExecution.value?.data ?? null,
              runIndex: props.runIndex,
              connectionInputData: parentNodeOutputData.value
            });
            const hasMultipleInputItems = parentNodeOutputData.value.length > 1 || parentNodePinnedData.value.length > 1;
            const nodeOutputData = workflowRunData.value?.[node.value.name]?.[props.runIndex]?.data?.main?.[0] ?? [];
            const genericHints = getGenericHints({
              workflowNode,
              node: node.value,
              nodeType: nodeType.value,
              nodeOutputData,
              workflow: props.workflow,
              hasNodeRun: hasNodeRun.value,
              hasMultipleInputItems
            });
            return executionHints.value.concat(nodeHints, genericHints).filter(shouldHintBeDisplayed);
          }
        }
      } catch (error) {
        console.error("Error while getting node hints", error);
      }
      return [];
    }
    function onItemHover(itemIndex) {
      if (itemIndex === null) {
        emit("itemHover", null);
        return;
      }
      emit("itemHover", {
        outputIndex: currentOutputIndex.value,
        itemIndex
      });
    }
    function onClickDataPinningDocsLink() {
      telemetry.track("User clicked ndv link", {
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        node_type: activeNode.value?.type,
        pane: "output",
        type: "data-pinning-docs"
      });
    }
    function showPinDataDiscoveryTooltip(value) {
      if (!isTriggerNode.value) {
        return;
      }
      const pinDataDiscoveryFlag = useStorage(LOCAL_STORAGE_PIN_DATA_DISCOVERY_NDV_FLAG).value;
      if (value && value.length > 0 && !isReadOnlyRoute.value && !pinDataDiscoveryFlag) {
        pinDataDiscoveryComplete();
        setTimeout(() => {
          isControlledPinDataTooltip.value = true;
          pinDataDiscoveryTooltipVisible.value = true;
          dataPinningEventBus.emit("data-pinning-discovery", { isTooltipVisible: true });
        }, 500);
      }
    }
    function hidePinDataDiscoveryTooltip() {
      if (pinDataDiscoveryTooltipVisible.value) {
        isControlledPinDataTooltip.value = false;
        pinDataDiscoveryTooltipVisible.value = false;
        dataPinningEventBus.emit("data-pinning-discovery", { isTooltipVisible: false });
      }
    }
    function pinDataDiscoveryComplete() {
      useStorage(LOCAL_STORAGE_PIN_DATA_DISCOVERY_NDV_FLAG).value = "true";
      useStorage(LOCAL_STORAGE_PIN_DATA_DISCOVERY_CANVAS_FLAG).value = "true";
    }
    function enterEditMode({ origin }) {
      const inputData2 = pinnedData.data.value ? clearJsonKey(pinnedData.data.value) : executionDataToJson(rawInputData.value);
      const inputDataLength = Array.isArray(inputData2) ? inputData2.length : Object.keys(inputData2 ?? {}).length;
      const data = inputDataLength > 0 ? inputData2 : TEST_PIN_DATA;
      ndvStore.setOutputPanelEditModeEnabled(true);
      ndvStore.setOutputPanelEditModeValue(JSON.stringify(data, null, 2));
      telemetry.track("User opened ndv edit state", {
        node_type: activeNode.value?.type,
        click_type: origin === "editIconButton" ? "button" : "link",
        push_ref: props.pushRef,
        run_index: props.runIndex,
        is_output_present: hasNodeRun.value || pinnedData.hasData.value,
        view: !hasNodeRun.value && !pinnedData.hasData.value ? "undefined" : displayMode.value,
        is_data_pinned: pinnedData.hasData.value
      });
    }
    function onClickCancelEdit() {
      ndvStore.setOutputPanelEditModeEnabled(false);
      ndvStore.setOutputPanelEditModeValue("");
      onExitEditMode({ type: "cancel" });
    }
    function onClickSaveEdit() {
      if (!node.value) {
        return;
      }
      const { value } = editMode2.value;
      toast.clearAllStickyNotifications();
      try {
        const clearedValue = clearJsonKey(value);
        try {
          pinnedData.setData(clearedValue, "save-edit");
        } catch (error) {
          return;
        }
      } catch (error) {
        toast.showError(error, i18n.baseText("ndv.pinData.error.syntaxError.title"));
        return;
      }
      ndvStore.setOutputPanelEditModeEnabled(false);
      onExitEditMode({ type: "save" });
    }
    function onExitEditMode({ type }) {
      telemetry.track("User closed ndv edit state", {
        node_type: activeNode.value?.type,
        push_ref: props.pushRef,
        run_index: props.runIndex,
        view: displayMode.value,
        type
      });
    }
    async function onTogglePinData({ source }) {
      if (!node.value) {
        return;
      }
      if (source === "pin-icon-click") {
        const telemetryPayload = {
          node_type: activeNode.value?.type,
          push_ref: props.pushRef,
          run_index: props.runIndex,
          view: !hasNodeRun.value && !pinnedData.hasData.value ? "none" : displayMode.value
        };
        void externalHooks.run("runData.onTogglePinData", telemetryPayload);
        telemetry.track("User clicked pin data icon", telemetryPayload);
      }
      nodeHelpers.updateNodeParameterIssues(node.value);
      if (pinnedData.hasData.value) {
        pinnedData.unsetData(source);
        return;
      }
      try {
        pinnedData.setData(rawInputData.value, "pin-icon-click");
      } catch (error) {
        console.error(error);
        return;
      }
      if (maxRunIndex.value > 0) {
        toast.showToast({
          title: i18n.baseText("ndv.pinData.pin.multipleRuns.title", {
            interpolate: {
              index: `${props.runIndex}`
            }
          }),
          message: i18n.baseText("ndv.pinData.pin.multipleRuns.description"),
          type: "success",
          duration: 2e3
        });
      }
      hidePinDataDiscoveryTooltip();
      pinDataDiscoveryComplete();
    }
    function switchToBinary() {
      onDisplayModeChange("binary");
    }
    function onBranchChange(value) {
      outputIndex.value = value;
      telemetry.track("User changed ndv branch", {
        push_ref: props.pushRef,
        branch_index: value,
        node_type: activeNode.value?.type,
        node_type_input_selection: nodeType.value ? nodeType.value.name : "",
        pane: props.paneType
      });
    }
    function showTooMuchData() {
      showData.value = true;
      userEnabledShowData.value = true;
      telemetry.track("User clicked ndv button", {
        node_type: activeNode.value?.type,
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        pane: props.paneType,
        type: "showTooMuchData"
      });
    }
    function toggleLinkRuns() {
      if (props.linkedRuns) {
        unlinkRun();
      } else {
        linkRun();
      }
    }
    function linkRun() {
      emit("linkRun");
    }
    function unlinkRun() {
      emit("unlinkRun");
    }
    function onCurrentPageChange(value) {
      currentPage.value = value;
      telemetry.track("User changed ndv page", {
        node_type: activeNode.value?.type,
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        pane: props.paneType,
        page_selected: currentPage.value,
        page_size: pageSize.value,
        items_total: dataCount.value
      });
    }
    function resetCurrentPageIfTooFar() {
      const maxPage = Math.ceil(dataCount.value / pageSize.value);
      if (maxPage < currentPage.value) {
        currentPage.value = maxPage;
      }
    }
    function onPageSizeChange(newPageSize) {
      pageSize.value = newPageSize;
      resetCurrentPageIfTooFar();
      telemetry.track("User changed ndv page size", {
        node_type: activeNode.value?.type,
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        pane: props.paneType,
        page_selected: currentPage.value,
        page_size: pageSize.value,
        items_total: dataCount.value
      });
    }
    function onDisplayModeChange(newDisplayMode) {
      const previous = displayMode.value;
      ndvStore.setPanelDisplayMode({ pane: props.paneType, mode: newDisplayMode });
      if (!userEnabledShowData.value) updateShowData();
      if (dataContainerRef.value) {
        const dataDisplay2 = dataContainerRef.value.children[0];
        if (dataDisplay2) {
          dataDisplay2.scrollTo(0, 0);
        }
      }
      closeBinaryDataDisplay();
      void externalHooks.run("runData.displayModeChanged", {
        newValue: newDisplayMode,
        oldValue: previous
      });
      if (activeNode.value) {
        telemetry.track("User changed ndv item view", {
          previous_view: previous,
          new_view: newDisplayMode,
          node_type: activeNode.value.type,
          workflow_id: workflowsStore.workflowId,
          push_ref: props.pushRef,
          pane: props.paneType
        });
      }
    }
    function getRunLabel(option) {
      if (!node.value) {
        return;
      }
      let itemsCount2 = 0;
      for (let i = 0; i <= maxOutputIndex.value; i++) {
        itemsCount2 += getPinDataOrLiveData(getRawInputData(option - 1, i)).length;
      }
      const items = i18n.baseText("ndv.output.items", {
        adjustToNumber: itemsCount2,
        interpolate: { count: itemsCount2 }
      });
      const metadata = workflowRunData.value?.[node.value.name]?.[option - 1]?.metadata ?? null;
      const subexecutions = metadata?.subExecutionsCount ? i18n.baseText("ndv.output.andSubExecutions", {
        adjustToNumber: metadata.subExecutionsCount,
        interpolate: {
          count: metadata.subExecutionsCount
        }
      }) : "";
      const itemsLabel = itemsCount2 > 0 ? ` (${items}${subexecutions})` : "";
      return option + i18n.baseText("ndv.output.of") + (maxRunIndex.value + 1) + itemsLabel;
    }
    function getRawInputData(runIndex, outputIndex2, connectionType2 = NodeConnectionTypes.Main) {
      let inputData2 = [];
      if (node.value) {
        inputData2 = nodeHelpers.getNodeInputData(
          node.value,
          runIndex,
          outputIndex2,
          props.paneType,
          connectionType2
        );
      }
      if (inputData2.length === 0 || !Array.isArray(inputData2)) {
        return [];
      }
      return inputData2;
    }
    function getPinDataOrLiveData(data) {
      if (pinnedData.data.value && !props.isProductionExecutionPreview) {
        return Array.isArray(pinnedData.data.value) ? pinnedData.data.value.map((value) => ({
          json: value
        })) : [
          {
            json: pinnedData.data.value
          }
        ];
      }
      return data;
    }
    function getFilteredData(data) {
      if (!search2.value || isSchemaView.value) {
        return data;
      }
      currentPage.value = 1;
      return data.filter(({ json }) => searchInObject(json, search2.value));
    }
    function getDataCount(runIndex, outputIndex2, connectionType2 = NodeConnectionTypes.Main) {
      if (!node.value) {
        return 0;
      }
      if (workflowRunData.value?.[node.value.name]?.[runIndex]?.hasOwnProperty("error")) {
        return 1;
      }
      const rawInputData2 = getRawInputData(runIndex, outputIndex2, connectionType2);
      const pinOrLiveData = getPinDataOrLiveData(rawInputData2);
      return getFilteredData(pinOrLiveData).length;
    }
    function determineInitialOutputIndex() {
      for (let i = 0; i <= maxOutputIndex.value; i++) {
        if (getRawInputData(props.runIndex, i).length) {
          return i;
        }
      }
      return 0;
    }
    function init() {
      outputIndex.value = determineInitialOutputIndex();
      refreshDataSize();
      closeBinaryDataDisplay();
      let outputTypes = [];
      if (node.value && nodeType.value) {
        const outputs2 = getResolvedNodeOutputs();
        outputTypes = getConnectionTypes(outputs2);
      }
      connectionType.value = outputTypes.length === 0 ? NodeConnectionTypes.Main : outputTypes[0];
      if (binaryData.value.length > 0) {
        ndvStore.setPanelDisplayMode({
          pane: props.paneType,
          mode: "binary"
        });
      } else if (displayMode.value === "binary") {
        ndvStore.setPanelDisplayMode({
          pane: props.paneType,
          mode: "schema"
        });
      }
    }
    function closeBinaryDataDisplay() {
      binaryDataDisplayVisible.value = false;
      binaryDataDisplayData.value = null;
    }
    function isViewable(index, key) {
      const { mimeType } = binaryData.value[index][key];
      return ViewableMimeTypes.includes(mimeType);
    }
    function isDownloadable(index, key) {
      const { mimeType, fileName } = binaryData.value[index][key];
      return !!(mimeType && fileName);
    }
    async function downloadBinaryData(index, key) {
      const { id, data, fileName, fileExtension, mimeType } = binaryData.value[index][key];
      if (id) {
        const url = workflowsStore.getBinaryUrl(id, "download", fileName ?? "", mimeType);
        FileSaver_minExports.saveAs(url, [fileName, fileExtension].join("."));
        return;
      } else {
        const bufferString = "data:" + mimeType + ";base64," + data;
        const blob = await fetch(bufferString).then(async (d) => await d.blob());
        FileSaver_minExports.saveAs(blob, fileName);
      }
    }
    async function downloadJsonData() {
      const fileName = (node.value?.name ?? "").replace(/[^\w\d]/g, "_");
      const blob = new Blob([JSON.stringify(rawInputData.value, null, 2)], {
        type: "application/json"
      });
      FileSaver_minExports.saveAs(blob, `${fileName}.json`);
    }
    function displayBinaryData(index, key) {
      const { data, mimeType } = binaryData.value[index][key];
      binaryDataDisplayVisible.value = true;
      binaryDataDisplayData.value = {
        node: node.value?.name,
        runIndex: props.runIndex,
        outputIndex: currentOutputIndex.value,
        index,
        key,
        data,
        mimeType
      };
    }
    function getOutputName(outputIndex2) {
      if (node.value === null) {
        return outputIndex2 + 1;
      }
      const outputs2 = getResolvedNodeOutputs();
      const outputConfiguration = outputs2?.[outputIndex2];
      if (outputConfiguration && isObject(outputConfiguration)) {
        return outputConfiguration?.displayName;
      }
      if (!nodeType.value?.outputNames || nodeType.value.outputNames.length <= outputIndex2) {
        return outputIndex2 + 1;
      }
      return nodeType.value.outputNames[outputIndex2];
    }
    function refreshDataSize() {
      showData.value = false;
      const jsonItems = inputDataPage.value.map((item) => item.json);
      const byteSize = new Blob([JSON.stringify(jsonItems)]).size;
      dataSize.value = byteSize;
      updateShowData();
    }
    function updateShowData() {
      showData.value = isSchemaView.value && dataSize.value < MAX_DISPLAY_DATA_SIZE_SCHEMA_VIEW || dataSize.value < MAX_DISPLAY_DATA_SIZE;
    }
    function onRunIndexChange(run) {
      emit("runChange", run);
    }
    function enableNode() {
      if (node.value) {
        const updateInformation = {
          name: node.value.name,
          properties: {
            disabled: !node.value.disabled
          }
        };
        workflowsStore.updateNodeProperties(updateInformation);
      }
    }
    function setDisplayMode() {
      if (!activeNode.value) return;
      const shouldDisplayHtml = activeNode.value.type === HTML_NODE_TYPE && activeNode.value.parameters.operation === "generateHtmlTemplate";
      if (shouldDisplayHtml) {
        ndvStore.setPanelDisplayMode({
          pane: "output",
          mode: "html"
        });
      }
    }
    function activatePane() {
      emit("activatePane");
    }
    function onSearchClear() {
      search2.value = "";
      document.dispatchEvent(new KeyboardEvent("keyup", { key: "/" }));
    }
    __expose({ enterEditMode });
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_el_pagination = resolveComponent("el-pagination");
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["run-data", _ctx.$style.container, props.compact ? _ctx.$style.compact : ""]),
        onMouseover: activatePane
      }, [
        !isPaneTypeInput.value && unref(pinnedData).hasData.value && !editMode2.value.enabled && !_ctx.isProductionExecutionPreview ? (openBlock(), createBlock(unref(N8nCallout), {
          key: 0,
          theme: "secondary",
          icon: "thumbtack",
          class: normalizeClass(_ctx.$style.pinnedDataCallout),
          "data-test-id": "ndv-pinned-data-callout"
        }, {
          trailingContent: withCtx(() => [
            createVNode(unref(N8nLink), {
              to: unref(DATA_PINNING_DOCS_URL),
              size: "small",
              theme: "secondary",
              bold: "",
              underline: "",
              onClick: onClickDataPinningDocsLink
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("runData.pindata.learnMore")), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ]),
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("runData.pindata.thisDataIsPinned")) + " ", 1),
            !isReadOnlyRoute.value && !readOnlyEnv.value ? (openBlock(), createElementBlock("span", _hoisted_1, [
              createVNode(unref(N8nLink), {
                theme: "secondary",
                size: "small",
                underline: "",
                bold: "",
                "data-test-id": "ndv-unpin-data",
                onClick: _cache[0] || (_cache[0] = withModifiers(($event) => onTogglePinData({ source: "banner-link" }), ["stop"]))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("runData.pindata.unpin")), 1)
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("", true),
        binaryDataDisplayData.value ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          "window-visible": binaryDataDisplayVisible.value,
          "display-data": binaryDataDisplayData.value,
          onClose: closeBinaryDataDisplay
        }, null, 8, ["window-visible", "display-data"])) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          renderSlot(_ctx.$slots, "header", {}, void 0, true),
          withDirectives(createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.displayModes),
            "data-test-id": "run-data-pane-header",
            onClick: _cache[4] || (_cache[4] = withModifiers(() => {
            }, ["stop"]))
          }, [
            (openBlock(), createBlock(Suspense, null, {
              default: withCtx(() => [
                showIOSearch.value ? (openBlock(), createBlock(unref(LazyRunDataSearch), {
                  key: 0,
                  modelValue: search2.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => search2.value = $event),
                  class: normalizeClass(_ctx.$style.search),
                  "pane-type": _ctx.paneType,
                  "display-mode": displayMode.value,
                  "is-area-active": _ctx.isPaneActive,
                  onFocus: activatePane
                }, null, 8, ["modelValue", "class", "pane-type", "display-mode", "is-area-active"])) : createCommentVNode("", true)
              ]),
              _: 1
            })),
            withDirectives(createVNode(RunDataDisplayModeSelect, {
              class: normalizeClass(_ctx.$style.displayModeSelect),
              compact: props.compact,
              value: displayMode.value,
              "has-binary-data": binaryData.value.length > 0,
              "pane-type": _ctx.paneType,
              "node-generates-html": unref(activeNode)?.type === unref(HTML_NODE_TYPE) && unref(activeNode).parameters.operation === "generateHtmlTemplate",
              onChange: onDisplayModeChange
            }, null, 8, ["class", "compact", "value", "has-binary-data", "pane-type", "node-generates-html"]), [
              [
                vShow,
                unref(hasPreviewSchema) || hasNodeRun.value && (inputData.value.length || binaryData.value.length || search2.value) && !editMode2.value.enabled
              ]
            ]),
            props.compact ? (openBlock(), createBlock(RunDataItemCount, normalizeProps(mergeProps({ key: 0 }, itemsCountProps.value)), null, 16)) : createCommentVNode("", true),
            !props.disableEdit && canPinData.value && !isReadOnlyRoute.value && !readOnlyEnv.value ? withDirectives((openBlock(), createBlock(unref(_sfc_main$a), {
              key: 1,
              title: unref(i18n).baseText("runData.editOutput"),
              circle: false,
              disabled: node.value?.disabled,
              icon: "pencil-alt",
              type: "tertiary",
              "data-test-id": "ndv-edit-pinned-data",
              onClick: _cache[2] || (_cache[2] = ($event) => enterEditMode({ origin: "editIconButton" }))
            }, null, 8, ["title", "disabled"])), [
              [vShow, !editMode2.value.enabled]
            ]) : createCommentVNode("", true),
            showPinButton.value ? (openBlock(), createBlock(RunDataPinButton, {
              key: 2,
              disabled: pinButtonDisabled.value,
              "tooltip-contents-visibility": {
                binaryDataTooltipContent: !!binaryData.value?.length,
                pinDataDiscoveryTooltipContent: isControlledPinDataTooltip.value && pinDataDiscoveryTooltipVisible.value
              },
              "data-pinning-docs-url": unref(DATA_PINNING_DOCS_URL),
              "pinned-data": unref(pinnedData),
              onTogglePinData: _cache[3] || (_cache[3] = ($event) => onTogglePinData({ source: "pin-icon-click" }))
            }, null, 8, ["disabled", "tooltip-contents-visibility", "data-pinning-docs-url", "pinned-data"])) : createCommentVNode("", true),
            !props.disableEdit ? withDirectives((openBlock(), createElementBlock("div", {
              key: 3,
              class: normalizeClass(_ctx.$style.editModeActions)
            }, [
              createVNode(unref(N8nButton), {
                type: "tertiary",
                label: unref(i18n).baseText("runData.editor.cancel"),
                onClick: onClickCancelEdit
              }, null, 8, ["label"]),
              createVNode(unref(N8nButton), {
                class: "ml-2xs",
                type: "primary",
                label: unref(i18n).baseText("runData.editor.save"),
                onClick: onClickSaveEdit
              }, null, 8, ["label"])
            ], 2)), [
              [vShow, editMode2.value.enabled]
            ]) : createCommentVNode("", true)
          ], 2), [
            [vShow, !hasRunError.value && !isTrimmedManualExecutionDataItem.value]
          ])
        ], 2),
        inputSelectLocation.value === "header" ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(_ctx.$style.inputSelect)
        }, [
          renderSlot(_ctx.$slots, "input-select", {}, void 0, true)
        ], 2)) : createCommentVNode("", true),
        maxRunIndex.value > 0 && !displaysMultipleNodes.value && !props.disableRunIndexSelection ? withDirectives((openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass(_ctx.$style.runSelector)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.runSelectorInner)
          }, [
            inputSelectLocation.value === "runs" ? renderSlot(_ctx.$slots, "input-select", { key: 0 }, void 0, true) : createCommentVNode("", true),
            createVNode(unref(N8nSelect), {
              "model-value": _ctx.runIndex,
              class: normalizeClass(_ctx.$style.runSelectorSelect),
              size: "small",
              teleported: "",
              "data-test-id": "run-selector",
              "onUpdate:modelValue": onRunIndexChange,
              onClick: _cache[5] || (_cache[5] = withModifiers(() => {
              }, ["stop"]))
            }, {
              prepend: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.run")), 1)
              ]),
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(maxRunIndex.value + 1, (option) => {
                  return openBlock(), createBlock(unref(_sfc_main$b), {
                    key: option,
                    label: getRunLabel(option),
                    value: option - 1
                  }, null, 8, ["label", "value"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["model-value", "class"]),
            _ctx.canLinkRuns ? (openBlock(), createBlock(unref(N8nTooltip), {
              key: 1,
              placement: "right"
            }, {
              content: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText(_ctx.linkedRuns ? "runData.unlinking.hint" : "runData.linking.hint")), 1)
              ]),
              default: withCtx(() => [
                createVNode(unref(_sfc_main$a), {
                  icon: _ctx.linkedRuns ? "unlink" : "link",
                  class: normalizeClass(["linkRun", _ctx.linkedRuns ? "linked" : ""]),
                  text: "",
                  type: "tertiary",
                  size: "small",
                  "data-test-id": "link-run",
                  onClick: toggleLinkRuns
                }, null, 8, ["icon", "class"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "run-info", {}, void 0, true)
          ], 2),
          activeTaskMetadata.value && !(_ctx.paneType === "input" && hasInputOverwrite.value) ? (openBlock(), createBlock(ViewSubExecution, {
            key: 0,
            "task-metadata": activeTaskMetadata.value,
            "display-mode": displayMode.value
          }, null, 8, ["task-metadata", "display-mode"])) : createCommentVNode("", true)
        ], 2)), [
          [vShow, !editMode2.value.enabled]
        ]) : createCommentVNode("", true),
        !displaysMultipleNodes.value ? renderSlot(_ctx.$slots, "before-data", { key: 4 }, void 0, true) : createCommentVNode("", true),
        props.calloutMessage || _ctx.$slots["callout-message"] ? (openBlock(), createElementBlock("div", {
          key: 5,
          class: normalizeClass(_ctx.$style.hintCallout)
        }, [
          createVNode(unref(N8nCallout), {
            theme: "info",
            "data-test-id": "run-data-callout"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "callout-message", {}, () => [
                withDirectives(createVNode(unref(N8nText), { size: "small" }, null, 512), [
                  [_directive_n8n_html, props.calloutMessage]
                ])
              ], true)
            ]),
            _: 3
          })
        ], 2)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(getNodeHints$1(), (hint) => {
          return openBlock(), createBlock(unref(N8nCallout), {
            key: hint.message,
            class: normalizeClass(_ctx.$style.hintCallout),
            theme: hint.type || "info",
            "data-test-id": "node-hint"
          }, {
            default: withCtx(() => [
              withDirectives(createVNode(unref(N8nText), { size: "small" }, null, 512), [
                [_directive_n8n_html, hint.message]
              ])
            ]),
            _: 2
          }, 1032, ["class", "theme"]);
        }), 128)),
        maxOutputIndex.value > 0 && branches.value.length > 1 && !displaysMultipleNodes.value ? (openBlock(), createElementBlock("div", {
          key: 6,
          class: normalizeClass(_ctx.$style.outputs),
          "data-test-id": "branches"
        }, [
          inputSelectLocation.value === "outputs" ? renderSlot(_ctx.$slots, "input-select", { key: 0 }, void 0, true) : createCommentVNode("", true),
          activeTaskMetadata.value && !(_ctx.paneType === "input" && hasInputOverwrite.value) ? (openBlock(), createBlock(ViewSubExecution, {
            key: 1,
            "task-metadata": activeTaskMetadata.value,
            "display-mode": displayMode.value
          }, null, 8, ["task-metadata", "display-mode"])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.tabs)
          }, [
            createVNode(unref(N8nTabs), {
              "model-value": currentOutputIndex.value,
              options: branches.value,
              "onUpdate:modelValue": onBranchChange
            }, null, 8, ["model-value", "options"])
          ], 2)
        ], 2)) : !props.compact && hasNodeRun.value && !isSearchInSchemaView.value && (dataCount.value > 0 && maxRunIndex.value === 0 || search2.value) && !isArtificialRecoveredEventItem.value && !displaysMultipleNodes.value ? withDirectives((openBlock(), createElementBlock("div", {
          key: 7,
          class: normalizeClass(_ctx.$style.itemsCount),
          "data-test-id": "ndv-items-count"
        }, [
          inputSelectLocation.value === "items" ? renderSlot(_ctx.$slots, "input-select", { key: 0 }, void 0, true) : createCommentVNode("", true),
          createVNode(RunDataItemCount, normalizeProps(guardReactiveProps(itemsCountProps.value)), null, 16),
          activeTaskMetadata.value && !(_ctx.paneType === "input" && hasInputOverwrite.value) ? (openBlock(), createBlock(ViewSubExecution, {
            key: 1,
            "task-metadata": activeTaskMetadata.value,
            "display-mode": displayMode.value
          }, null, 8, ["task-metadata", "display-mode"])) : createCommentVNode("", true)
        ], 2)), [
          [vShow, !editMode2.value.enabled]
        ]) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "dataContainerRef",
          ref: dataContainerRef,
          class: normalizeClass(_ctx.$style.dataContainer),
          "data-test-id": "ndv-data-container"
        }, [
          _ctx.isExecuting && !isWaitNodeWaiting.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.center),
            "data-test-id": "ndv-executing"
          }, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.spinner)
            }, [
              createVNode(unref(_sfc_main$c), { type: "ring" })
            ], 2),
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.executingMessage), 1)
              ]),
              _: 1
            })
          ], 2)) : editMode2.value.enabled ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.$style.editMode)
          }, [
            createBaseVNode("div", {
              class: normalizeClass([_ctx.$style.editModeBody, "ignore-key-press-canvas"])
            }, [
              createVNode(JsonEditor, {
                "model-value": editMode2.value.value,
                "fill-parent": true,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(ndvStore).setOutputPanelEditModeValue($event))
              }, null, 8, ["model-value"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.editModeFooter)
            }, [
              createVNode(unref(InfoTip), {
                bold: false,
                class: normalizeClass(_ctx.$style.editModeFooterInfotip)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("runData.editor.copyDataInfo")) + " ", 1),
                  createVNode(unref(N8nLink), {
                    to: unref(DATA_EDITING_DOCS_URL),
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                _: 1
              }, 8, ["class"])
            ], 2)
          ], 2)) : _ctx.paneType === "output" && hasSubworkflowExecutionError.value && subworkflowExecutionError.value ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass(_ctx.$style.stretchVertically)
          }, [
            createVNode(_sfc_main$9, {
              error: subworkflowExecutionError.value,
              class: normalizeClass(_ctx.$style.errorDisplay)
            }, null, 8, ["error", "class"])
          ], 2)) : isWaitNodeWaiting.value ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: normalizeClass(_ctx.$style.center)
          }, [
            renderSlot(_ctx.$slots, "node-waiting", {}, () => [
              _cache[9] || (_cache[9] = createTextVNode("xxx"))
            ], true)
          ], 2)) : !hasNodeRun.value && !(displaysMultipleNodes.value && (node.value?.disabled || unref(hasPreviewSchema))) ? (openBlock(), createElementBlock("div", {
            key: 4,
            class: normalizeClass(_ctx.$style.center)
          }, [
            renderSlot(_ctx.$slots, "node-not-run", {}, void 0, true)
          ], 2)) : _ctx.paneType === "input" && !displaysMultipleNodes.value && node.value?.disabled ? (openBlock(), createElementBlock("div", {
            key: 5,
            class: normalizeClass(_ctx.$style.center)
          }, [
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.disabled", { interpolate: { nodeName: node.value.name } })) + " ", 1),
                createVNode(unref(N8nLink), { onClick: enableNode }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.disabled.cta")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ], 2)) : isTrimmedManualExecutionDataItem.value && unref(uiStore).isProcessingExecutionResults ? (openBlock(), createElementBlock("div", {
            key: 6,
            class: normalizeClass(_ctx.$style.center)
          }, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.spinner)
            }, [
              createVNode(unref(_sfc_main$c), { type: "ring" })
            ], 2),
            createVNode(unref(N8nText), {
              color: "text-dark",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("runData.trimmedData.loading")), 1)
              ]),
              _: 1
            })
          ], 2)) : isTrimmedManualExecutionDataItem.value ? (openBlock(), createElementBlock("div", {
            key: 7,
            class: normalizeClass(_ctx.$style.center)
          }, [
            createVNode(unref(N8nText), {
              bold: "",
              color: "text-dark",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("runData.trimmedData.title")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("runData.trimmedData.message")), 1)
              ]),
              _: 1
            })
          ], 2)) : hasNodeRun.value && isArtificialRecoveredEventItem.value ? (openBlock(), createElementBlock("div", {
            key: 8,
            class: normalizeClass(_ctx.$style.center)
          }, [
            renderSlot(_ctx.$slots, "recovered-artificial-output-data", {}, void 0, true)
          ], 2)) : hasNodeRun.value && hasRunError.value ? (openBlock(), createElementBlock("div", {
            key: 9,
            class: normalizeClass(_ctx.$style.stretchVertically)
          }, [
            isPaneTypeInput.value ? (openBlock(), createBlock(unref(N8nText), {
              key: 0,
              class: normalizeClass(_ctx.$style.center),
              size: "large",
              tag: "p",
              bold: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("nodeErrorView.inputPanel.previousNodeError.title", {
                  interpolate: { nodeName: node.value?.name ?? "" }
                })), 1)
              ]),
              _: 1
            }, 8, ["class"])) : _ctx.$slots["content"] ? (openBlock(), createElementBlock("div", _hoisted_2, [
              workflowRunErrorAsNodeError.value ? (openBlock(), createBlock(_sfc_main$9, {
                key: 0,
                error: workflowRunErrorAsNodeError.value,
                class: normalizeClass(_ctx.$style.inlineError),
                compact: ""
              }, null, 8, ["error", "class"])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "content", {}, void 0, true)
            ])) : workflowRunErrorAsNodeError.value ? (openBlock(), createBlock(_sfc_main$9, {
              key: 2,
              error: workflowRunErrorAsNodeError.value,
              class: normalizeClass(_ctx.$style.dataDisplay)
            }, null, 8, ["error", "class"])) : createCommentVNode("", true)
          ], 2)) : hasNodeRun.value && (!unfilteredDataCount.value || search2.value && !dataCount.value) && branches.value.length > 1 ? (openBlock(), createElementBlock("div", {
            key: 10,
            class: normalizeClass(_ctx.$style.center)
          }, [
            search2.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
              createVNode(unref(N8nText), {
                tag: "h3",
                size: "large"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.search.noMatch.title")), 1)
                ]),
                _: 1
              }),
              createVNode(unref(N8nText), null, {
                default: withCtx(() => [
                  createVNode(_component_i18n_t, {
                    keypath: "ndv.search.noMatch.description",
                    tag: "span"
                  }, {
                    link: withCtx(() => [
                      createBaseVNode("a", {
                        href: "#",
                        onClick: onSearchClear
                      }, toDisplayString(unref(i18n).baseText("ndv.search.noMatch.description.link")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])) : (openBlock(), createBlock(unref(N8nText), { key: 1 }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.noDataInBranchMessage), 1)
              ]),
              _: 1
            }))
          ], 2)) : hasNodeRun.value && !inputData.value.length && !search2.value ? (openBlock(), createElementBlock("div", {
            key: 11,
            class: normalizeClass(_ctx.$style.center)
          }, [
            renderSlot(_ctx.$slots, "no-output-data", {}, () => [
              _cache[10] || (_cache[10] = createTextVNode("xxx"))
            ], true)
          ], 2)) : hasNodeRun.value && !showData.value ? (openBlock(), createElementBlock("div", {
            key: 12,
            "data-test-id": "ndv-data-size-warning",
            class: normalizeClass(_ctx.$style.center)
          }, [
            createVNode(unref(N8nText), {
              bold: true,
              color: "text-dark",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.tooMuchDataTitle), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), {
              align: "center",
              tag: "div"
            }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode("span", null, null, 512), [
                  [
                    _directive_n8n_html,
                    unref(i18n).baseText("ndv.output.tooMuchData.message", {
                      interpolate: { size: dataSizeInMB.value }
                    })
                  ]
                ])
              ]),
              _: 1
            }),
            createVNode(unref(N8nButton), {
              outline: "",
              label: unref(i18n).baseText("ndv.output.tooMuchData.showDataAnyway"),
              onClick: showTooMuchData
            }, null, 8, ["label"]),
            createVNode(unref(N8nButton), {
              size: "small",
              label: unref(i18n).baseText("runData.downloadBinaryData"),
              onClick: _cache[7] || (_cache[7] = ($event) => downloadJsonData())
            }, null, 8, ["label"])
          ], 2)) : hasNodeRun.value && _ctx.$slots["content"] ? renderSlot(_ctx.$slots, "content", { key: 13 }, void 0, true) : hasNodeRun.value && displayMode.value === "table" && binaryData.value.length > 0 && inputData.value.length === 1 && Object.keys(jsonData.value[0] || {}).length === 0 ? (openBlock(), createElementBlock("div", {
            key: 14,
            class: normalizeClass(_ctx.$style.center)
          }, [
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("runData.switchToBinary.info")) + " ", 1),
                createBaseVNode("a", { onClick: switchToBinary }, toDisplayString(unref(i18n).baseText("runData.switchToBinary.binary")), 1)
              ]),
              _: 1
            })
          ], 2)) : showIoSearchNoMatchContent.value ? (openBlock(), createElementBlock("div", {
            key: 15,
            class: normalizeClass(_ctx.$style.center)
          }, [
            createVNode(unref(N8nText), {
              tag: "h3",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.search.noMatch.title")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createVNode(_component_i18n_t, {
                  keypath: "ndv.search.noMatch.description",
                  tag: "span"
                }, {
                  link: withCtx(() => [
                    createBaseVNode("a", {
                      href: "#",
                      onClick: onSearchClear
                    }, toDisplayString(unref(i18n).baseText("ndv.search.noMatch.description.link")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ], 2)) : hasNodeRun.value && displayMode.value === "table" && node.value ? (openBlock(), createBlock(Suspense, { key: 16 }, {
            default: withCtx(() => [
              createVNode(unref(LazyRunDataTable), {
                node: node.value,
                "input-data": inputDataPage.value,
                "mapping-enabled": _ctx.mappingEnabled,
                "distance-from-active": _ctx.distanceFromActive,
                "run-index": _ctx.runIndex,
                "page-offset": currentPageOffset.value,
                "total-runs": maxRunIndex.value,
                "has-default-hover-state": _ctx.paneType === "input" && !search2.value,
                search: search2.value,
                "header-bg-color": _ctx.tableHeaderBgColor,
                onMounted: _cache[8] || (_cache[8] = ($event) => emit("tableMounted", $event)),
                onActiveRowChanged: onItemHover,
                onDisplayModeChange
              }, null, 8, ["node", "input-data", "mapping-enabled", "distance-from-active", "run-index", "page-offset", "total-runs", "has-default-hover-state", "search", "header-bg-color"])
            ]),
            _: 1
          })) : hasNodeRun.value && displayMode.value === "json" && node.value ? (openBlock(), createBlock(Suspense, { key: 17 }, {
            default: withCtx(() => [
              createVNode(unref(LazyRunDataJson), {
                "pane-type": _ctx.paneType,
                "edit-mode": editMode2.value,
                "push-ref": _ctx.pushRef,
                node: node.value,
                "input-data": inputDataPage.value,
                "mapping-enabled": _ctx.mappingEnabled,
                "distance-from-active": _ctx.distanceFromActive,
                "run-index": _ctx.runIndex,
                "output-index": currentOutputIndex.value,
                "total-runs": maxRunIndex.value,
                search: search2.value
              }, null, 8, ["pane-type", "edit-mode", "push-ref", "node", "input-data", "mapping-enabled", "distance-from-active", "run-index", "output-index", "total-runs", "search"])
            ]),
            _: 1
          })) : hasNodeRun.value && isPaneTypeOutput.value && displayMode.value === "html" ? (openBlock(), createBlock(Suspense, { key: 18 }, {
            default: withCtx(() => [
              createVNode(unref(LazyRunDataHtml), { "input-html": inputHtml.value }, null, 8, ["input-html"])
            ]),
            _: 1
          })) : (hasNodeRun.value || unref(hasPreviewSchema)) && isSchemaView.value ? (openBlock(), createBlock(Suspense, { key: 19 }, {
            default: withCtx(() => [
              createVNode(unref(LazyRunDataSchema), {
                nodes: _ctx.nodes,
                "mapping-enabled": _ctx.mappingEnabled,
                node: node.value,
                data: jsonData.value,
                "pane-type": _ctx.paneType,
                "connection-type": connectionType.value,
                "run-index": _ctx.runIndex,
                "output-index": currentOutputIndex.value,
                "total-runs": maxRunIndex.value,
                search: search2.value,
                class: normalizeClass(_ctx.$style.schema),
                "onClear:search": onSearchClear
              }, null, 8, ["nodes", "mapping-enabled", "node", "data", "pane-type", "connection-type", "run-index", "output-index", "total-runs", "search", "class"])
            ]),
            _: 1
          })) : displayMode.value === "binary" && binaryData.value.length === 0 ? (openBlock(), createElementBlock("div", {
            key: 20,
            class: normalizeClass(_ctx.$style.center)
          }, [
            createVNode(unref(N8nText), {
              align: "center",
              tag: "div"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("runData.noBinaryDataFound")), 1)
              ]),
              _: 1
            })
          ], 2)) : displayMode.value === "binary" ? (openBlock(), createElementBlock("div", {
            key: 21,
            class: normalizeClass(_ctx.$style.dataDisplay)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(binaryData.value, (binaryDataEntry, index) => {
              return openBlock(), createElementBlock("div", { key: index }, [
                binaryData.value.length > 1 ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.binaryIndex)
                }, [
                  createBaseVNode("div", null, toDisplayString(index + 1), 1)
                ], 2)) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.binaryRow)
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(binaryDataEntry, (binaryData2, key) => {
                    return openBlock(), createElementBlock("div", {
                      key: index + "_" + key,
                      class: normalizeClass(_ctx.$style.binaryCell)
                    }, [
                      createBaseVNode("div", {
                        "data-test-id": "ndv-binary-data_" + index
                      }, [
                        createBaseVNode("div", {
                          class: normalizeClass(_ctx.$style.binaryHeader)
                        }, toDisplayString(key), 3),
                        binaryData2.fileName ? (openBlock(), createElementBlock("div", _hoisted_5, [
                          createBaseVNode("div", null, [
                            createVNode(unref(N8nText), {
                              size: "small",
                              bold: true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(i18n).baseText("runData.fileName")) + ": ", 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", {
                            class: normalizeClass(_ctx.$style.binaryValue)
                          }, toDisplayString(binaryData2.fileName), 3)
                        ])) : createCommentVNode("", true),
                        binaryData2.directory ? (openBlock(), createElementBlock("div", _hoisted_6, [
                          createBaseVNode("div", null, [
                            createVNode(unref(N8nText), {
                              size: "small",
                              bold: true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(i18n).baseText("runData.directory")) + ": ", 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", {
                            class: normalizeClass(_ctx.$style.binaryValue)
                          }, toDisplayString(binaryData2.directory), 3)
                        ])) : createCommentVNode("", true),
                        binaryData2.fileExtension ? (openBlock(), createElementBlock("div", _hoisted_7, [
                          createBaseVNode("div", null, [
                            createVNode(unref(N8nText), {
                              size: "small",
                              bold: true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(i18n).baseText("runData.fileExtension")) + ":", 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", {
                            class: normalizeClass(_ctx.$style.binaryValue)
                          }, toDisplayString(binaryData2.fileExtension), 3)
                        ])) : createCommentVNode("", true),
                        binaryData2.mimeType ? (openBlock(), createElementBlock("div", _hoisted_8, [
                          createBaseVNode("div", null, [
                            createVNode(unref(N8nText), {
                              size: "small",
                              bold: true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(i18n).baseText("runData.mimeType")) + ": ", 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", {
                            class: normalizeClass(_ctx.$style.binaryValue)
                          }, toDisplayString(binaryData2.mimeType), 3)
                        ])) : createCommentVNode("", true),
                        binaryData2.fileSize ? (openBlock(), createElementBlock("div", _hoisted_9, [
                          createBaseVNode("div", null, [
                            createVNode(unref(N8nText), {
                              size: "small",
                              bold: true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(i18n).baseText("runData.fileSize")) + ": ", 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", {
                            class: normalizeClass(_ctx.$style.binaryValue)
                          }, toDisplayString(binaryData2.fileSize), 3)
                        ])) : createCommentVNode("", true),
                        createBaseVNode("div", {
                          class: normalizeClass(_ctx.$style.binaryButtonContainer)
                        }, [
                          isViewable(index, key) ? (openBlock(), createBlock(unref(N8nButton), {
                            key: 0,
                            size: "small",
                            label: unref(i18n).baseText("runData.showBinaryData"),
                            "data-test-id": "ndv-view-binary-data",
                            onClick: ($event) => displayBinaryData(index, key)
                          }, null, 8, ["label", "onClick"])) : createCommentVNode("", true),
                          isDownloadable(index, key) ? (openBlock(), createBlock(unref(N8nButton), {
                            key: 1,
                            size: "small",
                            type: "secondary",
                            label: unref(i18n).baseText("runData.downloadBinaryData"),
                            "data-test-id": "ndv-download-binary-data",
                            onClick: ($event) => downloadBinaryData(index, key)
                          }, null, 8, ["label", "onClick"])) : createCommentVNode("", true)
                        ], 2)
                      ], 8, _hoisted_4)
                    ], 2);
                  }), 128))
                ], 2)
              ]);
            }), 128))
          ], 2)) : !hasNodeRun.value ? (openBlock(), createElementBlock("div", {
            key: 22,
            class: normalizeClass(_ctx.$style.center)
          }, [
            renderSlot(_ctx.$slots, "node-not-run", {}, void 0, true)
          ], 2)) : createCommentVNode("", true)
        ], 2),
        _ctx.hidePagination === false && hasNodeRun.value && !hasRunError.value && displayMode.value !== "binary" && dataCount.value > pageSize.value && !isSchemaView.value && !isArtificialRecoveredEventItem.value ? withDirectives((openBlock(), createElementBlock("div", {
          key: 8,
          class: normalizeClass(_ctx.$style.pagination),
          "data-test-id": "ndv-data-pagination"
        }, [
          createVNode(_component_el_pagination, {
            background: "",
            "hide-on-single-page": true,
            "current-page": currentPage.value,
            "pager-count": 5,
            "page-size": pageSize.value,
            layout: "prev, pager, next",
            total: dataCount.value,
            "onUpdate:currentPage": onCurrentPageChange
          }, null, 8, ["current-page", "page-size", "total"]),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.pageSizeSelector)
          }, [
            createVNode(unref(N8nSelect), {
              size: "mini",
              "model-value": pageSize.value,
              teleported: "",
              "onUpdate:modelValue": onPageSizeChange
            }, {
              prepend: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.pageSize")), 1)
              ]),
              default: withCtx(() => [
                (openBlock(), createElementBlock(Fragment, null, renderList(pageSizes, (size) => {
                  return createVNode(unref(_sfc_main$b), {
                    key: size,
                    label: size,
                    value: size
                  }, null, 8, ["label", "value"]);
                }), 64)),
                createVNode(unref(_sfc_main$b), {
                  label: unref(i18n).baseText("ndv.output.all"),
                  value: dataCount.value
                }, null, 8, ["label", "value"])
              ]),
              _: 1
            }, 8, ["model-value"])
          ], 2)
        ], 2)), [
          [vShow, !editMode2.value.enabled]
        ]) : createCommentVNode("", true),
        createVNode(unref(N8nBlockUi), {
          show: _ctx.blockUI,
          class: normalizeClass(_ctx.$style.uiBlocker)
        }, null, 8, ["show", "class"])
      ], 34);
    };
  }
});
const infoIcon = "_infoIcon_12zhg_123";
const center = "_center_12zhg_127";
const container = "_container_12zhg_141";
const pinnedDataCallout = "_pinnedDataCallout_12zhg_149";
const header = "_header_12zhg_157";
const compact = "_compact_12zhg_168";
const dataContainer = "_dataContainer_12zhg_176";
const dataDisplay = "_dataDisplay_12zhg_185";
const inlineError = "_inlineError_12zhg_197";
const outputs = "_outputs_12zhg_204";
const tabs = "_tabs_12zhg_213";
const itemsCount = "_itemsCount_12zhg_221";
const inputSelect = "_inputSelect_12zhg_231";
const runSelector = "_runSelector_12zhg_237";
const runSelectorInner = "_runSelectorInner_12zhg_250";
const runSelectorSelect = "_runSelectorSelect_12zhg_256";
const search = "_search_12zhg_260";
const pagination = "_pagination_12zhg_264";
const pageSizeSelector = "_pageSizeSelector_12zhg_274";
const binaryIndex = "_binaryIndex_12zhg_280";
const binaryRow = "_binaryRow_12zhg_297";
const binaryCell = "_binaryCell_12zhg_302";
const binaryHeader = "_binaryHeader_12zhg_314";
const binaryButtonContainer = "_binaryButtonContainer_12zhg_323";
const binaryValue = "_binaryValue_12zhg_334";
const displayModes = "_displayModes_12zhg_339";
const tooltipContain = "_tooltipContain_12zhg_347";
const spinner = "_spinner_12zhg_351";
const editMode = "_editMode_12zhg_362";
const editModeBody = "_editModeBody_12zhg_371";
const editModeFooter = "_editModeFooter_12zhg_378";
const editModeFooterInfotip = "_editModeFooterInfotip_12zhg_388";
const editModeActions = "_editModeActions_12zhg_394";
const stretchVertically = "_stretchVertically_12zhg_401";
const uiBlocker = "_uiBlocker_12zhg_405";
const hintCallout = "_hintCallout_12zhg_410";
const schema = "_schema_12zhg_416";
const displayModeSelect = "_displayModeSelect_12zhg_421";
const style0 = {
  infoIcon,
  center,
  container,
  pinnedDataCallout,
  header,
  compact,
  dataContainer,
  "actions-group": "_actions-group_12zhg_181",
  dataDisplay,
  inlineError,
  outputs,
  tabs,
  itemsCount,
  inputSelect,
  runSelector,
  runSelectorInner,
  runSelectorSelect,
  search,
  pagination,
  pageSizeSelector,
  binaryIndex,
  binaryRow,
  binaryCell,
  binaryHeader,
  binaryButtonContainer,
  binaryValue,
  displayModes,
  tooltipContain,
  spinner,
  editMode,
  editModeBody,
  editModeFooter,
  editModeFooterInfotip,
  editModeActions,
  stretchVertically,
  uiBlocker,
  hintCallout,
  schema,
  displayModeSelect
};
const cssModules = {
  "$style": style0
};
const RunData = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules], ["__scopeId", "data-v-97a8af0b"]]);
export {
  HighlightJS as H,
  RunData as R,
  ViewSubExecution as V,
  _sfc_main$8 as _,
  getTotalConsumedTokens as a,
  findLogEntryToAutoSelect as b,
  createLogEntries as c,
  _sfc_main$9 as d,
  getConsumedTokens as e,
  formatTokenUsageCount as f,
  getSubtreeTotalConsumedTokens as g,
  createAiData as h,
  getTreeNodeData as i,
  getReferencedData as j,
  VueJsonPretty as k
};

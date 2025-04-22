import { d as defineComponent, s as MAIN_HEADER_TABS, h as resolveComponent, i as createElementBlock, f as createCommentVNode, g as openBlock, n as normalizeClass, j as createVNode, _ as _export_sfc, q as computed, v as shorten, x as renderSlot, r as ref, y as onBeforeUnmount, o as onMounted, z as nextTick, A as debounce, e as createBlock, m as unref, B as normalizeStyle, C as createEventBus, w as withCtx, k as createBaseVNode, F as Fragment, D as renderList, l as createTextVNode, t as toDisplayString, E as useTagsStore, G as onClickOutside, H as withKeys, I as watch, J as withModifiers, K as useDebounce, L as useUIStore, N as BREAKPOINT_SM, O as BREAKPOINT_XL, P as BREAKPOINT_LG, Q as BREAKPOINT_MD, R as getBannerRowHeight, V as VIEWS, c as useI18n, S as defineStore, T as usePushConnectionStore, U as useWorkflowsStore, u as useUsersStore, W as useRoute, X as PLACEHOLDER_EMPTY_WORKFLOW_ID, Y as STORES, Z as TIME, $ as useDocumentVisibility, a0 as useCssModule, a1 as useRootStore, a2 as useCanvasStore, p as useSettingsStore, a3 as useSourceControlStore, a4 as useProjectsStore, a5 as useNpsSurveyStore, b as useRouter, a as useToast, a6 as useDocumentTitle, a7 as useWorkflowHelpers, a8 as usePageRedirectionHelper, a9 as getResourcePermissions, aa as WORKFLOW_MENU_ACTIONS, ab as hasPermission, ac as EnterpriseEditionFeature, ad as ProjectTypes, ae as MAX_WORKFLOW_NAME_LENGTH, af as _sfc_main$f, ag as SaveButton, ah as WORKFLOW_SHARE_MODAL_KEY, ai as useTelemetry, aj as nodeViewEventBus, ak as useMessage, al as MODAL_CONFIRM, am as WORKFLOW_SETTINGS_MODAL_KEY, an as SOURCE_CONTROL_PUSH_MODAL_KEY, ao as VALID_WORKFLOW_IMPORT_URL_REGEX, ap as DUPLICATE_MODAL_KEY, aq as __vitePreload, ar as hyphenate, as as h, at as hasOwn, au as useNDVStore, av as useExecutionsStore, aw as usePostHog, ax as useLocalStorage, ay as LOCAL_STORAGE_HIDE_GITHUB_STAR_BUTTON, az as WORKFLOW_EVALUATION_EXPERIMENT, aA as STICKY_NODE_TYPE, aB as onBeforeMount, aC as withDirectives, aD as vShow, aE as N8N_MAIN_GITHUB_REPO_URL } from "./index-Dhp_73Xq.js";
import { _ as _sfc_main$g } from "./PushConnectionTracker.vue_vue_type_script_setup_true_lang-DhELD04j.js";
import { W as WorkflowActivator } from "./WorkflowActivator-Bcvnntya.js";
import { u as useBeforeUnload } from "./useBeforeUnload-D1fugyiq.js";
import { F as FileSaver_minExports } from "./FileSaver.min-DG2dn2Gc.js";
import { u as usePushConnection } from "./usePushConnection-CLPLUaqG.js";
import "./useWorkflowActivate-CJsgb3vu.js";
import "./global-link-actions-BuJ3w7G_.js";
import "./easyAiWorkflowUtils-CCdu2tsb.js";
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "TabBar",
  props: {
    items: {},
    modelValue: { default: MAIN_HEADER_TABS.WORKFLOW }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function onUpdateModelValue(tab, event) {
      emit("update:modelValue", tab, event);
    }
    return (_ctx, _cache) => {
      const _component_N8nRadioButtons = resolveComponent("N8nRadioButtons");
      return _ctx.items ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass({
          [_ctx.$style.container]: true,
          ["tab-bar-container"]: true
        })
      }, [
        createVNode(_component_N8nRadioButtons, {
          "model-value": _ctx.modelValue,
          options: _ctx.items,
          "onUpdate:modelValue": onUpdateModelValue
        }, null, 8, ["model-value", "options"])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const container$3 = "_container_j6ct2_123";
const style0$3 = {
  container: container$3
};
const cssModules$4 = {
  "$style": style0$3
};
const TabBar = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__cssModules", cssModules$4]]);
const _hoisted_1$7 = ["title", "data-test-id"];
const DEFAULT_WORKFLOW_NAME_LIMIT = 25;
const WORKFLOW_NAME_END_COUNT_TO_KEEP = 4;
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "ShortenName",
  props: {
    name: {},
    testId: {},
    limit: { default: DEFAULT_WORKFLOW_NAME_LIMIT }
  },
  setup(__props) {
    const props = __props;
    const shortenedName = computed(
      () => shorten(props.name, props.limit, WORKFLOW_NAME_END_COUNT_TO_KEEP)
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        title: _ctx.name,
        "data-test-id": _ctx.testId
      }, [
        renderSlot(_ctx.$slots, "default", { shortenedName: shortenedName.value })
      ], 8, _hoisted_1$7);
    };
  }
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "IntersectionObserver",
  props: {
    threshold: { default: 0 },
    enabled: { type: Boolean, default: false },
    eventBus: {}
  },
  emits: ["observed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const observer = ref(null);
    const root = ref(null);
    onBeforeUnmount(() => {
      if (props.enabled && observer.value) {
        observer.value.disconnect();
      }
    });
    onMounted(() => {
      if (!props.enabled) {
        return;
      }
      const options = {
        root: root.value,
        rootMargin: "0px",
        threshold: props.threshold
      };
      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          emit("observed", {
            el: target,
            isIntersecting
          });
        });
      }, options);
      observer.value = intersectionObserver;
      props.eventBus.on("observe", (observed) => {
        if (observed) {
          intersectionObserver.observe(observed);
        }
      });
      props.eventBus.on("unobserve", (observed) => {
        intersectionObserver.unobserve(observed);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "root",
        ref: root
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 512);
    };
  }
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "IntersectionObserved",
  props: {
    enabled: { type: Boolean, default: false },
    eventBus: {}
  },
  setup(__props) {
    const props = __props;
    const observed = ref(null);
    onMounted(async () => {
      if (!props.enabled) {
        return;
      }
      await nextTick();
      props.eventBus.emit("observe", observed.value);
    });
    onBeforeUnmount(() => {
      if (props.enabled) {
        props.eventBus.emit("unobserve", observed.value);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "observed",
        ref: observed
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 512);
    };
  }
});
const _hoisted_1$6 = { class: "tags" };
const _hoisted_2$2 = ["onClick"];
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TagsContainer",
  props: {
    tagIds: {},
    tagsById: {},
    limit: { default: 20 },
    clickable: { type: Boolean, default: false },
    responsive: { type: Boolean, default: false },
    hoverable: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const maxWidth = ref(320);
    const intersectionEventBus = createEventBus();
    const visibility = ref({});
    const tagsContainer = ref();
    const style = computed(() => ({
      "max-width": `${maxWidth.value}px`
    }));
    const tags = computed(() => {
      const allTags = props.tagIds.map((tagId) => props.tagsById[tagId]).filter(Boolean);
      let toDisplay = props.limit ? allTags.slice(0, props.limit) : allTags;
      toDisplay = toDisplay.map((tag) => ({
        ...tag,
        hidden: props.responsive && !visibility.value[tag.id]
      }));
      let visibleCount = toDisplay.length;
      if (props.responsive) {
        visibleCount = Object.values(visibility.value).reduce(
          (accu, val) => val ? accu + 1 : accu,
          0
        );
      }
      if (visibleCount < allTags.length) {
        const hidden = allTags.slice(visibleCount);
        const hiddenTitle = hidden.reduce(
          (accu, tag) => accu ? `${accu}, ${tag.name}` : tag.name,
          ""
        );
        const countTag = {
          id: "count",
          name: `+${hidden.length}`,
          title: hiddenTitle,
          isCount: true
        };
        toDisplay.splice(visibleCount, 0, countTag);
      }
      return toDisplay;
    });
    const setMaxWidth = () => {
      const container2 = tagsContainer.value?.$el;
      const parent = container2?.parentNode;
      if (parent) {
        maxWidth.value = 0;
        void nextTick(() => {
          maxWidth.value = parent.clientWidth;
        });
      }
    };
    const debouncedSetMaxWidth = debounce(setMaxWidth, 100);
    const onObserved = ({ el, isIntersecting }) => {
      if (el.dataset.id) {
        visibility.value = { ...visibility.value, [el.dataset.id]: isIntersecting };
      }
    };
    const onClick = (e, tag) => {
      if (props.clickable) {
        e.stopPropagation();
      }
      if (!tag.hidden) {
        emit("click", tag.id);
      }
    };
    onMounted(() => {
      setMaxWidth();
      window.addEventListener("resize", debouncedSetMaxWidth);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", debouncedSetMaxWidth);
    });
    return (_ctx, _cache) => {
      const _component_el_tag = resolveComponent("el-tag");
      return openBlock(), createBlock(_sfc_main$c, {
        ref_key: "tagsContainer",
        ref: tagsContainer,
        threshold: 1,
        class: "tags-container",
        style: normalizeStyle(style.value),
        enabled: _ctx.responsive,
        "event-bus": unref(intersectionEventBus),
        onObserved
      }, {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_1$6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, (tag) => {
              return openBlock(), createElementBlock("span", {
                key: tag.id,
                class: normalizeClass({ clickable: !tag.hidden }),
                onClick: (e) => onClick(e, tag)
              }, [
                tag.isCount ? (openBlock(), createBlock(_component_el_tag, {
                  key: 0,
                  title: tag.title,
                  type: "info",
                  size: "small",
                  class: "count-container",
                  "disable-transitions": true
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(tag.name), 1)
                  ]),
                  _: 2
                }, 1032, ["title"])) : (openBlock(), createBlock(_sfc_main$b, {
                  key: 1,
                  class: normalizeClass({ hideTag: tag.hidden }),
                  "data-id": tag.id,
                  enabled: _ctx.responsive,
                  "event-bus": unref(intersectionEventBus)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_tag, {
                      title: tag.name,
                      type: "info",
                      size: "small",
                      class: normalizeClass({ hoverable: _ctx.hoverable }),
                      "disable-transitions": true
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tag.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["title", "class"])
                  ]),
                  _: 2
                }, 1032, ["class", "data-id", "enabled", "event-bus"]))
              ], 10, _hoisted_2$2);
            }), 128))
          ])
        ]),
        _: 1
      }, 8, ["style", "enabled", "event-bus"]);
    };
  }
});
const TagsContainer = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-9f29f608"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "WorkflowTagsContainer",
  props: {
    tagIds: {},
    limit: {},
    clickable: { type: Boolean },
    responsive: { type: Boolean },
    hoverable: { type: Boolean }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const annotationTagsStore = useTagsStore();
    const tagsById = computed(() => annotationTagsStore.tagsById);
    function onClick(tagId) {
      emit("click", tagId);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TagsContainer, {
        "tag-ids": _ctx.tagIds,
        "tags-by-id": tagsById.value,
        limit: _ctx.limit,
        clickable: _ctx.clickable,
        responsive: _ctx.responsive,
        hoverable: _ctx.hoverable,
        onClick
      }, null, 8, ["tag-ids", "tags-by-id", "limit", "clickable", "responsive", "hoverable"]);
    };
  }
});
const _hoisted_1$5 = ["data-value"];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ExpandableInputBase",
  props: {
    modelValue: {},
    placeholder: { default: "" },
    staticSize: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const hiddenValue = computed(() => {
      let value = props.modelValue.replace(/\s/g, ".");
      if (!value) {
        value = props.placeholder;
      }
      return `${value}`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({ "el-input": true, "static-size": _ctx.staticSize }),
        "data-value": hiddenValue.value
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 10, _hoisted_1$5);
    };
  }
});
const ExpandableInputBase = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-b6416d9d"]]);
const _hoisted_1$4 = ["value", "placeholder", "maxlength"];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ExpandableInputEdit",
  props: {
    modelValue: {},
    placeholder: {},
    maxlength: {},
    autofocus: { type: Boolean },
    eventBus: {}
  },
  emits: ["update:model-value", "enter", "blur", "esc"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const inputRef = ref();
    onMounted(() => {
      if (props.autofocus && inputRef.value) {
        focus();
      }
      props.eventBus?.on("focus", focus);
    });
    onBeforeUnmount(() => {
      props.eventBus?.off("focus", focus);
    });
    function focus() {
      if (inputRef.value) {
        inputRef.value.focus();
      }
    }
    function onInput() {
      if (inputRef.value) {
        emit("update:model-value", inputRef.value.value);
      }
    }
    function onEnter() {
      if (inputRef.value) {
        emit("enter", inputRef.value.value);
      }
    }
    onClickOutside(inputRef, () => {
      if (inputRef.value) {
        emit("blur", inputRef.value.value);
      }
    });
    function onEscape() {
      emit("esc");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ExpandableInputBase, {
        "model-value": _ctx.modelValue,
        placeholder: _ctx.placeholder
      }, {
        default: withCtx(() => [
          createBaseVNode("input", {
            ref_key: "inputRef",
            ref: inputRef,
            class: "el-input__inner",
            value: _ctx.modelValue,
            placeholder: _ctx.placeholder,
            maxlength: _ctx.maxlength,
            size: "4",
            onInput,
            onKeydown: [
              withKeys(onEnter, ["enter"]),
              withKeys(onEscape, ["esc"])
            ]
          }, null, 40, _hoisted_1$4)
        ]),
        _: 1
      }, 8, ["model-value", "placeholder"]);
    };
  }
});
const _hoisted_1$3 = ["value"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ExpandableInputPreview",
  props: {
    modelValue: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ExpandableInputBase, {
        "model-value": _ctx.modelValue,
        "static-size": true
      }, {
        default: withCtx(() => [
          createBaseVNode("input", {
            class: normalizeClass({ "el-input__inner": true, clickable: true }),
            value: _ctx.modelValue,
            disabled: true,
            size: "4"
          }, null, 8, _hoisted_1$3)
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
});
const ExpandableInputPreview = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-87c6f53b"]]);
const _hoisted_1$2 = { key: 0 };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "InlineTextEdit",
  props: {
    isEditEnabled: { type: Boolean, default: false },
    modelValue: { default: "" },
    placeholder: { default: "" },
    maxLength: { default: 0 },
    previewValue: { default: "" },
    disabled: { type: Boolean, default: false }
  },
  emits: ["toggle", "submit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isDisabled = ref(props.disabled);
    const newValue = ref("");
    const escPressed = ref(false);
    const inputBus = ref(createEventBus());
    watch(
      () => props.disabled,
      (value) => {
        isDisabled.value = value;
      }
    );
    function onInput(val) {
      if (isDisabled.value) return;
      newValue.value = val;
    }
    function onClick() {
      if (isDisabled.value) return;
      newValue.value = props.modelValue;
      emit("toggle");
    }
    function onBlur() {
      if (isDisabled.value) return;
      if (!escPressed.value) {
        submit();
      }
      escPressed.value = false;
    }
    function submit() {
      if (isDisabled.value) return;
      const onSubmit = (updated) => {
        isDisabled.value = false;
        if (!updated) {
          inputBus.value.emit("focus");
        }
      };
      isDisabled.value = true;
      emit("submit", { name: newValue.value, onSubmit });
    }
    function onEscape() {
      if (isDisabled.value) return;
      escPressed.value = true;
      emit("toggle");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: "inline-edit",
        onKeydown: _cache[1] || (_cache[1] = withModifiers(() => {
        }, ["stop"]))
      }, [
        _ctx.isEditEnabled && !isDisabled.value ? (openBlock(), createElementBlock("span", _hoisted_1$2, [
          createVNode(_sfc_main$7, {
            modelValue: newValue.value,
            "onUpdate:modelValue": [
              _cache[0] || (_cache[0] = ($event) => newValue.value = $event),
              onInput
            ],
            placeholder: _ctx.placeholder,
            maxlength: _ctx.maxLength,
            autofocus: true,
            "event-bus": inputBus.value,
            onEsc: onEscape,
            onBlur,
            onEnter: submit
          }, null, 8, ["modelValue", "placeholder", "maxlength", "event-bus"])
        ])) : (openBlock(), createElementBlock("span", {
          key: 1,
          class: "preview",
          onClick
        }, [
          createVNode(ExpandableInputPreview, {
            "model-value": _ctx.previewValue || _ctx.modelValue
          }, null, 8, ["model-value"])
        ]))
      ], 32);
    };
  }
});
const InlineTextEdit = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-746f09e1"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BreakpointsObserver",
  props: {
    valueXS: {},
    valueXL: {},
    valueLG: {},
    valueMD: {},
    valueSM: {},
    valueDefault: {}
  },
  setup(__props) {
    const props = __props;
    const { callDebounced } = useDebounce();
    const uiStore = useUIStore();
    const width = ref(window.innerWidth);
    const bp = computed(() => {
      if (width.value < BREAKPOINT_SM) {
        return "XS";
      }
      if (width.value >= BREAKPOINT_XL) {
        return "XL";
      }
      if (width.value >= BREAKPOINT_LG) {
        return "LG";
      }
      if (width.value >= BREAKPOINT_MD) {
        return "MD";
      }
      return "SM";
    });
    const value = computed(() => {
      if (props.valueXS && width.value < BREAKPOINT_SM) {
        return props.valueXS;
      }
      if (props.valueXL && width.value >= BREAKPOINT_XL) {
        return props.valueXL;
      }
      if (props.valueLG && width.value >= BREAKPOINT_LG) {
        return props.valueLG;
      }
      if (props.valueMD && width.value >= BREAKPOINT_MD) {
        return props.valueMD;
      }
      if (props.valueSM) {
        return props.valueSM;
      }
      return props.valueDefault;
    });
    const onResize = () => {
      void callDebounced(onResizeEnd, { debounceTime: 50 });
    };
    const onResizeEnd = async () => {
      width.value = window.innerWidth;
      await nextTick();
      const bannerHeight = await getBannerRowHeight();
      uiStore.updateBannersHeight(bannerHeight);
    };
    onMounted(() => {
      window.addEventListener("resize", onResize);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", onResize);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, [
        renderSlot(_ctx.$slots, "default", {
          bp: bp.value,
          value: value.value
        })
      ]);
    };
  }
});
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = { key: 1 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "WorkflowHistoryButton",
  props: {
    workflowId: {},
    isNewWorkflow: { type: Boolean },
    isFeatureEnabled: { type: Boolean }
  },
  emits: ["upgrade"],
  setup(__props, { emit: __emit }) {
    const locale = useI18n();
    const props = __props;
    const emit = __emit;
    const workflowHistoryRoute = computed(() => ({
      name: VIEWS.WORKFLOW_HISTORY,
      params: {
        workflowId: props.workflowId
      }
    }));
    return (_ctx, _cache) => {
      const _component_N8nIconButton = resolveComponent("N8nIconButton");
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_N8nLink = resolveComponent("N8nLink");
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_N8nTooltip = resolveComponent("N8nTooltip");
      return openBlock(), createBlock(_component_N8nTooltip, { placement: "bottom" }, {
        content: withCtx(() => [
          _ctx.isFeatureEnabled && _ctx.isNewWorkflow ? (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(unref(locale).baseText("workflowHistory.button.tooltip.empty")), 1)) : _ctx.isFeatureEnabled ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(unref(locale).baseText("workflowHistory.button.tooltip.enabled")), 1)) : (openBlock(), createBlock(_component_i18n_t, {
            key: 2,
            keypath: "workflowHistory.button.tooltip.disabled"
          }, {
            link: withCtx(() => [
              createVNode(_component_N8nLink, {
                size: "small",
                onClick: _cache[0] || (_cache[0] = ($event) => emit("upgrade"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("workflowHistory.button.tooltip.disabled.link")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }))
        ]),
        default: withCtx(() => [
          createVNode(_component_RouterLink, {
            to: workflowHistoryRoute.value,
            class: normalizeClass(_ctx.$style.workflowHistoryButton)
          }, {
            default: withCtx(() => [
              createVNode(_component_N8nIconButton, {
                disabled: _ctx.isNewWorkflow || !_ctx.isFeatureEnabled,
                "data-test-id": "workflow-history-button",
                type: "tertiary",
                icon: "history",
                size: "medium",
                text: ""
              }, null, 8, ["disabled"])
            ]),
            _: 1
          }, 8, ["to", "class"])
        ]),
        _: 1
      });
    };
  }
});
const workflowHistoryButton = "_workflowHistoryButton_1uro5_123";
const style0$2 = {
  workflowHistoryButton
};
const cssModules$3 = {
  "$style": style0$2
};
const WorkflowHistoryButton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$3]]);
const HEARTBEAT_INTERVAL = 5 * TIME.MINUTE;
const useCollaborationStore = defineStore(STORES.COLLABORATION, () => {
  const pushStore = usePushConnectionStore();
  const workflowsStore = useWorkflowsStore();
  const usersStore = useUsersStore();
  const uiStore = useUIStore();
  const route = useRoute();
  const { addBeforeUnloadEventBindings, removeBeforeUnloadEventBindings, addBeforeUnloadHandler } = useBeforeUnload({ route });
  const unloadTimeout = ref(null);
  addBeforeUnloadHandler(() => {
    notifyWorkflowClosed();
    if (uiStore.stateIsDirty) {
      unloadTimeout.value = setTimeout(() => notifyWorkflowOpened, 5 * TIME.SECOND);
    }
  });
  const collaborators = ref([]);
  const heartbeatTimer = ref(null);
  const startHeartbeat = () => {
    stopHeartbeat();
    heartbeatTimer.value = window.setInterval(notifyWorkflowOpened, HEARTBEAT_INTERVAL);
  };
  const stopHeartbeat = () => {
    if (heartbeatTimer.value !== null) {
      clearInterval(heartbeatTimer.value);
      heartbeatTimer.value = null;
    }
  };
  const pushStoreEventListenerRemovalFn = ref(null);
  function initialize() {
    if (pushStoreEventListenerRemovalFn.value) {
      return;
    }
    pushStoreEventListenerRemovalFn.value = pushStore.addEventListener((event) => {
      if (event.type === "collaboratorsChanged" && event.data.workflowId === workflowsStore.workflowId) {
        collaborators.value = event.data.collaborators;
      }
    });
    addBeforeUnloadEventBindings();
    notifyWorkflowOpened();
    startHeartbeat();
  }
  function terminate() {
    if (typeof pushStoreEventListenerRemovalFn.value === "function") {
      pushStoreEventListenerRemovalFn.value();
      pushStoreEventListenerRemovalFn.value = null;
    }
    notifyWorkflowClosed();
    stopHeartbeat();
    pushStore.clearQueue();
    removeBeforeUnloadEventBindings();
    if (unloadTimeout.value) {
      clearTimeout(unloadTimeout.value);
    }
  }
  function notifyWorkflowOpened() {
    const { workflowId } = workflowsStore;
    if (workflowId === PLACEHOLDER_EMPTY_WORKFLOW_ID) return;
    pushStore.send({ type: "workflowOpened", workflowId });
  }
  function notifyWorkflowClosed() {
    const { workflowId } = workflowsStore;
    if (workflowId === PLACEHOLDER_EMPTY_WORKFLOW_ID) return;
    pushStore.send({ type: "workflowClosed", workflowId });
    collaborators.value = collaborators.value.filter(
      ({ user }) => user.id !== usersStore.currentUserId
    );
  }
  return {
    collaborators,
    initialize,
    terminate,
    startHeartbeat,
    stopHeartbeat
  };
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CollaborationPane",
  setup(__props) {
    const collaborationStore = useCollaborationStore();
    const usersStore = useUsersStore();
    const visibility = useDocumentVisibility();
    watch(visibility, (visibilityState) => {
      if (visibilityState === "hidden") {
        collaborationStore.stopHeartbeat();
      } else {
        collaborationStore.startHeartbeat();
      }
    });
    const showUserStack = computed(() => collaborationStore.collaborators.length > 1);
    const collaboratorsSorted = computed(() => {
      const users = collaborationStore.collaborators.map(({ user }) => user);
      const index = users.findIndex((user) => user.id === usersStore.currentUser?.id);
      if (index < 1) return { defaultGroup: users };
      const [currentUser] = users.splice(index, 1);
      return { defaultGroup: [currentUser, ...users] };
    });
    const currentUserEmail = computed(() => usersStore.currentUser?.email);
    onMounted(() => {
      collaborationStore.initialize();
    });
    onBeforeUnmount(() => {
      collaborationStore.terminate();
    });
    return (_ctx, _cache) => {
      const _component_n8n_user_stack = resolveComponent("n8n-user-stack");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`collaboration-pane-container ${_ctx.$style.container}`),
        "data-test-id": "collaboration-pane"
      }, [
        showUserStack.value ? (openBlock(), createBlock(_component_n8n_user_stack, {
          key: 0,
          users: collaboratorsSorted.value,
          "current-user-email": currentUserEmail.value
        }, null, 8, ["users", "current-user-email"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container$2 = "_container_ame1i_123";
const style0$1 = {
  container: container$2
};
const cssModules$2 = {
  "$style": style0$1
};
const CollaborationPane = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1 = {
  key: 0,
  class: "tags",
  "data-test-id": "workflow-tags-container"
};
const _hoisted_2 = { key: 1 };
const _hoisted_3 = {
  key: 1,
  class: "tags"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WorkflowDetails",
  props: {
    readOnly: { type: Boolean },
    id: {},
    tags: {},
    name: {},
    meta: {},
    scopes: {},
    active: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const $style = useCssModule();
    const rootStore = useRootStore();
    const canvasStore = useCanvasStore();
    const settingsStore = useSettingsStore();
    const sourceControlStore = useSourceControlStore();
    const tagsStore = useTagsStore();
    const uiStore = useUIStore();
    const usersStore = useUsersStore();
    const workflowsStore = useWorkflowsStore();
    const projectsStore = useProjectsStore();
    const npsSurveyStore = useNpsSurveyStore();
    const i18n = useI18n();
    const router = useRouter();
    const route = useRoute();
    const locale = useI18n();
    const telemetry = useTelemetry();
    const message = useMessage();
    const toast = useToast();
    const documentTitle = useDocumentTitle();
    const workflowHelpers = useWorkflowHelpers({ router });
    const pageRedirectionHelper = usePageRedirectionHelper();
    const isTagsEditEnabled = ref(false);
    const isNameEditEnabled = ref(false);
    const appliedTagIds = ref([]);
    const tagsSaving = ref(false);
    const importFileRef = ref();
    const tagsEventBus = createEventBus();
    const sourceControlModalEventBus = createEventBus();
    const hasChanged = (prev, curr) => {
      if (prev.length !== curr.length) {
        return true;
      }
      const set = new Set(prev);
      return curr.reduce((acc, val) => acc || !set.has(val), false);
    };
    const isNewWorkflow = computed(() => {
      return !props.id || props.id === PLACEHOLDER_EMPTY_WORKFLOW_ID || props.id === "new";
    });
    const isWorkflowSaving = computed(() => {
      return uiStore.isActionActive.workflowSaving;
    });
    const onWorkflowPage = computed(() => {
      return route.meta && (route.meta.nodeView || route.meta.keepWorkflowAlive === true);
    });
    const onExecutionsTab = computed(() => {
      return [
        VIEWS.EXECUTION_HOME.toString(),
        VIEWS.WORKFLOW_EXECUTIONS.toString(),
        VIEWS.EXECUTION_PREVIEW
      ].includes(route.name || "");
    });
    const workflowPermissions = computed(() => getResourcePermissions(props.scopes).workflow);
    const workflowMenuItems = computed(() => {
      const actions = [
        {
          id: WORKFLOW_MENU_ACTIONS.DOWNLOAD,
          label: locale.baseText("menuActions.download"),
          disabled: !onWorkflowPage.value
        }
      ];
      if (workflowPermissions.value.delete && !props.readOnly || isNewWorkflow.value) {
        actions.unshift({
          id: WORKFLOW_MENU_ACTIONS.DUPLICATE,
          label: locale.baseText("menuActions.duplicate"),
          disabled: !onWorkflowPage.value || !props.id
        });
        actions.push(
          {
            id: WORKFLOW_MENU_ACTIONS.IMPORT_FROM_URL,
            label: locale.baseText("menuActions.importFromUrl"),
            disabled: !onWorkflowPage.value || onExecutionsTab.value
          },
          {
            id: WORKFLOW_MENU_ACTIONS.IMPORT_FROM_FILE,
            label: locale.baseText("menuActions.importFromFile"),
            disabled: !onWorkflowPage.value || onExecutionsTab.value
          }
        );
      }
      if (hasPermission(["rbac"], { rbac: { scope: "sourceControl:push" } })) {
        actions.push({
          id: WORKFLOW_MENU_ACTIONS.PUSH,
          label: locale.baseText("menuActions.push"),
          disabled: !sourceControlStore.isEnterpriseSourceControlEnabled || !onWorkflowPage.value || onExecutionsTab.value || sourceControlStore.preferences.branchReadOnly
        });
      }
      actions.push({
        id: WORKFLOW_MENU_ACTIONS.SETTINGS,
        label: locale.baseText("generic.settings"),
        disabled: !onWorkflowPage.value || isNewWorkflow.value
      });
      if (workflowPermissions.value.delete && !props.readOnly || isNewWorkflow.value) {
        actions.push({
          id: WORKFLOW_MENU_ACTIONS.DELETE,
          label: locale.baseText("menuActions.delete"),
          disabled: !onWorkflowPage.value || isNewWorkflow.value,
          customClass: $style.deleteItem,
          divided: true
        });
      }
      return actions;
    });
    const isWorkflowHistoryFeatureEnabled = computed(() => {
      return settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.WorkflowHistory];
    });
    const workflowTagIds = computed(() => {
      return (props.tags ?? []).map((tag) => typeof tag === "string" ? tag : tag.id);
    });
    const currentFolder = computed(() => {
      if (props.id === PLACEHOLDER_EMPTY_WORKFLOW_ID) {
        return void 0;
      }
      const workflow = workflowsStore.getWorkflowById(props.id);
      if (!workflow) {
        return void 0;
      }
      return workflow.parentFolder;
    });
    const currentProjectName = computed(() => {
      if (projectsStore.currentProject?.type === ProjectTypes.Personal) {
        return locale.baseText("projects.menu.personal");
      }
      return projectsStore.currentProject?.name;
    });
    watch(
      () => props.id,
      () => {
        isTagsEditEnabled.value = false;
        isNameEditEnabled.value = false;
      }
    );
    function getWorkflowId() {
      let id = void 0;
      if (props.id !== PLACEHOLDER_EMPTY_WORKFLOW_ID) {
        id = props.id;
      } else if (route.params.name && route.params.name !== "new") {
        id = route.params.name;
      }
      return id;
    }
    async function onSaveButtonClick() {
      if (isWorkflowSaving.value) {
        return;
      }
      const id = getWorkflowId();
      const name = props.name;
      const tags = props.tags;
      const saved = await workflowHelpers.saveCurrentWorkflow({
        id,
        name,
        tags
      });
      if (saved) {
        showCreateWorkflowSuccessToast(id);
        await npsSurveyStore.fetchPromptsData();
        if (route.name === VIEWS.EXECUTION_DEBUG) {
          await router.replace({
            name: VIEWS.WORKFLOW,
            params: { name: props.id }
          });
        }
      }
    }
    function onShareButtonClick() {
      uiStore.openModalWithData({
        name: WORKFLOW_SHARE_MODAL_KEY,
        data: { id: props.id }
      });
      telemetry.track("User opened sharing modal", {
        workflow_id: props.id,
        user_id_sharer: usersStore.currentUser?.id,
        sub_view: route.name === VIEWS.WORKFLOWS ? "Workflows listing" : "Workflow editor"
      });
    }
    function onTagsEditEnable() {
      appliedTagIds.value = props.tags ?? [];
      isTagsEditEnabled.value = true;
      setTimeout(() => {
        isNameEditEnabled.value = false;
        tagsEventBus.emit("focus");
      }, 0);
    }
    async function onTagsBlur() {
      const current = props.tags ?? [];
      const tags = appliedTagIds.value;
      if (!hasChanged(current, tags)) {
        isTagsEditEnabled.value = false;
        return;
      }
      if (tagsSaving.value) {
        return;
      }
      tagsSaving.value = true;
      const saved = await workflowHelpers.saveCurrentWorkflow({ tags });
      telemetry.track("User edited workflow tags", {
        workflow_id: props.id,
        new_tag_count: tags.length
      });
      tagsSaving.value = false;
      if (saved) {
        isTagsEditEnabled.value = false;
      }
    }
    function onTagsEditEsc() {
      isTagsEditEnabled.value = false;
    }
    function onNameToggle() {
      isNameEditEnabled.value = !isNameEditEnabled.value;
      if (isNameEditEnabled.value) {
        if (isTagsEditEnabled.value) {
          void onTagsBlur();
        }
        isTagsEditEnabled.value = false;
      }
    }
    async function onNameSubmit({
      name,
      onSubmit
    }) {
      const newName = name.trim();
      if (!newName) {
        toast.showMessage({
          title: locale.baseText("workflowDetails.showMessage.title"),
          message: locale.baseText("workflowDetails.showMessage.message"),
          type: "error"
        });
        onSubmit(false);
        return;
      }
      if (newName === props.name) {
        isNameEditEnabled.value = false;
        onSubmit(true);
        return;
      }
      uiStore.addActiveAction("workflowSaving");
      const id = getWorkflowId();
      const saved = await workflowHelpers.saveCurrentWorkflow({ name });
      if (saved) {
        isNameEditEnabled.value = false;
        showCreateWorkflowSuccessToast(id);
        workflowHelpers.setDocumentTitle(newName, "IDLE");
      }
      uiStore.removeActiveAction("workflowSaving");
      onSubmit(saved);
    }
    async function handleFileImport() {
      const inputRef = importFileRef.value;
      if (inputRef?.files && inputRef.files.length !== 0) {
        const reader = new FileReader();
        reader.onload = () => {
          let workflowData;
          try {
            workflowData = JSON.parse(reader.result);
          } catch (error) {
            toast.showMessage({
              title: locale.baseText("mainSidebar.showMessage.handleFileImport.title"),
              message: locale.baseText("mainSidebar.showMessage.handleFileImport.message"),
              type: "error"
            });
            return;
          } finally {
            reader.onload = null;
            inputRef.value = "";
          }
          nodeViewEventBus.emit("importWorkflowData", { data: workflowData });
        };
        reader.readAsText(inputRef.files[0]);
      }
    }
    async function onWorkflowMenuSelect(action) {
      switch (action) {
        case WORKFLOW_MENU_ACTIONS.DUPLICATE: {
          uiStore.openModalWithData({
            name: DUPLICATE_MODAL_KEY,
            data: {
              id: props.id,
              name: props.name,
              tags: props.tags
            }
          });
          break;
        }
        case WORKFLOW_MENU_ACTIONS.DOWNLOAD: {
          const workflowData = await workflowHelpers.getWorkflowDataToSave();
          const { tags, ...data } = workflowData;
          const exportData = {
            ...data,
            meta: {
              ...props.meta,
              instanceId: rootStore.instanceId
            },
            tags: (tags ?? []).map((tagId) => {
              const { usageCount, ...tag } = tagsStore.tagsById[tagId];
              return tag;
            })
          };
          const blob = new Blob([JSON.stringify(exportData, null, 2)], {
            type: "application/json;charset=utf-8"
          });
          let name = props.name || "unsaved_workflow";
          name = name.replace(/[^a-z0-9]/gi, "_");
          telemetry.track("User exported workflow", { workflow_id: workflowData.id });
          FileSaver_minExports.saveAs(blob, name + ".json");
          break;
        }
        case WORKFLOW_MENU_ACTIONS.IMPORT_FROM_URL: {
          try {
            const promptResponse = await message.prompt(
              locale.baseText("mainSidebar.prompt.workflowUrl") + ":",
              locale.baseText("mainSidebar.prompt.importWorkflowFromUrl") + ":",
              {
                confirmButtonText: locale.baseText("mainSidebar.prompt.import"),
                cancelButtonText: locale.baseText("mainSidebar.prompt.cancel"),
                inputErrorMessage: locale.baseText("mainSidebar.prompt.invalidUrl"),
                inputPattern: VALID_WORKFLOW_IMPORT_URL_REGEX
              }
            );
            if (promptResponse.action === "cancel") {
              return;
            }
            nodeViewEventBus.emit("importWorkflowUrl", { url: promptResponse.value });
          } catch (e) {
          }
          break;
        }
        case WORKFLOW_MENU_ACTIONS.IMPORT_FROM_FILE: {
          importFileRef.value?.click();
          break;
        }
        case WORKFLOW_MENU_ACTIONS.PUSH: {
          canvasStore.startLoading();
          try {
            await onSaveButtonClick();
            const status = await sourceControlStore.getAggregatedStatus();
            uiStore.openModalWithData({
              name: SOURCE_CONTROL_PUSH_MODAL_KEY,
              data: { eventBus: sourceControlModalEventBus, status }
            });
          } catch (error) {
            switch (error.message) {
              case "source_control_not_connected":
                toast.showError(
                  { ...error, message: "" },
                  locale.baseText("settings.sourceControl.error.not.connected.title"),
                  locale.baseText("settings.sourceControl.error.not.connected.message")
                );
                break;
              default:
                toast.showError(error, locale.baseText("error"));
            }
          } finally {
            canvasStore.stopLoading();
          }
          break;
        }
        case WORKFLOW_MENU_ACTIONS.SETTINGS: {
          uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
          break;
        }
        case WORKFLOW_MENU_ACTIONS.DELETE: {
          const deleteConfirmed = await message.confirm(
            locale.baseText("mainSidebar.confirmMessage.workflowDelete.message", {
              interpolate: { workflowName: props.name }
            }),
            locale.baseText("mainSidebar.confirmMessage.workflowDelete.headline"),
            {
              type: "warning",
              confirmButtonText: locale.baseText(
                "mainSidebar.confirmMessage.workflowDelete.confirmButtonText"
              ),
              cancelButtonText: locale.baseText(
                "mainSidebar.confirmMessage.workflowDelete.cancelButtonText"
              )
            }
          );
          if (deleteConfirmed !== MODAL_CONFIRM) {
            return;
          }
          try {
            await workflowsStore.deleteWorkflow(props.id);
          } catch (error) {
            toast.showError(error, locale.baseText("generic.deleteWorkflowError"));
            return;
          }
          uiStore.stateIsDirty = false;
          documentTitle.reset();
          toast.showMessage({
            title: locale.baseText("mainSidebar.showMessage.handleSelect1.title"),
            type: "success"
          });
          await router.push({ name: VIEWS.WORKFLOWS });
          break;
        }
      }
    }
    function goToUpgrade() {
      void pageRedirectionHelper.goToUpgrade("workflow_sharing", "upgrade-workflow-sharing");
    }
    function goToWorkflowHistoryUpgrade() {
      void pageRedirectionHelper.goToUpgrade("workflow-history", "upgrade-workflow-history");
    }
    function showCreateWorkflowSuccessToast(id) {
      if (!id || ["new", PLACEHOLDER_EMPTY_WORKFLOW_ID].includes(id)) {
        let toastTitle = locale.baseText("workflows.create.personal.toast.title");
        let toastText = locale.baseText("workflows.create.personal.toast.text");
        if (projectsStore.currentProject) {
          if (currentFolder.value) {
            toastTitle = locale.baseText("workflows.create.folder.toast.title", {
              interpolate: {
                projectName: currentProjectName.value ?? "",
                folderName: currentFolder.value.name ?? ""
              }
            });
          } else if (projectsStore.currentProject.id !== projectsStore.personalProject?.id) {
            toastTitle = locale.baseText("workflows.create.project.toast.title", {
              interpolate: { projectName: currentProjectName.value ?? "" }
            });
          }
          toastText = locale.baseText("workflows.create.project.toast.text", {
            interpolate: { projectName: currentProjectName.value ?? "" }
          });
        }
        toast.showMessage({
          title: toastTitle,
          message: toastText,
          type: "success"
        });
      }
    }
    return (_ctx, _cache) => {
      const _component_N8nButton = resolveComponent("N8nButton");
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_N8nTooltip = resolveComponent("N8nTooltip");
      const _component_EnterpriseEdition = resolveComponent("EnterpriseEdition");
      const _component_N8nActionDropdown = resolveComponent("N8nActionDropdown");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref($style).container)
      }, [
        createVNode(_sfc_main$4, {
          "value-x-s": 15,
          "value-s-m": 25,
          "value-m-d": 50,
          class: "name-container"
        }, {
          default: withCtx(({ value }) => [
            createVNode(_sfc_main$d, {
              name: _ctx.name,
              limit: value,
              custom: true,
              "test-id": "workflow-name-input"
            }, {
              default: withCtx(({ shortenedName }) => [
                createVNode(InlineTextEdit, {
                  "model-value": _ctx.name,
                  "preview-value": shortenedName,
                  "is-edit-enabled": isNameEditEnabled.value,
                  "max-length": unref(MAX_WORKFLOW_NAME_LENGTH),
                  disabled: _ctx.readOnly || !isNewWorkflow.value && !workflowPermissions.value.update,
                  placeholder: "Enter workflow name",
                  class: "name",
                  onToggle: onNameToggle,
                  onSubmit: onNameSubmit
                }, null, 8, ["model-value", "preview-value", "is-edit-enabled", "max-length", "disabled"])
              ]),
              _: 2
            }, 1032, ["name", "limit"])
          ]),
          _: 1
        }),
        unref(settingsStore).areTagsEnabled ? (openBlock(), createElementBlock("span", _hoisted_1, [
          isTagsEditEnabled.value && !_ctx.readOnly && (isNewWorkflow.value || workflowPermissions.value.update) ? (openBlock(), createBlock(_sfc_main$f, {
            key: 0,
            ref: "dropdown",
            modelValue: appliedTagIds.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => appliedTagIds.value = $event),
            "event-bus": unref(tagsEventBus),
            placeholder: unref(i18n).baseText("workflowDetails.chooseOrCreateATag"),
            class: "tags-edit",
            "data-test-id": "workflow-tags-dropdown",
            onBlur: onTagsBlur,
            onEsc: onTagsEditEsc
          }, null, 8, ["modelValue", "event-bus", "placeholder"])) : (_ctx.tags ?? []).length === 0 && !_ctx.readOnly && (isNewWorkflow.value || workflowPermissions.value.update) ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createBaseVNode("span", {
              class: "add-tag clickable",
              "data-test-id": "new-tag-link",
              onClick: onTagsEditEnable
            }, " + " + toDisplayString(unref(i18n).baseText("workflowDetails.addTag")), 1)
          ])) : (openBlock(), createBlock(_sfc_main$9, {
            key: _ctx.id,
            "tag-ids": workflowTagIds.value,
            clickable: true,
            responsive: true,
            "data-test-id": "workflow-tags",
            onClick: onTagsEditEnable
          }, null, 8, ["tag-ids"]))
        ])) : (openBlock(), createElementBlock("span", _hoisted_3)),
        createVNode(_sfc_main$g, { class: "actions" }, {
          default: withCtx(() => [
            createBaseVNode("span", {
              class: normalizeClass(`activator ${unref($style).group}`)
            }, [
              createVNode(WorkflowActivator, {
                "workflow-active": _ctx.active,
                "workflow-id": _ctx.id,
                "workflow-permissions": workflowPermissions.value
              }, null, 8, ["workflow-active", "workflow-id", "workflow-permissions"])
            ], 2),
            createVNode(_component_EnterpriseEdition, {
              features: [unref(EnterpriseEditionFeature).Sharing]
            }, {
              fallback: withCtx(() => [
                createVNode(_component_N8nTooltip, null, {
                  content: withCtx(() => [
                    createVNode(_component_i18n_t, {
                      keypath: unref(uiStore).contextBasedTranslationKeys.workflows.sharing.unavailable.description.tooltip,
                      tag: "span"
                    }, {
                      action: withCtx(() => [
                        createBaseVNode("a", { onClick: goToUpgrade }, toDisplayString(unref(i18n).baseText(
                          unref(uiStore).contextBasedTranslationKeys.workflows.sharing.unavailable.button
                        )), 1)
                      ]),
                      _: 1
                    }, 8, ["keypath"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_N8nButton, {
                      type: "secondary",
                      class: normalizeClass(["mr-2xs", unref($style).disabledShareButton])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(i18n).baseText("workflowDetails.share")), 1)
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(unref($style).group)
                }, [
                  !isNewWorkflow.value ? (openBlock(), createBlock(CollaborationPane, { key: 0 })) : createCommentVNode("", true),
                  createVNode(_component_N8nButton, {
                    type: "secondary",
                    "data-test-id": "workflow-share-button",
                    onClick: onShareButtonClick
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("workflowDetails.share")), 1)
                    ]),
                    _: 1
                  })
                ], 2)
              ]),
              _: 1
            }, 8, ["features"]),
            createBaseVNode("div", {
              class: normalizeClass(unref($style).group)
            }, [
              createVNode(SaveButton, {
                type: "primary",
                saved: !unref(uiStore).stateIsDirty && !isNewWorkflow.value,
                disabled: isWorkflowSaving.value || _ctx.readOnly || !isNewWorkflow.value && !workflowPermissions.value.update,
                "is-saving": isWorkflowSaving.value,
                "with-shortcut": !_ctx.readOnly && workflowPermissions.value.update,
                "shortcut-tooltip": unref(i18n).baseText("saveWorkflowButton.hint"),
                "data-test-id": "workflow-save-button",
                onClick: onSaveButtonClick
              }, null, 8, ["saved", "disabled", "is-saving", "with-shortcut", "shortcut-tooltip"]),
              createVNode(WorkflowHistoryButton, {
                "workflow-id": props.id,
                "is-feature-enabled": isWorkflowHistoryFeatureEnabled.value,
                "is-new-workflow": isNewWorkflow.value,
                onUpgrade: goToWorkflowHistoryUpgrade
              }, null, 8, ["workflow-id", "is-feature-enabled", "is-new-workflow"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass([unref($style).workflowMenuContainer, unref($style).group])
            }, [
              createBaseVNode("input", {
                ref_key: "importFileRef",
                ref: importFileRef,
                class: normalizeClass(unref($style).hiddenInput),
                type: "file",
                "data-test-id": "workflow-import-input",
                onChange: _cache[1] || (_cache[1] = ($event) => handleFileImport())
              }, null, 34),
              createVNode(_component_N8nActionDropdown, {
                items: workflowMenuItems.value,
                "data-test-id": "workflow-menu",
                onSelect: onWorkflowMenuSelect
              }, null, 8, ["items"])
            ], 2)
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const container$1 = "_container_d7ycs_123";
const group = "_group_d7ycs_132";
const hiddenInput = "_hiddenInput_d7ycs_137";
const deleteItem = "_deleteItem_d7ycs_141";
const disabledShareButton = "_disabledShareButton_d7ycs_145";
const closeNodeViewDiscovery = "_closeNodeViewDiscovery_d7ycs_149";
const style1 = {
  container: container$1,
  group,
  hiddenInput,
  deleteItem,
  disabledShareButton,
  closeNodeViewDiscovery
};
const cssModules$1 = {
  "$style": style1
};
const WorkflowDetails = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1], ["__scopeId", "data-v-f531056b"]]);
const GithubButton = defineComponent({
  name: "github-button",
  props: {
    href: String,
    ariaLabel: String,
    title: String,
    dataIcon: String,
    dataColorScheme: String,
    dataSize: String,
    dataShowCount: String,
    dataText: String
  },
  render: function() {
    const props = { ref: "_" };
    for (const key in this.$props) {
      props[hyphenate(key)] = this.$props[key];
    }
    return h("span", [
      hasOwn(this.$slots, "default") ? h("a", props, this.$slots.default()) : h("a", props)
    ]);
  },
  mounted: function() {
    this.paint();
  },
  beforeUpdate: function() {
    this.reset();
  },
  updated: function() {
    this.paint();
  },
  beforeUnmount: function() {
    this.reset();
  },
  methods: {
    paint: function() {
      if (this.$el.lastChild !== this.$refs._) {
        return;
      }
      const _ = this.$el.appendChild(document.createElement("span"));
      const _this = this;
      __vitePreload(() => import(
        /* webpackMode: "eager" */
        "./buttons.esm-BOkmSohe.js"
      ), true ? [] : void 0).then(function(module) {
        if (_this.$el.lastChild !== _) {
          return;
        }
        module.render(_.appendChild(_this.$refs._), function(el) {
          if (_this.$el.lastChild !== _) {
            return;
          }
          _.parentNode.replaceChild(el, _);
        });
      });
    },
    reset: function() {
      if (this.$refs._ == null) {
        return;
      }
      this.$el.replaceChild(
        /** @type {HTMLAnchorElement} */
        this.$refs._,
        this.$el.lastChild
      );
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MainHeader",
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const locale = useI18n();
    const pushConnection = usePushConnection({ router });
    const ndvStore = useNDVStore();
    const uiStore = useUIStore();
    const sourceControlStore = useSourceControlStore();
    const workflowsStore = useWorkflowsStore();
    const executionsStore = useExecutionsStore();
    const settingsStore = useSettingsStore();
    const posthogStore = usePostHog();
    const activeHeaderTab = ref(MAIN_HEADER_TABS.WORKFLOW);
    const workflowToReturnTo = ref("");
    const executionToReturnTo = ref("");
    const dirtyState = ref(false);
    const githubButtonHidden = useLocalStorage(LOCAL_STORAGE_HIDE_GITHUB_STAR_BUTTON, false);
    const testDefinitionRoutes = [
      VIEWS.TEST_DEFINITION,
      VIEWS.TEST_DEFINITION_EDIT,
      VIEWS.TEST_DEFINITION_RUNS_DETAIL,
      VIEWS.TEST_DEFINITION_RUNS_COMPARE
    ];
    const workflowRoutes = [VIEWS.WORKFLOW, VIEWS.NEW_WORKFLOW, VIEWS.EXECUTION_DEBUG];
    const executionRoutes = [
      VIEWS.EXECUTION_HOME,
      VIEWS.WORKFLOW_EXECUTIONS,
      VIEWS.EXECUTION_PREVIEW
    ];
    const tabBarItems = computed(() => {
      const items = [
        { value: MAIN_HEADER_TABS.WORKFLOW, label: locale.baseText("generic.editor") },
        { value: MAIN_HEADER_TABS.EXECUTIONS, label: locale.baseText("generic.executions") }
      ];
      if (posthogStore.isFeatureEnabled(WORKFLOW_EVALUATION_EXPERIMENT)) {
        items.push({
          value: MAIN_HEADER_TABS.TEST_DEFINITION,
          label: locale.baseText("generic.tests")
        });
      }
      return items;
    });
    const activeNode = computed(() => ndvStore.activeNode);
    const hideMenuBar = computed(
      () => Boolean(activeNode.value && activeNode.value.type !== STICKY_NODE_TYPE)
    );
    const workflow = computed(() => workflowsStore.workflow);
    const workflowId = computed(
      () => String(router.currentRoute.value.params.name || workflowsStore.workflowId)
    );
    const onWorkflowPage = computed(() => !!(route.meta.nodeView || route.meta.keepWorkflowAlive));
    const readOnly = computed(() => sourceControlStore.preferences.branchReadOnly);
    const isEnterprise = computed(
      () => settingsStore.isQueueModeEnabled && settingsStore.isWorkerViewAvailable
    );
    const showGitHubButton = computed(
      () => !isEnterprise.value && !settingsStore.settings.inE2ETests && !githubButtonHidden.value
    );
    watch(route, (to, from) => {
      syncTabsWithRoute(to, from);
    });
    onBeforeMount(() => {
      pushConnection.initialize();
    });
    onBeforeUnmount(() => {
      pushConnection.terminate();
    });
    onMounted(async () => {
      dirtyState.value = uiStore.stateIsDirty;
      syncTabsWithRoute(route);
    });
    function isViewRoute(name) {
      return typeof name === "string" && [testDefinitionRoutes, workflowRoutes, executionRoutes].flat().includes(name);
    }
    function syncTabsWithRoute(to, from) {
      const routeTabMapping = [
        { routes: testDefinitionRoutes, tab: MAIN_HEADER_TABS.TEST_DEFINITION },
        { routes: executionRoutes, tab: MAIN_HEADER_TABS.EXECUTIONS },
        { routes: workflowRoutes, tab: MAIN_HEADER_TABS.WORKFLOW }
      ];
      if (to.name && isViewRoute(to.name)) {
        const matchingTab = routeTabMapping.find(({ routes }) => routes.includes(to.name));
        if (matchingTab) {
          activeHeaderTab.value = matchingTab.tab;
        }
      }
      if (to.params.name !== "new" && typeof to.params.name === "string") {
        workflowToReturnTo.value = to.params.name;
      }
      if (from?.name === VIEWS.EXECUTION_PREVIEW && to.params.name === from.params.name && typeof from.params.executionId === "string") {
        executionToReturnTo.value = from.params.executionId;
      }
    }
    function onTabSelected(tab, event) {
      const openInNewTab = event.ctrlKey || event.metaKey;
      switch (tab) {
        case MAIN_HEADER_TABS.WORKFLOW:
          void navigateToWorkflowView(openInNewTab);
          break;
        case MAIN_HEADER_TABS.EXECUTIONS:
          void navigateToExecutionsView(openInNewTab);
          break;
        case MAIN_HEADER_TABS.TEST_DEFINITION:
          activeHeaderTab.value = MAIN_HEADER_TABS.TEST_DEFINITION;
          void router.push({ name: VIEWS.TEST_DEFINITION });
          break;
      }
    }
    async function navigateToWorkflowView(openInNewTab) {
      let routeToNavigateTo;
      if (!["", "new", PLACEHOLDER_EMPTY_WORKFLOW_ID].includes(workflowToReturnTo.value)) {
        routeToNavigateTo = {
          name: VIEWS.WORKFLOW,
          params: { name: workflowToReturnTo.value }
        };
      } else {
        routeToNavigateTo = { name: VIEWS.NEW_WORKFLOW };
      }
      if (openInNewTab) {
        const { href } = router.resolve(routeToNavigateTo);
        window.open(href, "_blank");
      } else if (route.name !== routeToNavigateTo.name) {
        if (route.name === VIEWS.NEW_WORKFLOW) {
          uiStore.stateIsDirty = dirtyState.value;
        }
        activeHeaderTab.value = MAIN_HEADER_TABS.WORKFLOW;
        await router.push(routeToNavigateTo);
      }
    }
    async function navigateToExecutionsView(openInNewTab) {
      const routeWorkflowId = workflowId.value === PLACEHOLDER_EMPTY_WORKFLOW_ID ? "new" : workflowId.value;
      const executionToReturnToValue = executionsStore.activeExecution?.id || executionToReturnTo.value;
      const routeToNavigateTo = executionToReturnToValue ? {
        name: VIEWS.EXECUTION_PREVIEW,
        params: { name: routeWorkflowId, executionId: executionToReturnToValue }
      } : {
        name: VIEWS.EXECUTION_HOME,
        params: { name: routeWorkflowId }
      };
      if (openInNewTab) {
        const { href } = router.resolve(routeToNavigateTo);
        window.open(href, "_blank");
      } else if (route.name !== routeToNavigateTo.name) {
        dirtyState.value = uiStore.stateIsDirty;
        workflowToReturnTo.value = workflowId.value;
        activeHeaderTab.value = MAIN_HEADER_TABS.EXECUTIONS;
        await router.push(routeToNavigateTo);
      }
    }
    function hideGithubButton() {
      githubButtonHidden.value = true;
    }
    return (_ctx, _cache) => {
      const _component_N8nIcon = resolveComponent("N8nIcon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createBaseVNode("div", {
          class: normalizeClass({ [_ctx.$style["main-header"]]: true, [_ctx.$style.expanded]: !unref(uiStore).sidebarMenuCollapsed })
        }, [
          withDirectives(createBaseVNode("div", {
            class: normalizeClass(_ctx.$style["top-menu"])
          }, [
            workflow.value?.name ? (openBlock(), createBlock(WorkflowDetails, {
              key: 0,
              id: workflow.value.id,
              tags: workflow.value.tags,
              name: workflow.value.name,
              meta: workflow.value.meta,
              scopes: workflow.value.scopes,
              active: workflow.value.active,
              "read-only": readOnly.value
            }, null, 8, ["id", "tags", "name", "meta", "scopes", "active", "read-only"])) : createCommentVNode("", true),
            showGitHubButton.value ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass([_ctx.$style["github-button"], "hidden-sm-and-down"])
            }, [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style["github-button-container"])
              }, [
                createVNode(unref(GithubButton), {
                  href: unref(N8N_MAIN_GITHUB_REPO_URL),
                  "data-color-scheme": unref(uiStore).appliedTheme,
                  "data-size": "large",
                  "data-show-count": "true",
                  "aria-label": unref(locale).baseText("editor.mainHeader.githubButton.label")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("generic.star")), 1)
                  ]),
                  _: 1
                }, 8, ["href", "data-color-scheme", "aria-label"]),
                createVNode(_component_N8nIcon, {
                  class: normalizeClass(_ctx.$style["close-github-button"]),
                  icon: "times-circle",
                  size: "medium",
                  onClick: hideGithubButton
                }, null, 8, ["class"])
              ], 2)
            ], 2)) : createCommentVNode("", true)
          ], 2), [
            [vShow, !hideMenuBar.value]
          ]),
          onWorkflowPage.value ? (openBlock(), createBlock(TabBar, {
            key: 0,
            items: tabBarItems.value,
            "model-value": activeHeaderTab.value,
            "onUpdate:modelValue": onTabSelected
          }, null, 8, ["items", "model-value"])) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
});
const container = "_container_1vvf3_123";
const style0 = {
  container,
  "main-header": "_main-header_1vvf3_130",
  "top-menu": "_top-menu_1vvf3_138",
  "github-button": "_github-button_1vvf3_147",
  "close-github-button": "_close-github-button_1vvf3_156",
  "github-button-container": "_github-button-container_1vvf3_171"
};
const cssModules = {
  "$style": style0
};
const MainHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  MainHeader as default
};

import { d as defineComponent, K as useDebounce, r as ref, q as computed, c as useI18n, o as onMounted, b7 as onUnmounted, I as watch, h as resolveComponent, e as createBlock, g as openBlock, w as withCtx, j as createVNode, n as normalizeClass, B as normalizeStyle, _ as _export_sfc } from "./index-Dz5zUm_l.js";
const COLLAPSED_WIDTH = "30px";
const OPEN_WIDTH = "204px";
const OPEN_MIN_WIDTH = "120px";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RunDataSearch",
  props: {
    modelValue: {},
    paneType: { default: "output" },
    displayMode: { default: "schema" },
    isAreaActive: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "focus"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const locale = useI18n();
    const { debounce } = useDebounce();
    const inputRef = ref(null);
    const search = ref(props.modelValue ?? "");
    const opened = ref(!!search.value);
    const placeholder = computed(() => {
      if (props.paneType === "output") {
        return locale.baseText("ndv.search.placeholder.output");
      }
      if (props.displayMode === "schema") {
        return locale.baseText("ndv.search.placeholder.input.schema");
      }
      return locale.baseText("ndv.search.placeholder.input");
    });
    const style = computed(
      () => opened.value ? { maxWidth: OPEN_WIDTH, minWidth: OPEN_MIN_WIDTH } : { maxWidth: COLLAPSED_WIDTH }
    );
    const documentKeyHandler = (event) => {
      const isTargetFormElementOrEditable = event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement || event.target instanceof HTMLSelectElement || event.target?.getAttribute?.("contentEditable") === "true";
      if (event.key === "/" && props.isAreaActive && !isTargetFormElementOrEditable) {
        inputRef.value?.focus();
        inputRef.value?.select();
      }
    };
    const debouncedEmitUpdate = debounce(async (value) => emit("update:modelValue", value), {
      debounceTime: 300,
      trailing: true
    });
    const onSearchUpdate = (value) => {
      search.value = value;
      void debouncedEmitUpdate(value);
    };
    const onFocus = () => {
      opened.value = true;
      inputRef.value?.select();
      emit("focus");
    };
    const onBlur = () => {
      if (!props.modelValue) {
        opened.value = false;
      }
    };
    onMounted(() => {
      document.addEventListener("keyup", documentKeyHandler);
    });
    onUnmounted(() => {
      document.removeEventListener("keyup", documentKeyHandler);
    });
    watch(
      () => props.modelValue,
      (value) => {
        search.value = value;
      }
    );
    return (_ctx, _cache) => {
      const _component_n8n_icon = resolveComponent("n8n-icon");
      const _component_n8n_input = resolveComponent("n8n-input");
      return openBlock(), createBlock(_component_n8n_input, {
        ref_key: "inputRef",
        ref: inputRef,
        "data-test-id": "ndv-search",
        class: normalizeClass({
          [_ctx.$style.ioSearch]: true,
          [_ctx.$style.ioSearchOpened]: opened.value
        }),
        style: normalizeStyle(style.value),
        "model-value": search.value,
        placeholder: placeholder.value,
        size: "small",
        "onUpdate:modelValue": onSearchUpdate,
        onFocus,
        onBlur
      }, {
        prefix: withCtx(() => [
          createVNode(_component_n8n_icon, {
            class: normalizeClass(_ctx.$style.ioSearchIcon),
            icon: "search"
          }, null, 8, ["class"])
        ]),
        _: 1
      }, 8, ["class", "style", "model-value", "placeholder"]);
    };
  }
});
const ioSearch = "_ioSearch_vnmep_123";
const ioSearchIcon = "_ioSearchIcon_vnmep_126";
const ioSearchOpened = "_ioSearchOpened_vnmep_143";
const style0 = {
  ioSearch,
  ioSearchIcon,
  ioSearchOpened
};
const cssModules = {
  "$style": style0
};
const RunDataSearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  RunDataSearch as default
};

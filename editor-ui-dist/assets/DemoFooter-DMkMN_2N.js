import { L as LogsPanel } from "./LogsPanel-B0TMVwow.js";
import { d as defineComponent, p as useSettingsStore, U as useWorkflowsStore, q as computed, e as createBlock, f as createCommentVNode, m as unref, g as openBlock } from "./index-Dhp_73Xq.js";
import "./useClearExecutionButtonVisible-B4hcICd8.js";
import "./useCanvasOperations-QksuGSs1.js";
import "./RunData-rNYibGmm.js";
import "./FileSaver.min-DG2dn2Gc.js";
import "./useExecutionHelpers-B31gzua1.js";
import "./dateFormatter-fQZrLdBW.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFooter",
  setup(__props) {
    const { isNewLogsEnabled } = useSettingsStore();
    const workflowsStore = useWorkflowsStore();
    const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
    return (_ctx, _cache) => {
      return unref(isNewLogsEnabled) && hasExecutionData.value ? (openBlock(), createBlock(LogsPanel, {
        key: 0,
        "is-read-only": true
      })) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};

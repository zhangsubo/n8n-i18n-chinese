import { b as useRouter, a as useToast, U as useWorkflowsStore, p as useSettingsStore, L as useUIStore, a8 as usePageRedirectionHelper, q as computed, ac as EnterpriseEditionFeature, c as useI18n, cg as DEBUG_PAYWALL_MODAL_KEY, as as h, ch as sanitizeHtml, ak as useMessage, al as MODAL_CONFIRM, V as VIEWS, ai as useTelemetry, a1 as useRootStore, ci as isFullExecutionResponse } from "./index-Dz5zUm_l.js";
const useExecutionDebugging = () => {
  const telemetry = useTelemetry();
  const router = useRouter();
  const i18n = useI18n();
  const message = useMessage();
  const toast = useToast();
  const workflowsStore = useWorkflowsStore();
  const settingsStore = useSettingsStore();
  const uiStore = useUIStore();
  const pageRedirectionHelper = usePageRedirectionHelper();
  const isDebugEnabled = computed(
    () => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.DebugInEditor]
  );
  const applyExecutionData = async (executionId) => {
    const execution = await workflowsStore.getExecution(executionId);
    const workflow = workflowsStore.getCurrentWorkflow();
    const workflowNodes = workflowsStore.getNodes();
    if (!execution?.data?.resultData) {
      return;
    }
    const { runData } = execution.data.resultData;
    const executionNodeNames = Object.keys(runData);
    const missingNodeNames = executionNodeNames.filter(
      (name) => !workflowNodes.some((node) => node.name === name)
    );
    const workflowPinnedNodeNames = Object.keys(workflowsStore.workflow.pinData ?? {});
    const matchingPinnedNodeNames = executionNodeNames.filter(
      (name) => workflowPinnedNodeNames.includes(name)
    );
    if (matchingPinnedNodeNames.length > 0) {
      const confirmMessage = h("p", [
        i18n.baseText("nodeView.confirmMessage.debug.message"),
        h(
          "ul",
          { class: "mt-l ml-l" },
          matchingPinnedNodeNames.map((name) => h("li", sanitizeHtml(name)))
        )
      ]);
      const overWritePinnedDataConfirm = await message.confirm(
        confirmMessage,
        i18n.baseText("nodeView.confirmMessage.debug.headline"),
        {
          type: "warning",
          confirmButtonText: i18n.baseText("nodeView.confirmMessage.debug.confirmButtonText"),
          cancelButtonText: i18n.baseText("nodeView.confirmMessage.debug.cancelButtonText"),
          customClass: "matching-pinned-nodes-confirmation"
        }
      );
      if (overWritePinnedDataConfirm === MODAL_CONFIRM) {
        matchingPinnedNodeNames.forEach((name) => {
          const node = workflowsStore.getNodeByName(name);
          if (node) {
            workflowsStore.unpinData({ node });
          }
        });
      } else {
        await router.push({
          name: VIEWS.EXECUTION_PREVIEW,
          params: { name: workflow.id, executionId }
        });
        return;
      }
    }
    workflowsStore.setWorkflowExecutionData(execution);
    const pinnableNodes = workflowNodes.filter(
      (node) => !workflow.getParentNodes(node.name).length
    );
    let pinnings = 0;
    pinnableNodes.forEach((node) => {
      const nodeData = runData[node.name]?.[0]?.data?.main?.[0];
      if (nodeData) {
        pinnings++;
        workflowsStore.pinData({
          node,
          data: nodeData
        });
      }
    });
    toast.showToast({
      title: i18n.baseText("nodeView.showMessage.debug.title"),
      message: i18n.baseText("nodeView.showMessage.debug.content"),
      type: "info"
    });
    if (missingNodeNames.length) {
      toast.showToast({
        title: i18n.baseText("nodeView.showMessage.debug.missingNodes.title"),
        message: i18n.baseText("nodeView.showMessage.debug.missingNodes.content", {
          interpolate: { nodeNames: missingNodeNames.join(", ") }
        }),
        type: "warning"
      });
    }
    telemetry.track("User clicked debug execution button", {
      instance_id: useRootStore().instanceId,
      exec_status: isFullExecutionResponse(execution) ? execution.status : "",
      override_pinned_data: pinnableNodes.length === pinnings,
      all_exec_data_imported: missingNodeNames.length === 0
    });
  };
  const handleDebugLinkClick = (event) => {
    if (!isDebugEnabled.value) {
      uiStore.openModalWithData({
        name: DEBUG_PAYWALL_MODAL_KEY,
        data: {
          title: i18n.baseText(uiStore.contextBasedTranslationKeys.feature.unavailable.title),
          footerButtonAction: () => {
            uiStore.closeModal(DEBUG_PAYWALL_MODAL_KEY);
            void pageRedirectionHelper.goToUpgrade("debug", "upgrade-debug");
          }
        }
      });
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    workflowsStore.isInDebugMode = false;
  };
  return {
    applyExecutionData,
    handleDebugLinkClick
  };
};
export {
  useExecutionDebugging as u
};

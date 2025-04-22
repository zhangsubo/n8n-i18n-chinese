import { d as defineComponent, h as resolveComponent, e as createBlock, g as openBlock, w as withCtx, x as renderSlot, f as createCommentVNode, j as createVNode, n as normalizeClass, l as createTextVNode, t as toDisplayString, m as unref, c as useI18n, _ as _export_sfc, a0 as useCssModule, r as ref, q as computed, ga as WAIT_INDEFINITELY, i as createElementBlock, k as createBaseVNode, db as N8nCheckbox, aS as N8nTooltip, V as VIEWS, bD as N8nIcon, bd as N8nText, F as Fragment, bf as N8nButton, J as withModifiers, aU as _sfc_main$5, U as useWorkflowsStore, av as useExecutionsStore, p as useSettingsStore, a8 as usePageRedirectionHelper, a as useToast, ac as EnterpriseEditionFeature, I as watch, aZ as useTemplateRef, hb as useIntersectionObserver, D as renderList, hc as ElSkeletonItem, hd as N8nTableBase, a9 as getResourcePermissions, ca as executionRetryMessage, ai as useTelemetry, ak as useMessage, al as MODAL_CONFIRM, W as useRoute, gV as useInsightsStore, a6 as useDocumentTitle, cH as storeToRefs, aB as onBeforeMount, aR as useExternalHooks, o as onMounted, y as onBeforeUnmount } from "./index-Dhp_73Xq.js";
import { _ as _sfc_main$4, E as ExecutionsFilter, C as ConcurrentExecutionsHeader } from "./ExecutionsTime.vue_vue_type_script_setup_true_lang-dfZe41XR.js";
import { _ as __unplugin_components_0$1 } from "./AnimatedSpinner-BD4JqqvF.js";
import { u as useExecutionHelpers } from "./useExecutionHelpers-B31gzua1.js";
import { c as convertToDisplayDate } from "./dateFormatter-fQZrLdBW.js";
import { I as InsightsSummary } from "./InsightsSummary-_Fsck9eT.js";
import { u as useOverview, P as ProjectHeader } from "./ProjectHeader-BHqMM4eE.js";
import "./AnnotationTagsDropdown.ee.vue_vue_type_script_setup_true_lang-B5yURIdD.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "GlobalExecutionsListItemQueuedTooltip",
  props: {
    status: {},
    concurrencyCap: {},
    isCloudDeployment: { type: Boolean }
  },
  emits: ["goToUpgrade"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_N8nLink = resolveComponent("N8nLink");
      const _component_N8nTooltip = resolveComponent("N8nTooltip");
      return openBlock(), createBlock(_component_N8nTooltip, { placement: "top" }, {
        content: withCtx(() => [
          props.status === "waiting" ? (openBlock(), createBlock(_component_i18n_t, {
            key: 0,
            keypath: "executionsList.statusTooltipText.theWorkflowIsWaitingIndefinitely"
          })) : createCommentVNode("", true),
          props.status === "new" ? (openBlock(), createBlock(_component_i18n_t, {
            key: 1,
            keypath: "executionsList.statusTooltipText.waitingForConcurrencyCapacity"
          }, {
            instance: withCtx(() => [
              props.isCloudDeployment ? (openBlock(), createBlock(_component_i18n_t, {
                key: 0,
                keypath: "executionsList.statusTooltipText.waitingForConcurrencyCapacity.cloud"
              }, {
                concurrencyCap: withCtx(() => [
                  createTextVNode(toDisplayString(props.concurrencyCap), 1)
                ]),
                link: withCtx(() => [
                  createVNode(_component_N8nLink, {
                    bold: "",
                    size: "small",
                    class: normalizeClass(_ctx.$style.link),
                    onClick: _cache[0] || (_cache[0] = ($event) => emit("goToUpgrade"))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgradeNow")), 1)
                    ]),
                    _: 1
                  }, 8, ["class"])
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_i18n_t, {
                key: 1,
                keypath: "executionsList.statusTooltipText.waitingForConcurrencyCapacity.self"
              }, {
                concurrencyCap: withCtx(() => [
                  createTextVNode(toDisplayString(props.concurrencyCap), 1)
                ]),
                link: withCtx(() => [
                  createVNode(_component_N8nLink, {
                    class: normalizeClass(_ctx.$style.link),
                    href: unref(i18n).baseText("executions.concurrency.docsLink"),
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("generic.viewDocs")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "href"])
                ]),
                _: 1
              }))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      });
    };
  }
});
const link = "_link_1k41m_123";
const style0$2 = {
  link
};
const cssModules$2 = {
  "$style": style0$2
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$2]]);
const _hoisted_1$1 = { "data-test-id": "execution-status" };
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = { key: 1 };
const _hoisted_4$1 = { key: 2 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GlobalExecutionsListItem",
  props: {
    execution: {},
    selected: { type: Boolean, default: false },
    workflowName: { default: "" },
    workflowPermissions: {},
    concurrencyCap: {},
    isCloudDeployment: { type: Boolean }
  },
  emits: ["stop", "select", "retrySaved", "retryOriginal", "delete", "goToUpgrade"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const style = useCssModule();
    const locale = useI18n();
    const executionHelpers = useExecutionHelpers();
    const isStopping = ref(false);
    const isRunning = computed(() => props.execution.status === "running");
    const isWaitTillIndefinite = computed(() => {
      if (!props.execution.waitTill) {
        return false;
      }
      return new Date(props.execution.waitTill).getTime() === WAIT_INDEFINITELY.getTime();
    });
    const isRetriable = computed(() => executionHelpers.isExecutionRetriable(props.execution));
    const EXECUTION_STATUS = {
      CRASHED: "crashed",
      ERROR: "error",
      WAITING: "waiting",
      SUCCESS: "success",
      NEW: "new",
      RUNNING: "running",
      UNKNOWN: "unknown",
      CANCELED: "canceled"
    };
    const executionIconStatusDictionary = {
      [EXECUTION_STATUS.CRASHED]: {
        icon: "status-error",
        color: "danger"
      },
      [EXECUTION_STATUS.ERROR]: {
        icon: "status-error",
        color: "danger"
      },
      [EXECUTION_STATUS.WAITING]: {
        icon: "status-waiting",
        color: "secondary"
      },
      [EXECUTION_STATUS.SUCCESS]: {
        icon: "status-completed",
        color: "success"
      },
      [EXECUTION_STATUS.NEW]: {
        icon: "status-new",
        color: "foreground-xdark"
      },
      [EXECUTION_STATUS.RUNNING]: {
        icon: "spinner",
        color: "secondary"
      },
      [EXECUTION_STATUS.UNKNOWN]: {
        icon: "status-unknown",
        color: "foreground-xdark"
      },
      [EXECUTION_STATUS.CANCELED]: {
        icon: "status-canceled",
        color: "foreground-xdark"
      }
    };
    const errorStatuses = [EXECUTION_STATUS.ERROR, EXECUTION_STATUS.CRASHED];
    const classes = computed(() => {
      return {
        [style.dangerBg]: errorStatuses.includes(props.execution.status)
      };
    });
    const formattedStartedAtDate = computed(() => {
      return props.execution.startedAt ? formatDate(props.execution.startedAt) : locale.baseText("executionsList.startingSoon");
    });
    const formattedWaitTillDate = computed(() => {
      return props.execution.waitTill ? formatDate(props.execution.waitTill) : "";
    });
    const formattedStoppedAtDate = computed(() => {
      return props.execution.stoppedAt ? locale.displayTimer(
        new Date(props.execution.stoppedAt).getTime() - new Date(props.execution.startedAt).getTime(),
        true
      ) : "";
    });
    function getStatusLabel(status) {
      if (status === EXECUTION_STATUS.CRASHED) {
        return locale.baseText("executionsList.error");
      }
      return locale.baseText(`executionsList.${status}`);
    }
    const statusRender = computed(() => {
      return {
        ...executionIconStatusDictionary[props.execution.status],
        label: getStatusLabel(props.execution.status)
      };
    });
    function formatDate(fullDate) {
      const { date, time } = convertToDisplayDate(fullDate);
      return locale.baseText("executionsList.started", { interpolate: { time, date } });
    }
    function onStopExecution() {
      isStopping.value = true;
      emit("stop", props.execution);
    }
    function onSelect() {
      emit("select", props.execution);
    }
    async function handleActionItemClick(commandData) {
      emit(commandData, props.execution);
    }
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_GlobalExecutionsListItemQueuedTooltip = __unplugin_components_0;
      const _component_FontAwesomeIcon = resolveComponent("FontAwesomeIcon");
      const _component_ElDropdownItem = resolveComponent("ElDropdownItem");
      const _component_ElDropdownMenu = resolveComponent("ElDropdownMenu");
      const _component_ElDropdown = resolveComponent("ElDropdown");
      return openBlock(), createElementBlock("tr", {
        class: normalizeClass(classes.value)
      }, [
        createBaseVNode("td", null, [
          createVNode(unref(N8nCheckbox), {
            "model-value": _ctx.selected,
            "data-test-id": "select-execution-checkbox",
            disabled: !Boolean(_ctx.execution.id && _ctx.execution.stoppedAt),
            class: "mb-0",
            style: { marginTop: "-3px" },
            "onUpdate:modelValue": onSelect
          }, null, 8, ["model-value", "disabled"])
        ]),
        createBaseVNode("td", null, [
          createVNode(unref(N8nTooltip), {
            content: _ctx.execution.workflowName || _ctx.workflowName,
            placement: "top"
          }, {
            default: withCtx(() => [
              createVNode(_component_RouterLink, {
                to: {
                  name: unref(VIEWS).EXECUTION_PREVIEW,
                  params: { name: _ctx.execution.workflowId, executionId: _ctx.execution.id }
                },
                class: normalizeClass(_ctx.$style.workflowName),
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.execution.workflowName || _ctx.workflowName), 1)
                ]),
                _: 1
              }, 8, ["to", "class"])
            ]),
            _: 1
          }, 8, ["content"])
        ]),
        createBaseVNode("td", _hoisted_1$1, [
          isWaitTillIndefinite.value || _ctx.execution.status === EXECUTION_STATUS.NEW ? (openBlock(), createBlock(_component_GlobalExecutionsListItemQueuedTooltip, {
            key: 0,
            status: props.execution.status,
            "concurrency-cap": props.concurrencyCap,
            "is-cloud-deployment": props.isCloudDeployment,
            onGoToUpgrade: _cache[0] || (_cache[0] = ($event) => emit("goToUpgrade"))
          }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createVNode(unref(N8nIcon), {
                  icon: statusRender.value.icon,
                  color: statusRender.value.color,
                  class: "mr-2xs"
                }, null, 8, ["icon", "color"]),
                createTextVNode(" " + toDisplayString(statusRender.value.label), 1)
              ])
            ]),
            _: 1
          }, 8, ["status", "concurrency-cap", "is-cloud-deployment"])) : (openBlock(), createBlock(unref(N8nTooltip), {
            key: 1,
            disabled: _ctx.execution.status !== EXECUTION_STATUS.WAITING,
            content: unref(locale).baseText("executionsList.statusWaiting", {
              interpolate: { status: _ctx.execution.status, time: formattedWaitTillDate.value }
            })
          }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                _ctx.execution.status === EXECUTION_STATUS.RUNNING ? (openBlock(), createBlock(unref(N8nText), {
                  key: 0,
                  color: "secondary",
                  class: "mr-2xs"
                }, {
                  default: withCtx(() => [
                    createVNode(__unplugin_components_0$1)
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(unref(N8nIcon), {
                  key: 1,
                  icon: statusRender.value.icon,
                  color: statusRender.value.color,
                  class: "mr-2xs"
                }, null, 8, ["icon", "color"])),
                createTextVNode(" " + toDisplayString(statusRender.value.label), 1)
              ])
            ]),
            _: 1
          }, 8, ["disabled", "content"]))
        ]),
        createBaseVNode("td", null, toDisplayString(formattedStartedAtDate.value), 1),
        createBaseVNode("td", null, [
          formattedStoppedAtDate.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(formattedStoppedAtDate.value), 1)
          ], 64)) : (openBlock(), createBlock(_sfc_main$4, {
            key: 1,
            "start-time": _ctx.execution.startedAt
          }, null, 8, ["start-time"]))
        ]),
        createBaseVNode("td", null, [
          _ctx.execution.id ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(_ctx.execution.id), 1)) : createCommentVNode("", true),
          _ctx.execution.retryOf ? (openBlock(), createElementBlock("span", _hoisted_3$1, [
            _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
            createBaseVNode("small", null, " (" + toDisplayString(unref(locale).baseText("executionsList.retryOf")) + " " + toDisplayString(_ctx.execution.retryOf) + ") ", 1)
          ])) : _ctx.execution.retrySuccessId ? (openBlock(), createElementBlock("span", _hoisted_4$1, [
            _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
            createBaseVNode("small", null, " (" + toDisplayString(unref(locale).baseText("executionsList.successRetry")) + " " + toDisplayString(_ctx.execution.retrySuccessId) + ") ", 1)
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("td", null, [
          _ctx.execution.mode === "manual" ? (openBlock(), createBlock(_component_FontAwesomeIcon, {
            key: 0,
            icon: "flask"
          })) : createCommentVNode("", true)
        ]),
        createBaseVNode("td", null, [
          !_ctx.execution.stoppedAt || _ctx.execution.waitTill ? (openBlock(), createBlock(unref(N8nButton), {
            key: 0,
            "data-test-id": "stop-execution-button",
            type: "secondary",
            loading: isStopping.value,
            disabled: isStopping.value,
            onClick: withModifiers(onStopExecution, ["stop"])
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("executionsList.stop")), 1)
            ]),
            _: 1
          }, 8, ["loading", "disabled"])) : createCommentVNode("", true)
        ]),
        createBaseVNode("td", null, [
          !isRunning.value ? (openBlock(), createBlock(_component_ElDropdown, {
            key: 0,
            trigger: "click",
            onCommand: handleActionItemClick
          }, {
            dropdown: withCtx(() => [
              createVNode(_component_ElDropdownMenu, {
                class: normalizeClass({
                  [_ctx.$style.actions]: true,
                  [_ctx.$style.deleteOnly]: !isRetriable.value
                })
              }, {
                default: withCtx(() => [
                  isRetriable.value ? (openBlock(), createBlock(_component_ElDropdownItem, {
                    key: 0,
                    "data-test-id": "execution-retry-saved-dropdown-item",
                    class: normalizeClass(_ctx.$style.retryAction),
                    command: "retrySaved",
                    disabled: !_ctx.workflowPermissions.execute
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithCurrentlySavedWorkflow")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])) : createCommentVNode("", true),
                  isRetriable.value ? (openBlock(), createBlock(_component_ElDropdownItem, {
                    key: 1,
                    "data-test-id": "execution-retry-original-dropdown-item",
                    class: normalizeClass(_ctx.$style.retryAction),
                    command: "retryOriginal",
                    disabled: !_ctx.workflowPermissions.execute
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("executionsList.retryWithOriginalWorkflow")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])) : createCommentVNode("", true),
                  createVNode(_component_ElDropdownItem, {
                    "data-test-id": "execution-delete-dropdown-item",
                    class: normalizeClass(_ctx.$style.deleteAction),
                    command: "delete",
                    disabled: !_ctx.workflowPermissions.update
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("generic.delete")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            default: withCtx(() => [
              createVNode(unref(_sfc_main$5), {
                text: "",
                type: "tertiary",
                size: "mini",
                icon: "ellipsis-v"
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const dangerBg = "_dangerBg_1i3lk_123";
const workflowName = "_workflowName_1i3lk_127";
const style0$1 = {
  dangerBg,
  workflowName
};
const cssModules$1 = {
  "$style": style0$1
};
const GlobalExecutionsListItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$1]]);
const _hoisted_1 = { style: { "margin-left": "auto" } };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { style: { "width": "50px" } };
const _hoisted_4 = { colspan: "8" };
const _hoisted_5 = { style: { "width": "50px" } };
const _hoisted_6 = {
  colspan: "9",
  style: { "text-align": "center" }
};
const _hoisted_7 = {
  key: 0,
  "data-test-id": "execution-list-empty"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GlobalExecutionsList",
  props: {
    executions: {},
    filters: {},
    total: { default: 0 },
    estimated: { type: Boolean, default: false }
  },
  emits: ["update:filters", "execution:stop"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const workflowsStore = useWorkflowsStore();
    const executionsStore = useExecutionsStore();
    const settingsStore = useSettingsStore();
    const pageRedirectionHelper = usePageRedirectionHelper();
    const allVisibleSelected = ref(false);
    const allExistingSelected = ref(false);
    const selectedItems = ref({});
    const message = useMessage();
    const toast = useToast();
    const selectedCount = computed(() => {
      if (allExistingSelected.value) {
        return props.total;
      }
      return Object.keys(selectedItems.value).length;
    });
    const workflows = computed(() => {
      return [
        {
          id: "all",
          name: i18n.baseText("executionsList.allWorkflows")
        },
        ...workflowsStore.allWorkflows
      ];
    });
    const isAnnotationEnabled = computed(
      () => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]
    );
    const runningExecutionsCount = computed(() => {
      return props.executions.filter(
        (execution) => execution.status === "running" && ["webhook", "trigger"].includes(execution.mode)
      ).length;
    });
    watch(
      () => props.executions,
      () => {
        if (props.executions.length === 0) {
          handleClearSelection();
        }
        adjustSelectionAfterMoreItemsLoaded();
      }
    );
    function handleCheckAllExistingChange() {
      allExistingSelected.value = !allExistingSelected.value;
      allVisibleSelected.value = !allExistingSelected.value;
      handleCheckAllVisibleChange();
    }
    function handleCheckAllVisibleChange() {
      allVisibleSelected.value = !allVisibleSelected.value;
      if (!allVisibleSelected.value) {
        allExistingSelected.value = false;
        selectedItems.value = {};
      } else {
        selectAllVisibleExecutions();
      }
    }
    function toggleSelectExecution(execution) {
      const executionId = execution.id;
      if (selectedItems.value[executionId]) {
        const { [executionId]: removedSelectedItem, ...rest } = selectedItems.value;
        selectedItems.value = rest;
      } else {
        selectedItems.value = {
          ...selectedItems.value,
          [executionId]: true
        };
      }
      allVisibleSelected.value = Object.keys(selectedItems.value).length === props.executions.length;
      allExistingSelected.value = Object.keys(selectedItems.value).length === props.total;
    }
    async function handleDeleteSelected() {
      const confirmationText = [
        isAnnotationEnabled.value && i18n.baseText("executionsList.confirmMessage.annotationsNote"),
        i18n.baseText("executionsList.confirmMessage.message", {
          interpolate: { count: selectedCount.value.toString() }
        })
      ].filter(Boolean).join(" ");
      const deleteExecutions = await message.confirm(
        confirmationText,
        i18n.baseText("executionsList.confirmMessage.headline"),
        {
          type: "warning",
          confirmButtonText: i18n.baseText("executionsList.confirmMessage.confirmButtonText"),
          cancelButtonText: i18n.baseText("executionsList.confirmMessage.cancelButtonText")
        }
      );
      if (deleteExecutions !== MODAL_CONFIRM) {
        return;
      }
      try {
        await executionsStore.deleteExecutions({
          filters: executionsStore.executionsFilters,
          ...allExistingSelected.value ? { deleteBefore: /* @__PURE__ */ new Date() } : {
            ids: Object.keys(selectedItems.value)
          }
        });
      } catch (error) {
        toast.showError(error, i18n.baseText("executionsList.showError.handleDeleteSelected.title"));
        return;
      }
      toast.showMessage({
        title: i18n.baseText("executionsList.showMessage.handleDeleteSelected.title"),
        type: "success"
      });
      handleClearSelection();
    }
    function handleClearSelection() {
      allVisibleSelected.value = false;
      allExistingSelected.value = false;
      selectedItems.value = {};
    }
    async function onFilterChanged(filters) {
      emit("update:filters", filters);
      handleClearSelection();
    }
    function getExecutionWorkflowName(execution) {
      return getWorkflowName(execution.workflowId ?? "") ?? i18n.baseText("executionsList.unsavedWorkflow");
    }
    function getExecutionWorkflowPermissions(execution) {
      return getResourcePermissions(execution.scopes).workflow;
    }
    function getWorkflowName(workflowId) {
      return workflows.value.find((data) => data.id === workflowId)?.name;
    }
    const loadMoreRef = useTemplateRef("loadMoreButton");
    useIntersectionObserver(loadMoreRef, ([entry]) => {
      if (!entry?.isIntersecting) return;
      void loadMore();
    });
    async function loadMore() {
      if (executionsStore.filters.status === "running") {
        return;
      }
      const lastItem = props.executions.at(-1);
      try {
        await executionsStore.fetchExecutions(executionsStore.executionsFilters, lastItem?.id);
      } catch (error) {
        toast.showError(error, i18n.baseText("executionsList.showError.loadMore.title"));
      }
    }
    function selectAllVisibleExecutions() {
      props.executions.forEach((execution) => {
        selectedItems.value[execution.id] = true;
      });
    }
    function adjustSelectionAfterMoreItemsLoaded() {
      if (allExistingSelected.value) {
        allVisibleSelected.value = true;
        selectAllVisibleExecutions();
      }
    }
    async function retrySavedExecution(execution) {
      await retryExecution(execution, true);
    }
    async function retryOriginalExecution(execution) {
      await retryExecution(execution, false);
    }
    async function retryExecution(execution, loadWorkflow) {
      try {
        const retryStatus = await executionsStore.retryExecution(execution.id, loadWorkflow);
        const retryMessage = executionRetryMessage(retryStatus);
        if (retryMessage) {
          toast.showMessage(retryMessage);
        }
      } catch (error) {
        toast.showError(error, i18n.baseText("executionsList.showError.retryExecution.title"));
      }
      telemetry.track("User clicked retry execution button", {
        workflow_id: workflowsStore.workflowId,
        execution_id: execution.id,
        retry_type: loadWorkflow ? "current" : "original"
      });
    }
    async function stopExecution(execution) {
      try {
        await executionsStore.stopCurrentExecution(execution.id);
        toast.showMessage({
          title: i18n.baseText("executionsList.showMessage.stopExecution.title"),
          message: i18n.baseText("executionsList.showMessage.stopExecution.message", {
            interpolate: { activeExecutionId: execution.id }
          }),
          type: "success"
        });
        emit("execution:stop");
      } catch (error) {
        toast.showError(error, i18n.baseText("executionsList.showError.stopExecution.title"));
      }
    }
    async function deleteExecution(execution) {
      const hasAnnotation = !!execution.annotation && (execution.annotation.vote || execution.annotation.tags.length > 0);
      if (hasAnnotation) {
        const deleteConfirmed = await message.confirm(
          i18n.baseText("executionsList.confirmMessage.annotatedExecutionMessage"),
          i18n.baseText("executionDetails.confirmMessage.headline"),
          {
            type: "warning",
            confirmButtonText: i18n.baseText("executionDetails.confirmMessage.confirmButtonText"),
            cancelButtonText: ""
          }
        );
        if (deleteConfirmed !== MODAL_CONFIRM) {
          return;
        }
      }
      try {
        await executionsStore.deleteExecutions({ ids: [execution.id] });
        if (allVisibleSelected.value) {
          const { [execution.id]: _, ...rest } = selectedItems.value;
          selectedItems.value = rest;
        }
      } catch (error) {
        toast.showError(error, i18n.baseText("executionsList.showError.handleDeleteSelected.title"));
      }
    }
    async function onAutoRefreshToggle(value) {
      if (value) {
        await executionsStore.startAutoRefreshInterval();
      } else {
        executionsStore.stopAutoRefreshInterval();
      }
    }
    const goToUpgrade = () => {
      void pageRedirectionHelper.goToUpgrade("concurrency", "upgrade-concurrency");
    };
    return (_ctx, _cache) => {
      const _component_ElCheckbox = resolveComponent("ElCheckbox");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.execListWrapper)
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.execListHeaderControls)
        }, [
          createVNode(ExecutionsFilter, {
            workflows: workflows.value,
            class: "execFilter",
            onFilterChanged
          }, null, 8, ["workflows"]),
          createBaseVNode("div", _hoisted_1, [
            unref(settingsStore).isConcurrencyEnabled ? (openBlock(), createBlock(ConcurrentExecutionsHeader, {
              key: 0,
              "running-executions-count": runningExecutionsCount.value,
              "concurrency-cap": unref(settingsStore).concurrency,
              "is-cloud-deployment": unref(settingsStore).isCloudDeployment,
              onGoToUpgrade: goToUpgrade
            }, null, 8, ["running-executions-count", "concurrency-cap", "is-cloud-deployment"])) : (openBlock(), createBlock(_component_ElCheckbox, {
              key: 1,
              modelValue: unref(executionsStore).autoRefresh,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => unref(executionsStore).autoRefresh = $event),
                _cache[1] || (_cache[1] = ($event) => onAutoRefreshToggle($event))
              ],
              "data-test-id": "execution-auto-refresh-checkbox"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("executionsList.autoRefresh")), 1)
              ]),
              _: 1
            }, 8, ["modelValue"]))
          ])
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.execList)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.execTable)
          }, [
            createVNode(unref(N8nTableBase), null, {
              default: withCtx(() => [
                createBaseVNode("thead", null, [
                  allVisibleSelected.value && _ctx.total > 0 ? (openBlock(), createElementBlock("tr", _hoisted_2, [
                    createBaseVNode("th", _hoisted_3, [
                      createVNode(unref(N8nCheckbox), {
                        "model-value": allExistingSelected.value,
                        "data-test-id": "select-all-executions-checkbox",
                        class: "mb-0",
                        "onUpdate:modelValue": handleCheckAllExistingChange
                      }, null, 8, ["model-value"])
                    ]),
                    createBaseVNode("th", _hoisted_4, toDisplayString(unref(i18n).baseText("executionsList.selectAll", {
                      adjustToNumber: _ctx.total,
                      interpolate: { count: `${_ctx.total}` }
                    })), 1)
                  ])) : createCommentVNode("", true),
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", _hoisted_5, [
                      createVNode(unref(N8nCheckbox), {
                        "model-value": allVisibleSelected.value,
                        disabled: _ctx.total < 1,
                        "data-test-id": "select-visible-executions-checkbox",
                        class: "mb-0",
                        "onUpdate:modelValue": handleCheckAllVisibleChange
                      }, null, 8, ["model-value", "disabled"])
                    ]),
                    createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("generic.workflow")), 1),
                    createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.status")), 1),
                    createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.startedAt")), 1),
                    createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.runTime")), 1),
                    createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("executionsList.id")), 1),
                    _cache[3] || (_cache[3] = createBaseVNode("th", null, null, -1)),
                    _cache[4] || (_cache[4] = createBaseVNode("th", { style: { "width": "69px" } }, null, -1)),
                    _cache[5] || (_cache[5] = createBaseVNode("th", { style: { "width": "50px" } }, null, -1))
                  ])
                ]),
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.executions, (execution) => {
                    return openBlock(), createBlock(GlobalExecutionsListItem, {
                      key: execution.id,
                      execution,
                      "workflow-name": getExecutionWorkflowName(execution),
                      "workflow-permissions": getExecutionWorkflowPermissions(execution),
                      selected: selectedItems.value[execution.id] || allExistingSelected.value,
                      "concurrency-cap": unref(settingsStore).concurrency,
                      "is-cloud-deployment": unref(settingsStore).isCloudDeployment,
                      "data-test-id": "global-execution-list-item",
                      onStop: stopExecution,
                      onDelete: deleteExecution,
                      onSelect: toggleSelectExecution,
                      onRetrySaved: retrySavedExecution,
                      onRetryOriginal: retryOriginalExecution,
                      onGoToUpgrade: goToUpgrade
                    }, null, 8, ["execution", "workflow-name", "workflow-permissions", "selected", "concurrency-cap", "is-cloud-deployment"]);
                  }), 128)),
                  unref(executionsStore).loading && !_ctx.executions.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(executionsStore).itemsPerPage, (item) => {
                    return openBlock(), createElementBlock("tr", { key: item }, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(9, (col) => {
                        return createBaseVNode("td", { key: col }, [
                          createVNode(unref(ElSkeletonItem))
                        ]);
                      }), 64))
                    ]);
                  }), 128)) : createCommentVNode("", true),
                  createBaseVNode("tr", null, [
                    createBaseVNode("td", _hoisted_6, [
                      !_ctx.executions.length ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(unref(i18n).baseText("executionsList.empty")), 1)) : _ctx.total > _ctx.executions.length || _ctx.estimated ? (openBlock(), createBlock(unref(N8nButton), {
                        key: 1,
                        ref: "loadMoreButton",
                        icon: "sync",
                        title: unref(i18n).baseText("executionsList.loadMore"),
                        label: unref(i18n).baseText("executionsList.loadMore"),
                        loading: unref(executionsStore).loading,
                        "data-test-id": "load-more-button",
                        onClick: _cache[2] || (_cache[2] = ($event) => loadMore())
                      }, null, 8, ["title", "label", "loading"])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                        createTextVNode(toDisplayString(unref(i18n).baseText("executionsList.loadedAll")), 1)
                      ], 64))
                    ])
                  ])
                ])
              ]),
              _: 1
            })
          ], 2)
        ], 2),
        selectedCount.value > 0 ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.selectionOptions),
          "data-test-id": "selected-executions-info"
        }, [
          createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("executionsList.selected", {
            adjustToNumber: selectedCount.value,
            interpolate: { count: `${selectedCount.value}` }
          })), 1),
          createVNode(unref(N8nButton), {
            label: unref(i18n).baseText("generic.delete"),
            type: "tertiary",
            "data-test-id": "delete-selected-button",
            onClick: handleDeleteSelected
          }, null, 8, ["label"]),
          createVNode(unref(N8nButton), {
            label: unref(i18n).baseText("executionsList.clearSelection"),
            type: "tertiary",
            "data-test-id": "clear-selection-button",
            onClick: handleClearSelection
          }, null, 8, ["label"])
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const execListWrapper = "_execListWrapper_1tnmy_123";
const execList = "_execList_1tnmy_123";
const execListHeaderControls = "_execListHeaderControls_1tnmy_138";
const selectionOptions = "_selectionOptions_1tnmy_145";
const execTable = "_execTable_1tnmy_163";
const style0 = {
  execListWrapper,
  execList,
  execListHeaderControls,
  selectionOptions,
  execTable
};
const cssModules = {
  "$style": style0
};
const GlobalExecutionsList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules], ["__scopeId", "data-v-9d6d344b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ExecutionsView",
  setup(__props) {
    const route = useRoute();
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const externalHooks = useExternalHooks();
    const workflowsStore = useWorkflowsStore();
    const executionsStore = useExecutionsStore();
    const insightsStore = useInsightsStore();
    const documentTitle = useDocumentTitle();
    const toast = useToast();
    const overview = useOverview();
    const { executionsCount, executionsCountEstimated, filters, allExecutions } = storeToRefs(executionsStore);
    onBeforeMount(async () => {
      await loadWorkflows();
      void externalHooks.run("executionsList.openDialog");
      telemetry.track("User opened Executions log", {
        workflow_id: workflowsStore.workflowId
      });
    });
    onMounted(async () => {
      documentTitle.set(i18n.baseText("executionsList.workflowExecutions"));
      document.addEventListener("visibilitychange", onDocumentVisibilityChange);
      await executionsStore.initialize();
    });
    onBeforeUnmount(() => {
      executionsStore.reset();
      document.removeEventListener("visibilitychange", onDocumentVisibilityChange);
    });
    async function loadWorkflows() {
      try {
        await workflowsStore.fetchAllWorkflows(route.params?.projectId);
      } catch (error) {
        toast.showError(error, i18n.baseText("executionsList.showError.loadWorkflows.title"));
      }
    }
    function onDocumentVisibilityChange() {
      if (document.visibilityState === "hidden") {
        executionsStore.stopAutoRefreshInterval();
      } else {
        void executionsStore.startAutoRefreshInterval();
      }
    }
    async function onRefreshData() {
      try {
        await executionsStore.fetchExecutions();
      } catch (error) {
        toast.showError(error, i18n.baseText("executionsList.showError.refreshData.title"));
      }
    }
    async function onUpdateFilters(newFilters) {
      executionsStore.reset();
      executionsStore.setFilters(newFilters);
      await executionsStore.initialize();
    }
    async function onExecutionStop() {
      await onRefreshData();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(GlobalExecutionsList, {
        executions: unref(allExecutions),
        filters: unref(filters),
        total: unref(executionsCount),
        "estimated-total": unref(executionsCountEstimated),
        "onExecution:stop": onExecutionStop,
        "onUpdate:filters": onUpdateFilters
      }, {
        default: withCtx(() => [
          createVNode(ProjectHeader, null, {
            default: withCtx(() => [
              unref(overview).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary, {
                key: 0,
                loading: unref(insightsStore).summary.isLoading,
                summary: unref(insightsStore).summary.state
              }, null, 8, ["loading", "summary"])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["executions", "filters", "total", "estimated-total"]);
    };
  }
});
export {
  _sfc_main as default
};

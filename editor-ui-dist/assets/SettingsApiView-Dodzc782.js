import { d as defineComponent, r as ref, h as resolveComponent, e as createBlock, g as openBlock, n as normalizeClass, w as withCtx, k as createBaseVNode, j as createVNode, i as createElementBlock, f as createCommentVNode, l as createTextVNode, t as toDisplayString, c as useI18n, aM as DateTime, _ as _export_sfc, p as useSettingsStore, L as useUIStore, aK as useCloudPlanStore, a as useToast, a6 as useDocumentTitle, a8 as usePageRedirectionHelper, cG as useApiKeysStore, cH as storeToRefs, a1 as useRootStore, o as onMounted, cI as DOCS_DOMAIN, m as unref, F as Fragment, D as renderList, ak as useMessage, al as MODAL_CONFIRM, ai as useTelemetry, cJ as API_KEY_CREATE_OR_EDIT_MODAL_KEY } from "./index-Dhp_73Xq.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ApiKeyCard",
  props: {
    apiKey: {}
  },
  emits: ["edit", "delete"],
  setup(__props, { emit: __emit }) {
    const API_KEY_ITEM_ACTIONS = {
      EDIT: "edit",
      DELETE: "delete"
    };
    const ACTION_LIST = [
      {
        label: "Edit",
        value: API_KEY_ITEM_ACTIONS.EDIT
      },
      {
        label: "Delete",
        value: API_KEY_ITEM_ACTIONS.DELETE
      }
    ];
    const i18n = useI18n();
    const cardActions2 = ref(null);
    const props = __props;
    const emit = __emit;
    async function onAction(action) {
      if (action === API_KEY_ITEM_ACTIONS.EDIT) {
        emit("edit", props.apiKey.id);
      } else if (action === API_KEY_ITEM_ACTIONS.DELETE) {
        emit("delete", props.apiKey.id);
      }
    }
    const hasApiKeyExpired = (apiKey) => {
      if (!apiKey.expiresAt) return false;
      return apiKey.expiresAt <= Date.now() / 1e3;
    };
    const getExpirationTime = (apiKey) => {
      if (!apiKey.expiresAt) return i18n.baseText("settings.api.neverExpires");
      if (hasApiKeyExpired(apiKey)) return i18n.baseText("settings.api.expired");
      const time = DateTime.fromSeconds(apiKey.expiresAt).toFormat("ccc, MMM d yyyy");
      return i18n.baseText("settings.api.expirationTime", { interpolate: { time } });
    };
    return (_ctx, _cache) => {
      const _component_n8n_text = resolveComponent("n8n-text");
      const _component_n8n_action_toggle = resolveComponent("n8n-action-toggle");
      const _component_n8n_card = resolveComponent("n8n-card");
      return openBlock(), createBlock(_component_n8n_card, {
        class: normalizeClass(_ctx.$style.cardLink),
        "data-test-id": "api-key-card",
        onClick: _cache[0] || (_cache[0] = ($event) => onAction("edit"))
      }, {
        header: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(_component_n8n_text, {
              tag: "h2",
              bold: "",
              class: normalizeClass(_ctx.$style.cardHeading)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.apiKey.label), 1)
              ]),
              _: 1
            }, 8, ["class"]),
            createBaseVNode("div", {
              class: normalizeClass([_ctx.$style.cardDescription])
            }, [
              createVNode(_component_n8n_text, {
                color: !hasApiKeyExpired(_ctx.apiKey) ? "text-light" : "warning",
                size: "small"
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", null, toDisplayString(getExpirationTime(_ctx.apiKey)), 1)
                ]),
                _: 1
              }, 8, ["color"])
            ], 2)
          ]),
          _ctx.apiKey.apiKey.includes("*") ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.cardApiKey)
          }, [
            createVNode(_component_n8n_text, {
              color: "text-light",
              size: "small"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.apiKey.apiKey), 1)
              ]),
              _: 1
            })
          ], 2)) : createCommentVNode("", true)
        ]),
        append: withCtx(() => [
          createBaseVNode("div", {
            ref_key: "cardActions",
            ref: cardActions2,
            class: normalizeClass(_ctx.$style.cardActions)
          }, [
            createVNode(_component_n8n_action_toggle, {
              actions: ACTION_LIST,
              theme: "dark",
              onAction
            })
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const cardLink = "_cardLink_ni149_123";
const cardHeading = "_cardHeading_ni149_133";
const cardDescription = "_cardDescription_ni149_140";
const cardActions = "_cardActions_ni149_147";
const cardApiKey = "_cardApiKey_ni149_156";
const style0$1 = {
  cardLink,
  cardHeading,
  cardDescription,
  cardActions,
  cardApiKey
};
const cssModules$1 = {
  "$style": style0$1
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = { style: { fontSize: "var(--font-size-s)", color: "var(--color-text-light)" } };
const _hoisted_2 = ["textContent"];
const _hoisted_3 = ["textContent"];
const _hoisted_4 = { class: "mt-m text-right" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsApiView",
  setup(__props) {
    const settingsStore = useSettingsStore();
    const uiStore = useUIStore();
    const cloudPlanStore = useCloudPlanStore();
    const { showError, showMessage } = useToast();
    const { confirm } = useMessage();
    const documentTitle = useDocumentTitle();
    const i18n = useI18n();
    const { goToUpgrade } = usePageRedirectionHelper();
    const telemetry = useTelemetry();
    const loading = ref(false);
    const apiKeysStore = useApiKeysStore();
    const { getAndCacheApiKeys, deleteApiKey, getApiKeyAvailableScopes } = apiKeysStore;
    const { apiKeysSortByCreationDate } = storeToRefs(apiKeysStore);
    const { isSwaggerUIEnabled, publicApiPath, publicApiLatestVersion } = settingsStore;
    const { baseUrl } = useRootStore();
    const { isPublicApiEnabled } = settingsStore;
    const apiDocsURL = ref("");
    const onCreateApiKey = async () => {
      telemetry.track("User clicked create API key button");
      uiStore.openModalWithData({
        name: API_KEY_CREATE_OR_EDIT_MODAL_KEY,
        data: { mode: "new" }
      });
    };
    onMounted(async () => {
      documentTitle.set(i18n.baseText("settings.api"));
      apiDocsURL.value = isSwaggerUIEnabled ? `${baseUrl}${publicApiPath}/v${publicApiLatestVersion}/docs` : `https://${DOCS_DOMAIN}/api/api-reference/`;
      if (!isPublicApiEnabled) return;
      await getApiKeysAndScopes();
    });
    function onUpgrade() {
      void goToUpgrade("settings-n8n-api", "upgrade-api", "redirect");
    }
    async function getApiKeysAndScopes() {
      try {
        loading.value = true;
        await Promise.all([getAndCacheApiKeys(), getApiKeyAvailableScopes()]);
      } catch (error) {
        showError(error, i18n.baseText("settings.api.view.error"));
      } finally {
        loading.value = false;
      }
    }
    async function onDelete(id) {
      const confirmed = await confirm(
        i18n.baseText("settings.api.delete.description"),
        i18n.baseText("settings.api.delete.title"),
        {
          confirmButtonText: i18n.baseText("settings.api.delete.button"),
          cancelButtonText: i18n.baseText("generic.cancel")
        }
      );
      if (confirmed === MODAL_CONFIRM) {
        try {
          await deleteApiKey(id);
          showMessage({
            title: i18n.baseText("settings.api.delete.toast"),
            type: "success"
          });
        } catch (e) {
          showError(e, i18n.baseText("settings.api.delete.error"));
        } finally {
          telemetry.track("User clicked delete API key button");
        }
      }
    }
    function onEdit(id) {
      uiStore.openModalWithData({
        name: API_KEY_CREATE_OR_EDIT_MODAL_KEY,
        data: { mode: "edit", activeId: id }
      });
    }
    return (_ctx, _cache) => {
      const _component_n8n_heading = resolveComponent("n8n-heading");
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_n8n_text = resolveComponent("n8n-text");
      const _component_ApiKeyCard = __unplugin_components_0;
      const _component_el_col = resolveComponent("el-col");
      const _component_el_row = resolveComponent("el-row");
      const _component_N8nText = resolveComponent("N8nText");
      const _component_n8n_link = resolveComponent("n8n-link");
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_n8n_action_box = resolveComponent("n8n-action-box");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          createVNode(_component_n8n_heading, { size: "2xlarge" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("settings.api")) + " ", 1),
              createBaseVNode("span", _hoisted_1, " (" + toDisplayString(unref(i18n).baseText("generic.beta")) + ") ", 1)
            ]),
            _: 1
          })
        ], 2),
        unref(isPublicApiEnabled) && unref(apiKeysSortByCreationDate).length ? (openBlock(), createElementBlock("p", {
          key: 0,
          class: normalizeClass(_ctx.$style.topHint)
        }, [
          createVNode(_component_n8n_text, null, {
            default: withCtx(() => [
              createVNode(_component_i18n_t, {
                keypath: "settings.api.view.info",
                tag: "span"
              }, {
                apiAction: withCtx(() => [
                  createBaseVNode("a", {
                    "data-test-id": "api-docs-link",
                    href: "https://docs.n8n.io/api",
                    target: "_blank",
                    textContent: toDisplayString(unref(i18n).baseText("settings.api.view.info.api"))
                  }, null, 8, _hoisted_2)
                ]),
                webhookAction: withCtx(() => [
                  createBaseVNode("a", {
                    "data-test-id": "webhook-docs-link",
                    href: "https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/",
                    target: "_blank",
                    textContent: toDisplayString(unref(i18n).baseText("settings.api.view.info.webhook"))
                  }, null, 8, _hoisted_3)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.apiKeysContainer)
        }, [
          unref(apiKeysSortByCreationDate).length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(apiKeysSortByCreationDate), (apiKey, index) => {
            return openBlock(), createBlock(_component_el_row, {
              key: apiKey.id,
              gutter: 10,
              class: normalizeClass([{ [_ctx.$style.destinationItem]: index !== unref(apiKeysSortByCreationDate).length - 1 }])
            }, {
              default: withCtx(() => [
                createVNode(_component_el_col, null, {
                  default: withCtx(() => [
                    createVNode(_component_ApiKeyCard, {
                      "api-key": apiKey,
                      onDelete,
                      onEdit
                    }, null, 8, ["api-key"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["class"]);
          }), 128)) : createCommentVNode("", true)
        ], 2),
        unref(isPublicApiEnabled) && unref(apiKeysSortByCreationDate).length ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.BottomHint)
        }, [
          createVNode(_component_N8nText, {
            size: "small",
            color: "text-light"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText(
                `settings.api.view.${unref(settingsStore).isSwaggerUIEnabled ? "tryapi" : "more-details"}`
              )), 1)
            ]),
            _: 1
          }),
          _cache[0] || (_cache[0] = createTextVNode(" " + toDisplayString(" ") + " ")),
          unref(isSwaggerUIEnabled) ? (openBlock(), createBlock(_component_n8n_link, {
            key: 0,
            "data-test-id": "api-playground-link",
            to: apiDocsURL.value,
            "new-window": true,
            size: "small"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.view.apiPlayground")), 1)
            ]),
            _: 1
          }, 8, ["to"])) : (openBlock(), createBlock(_component_n8n_link, {
            key: 1,
            "data-test-id": "api-endpoint-docs-link",
            to: apiDocsURL.value,
            "new-window": true,
            size: "small"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText(`settings.api.view.external-docs`)), 1)
            ]),
            _: 1
          }, 8, ["to"]))
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_4, [
          unref(isPublicApiEnabled) && unref(apiKeysSortByCreationDate).length ? (openBlock(), createBlock(_component_n8n_button, {
            key: 0,
            size: "large",
            onClick: onCreateApiKey
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("settings.api.create.button")), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        !unref(isPublicApiEnabled) && unref(cloudPlanStore).userIsTrialing ? (openBlock(), createBlock(_component_n8n_action_box, {
          key: 2,
          "data-test-id": "public-api-upgrade-cta",
          heading: unref(i18n).baseText("settings.api.trial.upgradePlan.title"),
          description: unref(i18n).baseText("settings.api.trial.upgradePlan.description"),
          "button-text": unref(i18n).baseText("settings.api.trial.upgradePlan.cta"),
          "onClick:button": onUpgrade
        }, null, 8, ["heading", "description", "button-text"])) : createCommentVNode("", true),
        unref(isPublicApiEnabled) && !unref(apiKeysSortByCreationDate).length ? (openBlock(), createBlock(_component_n8n_action_box, {
          key: 3,
          "button-text": unref(i18n).baseText(loading.value ? "settings.api.create.button.loading" : "settings.api.create.button"),
          description: unref(i18n).baseText("settings.api.create.description"),
          "onClick:button": onCreateApiKey
        }, null, 8, ["button-text", "description"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const header = "_header_1hiim_123";
const card = "_card_1hiim_133";
const destinationItem = "_destinationItem_1hiim_137";
const topHint = "_topHint_1hiim_148";
const BottomHint = "_BottomHint_1hiim_159";
const apiKeysContainer = "_apiKeysContainer_1hiim_164";
const style0 = {
  header,
  card,
  destinationItem,
  "delete": "_delete_1hiim_141",
  topHint,
  BottomHint,
  apiKeysContainer
};
const cssModules = {
  "$style": style0
};
const SettingsApiView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  SettingsApiView as default
};

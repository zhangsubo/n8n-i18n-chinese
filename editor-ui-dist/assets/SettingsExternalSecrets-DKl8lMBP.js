import { d as defineComponent, bO as useExternalSecretsStore, L as useUIStore, a as useToast, bI as toRef, q as computed, dj as useExternalSecretsProvider, c as useI18n, aM as DateTime, dk as isDateObject, o as onMounted, h as resolveComponent, e as createBlock, g as openBlock, n as normalizeClass, w as withCtx, k as createBaseVNode, j as createVNode, i as createElementBlock, f as createCommentVNode, dl as _sfc_main$2, l as createTextVNode, t as toDisplayString, m as unref, dm as ExternalSecretsProviderConnectionSwitch, z as nextTick, dn as EXTERNAL_SECRETS_PROVIDER_MODAL_KEY, _ as _export_sfc, a6 as useDocumentTitle, a8 as usePageRedirectionHelper, F as Fragment, D as renderList } from "./index-Dz5zUm_l.js";
const _hoisted_1$1 = { key: 0 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ExternalSecretsProviderCard.ee",
  props: {
    provider: {}
  },
  setup(__props) {
    const props = __props;
    const externalSecretsStore = useExternalSecretsStore();
    const i18n = useI18n();
    const uiStore = useUIStore();
    const toast = useToast();
    const provider = toRef(props, "provider");
    const providerData = computed(() => provider.value.data ?? {});
    const { connectionState, testConnection, setConnectionState } = useExternalSecretsProvider(
      provider,
      providerData
    );
    const actionDropdownOptions = computed(() => [
      {
        value: "setup",
        label: i18n.baseText("settings.externalSecrets.card.actionDropdown.setup")
      },
      ...props.provider.connected ? [
        {
          value: "reload",
          label: i18n.baseText("settings.externalSecrets.card.actionDropdown.reload")
        }
      ] : []
    ]);
    const canConnect = computed(() => {
      return props.provider.connected || Object.keys(providerData.value).length > 0;
    });
    const formattedDate = computed(() => {
      return DateTime.fromISO(
        isDateObject(provider.value.connectedAt) ? provider.value.connectedAt.toISOString() : provider.value.connectedAt || (/* @__PURE__ */ new Date()).toISOString()
      ).toFormat("dd LLL yyyy");
    });
    onMounted(() => {
      setConnectionState(props.provider.state);
    });
    async function onBeforeConnectionUpdate() {
      if (props.provider.connected) {
        return true;
      }
      await externalSecretsStore.getProvider(props.provider.name);
      await nextTick();
      const status = await testConnection();
      return status !== "error";
    }
    function openExternalSecretProvider() {
      uiStore.openModalWithData({
        name: EXTERNAL_SECRETS_PROVIDER_MODAL_KEY,
        data: { name: props.provider.name }
      });
    }
    async function reloadProvider() {
      try {
        await externalSecretsStore.reloadProvider(props.provider.name);
        toast.showMessage({
          title: i18n.baseText("settings.externalSecrets.card.reload.success.title"),
          message: i18n.baseText("settings.externalSecrets.card.reload.success.description", {
            interpolate: { provider: props.provider.displayName }
          }),
          type: "success"
        });
      } catch (error) {
        toast.showError(error, i18n.baseText("error"));
      }
    }
    async function onActionDropdownClick(id) {
      switch (id) {
        case "setup":
          openExternalSecretProvider();
          break;
        case "reload":
          await reloadProvider();
          break;
      }
    }
    return (_ctx, _cache) => {
      const _component_n8n_text = resolveComponent("n8n-text");
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_N8nBadge = resolveComponent("N8nBadge");
      const _component_n8n_action_toggle = resolveComponent("n8n-action-toggle");
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_n8n_card = resolveComponent("n8n-card");
      return openBlock(), createBlock(_component_n8n_card, {
        class: normalizeClass(_ctx.$style.card)
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.cardBody)
          }, [
            createVNode(_sfc_main$2, {
              class: normalizeClass(_ctx.$style.cardImage),
              provider: provider.value
            }, null, 8, ["class", "provider"]),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.cardContent)
            }, [
              createVNode(_component_n8n_text, { bold: "" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(provider.value.displayName), 1)
                ]),
                _: 1
              }),
              provider.value.connected ? (openBlock(), createBlock(_component_n8n_text, {
                key: 0,
                color: "text-light",
                size: "small"
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.secretsCount", {
                    interpolate: {
                      count: `${unref(externalSecretsStore).secrets[provider.value.name]?.length}`
                    }
                  })), 1),
                  _cache[1] || (_cache[1] = createTextVNode(" | ")),
                  createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.connectedAt", {
                    interpolate: {
                      date: formattedDate.value
                    }
                  })), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ], 2),
            provider.value.name === "infisical" ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
              createVNode(_component_font_awesome_icon, {
                class: normalizeClass(_ctx.$style["warningTriangle"]),
                icon: "exclamation-triangle"
              }, null, 8, ["class"]),
              createVNode(_component_N8nBadge, {
                class: "mr-xs",
                theme: "tertiary",
                bold: "",
                "data-test-id": "card-badge"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.deprecated")), 1)
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            canConnect.value ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.$style.cardActions)
            }, [
              createVNode(ExternalSecretsProviderConnectionSwitch, {
                provider: provider.value,
                "before-update": onBeforeConnectionUpdate,
                disabled: unref(connectionState) === "error" && !provider.value.connected
              }, null, 8, ["provider", "disabled"]),
              createVNode(_component_n8n_action_toggle, {
                class: "ml-s",
                theme: "dark",
                actions: actionDropdownOptions.value,
                onAction: onActionDropdownClick
              }, null, 8, ["actions"])
            ], 2)) : (openBlock(), createBlock(_component_n8n_button, {
              key: 2,
              type: "tertiary",
              onClick: _cache[0] || (_cache[0] = ($event) => openExternalSecretProvider())
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.setUp")), 1)
              ]),
              _: 1
            }))
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const card = "_card_lblwj_123";
const cardImage = "_cardImage_lblwj_128";
const cardBody = "_cardBody_lblwj_133";
const cardContent = "_cardContent_lblwj_139";
const cardActions = "_cardActions_lblwj_146";
const warningTriangle = "_warningTriangle_lblwj_153";
const style0 = {
  card,
  cardImage,
  cardBody,
  cardContent,
  cardActions,
  warningTriangle
};
const cssModules = {
  "$style": style0
};
const ExternalSecretsProviderCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules]]);
const _hoisted_1 = { class: "pb-3xl" };
const _hoisted_2 = {
  key: 0,
  "data-test-id": "external-secrets-content-licensed"
};
const _hoisted_3 = ["href"];
const _hoisted_4 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsExternalSecrets",
  setup(__props) {
    const i18n = useI18n();
    const externalSecretsStore = useExternalSecretsStore();
    const toast = useToast();
    const documentTitle = useDocumentTitle();
    const pageRedirectionHelper = usePageRedirectionHelper();
    const sortedProviders = computed(() => {
      return [...externalSecretsStore.providers].sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    });
    onMounted(() => {
      documentTitle.set(i18n.baseText("settings.externalSecrets.title"));
      if (!externalSecretsStore.isEnterpriseExternalSecretsEnabled) return;
      try {
        void externalSecretsStore.fetchAllSecrets();
        void externalSecretsStore.getProviders();
      } catch (error) {
        toast.showError(error, i18n.baseText("error"));
      }
    });
    function goToUpgrade() {
      void pageRedirectionHelper.goToUpgrade("external-secrets", "upgrade-external-secrets");
    }
    return (_ctx, _cache) => {
      const _component_n8n_heading = resolveComponent("n8n-heading");
      const _component_n8n_callout = resolveComponent("n8n-callout");
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_n8n_action_box = resolveComponent("n8n-action-box");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_n8n_heading, { size: "2xlarge" }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.title")), 1)
          ]),
          _: 1
        }),
        unref(externalSecretsStore).isEnterpriseExternalSecretsEnabled ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(_component_n8n_callout, {
            theme: "secondary",
            class: "mt-2xl mb-l"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.info")) + " ", 1),
              createBaseVNode("a", {
                href: unref(i18n).baseText("settings.externalSecrets.docs"),
                target: "_blank"
              }, toDisplayString(unref(i18n).baseText("settings.externalSecrets.info.link")), 9, _hoisted_3)
            ]),
            _: 1
          }),
          (openBlock(true), createElementBlock(Fragment, null, renderList(sortedProviders.value, (provider) => {
            return openBlock(), createBlock(ExternalSecretsProviderCard, {
              key: provider.name,
              provider
            }, null, 8, ["provider"]);
          }), 128))
        ])) : (openBlock(), createBlock(_component_n8n_action_box, {
          key: 1,
          class: "mt-2xl mb-l",
          "data-test-id": "external-secrets-content-unlicensed",
          "button-text": unref(i18n).baseText("settings.externalSecrets.actionBox.buttonText"),
          onClick: goToUpgrade
        }, {
          heading: withCtx(() => [
            createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.actionBox.title")), 1)
          ]),
          description: withCtx(() => [
            createVNode(_component_i18n_t, { keypath: "settings.externalSecrets.actionBox.description" }, {
              link: withCtx(() => [
                createBaseVNode("a", {
                  href: unref(i18n).baseText("settings.externalSecrets.docs"),
                  target: "_blank"
                }, toDisplayString(unref(i18n).baseText("settings.externalSecrets.actionBox.description.link")), 9, _hoisted_4)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["button-text"]))
      ]);
    };
  }
});
export {
  _sfc_main as default
};

import { d as defineComponent, L as useUIStore, cA as COMMUNITY_PACKAGE_MANAGE_ACTIONS, c as useI18n, h as resolveComponent, i as createElementBlock, g as openBlock, n as normalizeClass, f as createCommentVNode, j as createVNode, k as createBaseVNode, w as withCtx, l as createTextVNode, t as toDisplayString, m as unref, F as Fragment, D as renderList, e as createBlock, ai as useTelemetry, cB as NPM_PACKAGE_DOCS_BASE_URL, _ as _export_sfc, r as ref, b as useRouter, T as usePushConnectionStore, a as useToast, a6 as useDocumentTitle, cC as useCommunityNodesStore, q as computed, cD as COMMUNITY_NODES_INSTALLATION_DOCS_URL, aB as onBeforeMount, o as onMounted, y as onBeforeUnmount, aR as useExternalHooks, cE as COMMUNITY_PACKAGE_INSTALL_MODAL_KEY } from "./index-Dz5zUm_l.js";
import { u as usePushConnection } from "./usePushConnection-CUE8Ai8F.js";
import "./global-link-actions-BQ67iCJu.js";
import "./easyAiWorkflowUtils-uSZcENOY.js";
const _hoisted_1 = { key: 0 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CommunityPackageCard",
  props: {
    communityPackage: { default: null },
    loading: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { openCommunityPackageUpdateConfirmModal, openCommunityPackageUninstallConfirmModal } = useUIStore();
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const packageActions = [
      {
        label: i18n.baseText("settings.communityNodes.viewDocsAction.label"),
        value: COMMUNITY_PACKAGE_MANAGE_ACTIONS.VIEW_DOCS,
        type: "external-link"
      },
      {
        label: i18n.baseText("settings.communityNodes.uninstallAction.label"),
        value: COMMUNITY_PACKAGE_MANAGE_ACTIONS.UNINSTALL
      }
    ];
    async function onAction(value) {
      if (!props.communityPackage) return;
      switch (value) {
        case COMMUNITY_PACKAGE_MANAGE_ACTIONS.VIEW_DOCS:
          telemetry.track("user clicked to browse the cnr package documentation", {
            package_name: props.communityPackage.packageName,
            package_version: props.communityPackage.installedVersion
          });
          window.open(`${NPM_PACKAGE_DOCS_BASE_URL}${props.communityPackage.packageName}`, "_blank");
          break;
        case COMMUNITY_PACKAGE_MANAGE_ACTIONS.UNINSTALL:
          openCommunityPackageUninstallConfirmModal(props.communityPackage.packageName);
          break;
      }
    }
    function onUpdateClick() {
      if (!props.communityPackage) return;
      openCommunityPackageUpdateConfirmModal(props.communityPackage.packageName);
    }
    return (_ctx, _cache) => {
      const _component_n8n_loading = resolveComponent("n8n-loading");
      const _component_n8n_text = resolveComponent("n8n-text");
      const _component_n8n_icon = resolveComponent("n8n-icon");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_n8n_action_toggle = resolveComponent("n8n-action-toggle");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.cardContainer),
        "data-test-id": "community-package-card"
      }, [
        _ctx.loading ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.cardSkeleton)
        }, [
          createVNode(_component_n8n_loading, {
            class: normalizeClass(_ctx.$style.loader),
            variant: "p",
            rows: 1
          }, null, 8, ["class"]),
          createVNode(_component_n8n_loading, {
            class: normalizeClass(_ctx.$style.loader),
            variant: "p",
            rows: 1
          }, null, 8, ["class"])
        ], 2)) : _ctx.communityPackage ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.packageCard)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.cardInfoContainer)
          }, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.cardTitle)
            }, [
              createVNode(_component_n8n_text, {
                bold: true,
                size: "large"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.communityPackage.packageName), 1)
                ]),
                _: 1
              })
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.cardSubtitle)
            }, [
              createVNode(_component_n8n_text, {
                bold: true,
                size: "small",
                color: "text-light"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("settings.communityNodes.packageNodes.label", {
                    adjustToNumber: _ctx.communityPackage.installedNodes.length
                  })) + ":  ", 1)
                ]),
                _: 1
              }),
              createVNode(_component_n8n_text, {
                size: "small",
                color: "text-light"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.communityPackage.installedNodes, (node, index) => {
                    return openBlock(), createElementBlock("span", {
                      key: node.name
                    }, [
                      createTextVNode(toDisplayString(node.name), 1),
                      index != _ctx.communityPackage.installedNodes.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_1, ",")) : createCommentVNode("", true)
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ], 2)
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.cardControlsContainer)
          }, [
            createVNode(_component_n8n_text, {
              bold: true,
              size: "large",
              color: "text-light"
            }, {
              default: withCtx(() => [
                createTextVNode(" v" + toDisplayString(_ctx.communityPackage.installedVersion), 1)
              ]),
              _: 1
            }),
            _ctx.communityPackage.failedLoading === true ? (openBlock(), createBlock(_component_n8n_tooltip, {
              key: 0,
              placement: "top"
            }, {
              content: withCtx(() => [
                createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("settings.communityNodes.failedToLoad.tooltip")), 1)
              ]),
              default: withCtx(() => [
                createVNode(_component_n8n_icon, {
                  icon: "exclamation-triangle",
                  color: "danger",
                  size: "large"
                })
              ]),
              _: 1
            })) : _ctx.communityPackage.updateAvailable ? (openBlock(), createBlock(_component_n8n_tooltip, {
              key: 1,
              placement: "top"
            }, {
              content: withCtx(() => [
                createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("settings.communityNodes.updateAvailable.tooltip")), 1)
              ]),
              default: withCtx(() => [
                createVNode(_component_n8n_button, {
                  outline: "",
                  label: "Update",
                  onClick: onUpdateClick
                })
              ]),
              _: 1
            })) : (openBlock(), createBlock(_component_n8n_tooltip, {
              key: 2,
              placement: "top"
            }, {
              content: withCtx(() => [
                createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("settings.communityNodes.upToDate.tooltip")), 1)
              ]),
              default: withCtx(() => [
                createVNode(_component_n8n_icon, {
                  icon: "check-circle",
                  color: "text-light",
                  size: "large"
                })
              ]),
              _: 1
            })),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.cardActions)
            }, [
              createVNode(_component_n8n_action_toggle, {
                actions: packageActions,
                onAction
              })
            ], 2)
          ], 2)
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const cardContainer = "_cardContainer_1ih2c_123";
const packageCard = "_packageCard_1ih2c_131";
const cardSkeleton = "_cardSkeleton_1ih2c_132";
const loader = "_loader_1ih2c_146";
const cardInfoContainer = "_cardInfoContainer_1ih2c_157";
const cardTitle = "_cardTitle_1ih2c_162";
const cardSubtitle = "_cardSubtitle_1ih2c_169";
const cardControlsContainer = "_cardControlsContainer_1ih2c_174";
const cardActions = "_cardActions_1ih2c_180";
const style0$1 = {
  cardContainer,
  packageCard,
  cardSkeleton,
  loader,
  cardInfoContainer,
  cardTitle,
  cardSubtitle,
  cardControlsContainer,
  cardActions
};
const cssModules$1 = {
  "$style": style0$1
};
const CommunityPackageCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const PACKAGE_COUNT_THRESHOLD = 31;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsCommunityNodesView",
  setup(__props) {
    const loading = ref(false);
    const router = useRouter();
    const pushConnection = usePushConnection({ router });
    const pushStore = usePushConnectionStore();
    const externalHooks = useExternalHooks();
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const toast = useToast();
    const documentTitle = useDocumentTitle();
    const communityNodesStore = useCommunityNodesStore();
    const uiStore = useUIStore();
    const getEmptyStateDescription = computed(() => {
      const packageCount = communityNodesStore.availablePackageCount;
      return packageCount < PACKAGE_COUNT_THRESHOLD ? i18n.baseText("settings.communityNodes.empty.description.no-packages", {
        interpolate: {
          docURL: COMMUNITY_NODES_INSTALLATION_DOCS_URL
        }
      }) : i18n.baseText("settings.communityNodes.empty.description", {
        interpolate: {
          docURL: COMMUNITY_NODES_INSTALLATION_DOCS_URL,
          count: (Math.floor(packageCount / 10) * 10).toString()
        }
      });
    });
    const getEmptyStateButtonText = computed(
      () => i18n.baseText("settings.communityNodes.empty.installPackageLabel")
    );
    const actionBoxConfig = computed(() => {
      return {
        calloutText: "",
        calloutTheme: "",
        hideButton: false
      };
    });
    const onClickEmptyStateButton = () => {
      openInstallModal();
    };
    const openInstallModal = () => {
      const telemetryPayload = {
        is_empty_state: communityNodesStore.getInstalledPackages.length === 0
      };
      telemetry.track("user clicked cnr install button", telemetryPayload);
      void externalHooks.run("settingsCommunityNodesView.openInstallModal", telemetryPayload);
      uiStore.openModal(COMMUNITY_PACKAGE_INSTALL_MODAL_KEY);
    };
    onBeforeMount(() => {
      pushConnection.initialize();
      pushStore.pushConnect();
    });
    onMounted(async () => {
      documentTitle.set(i18n.baseText("settings.communityNodes"));
      try {
        loading.value = true;
        await communityNodesStore.fetchInstalledPackages();
        const installedPackages = communityNodesStore.getInstalledPackages;
        const packagesToUpdate = installedPackages.filter(
          (p) => p.updateAvailable
        );
        telemetry.track("user viewed cnr settings page", {
          num_of_packages_installed: installedPackages.length,
          installed_packages: installedPackages.map((p) => {
            return {
              package_name: p.packageName,
              package_version: p.installedVersion,
              package_nodes: p.installedNodes.map((node) => `${node.name}-v${node.latestVersion}`),
              is_update_available: p.updateAvailable !== void 0
            };
          }),
          packages_to_update: packagesToUpdate.map((p) => {
            return {
              package_name: p.packageName,
              package_version_current: p.installedVersion,
              package_version_available: p.updateAvailable
            };
          }),
          number_of_updates_available: packagesToUpdate.length
        });
      } catch (error) {
        toast.showError(
          error,
          i18n.baseText("settings.communityNodes.fetchError.title"),
          i18n.baseText("settings.communityNodes.fetchError.message")
        );
      } finally {
        loading.value = false;
      }
      try {
        await communityNodesStore.fetchAvailableCommunityPackageCount();
      } finally {
        loading.value = false;
      }
    });
    onBeforeUnmount(() => {
      pushStore.pushDisconnect();
      pushConnection.terminate();
    });
    return (_ctx, _cache) => {
      const _component_n8n_heading = resolveComponent("n8n-heading");
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_n8n_action_box = resolveComponent("n8n-action-box");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.headingContainer)
        }, [
          createVNode(_component_n8n_heading, { size: "2xlarge" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("settings.communityNodes")), 1)
            ]),
            _: 1
          }),
          unref(communityNodesStore).getInstalledPackages.length > 0 && !loading.value ? (openBlock(), createBlock(_component_n8n_button, {
            key: 0,
            label: unref(i18n).baseText("settings.communityNodes.installModal.installButton.label"),
            size: "large",
            onClick: openInstallModal
          }, null, 8, ["label"])) : createCommentVNode("", true)
        ], 2),
        loading.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.cardsContainer)
        }, [
          (openBlock(), createElementBlock(Fragment, null, renderList(2, (n) => {
            return createVNode(CommunityPackageCard, {
              key: "index-" + n,
              loading: true
            });
          }), 64))
        ], 2)) : unref(communityNodesStore).getInstalledPackages.length === 0 ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.actionBoxContainer)
        }, [
          createVNode(_component_n8n_action_box, {
            heading: unref(i18n).baseText("settings.communityNodes.empty.title"),
            description: getEmptyStateDescription.value,
            "button-text": getEmptyStateButtonText.value,
            "callout-text": actionBoxConfig.value.calloutText,
            "callout-theme": actionBoxConfig.value.calloutTheme,
            "onClick:button": onClickEmptyStateButton
          }, null, 8, ["heading", "description", "button-text", "callout-text", "callout-theme"])
        ], 2)) : (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(_ctx.$style.cardsContainer)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(communityNodesStore).getInstalledPackages, (communityPackage) => {
            return openBlock(), createBlock(CommunityPackageCard, {
              key: communityPackage.packageName,
              "community-package": communityPackage
            }, null, 8, ["community-package"]);
          }), 128))
        ], 2))
      ], 2);
    };
  }
});
const container = "_container_1uf27_123";
const headingContainer = "_headingContainer_1uf27_131";
const loadingContainer = "_loadingContainer_1uf27_136";
const actionBoxContainer = "_actionBoxContainer_1uf27_141";
const cardsContainer = "_cardsContainer_1uf27_145";
const style0 = {
  container,
  headingContainer,
  loadingContainer,
  actionBoxContainer,
  cardsContainer
};
const cssModules = {
  "$style": style0
};
const SettingsCommunityNodesView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  SettingsCommunityNodesView as default
};

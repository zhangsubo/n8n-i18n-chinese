import { ab as hasPermission, d as defineComponent, b as useRouter, W as useRoute, a1 as useRootStore, p as useSettingsStore, L as useUIStore, q as computed, V as VIEWS, c as useI18n, h as resolveComponent, i as createElementBlock, g as openBlock, n as normalizeClass, j as createVNode, w as withCtx, k as createBaseVNode, m as unref, aY as ABOUT_MODAL_KEY, l as createTextVNode, t as toDisplayString, _ as _export_sfc, r as ref, o as onMounted, b7 as mergeProps, ck as isRouteLocationRaw } from "./index-Dhp_73Xq.js";
function useUserHelpers(router, route) {
  const canUserAccessRouteByName = (name) => {
    const resolvedRoute = router.resolve({ name });
    return canUserAccessRoute(resolvedRoute);
  };
  const canUserAccessCurrentRoute = () => {
    return canUserAccessRoute(route);
  };
  const canUserAccessRoute = (route2) => {
    const middleware = route2.meta?.middleware;
    const middlewareOptions = route2.meta?.middlewareOptions;
    if (!middleware) {
      return true;
    }
    return hasPermission(middleware, middlewareOptions);
  };
  return {
    canUserAccessRouteByName,
    canUserAccessCurrentRoute,
    canUserAccessRoute
  };
}
const _hoisted_1 = { class: "mr-xs" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SettingsSidebar",
  emits: ["return"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const router = useRouter();
    const route = useRoute();
    const i18n = useI18n();
    const { canUserAccessRouteByName } = useUserHelpers(router, route);
    const rootStore = useRootStore();
    const settingsStore = useSettingsStore();
    const uiStore = useUIStore();
    const sidebarMenuItems = computed(() => {
      const menuItems = [
        {
          id: "settings-usage-and-plan",
          icon: "chart-bar",
          label: i18n.baseText("settings.usageAndPlan.title"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.USAGE),
          route: { to: { name: VIEWS.USAGE } }
        },
        {
          id: "settings-personal",
          icon: "user-circle",
          label: i18n.baseText("settings.personal"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.PERSONAL_SETTINGS),
          route: { to: { name: VIEWS.PERSONAL_SETTINGS } }
        },
        {
          id: "settings-users",
          icon: "user-friends",
          label: i18n.baseText("settings.users"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.USERS_SETTINGS),
          route: { to: { name: VIEWS.USERS_SETTINGS } }
        },
        {
          id: "settings-api",
          icon: "plug",
          label: i18n.baseText("settings.n8napi"),
          position: "top",
          available: settingsStore.isPublicApiEnabled && canUserAccessRouteByName(VIEWS.API_SETTINGS),
          route: { to: { name: VIEWS.API_SETTINGS } }
        },
        {
          id: "settings-external-secrets",
          icon: "vault",
          label: i18n.baseText("settings.externalSecrets.title"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.EXTERNAL_SECRETS_SETTINGS),
          route: { to: { name: VIEWS.EXTERNAL_SECRETS_SETTINGS } }
        },
        {
          id: "settings-source-control",
          icon: "code-branch",
          label: i18n.baseText("settings.sourceControl.title"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.SOURCE_CONTROL),
          route: { to: { name: VIEWS.SOURCE_CONTROL } }
        },
        {
          id: "settings-sso",
          icon: "user-lock",
          label: i18n.baseText("settings.sso"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.SSO_SETTINGS),
          route: { to: { name: VIEWS.SSO_SETTINGS } }
        },
        {
          id: "settings-ldap",
          icon: "network-wired",
          label: i18n.baseText("settings.ldap"),
          position: "top",
          available: canUserAccessRouteByName(VIEWS.LDAP_SETTINGS),
          route: { to: { name: VIEWS.LDAP_SETTINGS } }
        },
        {
          id: "settings-workersview",
          icon: "project-diagram",
          label: i18n.baseText("mainSidebar.workersView"),
          position: "top",
          available: settingsStore.isQueueModeEnabled && hasPermission(["rbac"], { rbac: { scope: "workersView:manage" } }),
          route: { to: { name: VIEWS.WORKER_VIEW } }
        }
      ];
      menuItems.push({
        id: "settings-log-streaming",
        icon: "sign-in-alt",
        label: i18n.baseText("settings.log-streaming"),
        position: "top",
        available: canUserAccessRouteByName(VIEWS.LOG_STREAMING_SETTINGS),
        route: { to: { name: VIEWS.LOG_STREAMING_SETTINGS } }
      });
      menuItems.push({
        id: "settings-community-nodes",
        icon: "cube",
        label: i18n.baseText("settings.communityNodes"),
        position: "top",
        available: canUserAccessRouteByName(VIEWS.COMMUNITY_NODES),
        route: { to: { name: VIEWS.COMMUNITY_NODES } }
      });
      return menuItems;
    });
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_n8n_heading = resolveComponent("n8n-heading");
      const _component_n8n_link = resolveComponent("n8n-link");
      const _component_n8n_menu = resolveComponent("n8n-menu");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(_component_n8n_menu, { items: sidebarMenuItems.value }, {
          header: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.returnButton),
              "data-test-id": "settings-back",
              onClick: _cache[0] || (_cache[0] = ($event) => emit("return"))
            }, [
              createBaseVNode("i", _hoisted_1, [
                createVNode(_component_font_awesome_icon, { icon: "arrow-left" })
              ]),
              createVNode(_component_n8n_heading, {
                size: "large",
                bold: true
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("settings")), 1)
                ]),
                _: 1
              })
            ], 2)
          ]),
          menuSuffix: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.versionContainer)
            }, [
              createVNode(_component_n8n_link, {
                size: "small",
                onClick: _cache[1] || (_cache[1] = ($event) => unref(uiStore).openModal(unref(ABOUT_MODAL_KEY)))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("settings.version")) + " " + toDisplayString(unref(rootStore).versionCli), 1)
                ]),
                _: 1
              })
            ], 2)
          ]),
          _: 1
        }, 8, ["items"])
      ], 2);
    };
  }
});
const container$1 = "_container_lkskk_123";
const returnButton = "_returnButton_lkskk_132";
const versionContainer = "_versionContainer_lkskk_140";
const style0$1 = {
  container: container$1,
  returnButton,
  versionContainer
};
const cssModules$1 = {
  "$style": style0$1
};
const SettingsSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsView",
  setup(__props) {
    const router = useRouter();
    const previousRoute = ref();
    function onReturn() {
      const resolvedSettingsRoute = router.resolve({ name: VIEWS.SETTINGS });
      const resolvedPreviousRoute = isRouteLocationRaw(previousRoute.value) ? router.resolve(previousRoute.value) : null;
      const backRoute = !resolvedPreviousRoute || resolvedPreviousRoute.path.startsWith(resolvedSettingsRoute.path) ? { name: VIEWS.HOMEPAGE } : resolvedPreviousRoute;
      void router.push(backRoute);
    }
    onMounted(() => {
      previousRoute.value = router.options.history.state.back;
    });
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(SettingsSidebar, { onReturn }),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.contentContainer)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.content)
          }, [
            createVNode(_component_router_view, mergeProps({ name: "settingsView" }, _ctx.$attrs), null, 16)
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
const container = "_container_17p26_123";
const contentContainer = "_contentContainer_17p26_130 _container_17p26_123";
const content = "_content_17p26_130";
const style0 = {
  container,
  contentContainer,
  content
};
const cssModules = {
  "$style": style0
};
const SettingsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  SettingsView as default
};

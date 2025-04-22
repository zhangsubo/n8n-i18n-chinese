import { d as defineComponent, h as resolveComponent, i as createElementBlock, g as openBlock, n as normalizeClass, k as createBaseVNode, j as createVNode, w as withCtx, l as createTextVNode, t as toDisplayString, x as renderSlot, _ as _export_sfc, b as useRouter, aP as useTemplatesStore, e as createBlock, f as createCommentVNode, F as Fragment, D as renderList, bB as _sfc_main$2, m as unref, cU as filterTemplateNodes, c as useI18n, cV as _sfc_main$3, cW as abbreviateNumber } from "./index-Dhp_73Xq.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TemplateDetailsBlock",
  props: {
    title: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_n8n_heading = resolveComponent("n8n-heading");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.block)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          createVNode(_component_n8n_heading, {
            tag: "h3",
            size: "small",
            color: "text-base"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ]),
            _: 1
          })
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.content)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 2);
    };
  }
});
const block = "_block_1355k_123";
const header = "_header_1355k_127";
const content = "_content_1355k_132";
const style0$1 = {
  block,
  header,
  content
};
const cssModules$1 = {
  "$style": style0$1
};
const TemplateDetailsBlock = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
function isTemplatesWorkflow(template) {
  return !!template && "totalViews" in template;
}
function isFullTemplatesCollection(template) {
  return !!template && "description" in template && "categories" in template;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TemplateDetails",
  props: {
    template: {},
    blockTitle: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    const router = useRouter();
    const i18n = useI18n();
    const templatesStore = useTemplatesStore();
    const redirectToCategory = (id) => {
      templatesStore.resetSessionId();
      void router.push(`/templates?categories=${id}`);
    };
    const redirectToSearchPage = (node) => {
      templatesStore.resetSessionId();
      void router.push(`/templates?search=${node.displayName}`);
    };
    return (_ctx, _cache) => {
      const _component_n8n_loading = resolveComponent("n8n-loading");
      const _component_n8n_tags = resolveComponent("n8n-tags");
      const _component_n8n_text = resolveComponent("n8n-text");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_n8n_loading, {
          loading: _ctx.loading,
          rows: 5,
          variant: "p"
        }, null, 8, ["loading"]),
        !_ctx.loading && _ctx.template && _ctx.template.nodes.length > 0 ? (openBlock(), createBlock(TemplateDetailsBlock, {
          key: 0,
          title: _ctx.blockTitle
        }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.icons)
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filterTemplateNodes)(_ctx.template.nodes), (node) => {
                return openBlock(), createElementBlock("div", {
                  key: node.name,
                  class: normalizeClass(_ctx.$style.icon)
                }, [
                  createVNode(_sfc_main$2, {
                    "node-type": node,
                    size: 24,
                    "show-tooltip": true,
                    onClick: ($event) => redirectToSearchPage(node)
                  }, null, 8, ["node-type", "onClick"])
                ], 2);
              }), 128))
            ], 2)
          ]),
          _: 1
        }, 8, ["title"])) : createCommentVNode("", true),
        !_ctx.loading && unref(isFullTemplatesCollection)(_ctx.template) && _ctx.template.categories.length > 0 ? (openBlock(), createBlock(TemplateDetailsBlock, {
          key: 1,
          title: unref(i18n).baseText("template.details.categories")
        }, {
          default: withCtx(() => [
            createVNode(_component_n8n_tags, {
              tags: _ctx.template.categories,
              "onClick:tag": redirectToCategory
            }, null, 8, ["tags"])
          ]),
          _: 1
        }, 8, ["title"])) : createCommentVNode("", true),
        !_ctx.loading && _ctx.template ? (openBlock(), createBlock(TemplateDetailsBlock, {
          key: 2,
          title: unref(i18n).baseText("template.details.details")
        }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.text)
            }, [
              unref(isTemplatesWorkflow)(_ctx.template) ? (openBlock(), createBlock(_component_n8n_text, {
                key: 0,
                size: "small",
                color: "text-base"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("template.details.created")) + " ", 1),
                  createVNode(_sfc_main$3, {
                    date: _ctx.template.createdAt
                  }, null, 8, ["date"]),
                  createTextVNode(" " + toDisplayString(unref(i18n).baseText("template.details.by")) + " " + toDisplayString(_ctx.template.user ? _ctx.template.user.username : "n8n team"), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.text)
            }, [
              unref(isTemplatesWorkflow)(_ctx.template) && _ctx.template.totalViews !== 0 ? (openBlock(), createBlock(_component_n8n_text, {
                key: 0,
                size: "small",
                color: "text-base"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("template.details.viewed")) + " " + toDisplayString(unref(abbreviateNumber)(_ctx.template.totalViews)) + " " + toDisplayString(unref(i18n).baseText("template.details.times")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ], 2)
          ]),
          _: 1
        }, 8, ["title"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const icons = "_icons_2rr5g_123";
const icon = "_icon_2rr5g_123";
const text = "_text_2rr5g_134";
const style0 = {
  icons,
  icon,
  text
};
const cssModules = {
  "$style": style0
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  __unplugin_components_1 as _,
  isFullTemplatesCollection as i
};

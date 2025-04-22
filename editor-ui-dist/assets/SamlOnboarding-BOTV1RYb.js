import { d as defineComponent, b as useRouter, a as useToast, cy as useSSOStore, r as ref, bM as reactive, c as useI18n, e as createBlock, g as openBlock, V as VIEWS } from "./index-Dhp_73Xq.js";
import { A as AuthView } from "./AuthView-CRBiHUDw.js";
import "./Logo-dVBoO4Sy.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SamlOnboarding",
  setup(__props) {
    const router = useRouter();
    const locale = useI18n();
    const toast = useToast();
    const ssoStore = useSSOStore();
    const loading = ref(false);
    const FORM_CONFIG = reactive({
      title: locale.baseText("auth.signup.setupYourAccount"),
      buttonText: locale.baseText("auth.signup.finishAccountSetup"),
      inputs: [
        {
          name: "firstName",
          initialValue: ssoStore.userData?.firstName,
          properties: {
            label: locale.baseText("auth.firstName"),
            maxlength: 32,
            required: true,
            autocomplete: "given-name",
            capitalize: true
          }
        },
        {
          name: "lastName",
          initialValue: ssoStore.userData?.lastName,
          properties: {
            label: locale.baseText("auth.lastName"),
            maxlength: 32,
            required: true,
            autocomplete: "family-name",
            capitalize: true
          }
        }
      ]
    });
    const isFormWithFirstAndLastName = (values) => {
      return "firstName" in values && "lastName" in values;
    };
    const onSubmit = async (values) => {
      if (!isFormWithFirstAndLastName(values)) return;
      try {
        loading.value = true;
        await ssoStore.updateUser(values);
        await router.push({ name: VIEWS.HOMEPAGE });
      } catch (error) {
        loading.value = false;
        toast.showError(error, "Error", error.message);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(AuthView, {
        form: FORM_CONFIG,
        "form-loading": loading.value,
        onSubmit
      }, null, 8, ["form", "form-loading"]);
    };
  }
});
export {
  _sfc_main as default
};

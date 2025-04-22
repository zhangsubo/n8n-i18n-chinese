import { d as defineComponent, r as ref, cP as toRefs, p as useSettingsStore, o as onMounted, h as resolveComponent, i as createElementBlock, g as openBlock, n as normalizeClass, j as createVNode, m as unref, w as withCtx, k as createBaseVNode, l as createTextVNode, t as toDisplayString, c as useI18n, e as createBlock, f as createCommentVNode, cQ as MFA_FORM, M as MFA_AUTHENTICATION_CODE_INPUT_MAX_LENGTH, cR as MFA_AUTHENTICATION_RECOVERY_CODE_INPUT_MAX_LENGTH, cS as mfaEventBus, _ as _export_sfc, u as useUsersStore, aK as useCloudPlanStore, W as useRoute, b as useRouter, a as useToast, q as computed, bM as reactive, ai as useTelemetry, V as VIEWS, cT as MFA_AUTHENTICATION_REQUIRED_ERROR_CODE } from "./index-Dhp_73Xq.js";
import { A as AuthView } from "./AuthView-CRBiHUDw.js";
import { L as Logo } from "./Logo-dVBoO4Sy.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MfaView",
  props: {
    reportError: { type: Boolean }
  },
  emits: ["onFormChanged", "onBackClick", "submit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const hasAnyChanges = ref(false);
    const formBus = ref(mfaEventBus);
    const formInputs = ref(null);
    const showRecoveryCodeForm = ref(false);
    const verifyingMfaCode = ref(false);
    const formError2 = ref("");
    const { reportError } = toRefs(props);
    const i18 = useI18n();
    const emit = __emit;
    const formField = (name, label, placeholder, maxlength, focus = true) => {
      return {
        name,
        initialValue: "",
        properties: {
          label,
          placeholder,
          maxlength,
          capitalize: true,
          validateOnBlur: false,
          focusInitially: focus
        }
      };
    };
    const onRecoveryCodeClick = () => {
      formError2.value = "";
      showRecoveryCodeForm.value = true;
      hasAnyChanges.value = false;
      formInputs.value = [mfaRecoveryCodeFieldWithDefaults()];
      emit("onFormChanged", MFA_FORM.MFA_RECOVERY_CODE);
    };
    const onBackClick = () => {
      if (!showRecoveryCodeForm.value) {
        emit("onBackClick", MFA_FORM.MFA_TOKEN);
        return;
      }
      showRecoveryCodeForm.value = false;
      hasAnyChanges.value = true;
      formInputs.value = [mfaCodeFieldWithDefaults()];
      emit("onBackClick", MFA_FORM.MFA_RECOVERY_CODE);
    };
    const onSubmit = async (form) => {
      formError2.value = !showRecoveryCodeForm.value ? i18.baseText("mfa.code.invalid") : i18.baseText("mfa.recovery.invalid");
      emit("submit", form);
    };
    const onInput = ({ target: { value, name } }) => {
      const isSubmittingMfaCode = name === "mfaCode";
      const inputValidLength = isSubmittingMfaCode ? MFA_AUTHENTICATION_CODE_INPUT_MAX_LENGTH : MFA_AUTHENTICATION_RECOVERY_CODE_INPUT_MAX_LENGTH;
      if (value.length !== inputValidLength) {
        hasAnyChanges.value = false;
        return;
      }
      verifyingMfaCode.value = true;
      hasAnyChanges.value = true;
      const dataToSubmit = isSubmittingMfaCode ? { mfaCode: value, mfaRecoveryCode: "" } : { mfaCode: "", mfaRecoveryCode: value };
      onSubmit(dataToSubmit).catch(() => {
      }).finally(() => verifyingMfaCode.value = false);
    };
    const mfaRecoveryCodeFieldWithDefaults = () => {
      return formField(
        "mfaRecoveryCode",
        i18.baseText("mfa.recovery.input.label"),
        i18.baseText("mfa.recovery.input.placeholder"),
        MFA_AUTHENTICATION_RECOVERY_CODE_INPUT_MAX_LENGTH
      );
    };
    const mfaCodeFieldWithDefaults = () => {
      return formField(
        "mfaCode",
        i18.baseText("mfa.code.input.label"),
        i18.baseText("mfa.code.input.placeholder"),
        MFA_AUTHENTICATION_CODE_INPUT_MAX_LENGTH
      );
    };
    const onSaveClick = () => {
      formBus.value.emit("submit");
    };
    const {
      settings: { releaseChannel }
    } = useSettingsStore();
    onMounted(() => {
      formInputs.value = [mfaCodeFieldWithDefaults()];
    });
    return (_ctx, _cache) => {
      const _component_n8n_heading = resolveComponent("n8n-heading");
      const _component_n8n_form_inputs = resolveComponent("n8n-form-inputs");
      const _component_n8n_text = resolveComponent("n8n-text");
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_n8n_card = resolveComponent("n8n-card");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(Logo, {
          location: "authView",
          "release-channel": unref(releaseChannel)
        }, null, 8, ["release-channel"]),
        createVNode(_component_n8n_card, null, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.headerContainer)
            }, [
              createVNode(_component_n8n_heading, {
                size: "xlarge",
                color: "text-dark"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(showRecoveryCodeForm.value ? unref(i18).baseText("mfa.recovery.modal.title") : unref(i18).baseText("mfa.code.modal.title")), 1)
                ]),
                _: 1
              })
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass([_ctx.$style.formContainer, unref(reportError) ? _ctx.$style.formError : ""])
            }, [
              formInputs.value ? (openBlock(), createBlock(_component_n8n_form_inputs, {
                key: 0,
                "data-test-id": "mfa-login-form",
                inputs: formInputs.value,
                "event-bus": formBus.value,
                onInput,
                onSubmit
              }, null, 8, ["inputs", "event-bus"])) : createCommentVNode("", true),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.infoBox)
              }, [
                !showRecoveryCodeForm.value && !unref(reportError) ? (openBlock(), createBlock(_component_n8n_text, {
                  key: 0,
                  size: "small",
                  color: "text-base",
                  bold: false
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18).baseText("mfa.code.input.info")) + " ", 1),
                    createBaseVNode("a", {
                      "data-test-id": "mfa-enter-recovery-code-button",
                      onClick: onRecoveryCodeClick
                    }, toDisplayString(unref(i18).baseText("mfa.code.input.info.action")), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(reportError) ? (openBlock(), createBlock(_component_n8n_text, {
                  key: 1,
                  color: "danger",
                  size: "small"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(formError2.value) + " ", 1),
                    !showRecoveryCodeForm.value ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      class: normalizeClass(_ctx.$style.recoveryCodeLink),
                      onClick: onRecoveryCodeClick
                    }, toDisplayString(unref(i18).baseText("mfa.recovery.input.info.action")), 3)) : createCommentVNode("", true)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ], 2)
            ], 2),
            createBaseVNode("div", null, [
              createVNode(_component_n8n_button, {
                float: "right",
                loading: verifyingMfaCode.value,
                label: showRecoveryCodeForm.value ? unref(i18).baseText("mfa.recovery.button.verify") : unref(i18).baseText("mfa.code.button.continue"),
                size: "large",
                disabled: !hasAnyChanges.value,
                onClick: onSaveClick
              }, null, 8, ["loading", "label", "disabled"]),
              createVNode(_component_n8n_button, {
                float: "left",
                label: unref(i18).baseText("mfa.button.back"),
                size: "large",
                type: "tertiary",
                onClick: onBackClick
              }, null, 8, ["label"])
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const container = "_container_aw2c3_127";
const formContainer = "_formContainer_aw2c3_137";
const headerContainer = "_headerContainer_aw2c3_141";
const formError = "_formError_aw2c3_146";
const recoveryCodeLink = "_recoveryCodeLink_aw2c3_150";
const infoBox = "_infoBox_aw2c3_154";
const style0 = {
  container,
  formContainer,
  headerContainer,
  formError,
  recoveryCodeLink,
  infoBox
};
const cssModules = {
  "$style": style0
};
const MfaView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SigninView",
  setup(__props) {
    const usersStore = useUsersStore();
    const settingsStore = useSettingsStore();
    const cloudPlanStore = useCloudPlanStore();
    const route = useRoute();
    const router = useRouter();
    const toast = useToast();
    const locale = useI18n();
    const telemetry = useTelemetry();
    const loading = ref(false);
    const showMfaView = ref(false);
    const emailOrLdapLoginId = ref("");
    const password = ref("");
    const reportError = ref(false);
    const ldapLoginLabel = computed(() => settingsStore.ldapLoginLabel);
    const isLdapLoginEnabled = computed(() => settingsStore.isLdapLoginEnabled);
    const emailLabel = computed(() => {
      let label = locale.baseText("auth.email");
      if (isLdapLoginEnabled.value && ldapLoginLabel.value) {
        label = ldapLoginLabel.value;
      }
      return label;
    });
    const formConfig = reactive({
      title: locale.baseText("auth.signin"),
      buttonText: locale.baseText("auth.signin"),
      redirectText: locale.baseText("forgotPassword"),
      redirectLink: "/forgot-password",
      inputs: [
        {
          name: "emailOrLdapLoginId",
          properties: {
            label: emailLabel.value,
            type: "email",
            required: true,
            ...!isLdapLoginEnabled.value && { validationRules: [{ name: "VALID_EMAIL" }] },
            showRequiredAsterisk: false,
            validateOnBlur: false,
            autocomplete: "email",
            capitalize: true,
            focusInitially: true
          }
        },
        {
          name: "password",
          properties: {
            label: locale.baseText("auth.password"),
            type: "password",
            required: true,
            showRequiredAsterisk: false,
            validateOnBlur: false,
            autocomplete: "current-password",
            capitalize: true
          }
        }
      ]
    });
    const onMFASubmitted = async (form) => {
      await login({
        emailOrLdapLoginId: emailOrLdapLoginId.value,
        password: password.value,
        mfaCode: form.mfaCode,
        mfaRecoveryCode: form.mfaRecoveryCode
      });
    };
    const onEmailPasswordSubmitted = async (form) => {
      await login(form);
    };
    const isRedirectSafe = () => {
      const redirect = getRedirectQueryParameter();
      return redirect.startsWith("/") || redirect.startsWith(window.location.origin);
    };
    const getRedirectQueryParameter = () => {
      let redirect = "";
      if (typeof route.query?.redirect === "string") {
        redirect = decodeURIComponent(route.query?.redirect);
      }
      return redirect;
    };
    const login = async (form) => {
      try {
        loading.value = true;
        await usersStore.loginWithCreds({
          emailOrLdapLoginId: form.emailOrLdapLoginId,
          password: form.password,
          mfaCode: form.mfaCode,
          mfaRecoveryCode: form.mfaRecoveryCode
        });
        loading.value = false;
        if (settingsStore.isCloudDeployment) {
          try {
            await cloudPlanStore.checkForCloudPlanData();
          } catch (error) {
            console.warn("Failed to check for cloud plan data", error);
          }
        }
        await settingsStore.getSettings();
        toast.clearAllStickyNotifications();
        telemetry.track("User attempted to login", {
          result: showMfaView.value ? "mfa_success" : "success"
        });
        if (isRedirectSafe()) {
          const redirect = getRedirectQueryParameter();
          if (redirect.startsWith("http")) {
            window.location.href = redirect;
            return;
          }
          void router.push(redirect);
          return;
        }
        await router.push({ name: VIEWS.HOMEPAGE });
      } catch (error) {
        if (error.errorCode === MFA_AUTHENTICATION_REQUIRED_ERROR_CODE) {
          showMfaView.value = true;
          cacheCredentials(form);
          return;
        }
        telemetry.track("User attempted to login", {
          result: showMfaView.value ? "mfa_token_rejected" : "credentials_error"
        });
        if (!showMfaView.value) {
          toast.showError(error, locale.baseText("auth.signin.error"));
          loading.value = false;
          return;
        }
        reportError.value = true;
      }
    };
    const onBackClick = (fromForm) => {
      reportError.value = false;
      if (fromForm === MFA_FORM.MFA_TOKEN) {
        showMfaView.value = false;
        loading.value = false;
      }
    };
    const onFormChanged = (toForm) => {
      if (toForm === MFA_FORM.MFA_RECOVERY_CODE) {
        reportError.value = false;
      }
    };
    const cacheCredentials = (form) => {
      emailOrLdapLoginId.value = form.emailOrLdapLoginId;
      password.value = form.password;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        !showMfaView.value ? (openBlock(), createBlock(AuthView, {
          key: 0,
          form: formConfig,
          "form-loading": loading.value,
          "with-sso": true,
          "data-test-id": "signin-form",
          onSubmit: onEmailPasswordSubmitted
        }, null, 8, ["form", "form-loading"])) : createCommentVNode("", true),
        showMfaView.value ? (openBlock(), createBlock(MfaView, {
          key: 1,
          "report-error": reportError.value,
          onSubmit: onMFASubmitted,
          onOnBackClick: onBackClick,
          onOnFormChanged: onFormChanged
        }, null, 8, ["report-error"])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};

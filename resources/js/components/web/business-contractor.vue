<template>
  <div class="business-contractor">
    <!-- ======= Breadcrumbs ======= -->
    <div
      class="business-contractor breadcrumbs d-flex align-items-center"
      style="background-image: url('/web/assets/img/breadcrumbs-bg.jpg')"
    >
      <div
        class="container position-relative d-flex flex-column align-items-center"
        data-aos="fade"
      >
        <h2>{{ $t("Business contractor") }}</h2>
        <ol>
          <li>
            <router-link to="/home">{{ $t("HOME") }}</router-link>
          </li>
          <li>{{ $t("Business contractor") }}</li>
        </ol>
      </div>
    </div>
    <!-- End Breadcrumbs -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
          <div class="col-lg-6">
            <div
              class="info-item d-flex flex-column justify-content-center align-items-center"
            >
              <i class="bi bi-map"></i>
              <h3>{{ $t("Our Address") }}</h3>
              <p class="address-p">{{ $t("sd_address") }}</p>
            </div>
          </div>
          <!-- End Info Item -->

          <div class="col-lg-3 col-md-6">
            <div
              class="info-item d-flex flex-column justify-content-center align-items-center"
            >
              <i class="bi bi-envelope"></i>
              <h3>{{ $t("Email Us") }}</h3>
              <p>Info@sd.com.sa</p>
            </div>
          </div>
          <!-- End Info Item -->

          <div class="col-lg-3 col-md-6">
            <div
              class="info-item d-flex flex-column justify-content-center align-items-center"
            >
              <i class="bi bi-telephone"></i>
              <h3>{{ $t("Call Us") }}</h3>
              <p dir="ltr">+966556668145</p>
            </div>
          </div>
          <!-- End Info Item -->
        </div>

        <div class="row gy-4 mt-1">
          <div class="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3626.0910056136404!2d46.732360374501404!3d24.65499565345001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2LTYp9ix2Lkg2KfZhNi42YfYsdin2YbYjCDYp9mE2YXZhNiy2Iwg2KfZhNix2YrYp9i2INin2YTZhdmF2YTZg9ipINin2YTYudix2KjZitipINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sen!2seg!4v1693757745144!5m2!1sen!2seg"
              frameborder="0"
              style="border: 0; width: 100%; height: 384px"
              allowfullscreen
            ></iframe>
          </div>
          <!-- End Google Maps -->

          <div class="col-lg-6">
            <form @submit.prevent="store" role="form" class="php-email-form">
              <div class="row gy-4">
                <div class="col-lg-6 form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    v-model="v$.company_name.$model"
                    :class="{
                      'is-invalid': v$.company_name.$error,
                    }"
                    :placeholder="$t('company_name')"
                  />
                  <div class="invalid-feedback">
                    <div v-for="error in v$.company_name.$errors" :key="error">
                      {{ $t("company_name") + " " + $t(error.$validator) }}
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    v-model="v$.manager_name.$model"
                    :class="{
                      'is-invalid': v$.manager_name.$error,
                    }"
                    :placeholder="$t('manager_name')"
                  />
                  <div class="invalid-feedback">
                    <div v-for="error in v$.manager_name.$errors" :key="error">
                      {{ $t("manager_name") + " " + $t(error.$validator) }}
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="email"
                    id="email"
                    :placeholder="$t('PHONE')"
                    v-model="v$.phone.$model"
                    :class="{
                      'is-invalid': v$.phone.$error,
                    }"
                  />
                  <div class="invalid-feedback">
                    <div v-for="error in v$.phone.$errors" :key="error">
                      {{ $t("PHONE") + " " + $t(error.$validator) }}
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="v$.email.$model"
                    :class="{
                      'is-invalid': v$.email.$error,
                    }"
                    :placeholder="$t('EMAIL')"
                  />
                  <div class="invalid-feedback">
                    <div v-for="error in v$.email.$errors" :key="error">
                      {{ $t("EMAIL") + " " + $t(error.$validator) }}
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 form-group">
                  <Multiselect
                    :placeholder="$t('SELECT_AREA')"
                    :label="$i18n.locale == 'ar' ? 'name' : 'name_e'"
                    :searchable="true"
                    v-model="v$.area_id.$model"
                    valueProp="id"
                    :options="areas"
                    :class="{
                      'is-invalid': v$.area_id.$error,
                    }"
                  />
                  <div class="invalid-feedback">
                    <div v-for="error in v$.area_id.$errors" :key="error">
                      {{ $t("AREA") + " " + $t(error.$validator) }}
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 form-group">
                  <Multiselect
                    :placeholder="$t('SELECT_CITY')"
                    :label="$i18n.locale == 'ar' ? 'name' : 'name_e'"
                    :searchable="true"
                    :class="{
                      'is-invalid': v$.city_id.$error,
                    }"
                    v-model="v$.city_id.$model"
                    valueProp="id"
                    :options="cities"
                  />
                  <div class="invalid-feedback">
                    <div v-for="error in v$.city_id.$errors" :key="error">
                      {{ $t("CITY") + " " + $t(error.$validator) }}
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="email"
                    v-model="v$.speciality.$model"
                    :class="{
                      'is-invalid': v$.speciality.$error,
                    }"
                    :placeholder="$t('speciality')"
                  />
                  <div class="invalid-feedback">
                    <div v-for="error in v$.speciality.$errors" :key="error">
                      {{ $t("speciality") + " " + $t(error.$validator) }}
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 sd-file commercial-register form-group">
                  <label for="commercial_register"
                    ><i class="fa fa-upload"></i
                    >{{ $t("commercial_register") }}
                    <template v-if="commercial_register">
                      ({{ commercial_register.name }})
                    </template>
                    </label>
                  <input
                    @change="uploadCommercialRegister"
                    class="form-control"
                    type="file"
                    id="commercial_register"
                  />
                </div>
                <div class="col-lg-6 sd-file form-group">
                  <label for="tax_register">
                    <i class="fa fa-upload"></i>{{ $t("tax_register") }}
                    <template v-if="tax_register">
                      ({{ tax_register.name }})
                    </template>

                  </label>
                  <input
                    @change="uploadTaxRegister"
                    class="form-control"
                    type="file"
                    id="tax_register"
                  />
                </div>
              </div>
              <div class="submit-btn">
                <button type="submit">{{ $t("SEND_MESSAGE") }}</button>
              </div>
            </form>
          </div>
          <!-- End Contact Form -->
        </div>
      </div>
    </section>
    <!-- End Contact Section -->
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";

import { required, email } from "@vuelidate/validators";
import businessContractor from "../../http-clients/web/business-contractor-client";
import { toast } from "vue3-toastify";
import { onMounted, reactive, toRefs } from "vue";
import { useI18n } from "vue-i18n";
import useVuelidate from "@vuelidate/core";
export default {
  components: {
    Multiselect,
  },
  setup() {
    const { t, locale } = useI18n({ useScope: "global" });
    const form = reactive({
      company_name: "",
      manager_name: "",
      speciality: "",
      phone: "",
      email: "",
      area_id: "",
      city_id: "",
      commercial_register: null,
      tax_register: null,
    });
    const data = reactive({
      areas: [],
      cities: [],
    });
    onMounted(() => {
      getCities();
      getAreas();
    });

    const rules = {
      company_name: { required },
      manager_name: { required },
      speciality: { required },
      phone: { required },
      email: { required, email },
      area_id: { required },
      city_id: { required },
    };
    const v$ = useVuelidate(rules, form);
    function getAreas() {
      businessContractor.getAreas().then((res) => {
        data.areas = res.data;
      });
    }
    function datetimeLocal() {
      const dt = new Date();
      dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
      return dt.toISOString().slice(0, 16);
    }
    function getCities() {
      businessContractor.getCities().then((res) => {
        data.cities = res.data;
      });
    }
    function uploadCommercialRegister(e) {
      form.commercial_register = e.target.files[0];
    }
    function uploadTaxRegister(e) {
      form.tax_register = e.target.files[0];
    }
    function getForm() {
      let formData = new FormData();
      formData.append("company_name", form.company_name);
      formData.append("manager_name", form.manager_name);
      formData.append("speciality", form.speciality);
      formData.append("phone", form.phone);
      formData.append("email", form.email);
      formData.append("area_id", form.area_id);
      formData.append("city_id", form.city_id);
      formData.append("commercial_register", form.commercial_register);
      formData.append("tax_register", form.tax_register);
      return formData;
    }
    function store() {
      if (v$.value.$invalid) {
        v$.value.$touch();
        return;
      }
      businessContractor
        .store(getForm())
        .then(() => {
          v$.value.$reset();
          form.company_name = "";
          form.manager_name = "";
          form.speciality = "";
          form.phone = "";
          form.email = "";
          form.area_id = "";
          form.city_id = "";
          form.commercial_register = null;
          form.tax_register = null;
          toast.success(t("SENT_SUCCESSFULLY"), {
            autoClose: 2000,
            position: "top-center",
          });
        })
        .catch((error) => {});
    }
    return {
      store,
      uploadCommercialRegister,
      uploadTaxRegister,
      ...toRefs(form),
      ...toRefs(data),
      v$,
    };
  },
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>

<style lang="scss">
.business-contractor {
  .submit-btn {
    text-align: center;
    button {
      font-size: 14px;
      padding: 6px 35px;
      margin-top: 30px;
      background: var(--color-primary);
      border: 0;
      padding: 6px 14px;
      color: #fff;
      transition: 0.4s;
      border-radius: 5px;
      text-align: center;
    }
  }
  .sd-file {
    label {
      display: flex;
      gap: 13px;
      align-items: center;
      justify-content: center;
      padding: 9px 14px;
      border: 1px solid #ced4da !important;
      color: gray;
      font-size: 13px;
      width: 100%;
    }
    input[type="file"] {
      display: none;
    }
  }
  .contact .php-email-form button[type="submit"] {
    &:hover {
      background: var(--color-primary);
    }
  }
  .php-email-form .form-control::placeholder,
  .invalid-feedback,
  .multiselect-option {
    font-size: 13px !important;
  }
  .multiselect {
    font-size: 13px !important;
    border: none !important;
    input {
      border: 1px solid #ced4da !important;
      border-radius: 0 !important;
      &::placeholder {
        line-height: 40px;
      }
    }
  }
  .multiselect-placeholder {
    color: gray !important;
  }
  .multiselect-clear-icon {
    position: relative;
  }
  .is-selected {
    background: var(--color-primary) !important;
  }
  .multiselect-single-label,
  .multiselect-placeholder,
  .multiselect-clear-icon,
  .multiselect-caret {
    top: 3px !important;
  }
  .multiselect.is-invalid {
    input {
      border: 1px solid #dc3545 !important;
    }
  }
}
@media (max-width: 450px) {
  .business-contractor {
    .info-item {
      p.address-p {
        padding: 0 25px;
        text-align: center;
      }
    }
  }
}
</style>
<template>
  <form class="contact-form" @submit="handleSubmit">
    <div class="contact-form-item">
      <label for="name">お名前</label>
      <div>
        <input
          class="text-field"
          :class="{ error: nameError }"
          type="text"
          id="name"
          name="name"
          v-model.lazy="name"
          @blur="nameTouched = true"
        />
        <p class="errorMessage" v-if="nameError">{{ nameError }}</p>
      </div>
    </div>
    <div class="contact-form-item">
      <label for="tel">電話番号</label>
      <div>
        <input
          class="text-field"
          :class="{ error: telError }"
          type="tel"
          id="tel"
          name="tel"
          v-model.lazy="tel"
          @blur="telTouched = true"
        />
        <p class="errorMessage" v-if="telError">{{ telError }}</p>
      </div>
    </div>
    <div class="contact-form-item">
      <label for="email">メールアドレス</label>
      <div>
        <input
          class="text-field"
          :class="{ error: emailError }"
          type="email"
          id="email"
          name="email"
          v-model.lazy="email"
          @blur="emailTouched = true"
        />
        <p class="errorMessage" v-if="emailError">{{ emailError }}</p>
      </div>
    </div>
    <div class="contact-form-item">
      <label>ご希望の連絡方法</label>
      <div class="radio-group">
        <div class="radio-option">
          <input
            type="radio"
            id="contact-phone"
            name="contact"
            value="phone"
            v-model="contactMethod"
            @blur="contactMethodTouched = true"
          />
          <label for="contact-phone">電話</label>
        </div>
        <div class="radio-option">
          <input
            type="radio"
            id="contact-email"
            name="contact"
            value="email"
            v-model="contactMethod"
            @blur="contactMethodTouched = true"
          />
          <label for="contact-email">メール</label>
        </div>
        <p class="errorMessage" v-if="contactMethodError">
          {{ contactMethodError }}
        </p>
      </div>
    </div>
    <div class="contact-form-item">
      <label for="contact-text">お問い合わせ内容</label>
      <div>
        <textarea
          class="text-field text-field--textarea"
          :class="{ error: contactTextError }"
          id="contact-text"
          name="contact"
          v-model.lazy="contactText"
          @blur="contactTextTouched = true"
        ></textarea>
        <p class="errorMessage" v-if="contactTextError">
          {{ contactTextError }}
        </p>
      </div>
    </div>
    <div class="consent-checkbox">
      <input
        type="checkbox"
        id="agree"
        name="agree"
        v-model="agree"
        @change="agreeTouched = true"
      />
      <label for="agree">同意する</label>
      <p class="errorMessage" v-if="agreeError">{{ agreeError }}</p>
    </div>
    <button class="submit-button" type="submit" :disabled="!isFormValid" >
      送信する
    </button>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const name = ref<string>("");
const tel = ref<string>("");
const email = ref<string>("");
const contactMethod = ref<string>("");
const contactText = ref<string>("");
const agree = ref<string>("");

const nameTouched = ref(false);
const telTouched = ref(false);
const emailTouched = ref(false);
const contactMethodTouched = ref(false);
const contactTextTouched = ref(false);
const agreeTouched = ref(false);

const nameError = computed(() =>
  nameTouched.value && name.value.trim() === "" ? "お名前は必須です。" : ""
);
const telError = computed(() =>
  telTouched.value && tel.value?.trim() === "" ? "電話番号は必須です。" : ""
);
const emailError = computed(() =>
  emailTouched.value && email.value.trim() === ""
    ? "メールアドレスは必須です。"
    : ""
);
const contactMethodError = computed(() =>
  contactMethodTouched.value && contactMethod.value.trim() === ""
    ? "ご希望の連絡方法は必須です。"
    : ""
);
const contactTextError = computed(() =>
  contactTextTouched.value && contactText.value.trim() === ""
    ? "お問い合わせ内容は必須です。"
    : ""
);
const agreeError = computed(() =>
  agreeTouched.value && !agree.value ? "同意は必須です。" : ""
);
console.log(agreeError.value);

const isFormValid = computed(
  () =>
    name.value.trim() !== "" &&
    tel.value !== undefined &&
    tel.value !== null &&
    email.value.trim() !== "" &&
    contactMethod.value !== "" &&
    contactText.value.trim() !== "" &&
    agree.value !== ""
);

const handleSubmit = () =>{
  alert("送信しました！")
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #cccccc;
}
.contact-form-item {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  font-size: 16px;
}
.text-field {
  width: 358px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #cccccc;
}
.text-field--textarea{
  height: 69px;
}

.radio-group {
  width: 358px;
  display: flex;
  align-items: center;
  gap: 38px;
}
.radio-option{
  display: flex;
  gap: 6px;
}
.consent-checkbox {
  width: 94px;
  margin-bottom: 40px;
}
.submit-button {
  background-color: #3895ff;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 4px;
  color: #ffffff;
}
.submit-button:disabled {
  background-color: #cccccc;
}
.error {
  border: 1px solid #ff0202;
}
.errorMessage {
  display: block;
  height: auto;
  color: #ff0202;
  font-size: 12px;
}

input {
  padding: 8px;
}



</style>
Ï

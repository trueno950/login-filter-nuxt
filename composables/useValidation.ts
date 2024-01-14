import { ref, computed } from "vue";

interface ValidationRules {
  email?: boolean;
  phone?: boolean;
  required?: boolean;
  password?: boolean;
}

export function useValidation(value: ref<string>, rules: ValidationRules = {}) {
  const isValidEmail = computed(() => {
    if (rules.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value.value);
    }
    return true;
  });

  const isValidPhone = computed(() => {
    if (rules.phone) {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(value.value);
    }
    return true;
  });

  const isNotEmpty = computed(() => {
    if (rules.required) {
      return value.value.trim() !== "";
    }
    return true;
  });

  const isValidPassword = computed(() => {
    if (rules.password) {
      return value.value.length >= 7;
    }
    return true;
  });

  return {
    isValidEmail,
    isValidPhone,
    isNotEmpty,
    isValidPassword,
  };
}

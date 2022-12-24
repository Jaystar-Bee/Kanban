import { ref } from "vue";

export const useToggle = (init: boolean) => {
  const defaultValue = ref(init);
  const changeValue = () => {
    defaultValue.value = !defaultValue.value;
  };
  const showValue = () => {
    defaultValue.value = true;
  };
  const hideValue = () => {
    defaultValue.value = false;
  };
  return [defaultValue, changeValue, showValue, hideValue];
};

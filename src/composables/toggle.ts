import { ref } from "vue";

export const useToggle = (init: boolean) => {
  const defaultValue = ref(init);
  const changeValue = () => {
    defaultValue.value = !defaultValue.value;
  };
  return [defaultValue, changeValue];
};

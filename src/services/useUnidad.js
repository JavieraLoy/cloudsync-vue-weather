import { ref } from "vue";

const unidad = ref("C");

const toggleUnidad = () => {
  unidad.value = unidad.value === "C" ? "F" : "C";
};

const convertirTemp = (temp) => {
  if (unidad.value === "C") return temp;
  return Math.round((temp * 9) / 5 + 32);
};

export function useUnidad() {
  return {
    unidad,
    toggleUnidad,
    convertirTemp
  };
}


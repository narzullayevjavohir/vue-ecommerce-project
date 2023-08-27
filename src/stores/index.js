import { defineStore } from "pinia";
import { computed, ref } from "vue";

function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
}

export const useShoppingStore = defineStore("shopping", () => {
  const carts = ref(loadCartFromLocalStorage()).value;

  function addToCart(item) {
    const existingItem = carts.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      carts.push({ ...item, quantity: 1 });
      alert("Adding item success!");
    }
    saveToLocalStorage();
  }

  function increaseCart(itemId) {
    const item = carts.find((cartItem) => cartItem.id === itemId);
    if (item) {
      item.quantity++;
      saveToLocalStorage();
    }
  }

  function decreaseCart(itemId) {
    const item = carts.find((cartItem) => cartItem.id === itemId);
    if (item && item.quantity > 1) {
      item.quantity--;
      saveToLocalStorage();
    }
  }

  function removeFromCart(itemId) {
    const index = carts.findIndex((cartItem) => cartItem.id === itemId);
    if (index !== -1) {
      carts.splice(index, 1);
      saveToLocalStorage();
    }
  }

  const totalItems = computed(() =>
    carts.reduce((total, item) => total + item.quantity, 0)
  );

  const totalPrices = computed(() =>
    carts.reduce((total, item) => total + item.price, 0)
  );

  function saveToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(carts));
  }

  return {
    carts,
    addToCart,
    removeFromCart,
    increaseCart,
    decreaseCart,
    totalItems,
    totalPrices,
  };
});

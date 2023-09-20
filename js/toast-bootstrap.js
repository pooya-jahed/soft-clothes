const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  });
}
const toastTriggerFavorite = document.getElementById("liveToastFavoriteBtn");
const toastFavorite = document.getElementById("liveToastFavorite");
if (toastTriggerFavorite) {
  toastTriggerFavorite.addEventListener("click", () => {
    const toastF = new bootstrap.Toast(toastFavorite);
    toastF.show();
  });
}

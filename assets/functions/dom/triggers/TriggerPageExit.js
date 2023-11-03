/**
 *
 *  This is used to trigger the page exit
 *
 */

export default function TriggerPageExit() {
  document.querySelectorAll(".page").forEach((page) => {
    page.style.overflowY = "hidden";
    page.style.pointerEvents = "none";
    page.style.opacity = 0;
    page.style.visibility = "hidden";
  });
}

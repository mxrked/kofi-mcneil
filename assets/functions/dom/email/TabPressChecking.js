/**
 *
 *  This is the Tab Press checker
 *
 */

export default function TabPressChecking(checker, element, e) {
  if (checker) {
    if (e.keyCode === 9) {
      if (element.value !== "") {
        element.style.borderColor = "#635985";
      } else {
        element.style.borderColor = "red";
      }

      if (!checker) {
        element.style.borderColor = "red";
      } else {
        element.style.borderColor = "#635985";
      }
    }
  } else {
    if (e.keyCode === 9) {
      if (element.value !== "") {
        element.style.borderColor = "#635985";
      } else {
        element.style.borderColor = "red";
      }
    }
  }
}

/**
 *
 *  This is the Reset Border Color
 *
 */

export default function ResetBorderColor(type, element) {
  // if (type == "input") {
  //   if (element.value !== "") {
  //     element.style.borderColor = "red";
  //   }
  // }

  // if (type == "select") {
  //   if (element.selectedIndex !== 0) {
  //     element.style.borderColor = "red";
  //   }
  // }

  if (type === "input" || type === "select" || type === "textarea") {
    element.style.borderColor = "#e7e7e7";
  }
}

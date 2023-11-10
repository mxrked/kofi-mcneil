/**
 *
 *  This is the Check Empty Or Space Value
 *
 */

export default function CheckEmptyOrSpaceValue(element, spaceChecker) {
  if (element.value == "" || spaceChecker) {
    return false;
  }

  if (element.value !== "" && !spaceChecker) {
    return true;
  }
}

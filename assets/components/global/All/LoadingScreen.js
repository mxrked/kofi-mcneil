/**
 *
 *  This is the Loading Screen
 *
 */

import styles from "../../../styles/modules/All/All.module.css";

export const LoadingScreen = () => {
  return (
    <div id="loadingScreen" className={`${styles.loading_screen} full-second`}>
      <div
        id="loadingScreenCnt"
        className={`${styles.loading_screen_cnt} half-second`}
      >
        <span className={`${styles.loader}`}></span>
      </div>
    </div>
  );
};

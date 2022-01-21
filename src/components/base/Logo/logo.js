import React from 'react';
import propTypes from 'prop-types';

const Logo = ({
    width,
    height
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 145 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.858 16.112C12.858 17.0133 12.6413 17.854 12.208 18.634C11.7747 19.3967 11.116 20.012 10.232 20.48C9.348 20.948 8.26467 21.182 6.982 21.182C5.734 21.182 4.616 20.9653 3.628 20.532C2.64 20.0813 1.85133 19.4573 1.262 18.66C0.672667 17.8627 0.334667 16.944 0.248 15.904H3.42C3.50667 16.7013 3.84467 17.386 4.434 17.958C5.04067 18.53 5.84667 18.816 6.852 18.816C7.75333 18.816 8.44667 18.5733 8.932 18.088C9.43467 17.6027 9.686 16.9787 9.686 16.216C9.686 15.5573 9.504 15.02 9.14 14.604C8.776 14.1707 8.32533 13.8327 7.788 13.59C7.25067 13.3473 6.514 13.07 5.578 12.758C4.434 12.394 3.498 12.03 2.77 11.666C2.05933 11.302 1.45267 10.7733 0.95 10.08C0.447333 9.38667 0.196 8.47667 0.196 7.35C0.196 6.362 0.438667 5.49533 0.924 4.75C1.40933 4.00467 2.10267 3.43267 3.004 3.034C3.90533 2.618 4.94533 2.41 6.124 2.41C7.996 2.41 9.478 2.86067 10.57 3.762C11.6793 4.66333 12.312 5.842 12.468 7.298H9.27C9.14867 6.60467 8.81933 6.01533 8.282 5.53C7.762 5.02733 7.04267 4.776 6.124 4.776C5.292 4.776 4.62467 4.99267 4.122 5.426C3.61933 5.842 3.368 6.44867 3.368 7.246C3.368 7.87 3.54133 8.39 3.888 8.806C4.23467 9.20467 4.668 9.52533 5.188 9.768C5.72533 9.99333 6.45333 10.262 7.372 10.574C8.53333 10.938 9.478 11.3107 10.206 11.692C10.9513 12.056 11.5753 12.5933 12.078 13.304C12.598 14.0147 12.858 14.9507 12.858 16.112ZM23.0273 18.426V21H21.2073C19.6819 21 18.5206 20.636 17.7233 19.908C16.9433 19.1627 16.5533 17.932 16.5533 16.216V9.196H14.4993V6.674H16.5533V3.112H19.5433V6.674H23.0013V9.196H19.5433V16.268C19.5433 17.0827 19.6906 17.646 19.9853 17.958C20.2973 18.27 20.8346 18.426 21.5973 18.426H23.0273ZM31.5498 6.492C32.8498 6.492 33.9591 6.81267 34.8778 7.454C35.7964 8.09533 36.4464 8.94467 36.8278 10.002V6.674H39.7918V21H36.8278V17.672C36.4464 18.7293 35.7964 19.5787 34.8778 20.22C33.9591 20.8613 32.8498 21.182 31.5498 21.182C30.3018 21.182 29.1838 20.8873 28.1958 20.298C27.2251 19.7087 26.4624 18.8593 25.9078 17.75C25.3531 16.6407 25.0758 15.332 25.0758 13.824C25.0758 12.3333 25.3531 11.0333 25.9078 9.924C26.4624 8.81467 27.2251 7.96533 28.1958 7.376C29.1838 6.78667 30.3018 6.492 31.5498 6.492ZM32.4598 9.092C31.1424 9.092 30.0851 9.51667 29.2878 10.366C28.5078 11.198 28.1178 12.3507 28.1178 13.824C28.1178 15.2973 28.5078 16.4587 29.2878 17.308C30.0851 18.14 31.1424 18.556 32.4598 18.556C33.2918 18.556 34.0371 18.3653 34.6958 17.984C35.3544 17.5853 35.8744 17.0307 36.2558 16.32C36.6371 15.6093 36.8278 14.7773 36.8278 13.824C36.8278 12.888 36.6371 12.0647 36.2558 11.354C35.8744 10.626 35.3544 10.0713 34.6958 9.69C34.0371 9.29133 33.2918 9.092 32.4598 9.092ZM45.0387 6.674L49.3287 17.204L53.3067 6.674H56.6087L47.9507 27.812H44.6487L47.7427 20.662L41.7107 6.674H45.0387Z" fill="#3252DF" />
            <path d="M64.9277 6.492C66.7823 6.492 68.3163 6.986 69.5297 7.974C70.743 8.94467 71.497 10.2707 71.7917 11.952H68.6457C68.4723 11.0507 68.0477 10.3487 67.3717 9.846C66.713 9.326 65.881 9.066 64.8757 9.066C63.7317 9.066 62.7783 9.47333 62.0157 10.288C61.253 11.0853 60.8717 12.264 60.8717 13.824C60.8717 15.384 61.253 16.5713 62.0157 17.386C62.7783 18.2007 63.7317 18.608 64.8757 18.608C65.881 18.608 66.713 18.348 67.3717 17.828C68.0477 17.308 68.4723 16.5973 68.6457 15.696H71.7917C71.497 17.3773 70.743 18.712 69.5297 19.7C68.3163 20.688 66.7823 21.182 64.9277 21.182C63.541 21.182 62.3103 20.8873 61.2357 20.298C60.1783 19.7087 59.3463 18.8593 58.7397 17.75C58.133 16.6407 57.8297 15.332 57.8297 13.824C57.8297 12.3333 58.133 11.0333 58.7397 9.924C59.3463 8.81467 60.1783 7.96533 61.2357 7.376C62.3103 6.78667 63.541 6.492 64.9277 6.492ZM80.4013 6.492C81.7013 6.492 82.8107 6.81267 83.7293 7.454C84.648 8.09533 85.298 8.94467 85.6793 10.002V6.674H88.6433V21H85.6793V17.672C85.298 18.7293 84.648 19.5787 83.7293 20.22C82.8107 20.8613 81.7013 21.182 80.4013 21.182C79.1533 21.182 78.0353 20.8873 77.0473 20.298C76.0767 19.7087 75.314 18.8593 74.7593 17.75C74.2047 16.6407 73.9273 15.332 73.9273 13.824C73.9273 12.3333 74.2047 11.0333 74.7593 9.924C75.314 8.81467 76.0767 7.96533 77.0473 7.376C78.0353 6.78667 79.1533 6.492 80.4013 6.492ZM81.3113 9.092C79.994 9.092 78.9367 9.51667 78.1393 10.366C77.3593 11.198 76.9693 12.3507 76.9693 13.824C76.9693 15.2973 77.3593 16.4587 78.1393 17.308C78.9367 18.14 79.994 18.556 81.3113 18.556C82.1433 18.556 82.8887 18.3653 83.5473 17.984C84.206 17.5853 84.726 17.0307 85.1073 16.32C85.4887 15.6093 85.6793 14.7773 85.6793 13.824C85.6793 12.888 85.4887 12.0647 85.1073 11.354C84.726 10.626 84.206 10.0713 83.5473 9.69C82.8887 9.29133 82.1433 9.092 81.3113 9.092ZM99.4023 18.426V21H97.5823C96.0569 21 94.8956 20.636 94.0983 19.908C93.3183 19.1627 92.9283 17.932 92.9283 16.216V9.196H90.8743V6.674H92.9283V3.112H95.9183V6.674H99.3763V9.196H95.9183V16.268C95.9183 17.0827 96.0656 17.646 96.3603 17.958C96.6723 18.27 97.2096 18.426 97.9723 18.426H99.4023ZM101.763 2.514C101.763 2.01133 101.936 1.59533 102.283 1.266C102.629 0.936665 103.089 0.771999 103.661 0.771999C104.233 0.771999 104.692 0.936665 105.039 1.266C105.403 1.59533 105.585 2.01133 105.585 2.514C105.585 3.01667 105.403 3.424 105.039 3.736C104.692 4.048 104.233 4.204 103.661 4.204C103.089 4.204 102.629 4.048 102.283 3.736C101.936 3.424 101.763 3.01667 101.763 2.514ZM105.143 6.674V21H102.179V6.674H105.143ZM115.282 6.492C116.668 6.492 117.916 6.78667 119.026 7.376C120.135 7.96533 121.002 8.81467 121.626 9.924C122.25 11.0333 122.562 12.3333 122.562 13.824C122.562 15.332 122.25 16.6407 121.626 17.75C121.002 18.8593 120.135 19.7087 119.026 20.298C117.916 20.8873 116.668 21.182 115.282 21.182C113.895 21.182 112.647 20.8873 111.538 20.298C110.446 19.7087 109.579 18.8593 108.938 17.75C108.314 16.6233 108.002 15.3147 108.002 13.824C108.002 12.3333 108.314 11.0333 108.938 9.924C109.579 8.81467 110.446 7.96533 111.538 7.376C112.647 6.78667 113.895 6.492 115.282 6.492ZM115.282 9.066C114.519 9.066 113.817 9.23933 113.176 9.586C112.534 9.93267 112.014 10.47 111.616 11.198C111.234 11.9087 111.044 12.784 111.044 13.824C111.044 14.8813 111.234 15.7653 111.616 16.476C112.014 17.1867 112.534 17.7153 113.176 18.062C113.817 18.4087 114.519 18.582 115.282 18.582C116.044 18.582 116.746 18.4087 117.388 18.062C118.029 17.7153 118.54 17.1867 118.922 16.476C119.32 15.7653 119.52 14.8813 119.52 13.824C119.52 12.784 119.32 11.9087 118.922 11.198C118.54 10.47 118.029 9.93267 117.388 9.586C116.746 9.23933 116.044 9.066 115.282 9.066ZM133.419 6.44C135.083 6.44 136.418 6.97733 137.423 8.052C138.429 9.12667 138.931 10.6607 138.931 12.654V21H135.967V12.966C135.967 11.6833 135.638 10.6953 134.979 10.002C134.321 9.29133 133.419 8.936 132.275 8.936C131.097 8.936 130.152 9.31733 129.441 10.08C128.731 10.8253 128.375 11.926 128.375 13.382V21H125.411V6.674H128.375V9.82C128.757 8.74533 129.398 7.91333 130.299 7.324C131.201 6.73467 132.241 6.44 133.419 6.44ZM144.738 17.724V21H141.384V17.724H144.738Z" fill="#152C5B" />
        </svg>
    );
};

Logo.defaultProps = {
    width: 145,
    height: 28,
};

Logo.propTypes = {
    width: propTypes.number,
    height: propTypes.number,
}

export default Logo;
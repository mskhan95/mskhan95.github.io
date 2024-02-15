import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="mailto:shabhankhan123456@gmail.com"
        className="home__social-icon"
        target="_blank"
      >
        <i class="bx bx-mail-send"></i>
      </a>
      <a
        href="https://github.com/mskhan95"
        className="home__social-icon"
        target="_blank"
      >
        <i class="bx bxl-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/mskhan95/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="bx bxl-linkedin"></i>
      </a>
    </div>
  );
};

export default Social;

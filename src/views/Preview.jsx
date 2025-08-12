import React from "react";
import PreviewDemoGallery from "../components/PreviewDemoGallery";
import useDocumentTitle from "../components/useDocumentTitle";


const Preview = () => {
  useDocumentTitle("TAB - Tóth Attila Balázs portfólió");
  return (
    <>
      <section
        className="section demo-section preview-section theme-light dark-bg"
        id="demo"
      >
        <div className="container">
          {/* End tile */}
          <div className="preview-inner">
            <PreviewDemoGallery />
          </div>
        </div>

      </section>
      {/* End Preview section */}

      {/* End feature section */}

    </>
  );
};

export default Preview;

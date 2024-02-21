import styles from "./Blog.module.scss";
const Blog = () => {
  return (
    <>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["header"]}`}>
          <h2 className={`${styles["title-big"]} wpb_wrapper`}>
            THE COFFE GRADEN
          </h2>
          <img
            src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator.png"
            alt="icon"
          />
          <div className={`w-100 d-flex justify-content-center`}>
            <h6 className={`${styles["sub"]} wpb_wrapper w-50`}>
              Những bài viết về kỷ niệm cùng quán cà phê COFFE GRADEN
            </h6>
          </div>
        </div>

        <div
          className={`${styles["category"]} d-flex justify-content-center text-center`}
        >
          <div className={`${styles["blog-image"]}`}>
            <img  className={`${styles["image-blog"]}`} src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-1.jpg"></img>
            <div className={`${styles["text-blog"]}`}>
              <h5 className={`${styles["tiltle"]}`}>TYPES OF COFFEE</h5>
              <h6 className={`${styles["sub-text"]}`}>
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </h6>
            </div>
          </div>
          <div className={`${styles["blog-image"]}`}>
            <img  className={`${styles["image-blog"]}`} src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-1.jpg"></img>
            <div className={`${styles["text-blog"]}`}>
              <h5 className={`${styles["tiltle"]}`}>TYPES OF COFFEE</h5>
              <h6 className={`${styles["sub-text"]}`}>
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </h6>
            </div>
          </div>
          <div>
          <div className={`${styles["blog-image"]}`}>
            <img  className={`${styles["image-blog"]}`} src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/blog-1-img-1.jpg"></img>
            <div className={`${styles["text-blog"]}`}>
              <h5 className={`${styles["tiltle"]}`}>TYPES OF COFFEE</h5>
              <h6 className={`${styles["sub-text"]}`}>
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </h6>
            </div>
          </div>
          </div>
     
        </div>
      </div>
    </>
  );
 
};
export default Blog;

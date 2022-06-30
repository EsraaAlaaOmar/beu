import React from 'react'
import ShowMoreText from 'react-show-more-text';
const ProductTitleBox = () => {
  return (
   <>
      <div className="title">Title here ..</div>
                <ShowMoreText
                        /* Default options */
                        lines={6}
                        more="Show more"
                        less="Show less"
                        className="content-css"
                        anchorClass="more"
                        expanded={false}
                        
                        truncatedEndingComponent={"... "}
                    >
                           Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna. Duis rutrum non risus in imperdiet. Proin molestie accumsan nulla sit amet mattis. Ut vel tristique neque. Praesent purus eros, aliquet sit amet venenatis in, sodales in odio. Curabitur ac ligula et purus cursus vulputate accumsan sit amet erat. Vestibulum ac mauris ut nisl maximus porta eu a libero. In hac habitasse platea dictumst. Proin augue urna, pretium vel mauris sed, lobortis rutrum libero.
                    </ShowMoreText>
           
   </>
  )
}

export default ProductTitleBox
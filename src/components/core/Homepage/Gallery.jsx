import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


 function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="../../../assets/Gallery1.jpg">
                    <img alt="img1" src="../../../assets/Gallery1.jpg" />
                </a>
                <a href="img/img2.jpg">
                    <img alt="img2" src="img/thumb2.jpg" />
                </a>
                ...
            </LightGallery>
        </div>
    );
}
export default Gallery


                // @MaterialName", "materialName");
                // parameters[2] = new SqlParameter("@RequisitationId", "requisitationId");
                // parameters[2] = new SqlParameter("@RequesterId", "requesterId");
                // parameters[2] = new SqlParameter("@ApproverId"
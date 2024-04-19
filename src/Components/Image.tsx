import React from "react";

const Image = () => {
  return (
    <>
      <div className="App mb-20">
        <h2 className="header">Inspiration for your first order</h2>
        <div className="zomato-world">
          <div>
            <img
              className="zomato-img"
              src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
            />
            <p className="cat">Biryani</p>
          </div>
          <div>
            <img
              className="zomato-img"
              src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
            />
            <p className="cat">Thali</p>
          </div>
          <div>
            <img
              className="zomato-img"
              src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
            />
            <p className="cat">Pizza</p>
          </div>
          <div>
            <img
              className="zomato-img"
              src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
            />
            <p className="cat">Chicken</p>
          </div>
          <div>
            <img
              className="zomato-img"
              src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
            />
            <p className="cat">Burger</p>
          </div>
        </div>
        <p className="header mt-20">Order now from your Favorite restaurent</p>
        <div className="zomato-restraunt">
          <div className="restraunt">
            <img
              className="restraunt-img"
              src="https://b.zmtcdn.com/data/pictures/chains/6/20428346/3bc03554a4b5e068966a32979d6731ce_o2_featured_v2.jpg"
            />
            <div className="card-text">
              <p className="restraunt-name">Sharma and Vishnu Chinese</p>
              <small>$3 - $5</small>
              <hr />
              <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis aut quod molestiae, repellat sapiente neque ad minima nihil rem hic excepturi quae. Pariatur laudantium debitis praesentium qui consequatur sunt.</p>
            </div>
          </div>
          <div className="restraunt">
            <img
              className="restraunt-img"
              src="https://b.zmtcdn.com/data/pictures/chains/2/2601652/fe752cf64a86379f3a546b5a23d43865_o2_featured_v2.jpg"
            />
            <div className="card-text">
              <p className="restraunt-name">vrindavan Dosa</p>
              <small>$5 - $8</small>
              <hr />
              <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis aut quod molestiae, repellat sapiente neque ad minima nihil rem hic excepturi quae. Pariatur laudantium debitis praesentium qui consequatur sunt.</p>
            </div>
          </div>
          <div className="restraunt">
            <img
              className="restraunt-img"
              src="https://b.zmtcdn.com/data/pictures/chains/0/19931930/9c66c9fea4bfd0d60b21835d85107d34_o2_featured_v2.jpg"
            />
            <div className="card-text">
              <p className="restraunt-name">Pizza Kitchen</p>
              <small>$12 - $15</small>
              <hr />
              <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis aut quod molestiae, repellat sapiente neque ad minima nihil rem hic excepturi quae. Pariatur laudantium debitis praesentium qui consequatur sunt.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;

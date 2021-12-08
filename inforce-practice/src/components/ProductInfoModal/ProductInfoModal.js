import React, { useState } from 'react';
import InfoCSS from './ProductInfoModal.module.css';
import Comment from '../Comment/Comment'

function ProductInfoModal({ infoId, setInfoId, infoItem, editProduct, addNewComment }) {
  const [item] = infoItem;
  const { comments, count, id, imageUrl, name, weight } = item

  const [comment, setComment] = useState(null)


  const addComment = () => {
    addNewComment(comment)
    setComment(null)
  }


  return (
    < div className={infoId ? InfoCSS.modal + ' ' + InfoCSS.active : InfoCSS.modal} onClick={() => setInfoId(null)}>
      <div className={InfoCSS.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className={InfoCSS.products_item}>
          <div className={InfoCSS.item_box}>
            <div className={InfoCSS.products_img}>
              <img src={imageUrl} alt={name} />
            </div>
            <div className={InfoCSS.item_info}>
              <p>Weight: {weight}</p>
              <p>Count: {count}g</p>
            </div>
          </div>
          <h3>{name}</h3>
          <div className={InfoCSS.commentaries}>
            {comments ? comments.map((commentItem, i) => {
              return <Comment key={i} commentItem={commentItem} />
            }) : null}
          </div>
          <div>
            <div className={InfoCSS.comment_info}>
              <label>
                <input type='text'
                  className={InfoCSS.comment_input}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder='Comment'
                  value={comment || ''} />
              </label>
            </div>
            <div className={InfoCSS.buttons}>
              <button type='button' onClick={() => editProduct(id)}>Edit</button>
              <button type='button' onClick={addComment}>Add Comment</button>
            </div>
          </div>
        </div >
      </div>
    </div >
  )
}

export default ProductInfoModal;
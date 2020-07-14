import React from 'react';
import ReactStars from 'react-stars';
import { Button, Form } from '../../style/style';

class FormComment extends React.Component {
  render() {
    const { onChange, onClick, comment, starsChange } = this.props;
    return (
      <Form details>
        <div>
          <label htmlFor="rating">
            Deixe sua avaliação sobre esse produto:
          </label>
          <ReactStars
            count={5}
            onChange={starsChange}
            size={24}
            color2={'#ffd700'}
          />
        </div>
        <div>
          <label htmlFor="comment">
            Deixe seu comentário:
            <textarea
              type="text"
              value={comment}
              onChange={onChange}
              data-testid="product-detail-evaluation"
            />
          </label>
        </div>
        <Button details type="button" onClick={onClick}>Adicionar Comentário</Button>
      </Form>
    );
  }
}

export default FormComment;

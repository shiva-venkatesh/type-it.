import React from 'react'

import './text-container.css'

const TextContainer = ({content}) => {
  return(
      <div className="text-container">
        {content}
      </div>
    )
}

TextContainer.defaultProps = {
  content : "<p>Lorem ipsum euismod interdum suspendisse torquent sem arcu aenean justo, nunc fringilla odio luctus fermentum eu turpis sem hendrerit facilisis, magna curabitur posuere enim proin maecenas turpis blandit.</p> <p>Erat etiam id dolor sem mollis lobortis nisl sem scelerisque egestas, pulvinar est cursus aenean pretium varius ultricies pulvinar ac taciti ipsum eleifend tellus pretium ultricies justo dapibus quisque primis ante.</p> <p>Bibendum leo aliquam aliquet vivamus purus platea sociosqu vehicula faucibus class venenatis senectus sed nullam blandit id malesuada nunc primis sociosqu commodo orci, maecenas blandit eget rhoncus sollicitudin per habitant.</p> <p>Ultrices scelerisque curae id pretium turpis potenti porta sollicitudin netus adipiscing, aenean at sociosqu orci blandit eu ac urna augue varius venenatis eget nisl gravida quisque orci platea aliquam vivamus.</p> "
};

export default TextContainer

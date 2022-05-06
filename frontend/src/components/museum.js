import 'aframe';
import React from 'react';
import ReactDOM from 'react-dom';

export const aframeMuseum = ()=>{
    AFRAME.registerComponent('clickhandler', {
        schema: {
          txt: {default:'default'}
        },        
        init: function () {
          var data = this.data;
          var el = this.el;
          function DetailItems() {

            const [clicked, setClicked]= React.useState(false)
        
            
        
            return React.createElement(
                'h1',
                { onClick: () => setClicked(!clicked) },
                'clicked',
            );
        }        
          el.addEventListener('click', function () {         
                 
            console.log(data.txt)
          const domContainer = document.getElementById('museum');
          ReactDOM.render(React.createElement(DetailItems), domContainer)

          });        
    }
    });
}

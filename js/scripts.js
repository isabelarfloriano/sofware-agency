$(document).ready( function() {
  
  let containerA = document.getElementById("circleA");

  let circleA = new ProgressBar.Circle(containerA, {

    color: '#65DAF9',
    strokeWidth: 8,
    duration: 1400,
    from: { color: '#aaa'},
    to: { color: '#65DAF9'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 60);
      circle.setText(value);

    }

  });

  let containerB = document.getElementById("circleB");

  let circleB = new ProgressBar.Circle(containerB, {

    color: '#65DAF9',
    strokeWidth: 8,
    duration: 1600,
    from: { color: '#aaa'},
    to: { color: '#65DAF9'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 254);
      circle.setText(value);

    }

  });

});
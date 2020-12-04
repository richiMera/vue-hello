var app = new Vue({

  el: ".container",
  data: {
    message: "Hello World",
    imgWorld: "https://www.ilcrivello.it/wp-content/uploads/2020/06/Immagine-mondo.jpg",
    opacity: "opacity"
  },
  methods: {
    showImage : function() {
      if(this.opacity == "opacity") {
        this.opacity = "altro"
      } else {
        this.opacity = "opacity"
      }
    }
  }
});

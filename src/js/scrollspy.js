var $ = require('jquery');


let scrollSpy = $(document).on('click','.navigate', function(event) {
                    event.preventDefault();
                    console.log(this.getAttribute('data-target'));
                    var target = this.getAttribute('data-target');
                    $('html, body').animate({
                        scrollTop: $(target).offset().top
                    }, 1000);
                });


export {scrollSpy};

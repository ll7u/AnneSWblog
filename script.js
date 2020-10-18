$('document').ready(
    function()
    {
        let state = false;
        let newCount;
        $('[data-count]').click(
            function()
            {
                var count = $('[data-count]').data('count');
                var elem = $(this);
                if(!state){
                    newCount = parseInt(count)+1;
                    $('.like').addClass('on').removeClass('off');
                    state = true;
                }else{
                    newCount = parseInt(count)-1;
                    state = false;
                    $('.like').addClass('off').removeClass('on');

                }
                elem.data('count', newCount);
                $('#text_count').empty().append(newCount);
            }
        );
        function validValue(__input){
            if(__input.val().length > 40){
                    __input.css('color', 'red');
                    alert('Вы превысили максимальное количество символов')
                    $('.buttonSubmit').prop("disabled", true);
                    return false;
            }
            else if(__input.val().length<10){
                __input.css('color', 'red');
                    $('.buttonSubmit').prop("disabled", true);
                    return false;
            }
            else{
                __input.css('color','black')
                $('.buttonSubmit').prop("disabled", false);
                return true;
            }
        }
        $('.messageCl').on("input",function() {
            var __input = $(this);
            var check = validValue(__input);
            
        });
     $('.buttonSubmit').click(function(){
        var __input = $('.messageCl');

        var check = validValue(__input);
        if(check){
            var value = __input.val();
            $('.fedback').append(`
                <div class="human">
                    <img src="dst/SecondPage/avatar/userava.png" alt="Аватар читателя" id="avatar">
                    <span>${value}</span>
                    <p>${value}</p>
                </div>
            `);
            $('#avatar').css("width", 50).css('border-radius', 10);
        }else{
            alert(1);
        }
    });

    }
);
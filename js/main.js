$(document).ready(function(){
    //slide2id - плавная прокрутка по ссылкам внутри страницы
    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector:"nav a"
    });

    //mixItUp - исполняет функцию фильтрации работ в фильтре портфолио
    $('#portfolio-projects').mixItUp();
    //mixItUp



    // FancyBox - galery(иниционазировали библиотеку)
    $(".fancybox").fancybox({
        // Default - with fix from scroll to top
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    // End of FancyBox - galery


    //JQuery Validate
    $('#contact-form').validate({
        rules: {
            name:{required: true},
            email:{required: true, email: true},
            //skype,phone - не обязательные для заполнения(поэтому закоментированы)
            // skype:{required: true},
            // phone:{required: true, phone: true},
            message:{required: true}
        },
        //message-обращение к пользавателю
        message: {
            name:'Пожалуйста, ввидите ваше имя',
            email:{
                required:'Пожалуйста, ввидите ваш email',
                email:'Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой.'
            },
            message:'Пожалуйста, ввидите текст сообщения'
        },

        submitHandler: function(form) {
            ajaxFormSubmit();
        }
    })
    // End JQuery Validate


    // Функция AJAX запрса на сервер
    function ajaxFormSubmit(){
        var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку.

        // Формируем ajax запрос
        $.ajax({
            type: "post", // Тип запроса - POST
            url: "php/mail.php", // Куда отправляем запрос
            data: string, // Какие даные отправляем, в данном случае отправляем переменную string
            // Функция если все прошло успешно
            success: function(html){
                $("#contact-form").slideUp(800);
                $('#answer').html(html);
            }
        });

        // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
        return false;
    }

});

$(document).ready(function() {
    $('#logo').on('click', function () {
        $('#logo').css('display', 'none')
    });
    // анимация полоски подчёркивания в списке объектов
    $('.list_head .text:nth-child(2)').on('click', function () {
        $('#line').css({'margin-left':'105px', 'width':'135px'});
    });
    $('.list_head .text:nth-child(1)').on('click', function () {
            $('#line').css({'margin-left':'-3px', 'width':'72px'});
        });
    // анимация полоски подчёркивания в описании объектов
    $('.button_in_desc .text:nth-child(2)').on('click', function () {
        $('#line2').css({'margin-left':'125px', 'width':'166px'});
    });
    $('.button_in_desc .text:nth-child(1)').on('click', function () {
        $('#line2').css({'margin-left':'-3px', 'width':'95px'});
    });
    $('.button_in_desc .text:nth-child(3)').on('click', function () {
        $('#line2').css({'margin-left':'320px', 'width':'127px'});
    });
    $('.button_in_desc .text:nth-child(4)').on('click', function () {
        $('#line2').css({'margin-left':'480px', 'width':'137px'});
    });

    $(function () {
       $( "#datepicker" ).datepicker($.datepicker.regional["ru"]);
    });
    var sch_butt = $('.one_item');
    sch_butt.on('click', function(){sch_butt.css('background-color', '')});
    sch_butt.on('click', function(){$(this).css('background-color', '#ffe6d3')});
    var button_left = $('.button_img');
    button_left.on('click', function(){$('.button_img').css('background-color', '')});
    button_left.on('click', function(){$(this).css('background-color', 'orange')});


});
/*


$(document).ready(function(){
    var data = [
        ['Heavy Industry', 12],['Retail', 9], ['Light Industry', 14],
        ['Out of home', 16],['Commuting', 7], ['Orientation', 9]
    ];
    var plot1 = jQuery.jqplot ('chart1', [data],
        {
            seriesDefaults: {
                // Make this a pie chart.
                renderer: jQuery.jqplot.PieRenderer,
                rendererOptions: {
                    // Put data labels on the pie slices.
                    // By default, labels show the percentage of the slice.
                    showDataLabels: true
                }
            },
            legend: { show:true, location: 'e' }
        }
    );
});*/

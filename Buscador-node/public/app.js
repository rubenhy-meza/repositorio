$(document).ready(function() {

    // #################### Init
    $("#rangoPrecio").ionRangeSlider({
        type: "double",
        grid: false,
        min: 0,
        max: 100000,
        from: 1000,
        to: 20000,
        prefix: "$"
    });

    init();
    setSearch();
    
 function init(){
        $.ajax({
            url: 'http://localhost:3000/filteroptions',
            type: 'get',
            dataType: 'json'
        })
        .done(function(data) {
            if (!data.error) {
                console.log(data);
                $('#ciudad').append(renderSelect(data.ciudades));
                $('#tipo').append(renderSelect(data.tipos));
                $("#ciudad").material_select();
                $("#tipo").material_select();
            }
        });
    } // .init

   

    // advance search options class
    function setSearch() {
        let busqueda = $('#checkPersonalizada');
        busqueda.on('change', (e) => {
            this.customSearch = !this.customSearch;
            $('#personalizada').toggleClass('invisible');
        });
    }
});

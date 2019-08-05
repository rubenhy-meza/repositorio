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


   

    // advance search options class
    function setSearch() {
        let busqueda = $('#checkPersonalizada');
        busqueda.on('change', (e) => {
            this.customSearch = !this.customSearch;
            $('#personalizada').toggleClass('invisible');
        });
    }
});

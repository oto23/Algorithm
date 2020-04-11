var tableObject = null;
var filterData = {
    actor: "",
    fond: "",
    item: "",
    repository: "",
    username: "",
    serie: "",
    dateStart: 0,
    dateEnd: 0,
    page: 0,
    size: 10,

};


$(document).ready(function () {








    function pagesToDisplay() {
        var pages = filterData.page


        for (let i = 1; i <= pages + 1; i++) {
            console.log(i)


        }


    }


    $('.filterable .btn-filter').click(function () {


        $("th[data-field='actor']").find("div").first().html("<input id='actor' placeholder='Actor' type='text'/>");

        $("th[data-field='fond']").find("div").first().html("<input id='fond' placeholder='Fond' type='text' />");

        $("th[data-field='item']").find("div").first().html("<input id='item' placeholder='Item' type='text' />");

        $("th[data-field='repository']").find("div").first().html("<input id='repository' placeholder='Repository' type='text' />");
        $("th[data-field='username']").find("div").first().html("<input id='username' placeholder='Username' type='text' />");
        $("th[data-field='serie']").find("div").first().html("<input id='serie' placeholder='Serie' type='text' />");
        $("th[data-field='dateCreated']").find("div").first().html("<input id='dateStart' autocomplete='' type='date' > <input id='dateEnd' type='date'>");
        $("input").on("change", function () {
            filterData.page = 0;
            var value = $(this).val()
            var key = $(this).attr("id")
            if (key === "dateStart" || key === "dateEnd") {
                var newValue = new Date(value).getTime()
                if (isNaN(newValue)){
                    filterData[key] = 0;
                    getData()

                } else{
                    filterData[key] = newValue;
                    getData()
                }
            } else {
                filterData[key] = value;

                getData()



            }


        });


    });


    tableObject = $('#myTable').bootstrapTable({

        columns: [{
            field: 'actor',
            title: 'Actor'
        }, {
            field: 'dateCreated',
            title: 'Date Created'
        }, {
            field: 'dateUpdated',
            title: 'Date Updated'
        }, {
            field: 'fond',
            title: 'Fond'
        }, {
            field: 'id',
            title: 'Item ID'
        }, {
            field: 'index',
            title: 'Index'
        }, {
            field: 'item',
            title: 'Item '
        }, {
            field: 'repository',
            title: 'Repository'
        }, {
            field: 'serie',
            title: 'Serie'
        }, {
            field: 'status',
            title: 'Status'
        }, {
            field: 'username',
            title: 'Username'
        },],
        data: [],


    });
    getData()

});

function loadData(page) {

    filterData.page = page;
    getData()


}

function getData() {
    $.getJSON("http://188.166.19.101:8282/scan-report/search", filterData, function (result) {
        $('#myTable').bootstrapTable('load', result.content);
        var totalPages = result.totalPages;
        var pagesToDisplay = [];
        var page = filterData.page;


        for (let i = 0; i < totalPages; i++) {
            pagesToDisplay.push(i)
        }


        document.getElementById('pages').innerHTML = "";
        for (var pag in pagesToDisplay) {
            var page2 = parseInt(pag) + 1;
            console.log("test: ", page, parseInt(pag));
            console.log(page + 1 === parseInt(pag));
            document.getElementById('pages').innerHTML += '<li><button class="pageButton ' + (page === parseInt(pag) ? 'pageButtonActive' : '') + '" onclick="loadData(' + (pag) + ')">' + page2 + '</button</li>'


        }
    })
}
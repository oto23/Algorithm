var tableObject = null;
var filterData = {
    company: "",
    MDI: "",
    NQE: 1,
    BFI: 1,


};
var dataTest =[
    {
        company: "Example",
        MDI: "Example",
        NQE: 1,
        BFI: 1,
    },
    {
        company: "Example 2",
        MDI: "Example 2",
        NQE: 2,
        BFI: 2,
    },

    {
        company: "Example 3",
        MDI: "Example 3",
        NQE: 3,
        BFI: 3,
    },

    {
        company: "Example 4",
        MDI: "Example 4",
        NQE: 4,
        BFI: 4,
    },
    {
        company: "Example 5",
        MDI: "Example 5",
        NQE: 5,
        BFI: 5,
    },

    {
        company: "Example 6",
        MDI: "Example 6",
        NQE: 6,
        BFI: 6,
    },
    {
        company: "Example 7",
        MDI: "Example 7",
        NQE: 7,
        BFI: 7,
    },


    ]


$(document).ready(function () {







    //
    // function pagesToDisplay() {
    //     var pages = filterData.page
    //
    //
    //     for (let i = 1; i <= pages + 1; i++) {
    //         console.log(i)
    //
    //
    //     }
    //
    //
    // }




    tableObject = $('#myTable').bootstrapTable({

        columns: [{
            field: 'company',
            title: 'Company Name'
        },   {
            field: 'MDI',
            title: 'Monetary Detracting Investments(MDI)'
        }, {
            field: 'NQE',
            title: 'Non-Quantitative Easing(NQE) '
        }, {
            field: 'BFI',
            title: 'Behavioral Financial Interactions(BFI)'
        }],
        data: dataTest,




    });
    // getData()

});

// function loadData(page) {
//
//     filterData.page = page;
//     getData()
//
//
// }

function searchFunc(){

  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0]
    ;
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}



// function getData() {
//       for (let i = 0; i<= length(dataTest); i++){
//
//
//
//     }

//     $.getJSON("", filterData, function (result) {
//         $('#myTable').bootstrapTable('load', result.content);
//         var totalPages = result.totalPages;
//         var pagesToDisplay = [];
//         var page = filterData.page;
//
//
//         for (let i = 0; i < totalPages; i++) {
//             pagesToDisplay.push(i)
//         }
//
//
//         document.getElementById('pages').innerHTML = "";
//         for (var pag in pagesToDisplay) {
//             var page2 = parseInt(pag) + 1;
//             console.log("test: ", page, parseInt(pag));
//             console.log(page + 1 === parseInt(pag));
//             document.getElementById('pages').innerHTML += '<li><button class="pageButton ' + (page === parseInt(pag) ? 'pageButtonActive' : '') + '" onclick="loadData(' + (pag) + ')">' + page2 + '</button</li>'
//
//
//         }
//     })
// }
function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

$(document).ready(function () {
  function populateCardTable(cards) {
    $("#dynamic-table tbody").empty();

    cards.forEach((card) => {
      const newRow = `
               <tr>
                   <td>${card.name}</td>
                   <td>${card.manaCost}</td>
                   <td>${card.type}</td>
                   <td>${card.rarity}</td>
                   <td>${card.set}</td>
                   <td><button class="delete-btn">Delete</button></td>
               </tr>
           `;
      $("#dynamic-table tbody").append(newRow);
    });
  }

  const defaultCardSearch = "Phage the Untouchable";
  $.ajax({
    url: `https://api.magicthegathering.io/v1/cards?name=${defaultCardSearch}`,
    method: "GET",
    success: function (response) {
      if (response.cards && response.cards.length > 0) {
        populateCardTable(response.cards);
      } else {
        $("#mtgInfo").html('No cards found for "Phage the Untouchable".');
      }
    },
    error: function () {
      $("#mtgInfo").html("Error fetching card data.");
    },
  });

  $("#viewMtg").on("click", function () {
    const cardName = $("#mtg").val().toLowerCase();

    $.ajax({
      url: `https://api.magicthegathering.io/v1/cards?name=${cardName}`,
      method: "GET",
      success: function (response) {
        if (response.cards && response.cards.length > 0) {
          populateCardTable(response.cards);
        } else {
          $("#mtgInfo").html("Card not found. Please try again.");
        }
      },
      error: function () {
        $("#mtgInfo").html("Error fetching card data.");
      },
    });
  });

  function addCardRow(card) {
    const newRow = `
            <tr>
                <td>${card.name}</td>
                <td>${card.manaCost}</td>
                <td>${card.type}</td>
                <td>${card.rarity}</td>
                <td>${card.set}</td>
                <td><button class="delete-btn">Delete</button></td>
            </tr>
        `;
    $("#dynamic-table tbody").append(newRow);
  }

  $("#add-card-btn").on("click", function () {
    const cardName = $("#card-name").val();
    const manaCost = $("#card-manaCost").val();
    const cardType = $("#card-type").val();
    const rarity = $("#card-rarity").val();
    const set = $("#card-set").val();

    if (!cardName || !manaCost || !cardType || !rarity || !set) {
      alert("Please fill in all fields before adding a card.");
      return;
    }

    const newCard = {
      name: cardName,
      manaCost: manaCost,
      type: cardType,
      rarity: rarity,
      set: set,
    };

    addCardRow(newCard);

    $("#card-name").val("");
    $("#card-manaCost").val("");
    $("#card-type").val("");
    $("#card-rarity").val("");
    $("#card-set").val("");
  });

  $(document).on("click", ".delete-btn", function ()
  {
    $(this).closest("tr").remove();
  });

  $("#table-search").on("input", function () {
    const searchQuery = $(this).val().toLowerCase();
    $("#dynamic-table tbody tr").each(function () {
      const rowText = $(this).text().toLowerCase();
        if (rowText.includes(searchQuery))
        {
            $(this).show();
        }
        else
        {
            $(this).hide();
        }
    });
  });

  function sortTable(columnIndex, ascending) {
    const rows = $("#dynamic-table tbody tr").get();
    rows.sort(function (a, b) {
      const colA = $(a).children("td").eq(columnIndex).text().toLowerCase();
      const colB = $(b).children("td").eq(columnIndex).text().toLowerCase();

      if (colA < colB) {
        return ascending ? -1 : 1;
      }
      if (colA > colB) {
        return ascending ? 1 : -1;
      }
      return 0;
    });

    $.each(rows, function (index, row) {
      $("#dynamic-table tbody").append(row);
    });
  }

  let currentSort = {};
  $(".sortable").on("click", function () {
    const column = $(this).data("column");
    const columnIndex = $(this).index();
    const ascending = currentSort[column] ? !currentSort[column] : true; // Toggle sort order

    currentSort = { [column]: ascending };

    sortTable(columnIndex, ascending);
  });
});

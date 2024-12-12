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
                   <td>
                      <button class="edit-btn">Edit</button>
                      <button class="delete-btn">Delete</button>
                   </td>
               </tr>
           `;
      $("#dynamic-table tbody").append(newRow);
    });

    // Reattach the edit button click event after rows are dynamically added
    attachEditEvent();
  }

  function showNotification(message, isSuccess = true) {
    const notification = $("#notification");
    const messageElement = $("#notification-message");

    messageElement.text(message);
    notification.removeClass("hidden");
    notification.toggleClass("error", !isSuccess);
    notification.fadeIn();

    setTimeout(() => {
      notification.fadeOut(() => {
        notification.addClass("hidden");
      });
    }, 3000); // Notification stays visible for 3 seconds
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
                <td>
                  <button class="edit-btn">Edit</button>
                  <button class="delete-btn">Delete</button>
                </td>
            </tr>
        `;
    $("#dynamic-table tbody").append(newRow);

    // Reattach the edit button click event after adding a new row
    attachEditEvent();
  }

  $("#add-card-btn").on("click", function () {
    const cardName = $("#add-card-name").val();
    const manaCost = $("#add-card-manaCost").val();
    const cardType = $("#add-card-type").val();
    const rarity = $("#add-card-rarity").val();
    const set = $("#add-card-set").val();

    if (!cardName || !manaCost || !cardType || !rarity || !set) {
      showNotification(
        "Please fill in all fields before adding a card.",
        false
      );
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
    showNotification("Card added successfully!");

    $("#add-card-name").val("");
    $("#add-card-manaCost").val("");
    $("#add-card-type").val("");
    $("#add-card-rarity").val("");
    $("#add-card-set").val("");

    createModal.style.display = "none";
  });

  $(document).on("click", ".delete-btn", function () {
    $(this).closest("tr").remove();
    showNotification("Card deleted successfully!");
  });

  $("#table-search").on("input", function () {
    const searchQuery = $(this).val().toLowerCase();
    $("#dynamic-table tbody tr").each(function () {
      const rowText = $(this).text().toLowerCase();
      if (rowText.includes(searchQuery)) {
        $(this).show();
      } else {
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
    const ascending = currentSort[column] ? !currentSort[column] : true;

    currentSort = { [column]: ascending };

    sortTable(columnIndex, ascending);
  });

  var createModal = document.getElementById("createModal");

  $("#createFormOpen").on("click", function () {
    createModal.style.display = "block";
  });

  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  var form = document.getElementById("editForm");
  var cardNameInput = document.getElementById("card-name");
  var cardManaInput = document.getElementById("card-manaCost");
  var cardTypeInput = document.getElementById("card-type");
  var cardRarityInput = document.getElementById("card-rarity");
  var cardSetInput = document.getElementById("card-set");

  var selectedRow;
  
  // Attach the edit button event dynamically
  function attachEditEvent() {
    $(".edit-btn").off("click").on("click", function () {
      selectedRow = $(this).closest("tr")[0];

      var cardName = selectedRow.cells[0].innerText;
      var cardMana = selectedRow.cells[1].innerText;
      var cardType = selectedRow.cells[2].innerText;
      var cardRarity = selectedRow.cells[3].innerText;
      var cardSet = selectedRow.cells[4].innerText;

      cardNameInput.value = cardName;
      cardManaInput.value = cardMana;
      cardTypeInput.value = cardType;
      cardRarityInput.value = cardRarity;
      cardSetInput.value = cardSet;

      modal.style.display = "block";
    });
  }

  span.onclick = function () {
    modal.style.display = "none";
    createModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == createModal) {
      createModal.style.display = "none";
    }
  };

  form.onsubmit = function (e) {
    e.preventDefault();

    var updatedCardName = cardNameInput.value;
    var updatedCardMana = cardManaInput.value;
    var updatedCardType = cardTypeInput.value;
    var updatedCardRarity = cardRarityInput.value;
    var updatedCardSet = cardSetInput.value;

    if (selectedRow) {
      selectedRow.cells[0].innerText = updatedCardName;
      selectedRow.cells[1].innerText = updatedCardMana;
      selectedRow.cells[2].innerText = updatedCardType;
      selectedRow.cells[3].innerText = updatedCardRarity;
      selectedRow.cells[4].innerText = updatedCardSet;

      showNotification("Card edited successfully!");
    } else {
      showNotification("Error editing card.", false);
    }

    modal.style.display = "none";
    selectedRow = null;
  };
});

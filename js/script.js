//  Function to rotate reading glass icon

const glass = document.getElementById("rotate");

glass.addEventListener("click", function () {
  glass.classList.toggle("rotate");
});

// End Function to rotate reading glass icon

////////   Data Base
const data = [
  {
    imageUrl: `assets/images/posts/Post thumbnail-1.png`,
    header: "Wonderful Copenhagen 2021",
    textPublished: "Published 12/07/2021",
    textInfo:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi consectetur ea ipsam dolores! Laboriosam eveniet qui vel minus inventore id esse commodi unde quidem culpa a, quo dicta ad dolores deserunt quisquam necessitatibus,incidunt assumenda voluptatibus atque nobis earum odit...",
  },
  {
    imageUrl: `assets/images/posts/Post thumbnail-2.png`,
    header: "Wonderful Copenhagen 2021",
    textPublished: "Published 12/07/2021",
    textInfo:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi consectetur ea ipsam dolores! Laboriosam eveniet qui vel minus inventore id esse commodi unde quidem culpa a, quo dicta ad dolores deserunt quisquam necessitatibus,incidunt assumenda voluptatibus atque nobis earum odit...",
  },
  {
    imageUrl: `assets/images/posts/Post thumbnail-3.png`,
    header: "Wonderful Copenhagen 2021",
    textPublished: "Published 12/07/2021",
    textInfo:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi consectetur ea ipsam dolores! Laboriosam eveniet qui vel minus inventore id esse commodi unde quidem culpa a, quo dicta ad dolores deserunt quisquam necessitatibus,incidunt assumenda voluptatibus atque nobis earum odit...",
  },
  {
    imageUrl: `assets/images/posts/Post thumbnail-4.png`,
    header: "Wonderful Copenhagen 2021",
    textPublished: "Published 12/07/2021",
    textInfo:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi consectetur ea ipsam dolores! Laboriosam eveniet qui vel minus inventore id esse commodi unde quidem culpa a, quo dicta ad dolores deserunt quisquam necessitatibus,incidunt assumenda voluptatibus atque nobis earum odit...",
  },
  {
    imageUrl: `assets/images/posts/Post thumbnail-5.png`,
    header: "Wonderful Copenhagen 2021",
    textPublished: "Published 12/07/2021",
    textInfo:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi consectetur ea ipsam dolores! Laboriosam eveniet qui vel minus inventore id esse commodi unde quidem culpa a, quo dicta ad dolores deserunt quisquam necessitatibus,incidunt assumenda voluptatibus atque nobis earum odit...",
  },
  {
    imageUrl: `assets/images/posts/Post thumbnail-6.png`,
    header: "Wonderful Copenhagen 2021",
    textPublished: "Published 12/07/2021",
    textInfo:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi consectetur ea ipsam dolores! Laboriosam eveniet qui vel minus inventore id esse commodi unde quidem culpa a, quo dicta ad dolores deserunt quisquam necessitatibus,incidunt assumenda voluptatibus atque nobis earum odit...",
  },
  {
    imageUrl: `assets/images/posts/Post thumbnail-7.png`,
    header: "Wonderful Copenhagen 2021",
    textPublished: "Published 12/07/2021",
    textInfo:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi consectetur ea ipsam dolores! Laboriosam eveniet qui vel minus inventore id esse commodi unde quidem culpa a, quo dicta ad dolores deserunt quisquam necessitatibus,incidunt assumenda voluptatibus atque nobis earum odit...",
  },
  {
    imageUrl: `assets/images/posts/Post thumbnail-8.png`,
    header: "Wonderful Copenhagen 2021",
    textPublished: "Published 12/07/2021",
    textInfo:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi consectetur ea ipsam dolores! Laboriosam eveniet qui vel minus inventore id esse commodi unde quidem culpa a, quo dicta ad dolores deserunt quisquam necessitatibus,incidunt assumenda voluptatibus atque nobis earum odit...",
  },
  {
    imageUrl: `assets/images/posts/Post thumbnail-9.png`,
    header: "Wonderful Copenhagen 2021",
    textPublished: "Published 12/07/2021",
    textInfo:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi consectetur ea ipsam dolores! Laboriosam eveniet qui vel minus inventore id esse commodi unde quidem culpa a, quo dicta ad dolores deserunt quisquam necessitatibus,incidunt assumenda voluptatibus atque nobis earum odit...",
  },
  {
    imageUrl: `assets/images/posts/Post thumbnail-10.png`,
    header: "Wonderful Copenhagen 2021",
    textPublished: "Published 12/07/2021",
    textInfo:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi consectetur ea ipsam dolores! Laboriosam eveniet qui vel minus inventore id esse commodi unde quidem culpa a, quo dicta ad dolores deserunt quisquam necessitatibus,incidunt assumenda voluptatibus atque nobis earum odit...",
  },
  {
    imageUrl: `assets/images/posts/Post thumbnail-11.png`,
    header: "Wonderful Copenhagen 2021",
    textPublished: "Published 12/07/2021",
    textInfo:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi consectetur ea ipsam dolores! Laboriosam eveniet qui vel minus inventore id esse commodi unde quidem culpa a, quo dicta ad dolores deserunt quisquam necessitatibus,incidunt assumenda voluptatibus atque nobis earum odit...",
  },
  {
    imageUrl: `assets/images/posts/Post thumbnail-12.png`,
    header: "Wonderful Copenhagen 2021",
    textPublished: "Published 12/07/2021",
    textInfo:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi consectetur ea ipsam dolores! Laboriosam eveniet qui vel minus inventore id esse commodi unde quidem culpa a, quo dicta ad dolores deserunt quisquam necessitatibus,incidunt assumenda voluptatibus atque nobis earum odit...",
  },
  {
    imageUrl: `assets/images/posts/Post thumbnail-13.png`,
    header: "Wonderful Copenhagen 2021",
    textPublished: "Published 12/07/2021",
    textInfo:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi consectetur ea ipsam dolores! Laboriosam eveniet qui vel minus inventore id esse commodi unde quidem culpa a, quo dicta ad dolores deserunt quisquam necessitatibus,incidunt assumenda voluptatibus atque nobis earum odit...",
  },
  {
    imageUrl: `assets/images/posts/Post thumbnail-14.png`,
    header: "Wonderful Copenhagen 2021",
    textPublished: "Published 12/07/2021",
    textInfo:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi consectetur ea ipsam dolores! Laboriosam eveniet qui vel minus inventore id esse commodi unde quidem culpa a, quo dicta ad dolores deserunt quisquam necessitatibus,incidunt assumenda voluptatibus atque nobis earum odit...",
  },
  {
    imageUrl: `assets/images/posts/Post thumbnail-15.png`,
    header: "Wonderful Copenhagen 2021",
    textPublished: "Published 12/07/2021",
    textInfo:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi consectetur ea ipsam dolores! Laboriosam eveniet qui vel minus inventore id esse commodi unde quidem culpa a, quo dicta ad dolores deserunt quisquam necessitatibus,incidunt assumenda voluptatibus atque nobis earum odit...",
  },
];
////////   End Data Base

$(document).ready(function () {
  // Items per page
  const itemsPerPage = 3;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Initial page
  let currentPage = 1;

  ///////  Function to display data for the current page and change pages  ////////
  function displayData() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentPageData = data.slice(start, end);

    // Display data
    $("#data-container").empty();
    currentPageData.forEach((item) => {
      const card = $("<div>").addClass("col p-0 mt-lg-3");
      const cardMainContainer = $("<div>").addClass("card border-0");
      const cardBody = $("<div>").addClass("row d-inline d-lg-flex");

      const img = $(
        `<img src="${item.imageUrl}" alt="Card Image" class="col-12 col-lg-4 ms-4 p-0 object-fit-cover img-fluid card-image">`
      );

      const cardFinalContainer = $("<div>").addClass(
        "card-body col-lg-7 py-0 px-4 d-flex flex-column justify-content-between"
      );
      const header = $(`<h2>${item.header}</h2>`).addClass(
        "card-title bolder-sm-screen mt-4 mt-lg-0"
      );
      const textPublised = $(`<p>${item.textPublished}</p>`).addClass(
        "card-text text-warning h4"
      );
      const button = $(`<button type="button"
      class="btn btn-lg btn-outline-dark rounded-0 align-self-baseline mt-2 mt-lg-0"
      data-bs-toggle="modal"
      data-bs-target="#articleModal">Read More</button>`);
      const textInfo = $(`<p>${item.textInfo}</p>`).addClass("h5 lh-base");

      card.append(cardMainContainer);
      cardMainContainer.append(cardBody);
      cardBody.append(img, cardFinalContainer);
      cardFinalContainer.append(header, textPublised, textInfo, button);

      $("#data-container").append(card);
    });

    // Display Page Description
    $("#pageDescription")
      .empty()
      .append(`Page ${currentPage} of ${totalPages}`);

    // Prev and Next Page Buttons
    prevButton();
    nextButton();
  }
  ///////  END Function to display data for the current page and change pages  ////////

  // Function to show prev page.
  function prevButton() {
    const prevButton = $("#prevButton");

    prevButton.off("click");
    prevButton.on("click", function () {
      currentPage -= 1;
      if (currentPage < 1) {
        currentPage = totalPages;
      }

      setTimeout(() => {
        displayData();
      }, 200);
    });
  }

  // Function to show next page
  function nextButton() {
    const nextButton = $("#nextButton");

    nextButton.off("click");
    nextButton.on("click", function () {
      currentPage += 1;
      if (currentPage > totalPages) {
        currentPage = 1;
      }

      setTimeout(() => {
        displayData();
      }, 200);
    });
  }

  displayData();
});

/////////// Funcionality to Search Throw Website. //////////////

// Variables to tooggle search results.
let isOpened1 = false;
let isOpened2 = false;

// Function-1 to display search input on small device
function search() {
  const resultsContainer = document.getElementById("searchResults");

  // Clear previous results
  resultsContainer.innerHTML = "";

  // Parts of articles I want to be shown up.
  const filteredData = data.slice(0, 3);

  resultsContainer.style.display =
    resultsContainer.style.display === "none" ? "inline-block" : "none";

  // Display search results dynamically
  if (!isOpened1)
    filteredData.forEach((item) => {
      const li = document.createElement("li");

      li.innerHTML = `<strong class="h4 fw-bolder">${
        item.header
      }</strong> <p class="mt-1 mb-0  fw-lighter"><small>${
        item.textPublished
      }</small></p> <p class="mt-1  fw-lighter"><small>${
        item.textInfo.slice(0, 77) + "..."
      }</small></p> <hr></hr>`;
      resultsContainer.appendChild(li);
    });

  isOpened1 = !isOpened1;
}

// Function-2 to display search input on big device
function search2() {
  const resultsContainer = document.getElementById("searchResults2");

  // Clear previous results
  resultsContainer.innerHTML = "";

  // Parts of articles I want to be shown up.
  const filteredData = data.slice(0, 3);

  resultsContainer.style.display =
    resultsContainer.style.display === "none" ? "inline-block" : "none";

  // Display search results dynamically
  if (!isOpened2)
    filteredData.forEach((item) => {
      const li = document.createElement("li");

      li.innerHTML = `<strong class="h4 fw-bolder">${
        item.header
      }</strong> <p class="mt-1 mb-0  fw-lighter"><small>${
        item.textPublished
      }</small></p> <p class="mt-1  fw-lighter"><small>${
        item.textInfo.slice(0, 77) + "..."
      }</small></p> <hr></hr>`;
      resultsContainer.appendChild(li);
    });

  isOpened2 = !isOpened2;
}

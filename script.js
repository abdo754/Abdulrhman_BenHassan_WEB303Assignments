/*
    Assignment 05
    name:Abdulrhman BenHassan
*/


$(document).ready(function () {
  class ContentItem {
    // Properties
    IDNumber;
    Name;
    Description;
    CategoryGenre;

    // Constructor
    constructor(IDNumber, Name, Description, CategoryGenre) {
      this.IDNumber = IDNumber;
      this.Name = Name;
      this.Description = Description;
      this.CategoryGenre = CategoryGenre;
    }

    // Method to update content item
    updateContentItem(IDNumber, Name, Description, CategoryGenre) {
      if (this.IDNumber === IDNumber) {
        if (Name !== null) {
          this.Name = Name;
        }
        if (Description !== null) {
          this.Description = Description;
        }
        if (CategoryGenre !== null) {
          this.CategoryGenre = CategoryGenre;
        }
      }
    }

    // Method to generate HTML representation of content item
    toString() {
      return `
        <div class="content-item-wrapper" id="content-item-${this.IDNumber}">
          <h2>${this.Name}</h2>
          <p>${this.Description}</p>
          <div>${this.CategoryGenre}</div>
        </div>
      `;
    }
  }

  const $contentList = $("#content-item-list");

  const contentItems = [
    new ContentItem(0, "MAX", "he love the sport but he is just lazy sometime", "basketball"),
    new ContentItem(1, "Abdul", "Abdul is very taled player but his attide is not the best", "soccer"),
    new ContentItem(2, "Abbas", "he is young player as some time to impove ", "golf"),
    new ContentItem(3, "Obeida", "he is loved the sports but got injured and could play ", "football"),
    new ContentItem(4, "JR", "he just played for fun", "cars"),
  ];

  contentItems.forEach((contentItem) => {
    const $contentItem = $(contentItem.toString());

    // Add styles to the content item
    $contentItem.css({
      border: "1px solid #ccc",
      width: "300px",
      padding: "10px",
      margin: "10px auto",
    });

    $contentList.append($contentItem);
  });
});



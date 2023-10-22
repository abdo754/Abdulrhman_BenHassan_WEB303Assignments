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
      new ContentItem(0, "Item 1", "Description 1", "Genre 1"),
      new ContentItem(1, "Item 2", "Description 2", "Genre 2"),
      new ContentItem(2, "Item 3", "Description 3", "Genre 3"),
      new ContentItem(3, "Item 4", "Description 4", "Genre 4"),
      new ContentItem(4, "Item 5", "Description 5", "Genre 5"),
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



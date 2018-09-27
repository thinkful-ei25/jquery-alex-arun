'use strict';

function main() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const input = $('.js-shopping-list-entry').val();
    // Create a new shopping list item
    const newItem = `
      <li>
        <span class="shopping-item">${input}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button
        </div>
      </li>`;
    // Append new item to the shoppingList
    $('ul.shopping-list').append(newItem);
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
    const listItemRoot = $(this).closest('li');
    const itemSpan = listItemRoot.find('.shopping-item');
    itemSpan.toggleClass('shopping-item__checked');
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
    const itemRoot = $(this).closest('li');
    itemRoot.remove();
  });
}

$(main);

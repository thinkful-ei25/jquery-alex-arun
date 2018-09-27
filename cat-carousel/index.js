'use strict';

function main() {
  $('.thumbnail').click(function (event) {
    const heroImage = $('.hero img')
    const thumbnailImage = $(this).find('img');
    heroImage.attr('src', thumbnailImage.attr('src'));
    heroImage.attr('alt', thumbnailImage.attr('alt'));
  });
}

$(main);

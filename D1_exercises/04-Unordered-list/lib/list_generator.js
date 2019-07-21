const listItem = (content) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)
  content.map(function (content1) {
    return ("<li class='list-group-item'>" + content1 + "</li>");
  });
};

const unorderedList = (items) => {
  // TODO: return the proper <ul> markup (as a string)

};

module.exports = { listItem, unorderedList }; // Do not remove.

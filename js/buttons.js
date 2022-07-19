function appendHtml(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}
const html = `
<div class="buttons">
  <div class="button-29" role="button" onclick="location.href='./index.html';">Demo 1</div>
  <div class="button-29" role="button" onclick="location.href='./index3.html';">Demo 2</div>
  <div class="button-29" role="button" onclick="location.href='./index5.html';">Demo 3</div>
  <div class="button-29" role="button" onclick="location.href='./index2.html';">Demo 4</div>
  <div class="button-29" role="button" onclick="location.href='./int-index.html';">Int Demo 1</div>
  <div class="button-29" role="button" onclick="location.href='./int-index2.html';">Int Demo 2</div>
  <div class="button-29" role="button" onclick="location.href='./int-index3.html';">Int Demo 3</div>
  <div class="button-29" role="button" onclick="location.href='./int-index4.html';">Int Demo 4</div>
  <div class="button-29" role="button" onclick="location.href='./int-index5.html';">Int Demo 5</div>
</div>
`;

appendHtml(document.body, html);

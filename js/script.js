const card = document.getElementById("cards");
const tbody = document.getElementById("tbody");
const noOfProduct = document.getElementById("no-of-product");
card.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    const card = e.target?.parentElement?.parentElement?.parentElement;
    const img = card.querySelector("img");
    const title = card.querySelector(".card-title");
    const price = card.querySelector(".price");
    let isMatched = false;
    let matchedItem,
      items,
      totalProduct = 0;
    if (tbody.childElementCount > 0) {
      for (let child of tbody.children) {
        if (child.querySelector("img").src === img.src) {
          isMatched = true;
          matchedItem = child;
        }
      }
      if (isMatched) {
        items = parseInt(matchedItem.querySelector(".count").innerText);
        matchedItem.querySelector(".count").innerText = items += 1;
        // console.log(matchedItem.querySelector(".price")
        matchedItem.querySelector(".price").innerText =
          items * parseInt(price.innerText);
      } else createElement(img, title, price);
    } else {
      createElement(img, title, price);
    }
    for (child of tbody.children) {
      totalProduct += parseInt(child.querySelector(".count").innerText);
    }
    noOfProduct.innerText = totalProduct;
  }
});

const createElement = (img, title, price) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
     <tr>
        <th>
          
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar ">
                <img  class=' h-32 w-32 rounded-lg shadow-xl' src = '${img.src}' />
            </div>
              <div class="font-bold text-xl ">${title.innerText} <span  class='text-base text-primary'>x<span class= 'count'>1</span></span></div>      
          </div>
        </td>
        <td class= 'text-2xl text-warning font-extrabold tracking-widest'>$<span class= 'price'>${price.innerText}</span>
        </td>
      </tr>
    `;
  tbody?.appendChild(tr);
};

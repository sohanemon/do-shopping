const card = document.getElementById("cards");
const tbody = document.getElementById("tbody");
const noOfProduct = document.getElementById("no-of-product");
card.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    const card = e.target?.parentElement?.parentElement?.parentElement;
    const img = card.querySelector("img");
    const title = card.querySelector(".card-title");
    const price = card.querySelector(".price");
    console.dir(img);
    createElement(img, title, price);
    noOfProduct.innerText = tbody.childElementCount;
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
        
              <div class="font-bold text-xl ">${title.innerText}</div>
        
          </div>
        </td>
        <td class= 'text-2xl text-warning font-extrabold tracking-widest'>$${price.innerText}
        </td>
     
      </tr>
    `;
  console.log(tbody);
  tbody?.appendChild(tr);
};

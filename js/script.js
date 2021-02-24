var total = Number(document.getElementById("cart-total-price").innerHTML);
console.log(total);
var plus_btn = document.querySelectorAll(".plus-btn");
for (let btn of plus_btn) {
  btn.addEventListener("click", function () {
    var price = Number(
      document.getElementById(btn.getAttribute("name") + "_price").innerHTML
    );

    var quantity = Number(
      document.getElementById(btn.getAttribute("name") + "_qty").innerHTML
    );
    quantity++;
    total += price * quantity;

    document.getElementById("cart-total-price").innerHTML = total + "$";
    document.getElementById(
      btn.getAttribute("name") + "_qty"
    ).innerHTML = quantity;
  });
}

var minus_btn = document.querySelectorAll(".minus-btn");
for (let btn of minus_btn) {
  btn.addEventListener("click", function () {
    var price = Number(
      document.getElementById(btn.getAttribute("name") + "_price").innerHTML
    );
    var quantity = Number(
      document.getElementById(btn.getAttribute("name") + "_qty").innerHTML
    );
    if (quantity > 0) {
      total -= price * quantity;
      quantity--;
      document.getElementById("cart-total-price").innerHTML = total + "$";
      document.getElementById(
        btn.getAttribute("name") + "_qty"
      ).innerHTML = quantity;
    } else alert("You cant remove the item");
  });
}

var delete_btn = document.querySelectorAll(".delete-btn");
for (let btn of delete_btn) {
  btn.addEventListener("click", function () {
    var price = Number(
      document.getElementById(btn.getAttribute("name") + "_price").innerHTML
    );
    var quantity = Number(
      document.getElementById(btn.getAttribute("name") + "_qty").innerHTML
    );

    total -= price * quantity;
    document.getElementsByClassName("cart-total-price").innerHTML =
      total + "$";
    document.getElementById(btn.getAttribute("name")).remove();
  });
}

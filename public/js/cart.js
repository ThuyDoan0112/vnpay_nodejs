if (window.location.href.search("cart") != -1) {
  const getParent = (element) => {
    const par = element.parentNode.parentNode.parentNode;
    return par;
  };

  const getPrice = (element) => {
    const price = element.querySelector(".price").innerText.split("$")[1];
    return price;
  };

  const getNubmer = (element) => {
    const number = element.parentNode.querySelector(".num-product").value;
    return number;
  };

  const getSummAll = (element) => {
    let sum = 0;
    element.parentNode.querySelectorAll("tr").forEach((item) => {
      const price = +item.querySelector(".total").innerText.split("$")[1];
      sum += price;
    });
    return sum;
  };
  document.querySelectorAll(".btn-sm").forEach((btn) => {
    btn.onclick = (e) => {
      const element = getParent(e.currentTarget);
      const price = +getPrice(element);
      const number = +getNubmer(e.currentTarget);
      const total = price * number;
      element.querySelector(".total").innerText = "$".concat(total);
      const sumTotal = getSummAll(element);
      console.log(sumTotal);
      document.querySelector(".sumtotal").innerText = "$".concat(sumTotal);
      document.querySelector(".sumtotal_1").innerText = "$".concat(
        sumTotal + 10
      );
    };
  });

  document.querySelector(".submit_cart").onclick = (e) => {
    const total = document.querySelector(".sumtotal_1").innerText.split("$")[1];
    console.log(total);
    window.location.href = `/order/create_payment_url`;
  };
}

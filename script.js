const endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json";

async function getPrice() {
  try {
    let response = await fetch(endpoint);
    let data = await response.json();

    // console.log(data);

    let price = data.bpi.USD.rate;

    document.body.innerHTML = '';

    // display on html
    let text = document.createElement("span");
    text.className = "text-btc";
    document.body.append(price);
  } catch (error) {
    console.log(error);
  }
}

getPrice();

setInterval(getPrice, 10000);

//finally
//throw
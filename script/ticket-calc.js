// scroll down to ticket purchasing page

function buyTicket(buyTickets, ticketPurchase){
    const ticketSection = document.getElementById('ticketPurchase');
    ticketSection.scrollIntoView({behavior: 'smooth'});
}

// change seat availability

function toggleSeat(seat) {
    seat.classList.toggle("selected");
  }
  
  const allSeat = document.getElementsByClassName("seat");
  let count = 40;
  
  for (const seat of allSeat) {
    seat.addEventListener("click", function (e) {
      count = count - 1;
  
      const seatName = e.target.parentNode.childNodes[3].innerText;
  
      const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
  
      const selectedContainer = document.getElementById(
        "selected-seat-container"
      );
  
      const li = document.createElement("li");
  
      const p = document.createElement("p");
      p.innerText = seatName;
      const p2 = document.createElement("p2");
      p2.innerText = price;
  
      li.appendChild(p);
      li.appendChild(p2);
      selectedContainer.appendChild(li);
  
      const totalCost = document.getElementById("total-cost").innerText;
  
      const convertedTotalCost = parseInt(totalCost);
      const sum = convertedTotalCost + parseInt(price);
      document.getElementById("total-cost").innerText = sum;
  
      setInnerText("total-cost", sum);
      setInnerText("seat-left", count);
    });
  }
  function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
  }



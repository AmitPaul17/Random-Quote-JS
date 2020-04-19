(function() {
    const quotes = [
      {
        quote:
          "If A is success in life, then A is equal to X plus Y plus Z. Work is X; Y is play; and Z - keeping your mouth shut.",
        author: "Albert Einstein"
      },
      {
        quote:
          "Any man who can drive safely while kissing a pretty girl is simply not giving the kiss the attention it deserves.",
        author: "Albert Einstein"
      },
      {
        quote:
          "God save me from my friends. I can protect myself from my enemies.",
        author: "Claude Louis Hector de Villars "
      },
      {
        quote: "The price of anything is the amount of life you exchange for it.",
        author: "David Thoreau"
      },
      {
        quote:
          "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
        author: "Charles Lindbergh"
      },
      {
        quote:
          "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        author: "Tyne Daly"
      },
      {
        quote:
          "You can only be young once. But you can always be immature.",
        author: "Dave Barry"
      }
    ];
  
    const btn = document.getElementById("generate-btn");
  
    btn.addEventListener("click", function() {
      let random = Math.floor(Math.random() * quotes.length);
      console.log(random);
  
      document.getElementById("quote").textContent = quotes[random].quote;
      document.querySelector(".author").textContent = quotes[random].author;
    });
  })();
  
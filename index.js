//------------//

document.addEventListener('DOMContentLoaded', (addListener) => {
    getAllBooks();
  });


//Creating a variable and setting it to data| Surround with Backstick to it's actual strings//
let BooksDatabase = `{"DatabaseGreene":[
    {
        "id": 1,
        "name": "The 48 Laws of Power",
        "imageURL": "https://images.penguinrandomhouse.com/cover/9780140280197",
        "description": "The 48 Laws of Power by Robert Greene is a self-help book offering advice on how to gain and maintain power, using lessons drawn from parables and the experiences of historical figures. Power depends on the relationships between a person and those he or she seeks to control."
    },
    {
        "id": 2,
        "name": "The Art of Seduction",
        "imageURL": "https://images-na.ssl-images-amazon.com/images/I/71KV-xnQu0L.jpg",
        "description": "In The Art Of Seduction, Greene profiles nine types of seducers, the nine shades of anti-seducers, all of which are insecure, and 18 types of seduction victims. He also outlines a 24-step process of seduction in four phases."
    },
    {
        "id": 3,
        "name": "Mastery",
        "imageURL": "https://images-na.ssl-images-amazon.com/images/I/71LRdEUOmNL.jpg",
        "description": "In Mastery, which concerns the pursuit of virtuosity in one's field (and, according to Greene, ends the journey that began with 48 Laws), Greene finally mentions the value of a “great contribution to society.” Elevating this brand of altruism over self-aggrandizement, the book becomes his most essential work."
    },
    {
        "id": 4,
        "name": "Dream Lover",
        "imageURL": "https://images-na.ssl-images-amazon.com/images/I/513GWPVRJ4L.jpg",
        "description": "This novel begins with a man attempting to cope with the loss of his wife to a drunk driver. Too soon after the tragedy, he begins to dream of a very beautiful, young woman he once knew. He attempts to shed his sorrow by rejoining the social community. His thoughts and emotions keep turning to the dream lover."
    },
    {
        "id": 5,
        "name": "Talking to Myself",
        "imageURL": "https://images-na.ssl-images-amazon.com/images/I/71sqM8j21hL.jpg",
        "description": "Talking to Myself takes the reader on a journey of discovery. The story follows a charged conversation a biologist has with “himself” from the first unexpected moment to a climactic vision of discovery. Bob Greene's writing is consistently engaging, clever, at times humorous, and at times deeply touching."
    },
    {
        "id": 6,
        "name": "The 50th Law",
        "imageURL": "https://upload.wikimedia.org/wikipedia/en/1/1b/The50thLawBook.jpg",
        "description": "The 50th Law is a New York Times bestselling book on strategy and fearlessness written collaboratively by rapper 50 Cent and author Robert Greene. Your goal in life must be to always move higher and higher up the food chain, where you alone control the direction of your enterprise and depend on no one."
    },
    {
        "id": 7,
        "name": "The Daily Laws",
        "imageURL": "https://images-na.ssl-images-amazon.com/images/I/41nTxAwQQHL._SX329_BO1,204,203,200_.jpg",
        "description": "Over the last 22 years, Robert Greene has provided insights into every aspect of being human whether that be getting what you want, understanding others' motivations, mastering your impulses, and recognizing strengths and weaknesses. The Daily Laws distills that wisdom into daily entries"
    },
    {
        "id": 8,
        "name": "The Laws of Human Nature",
        "imageURL": "https://www.hamiltonbook.com/media/image_full/3758842A.JPG",
        "description": "The Laws Of Human Nature helps you understand why people do what they do and how you can use both your own psychological flaws and those of others to your advantage at work, in relationships, and in life."
    }]
}`

    //Converting into JS Object using JSON DOT PARSE => JS Object//

    console.log(JSON.parse(BooksDatabase))
  

     // Add event listeners to each option selected in the options//

   let bookSelect = document.getElementById('book');
   bookSelect.addEventListener('change', function () {
       alert("option select")
   });

    //Create a function that will display information from Database when click on option selected//
     
    function renderBook(book) {
        const card = document.createElement("li")  
        card.className= "lists"
        card.id=`list-${book.id}`
        card.innerHTML = `
        <img  class="imgBooks" src="${book.imageURL}" width="100" height="100">
        <div>
        <h4>${book.name}</h4>
        <p>${book.description}</p>
        </div>
        <button class="like" onclick = "javascript:alert('click')"> Like &#128077;</button>
        <br/>
        <br/>
        <textarea id = "comment_${book.id}"class="text" cols=70 rows=10></textarea>
        <br/>
        <button class="submit" onclick = "commentDrink('comment_${book.id}', 'list-${book.id}')"> Comment  &#x1F4AD;</button>
        <br/>
        <br/>
        
        `
    
        document.querySelector("#books").appendChild(card)
    };
  
    function commentDrink(id, listId){
        const txt = document.getElementById(id)
        const p = document.createElement('p')
        p.innerText = txt.value
        document.getElementById(list)
        document.getElementById(listId).appendChild(p)
      }

    // Let's create Our Fetch //

    function getAllBooks() {
        fetch(' http://localhost:3000/DatabaseGreene')
        .then(response => response.json())
        .then(BooksDatabase => BooksDatabase.forEach( book =>renderBook(book
            )));
          };
         

         
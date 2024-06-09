import Search from "./components/search.js"
import Chat from "./components/chat.js"
import one from "./assets/images/profile-1.jpg"
import two from "./assets/images/profile-2.jpg"
import three from "./assets/images/profile-3.jpg"
import four from "./assets/images/profile-4.jpg"
import five from "./assets/images/profile-5.jpg"
import six from "./assets/images/profile-6.jpg"

var person = [
  {
    name: "Subash",
    msg: "Send Document Fast",
    time: 11.46,
    image: one
  },
  {
    name: "Karmukilan",
    msg: "Good Morning My Dear Best Friend",
    time: 11.40,
    image: two
  },
  {
    name: "Praga",
    msg: "Enjoy The Day Mapla",
    time: 3.10,
    image: three
  },
  {
    name: "Santhosh",
    msg: "I Call back soon",
    time: 8.00,
    image: four
  },
  {
    name: "Karthi",
    msg: "Please Send the Aadhaar Card",
    time: 9.00,
    image: five
  },
  {
    name: "Mathan",
    msg: "Hi Da How Are You",
    time: 10.00,
    image: six
  }
]

function App() {
  return (
    <div>
      <Search></Search>
      {
      person.map(function(item){
        return(
        <Chat name={item.name} msg={item.msg} time={item.time} image={item.image}></Chat>
        )
      })
    }
    </div>
  )
}

export default App
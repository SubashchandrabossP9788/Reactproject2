function Chat(props){
    return(
        <div class="chat">
        <img class="image" src={props.image} alt=""/>
        <div class="text-box">
            <h3>{props.name}</h3>
            <p>{props.msg}</p>
        </div>
        <div class="star-box">
            <p>{props.time}</p>
            <i class="fa-solid fa-star" style={{color: "#0dbf89"}}></i>
        </div>
    </div>
    )
}

export default Chat
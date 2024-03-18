player = document.getElementById("player-0")
playerName = document.getElementById("player-0-name")
id=0;

document.body.onkeydown = function () {
    if (event.key == "W" || event.key == "w") {
        player.style.top = (parseFloat(player.style.top) - 5) + "px";
        playerName.style.top = (parseFloat(playerName.style.top) - 5) + "px";

    }
    if (event.key == "A" || event.key == "a") {
        player.style.left = (parseFloat(player.style.left) - 5) + "px";
        playerName.style.left = (parseFloat(playerName.style.left) - 5) + "px";

    }
    if (event.key == "S" || event.key == "s") {
        player.style.top = (parseFloat(player.style.top) + 5) + "px";
        playerName.style.top = (parseFloat(playerName.style.top) + 5) + "px";

    }
    if (event.key == "D" || event.key == "d") {
        player.style.left = (parseFloat(player.style.left) + 5) + "px";
        playerName.style.left = (parseFloat(playerName.style.left) + 5) + "px";

    }
    socket.emit("playerinput", {"abc":{top: player.style.top, left: player.style.left }})
}
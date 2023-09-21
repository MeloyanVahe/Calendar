const eventArray = []

class EventDay {
    constructor(id, discription) {
        this.id = id
        this.day = id
        this.discription = discription
    }
}

for (let i = 30; i >= 1; i--) {
    document.querySelector('.daysWrapper').insertAdjacentHTML('afterbegin',
        `<li id = ${i}>${i}</li>`)
    document.getElementById(i).addEventListener('click', function () {
        eventArray.forEach(el => {
            if (+el.id === i) {
                document.body.insertAdjacentHTML('afterbegin',
                    `<div class="popup">
                    <h2>${i} - 09 - 2023թ․</h2>
                    <p>Իրադարձության մանրամասներ</p><br>
                    <div>${el.discription}</div><br><br>
                    <button id="closePopup">Փակել</button>
                </div>`)
                document.getElementById('closePopup').addEventListener('click', function () {
                    document.querySelector('.popup').remove()
                    document.querySelector('.main').style.filter = 'blur(0)'
                })
                document.querySelector('.main').style.filter = 'blur(8px)'
                document.querySelector('.main').style.transitionDuration = "1s"
            }
        })
    })
}
document.querySelector('.btn').addEventListener('click', function () {
    const day = document.getElementById('day').value
    const disc = document.querySelector('.discription').value
    if (day > 0 && day <= 31 && disc) {
        eventArray.push(new EventDay(day, disc))
        document.getElementById(day).classList.add("activeDay")
        document.querySelector('.discription').value = ''
        document.getElementById('day').value = null
    }
})



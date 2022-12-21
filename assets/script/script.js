const SomTag = document.querySelector('.som')
const DollarTag = document.querySelector('.dollar')
const TotalTag = document.querySelector('.total')
const CalcBtn = document.querySelector('.start')


SomSumm = ''
DollarSumm = ''



SomTag.addEventListener('input', (event) => {
    SomSumm = event.target.value
})


DollarTag.addEventListener('input', (event) => {
    DollarSumm = event.target.value

})

const TotalSumm = SomSumm / dollarSumm
TotalTag.addEventListener('input', (event) => {
    TotalSumm = event.target.value
})

CalcBtn.addEventListener('click', () => {
    console.log(TotalSumm);
})
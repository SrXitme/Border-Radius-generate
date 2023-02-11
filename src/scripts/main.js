function mod(){
    let cnt = document.querySelector('#cnt').value
    let cnt2 = document.querySelector('#cnt2').value
    let cnt3 = document.querySelector('#cnt3').value
    let cnt4 = document.querySelector('#cnt4').value
    let out = document.querySelectorAll('.conf-border')
    let border = document.querySelector('#div-radius')
    let btn = document.querySelector('#btn-radius')
    let view = document.querySelector('#view')
    border.style.borderRadius = `${cnt}px ${cnt2}px  ${cnt3}px  ${cnt4}px`
    btn.style.borderRadius = `${cnt}px ${cnt2}px  ${cnt3}px  ${cnt4}px`
    view.innerHTML = `border-radius: ${cnt}px ${cnt2}px ${cnt3}px ${cnt4}px;`
   
    out[0].innerHTML = cnt
    out[1].innerHTML = cnt2
    out[2].innerHTML = cnt3
    out[3].innerHTML = cnt4
    
    
    
}
function copy(){
    let cnt = document.querySelector('#cnt').value
    let cnt2 = document.querySelector('#cnt2').value
    let cnt3 = document.querySelector('#cnt3').value
    let cnt4 = document.querySelector('#cnt4').value
    let view = document.querySelector('#view')
    
   navigator.clipboard.writeText(`border-radius: ${cnt}px ${cnt2}px ${cnt3}px ${cnt4}px;`)
   view.innerHTML = 'Copy sucess'

}
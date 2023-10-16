const btn = document.querySelector('.btn')

btn.addEventListener('click',function(){
  const wM = Math.round(Math.random()*255+1)
  const wG = Math.round(Math.random()*255+1)
  const wB = Math.round(Math.random()*255+1)
  document.body.style.backgroundColor = 'rgb('+wM+','+wG+','+wB+')'
})
const btn2 = document.createElement('button')
const text2 = document.createTextNode('Ganti BG')
const container = document.querySelector('.container')
btn2.appendChild(text2)
btn.after(btn2)
btn2.classList.add('btn2')
btn2.addEventListener('click',function(){
  container.classList.toggle('bg')
  btn2.innerHTML = 'Teu jadi'
  btn2.addEventListener('click',function(){
  btn2.innerHTML = ' Ganti BG'
})
})
const h2= document.querySelector('.h2')
h2.innerHTML = ('SUITEN')
const btn3 = document.createElement('button')
const text3 = document.createTextNode('reload')
btn3.appendChild(text3)
btn2.after(btn3)
btn3.addEventListener('click',function(){
  location.reload()
})
btn3.classList.add('btn3')


function pilihanKomp(){
  const comp = Math.random();
    if ( comp < 0.34 ) return 'batu';
    if ( comp >= 0.34 && comp < 0.67 ) return 'kertas';
    return 'gunting'
    console.log(pilihanKomp())
  }
function hasil(comp,player){
  if (player == comp) return 'SARUA ?!!' ;
  if (player == 'batu' ) return ( comp == 'gunting')?'MEUNANG !':'ELEH !';
  if (player == 'kertas' ) return ( comp == 'gunting')?'ELEH !':'MEUNANG !';
  if (player == 'gunting' ) return ( comp == 'batu')?'ELEH !':'MEUNANG !';
  console.log(hasil())
}

function putar(){
  const imgComp = document.querySelector('.img-komp')
  const gambar = ['batu','kertas','gunting']
  let i= 0
  const waktuMulai = new Date().getTime()
  setInterval(function(){
    if(new Date().getTime() - waktuMulai>1000){
      clearInterval
      return
    }
    imgComp.setAttribute('src','img/'+gambar[i++]+'.png')
    if(i == gambar.length) i=0
  },100)
}


const pilihan = document.querySelectorAll('.player img')
pilihan.forEach(function(pil){
  pil.addEventListener('click',function(){
  const pKomp = pilihanKomp()
  const pP = pil.className
  const alhasil = hasil(pKomp,pP)
  putar()
  setTimeout(function(){
  const imgComputer = document.querySelector('.img-komp')
  imgComputer.setAttribute('src','img/' +pKomp+'.png')
  const info = document.querySelector('.hasil')
  info.innerHTML = alhasil
  },1000)
  // const alhasil = hasil(pKomp,pP)
  // const imgKomp = document.querySelector('.img-komp')
  // imgKomp.setAttribute('src' ,'img/' +pKomp+'.png')
  // const info = document.querySelector('.hasil')
  // info.innerHTML = alhasil
})
})



// const pGajah = document.querySelector('.gajah')
// pGajah.addEventListener('click',function(){
//   const pilihanComputer = getPilihanComputer()
//   const pilihanPlayer = pGajah.className
//   const hasil = getHasil(pilihanComputer,pilihanPlayer)
  
//   const imgComputer = document.querySelector('.img-komputer')
//   imgComputer.setAttribute('src','img/' +pilihanComputer+'.png')
//   const info = document.querySelector('.info')
//   info.innerHTML = hasil
// })
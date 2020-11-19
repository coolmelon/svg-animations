const startFun = () => {
  
  let startTl=gsap.timeline();
  
  const startstuff = document.querySelectorAll('#star-1, #star-2, #goodnight, #haveasweetdream');
  
  startTl
    .set("#moon", { scale: 0.6, autoAlpha: 0.3 })
    .set(startstuff, {autoAlpha: 0});
  
  return startTl; 
}

const cloudFun = () => {

  let cloudTl = gsap.timeline({delay:2});

  cloudTl
    .to("#cloud-1, #cloud-5", {duration: 3, y: 150, ease: "power1.inOut", stagger: 0.1})
    .to("#cloud-2, #cloud-4, #cloud-6", {duration: 3, y: 190, ease: "power1.inOut", stagger: 0.25}, "-=2.8")
    .to("#cloud-3, #cloud-7", {duration: 3, y: 260, ease: "power1.inOut", stagger: 0.25}, "-=2.5")
    .to("#moon", { duration: 3, scale: 0.8, y:20,  autoAlpha: 1, ease:"back.out(1.7)" }, "-=1");
    
  return cloudTl; 
}


const textFun = () => {
 
  let textTl = gsap.timeline();

  textTl
    .fromTo("#goodnight", { y: -50, autoAlpha: 0 }, { duration: 1, y: 30, autoAlpha: 1 , ease: "power2.out"})
    .fromTo("#haveasweetdream", { y: -100, autoAlpha: 0 }, { duration: 1, y: 30, autoAlpha: 1, ease: "power2.out" });
  
  return textTl;
}

const repeatStar = (starid)=> {
    let range = Math.random()*230;
    let offset = 220;
    let xPosition = range - offset; 
    gsap.set(starid, {
      x: xPosition,
      autoAlpha: 0,
      scale: 0.1
    });
    gsap.to(starid, { duration: 1+ Math.random() * 10, autoAlpha: 1 , scale: 1, onComplete: repeatStar, onCompleteParams: [starid], ease: "back.out(3)"});
  }

const starFun = ()=>{
  gsap.to("#star-1", { duration: 1+ Math.random() * 10, delay: 9, autoAlpha: 1 , scale: 1, ease: "back.out(3)", onComplete: repeatStar, onCompleteParams: ["#star-1"]} );   
  gsap.to("#star-2", { duration: 1+ Math.random() * 10, delay: 10, autoAlpha: 1 ,scale: 1, ease: "back.out(3)", onComplete: repeatStar, onCompleteParams: ["#star-2"]} );
}
      
let materTl = gsap.timeline();

materTl
      .add(startFun(), "start-step")
      .add(cloudFun(), "cloud-step")
      .add(textFun(), "text-step")
      .add(starFun(), "star-step");
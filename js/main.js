'use strict';

(() => {

class EarthDrawer {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
  }

  draw(angle, func) {
    this.ctx.save();
    this.ctx.translate(this.width / 2, this.height / 2);
    this.ctx.rotate(Math.PI / 180 * -angle);
    this.ctx.beginPath();
    func(this.ctx);
    this.ctx.stroke();
    this.ctx.restore();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

  class Earth {
    constructor(drawer) {
      this.r = 60;
      this.drawer = drawer;

    }

    drawFace() {
      for (let angle = 0; angle < 360; angle += 10) {
        this.drawer.draw(angle, ctx => {
          ctx.moveTo(0, -this.r);
          if (angle % 30 === 0) {
            ctx.lineWidth = 3;
            ctx.lineTo(0, -this.r + 5);
            ctx.font ='13px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(angle, 0, -this.r - 3);
          } else {
            ctx.lineTo(0, -this.r + 3);
          }
        });
        
      }
    }

    drawMeridians() {
      // 経度０度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(0, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0 * this.r, -1 * this.r);
      });
      // 東経20度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(20, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.34 * this.r, -0.94 * this.r);
      });
      // 東経40度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(40, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.64 * this.r, -0.77 * this.r);
      });
      // 東経60度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(60, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.87 * this.r, -0.50 * this.r);
      });
      // 東経80度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(80, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.98 * this.r, -0.17 * this.r);
      });
      // 東経100度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(100, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.98 * this.r, 0.17 * this.r);
      });
      // 東経120度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(120, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.87 * this.r, 0.50 * this.r);
      });
      // 東経140度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(140, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.64 * this.r, 0.77 * this.r);
      });
      // 東経160度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(160, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(-0.34 * this.r, 0.94 * this.r);
      });
      // 経度180度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(180, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0 * this.r, 1 * this.r);
      });
      // 西経160度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(200, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.34 * this.r, 0.94 * this.r);
      });
      // 西経140度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(220, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.64 * this.r, 0.77 * this.r);
      });
      // 西経120度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(240, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.87 * this.r, 0.50 * this.r);
      });
      // 西経100度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(260, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.98 * this.r, 0.17 * this.r);
      });
      // 西経80度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(280, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.98 * this.r, -0.17 * this.r);
      });
      // 西経60度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(300, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.87 * this.r, -0.50 * this.r);
      });
      // 西経40度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(320, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.64 * this.r, -0.77 * this.r);
      });
      // 西経20度
      this.drawer.draw(this.s * 6, ctx => {
        ctx.fillStyle = 'hsl(340, 50%, 50%)';
        ctx.moveTo(0, 0);
        ctx.lineTo(0.34 * this.r, -0.94 * this.r);
      });
    }

    update() {
      this.h = (new Date()).getHours();
      this.m = (new Date()).getMinutes();
      this.s = (new Date()).getSeconds();
    }
    
    run() {
      this.update();

      this.drawer.clear();
      this.drawFace();
      this.drawMeridians();

      setTimeout(() => {
        this.run();

      }, 10);
    }
  }

  const canvas = document.querySelector('.accessory');
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const earth = new Earth(new EarthDrawer(canvas));
  earth.run();
})();



{
  function draw() {
    const canvas = document.querySelector('.Line_Dash');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(124, 0);
    ctx.lineTo(93, 31);
    ctx.moveTo(31, 93);
    ctx.lineTo(0, 124);
    ctx.strokeStyle= '#002b61'
    ctx.stroke();
  }

  draw();
}


{
  function draw() {
    const canvas = document.querySelector('.Line_Dash2');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(124, 0);
    ctx.lineTo(93, 31);
    ctx.moveTo(31, 93);
    ctx.lineTo(0, 124);
    ctx.strokeStyle= '#002b61'
    ctx.stroke();
  }

  draw();
}


{
  function draw() {
    const canvas = document.querySelector('.Line_Dash3');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(124, 0);
    ctx.lineTo(93, 31);
    ctx.moveTo(31, 93);
    ctx.lineTo(0, 124);
    ctx.strokeStyle= '#002b61'
    ctx.stroke();
  }

  draw();
}



{
  function draw() {
    const canvas = document.querySelector('.LDash');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(260, 0);
    ctx.lineTo(195, 65);
    ctx.moveTo(65, 195);
    ctx.lineTo(0, 260);
    ctx.strokeStyle= '#fff';
    ctx.stroke();
  }

  draw();
}



// {
//   var Swiper = new Swiper ('.swiper-container', {
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   })
// }
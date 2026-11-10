/* N'kisi 3D parrot — smooth-shaded three.js African Grey with textured, individually articulated feathers. window.NkBird3D(THREE,{T}) → {kind:'3d',el,w,h,update(t)} */
(function(){
function cv(w,h,fn){const c=document.createElement('canvas');c.width=w;c.height=h;fn(c.getContext('2d'),w,h);return c}
function scallopTex(THREE,base,edge,hi,rep){const c=cv(256,256,(g,w,h)=>{g.fillStyle=base;g.fillRect(0,0,w,h);const s=10;for(let r=-1;r<h/s*1.6+1;r++){const y=r*s*.62;for(let x=(r%2?s/2:0)-s;x<w+s;x+=s){const gr=g.createRadialGradient(x,y,1,x,y,s*.62);gr.addColorStop(0,hi);gr.addColorStop(.8,base);gr.addColorStop(1,edge);g.fillStyle=gr;g.beginPath();g.arc(x,y,s*.62,0,Math.PI);g.fill()}}});const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(rep[0],rep[1]);return t}
function featherTex(THREE,base,tip,shaft){const c=cv(256,48,(g,w,h)=>{const gr=g.createLinearGradient(0,0,w,0);gr.addColorStop(0,base);gr.addColorStop(1,tip);g.fillStyle=gr;g.fillRect(0,0,w,h);g.strokeStyle='rgba(0,0,0,.16)';g.lineWidth=1;for(let x=4;x<w;x+=5){g.beginPath();g.moveTo(x,h/2);g.lineTo(x+10,0);g.moveTo(x,h/2);g.lineTo(x+10,h);g.stroke()}const eg=g.createLinearGradient(0,0,0,h);eg.addColorStop(0,'rgba(0,0,0,.35)');eg.addColorStop(.2,'rgba(0,0,0,0)');eg.addColorStop(.8,'rgba(0,0,0,0)');eg.addColorStop(1,'rgba(0,0,0,.35)');g.fillStyle=eg;g.fillRect(0,0,w,h);g.strokeStyle=shaft;g.lineWidth=2;g.beginPath();g.moveTo(0,h/2);g.lineTo(w*.94,h/2);g.stroke()});return new THREE.CanvasTexture(c)}
window.NkBird3D=function(THREE,opt){
const T=opt.T;const S=640;
const r=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});r.setPixelRatio(1);r.setSize(S,S,false);r.setClearColor(0x000000,0);
const scene=new THREE.Scene();const cam=new THREE.PerspectiveCamera(30,1,.1,60);cam.position.set(.2,3.4,7.8);cam.lookAt(0,.05,0);
scene.add(new THREE.HemisphereLight(0xEAFCFC,0x0C1618,.35));
const key=new THREE.DirectionalLight(0xffffff,.9);key.position.set(5,7,3);scene.add(key);
const rim=new THREE.DirectionalLight(0x44E0E2,1.1);rim.position.set(-5,3,-4);scene.add(rim);
const fill=new THREE.DirectionalLight(0x8CEDED,.35);fill.position.set(3,-1,5);scene.add(fill);
const DS=THREE.DoubleSide;
const SM=(o)=>new THREE.MeshStandardMaterial(Object.assign({roughness:.62,metalness:0},o));
const mBody=SM({map:scallopTex(THREE,'#1DB1BA','#106570','#44E0E2',[14,5]),roughness:.7});
const mHead=SM({color:0x1DB1BA,roughness:.7});
const mFace=SM({color:0xEAFCFC,roughness:.8});
const mIris=SM({color:0xBAF4F4,roughness:.15});const mPupil=new THREE.MeshBasicMaterial({color:0x020404});
const irisTex=new THREE.CanvasTexture(cv(256,256,(g,w,h)=>{const cx=w/2,cy=h/2;const gr=g.createRadialGradient(cx,cy,20,cx,cy,128);gr.addColorStop(0,'#5A4A1E');gr.addColorStop(.22,'#C9B25A');gr.addColorStop(.55,'#F2E6A8');gr.addColorStop(.85,'#E9DA8E');gr.addColorStop(1,'#7A6A32');g.fillStyle=gr;g.fillRect(0,0,w,h);for(let i=0;i<180;i++){const a=Math.random()*Math.PI*2,r0=26+Math.random()*20,r1=70+Math.random()*55;g.strokeStyle='rgba('+(Math.random()<.5?'120,95,40':'255,250,220')+','+(.15+Math.random()*.25)+')';g.lineWidth=.8+Math.random()*1.4;g.beginPath();g.moveTo(cx+Math.cos(a)*r0,cy+Math.sin(a)*r0);g.lineTo(cx+Math.cos(a+.05)*r1,cy+Math.sin(a+.05)*r1);g.stroke()}const rg=g.createRadialGradient(cx,cy,100,cx,cy,128);rg.addColorStop(0,'rgba(60,45,15,0)');rg.addColorStop(1,'rgba(60,45,15,.85)');g.fillStyle=rg;g.fillRect(0,0,w,h)}));
const mIrisT=new THREE.MeshStandardMaterial({map:irisTex,roughness:.4,metalness:0});const mSclera=SM({color:0x1A2224,roughness:.4});const mLid=SM({color:0x1E2A2C,roughness:.55});const mCornea=new THREE.MeshPhysicalMaterial({color:0xffffff,transparent:true,opacity:.18,roughness:.02,metalness:0,clearcoat:1,clearcoatRoughness:0});const mGlint=new THREE.MeshBasicMaterial({color:0xffffff});
const mBeak=SM({color:0x132022,roughness:.32});const mLeg=SM({color:0x2A3B3E,roughness:.8});
const fm=(b,t,s)=>SM({map:featherTex(THREE,b,t,s),side:DS});
const mCov=fm('#1DB1BA','#15828D','rgba(234,252,252,.45)'),mCov2=fm('#15828D','#106570','rgba(234,252,252,.4)'),mSec=fm('#106570','#0C4A52','rgba(186,244,244,.5)'),mPri=fm('#0C4A52','#083238','rgba(140,237,237,.5)'),mTail=fm('#8CEDED','#44E0E2','rgba(16,101,112,.5)');
const mesh=(g,m,p,rot,sc)=>{const o=new THREE.Mesh(g,m);if(p)o.position.set(...p);if(rot)o.rotation.set(...rot);if(sc)o.scale.set(...sc);return o};
const fGeo={};function feather(L,w){const k=L+'_'+w;if(fGeo[k])return fGeo[k];const s=new THREE.Shape();s.moveTo(0,-w*.42);s.quadraticCurveTo(-L*.45,-w*.62,-L*.86,-w*.38);s.quadraticCurveTo(-L*1.02,-w*.05,-L*.96,w*.12);s.quadraticCurveTo(-L*.8,w*.5,-L*.45,w*.52);s.quadraticCurveTo(-L*.15,w*.5,0,w*.42);s.closePath();const g=new THREE.ShapeGeometry(s,6);const p=g.attributes.position,uv=g.attributes.uv;for(let i=0;i<p.count;i++)uv.setXY(i,-p.getX(i)/L,p.getY(i)/w+.5);g.rotateX(-Math.PI/2);return fGeo[k]=g}
const bird=new THREE.Group();scene.add(bird);const body=new THREE.Group();bird.add(body);
const HC=new THREE.Vector3(1.0,.46,0),HR=.45;
const bodyF=(x,y,z)=>{const tp=1-.32*Math.max(0,-x)/1.15;const qx=x/1.15,qy=(y+.02*x)/(.6*tp),qz=z/(.56*tp);return (Math.sqrt(qx*qx+qy*qy+qz*qz)-1)*.55};
const headF=(x,y,z)=>{const dx=(x-HC.x)/1.08,dy=y-HC.y,dz=(z-HC.z)/.94;return Math.sqrt(dx*dx+dy*dy+dz*dz)-HR};
const smin=(a,b,k)=>{const h=Math.max(k-Math.abs(a-b),0)/k;return Math.min(a,b)-h*h*k*.25};
const F=(x,y,z)=>smin(bodyF(x,y,z),headF(x,y,z),.32);
const bg=new THREE.SphereGeometry(1,96,64);bg.rotateZ(Math.PI/2);{const P=bg.attributes.position;for(let i=0;i<P.count;i++){const dx=P.getX(i),dy=P.getY(i),dz=P.getZ(i);let t=0;while(t<3&&F(dx*t,dy*t,dz*t)<0)t+=.02;let lo=t-.02,hi=t;for(let k=0;k<10;k++){const m=(lo+hi)/2;F(dx*m,dy*m,dz*m)<0?lo=m:hi=m}P.setXYZ(i,dx*hi,dy*hi,dz*hi)}bg.computeVertexNormals()}
body.add(mesh(bg,mBody));
const neck=new THREE.Group();body.add(neck);
const head=new THREE.Group();head.position.copy(HC);neck.add(head);
const eyes=[];[1,-1].forEach(s=>{head.add(mesh(new THREE.SphereGeometry(.2,24,18),SM({color:0xBAF4F4,roughness:.85}),[.2,.05,.27*s],null,[1.1,.8,.5]));const e=new THREE.Group();e.position.set(.27,.08,.352*s);e.rotation.y=s>0?.42:Math.PI-.42;head.add(e);const eo=new THREE.Group();e.add(eo);eo.add(mesh(new THREE.TorusGeometry(.068,.016,10,32),mLid));eo.add(mesh(new THREE.SphereGeometry(.066,28,20),mSclera,[0,0,-.03],null,[1,1,.55]));eo.add(mesh(new THREE.CircleGeometry(.058,40),mIrisT,[0,0,.004]));eo.add(mesh(new THREE.CircleGeometry(.024,28),mPupil,[0,0,.006]));eo.add(mesh(new THREE.SphereGeometry(.064,28,20,0,Math.PI*2,0,Math.PI/2),mCornea,[0,0,-.012],[Math.PI/2,0,0],[1,1,.32]));eo.add(mesh(new THREE.CircleGeometry(.011,12),mGlint,[.018,.02,.03]));eo.add(mesh(new THREE.CircleGeometry(.005,10),mGlint,[-.02,-.016,.028]));eyes.push(eo)});
const up=new THREE.Shape();up.moveTo(0,.13);up.bezierCurveTo(.2,.18,.34,.06,.33,-.2);up.lineTo(.29,-.16);up.bezierCurveTo(.27,-.04,.16,-.03,0,-.05);up.closePath();
const ug=new THREE.ExtrudeGeometry(up,{depth:.12,bevelEnabled:true,bevelThickness:.05,bevelSize:.035,bevelSegments:4,curveSegments:16});ug.translate(0,0,-.06);
const beak=new THREE.Group();beak.position.set(.4,-.04,0);head.add(beak);beak.add(mesh(ug,mBeak));
const lo=new THREE.Shape();lo.moveTo(0,-.05);lo.quadraticCurveTo(.16,-.05,.2,-.15);lo.lineTo(.02,-.16);lo.closePath();
const lg=new THREE.ExtrudeGeometry(lo,{depth:.1,bevelEnabled:true,bevelThickness:.03,bevelSize:.025,bevelSegments:3,curveSegments:10});lg.translate(0,0,-.05);beak.add(mesh(lg,mBeak));
const tail=new THREE.Group();tail.position.set(-.98,.06,0);body.add(tail);const tf=[];
for(let i=0;i<10;i++){const g=new THREE.Group();g.position.y=i*.004;g.add(mesh(feather(.78,.2),mTail));tail.add(g);tf.push(g)}
const legs=new THREE.Group();legs.position.set(.12,-.5,0);body.add(legs);
[.15,-.15].forEach(z=>{legs.add(mesh(new THREE.CylinderGeometry(.065,.05,.34,10),mLeg,[0,-.17,z]));[[.16,.25],[.16,-.25],[-.12,.3],[-.12,-.3]].forEach(([x,a])=>legs.add(mesh(new THREE.CylinderGeometry(.03,.022,Math.abs(x)*1.2,8),mLeg,[x*.5,-.36,z+a*.08],[0,a,Math.PI/2])))});
function wing(sign){const sh=new THREE.Group();sh.position.set(.32,.3,.4*sign);body.add(sh);const fl=new THREE.Group();sh.add(fl);
const cov=[];for(let r=0;r<3;r++)for(let i=0;i<7;i++){const g=new THREE.Group();g.position.set(.12-r*.13,.05+.012*(3-r),(.06+i*.14)*sign);g.add(mesh(feather(.42+r*.06,.24),r?mCov2:mCov));fl.add(g);cov.push([g,r,i])}
const sec=[];for(let i=0;i<9;i++){const g=new THREE.Group();g.position.set(-.12,0,(.06+i*.11)*sign);g.add(mesh(feather(.82,.24),mSec));fl.add(g);sec.push(g)}
const el=new THREE.Group();el.position.set(0,0,1.0*sign);fl.add(el);
const pc=[];for(let i=0;i<5;i++){const g=new THREE.Group();g.position.set(.08,.04,(.04+i*.1)*sign);g.add(mesh(feather(.4,.17),mCov2));el.add(g);pc.push(g)}
const pri=[];for(let i=0;i<9;i++){const L=.82+i*.05;const g=new THREE.Group();g.position.set(-.04,-.006*i,(.05+i*.065)*sign);g.add(mesh(feather(L,.21),mPri));el.add(g);pri.push(g)}
return {sh,fl,el,cov,sec,pc,pri,sign}}
const W=[wing(1),wing(-1)];
const st={up:0,wave:0,wph:0,elbow:0,fold:0,splay:.5,pitch:0,roll:0,yaw:-1,legs:0,head:0,headY:0,tail:0,breath:0,blink:1};
const pose=()=>{bird.rotation.set(0,st.yaw,0);body.rotation.set(st.roll,0,st.pitch+st.up);body.position.y=st.up*.35;body.scale.set(1,1+st.breath,1+st.breath);
W.forEach(w=>{const s=w.sign,wv=s>0?st.wave:0,f=st.fold*(1-wv*.9);const fp=st.flap*(1-wv)+wv*(1.05+.12*Math.sin(st.wph));w.sh.rotation.set(0,-s*f*1.42+s*wv*.5,0);w.fl.rotation.set(-s*fp,0,s*f*.12-wv*.3);w.sh.position.y=.3-f*.06;w.el.rotation.set(-s*(st.elbow+wv*(.45+.4*Math.sin(st.wph))),-s*f*.12,0);
w.sec.forEach((g,i)=>g.rotation.set(0,s*(.1+i*.025+f*1.3),0));
w.cov.forEach(([g,rw,i])=>g.rotation.set(0,s*(.15+i*.02+f*1.3),0));
w.pc.forEach((g,i)=>g.rotation.set(0,s*(.5-i*.06+f*1.0),0));
w.pri.forEach((g,i)=>{const open=1.25-i*(.1+(st.splay+wv*.8)*.05);g.rotation.set(0,s*(open*(1-f)+(1.38+i*.008)*f),0)})});
tf.forEach((g,i)=>g.rotation.set(0,(i-4.5)*.045*(1+st.tail*3),0));tail.rotation.set(0,0,st.tail);
legs.scale.set(1,Math.max(.01,st.legs),1);legs.rotation.z=-st.up;head.rotation.set(0,0,-st.up*1.05+st.head*2);legs.visible=st.legs>.02;neck.rotation.set(0,0,0);bird.rotation.y+=st.headY*.25;body.rotation.z+=st.head*.3;eyes.forEach(e=>e.scale.set(1,st.blink,1))};
let ph=0,lt=0;const L=(a,b,u)=>a+(b-a)*u,C=x=>Math.max(0,Math.min(1,x)),E=x=>1-Math.pow(1-x,3);
return {kind:'3d',el:r.domElement,w:S,h:S,update(t){const dt=Math.min(50,t-lt);lt=t;st.breath=0;st.blink=1;
if(t<T.fly){const u=t/T.fly;ph+=dt/1000*2*Math.PI*(4.4-1.3*u);const sn=Math.sin(ph);st.flap=.12+.92*sn;st.elbow=.4*Math.max(0,-sn);st.splay=.3+.7*Math.max(0,-Math.cos(ph));st.fold=0;st.legs=0;st.pitch=.06-.05*sn-.08*u;st.roll=.16*Math.sin(t/600)*(1-u);st.yaw=L(-1.05,-.8,E(u));st.head=-.04*sn;st.headY=0;st.tail=.05*Math.sin(ph+1)}
else if(t<T.land){const u=(t-T.fly)/(T.land-T.fly);
if(u<.45){ph+=dt/1000*2*Math.PI*3.1;const sn=Math.sin(ph);st.flap=.22+1.0*sn;st.elbow=.35*Math.max(0,-sn);st.splay=.85;st.pitch=L(-.02,.42,u/.45);st.fold=0;st.tail=.25*(u/.45)}
else{const f=E((u-.45)/.55);st.fold=f;st.flap=L(st.flap,-.14,Math.min(1,dt*.012+f*.1));st.elbow=L(st.elbow,0,.15);st.splay=L(st.splay,0,.12);st.pitch=L(.42,0,f);st.tail=L(.25,0,f)}
st.legs=C(u/.4);st.roll=L(st.roll,0,.1);st.yaw=L(-.8,-.6,E(u));st.head=0}
else{const u=C((t-T.land)/(T.pause-T.land));const wu=C((t-T.hi)/(T.meet-T.hi));st.wave=t>T.hi&&t<T.meet?Math.pow(Math.sin(wu*Math.PI),.5):0;st.wph=(t-T.hi)/95;st.fold=1;st.flap=-.14;st.elbow=0;st.splay=0;st.legs=1;st.pitch=0;st.roll=0;{const tin=E(C((t-T.land)/450)),tout=E(C((t-(T.pause-500))/450));const face=-Math.PI/2+.08;st.yaw=L(L(-.6,face,tin),-.35,tout);st.up=.95*tin*(1-tout);}if(t<T.land||t>=T.pause)st.up=0;st.head=t>T.meet?Math.sin((t-T.meet)/180)*.06:Math.sin(u*Math.PI*4)*.05;st.headY=0;st.pitch=t>T.meet?-.05*Math.sin(C((t-T.meet)/600)*Math.PI):0;st.tail=Math.sin(u*Math.PI*2)*.04;st.breath=Math.sin(t/260)*.012;const bk=Math.abs(u-.55);st.blink=bk<.04?.1:1}
pose();r.render(scene,cam)}}};
})();

document.getElementById("toggle").addEventListener("click", function(event){
  event.preventDefault();
  // document.getElementById("logo").classList.toggle("logoopen");
  document.getElementById("nav-header").classList.toggle("logoopen");
  document.getElementById("nav-header").classList.toggle("open");
  // document.getElementById('body').classList.toggle("overflow-hidden");
});

var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById('nav-background').style.display="none";
     document.getElementById("nav-header").classList.remove("header-in");
     document.getElementById("nav-header").style.opacity = 0;
   } else {
     document.getElementById('nav-background').style.display="table";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").classList.add("solid");
     document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
     }
   }
   lastScrollTop = currentScroll;
}, false);

window.addEventListener('load',function(e){
  e.preventDefault();
  var dfm = document.createDocumentFragment();
  var nameCoders = ['','Marilu Llamocca','Maria  Vilchez','Glisse Lisbeth','Ana Durand ','Ruth Abigail ',
                    'Leslie Avendaño','Flor Tello','Miriam Peralta','Fiorella Quispe ','Annia Flores ',
                    'Leidy Maldonado','Rosario Felix T','Liliana Peña','Miriam Mendoza ',
                    'Flor Condori','Naomi Villanueva','Luz Gutierrez','Karin Alejo',
                    'Michelle More','Fiorella Cisneros','Betsi Loayza','Mariel Lara',
                    'Ruth Silva','Erika Vidal','Angie Condor','Stephanie Hiyagon',
                    'Grecia Rayme','Cindy Mendoza ','Mitchell Rodríguez','Maria Grecia Cutipa',
                    'Geraldine Chauca','Mary Castillo','Nadia Cuadros','Elizabeth Condori','Rocio Emma Tapia',
                    'Neiza Luz Nuñez','ARANTZA BURGA','Schelsen Majuan','Sandra Solorzano','Yelitza Choque',
                    'Katherine Ortega','Maricarmen Rojas','Ariana Cabana','Nathaly Pacheco',
                    'Janine Vega','WENDY  REYES ','Milagros Gonzales','Jenny Velasquez',
                    'Dana Franco ','Maria Jave','AYDA Sulca ','Magali Zambrano ','Flor Retamozo '];
  for (var i = 1; i < nameCoders.length; i++) {
    dfm.appendChild(crearIMG('assets/img/students/'+i+'.png',nameCoders[i]));
  }
  document.getElementById('coders').appendChild(dfm);
});
function crearIMG(url,name){
  var li = document.createElement('li');
  li.setAttribute('class','box');
  var div = document.createElement('div');
  div.setAttribute('class','grid');
  var figure = document.createElement('figure');
  var img = document.createElement('img');
  img.setAttribute('src',url);
  img.setAttribute('class','name-coders');
  img.setAttribute('alt',name);
  var figcaption = document.createElement('figcaption');
  figcaption.setAttribute('class','center');
  var span = document.createElement('span');
  span.textContent = name;
  figcaption.appendChild(span);
  figure.appendChild(img);
  figure.appendChild(figcaption);
  div.appendChild(figure);
  li.append(div);
  return li;
}

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
  var nameCoders = ['','Fiorella Cisneros','Lourdes Vilchez','Leydi Maldonado','Yessenia Huamán',
                    'Miriam Mendoza', 'Elizabeth Condori', 'Arantza Burga', 'Grecia Rayme',
                    'Janine Vega', 'Rosario Félix', 'Daguiana Revolledo', 'Jenny Velasquez',
                    'Nadia Cuadros', 'Michelle More', 'Marilu Llamoca', 'Mariel García',
                    'Fiorella Cisneros', 'Geraldine Chauca', 'Yelitza Choque',
                    'Stephanie Hiyagon', 'Rocio Tapia', 'Dana Franco', 'Flor Retamozo',
                    'Nathaly Pacheco', 'Ericka Vidal', 'Katherine Ortega', 'Brilly Majuan',
                    'Flor Tello', 'Leslie Avendaño', 'Cindy Mendoza', 'Annia Flores',
                    'Betsi Loayza', 'Ayda Sulca', 'Milagros Gutierrez', 'Nakarid Jave',
                    'Angie Condor', 'Maricarmen Rojas', 'Ariana Cabana', 'Flor Condori',
                    'Mitchell Rodríguez', 'Naomi Villanueva', 'Mary Castillo', 'Miriam Peralta',
                    'Karin Alejo', 'Liliana Peña', 'Ruth Salvador', 'Marilu Llamoca', 'Wendy Reyes',
                    'Cinthya Quispe','Maria Grecia Cutipa', 'Ana Durand', 'Glisse Jorge', 'Neiza Nuñez',
                    'Sandra Solorzano'];
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

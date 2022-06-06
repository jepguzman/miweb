<script>
export default {
    name: 'BlogContenidos',
    data () {
      return {
        titulo:"Titulo desde BlogContenidos",
        items: []
      }
    },
created(){
  this.cambiaTitulo();
  this.allRecords();
},  
methods:{
  cambiaTitulo(){
      this.titulo = 'Sitio WEB CBTis 169 "JOSE MARIA MORELOS" '
        },
  allRecords: async function(){						
					//	const response = await fetch('https://cbtis169.net/api/contenidos.json',{mode:'cors'});
						this.items= [{
      "id": "22",
      "titulo": "Examen de Ingreso",
      "tcolor": "text-info",
      "ticono": "fa fa-folder",
      "contenido": "<p class=\"MsoNormal\" align=\"center\" style=\"text-align: center;\"><img src=\"https://cbtis169.net/media/ingreso.jpg\" class=\"img-fluid\"></p>",
      "editor": "Administrador",
      "categoria": "Noticias",
      "display": "1",
      "updated": "2022-05-27 10:51:54",
      "created": "2022-05-27 10:11:04",
      "posted": "2022-05-27 10:59:42",
      "deleted": "0"
    },
    {
      "id": "21",
      "titulo": "Guía de Estudios",
      "tcolor": "text-warning",
      "ticono": "fa fa-folder",
      "contenido": "<img src=\"https://cbtis169.net/media/GUIA.png\"/><br><br>\r\n<a class=\"btn btn-success link\" target=\"_blank\" href=\"https://cbtis169.net/media/GUIA-2022.pdf\">\r\nDescárgala aquí\r\n</a>",
      "editor": "Administrador",
      "categoria": "Noticias",
      "display": "1",
      "updated": "2022-04-07 14:35:24",
      "created": "2022-04-07 14:35:24",
      "posted": "2022-04-07 14:35:24",
      "deleted": "0"
    }];
						console.log(this.items);						
					} ,//fin allRecords
}
}




</script>

<template>
  <h1>{{titulo}}</h1>  

<!--- inicio card--->
	<div class="" v-for="item in items">
		<div class="card-header border">
		<h2 v-bind:class="item.tcolor"> <i v-bind:class="item.ticono" ></i> {{item.titulo}} </h2>
		</div>
		<div class="card-body card text-center">
			<ul v-html="item.contenido" ></ul>
					<footer class="blockquote-footer text-right">Fecha de publicación: <cite title="Source Title">{{item.created}}</cite></footer>
    	</div>
	</div>
	<!--- fin card--->

</template>

<style scoped>
</style>

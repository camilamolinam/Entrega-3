// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable();
});

const tblValores=document.getElementById("tbValores")
function cargartabla(){
  axios.get("http://ucamp.alumnos.dev4humans.com.mx/Main/endpoint_ingresos_mensuales").then(resultado => {
        console.log(resultado);
      tblValores.innerHTML="";
      for(const valor of resultado.data.data){
        let tr =`<tr>
        <td>${valor.id}</td>
        <td>${valor.nombre}</td>
        <td>${valor.monto}</td>
       </tr> `
       tblValores.innerHTML+=tr;
      }

})
}
cargartabla()

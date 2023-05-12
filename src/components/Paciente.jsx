import Swal from 'sweetalert2'

export const Paciente = ({ paciente, setPaciente, eliminarPaciente}) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;
  const handleEliminarPaciente=()=>{
     Swal.fire({
      title:"Advertencia",
      text:"deseas eliminar este paciente?",
      icon:"question",
      showDenyButton:"No",
      confirmButtonText:"Si"

    }).then(response=>{
      if (response.isConfirmed) {
      Swal.fire("Exito", "El paciente se elimino correctamente", "success")
      eliminarPaciente(id)
    }else if (response.isDenied) {
      Swal.fire("Informacion", "El paciente NO fue eliminado", "info")
    }
    })
    
  }
  return (
    <div className="mx-5 my-8 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Fecha Alta: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        {" "}
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className=" flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={()=>{setPaciente(paciente)}}
        >
          editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminarPaciente}
        >
          eliminar
        </button>
      </div>
    </div>
  );
};

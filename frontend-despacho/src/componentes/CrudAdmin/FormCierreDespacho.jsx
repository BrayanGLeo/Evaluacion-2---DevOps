import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

export const FormCierreDespacho = ({ despacho, onClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("onSubmit ejecutado");
    const jsonData = {
      intento: data.intento,
      despachado: data.despachado,
    };

    console.log("Datos del formulario:", jsonData);

    try {
      await axios.put(
        `https://innovatech-alb-1152074516.us-east-1.elb.amazonaws.com:8081/api/v1/despachos/${despacho.idDespacho}`,
        jsonData,
        {
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
      }
        }
      );
      Swal.fire({
        title: "Despacho modificado 🛻!",
        text: "El despacho ha sido modificado exitosamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
    onClose();
  };

  return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center text-center px-24 text-xl"
      >
        <div className="mx-auto text-3xl font-bold mb-10 text-teal-600">
          Editar y cierre de despacho
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2" htmlFor="idDespacho">ID despacho</label>
          <input
            id="idDespacho"
            disabled={true}
            type="text"
            placeholder="Ingresa fecha de despacho"
            className="border border-gray-300 rounded-lg block w-full p-1 text-slate-400"
            value={despacho.idDespacho}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2" htmlFor="fechaDespacho">Fecha despacho</label>
          <input
            id="fechaDespacho"
            type="date"
            placeholder="Elige patente de camión"
            className="border border-gray-300 rounded-lg block w-full text-slate-400 p-1"
            value={despacho.fechaDespacho}
            disabled={true}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2" htmlFor="patenteCamion">Patente Camión</label>
          <input
            id="patenteCamion"
            type="text"
            disabled={true}
            value={despacho.patenteCamion}
            className="border border-gray-300 rounded-lg block w-full text-slate-400 p-1"
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2" htmlFor="intento">Intentos de entrega</label>
          <input
            id="intento"
            type="number"
            defaultValue={despacho.intento}
            className="border border-gray-300 rounded-lg block w-full  p-1"
            {...register("intento", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2" htmlFor="despachado">Despacho entregado</label>
          <select
            id="despachado"
            defaultValue={false}
            className="border border-gray-300 rounded-lg block w-full  p-1"
            {...register("despachado", { required: true })}
          >
            <option value={false}>Despacho abierto</option>
            <option value={true}>Cerrar despacho</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2" htmlFor="idCompra">ID Compra</label>
          <input
            id="idCompra"
            type="text"
            className="border border-gray-300 rounded-lg block w-full text-slate-400 p-1"
            disabled={true}
            value={despacho.idCompra}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2" htmlFor="direccionCompra">Dirección Compra</label>
          <input
            id="direccionCompra"
            type="text"
            className="border border-gray-300 rounded-lg block w-full text-slate-400 p-1"
            disabled={true}
            value={despacho.direccionCompra}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2" htmlFor="valorCompra">Valor Compra</label>
          <input
            id="valorCompra"
            type="text"
            className="border border-gray-300 rounded-lg block w-full text-slate-400 p-1"
            disabled={true}
            value={despacho.valorCompra}
          />
        </div>

        <button
          className="py-6 px-14 rounded-lg bg-teal-600 text-white font-bold mb-14"
          type="submit"
        >
          Modificar Despacho
        </button>
      </form>
  );
};
